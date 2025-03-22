// ABOUTME: This file contains integration tests for the tutorial pages
// ABOUTME: It tests that the tutorial pages render correctly with their layouts

import { render, screen, cleanup } from '@testing-library/react';
import { expect, describe, it, afterEach } from 'vitest';
import TutorialesIndex from '@/pages/tutoriales/index';
import WindowsTutorial from '@/pages/tutoriales/windows';
import MacOSTutorial from '@/pages/tutoriales/macos';

describe('Tutorial Pages Integration', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render tutorials index page with correct title', () => {
    render(<TutorialesIndex />);
    expect(screen.getByRole('heading', { name: /tutoriales de instalación/i })).toBeDefined();
  });

  it('should render Windows tutorial page with correct title and sections', () => {
    render(<WindowsTutorial />);
    expect(screen.getByRole('heading', { name: /tutorial de instalación para windows/i })).toBeDefined();
    
    // Check for main sections
    expect(screen.getByRole('heading', { name: /paso 1: extraer los archivos/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /instalación en libreoffice/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /instalación en mozilla firefox/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /instalación en microsoft word/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /solución de problemas/i })).toBeDefined();
  });

  it('should render macOS tutorial page with correct title and sections', () => {
    render(<MacOSTutorial />);
    expect(screen.getByRole('heading', { name: /tutorial de instalación para macos/i })).toBeDefined();
    
    // Check for main sections
    expect(screen.getByRole('heading', { name: /paso 1: extraer los archivos/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /paso 2: instalación a nivel del sistema/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /uso en pages, keynote y numbers/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /instalación en libreoffice/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /instalación en mozilla firefox/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /instalación en google chrome/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /solución de problemas/i })).toBeDefined();
  });

  it('should render Windows page with breadcrumbs navigation', () => {
    // Test Windows breadcrumbs
    render(<WindowsTutorial />);
    
    const breadcrumbs = screen.getAllByRole('navigation', { name: /breadcrumbs/i })[0];
    expect(breadcrumbs).toBeDefined();
    
    const homeLink = screen.getAllByRole('link', { name: 'Inicio' })[0];
    expect(homeLink).toBeDefined();
    expect(homeLink).toHaveAttribute('href', '/');
    
    const tutorialsLink = screen.getAllByRole('link', { name: 'Tutoriales' })[0];
    expect(tutorialsLink).toBeDefined();
    expect(tutorialsLink).toHaveAttribute('href', '/tutoriales');
  });
  
  it('should render macOS page with breadcrumbs navigation', () => {
    // Test macOS breadcrumbs
    render(<MacOSTutorial />);
    
    const breadcrumbs = screen.getAllByRole('navigation', { name: /breadcrumbs/i })[0];
    expect(breadcrumbs).toBeDefined();
    
    const homeLink = screen.getAllByRole('link', { name: 'Inicio' })[0];
    expect(homeLink).toBeDefined();
    expect(homeLink).toHaveAttribute('href', '/');
    
    const tutorialsLink = screen.getAllByRole('link', { name: 'Tutoriales' })[0];
    expect(tutorialsLink).toBeDefined();
    expect(tutorialsLink).toHaveAttribute('href', '/tutoriales');
  });

  it('should render Windows page with navigation to resources', () => {
    // Test Windows resource links
    render(<WindowsTutorial />);
    
    const downloadLink = screen.getAllByRole('link', { name: /página de descargas/i })[0];
    expect(downloadLink).toBeDefined();
    expect(downloadLink).toHaveAttribute('href', '/descargas');
    
    const inclusiveLanguageLink = screen.getAllByRole('link', { name: /Conocer más/i })[0];
    expect(inclusiveLanguageLink).toBeDefined();
    expect(inclusiveLanguageLink).toHaveAttribute('href', '/que-es-lengua-inclusiva');
    
    const glossaryLink = screen.getAllByRole('link', { name: /Ver glosario/i })[0];
    expect(glossaryLink).toBeDefined();
    expect(glossaryLink).toHaveAttribute('href', '/glosario');
  });
  
  it('should render macOS page with navigation to resources', () => {
    // Test macOS resource links
    render(<MacOSTutorial />);
    
    const downloadLink = screen.getAllByRole('link', { name: /página de descargas/i })[0];
    expect(downloadLink).toBeDefined();
    expect(downloadLink).toHaveAttribute('href', '/descargas');
    
    const inclusiveLanguageLink = screen.getAllByRole('link', { name: /Conocer más/i })[0];
    expect(inclusiveLanguageLink).toBeDefined();
    expect(inclusiveLanguageLink).toHaveAttribute('href', '/que-es-lengua-inclusiva');
    
    const glossaryLink = screen.getAllByRole('link', { name: /Ver glosario/i })[0];
    expect(glossaryLink).toBeDefined();
    expect(glossaryLink).toHaveAttribute('href', '/glosario');
  });
});