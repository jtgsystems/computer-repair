/**
 * Universal Link Checker for React Applications
 * 
 * This script analyzes React components to find all links and buttons,
 * verifying they have proper navigation functionality.
 * 
 * Features:
 * - Scans all React components in a project
 * - Detects buttons, links, and other clickable elements
 * - Verifies proper navigation attributes (href, onClick with navigation, etc.)
 * - Generates a comprehensive report of all interactive elements
 * - Configurable to focus on specific patterns or components
 * - Works with Next.js, React Router, and other React frameworks
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Directories to scan (relative to project root)
  directories: ['components', 'app', 'pages', 'src'],
  
  // File extensions to analyze
  extensions: ['.tsx', '.jsx', '.js', '.ts'],
  
  // Patterns to identify clickable elements (case insensitive)
  buttonTextPatterns: [
    'explore', 'view', 'learn more', 'read more', 'discover', 
    'schedule', 'book', 'contact', 'submit', 'sign up', 'login',
    'register', 'subscribe', 'download', 'get started', 'try'
  ],
  
  // Component types that should have navigation
  componentTypes: [
    'Button', 'Link', 'a', 'button', 'NavLink'
  ],
  
  // Props that indicate navigation capability
  navigationProps: [
    'href', 'to', 'navigate', 'onClick', 'onPress'
  ],
  
  // Output file for the report
  outputFile: 'link-checker-report.md',
  
  // Whether to include component details in the report
  detailedReport: true,
  
  // Exclude patterns (files or directories to skip)
  excludePatterns: [
    'node_modules', '.next', 'out', 'build', 'dist',
    'test', 'tests', '__tests__', '__mocks__'
  ]
};

// Data structures to store results
const results = {
  totalFiles: 0,
  totalComponents: 0,
  totalLinks: 0,
  totalButtons: 0,
  totalClickableElements: 0,
  brokenLinks: [],
  potentialIssues: [],
  allElements: []
};

// Logger setup
const logStream = fs.createWriteStream('universal-link-checker.log', {flags: 'w'});
const log = (message) => {
  console.log(message);
  logStream.write(message + '\n');
};

// Function to check if a path should be excluded
const shouldExclude = (itemPath) => {
  return config.excludePatterns.some(pattern => itemPath.includes(pattern));
};

// Function to check if a file is a React component
const isReactComponent = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  return config.extensions.includes(ext);
};

// Function to recursively scan directories
const scanDirectory = (dirPath) => {
  try {
    if (!fs.existsSync(dirPath) || shouldExclude(dirPath)) {
      return;
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (shouldExclude(fullPath)) {
        continue;
      }
      
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (isReactComponent(entry.name)) {
        analyzeComponent(fullPath);
      }
    }
  } catch (error) {
    log(`Error scanning directory ${dirPath}: ${error.message}`);
  }
};

// Function to analyze a React component file
const analyzeComponent = (filePath) => {
  try {
    log(`Analyzing: ${filePath}`);
    results.totalFiles++;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all JSX components that might be clickable
    findClickableElements(content, filePath);
    
  } catch (error) {
    log(`Error analyzing file ${filePath}: ${error.message}`);
  }
};

// Function to find clickable elements in component content
const findClickableElements = (content, filePath) => {
  // Extract component definitions
  const componentMatches = content.match(/(function|const)\s+([A-Za-z0-9_]+)\s*(?:=|:)/g) || [];
  results.totalComponents += componentMatches.length;
  
  // Find all potential clickable elements
  findElementsByType(content, filePath);
  findElementsByText(content, filePath);
  findElementsByProps(content, filePath);
};

// Find elements by component type (Button, Link, etc.)
const findElementsByType = (content, filePath) => {
  for (const type of config.componentTypes) {
    // Match both JSX tags and component usage
    const pattern = new RegExp(`<${type}[^>]*>|<${type}\\s+[^>]*\\/?>`, 'g');
    const matches = content.match(pattern) || [];
    
    for (const match of matches) {
      analyzeElement(match, filePath, `${type} component`);
    }
  }
};

// Find elements by text content that suggests they're clickable
const findElementsByText = (content, filePath) => {
  for (const textPattern of config.buttonTextPatterns) {
    // Case insensitive search for text that might indicate a button or link
    const pattern = new RegExp(`>\\s*${textPattern}[^<]*<\\/`, 'gi');
    const matches = content.match(pattern) || [];
    
    for (const match of matches) {
      // Get surrounding context to better identify the element
      const startIndex = Math.max(0, content.indexOf(match) - 100);
      const endIndex = Math.min(content.length, content.indexOf(match) + match.length + 100);
      const context = content.substring(startIndex, endIndex);
      
      analyzeElement(context, filePath, `Text "${textPattern}"`);
    }
  }
};

// Find elements by navigation-related props
const findElementsByProps = (content, filePath) => {
  for (const prop of config.navigationProps) {
    // Look for navigation props in JSX
    const pattern = new RegExp(`${prop}\\s*=\\s*(?:"|'|{)([^"'}]*)(?:"|'|})`, 'g');
    const matches = content.match(pattern) || [];
    
    for (const match of matches) {
      analyzeElement(match, filePath, `${prop} prop`);
    }
  }
};

// Analyze a potentially clickable element
const analyzeElement = (element, filePath, reason) => {
  results.totalClickableElements++;
  
  // Determine if it's a link or button
  const isLink = element.includes('<a') || 
                element.includes('<Link') || 
                element.includes('href=') || 
                element.includes('to=');
                
  const isButton = element.includes('<button') || 
                  element.includes('<Button') || 
                  element.includes('onClick=') || 
                  element.includes('onPress=');
  
  if (isLink) results.totalLinks++;
  if (isButton) results.totalButtons++;
  
  // Check if the element has proper navigation
  const hasNavigation = config.navigationProps.some(prop => 
    element.includes(`${prop}=`)
  );
  
  // Check for empty or potentially problematic navigation
  const hasEmptyNavigation = element.includes('href=""') || 
                            element.includes("href=''") || 
                            element.includes('href="#"') || 
                            element.includes("href='#'") ||
                            element.includes('to=""') || 
                            element.includes("to=''");
  
  // Store element details
  const elementInfo = {
    element: element.trim().substring(0, 100) + (element.length > 100 ? '...' : ''),
    file: filePath,
    type: isLink ? 'Link' : isButton ? 'Button' : 'Unknown',
    reason,
    hasNavigation,
    hasEmptyNavigation
  };
  
  results.allElements.push(elementInfo);
  
  // Flag potential issues
  if (!hasNavigation && (isLink || isButton)) {
    results.potentialIssues.push({
      ...elementInfo,
      issue: 'Missing navigation property'
    });
  } else if (hasEmptyNavigation) {
    results.potentialIssues.push({
      ...elementInfo,
      issue: 'Empty navigation target'
    });
  }
};

// Generate a markdown report
const generateReport = () => {
  const reportContent = [];
  
  // Add header
  reportContent.push('# Universal Link Checker Report');
  reportContent.push(`Generated on: ${new Date().toLocaleString()}\n`);
  
  // Add summary
  reportContent.push('## Summary');
  reportContent.push(`- Total files analyzed: ${results.totalFiles}`);
  reportContent.push(`- Total components found: ${results.totalComponents}`);
  reportContent.push(`- Total clickable elements: ${results.totalClickableElements}`);
  reportContent.push(`- Links: ${results.totalLinks}`);
  reportContent.push(`- Buttons: ${results.totalButtons}`);
  reportContent.push(`- Potential issues: ${results.potentialIssues.length}\n`);
  
  // Add issues section
  if (results.potentialIssues.length > 0) {
    reportContent.push('## Potential Issues');
    
    for (const [index, issue] of results.potentialIssues.entries()) {
      reportContent.push(`### Issue ${index + 1}: ${issue.issue}`);
      reportContent.push(`- **File**: ${issue.file}`);
      reportContent.push(`- **Element Type**: ${issue.type}`);
      reportContent.push(`- **Detection Reason**: ${issue.reason}`);
      reportContent.push(`- **Element**: \`${issue.element}\`\n`);
    }
  }
  
  // Add detailed listing if requested
  if (config.detailedReport) {
    reportContent.push('## All Clickable Elements');
    
    // Group by file for better organization
    const fileGroups = {};
    for (const element of results.allElements) {
      if (!fileGroups[element.file]) {
        fileGroups[element.file] = [];
      }
      fileGroups[element.file].push(element);
    }
    
    for (const [file, elements] of Object.entries(fileGroups)) {
      reportContent.push(`### ${file}`);
      
      for (const [index, element] of elements.entries()) {
        reportContent.push(`#### Element ${index + 1} (${element.type})`);
        reportContent.push(`- **Has Navigation**: ${element.hasNavigation ? 'Yes' : 'No'}`);
        reportContent.push(`- **Empty Navigation**: ${element.hasEmptyNavigation ? 'Yes' : 'No'}`);
        reportContent.push(`- **Element**: \`${element.element}\`\n`);
      }
    }
  }
  
  // Write the report
  fs.writeFileSync(config.outputFile, reportContent.join('\n'));
  log(`Report generated: ${config.outputFile}`);
};

// Main function
const main = () => {
  log('Starting Universal Link Checker...');
  
  // Scan each configured directory
  for (const dir of config.directories) {
    const dirPath = path.join(__dirname, dir);
    log(`Scanning directory: ${dirPath}`);
    scanDirectory(dirPath);
  }
  
  // Generate the report
  generateReport();
  
  // Print summary
  log('\n--- RESULTS ---');
  log(`Analyzed ${results.totalFiles} files containing ${results.totalComponents} components`);
  log(`Found ${results.totalClickableElements} clickable elements (${results.totalLinks} links, ${results.totalButtons} buttons)`);
  log(`Identified ${results.potentialIssues.length} potential issues`);
  log(`Report generated: ${config.outputFile}`);
  log('Link checking complete!');
  
  // Close the log file
  logStream.end();
};

// Run the script
main();