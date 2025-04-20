
// direct-next.js - Directly executes Next.js bypassing PATH issues
const { spawn } = require('child_process');
const path = require('path');

const nextBinPath = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
console.log(`Using Next.js at: ${nextBinPath}`);

// Direct invocation of the Next.js binary with App Router
const nextProcess = spawn('node', [nextBinPath, 'dev'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    // Clear any problematic paths
    PATH: process.env.PATH.split(path.delimiter)
      .filter(p => !p.includes('Desktop\\DEV Projects\\next'))
      .join(path.delimiter),
    // Force using App Router
    NEXT_PREFER_APP_ROUTER: '1'
  }
});

nextProcess.on('error', err => {
  console.error('Error starting Next.js:', err.message);
});

nextProcess.on('close', code => {
  console.log(`Next.js exited with code ${code}`);
});
