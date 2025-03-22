// ABOUTME: This file is the main application wrapper for all pages
// ABOUTME: It provides global styles and layout consistency across the application

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

/**
 * Main application wrapper component
 * 
 * The _app.tsx file is used to:
 * - Import global styles
 * - Set up global metadata 
 * - Initialize third-party libraries that need to wrap the entire app
 * - Track page views or do other app-wide tasks
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="content-language" content="es" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}