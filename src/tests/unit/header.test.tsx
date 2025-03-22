// ABOUTME: This file contains unit tests for the Header component
// ABOUTME: It tests the basic rendering and functionality of the header

import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import Header from '@/components/Header';

describe('Header Component', () => {
  it('should render the site logo/name', () => {
    render(<Header />);
    const logo = screen.getByText('nobinarie');
    expect(logo).toBeDefined();
  });

  it('should render navigation links', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should contain dark mode toggle button', () => {
    render(<Header />);
    const darkModeButton = screen.getByLabelText('Toggle dark mode');
    expect(darkModeButton).toBeDefined();
  });

  it('should contain font size toggle button', () => {
    render(<Header />);
    const fontSizeButton = screen.getByLabelText('Toggle font size');
    expect(fontSizeButton).toBeDefined();
  });
});