// ABOUTME: This file is the main app component that wraps all pages
// ABOUTME: It applies global styles and shared components

import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/styles/globals.css';
import { getSiteConfig } from '@/lib/config';

function MyApp({ Component, pageProps }: AppProps) {
  const siteConfig = getSiteConfig();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={siteConfig.description} />
        <meta name="theme-color" content={siteConfig.themeColor} />
        <title>{siteConfig.title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;