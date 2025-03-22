// ABOUTME: This file contains unit tests for the dictionary utility functions
// ABOUTME: It verifies the dictionary format conversion and validation functions

import { describe, it, expect, vi } from 'vitest';
import fs from 'fs';
import path from 'path';
import { 
  validateAffixFile,
  validateDictionaryFile,
  validateDictionaryFormat,
  convertHunspellToPlaintext,
  convertHunspellToLanguageTool,
  DICTIONARY_FORMATS
} from '@/lib/dictionary';

// Mock the filesystem operations for testing
vi.mock('fs');
vi.mock('path');

describe('Dictionary Validation Functions', () => {
  it('should validate a correct affix file', () => {
    const validAffContent = `
SET UTF-8
TRY esianrtolcdugmphbyfvkwz
SFX E Y 5
SFX E o e o
PFX I N 1
`;
    expect(() => validateAffixFile(validAffContent)).not.toThrow();
    expect(validateAffixFile(validAffContent)).toBe(true);
  });
  
  it('should reject an invalid affix file', () => {
    const invalidAffContent = 'Invalid content without SET directive';
    expect(() => validateAffixFile(invalidAffContent)).toThrow();
  });
  
  it('should validate a correct dictionary file', () => {
    const validDicContent = `5
word1
word2
word3
word4
word5`;
    expect(() => validateDictionaryFile(validDicContent)).not.toThrow();
    expect(validateDictionaryFile(validDicContent)).toBe(true);
  });
  
  it('should reject an invalid dictionary file', () => {
    const invalidDicContent = 'word1\nword2\nword3';
    expect(() => validateDictionaryFile(invalidDicContent)).toThrow();
  });
  
  it('should validate both files together', () => {
    const validAffContent = `
SET UTF-8
TRY esianrtolcdugmphbyfvkwz
SFX E Y 5
SFX E o e o
PFX I N 1
`;
    const validDicContent = `5
word1
word2
word3
word4
word5`;
    expect(() => validateDictionaryFormat(validAffContent, validDicContent)).not.toThrow();
    expect(validateDictionaryFormat(validAffContent, validDicContent)).toBe(true);
  });
});

describe('Dictionary Format Conversion', () => {
  it('should convert Hunspell dictionary to plaintext', () => {
    const hunspellContent = `3
word1/ABC
word2/DEF
word3`;
    
    const plaintext = convertHunspellToPlaintext(hunspellContent);
    
    expect(plaintext).toBe('word1\nword2\nword3');
  });
  
  it('should handle empty Hunspell dictionary', () => {
    const hunspellContent = `0`;
    
    const plaintext = convertHunspellToPlaintext(hunspellContent);
    
    expect(plaintext).toBe('');
  });
  
  it('should convert Hunspell dictionary to LanguageTool XML', () => {
    const hunspellContent = `3
word1/ABC
word2/DEF
word3`;
    
    const xml = convertHunspellToLanguageTool(hunspellContent, 'es');
    
    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('<dictionary xmlns="http://www.w3.org/1999/xhtml">');
    expect(xml).toContain('<language>es</language>');
    expect(xml).toContain('<w>word1</w>');
    expect(xml).toContain('<w>word2</w>');
    expect(xml).toContain('<w>word3</w>');
  });
  
  it('should default to Spanish language code', () => {
    const hunspellContent = `1
palabra`;
    
    const xml = convertHunspellToLanguageTool(hunspellContent);
    
    expect(xml).toContain('<language>es</language>');
  });
});

describe('Dictionary Formats Constants', () => {
  it('should define the correct formats', () => {
    expect(DICTIONARY_FORMATS.HUNSPELL).toBe('hunspell');
    expect(DICTIONARY_FORMATS.LANGUAGETOOL).toBe('languagetool');
    expect(DICTIONARY_FORMATS.PLAINTEXT).toBe('plaintext');
  });
});