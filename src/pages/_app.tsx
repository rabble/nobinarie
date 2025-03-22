// ABOUTME: This file is the main app component that wraps all pages
// ABOUTME: It applies global styles and manages app-wide state and error handling

import { AppProps } from 'next/app';
import Head from 'next/head';
import ErrorBoundary from '@/components/ErrorBoundary';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;