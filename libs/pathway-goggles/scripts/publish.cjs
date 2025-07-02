const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, '..', '..', '..');
const libRoot = path.join(__dirname, '..');
const distRoot = path.join(root, 'dist', 'libs', 'pathway-goggles');

console.log('Starting publish process for @theaiinc/pathway-goggles...');

// 1. Build the library
console.log('Building the library...');
execSync('nx build pathway-goggles', { cwd: root, stdio: 'inherit' });

// 2. Prepare and copy package.json to the dist folder
const packageJsonPath = path.join(libRoot, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Remove scripts section to prevent recursive publishing
delete packageJson.scripts;

fs.writeFileSync(
  path.join(distRoot, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);
console.log('Copied and prepared package.json in dist folder.');

// 3. Publish to npm
console.log('Publishing to npm...');
execSync('npm publish --access=public', { cwd: distRoot, stdio: 'inherit' });

console.log('Publish process completed!');
