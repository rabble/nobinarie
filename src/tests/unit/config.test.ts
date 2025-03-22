// ABOUTME: This file contains unit tests for the project configuration
// ABOUTME: It tests that the basic configuration settings are correctly initialized

import { expect, describe, it } from 'vitest';
import { getSiteConfig } from '../../lib/config';

describe('Site Configuration', () => {
  it('should have the correct site title', () => {
    const config = getSiteConfig();
    expect(config.title).toBe('nobinarie.com');
  });

  it('should have the correct site description', () => {
    const config = getSiteConfig();
    expect(config.description).toBeTruthy();
    expect(config.description.length).toBeGreaterThan(10);
  });

  it('should have the correct base URL', () => {
    const config = getSiteConfig();
    expect(config.baseUrl).toBe('https://nobinarie.com');
  });
});