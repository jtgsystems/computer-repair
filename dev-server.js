const { execSync } = require('child_process');

console.log('Starting Next.js development server...');

try {
  // Use npm directly to execute next in the local node_modules
  // This bypasses the path resolution issues
  execSync('npm exec -- next dev', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
} catch (error) {
  console.error('Failed to start Next.js server:', error.message);
}