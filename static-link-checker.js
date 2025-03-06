const fs = require('fs');
const path = require('path');

// Log file setup
const logStream = fs.createWriteStream('static-link-checker-log.txt', {flags: 'w'});
const log = (message) => {
  console.log(message);
  logStream.write(message + '\n');
};

// List of directories to scan
const dirsToScan = [
  'components',
  'app',
  'pages'
];

// Track results
const brokenButtons = [];
const allButtons = [];

// Function to check if a file is a React component
const isReactComponent = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  return ['.tsx', '.jsx', '.js'].includes(ext);
};

// Function to recursively scan directories
const scanDirectory = (dirPath) => {
  try {
    if (!fs.existsSync(dirPath)) {
      log(`Directory does not exist: ${dirPath}`);
      return;
    }

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (isReactComponent(entry.name)) {
        checkComponentFile(fullPath);
      }
    }
  } catch (error) {
    log(`Error scanning directory ${dirPath}: ${error.message}`);
  }
};

// Function to check a component file for Schedule a Consultation buttons
const checkComponentFile = (filePath) => {
  try {
    log(`Checking file: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Look for "Schedule a Consultation" text
    if (content.includes('Schedule a Consultation')) {
      log(`Found "Schedule a Consultation" in ${filePath}`);
      allButtons.push(filePath);
      
      // Check if it has a link to contact page
      const hasContactLink = content.includes('href="/contact"') || 
                             content.includes("href='/contact'") || 
                             content.includes('href={`/contact`}') ||
                             content.includes("href={'/contact'}") ||
                             content.includes('href={"contact"}');
      
      if (!hasContactLink) {
        // Check if it might be using a variable or prop for the href
        const hasHrefVariable = content.match(/href=\{[^}]*\}/g);
        
        if (hasHrefVariable) {
          log(`Found href variables in ${filePath}: ${hasHrefVariable.join(', ')}`);
          
          // Further analyze the component to see if these variables might point to contact
          const mightLinkToContact = content.includes('/contact') || 
                                     content.includes("'contact'") || 
                                     content.includes('"contact"');
          
          if (!mightLinkToContact) {
            log(`Potential broken "Schedule a Consultation" button in ${filePath} - uses variables but no indication of contact page`);
            brokenButtons.push({
              file: filePath,
              reason: 'Uses variable for href with no indication of contact page'
            });
          }
        } else {
          log(`Broken "Schedule a Consultation" button in ${filePath} - no link to contact page`);
          brokenButtons.push({
            file: filePath,
            reason: 'No link to contact page'
          });
        }
      }
    }
  } catch (error) {
    log(`Error checking file ${filePath}: ${error.message}`);
  }
};

// Main function
const main = () => {
  log('Starting static link checker...');
  
  for (const dir of dirsToScan) {
    const dirPath = path.join(__dirname, dir);
    log(`Scanning directory: ${dirPath}`);
    scanDirectory(dirPath);
  }
  
  // Print results
  log('\n--- RESULTS ---');
  log(`Found ${allButtons.length} "Schedule a Consultation" buttons in total`);
  
  if (brokenButtons.length === 0) {
    log('All "Schedule a Consultation" buttons appear to be properly linked to the contact page!');
  } else {
    log(`Found ${brokenButtons.length} potentially broken "Schedule a Consultation" buttons:`);
    brokenButtons.forEach(button => {
      log(`- ${button.file}: ${button.reason}`);
    });
  }
  
  log('\nStatic analysis complete. See static-link-checker-log.txt for details.');
  logStream.end();
};

// Run the script
main();