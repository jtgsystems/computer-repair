const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Path to the temporary Next.js project
const tempProjectPath = 'C:\\Users\\Owner\\AppData\\Local\\Temp\\next-temp-1745107540652\\test-next';
const currentDir = process.cwd();

// Files to copy from temp project
const filesToCopy = [
  'package.json',
  'next.config.mjs',
  '.eslintrc.json',
  'postcss.config.js',
  'tailwind.config.js',
  'tsconfig.json'
];

console.log('Updating project from temp Next.js setup...');

try {
  // Make sure temp project exists
  if (!fs.existsSync(tempProjectPath)) {
    throw new Error(`Temporary project not found at ${tempProjectPath}`);
  }

  // Create backups of current files
  const backupDir = path.join(currentDir, 'config-backup-' + Date.now());
  fs.mkdirSync(backupDir, { recursive: true });
  console.log(`Created backup directory: ${backupDir}`);

  // Copy files from temp project
  filesToCopy.forEach(file => {
    const sourcePath = path.join(tempProjectPath, file);
    const destPath = path.join(currentDir, file);
    const backupPath = path.join(backupDir, file);
    
    // Backup existing file if it exists
    if (fs.existsSync(destPath)) {
      fs.copyFileSync(destPath, backupPath);
      console.log(`Backed up ${file} to ${backupPath}`);
    }
    
    // Copy new file from temp project if it exists
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${file} from temp project`);
    } else {
      console.log(`Warning: ${file} not found in temp project`);
    }
  });

  console.log('Files updated successfully.');
  console.log('Run the following commands to complete the setup:');
  console.log('1. npm install');
  console.log('2. npm run dev');

} catch (error) {
  console.error('Error updating project:', error.message);
}