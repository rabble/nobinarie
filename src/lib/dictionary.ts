// ABOUTME: This file contains functions for working with dictionary files
// ABOUTME: It provides validation, versioning, and packaging functionality for dictionaries

import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { promisify } from 'util';
import JSZip from 'jszip';

// Constants for dictionary formats
export const DICTIONARY_FORMATS = {
  HUNSPELL: 'hunspell',
  LANGUAGETOOL: 'languagetool',
  PLAINTEXT: 'plaintext'
} as const;

export type DictionaryFormat = typeof DICTIONARY_FORMATS[keyof typeof DICTIONARY_FORMATS];

const DICTIONARY_ROOT = path.join(process.cwd(), 'public', 'dictionaries');

/**
 * Validates an affix (.aff) file format
 * @param content - The content of the affix file
 * @returns true if valid, throws an error if invalid
 */
export function validateAffixFile(content: string): boolean {
  // Hunspell affix files should start with a SET line (encoding)
  if (!content.trim().startsWith('SET')) {
    throw new Error('Invalid affix file: Missing SET directive');
  }
  
  // Check for required sections
  const requiredSections = ['TRY', 'SFX', 'PFX'];
  const missingSection = requiredSections.find(section => 
    !content.includes(section)
  );
  
  if (missingSection) {
    throw new Error(`Invalid affix file: Missing ${missingSection} section`);
  }
  
  return true;
}

/**
 * Validates a dictionary (.dic) file format
 * @param content - The content of the dictionary file
 * @returns true if valid, throws an error if invalid
 */
export function validateDictionaryFile(content: string): boolean {
  const lines = content.trim().split('\n');
  
  // First line must be a number (word count)
  if (!/^\d+$/.test(lines[0])) {
    throw new Error('Invalid dictionary file: First line must be a word count');
  }
  
  // Check if word count matches the actual count
  const wordCount = parseInt(lines[0], 10);
  if (wordCount !== lines.length - 1) {
    throw new Error('Invalid dictionary file: Word count does not match');
  }
  
  return true;
}

/**
 * Validates both affix and dictionary files together
 * @param affContent - Content of the affix file
 * @param dicContent - Content of the dictionary file
 * @returns true if valid, throws an error if invalid
 */
export function validateDictionaryFormat(affContent: string, dicContent: string): boolean {
  validateAffixFile(affContent);
  validateDictionaryFile(dicContent);
  
  // Additional cross-validation could go here
  // For example, checking if affix rules referenced in the .dic file exist in the .aff file
  
  return true;
}

/**
 * Gets the latest dictionary version
 * 
 * Retrieves all available versions and returns the most recent one
 * based on semantic versioning rules.
 * 
 * @returns The latest version string (e.g., "2.1.0")
 * 
 * @example
 * const latestVersion = getLatestDictionaryVersion();
 * console.log(`The latest version is ${latestVersion}`);
 */
export function getLatestDictionaryVersion(): string {
  try {
    const versions = getDictionaryVersions();
    if (versions.length === 0) return '0.0.0';
    
    // Sort versions and return the latest
    return versions.sort((a, b) => {
      const aParts = a.split('.').map(Number);
      const bParts = b.split('.').map(Number);
      
      for (let i = 0; i < 3; i++) {
        if (aParts[i] !== bParts[i]) {
          return bParts[i] - aParts[i];
        }
      }
      
      return 0;
    })[0];
  } catch (error) {
    console.error('Error getting latest dictionary version:', error);
    return '0.0.0';
  }
}

/**
 * Gets all available dictionary versions
 * 
 * Scans the dictionary directory for version folders and converts
 * them to semantic version strings.
 * 
 * @returns Array of version strings (e.g., ["1.0.0", "2.0.0"])
 */
export function getDictionaryVersions(): string[] {
  try {
    const dirs = fs.readdirSync(DICTIONARY_ROOT)
      .filter(dir => dir.startsWith('v') && dir !== 'latest');
    
    // Convert directory names (v1, v2, etc.) to version numbers (1.0.0, 2.0.0, etc.)
    return dirs.map(dir => {
      const versionNumber = dir.substring(1);
      return `${versionNumber}.0.0`;
    });
  } catch (error) {
    console.error('Error getting dictionary versions:', error);
    return [];
  }
}

/**
 * Gets the file path for a specific dictionary version
 * 
 * Converts semantic version strings to the corresponding directory path.
 * For "latest", returns the path to the latest version symlink.
 * 
 * @param version - Version string (e.g., "1.0.0") or "latest"
 * @returns Path to the dictionary directory
 * 
 * @example
 * // Returns path to latest version
 * getDictionaryPath('latest');
 * 
 * @example
 * // Returns path to version 1.0.0
 * getDictionaryPath('1.0.0');
 */
export function getDictionaryPath(version: string): string {
  if (version === 'latest') {
    return path.join(DICTIONARY_ROOT, 'latest');
  }
  
  // Convert version number (e.g., "1.0.0") to directory name (e.g., "v1")
  const majorVersion = version.split('.')[0];
  return path.join(DICTIONARY_ROOT, `v${majorVersion}`);
}

/**
 * Creates a downloadable ZIP package for a dictionary version
 * 
 * Packages all dictionary files for a specific version into a compressed ZIP archive,
 * including README and CHANGELOG. Used for downloads page to generate downloadable packages.
 * 
 * @param version - Version string (e.g., "1.0.0") or "latest"
 * @returns Promise resolving to a Buffer containing the ZIP file
 * 
 * @example
 * // Create package for latest version
 * const zipBuffer = await createDictionaryPackage('latest');
 * fs.writeFileSync('dictionary.zip', zipBuffer);
 */
export async function createDictionaryPackage(version: string): Promise<Buffer> {
  const dictionaryPath = getDictionaryPath(version);
  
  try {
    const zip = new JSZip();
    
    // Read all files in the dictionary directory
    const files = fs.readdirSync(dictionaryPath);
    
    // Add each file to the ZIP
    for (const file of files) {
      const filePath = path.join(dictionaryPath, file);
      const content = fs.readFileSync(filePath);
      zip.file(file, content);
    }
    
    // Add README and CHANGELOG
    const readmePath = path.join(dictionaryPath, 'README.md');
    if (fs.existsSync(readmePath)) {
      const readmeContent = fs.readFileSync(readmePath);
      zip.file('README.md', readmeContent);
    }
    
    const changelogContent = getChangelogForVersion(version);
    if (changelogContent) {
      zip.file('CHANGELOG.md', changelogContent);
    }
    
    // Generate the ZIP file
    return await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 9
      }
    });
  } catch (error) {
    console.error(`Error creating dictionary package for version ${version}:`, error);
    throw error;
  }
}

/**
 * Gets the changelog content for a specific dictionary version
 * 
 * Extracts the relevant section from the CHANGELOG.md file for a specific version.
 * Returns an empty string if the version is not found or if the changelog doesn't exist.
 * 
 * @param version - Version string (e.g., "1.0.0")
 * @returns Changelog content as string
 * 
 * @example
 * // Get changes for version 2.0.0
 * const changes = getChangelogForVersion('2.0.0');
 * console.log(changes);
 * // Output: "## [2.0.0] - 2025-03-15\n\n### Agregado\n- Añadidas 10 nuevas palabras inclusivas..."
 */
export function getChangelogForVersion(version: string): string {
  try {
    const changelogPath = path.join(DICTIONARY_ROOT, 'CHANGELOG.md');
    
    if (!fs.existsSync(changelogPath)) {
      return '';
    }
    
    const content = fs.readFileSync(changelogPath, 'utf-8');
    
    // Parse out the section for this version
    const versionHeader = `## [${version}]`;
    const versionIndex = content.indexOf(versionHeader);
    
    if (versionIndex === -1) {
      return '';
    }
    
    // Find the end of this version's section (next version header or EOF)
    let nextVersionIndex = content.indexOf('## [', versionIndex + versionHeader.length);
    if (nextVersionIndex === -1) {
      nextVersionIndex = content.length;
    }
    
    return content.substring(versionIndex, nextVersionIndex).trim();
  } catch (error) {
    console.error(`Error getting changelog for version ${version}:`, error);
    return '';
  }
}

/**
 * Converts a Hunspell dictionary to plain text format
 * 
 * Takes a Hunspell .dic file and extracts the base words without affix codes.
 * Useful for platforms that only support plain wordlists.
 *
 * @param dicContent - Content of the Hunspell dictionary (.dic) file
 * @returns String containing one word per line
 * 
 * @example
 * const hunspellContent = fs.readFileSync('dictionary.dic', 'utf-8');
 * const textContent = convertHunspellToPlaintext(hunspellContent);
 * fs.writeFileSync('dictionary.txt', textContent);
 */
export function convertHunspellToPlaintext(dicContent: string): string {
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
 * Converts a Hunspell dictionary to LanguageTool XML format
 * 
 * Creates a basic LanguageTool XML dictionary from a Hunspell dictionary.
 * 
 * @param dicContent - Content of the Hunspell dictionary (.dic) file
 * @param langCode - Language code (e.g., "es")
 * @returns XML string in LanguageTool format
 * 
 * @example
 * const hunspellContent = fs.readFileSync('dictionary.dic', 'utf-8');
 * const xmlContent = convertHunspellToLanguageTool(hunspellContent, 'es');
 * fs.writeFileSync('dictionary.xml', xmlContent);
 */
export function convertHunspellToLanguageTool(dicContent: string, langCode: string = 'es'): string {
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
 * Creates dictionary files in all supported formats
 * 
 * Generates all dictionary format versions from the base Hunspell format:
 * - Hunspell (.aff/.dic)
 * - Plain text (.txt)
 * - LanguageTool XML (.xml)
 * 
 * Also copies README and CHANGELOG files.
 * 
 * @param version - Version string (e.g., "1.0.0") 
 * @param outputDir - Directory to write the files
 * @returns Promise that resolves when all files are written
 * 
 * @example
 * // Create all formats for version 1.0.0 in the downloads directory
 * await createAllDictionaryFormats('1.0.0', '/path/to/downloads/v1.0.0');
 */
export async function createAllDictionaryFormats(version: string, outputDir: string): Promise<void> {
  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Get path to the Hunspell files
    const dictionaryPath = getDictionaryPath(version);
    const affPath = path.join(dictionaryPath, 'es_inclusive.aff');
    const dicPath = path.join(dictionaryPath, 'es_inclusive.dic');

    // Read the Hunspell files
    const affContent = fs.readFileSync(affPath, 'utf-8');
    const dicContent = fs.readFileSync(dicPath, 'utf-8');

    // Validate the files
    validateDictionaryFormat(affContent, dicContent);

    // Write Hunspell files
    fs.writeFileSync(path.join(outputDir, 'es_inclusive.aff'), affContent);
    fs.writeFileSync(path.join(outputDir, 'es_inclusive.dic'), dicContent);

    // Convert to plaintext and write
    const plaintext = convertHunspellToPlaintext(dicContent);
    fs.writeFileSync(path.join(outputDir, 'es_inclusive.txt'), plaintext);

    // Convert to LanguageTool XML and write
    const xml = convertHunspellToLanguageTool(dicContent, 'es');
    fs.writeFileSync(path.join(outputDir, 'es_inclusive.xml'), xml);

    // Copy README and CHANGELOG
    const readmePath = path.join(dictionaryPath, 'README.md');
    if (fs.existsSync(readmePath)) {
      fs.copyFileSync(readmePath, path.join(outputDir, 'README.md'));
    }

    const changelogContent = getChangelogForVersion(version);
    if (changelogContent) {
      fs.writeFileSync(path.join(outputDir, 'CHANGELOG.md'), changelogContent);
    }

    console.log(`Created all dictionary formats for version ${version} in ${outputDir}`);
  } catch (error) {
    console.error(`Error creating dictionary formats for version ${version}:`, error);
    throw error;
  }
}