#!/usr/bin/env node

const path = require('path');
const { spawn } = require('child_process');

// The direct path to the next binary in the node_modules folder
const nextBinPath = path.join(__dirname, 'node_modules', '.bin', 'next');

console.log('Starting Next.js development server...');
console.log(`Next.js binary path: ${nextBinPath}`);

const nextProcess = spawn(nextBinPath, ['dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

nextProcess.on('error', (err) => {
  console.error('Failed to start Next.js development server:', err);
});

nextProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`Next.js process exited with code ${code}`);
  }
});