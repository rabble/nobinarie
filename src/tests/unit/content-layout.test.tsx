// ABOUTME: This file contains unit tests for the content page layout component
// ABOUTME: It tests the basic rendering and functionality of the content layout

import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import ContentLayout from '@/components/ContentLayout';

describe('ContentLayout Component', () => {
  it('should render the page title', () => {
    render(
      <ContentLayout title="Test Title" description="Test description">
        <div>Test Content</div>
      </ContentLayout>
    );
    
    const heading = screen.getByRole('heading', { name: 'Test Title' });
    expect(heading).toBeDefined();
  });

  it('should render content within the layout', () => {
    render(
      <ContentLayout title="Test Title" description="Test description">
        <div data-testid="test-content">Test Content</div>
      </ContentLayout>
    );
    
    const content = screen.getByTestId('test-content');
    expect(content).toBeDefined();
    expect(content.textContent).toBe('Test Content');
  });

  it('should include breadcrumbs navigation', () => {
    render(
      <ContentLayout 
        title="Test Title" 
        description="Test description"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Section', href: '/section' }
        ]}
      >
        <div>Test Content</div>
      </ContentLayout>
    );
    
    const breadcrumbs = screen.getByRole('navigation', { name: /breadcrumbs/i });
    expect(breadcrumbs).toBeDefined();
    
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeDefined();
    expect(homeLink).toHaveAttribute('href', '/');
    
    const sectionLink = screen.getByRole('link', { name: 'Section' });
    expect(sectionLink).toBeDefined();
    expect(sectionLink).toHaveAttribute('href', '/section');
  });
});