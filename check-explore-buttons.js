const fs = require('fs');
const path = require('path');

// Log file setup
const logStream = fs.createWriteStream('explore-buttons-log.txt', {flags: 'w'});
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

// Function to check a component file for Explore Our Services buttons
const checkComponentFile = (filePath) => {
  try {
    log(`Checking file: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Look for "Explore Our Services" text
    if (content.includes('Explore Our Services') || content.includes('Explore Solutions')) {
      log(`Found "Explore" button in ${filePath}`);
      allButtons.push(filePath);
      
      // Check if it has a proper link
      const hasProperLink = content.includes('href="#') || 
                           content.includes('href="/services"') || 
                           content.includes('href="/business"') ||
                           content.includes('asChild') && (content.includes('Link href=') || content.includes('<Link'));
      
      if (!hasProperLink) {
        // Check if it might be using a variable or prop for the href
        const hasHrefVariable = content.match(/href=\{[^}]*\}/g);
        
        if (hasHrefVariable) {
          log(`Found href variables in ${filePath}: ${hasHrefVariable.join(', ')}`);
          
          // Further analyze the component to see if these variables might point somewhere
          const mightHaveLink = content.includes('href=') || 
                               content.includes('<Link');
          
          if (!mightHaveLink) {
            log(`Potential broken "Explore" button in ${filePath} - uses variables but no indication of link`);
            brokenButtons.push({
              file: filePath,
              reason: 'Uses variable for href with no indication of link'
            });
          }
        } else {
          log(`Broken "Explore" button in ${filePath} - no proper link`);
          brokenButtons.push({
            file: filePath,
            reason: 'No proper link'
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
  log('Starting explore buttons checker...');
  
  for (const dir of dirsToScan) {
    const dirPath = path.join(__dirname, dir);
    log(`Scanning directory: ${dirPath}`);
    scanDirectory(dirPath);
  }
  
  // Print results
  log('\n--- RESULTS ---');
  log(`Found ${allButtons.length} "Explore Our Services/Solutions" buttons in total`);
  
  if (brokenButtons.length === 0) {
    log('All "Explore" buttons appear to be properly linked!');
  } else {
    log(`Found ${brokenButtons.length} potentially broken "Explore" buttons:`);
    brokenButtons.forEach(button => {
      log(`- ${button.file}: ${button.reason}`);
    });
  }
  
  log('\nExplore buttons check complete. See explore-buttons-log.txt for details.');
  logStream.end();
};

// Run the script
main();