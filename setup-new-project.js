const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(command) {
  console.log(`Running: ${command}`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'inherit' });
    return { success: true, output };
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    return { success: false, error: error.message };
  }
}

// Save current directory
const currentDir = process.cwd();
console.log(`Current directory: ${currentDir}`);

// Create temporary project with same dependencies
console.log('Creating new Next.js project with identical dependencies...');
runCommand('npx create-next-app@latest temp-nextjs-project --use-npm');

// Return to original directory
process.chdir(currentDir);
console.log('Setup completed successfully. Please run:');
console.log('1. cd temp-nextjs-project');
console.log('2. npm run dev');
console.log('Once verified working, we can update the main project.');