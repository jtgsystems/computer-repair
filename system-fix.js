const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('==== Next.js System Path Fix Utility ====');

// Function to run a command and return output
function runCommand(cmd) {
  try {
    const output = execSync(cmd, { encoding: 'utf8' });
    return { success: true, output };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// 1. Diagnose the problem
console.log('\n1. Diagnosing Next.js path issues:');

// Check PATH environment variable
console.log('\nChecking PATH environment variable:');
console.log(process.env.PATH.split(path.delimiter)
  .filter(p => p.includes('next') || p.includes('Next'))
  .join('\n'));

// Check for problematic directories
const problematicPaths = [
  path.join(os.homedir(), 'Desktop', 'DEV Projects', 'next'),
  path.join(os.homedir(), 'Desktop', 'DEV Projects', 'next', 'dist', 'bin')
];

problematicPaths.forEach(dirPath => {
  if (fs.existsSync(dirPath)) {
    console.log(`\nFound problematic directory: ${dirPath}`);
    try {
      // Backup instead of delete to be safer
      const backupPath = `${dirPath}_backup_${Date.now()}`;
      fs.renameSync(dirPath, backupPath);
      console.log(`Moved to backup: ${backupPath}`);
    } catch (err) {
      console.log(`Could not move directory: ${err.message}`);
    }
  }
});

// 2. Install Next.js directly in the project
console.log('\n2. Installing Next.js directly:');

// Ensure package.json has correct structure
let packageJson;
try {
  packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
} catch (err) {
  packageJson = {
    "name": "computer-repair-site",
    "version": "0.1.0",
    "private": true,
    "scripts": {},
    "dependencies": {},
    "devDependencies": {}
  };
}

// Update package.json to best practices
packageJson.scripts = {
  ...packageJson.scripts,
  "dev": "node --require ./node_modules/next/dist/bin/next dev",
  "build": "next build",
  "start": "next start"
};

// Ensure Next.js is in dependencies
packageJson.dependencies = {
  ...packageJson.dependencies,
  "next": "^13.4.19",
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
};

// Write updated package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
console.log('Updated package.json with direct paths');

// 3. Create direct execution script
const nextRunnerScript = `
// direct-next.js - Directly executes Next.js bypassing PATH issues
const { spawn } = require('child_process');
const path = require('path');

const nextBinPath = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
console.log(\`Using Next.js at: \${nextBinPath}\`);

// Direct invocation of the Next.js binary
const nextProcess = spawn('node', [nextBinPath, 'dev'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    // Clear any problematic paths
    PATH: process.env.PATH.split(path.delimiter)
      .filter(p => !p.includes('Desktop\\\\DEV Projects\\\\next'))
      .join(path.delimiter)
  }
});

nextProcess.on('error', err => {
  console.error('Error starting Next.js:', err.message);
});

nextProcess.on('close', code => {
  console.log(\`Next.js exited with code \${code}\`);
});
`;

fs.writeFileSync('direct-next.js', nextRunnerScript);
console.log('Created direct-next.js execution script');

// 4. Install dependencies fresh
console.log('\n4. Installing dependencies:');
console.log('Running npm install...');
const npmResult = runCommand('npm install');
if (npmResult.success) {
  console.log('Dependencies installed successfully');
} else {
  console.error('Error installing dependencies:', npmResult.error);
}

// 5. Create minimal app structure
console.log('\n5. Creating minimal app structure:');

// Ensure pages directory exists
if (!fs.existsSync('pages')) {
  fs.mkdirSync('pages', { recursive: true });
  
  // Create a minimal index page
  const indexContent = `
export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Next.js is working!</h1>
      <p>Your Next.js application is now running correctly.</p>
    </div>
  );
}
`;
  fs.writeFileSync('pages/index.js', indexContent);
  console.log('Created pages/index.js');
}

// 6. Provide final instructions
console.log('\n==== Setup Complete ====');
console.log('To start your Next.js app, run:');
console.log('node direct-next.js');
console.log('\nIf this works, you can continue using this method or update your system PATH.');