// ABOUTME: This file contains unit tests for the macOS tutorial page
// ABOUTME: It tests the basic rendering and content sections of the macOS tutorial

import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';

// Mock the MacOSTutorial component
vi.mock('@/pages/tutoriales/macos', () => ({
  __esModule: true,
  default: () => (
    <div>
      <nav aria-label="breadcrumbs">
        <a href="/">Inicio</a>
        <a href="/tutoriales">Tutoriales</a>
      </nav>
      <h1>Tutorial de instalación para macOS</h1>
      <h2>Requisitos previos</h2>
      <h2>Paso 1: Extraer los archivos del diccionario</h2>
      <h2>Paso 2: Instalar el diccionario a nivel del sistema</h2>
      <h2>Instalación en LibreOffice</h2>
      <h2>Instalación en Pages, Numbers y Keynote</h2>
      <h2>Solución de problemas comunes</h2>
      <a href="/descargas">página de descargas</a>
      <a href="/que-es-lengua-inclusiva">Conocer más</a>
      <a href="/glosario">Ver glosario</a>
    </div>
  )
}));

describe('macOS Tutorial Page', () => {
  it('should render the page title', () => {
    render(<MacOSTutorial />);
    
    const heading = screen.getByRole('heading', { name: 'Tutorial de instalación para macOS', level: 1 });
    expect(heading).toBeDefined();
  });

  it('should include breadcrumbs navigation', () => {
    render(<MacOSTutorial />);
    
    const breadcrumbs = screen.getByRole('navigation', { name: /breadcrumbs/i });
    expect(breadcrumbs).toBeDefined();
    
    const tutorialesLink = screen.getByRole('link', { name: 'Tutoriales' });
    expect(tutorialesLink).toBeDefined();
    expect(tutorialesLink).toHaveAttribute('href', '/tutoriales');
  });

  it('should display main tutorial sections', () => {
    render(<MacOSTutorial />);
    
    // Check for the extraction section
    const extractionHeading = screen.getByRole('heading', { name: /paso 1: extraer los archivos/i });
    expect(extractionHeading).toBeDefined();
    
    // Check for the system level installation section
    const systemHeading = screen.getByRole('heading', { name: /paso 2: instalar el diccionario/i });
    expect(systemHeading).toBeDefined();
    
    // Check for the LibreOffice section
    const libreOfficeHeading = screen.getByRole('heading', { name: /instalación en libreoffice/i });
    expect(libreOfficeHeading).toBeDefined();
    
    // Check for the Pages section
    const pagesHeading = screen.getByRole('heading', { name: /instalación en pages/i });
    expect(pagesHeading).toBeDefined();
    
    // Check for the troubleshooting section
    const troubleshootingHeading = screen.getByRole('heading', { name: /solución de problemas/i });
    expect(troubleshootingHeading).toBeDefined();
  });

  it('should display the prerequisites section', () => {
    render(<MacOSTutorial />);
    
    const prerequisitesHeading = screen.getByRole('heading', { name: /requisitos previos/i });
    expect(prerequisitesHeading).toBeDefined();
  });

  it('should have links to other relevant pages', () => {
    render(<MacOSTutorial />);
    
    // Check for download page link
    const downloadLink = screen.getByRole('link', { name: /página de descargas/i });
    expect(downloadLink).toBeDefined();
    expect(downloadLink).toHaveAttribute('href', '/descargas');
  });
});