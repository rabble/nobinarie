// ABOUTME: This file contains unit tests for the Linux tutorial page
// ABOUTME: It tests the basic rendering and content sections of the Linux tutorial

import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import LinuxTutorial from '@/pages/tutoriales/linux';

// Mock the Next.js components and ContentLayout
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }) => <a href={href}>{children}</a>
}));

vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }) => <img src={src} alt={alt} />
}));

vi.mock('../../components/ContentLayout', () => ({
  __esModule: true,
  default: ({ title, children, breadcrumbs }) => (
    <div>
      <nav aria-label="breadcrumbs">
        {breadcrumbs.map((crumb, i) => (
          <a key={i} href={crumb.href}>{crumb.label}</a>
        ))}
      </nav>
      <h1>{title}</h1>
      {children}
    </div>
  )
}));

describe('Linux Tutorial Page', () => {
  it('should render the page title', () => {
    render(<LinuxTutorial />);
    
    const heading = screen.getByRole('heading', { name: 'Tutorial de instalación para Linux', level: 1 });
    expect(heading).toBeDefined();
  });

  it('should include breadcrumbs navigation', () => {
    render(<LinuxTutorial />);
    
    const breadcrumbs = screen.getByRole('navigation', { name: /breadcrumbs/i });
    expect(breadcrumbs).toBeDefined();
    
    const homeLink = screen.getByRole('link', { name: 'Inicio' });
    expect(homeLink).toBeDefined();
    
    const tutorialesLink = screen.getByRole('link', { name: 'Tutoriales' });
    expect(tutorialesLink).toBeDefined();
    expect(tutorialesLink).toHaveAttribute('href', '/tutoriales');
  });

  it('should display main tutorial sections', () => {
    render(<LinuxTutorial />);
    
    // Check for the extraction section
    const extractionHeading = screen.getByRole('heading', { name: /paso 1: extraer los archivos/i });
    expect(extractionHeading).toBeDefined();
    
    // Check for the system level installation section
    const systemHeading = screen.getByRole('heading', { name: /instalación a nivel del sistema/i });
    expect(systemHeading).toBeDefined();
    
    // Check for the LibreOffice section
    const libreOfficeHeading = screen.getByRole('heading', { name: /instalación en libreoffice/i });
    expect(libreOfficeHeading).toBeDefined();
    
    // Check for the Firefox section
    const firefoxHeading = screen.getByRole('heading', { name: /instalación en firefox/i });
    expect(firefoxHeading).toBeDefined();
    
    // Check for the troubleshooting section
    const troubleshootingHeading = screen.getByRole('heading', { name: /solución de problemas/i });
    expect(troubleshootingHeading).toBeDefined();
  });

  it('should display the prerequisites section', () => {
    render(<LinuxTutorial />);
    
    const prerequisitesHeading = screen.getByRole('heading', { name: /requisitos previos/i });
    expect(prerequisitesHeading).toBeDefined();
  });

  it('should have links to other relevant pages', () => {
    render(<LinuxTutorial />);
    
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
  });
});