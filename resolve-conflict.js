const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Resolving conflicting pages...');

// Check if pages/index.js exists and remove it
const pagesIndexPath = path.join(__dirname, 'pages', 'index.js');
if (fs.existsSync(pagesIndexPath)) {
  try {
    fs.unlinkSync(pagesIndexPath);
    console.log('Removed conflicting pages/index.js file');
  } catch (error) {
    console.error(`Error removing pages/index.js: ${error.message}`);
  }
}

// Check if the pages directory is empty, and if so, remove it
const pagesDir = path.join(__dirname, 'pages');
if (fs.existsSync(pagesDir)) {
  try {
    const files = fs.readdirSync(pagesDir);
    if (files.length === 0) {
      fs.rmdirSync(pagesDir);
      console.log('Removed empty pages directory');
    } else {
      console.log(`Pages directory contains ${files.length} other files, keeping directory`);
    }
  } catch (error) {
    console.error(`Error handling pages directory: ${error.message}`);
  }
}

// Update next.config.js to prefer the App Router
const nextConfigPath = path.join(__dirname, 'next.config.js');
const nextConfigContent = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Prefer the App Router over Pages Router
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
`;

try {
  fs.writeFileSync(nextConfigPath, nextConfigContent);
  console.log('Updated next.config.js to prefer App Router');
} catch (error) {
  console.error(`Error updating next.config.js: ${error.message}`);
}

// Update direct-next.js to specify App Router
const directNextPath = path.join(__dirname, 'direct-next.js');
const directNextContent = `
// direct-next.js - Directly executes Next.js bypassing PATH issues
const { spawn } = require('child_process');
const path = require('path');

const nextBinPath = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
console.log(\`Using Next.js at: \${nextBinPath}\`);

// Direct invocation of the Next.js binary with App Router
const nextProcess = spawn('node', [nextBinPath, 'dev'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    // Clear any problematic paths
    PATH: process.env.PATH.split(path.delimiter)
      .filter(p => !p.includes('Desktop\\\\DEV Projects\\\\next'))
      .join(path.delimiter),
    // Force using App Router
    NEXT_PREFER_APP_ROUTER: '1'
  }
});

nextProcess.on('error', err => {
  console.error('Error starting Next.js:', err.message);
});

nextProcess.on('close', code => {
  console.log(\`Next.js exited with code \${code}\`);
});
`;

try {
  fs.writeFileSync(directNextPath, directNextContent);
  console.log('Updated direct-next.js to use App Router');
} catch (error) {
  console.error(`Error updating direct-next.js: ${error.message}`);
}

console.log('\nConflict resolved. You can now run:');
console.log('node direct-next.js');