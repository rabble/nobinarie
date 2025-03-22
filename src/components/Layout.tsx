// ABOUTME: This file contains the main layout component with accessibility features
// ABOUTME: It provides a consistent structure for all pages with proper semantic HTML

import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { getSiteConfig } from '@/lib/config';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  pageTitle, 
  description 
}: LayoutProps) {
  const siteConfig = getSiteConfig();
  const title = pageTitle 
    ? `${pageTitle} | ${siteConfig.title}`
    : siteConfig.title;
  const metaDescription = description || siteConfig.description;

  // Apply font size preference from localStorage on initial render
  useEffect(() => {
    // Initialize dark mode based on preference
    if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Initialize font size based on preference
    if (localStorage.getItem('fontSizePreference') === 'large') {
      document.documentElement.classList.add('text-lg');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={siteConfig.themeColor} />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.baseUrl} />
        <meta property="og:site_name" content={siteConfig.title} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Accessibility Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <html lang="es" />
      </Head>
      
      <Header />
      
      <main 
        id="main-content" 
        className="flex-grow" 
        role="main" 
        tabIndex={-1}
      >
        {children}
      </main>
      
      <Footer />
    </div>
  );
}