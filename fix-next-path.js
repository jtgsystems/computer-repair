const fs = require('fs');
const path = require('path');
const os = require('os');

// Create the required directories
const targetDir = path.join(os.homedir(), 'Desktop', 'DEV Projects', 'next', 'dist', 'bin');

try {
  // Create directories recursively
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);

  // Create a simple batch file that will redirect to the actual next command
  const nextBatchPath = path.join(targetDir, 'next');
  const batchContent = `@echo off
npx --no-install next %*`;

  fs.writeFileSync(nextBatchPath, batchContent);
  console.log(`Created next batch file at: ${nextBatchPath}`);

  console.log('Next.js path fix successfully applied!');
} catch (error) {
  console.error('Error applying Next.js path fix:', error);
}