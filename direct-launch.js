const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// 1. First remove the problematic path that's causing the issue
const userHome = process.env.USERPROFILE || process.env.HOME;
const problematicDir = path.join(userHome, 'Desktop', 'DEV Projects', 'next', 'dist', 'bin');

console.log(`Checking for problematic directory: ${problematicDir}`);
if (fs.existsSync(problematicDir)) {
  console.log('Found problematic directory, removing it...');
  try {
    fs.rmSync(problematicDir, { recursive: true, force: true });
    console.log('Successfully removed problematic directory');
  } catch (err) {
    console.warn(`Warning: Could not remove directory: ${err.message}`);
  }
}

// 2. Launch Next.js using npx directly
console.log('Launching Next.js directly with npx...');

// Use npx to run next dev from the node_modules directly
const startProcess = spawn('npx', ['--no', 'next', 'dev'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    // Make sure PATH doesn't include problematic locations
    PATH: process.env.PATH
      .split(path.delimiter)
      .filter(p => !p.includes('DEV Projects\\next'))
      .join(path.delimiter)
  }
});

startProcess.on('error', (err) => {
  console.error('Failed to start Next.js:', err.message);
});

startProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`Next.js process exited with code ${code}`);
  }
});