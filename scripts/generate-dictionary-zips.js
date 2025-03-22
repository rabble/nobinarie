#!/usr/bin/env node

/**
 * This script generates dictionary files in all formats for all versions
 * It prepares all dictionary files for the download section of the website
 * 
 * This script:
 * 1. Creates ZIP packages for each dictionary version
 * 2. Generates multiple dictionary formats (Hunspell, plaintext, LanguageTool XML)
 * 3. Prepares the downloads directory with all files
 */

const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

const DICTIONARY_ROOT = path.join(process.cwd(), 'public', 'dictionaries');
const DOWNLOADS_ROOT = path.join(process.cwd(), 'public', 'downloads');

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
 * Convert Hunspell dictionary to plaintext format
 * @param {string} dicContent - Content of the Hunspell dictionary file
 * @returns {string} Plaintext dictionary content
 */
function convertHunspellToPlaintext(dicContent) {
  // Split the content into lines
  const lines = dicContent.trim().split('\n');
  
  // Skip the first line (word count)
  const wordLines = lines.slice(1);
  
  // Extract base words without affix codes
  const words = wordLines.map(line => {
    // Words may have affix codes after a slash (e.g., "word/ABC")
    const parts = line.split('/');
    return parts[0].trim();
  });
  
  // Join words with newlines
  return words.join('\n');
}

/**
 * Convert Hunspell dictionary to LanguageTool XML format
 * @param {string} dicContent - Content of the Hunspell dictionary file
 * @param {string} langCode - Language code
 * @returns {string} XML dictionary content
 */
function convertHunspellToLanguageTool(dicContent, langCode = 'es') {
  // Extract words from the Hunspell dictionary
  const plaintext = convertHunspellToPlaintext(dicContent);
  const words = plaintext.split('\n').filter(word => word.trim() !== '');
  
  // Create XML header
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<dictionary xmlns="http://www.w3.org/1999/xhtml">\n`;
  xml += `  <info>\n`;
  xml += `    <title>Diccionario de Español Inclusivo</title>\n`;
  xml += `    <description>Diccionario inclusivo con terminaciones en -e</description>\n`;
  xml += `    <license>MIT</license>\n`;
  xml += `    <encoding>UTF-8</encoding>\n`;
  xml += `    <languages>\n`;
  xml += `      <language>${langCode}</language>\n`;
  xml += `    </languages>\n`;
  xml += `  </info>\n`;
  
  // Add words
  xml += `  <words>\n`;
  for (const word of words) {
    xml += `    <w>${word}</w>\n`;
  }
  xml += `  </words>\n`;
  xml += `</dictionary>`;
  
  return xml;
}

/**
 * Prepare dictionary files in all formats for downloads
 * @param {string} version - Version directory (v1, v2, etc.)
 */
async function prepareDictionaryDownloads(version) {
  const versionNumber = version.substring(1) + '.0.0'; // Convert v1 to 1.0.0
  const dictionaryPath = path.join(DICTIONARY_ROOT, version);
  const downloadPath = path.join(DOWNLOADS_ROOT, `v${versionNumber}`);
  
  try {
    // Create download directory if it doesn't exist
    if (!fs.existsSync(downloadPath)) {
      fs.mkdirSync(downloadPath, { recursive: true });
    }
    
    // Read the Hunspell files
    const affPath = path.join(dictionaryPath, 'es_inclusive.aff');
    const dicPath = path.join(dictionaryPath, 'es_inclusive.dic');
    
    if (!fs.existsSync(affPath) || !fs.existsSync(dicPath)) {
      console.error(`Dictionary files not found for version ${version}`);
      return;
    }
    
    const affContent = fs.readFileSync(affPath, 'utf-8');
    const dicContent = fs.readFileSync(dicPath, 'utf-8');
    
    // Copy Hunspell files
    fs.writeFileSync(path.join(downloadPath, 'es_inclusive.aff'), affContent);
    fs.writeFileSync(path.join(downloadPath, 'es_inclusive.dic'), dicContent);
    
    // Create plaintext version
    const plaintext = convertHunspellToPlaintext(dicContent);
    fs.writeFileSync(path.join(downloadPath, 'es_inclusive.txt'), plaintext);
    
    // Create LanguageTool XML version
    const xml = convertHunspellToLanguageTool(dicContent);
    fs.writeFileSync(path.join(downloadPath, 'es_inclusive.xml'), xml);
    
    // Copy README
    const readmePath = path.join(dictionaryPath, 'README.md');
    if (fs.existsSync(readmePath)) {
      fs.copyFileSync(readmePath, path.join(downloadPath, 'README.md'));
    }
    
    // Copy the ZIP file
    const zipPath = path.join(dictionaryPath, 'es_inclusive.zip');
    if (fs.existsSync(zipPath)) {
      fs.copyFileSync(zipPath, path.join(downloadPath, 'es_inclusive.zip'));
    }
    
    console.log(`Prepared all dictionary formats for version ${versionNumber} in ${downloadPath}`);
  } catch (error) {
    console.error(`Error preparing dictionary downloads for ${version}:`, error);
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
  
  // Prepare download files for all versions
  for (const version of versions) {
    await prepareDictionaryDownloads(version);
  }
  
  // Prepare download files for the latest version (copy from the latest version)
  const latestVersion = versions.sort().pop(); // Get the highest version number
  if (latestVersion) {
    const latestNumber = latestVersion.substring(1) + '.0.0';
    console.log(`Creating 'latest' symbolic link pointing to v${latestNumber}`);
    
    // Create a "latest" folder in the downloads directory
    const latestPath = path.join(DOWNLOADS_ROOT, 'latest');
    if (fs.existsSync(latestPath)) {
      // If it already exists, delete it
      fs.rmSync(latestPath, { recursive: true, force: true });
    }
    
    // On Unix systems, we could create a symlink, but for cross-platform compatibility,
    // we'll just copy the files from the latest version
    const latestVersionPath = path.join(DOWNLOADS_ROOT, `v${latestNumber}`);
    if (!fs.existsSync(latestVersionPath)) {
      console.error(`Latest version directory not found: ${latestVersionPath}`);
      return;
    }
    
    // Create the latest directory
    fs.mkdirSync(latestPath, { recursive: true });
    
    // Copy all files from the latest version
    const files = fs.readdirSync(latestVersionPath);
    for (const file of files) {
      const srcPath = path.join(latestVersionPath, file);
      const destPath = path.join(latestPath, file);
      fs.copyFileSync(srcPath, destPath);
    }
    
    console.log(`Prepared 'latest' dictionary downloads in ${latestPath}`);
  }
  
  console.log('All dictionary download files prepared successfully!');
}

// Run the script
main().catch(console.error);