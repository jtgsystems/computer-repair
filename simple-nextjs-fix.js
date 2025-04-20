const fs = require('fs');
const { execSync } = require('child_process');

console.log('Applying Next.js configuration fix...');

// Create proper next.config.js
const nextConfigContent = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
`;

// Create simplified package.json with correct scripts
const packageJsonContent = {
  "name": "computer-repair",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^13.4.19",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
};

try {
  // Create backup of existing files
  const timestamp = Date.now();
  if (fs.existsSync('package.json')) {
    fs.copyFileSync('package.json', `package.json.backup-${timestamp}`);
    console.log('Created backup of package.json');
  }
  
  if (fs.existsSync('next.config.js')) {
    fs.copyFileSync('next.config.js', `next.config.js.backup-${timestamp}`);
    console.log('Created backup of next.config.js');
  }

  // Write new configuration files
  fs.writeFileSync('package.json', JSON.stringify(packageJsonContent, null, 2));
  console.log('Updated package.json with correct Next.js configuration');
  
  fs.writeFileSync('next.config.js', nextConfigContent);
  console.log('Created simplified next.config.js');

  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('\nNext.js configuration fixed successfully!');
  console.log('You can now run the application with:');
  console.log('npm run dev');
} catch (error) {
  console.error('Error fixing Next.js configuration:', error.message);
}