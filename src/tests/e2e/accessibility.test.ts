// ABOUTME: This file contains e2e tests for site accessibility
// ABOUTME: It tests keyboard navigation and accessibility features across pages

import { test, expect } from '@playwright/test';

test('should navigate entire site using keyboard only', async ({ page }) => {
  await page.goto('/');
  
  // Press Tab to find skip link and activate it
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toHaveText('Skip to content');
  await page.keyboard.press('Enter');
  
  // Verify we're at the main content
  await expect(page.locator('#main-content:focus-within')).toBeVisible();
  
  // Continue tabbing to navigate to menu items
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab');
  }
  
  // We should be at the first nav item
  await expect(page.locator(':focus')).toContainText('Qué es lengua inclusiva');
  
  // Press Enter to navigate to that page
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/.*que-es-lengua-inclusiva/);
  
  // Make sure the page has loaded accessibility features
  await expect(page.locator('a[href="#main-content"]')).toBeVisible();
});

test('should toggle dark mode with keyboard', async ({ page }) => {
  await page.goto('/');
  
  // Tab to the dark mode toggle button
  let reachedToggle = false;
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Tab');
    if (await page.locator(':focus[aria-label="Toggle dark mode"]').count() > 0) {
      reachedToggle = true;
      break;
    }
  }
  
  expect(reachedToggle).toBeTruthy();
  
  // Toggle dark mode
  await page.keyboard.press('Enter');
  
  // Check that dark mode is applied
  await expect(page.locator('html.dark')).toBeVisible();
});

test('should toggle font size with keyboard', async ({ page }) => {
  await page.goto('/');
  
  // Tab to the font size toggle button
  let reachedToggle = false;
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press('Tab');
    if (await page.locator(':focus[aria-label="Toggle font size"]').count() > 0) {
      reachedToggle = true;
      break;
    }
  }
  
  expect(reachedToggle).toBeTruthy();
  
  // Toggle font size
  await page.keyboard.press('Enter');
  
  // Check that larger font size is applied
  await expect(page.locator('html.text-lg')).toBeVisible();
});