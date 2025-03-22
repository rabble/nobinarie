// ABOUTME: This file customizes the HTML document structure
// ABOUTME: It injects global scripts and ensures proper document setup

import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document component to modify the initial HTML
 * 
 * Benefits:
 * - Add language attribute to HTML tag
 * - Insert dark mode detection script before rendering
 * - Customize HTML structure beyond what's possible in _app.tsx
 */
export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        {/* Dark mode detection script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}