// ABOUTME: This file contains the Footer component that appears at the bottom of all pages
// ABOUTME: It provides navigation links, legal information, and social media connections

import React from 'react';
import Link from 'next/link';

/**
 * Footer component for the site
 * 
 * Features:
 * - Organized navigation by categories
 * - Social media links
 * - Copyright information
 * - Consistent styling with gradient background
 * - Rainbow accent border
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-gradient-to-r from-nonbinary-purple via-nonbinary-purple to-nonbinary-yellow dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-white relative overflow-hidden" 
      role="contentinfo"
    >
      {/* Rainbow bottom border */}
      <div className="h-1 w-full bg-rainbow-gradient absolute bottom-0 left-0 right-0 rotate-180"></div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer navigation */}
        <nav className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Footer">
          {/* Resources section */}
          <div>
            <h2 
              className="text-sm font-semibold text-gray-900 dark:text-rainbow-yellow tracking-wider uppercase" 
              id="footer-recursos"
            >
              Recursos
            </h2>
            <ul className="mt-4 space-y-4" aria-labelledby="footer-recursos">
              <li>
                <Link 
                  href="/descargas" 
                  className="text-base text-gray-700 dark:text-gray-300 hover:text-rainbow-blue dark:hover:text-rainbow-blue focus:outline-none focus:ring-2 focus:ring-rainbow-blue focus:text-rainbow-blue dark:focus:text-rainbow-blue rounded-md transition-colors"
                >
                  Descargas
                </Link>
              </li>
              <li>
                <Link 
                  href="/tutoriales" 
                  className="text-base text-gray-700 dark:text-gray-300 hover:text-rainbow-green dark:hover:text-rainbow-green focus:outline-none focus:ring-2 focus:ring-rainbow-green focus:text-rainbow-green dark:focus:text-rainbow-green rounded-md transition-colors"
                >
                  Tutoriales
                </Link>
              </li>
              <li>
                <Link 
                  href="/recursos-externos" 
                  className="text-base text-gray-700 dark:text-gray-300 hover:text-rainbow-purple dark:hover:text-rainbow-purple focus:outline-none focus:ring-2 focus:ring-rainbow-purple focus:text-rainbow-purple dark:focus:text-rainbow-purple rounded-md transition-colors"
                >
                  Recursos externos
                </Link>
              </li>
            </ul>
          </div>

          {/* Project section */}
          <div>
            <h2 
              className="text-sm font-semibold text-gray-900 dark:text-rainbow-orange tracking-wider uppercase" 
              id="footer-proyecto"
            >
              Proyecto
            </h2>
            <ul className="mt-4 space-y-4" aria-labelledby="footer-proyecto">
              <li>
                <Link 
                  href="/acerca-de" 
                  className="text-base text-gray-700 dark:text-gray-300 hover:text-rainbow-orange dark:hover:text-rainbow-orange focus:outline-none focus:ring-2 focus:ring-rainbow-orange focus:text-rainbow-orange dark:focus:text-rainbow-orange rounded-md transition-colors"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link 
                  href="/contribuir" 
                  className="text-base text-gray-700 dark:text-gray-300 hover:text-rainbow-red dark:hover:text-rainbow-red focus:outline-none focus:ring-2 focus:ring-rainbow-red focus:text-rainbow-red dark:focus:text-rainbow-red rounded-md transition-colors"
                >
                  Contribuir
                </Link>
              </li>
              <li>
                <Link 
                  href="/creditos" 
                  className="text-base text-gray-700 dark:text-gray-300 hover:text-rainbow-pink dark:hover:text-rainbow-pink focus:outline-none focus:ring-2 focus:ring-rainbow-pink focus:text-rainbow-pink dark:focus:text-rainbow-pink rounded-md transition-colors"
                >
                  Créditos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal section */}
          <div>
            <h2 
              className="text-sm font-semibold text-gray-900 dark:text-rainbow-green tracking-wider uppercase" 
              id="footer-legal"
            >
              Legal
            </h2>
            <ul className="mt-4 space-y-4" aria-labelledby="footer-legal">
              <li>
                <Link 
                  href="/privacidad" 
                  className="text-base text-gray-700 dark:text-gray-300 hover:text-rainbow-purple dark:hover:text-rainbow-purple focus:outline-none focus:ring-2 focus:ring-rainbow-purple focus:text-rainbow-purple dark:focus:text-rainbow-purple rounded-md transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/rabble/nobinarie" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base text-gray-700 dark:text-gray-300 hover:text-rainbow-blue dark:hover:text-rainbow-blue focus:outline-none focus:ring-2 focus:ring-rainbow-blue focus:text-rainbow-blue dark:focus:text-rainbow-blue rounded-md transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Bottom section with social links and copyright */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          {/* Social media links */}
          <div className="flex space-x-6 md:order-2">
            <a 
              href="https://github.com/rabble/nobinarie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-rainbow-gradient-hover dark:hover:text-rainbow-gradient-hover focus:outline-none focus:ring-2 focus:ring-rainbow-blue dark:focus:ring-offset-gray-900 rounded-md transition-colors"
              aria-label="GitHub repository"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path 
                  fillRule="evenodd" 
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-8 text-base text-gray-700 dark:text-gray-300 md:mt-0 md:order-1">
            &copy; {currentYear} nobinarie.com. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};