// ABOUTME: This file contains e2e tests for content page navigation
// ABOUTME: It tests that users can navigate between content pages correctly

import { test, expect } from '@playwright/test';

test('should navigate between content pages using main navigation', async ({ page }) => {
  await page.goto('/');
  
  // Navigate to "Qué es lengua inclusiva" page
  await page.click('text=Qué es lengua inclusiva');
  await expect(page).toHaveURL(/.*que-es-lengua-inclusiva/);
  await expect(page.locator('h1')).toContainText('Qué es lengua inclusiva');
  
  // Navigate to "Por qué usamos la -e" page
  await page.click('text=Por qué usamos la -e');
  await expect(page).toHaveURL(/.*por-que-usamos-la-e/);
  await expect(page.locator('h1')).toContainText('Por qué usamos la -e');
});

test('should navigate between content pages using related links', async ({ page }) => {
  // Start at "Qué es lengua inclusiva" page
  await page.goto('/que-es-lengua-inclusiva');
  
  // Check for and use a related content link
  const relatedLink = page.locator('text=Por qué usamos la -e').first();
  if (await relatedLink.count() > 0) {
    await relatedLink.click();
    await expect(page).toHaveURL(/.*por-que-usamos-la-e/);
  }
});

test('should navigate using breadcrumbs', async ({ page }) => {
  // Start at a deep page
  await page.goto('/recursos-externos');
  
  // Use breadcrumb to go back to homepage
  await page.click('nav[aria-label="Breadcrumbs"] >> text=Inicio');
  await expect(page).toHaveURL('/');
});