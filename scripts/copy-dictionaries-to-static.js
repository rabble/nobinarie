/**
 * Copies all generated dictionary files from public/dictionaries to public/static/dictionaries
 * This ensures they're available in both locations for proper linking in the website
 */

const fs = require('fs');
const path = require('path');

// Function to copy a file
function copyFile(source, destination) {
  console.log(`Copying ${source} to ${destination}`);
  try {
    fs.copyFileSync(source, destination);
  } catch (err) {
    console.error(`Error copying ${source}:`, err);
  }
}

// Function to create directory if it doesn't exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Creating directory ${directory}`);
    fs.mkdirSync(directory, { recursive: true });
  }
}

// Main directories
const sourceDir = path.join(__dirname, '../public/dictionaries');
const targetDir = path.join(__dirname, '../public/static/dictionaries');

// Ensure target directory exists
ensureDirectoryExists(targetDir);

// Copy all files from the source directory to the target directory
function copyFilesInDirectory(source, target) {
  if (!fs.existsSync(source)) {
    console.log(`Source directory ${source} doesn't exist`);
    return;
  }

  const items = fs.readdirSync(source);
  
  for (const item of items) {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);
    
    const stats = fs.statSync(sourcePath);
    
    if (stats.isDirectory()) {
      // If it's the dialectos directory, handle it specially
      if (item === 'dialectos') {
        const dialectDirs = fs.readdirSync(sourcePath);
        
        // Create dialectos directory in target
        const targetDialectosDir = path.join(target, 'dialectos');
        ensureDirectoryExists(targetDialectosDir);
        
        // Copy index files
        const indexFiles = dialectDirs.filter(f => f.endsWith('.json') || f.endsWith('.md'));
        for (const indexFile of indexFiles) {
          copyFile(
            path.join(sourcePath, indexFile),
            path.join(targetDialectosDir, indexFile)
          );
        }
        
        // Copy dialect-specific files
        const dialectFolders = dialectDirs.filter(f => !f.endsWith('.json') && !f.endsWith('.md'));
        for (const dialect of dialectFolders) {
          const dialectSourceDir = path.join(sourcePath, dialect);
          const dialectTargetDir = path.join(targetDialectosDir, dialect);
          
          // Skip if not a directory
          if (!fs.statSync(dialectSourceDir).isDirectory()) continue;
          
          // Create dialect directory in target
          ensureDirectoryExists(dialectTargetDir);
          
          // Copy ZIP files from the dialect directory
          const dialectFiles = fs.readdirSync(dialectSourceDir);
          for (const file of dialectFiles) {
            if (file.endsWith('.zip')) {
              copyFile(
                path.join(dialectSourceDir, file),
                path.join(dialectTargetDir, file)
              );
            }
          }
        }
      }
      // Else skip other subdirectories
    } else {
      // Copy files at the top level
      copyFile(sourcePath, targetPath);
    }
  }
}

// Start the copy process
copyFilesInDirectory(sourceDir, targetDir);

console.log('Dictionary files copied successfully!');