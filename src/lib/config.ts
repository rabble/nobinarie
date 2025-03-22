// ABOUTME: This file contains the site-wide configuration
// ABOUTME: It provides centralized config for titles, metadata, etc.

export interface SiteConfig {
  title: string;
  description: string;
  baseUrl: string;
  defaultLocale: string;
  author: {
    name: string;
    url: string;
  };
  themeColor: string;
  analytics?: {
    cloudflareWeb?: string;
  };
}

export function getSiteConfig(): SiteConfig {
  return {
    title: 'nobinarie.com',
    description: 'Sitio para herramientas y recursos de lenguaje inclusivo en español',
    baseUrl: 'https://nobinarie.com',
    defaultLocale: 'es',
    author: {
      name: 'Equipo nobinarie',
      url: 'https://github.com/rabble/nobinarie',
    },
    themeColor: '#0284c7',
    analytics: {
      cloudflareWeb: process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_ID,
    },
  };
}