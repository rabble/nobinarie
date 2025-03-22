// ABOUTME: This file contains e2e tests for the tutorial pages navigation
// ABOUTME: It tests that users can navigate between the tutorial pages

import { test, expect } from '@playwright/test';

// Navigate from tutorials index to platform-specific tutorials
test('should navigate from tutorials index to platform-specific tutorials', async ({ page }) => {
  // Start at the tutorials index page
  await page.goto('/tutoriales');
  
  // Check if the page has loaded correctly
  await expect(page.getByRole('heading', { name: /tutoriales de instalación/i })).toBeVisible();
  
  // Find and click the Windows tutorial link
  const windowsCard = page.getByRole('link', { name: /windows/i }).first();
  await expect(windowsCard).toBeVisible();
  await windowsCard.click();
  
  // Check if we navigated to the Windows tutorial page
  await expect(page).toHaveURL(/\/tutoriales\/windows/);
  await expect(page.getByRole('heading', { name: /tutorial de instalación para windows/i })).toBeVisible();
  
  // Go back to tutorials index
  await page.goto('/tutoriales');
  
  // Find and click the macOS tutorial link
  const macosCard = page.getByRole('link', { name: /macos/i }).first();
  await expect(macosCard).toBeVisible();
  await macosCard.click();
  
  // Check if we navigated to the macOS tutorial page
  await expect(page).toHaveURL(/\/tutoriales\/macos/);
  await expect(page.getByRole('heading', { name: /tutorial de instalación para macos/i })).toBeVisible();
});

// Navigate back to index page
test('should navigate from tutorial pages back to index page', async ({ page }) => {
  // Test navigation from Windows tutorial
  await page.goto('/tutoriales/windows');
  
  await expect(page.getByRole('heading', { name: /tutorial de instalación para windows/i })).toBeVisible();
  
  let tutorialesLink = page.getByRole('link', { name: 'Tutoriales' });
  await expect(tutorialesLink).toBeVisible();
  await tutorialesLink.click();
  
  await expect(page).toHaveURL(/\/tutoriales$/);
  await expect(page.getByRole('heading', { name: /tutoriales de instalación/i })).toBeVisible();
  
  // Test navigation from macOS tutorial
  await page.goto('/tutoriales/macos');
  
  await expect(page.getByRole('heading', { name: /tutorial de instalación para macos/i })).toBeVisible();
  
  tutorialesLink = page.getByRole('link', { name: 'Tutoriales' });
  await expect(tutorialesLink).toBeVisible();
  await tutorialesLink.click();
  
  await expect(page).toHaveURL(/\/tutoriales$/);
  await expect(page.getByRole('heading', { name: /tutoriales de instalación/i })).toBeVisible();
});

// Navigate to resources
test('should navigate to resources from tutorial pages', async ({ page }) => {
  // Test navigation from Windows tutorial
  await page.goto('/tutoriales/windows');
  
  await expect(page.getByRole('heading', { name: /tutorial de instalación para windows/i })).toBeVisible();
  
  let downloadsLink = page.getByRole('link', { name: /página de descargas/i });
  await expect(downloadsLink).toBeVisible();
  await downloadsLink.click();
  
  await expect(page).toHaveURL(/\/descargas/);
  await expect(page.getByRole('heading', { name: /descargar diccionarios inclusivos/i })).toBeVisible();
  
  // Test navigation from macOS tutorial
  await page.goto('/tutoriales/macos');
  
  await expect(page.getByRole('heading', { name: /tutorial de instalación para macos/i })).toBeVisible();
  
  downloadsLink = page.getByRole('link', { name: /página de descargas/i });
  await expect(downloadsLink).toBeVisible();
  await downloadsLink.click();
  
  await expect(page).toHaveURL(/\/descargas/);
  await expect(page.getByRole('heading', { name: /descargar diccionarios inclusivos/i })).toBeVisible();
});

// Jump between sections
test('should jump to sections within tutorial pages', async ({ page }) => {
  // Test section navigation in Windows tutorial
  await page.goto('/tutoriales/windows');
  
  await expect(page.getByRole('heading', { name: /tutorial de instalación para windows/i })).toBeVisible();
  
  let firefoxSection = page.getByRole('heading', { name: /instalación en mozilla firefox/i });
  await expect(firefoxSection).toBeVisible();
  await firefoxSection.scrollIntoViewIfNeeded();
  
  let troubleshootingSection = page.getByRole('heading', { name: /solución de problemas/i });
  await expect(troubleshootingSection).toBeVisible();
  await troubleshootingSection.scrollIntoViewIfNeeded();
  
  // Test section navigation in macOS tutorial
  await page.goto('/tutoriales/macos');
  
  await expect(page.getByRole('heading', { name: /tutorial de instalación para macos/i })).toBeVisible();
  
  const systemSection = page.getByRole('heading', { name: /instalación a nivel del sistema/i });
  await expect(systemSection).toBeVisible();
  await systemSection.scrollIntoViewIfNeeded();
  
  const libreofficeSection = page.getByRole('heading', { name: /instalación en libreoffice/i });
  await expect(libreofficeSection).toBeVisible();
  await libreofficeSection.scrollIntoViewIfNeeded();
  
  firefoxSection = page.getByRole('heading', { name: /instalación en mozilla firefox/i });
  await expect(firefoxSection).toBeVisible();
  await firefoxSection.scrollIntoViewIfNeeded();
  
  troubleshootingSection = page.getByRole('heading', { name: /solución de problemas/i });
  await expect(troubleshootingSection).toBeVisible();
  await troubleshootingSection.scrollIntoViewIfNeeded();
});