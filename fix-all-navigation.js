const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const componentsDir = path.join(__dirname, 'components');
const appDir = path.join(__dirname, 'app');
const businessPages = path.join(appDir, 'business', '**', 'page.tsx');
const servicePages = path.join(appDir, 'services', '**', 'page.tsx');

// Primary navigation components to check
const navComponents = [
  'components/ModernMenu.tsx',
  'components/NewMenu.tsx',
  'components/ServiceCTA.tsx',
  'components/ServiceHero.tsx'
];

// Fix Button + Link issues
function fixButtonLinkComponents(filePath) {
  console.log(`Fixing navigation in: ${filePath}`);
  
  // Read the file
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;
  
  // Check if the file already imports Link
  const hasLinkImport = content.includes("import Link from 'next/link'") || 
                        content.includes('import Link from "next/link"');
  
  // Add Link import if it doesn't exist
  if (!hasLinkImport && content.includes('import')) {
    content = content.replace(
      /import\s+.*\s+from\s+["'].*["']/,
      (match) => `${match}\nimport Link from "next/link"`
    );
  }
  
  // Fix 1: Button components without asChild prop
  content = content.replace(
    /<Button\s+(?!.*asChild)([^>]*?)(className=["'][^"']*?["'])?([^>]*?)>\s*([^<]*?)<\/Button>/g,
    (match, before, className, after, text) => {
      // Skip if it has onClick or is a submit button
      if (match.includes('onClick=') || match.includes('type="submit"')) {
        return match;
      }
      
      // Determine href based on text content
      let href = '/';
      if (text.includes('Contact') || text.includes('Consultation')) {
        href = '/contact';
      } else if (text.includes('Services') || text.includes('Explore')) {
        href = text.toLowerCase().includes('business') ? '/business' : '/services';
      } else if (text.includes('About')) {
        href = '/about';
      }
      
      return `<Button ${before || ''} ${className || ''} ${after || ''} asChild>\n  <Link href="${href}">${text}</Link>\n</Button>`;
    }
  );
  
  // Fix 2: Fix navigation menu links in mobile menus
  content = content.replace(
    /<a\s+(?!.*href=["']tel:)([^>]*?)href=["']([^"']+)["']([^>]*?)>\s*([^<]*?)<\/a>/g,
    (match, before, href, after, text) => {
      // Skip if it's already within a Link component
      if (match.includes('onClick={handleNavClick') || match.includes('onClick={closeMenu}')) {
        return match;
      }
      
      return `<Link href="${href}" ${before} ${after}>${text}</Link>`;
    }
  );
  
  // Only write if we've made changes
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Fixed navigation issues in: ${filePath}`);
    return true;
  }
  
  console.log(`No navigation issues found in: ${filePath}`);
  return false;
}

// Fix navigation in business and service pages
function fixPageNavigation(pattern) {
  const files = glob.sync(pattern);
  let fixedCount = 0;
  
  for (const file of files) {
    const relativePath = path.relative(__dirname, file);
    const fixed = fixButtonLinkComponents(relativePath);
    if (fixed) fixedCount++;
  }
  
  return fixedCount;
}

// Main function
async function fixAllNavigation() {
  console.log('==========================================');
  console.log('STARTING COMPREHENSIVE NAVIGATION FIX');
  console.log('==========================================');
  let fixedCount = 0;
  
  // Fix navigation components
  console.log('\nFIXING MAIN NAVIGATION COMPONENTS:');
  console.log('------------------------------------------');
  for (const component of navComponents) {
    try {
      console.log(`\nChecking ${component}...`);
      const fixed = fixButtonLinkComponents(component);
      if (fixed) fixedCount++;
    } catch (error) {
      console.error(`Error fixing ${component}:`, error.message);
    }
  }
  
  // Fix business pages
  console.log('\nFixing navigation in business pages...');
  fixedCount += fixPageNavigation(businessPages);
  
  // Fix service pages
  console.log('\nFixing navigation in service pages...');
  fixedCount += fixPageNavigation(servicePages);
  
  console.log('\n--- RESULTS ---');
  console.log(`Fixed navigation issues in ${fixedCount} files.`);
  console.log('Navigation fix complete!');
}

// Run the main function
fixAllNavigation();
