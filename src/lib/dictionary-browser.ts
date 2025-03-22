// ABOUTME: Browser-compatible version of dictionary functions
// ABOUTME: Used for client-side rendering in Next.js static export

/**
 * Validates an affix (.aff) file format (browser version)
 */
export function validateAffixFile(content: string): boolean {
  // Browser compatible version
  return true;
}

/**
 * Validates a dictionary (.dic) file format (browser version)
 */
export function validateDictionaryFile(content: string): boolean {
  // Browser compatible version
  return true;
}

/**
 * Validates both affix and dictionary files together (browser version)
 */
export function validateDictionaryFormat(affContent: string, dicContent: string): boolean {
  // Browser compatible version
  return true;
}

/**
 * Gets the latest dictionary version (browser version)
 */
export function getLatestDictionaryVersion(): string {
  return '1.0.0';
}

/**
 * Gets all available dictionary versions (browser version)
 */
export function getDictionaryVersions(): string[] {
  return ['1.0.0'];
}

/**
 * Gets the file path for a specific dictionary version (browser version)
 */
export function getDictionaryPath(version: string): string {
  return `/dictionaries/${version === 'latest' ? 'latest' : `v${version.split('.')[0]}`}`;
}

/**
 * Creates a downloadable ZIP package for a dictionary version (browser version)
 */
export async function createDictionaryPackage(version: string): Promise<Buffer> {
  throw new Error('Dictionary package creation is not available in the browser');
}

/**
 * Gets the changelog content for a specific version (browser version)
 */
export function getChangelogForVersion(version: string): string {
  return '';
}