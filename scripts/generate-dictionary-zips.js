#!/usr/bin/env node

/**
 * This script generates ZIP files for all dictionary versions
 * It should be run during the build process to create the ZIP files for download
 */

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

const DICTIONARY_ROOT = path.join(process.cwd(), 'public', 'dictionaries');

/**
 * Get all available dictionary versions
 * @returns {string[]} Array of version directories (v1, v2, etc.)
 */
function getDictionaryVersions() {
  return fs.readdirSync(DICTIONARY_ROOT)
    .filter(dir => dir.startsWith('v') && dir !== 'latest');
}

/**
 * Create a ZIP package for a dictionary version
 * @param {string} version - Version directory (v1, v2, etc.)
 */
async function createDictionaryPackage(version) {
  const dictionaryPath = path.join(DICTIONARY_ROOT, version);
  const outputPath = path.join(dictionaryPath, 'es_inclusive.zip');
  
  try {
    // Create a new ZIP file
    const zip = new JSZip();
    
    // Get all dictionary files
    const files = fs.readdirSync(dictionaryPath)
      .filter(file => file.endsWith('.aff') || file.endsWith('.dic') || file === 'README.md');
    
    // Add each file to the ZIP
    for (const file of files) {
      const filePath = path.join(dictionaryPath, file);
      const content = fs.readFileSync(filePath);
      zip.file(file, content);
    }
    
    // Add CHANGELOG
    const changelogPath = path.join(DICTIONARY_ROOT, 'CHANGELOG.md');
    if (fs.existsSync(changelogPath)) {
      const changelogContent = fs.readFileSync(changelogPath);
      zip.file('CHANGELOG.md', changelogContent);
    }
    
    // Generate the ZIP file
    const zipContent = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 9
      }
    });
    
    // Write the ZIP file
    fs.writeFileSync(outputPath, zipContent);
    console.log(`Created ZIP package for ${version}: ${outputPath}`);
  } catch (error) {
    console.error(`Error creating dictionary package for ${version}:`, error);
  }
}

/**
 * Create ZIP for the latest version
 */
async function createLatestPackage() {
  const latestPath = path.join(DICTIONARY_ROOT, 'latest');
  const outputPath = path.join(latestPath, 'es_inclusive.zip');
  
  try {
    // Create a new ZIP file
    const zip = new JSZip();
    
    // Get all dictionary files
    const files = fs.readdirSync(latestPath)
      .filter(file => file.endsWith('.aff') || file.endsWith('.dic') || file === 'README.md');
    
    // Add each file to the ZIP
    for (const file of files) {
      const filePath = path.join(latestPath, file);
      if (fs.existsSync(filePath) && !fs.lstatSync(filePath).isDirectory()) {
        const content = fs.readFileSync(filePath);
        zip.file(file, content);
      }
    }
    
    // Add CHANGELOG
    const changelogPath = path.join(DICTIONARY_ROOT, 'CHANGELOG.md');
    if (fs.existsSync(changelogPath)) {
      const changelogContent = fs.readFileSync(changelogPath);
      zip.file('CHANGELOG.md', changelogContent);
    }
    
    // Generate the ZIP file
    const zipContent = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 9
      }
    });
    
    // Write the ZIP file
    fs.writeFileSync(outputPath, zipContent);
    console.log(`Created ZIP package for latest: ${outputPath}`);
  } catch (error) {
    console.error('Error creating latest dictionary package:', error);
  }
}

/**
 * Main function
 */
async function main() {
  // Get all dictionary versions
  const versions = getDictionaryVersions();
  
  // Create ZIP packages for all versions
  for (const version of versions) {
    await createDictionaryPackage(version);
  }
  
  // Create ZIP package for the latest version
  await createLatestPackage();
  
  console.log('All dictionary ZIP packages created successfully!');
}

// Run the script
main().catch(console.error);