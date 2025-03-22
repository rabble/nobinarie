// ABOUTME: This file is the main app component that wraps all pages
// ABOUTME: It applies global styles and manages app-wide state

import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;