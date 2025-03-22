// ABOUTME: This file contains e2e tests for dictionary download functionality
// ABOUTME: It tests that users can download dictionaries from the website

import { test, expect } from '@playwright/test';

test('should display dictionary download options on the downloads page', async ({ page }) => {
  await page.goto('/descargas');
  
  // Check that dictionary download section exists
  await expect(page.locator('h2:has-text("Diccionarios")')).toBeVisible();
  
  // Check that at least one dictionary download link exists
  const downloadLink = page.locator('a[href*="dictionary"]').first();
  await expect(downloadLink).toBeVisible();
});

test('should allow downloading the latest dictionary version', async ({ page }) => {
  await page.goto('/descargas');
  
  // Click the latest version download link
  const latestVersionLink = page.locator('a:has-text("última versión")').first();
  
  // This is a download link, so we can't check the download itself in the test
  // But we can check that the link has the correct attributes
  await expect(latestVersionLink).toHaveAttribute('href', /.*\/dictionaries\/latest\/.*\.zip/);
  await expect(latestVersionLink).toHaveAttribute('download');
});

test('should display dictionary installation instructions', async ({ page }) => {
  await page.goto('/descargas');
  
  // Check that installation instructions sections exist
  await expect(page.locator('h3:has-text("Instrucciones de instalación")')).toBeVisible();
  
  // Check that there are instructions for multiple platforms
  await expect(page.locator('h4:has-text("Windows")')).toBeVisible();
  await expect(page.locator('h4:has-text("macOS")')).toBeVisible();
  await expect(page.locator('h4:has-text("Linux")')).toBeVisible();
});

test('should show version history and changelog', async ({ page }) => {
  await page.goto('/descargas');
  
  // Check that version history section exists
  await expect(page.locator('h3:has-text("Historial de versiones")')).toBeVisible();
  
  // Check that at least one version entry exists in the changelog
  await expect(page.locator('.version-entry').first()).toBeVisible();
});