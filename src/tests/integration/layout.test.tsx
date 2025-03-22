// ABOUTME: This file contains integration tests for the layout components
// ABOUTME: It tests that the layout components render correctly with different configurations

import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Layout from '../../components/Layout';

describe('Layout Component', () => {
  it('should render header and footer', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    
    expect(screen.getByRole('banner')).toBeDefined(); // Header
    expect(screen.getByRole('contentinfo')).toBeDefined(); // Footer
    expect(screen.getByText('Test Content')).toBeDefined();
  });
  
  it('should render with correct meta title', () => {
    render(
      <Layout pageTitle="Test Page">
        <div>Test Content</div>
      </Layout>
    );
    
    // This will fail until we implement the Layout component properly
    expect(document.title).toContain('Test Page');
  });
});