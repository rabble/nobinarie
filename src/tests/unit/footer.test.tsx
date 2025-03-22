// ABOUTME: This file contains unit tests for the Footer component
// ABOUTME: It tests the basic rendering and functionality of the footer

import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('should render copyright information', () => {
    render(<Footer />);
    const copyright = screen.getByText(/derechos reservados/i);
    expect(copyright).toBeDefined();
  });

  it('should render footer navigation sections', () => {
    render(<Footer />);
    const recursos = screen.getByText('Recursos');
    const proyecto = screen.getByText('Proyecto');
    const legal = screen.getByText('Legal');
    
    expect(recursos).toBeDefined();
    expect(proyecto).toBeDefined();
    expect(legal).toBeDefined();
  });

  it('should render link to GitHub', () => {
    render(<Footer />);
    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toBeDefined();
    expect(githubLink.closest('a')).toHaveAttribute('href', 'https://github.com/rabble/nobinarie');
  });
});