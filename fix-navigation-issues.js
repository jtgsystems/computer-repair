const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Read the link checker report to identify issues
function readLinkCheckerReport() {
  console.log('Reading link checker report...');
  const reportPath = path.join(__dirname, 'link-checker-report.md');
  
  if (!fs.existsSync(reportPath)) {
    console.error(`Report file not found: ${reportPath}`);
    return [];
  }
  
  const content = fs.readFileSync(reportPath, 'utf8');
  console.log(`Report file size: ${content.length} bytes`);
  
  const issues = [];
  // Updated regex to better match the report format
  const issueRegex = /### Issue \d+:.*?\n- \*\*File\*\*: (.*?)\n- \*\*Element Type\*\*: (.*?)\n.*?\n- \*\*Element\*\*: `(.*?)`/gs;
    let match;
  while ((match = issueRegex.exec(content)) !== null) {
    const filePath = match[1];
    const elementType = match[2];
    const elementSnippet = match[3];
    
    // Extract relative path - handle different path formats safely
    let relativePath;
    try {
      // Try the Windows-specific split first
      if (filePath.includes('computer-repair\\')) {
        relativePath = filePath.split('computer-repair\\')[1].replace(/\\/g, '/');
      } 
      // Fallback to just using the filename if the split doesn't work
      else {
        relativePath = filePath.split('\\').pop().replace(/\\/g, '/');
      }
    } catch (error) {
      console.error('Error extracting relative path:', error);
      relativePath = filePath.replace(/\\/g, '/'); // Just use the whole path if needed
    }
    
    issues.push({
      filePath: relativePath,
      elementType,
      elementSnippet: elementSnippet.trim().substring(0, 100) // Trim and limit length for readability
    });
  }
  
  console.log(`Found ${issues.length} issues in the report.`);
  if (issues.length > 0) {
    console.log('Sample issues:');
    issues.slice(0, 3).forEach(issue => {
      console.log(`- ${issue.filePath}: ${issue.elementType}`);
    });
  }
  
  return issues;
}

// Fix buttons in a file
function fixButtonsInFile(filePath) {
  console.log(`Fixing navigation issues in: ${filePath}`);
  
  try {
    // Get absolute path
    const fullPath = path.join(__dirname, filePath);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      return false;
    }
    
    // Read the file content
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if the file already imports Link
    const hasLinkImport = content.includes("import Link from 'next/link'") || 
                          content.includes('import Link from "next/link"');
    
    // Add Link import if it doesn't exist
    if (!hasLinkImport && content.includes('import') && !content.includes('Link from "next/link"')) {
      content = content.replace(
        /import\s+.*\s+from\s+["'].*["']/,
        (match) => `${match}\nimport Link from "next/link"`
      );
    }
    
    // Fix buttons without asChild prop
    // Pattern 1: Button without asChild that should have it
    content = content.replace(
      /<Button\s+(?!.*asChild)([^>]*?)>((?:\s|.)*?)<\/Button>/g,
      (match, attributes, children) => {
        // Skip replacement if the button seems to be an action button not for navigation
        if (
          children.includes('onClick={') || 
          attributes.includes('onClick={') || 
          children.includes('type="submit"') || 
          attributes.includes('type="submit"')
        ) {
          return match;
        }
        
        return `<Button ${attributes} asChild>${children}</Button>`;
      }
    );
    
    // Pattern 2: Button with asChild but no Link or anchor wrapper
    content = content.replace(
      /<Button\s+([^>]*?)asChild([^>]*?)>\s*(?!<Link|<a)(.*?)\s*<\/Button>/g,
      (match, attrsBefore, attrsAfter, content) => {
        // If content contains a clear text that should be a link
        if (
          content.includes('Contact') || 
          content.includes('Explore') || 
          content.includes('Schedule') ||
          content.includes('Learn') ||
          content.includes('Read') ||
          content.includes('View') ||
          content.includes('See') ||
          content.includes('Get') ||
          content.includes('Find')
        ) {
          // Determine the appropriate href based on content
          let href = '/';
          if (content.includes('Contact') || content.includes('Schedule')) {
            href = '/contact';
          } else if (content.includes('Explore') || content.includes('Services')) {
            if (content.toLowerCase().includes('business')) {
              href = '/business';
            } else {
              href = '/services';
            }
          } else if (content.includes('About')) {
            href = '/about';
          }
          
          return `<Button ${attrsBefore}asChild${attrsAfter}>\n<Link href="${href}">\n${content}\n</Link>\n</Button>`;
        }
        
        // If it's not clearly a navigation element, return unchanged
        return match;
      }
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(fullPath, content, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error);
    return false;
  }
}

// Main function to fix all navigation issues
async function fixNavigationIssues() {
  console.log('Starting to fix navigation issues...');
  
  // Read issues from report
  const issues = readLinkCheckerReport();
  
  if (issues.length === 0) {
    console.log('No navigation issues found in the report.');
    return;
  }
  
  console.log(`Found ${issues.length} navigation issues to fix.`);
  
  // Get unique file paths
  const uniqueFilePaths = [...new Set(issues.map(issue => issue.filePath))];
  
  // Fix issues in each file
  let successCount = 0;
  
  for (const filePath of uniqueFilePaths) {
    const success = fixButtonsInFile(filePath);
    if (success) {
      successCount++;
    }
  }
  
  console.log('\n--- RESULTS ---');
  console.log(`Successfully fixed navigation issues in: ${successCount} files`);
  console.log('Fix complete!');
}

// Run the main function
fixNavigationIssues();
