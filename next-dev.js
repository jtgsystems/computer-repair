#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Use double quotes for Windows paths with spaces
const nextBinPath = path.resolve(__dirname, 'node_modules', '.bin', 'next');
const args = ['dev'];

// Use explicit shell and quoting for Windows
const child = spawn(nextBinPath, args, {
  stdio: 'inherit',
  windowsVerbatimArguments: true,
  shell: true
});

child.on('close', (code) => {
  process.exit(code);
});