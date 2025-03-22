// ABOUTME: This file contains unit tests for the Windows tutorial page
// ABOUTME: It tests the basic rendering and content sections of the Windows tutorial

import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import WindowsTutorial from '@/pages/tutoriales/windows';

describe('Windows Tutorial Page', () => {
  it('should render the page title', () => {
    render(<WindowsTutorial />);
    
    const heading = screen.getByRole('heading', { name: 'Tutorial de instalación para Windows', level: 1 });
    expect(heading).toBeDefined();
  });

  it('should include breadcrumbs navigation', () => {
    render(<WindowsTutorial />);
    
    const breadcrumbs = screen.getByRole('navigation', { name: /breadcrumbs/i });
    expect(breadcrumbs).toBeDefined();
    
    const homeLink = screen.getByRole('link', { name: 'Inicio' });
    expect(homeLink).toBeDefined();
    
    const tutorialesLink = screen.getByRole('link', { name: 'Tutoriales' });
    expect(tutorialesLink).toBeDefined();
    expect(tutorialesLink).toHaveAttribute('href', '/tutoriales');
  });

  it('should display main tutorial sections', () => {
    render(<WindowsTutorial />);
    
    // Check for the extraction section
    const extractionHeading = screen.getByRole('heading', { name: 'Paso 1: Extraer los archivos del diccionario' });
    expect(extractionHeading).toBeDefined();
    
    // Check for the LibreOffice section
    const libreOfficeHeading = screen.getByRole('heading', { name: 'Instalación en LibreOffice / OpenOffice' });
    expect(libreOfficeHeading).toBeDefined();
    
    // Check for the Firefox section
    const firefoxHeading = screen.getByRole('heading', { name: 'Instalación en Mozilla Firefox' });
    expect(firefoxHeading).toBeDefined();
    
    // Check for the Word section
    const wordHeading = screen.getByRole('heading', { name: 'Instalación en Microsoft Word' });
    expect(wordHeading).toBeDefined();
    
    // Check for the troubleshooting section
    const troubleshootingHeading = screen.getByRole('heading', { name: 'Solución de problemas comunes' });
    expect(troubleshootingHeading).toBeDefined();
  });

  it('should display the prerequisites section', () => {
    render(<WindowsTutorial />);
    
    const prerequisitesHeading = screen.getByRole('heading', { name: 'Requisitos previos' });
    expect(prerequisitesHeading).toBeDefined();
    
    // Check that the prerequisites list is present
    const prerequisiteItems = screen.getAllByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && 
        (content.includes('Archivo del diccionario') || 
         content.includes('Una aplicación compatible') ||
         content.includes('Permisos para instalar'));
    });
    
    expect(prerequisiteItems.length).toBeGreaterThanOrEqual(1);
  });

  it('should have links to other relevant pages', () => {
    render(<WindowsTutorial />);
    
    // Check for download page link
    const downloadLink = screen.getByRole('link', { name: /página de descargas/i });
    expect(downloadLink).toBeDefined();
    expect(downloadLink).toHaveAttribute('href', '/descargas');
    
    // Check for links to other language resources
    const inclusiveLanguageLink = screen.getByRole('link', { name: /Conocer más/i });
    expect(inclusiveLanguageLink).toBeDefined();
    expect(inclusiveLanguageLink).toHaveAttribute('href', '/que-es-lengua-inclusiva');
    
    const glossaryLink = screen.getByRole('link', { name: /Ver glosario/i });
    expect(glossaryLink).toBeDefined();
    expect(glossaryLink).toHaveAttribute('href', '/glosario');
    
    const contributeLink = screen.getByRole('link', { name: /Contribuir al proyecto/i });
    expect(contributeLink).toBeDefined();
    expect(contributeLink).toHaveAttribute('href', '/contribuir');
  });
});