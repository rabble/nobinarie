// ABOUTME: This file contains end-to-end tests for site navigation
// ABOUTME: It tests that the user can navigate between different pages

import { test, expect } from '@playwright/test';

test('should navigate to main pages', async ({ page }) => {
  await page.goto('/');
  
  // Check homepage
  await expect(page).toHaveTitle(/nobinarie/);
  
  // Navigate to "Qué es lengua inclusiva" page
  await page.click('text=Qué es lengua inclusiva');
  await expect(page).toHaveURL(/.*que-es-lengua-inclusiva/);
  
  // Navigate to "Por qué usamos la -e" page
  await page.click('text=Por qué usamos la -e');
  await expect(page).toHaveURL(/.*por-que-usamos-la-e/);
  
  // Navigate back to homepage
  await page.click('text=nobinarie');
  await expect(page).toHaveURL(/.*\/$/);
});