// ABOUTME: This file contains integration tests for accessibility features
// ABOUTME: It tests keyboard navigation, ARIA attributes, and other accessibility features

import { render, screen, fireEvent } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import Layout from '@/components/Layout';

// Mock window.matchMedia for dark mode testing
window.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

describe('Layout Accessibility', () => {
  it('should have correct ARIA landmarks', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    expect(screen.getByRole('banner')).toBeDefined(); // header
    expect(screen.getByRole('navigation')).toBeDefined(); // nav
    expect(screen.getByRole('main')).toBeDefined(); // main content
    expect(screen.getByRole('contentinfo')).toBeDefined(); // footer
  });
  
  it('should have skip-to-content link at the top', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    const skipLink = screen.getByText('Skip to content');
    expect(skipLink).toBeDefined();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });
  
  it('should allow keyboard navigation through menu items', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    const navItems = screen.getAllByRole('link', { name: /qué es|por qué|tutoriales|contribuir/i });
    expect(navItems.length).toBeGreaterThan(0);
    
    // Tab through navigation items and verify focus
    navItems.forEach(item => {
      item.focus();
      expect(document.activeElement).toBe(item);
    });
  });
  
  it('should toggle font size when font size button is clicked', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    );
    
    const fontSizeButton = screen.getByLabelText('Toggle font size');
    const htmlElement = document.documentElement;
    
    fireEvent.click(fontSizeButton);
    expect(htmlElement.classList.contains('text-lg')).toBeTruthy();
    
    fireEvent.click(fontSizeButton);
    expect(htmlElement.classList.contains('text-lg')).toBeFalsy();
  });
});