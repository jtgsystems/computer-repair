const { execSync, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Resolving Next.js module issues...');

// Create a complete new installation in a subdirectory
const nextAppDir = path.join(__dirname, 'nextjs-temp');
if (!fs.existsSync(nextAppDir)) {
  fs.mkdirSync(nextAppDir, { recursive: true });
}

try {
  // Create temporary package.json for a clean Next.js installation
  const tempPackageJson = {
    "name": "nextjs-temp",
    "version": "1.0.0",
    "private": true,
    "dependencies": {
      "next": "^13.4.19"
    }
  };

  fs.writeFileSync(
    path.join(nextAppDir, 'package.json'), 
    JSON.stringify(tempPackageJson, null, 2)
  );

  console.log('Installing Next.js in isolated directory...');
  execSync('npm install', { cwd: nextAppDir, stdio: 'inherit' });

  // Create a minimal page to verify Next.js works
  const pagesDir = path.join(nextAppDir, 'pages');
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  const indexContent = `
export default function Home() {
  return (
    <div>
      <h1>Next.js is working!</h1>
      <p>This is a clean installation to verify Next.js functionality.</p>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(pagesDir, 'index.js'), indexContent);

  console.log('Starting Next.js from clean installation...');
  
  // Run Next.js from the clean installation
  const nextProcess = spawn(
    'npx', 
    ['next', 'dev', '-p', '3000'], 
    {
      cwd: nextAppDir,
      stdio: 'inherit',
      shell: true
    }
  );

  nextProcess.on('error', (error) => {
    console.error('Failed to start Next.js:', error.message);
  });

  nextProcess.on('close', (code) => {
    if (code !== 0) {
      console.log(`Next.js process exited with code ${code}`);
    }
  });

  console.log('Next.js server should be running at http://localhost:3000');
  console.log('Press Ctrl+C to stop the server');

} catch (error) {
  console.error('Error:', error.message);
}