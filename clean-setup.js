const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Create temporary directory
const tempDir = path.join(os.tmpdir(), 'next-temp-' + Date.now());
fs.mkdirSync(tempDir, { recursive: true });

console.log(`Creating temporary Next.js project in ${tempDir}...`);

try {
  // Change to temp directory and create a new Next.js project
  process.chdir(tempDir);
  
  execSync('npx create-next-app@latest test-next --use-npm', { 
    stdio: 'inherit'
  });

  // Check if project was created successfully
  if (fs.existsSync(path.join(tempDir, 'test-next'))) {
    console.log('Temporary Next.js project created successfully.');
    console.log('Now you can:');
    console.log(`1. cd ${path.join(tempDir, 'test-next')}`);
    console.log('2. npm run dev');
    console.log('3. Once verified working, copy the package.json and other config files to your project');
  } else {
    console.error('Failed to create temporary Next.js project.');
  }
} catch (error) {
  console.error('Error creating temporary project:', error.message);
} finally {
  // Return to original directory
  process.chdir(process.env.INIT_CWD || process.cwd());
}