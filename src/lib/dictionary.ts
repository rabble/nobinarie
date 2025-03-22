// ABOUTME: This file contains functions for working with dictionary files
// ABOUTME: It provides validation, versioning, and packaging functionality for dictionaries

import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { promisify } from 'util';
import JSZip from 'jszip';

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
 * @returns The latest version string (e.g., "2.1.0")
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
 * @returns Array of version strings
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
 * @param version - Version string or "latest"
 * @returns Path to the dictionary directory
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
 * @param version - Version string or "latest"
 * @returns Promise resolving to a Buffer containing the ZIP file
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
 * Gets the changelog content for a specific version
 * @param version - Version string
 * @returns Changelog content as string
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