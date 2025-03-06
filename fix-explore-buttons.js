const fs = require('fs');
const path = require('path');

// List of pages to fix
const pagesToFix = [
  'app/business/backup-recovery/page.tsx',
  'app/business/cloud-services/page.tsx',
  'app/business/cybersecurity/page.tsx',
  'app/business/desktop-repair/page.tsx',
  'app/business/email-collaboration/page.tsx',
  'app/business/it-consulting/page.tsx',
  'app/business/managed-it/page.tsx',
  'app/business/procurement/page.tsx',
  'app/business/security-systems/page.tsx',
  'app/business/vdi/page.tsx',
  'app/page.tsx',
  'app/about/page.tsx'
];

// Function to fix a page
const fixPage = (filePath) => {
  try {
    console.log(`Fixing: ${filePath}`);
    
    // Read the file
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if the file already imports Link
    const hasLinkImport = content.includes("import Link from 'next/link'") || 
                          content.includes('import Link from "next/link"');
    
    // Add Link import if it doesn't exist
    if (!hasLinkImport) {
      content = content.replace(
        /import\s+.*\s+from\s+["'].*["']/,
        (match) => `${match}\nimport Link from "next/link"`
      );
    }
    
    // Fix the Explore Our Services button
    content = content.replace(
      /<Button\s+[^>]*>\s*Explore Our Services\s*<\/Button>/g,
      `<Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="/business">
                Explore Our Services
              </Link>
            </Button>`
    );
    
    // Also fix any "Explore Solutions" buttons
    content = content.replace(
      /<Button\s+[^>]*>\s*Explore Solutions\s*<\/Button>/g,
      `<Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-primary border-white shadow-lg transition-colors duration-300"
              asChild
            >
              <Link href="#features">
                Explore Solutions
              </Link>
            </Button>`
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}: ${error.message}`);
    return false;
  }
};

// Main function
const main = () => {
  console.log('Starting to fix "Explore" buttons...');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const page of pagesToFix) {
    const result = fixPage(page);
    if (result) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log('\n--- RESULTS ---');
  console.log(`Successfully fixed: ${successCount} pages`);
  if (failCount > 0) {
    console.log(`Failed to fix: ${failCount} pages`);
  }
  console.log('Fix complete!');
};

// Run the script
main();