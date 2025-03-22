// ABOUTME: This file is an API endpoint for downloading dictionary files
// ABOUTME: It creates ZIP packages of dictionary files on demand

import { NextApiRequest, NextApiResponse } from 'next';
import { createDictionaryPackage, getDictionaryVersions } from '@/lib/dictionary';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get version from query
  const { version } = req.query;
  
  // Validate version
  if (!version || Array.isArray(version)) {
    return res.status(400).json({ error: 'Invalid version parameter' });
  }
  
  // Normalize version
  let requestedVersion = version;
  if (version !== 'latest') {
    // Validate it's a known version
    const availableVersions = getDictionaryVersions();
    
    if (!availableVersions.includes(version)) {
      return res.status(404).json({ error: 'Version not found' });
    }
  }
  
  try {
    // Create the ZIP package
    const zipBuffer = await createDictionaryPackage(requestedVersion);
    
    // Set response headers
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="es_inclusive_${requestedVersion}.zip"`);
    
    // Send the ZIP file
    res.send(zipBuffer);
  } catch (error) {
    console.error('Error creating dictionary package:', error);
    res.status(500).json({ error: 'Failed to create dictionary package' });
  }
}