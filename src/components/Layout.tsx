// ABOUTME: This file contains the main Layout component which provides the overall page structure
// ABOUTME: It includes the header, footer, and main content area with accessibility features

import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main Layout component that wraps all pages
 * 
 * Features:
 * - Consistent header and footer across all pages
 * - Accessibility features like skip links
 * - Dark mode support with system preference detection
 * - Responsive layout structure
 * 
 * @param children The page content to be rendered inside the layout
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Effect to add dark mode class based on local storage preference or system preference
  useEffect(() => {
    try {
      const isDarkMode = 
        localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // Silent fail if localStorage is not available
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main id="main-content" className="flex-grow" role="main" tabIndex={-1}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};