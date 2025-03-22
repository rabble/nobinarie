// ABOUTME: This file contains the main layout component
// ABOUTME: It provides consistent structure across all pages

import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/config';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  const siteConfig = getSiteConfig();
  const title = pageTitle 
    ? `${pageTitle} | ${siteConfig.title}`
    : siteConfig.title;

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      
      <header className="bg-white dark:bg-gray-900 shadow-sm" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  nobinarie
                </Link>
              </div>
              <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/que-es-lengua-inclusiva" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Qué es lengua inclusiva
                </Link>
                <Link href="/por-que-usamos-la-e" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Por qué usamos la -e
                </Link>
                <Link href="/tutoriales" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Tutoriales
                </Link>
                <Link href="/contribuir" className="border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Contribuir
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button 
                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
                onClick={() => {
                  const isDark = document.documentElement.classList.contains('dark');
                  document.documentElement.classList.toggle('dark', !isDark);
                  localStorage.theme = isDark ? 'light' : 'dark';
                }}
              >
                <svg className="hidden dark:block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg className="block dark:hidden h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-white dark:bg-gray-900" role="contentinfo">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">Recursos</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/descargas" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Descargas
                  </Link>
                </li>
                <li>
                  <Link href="/tutoriales" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Tutoriales
                  </Link>
                </li>
                <li>
                  <Link href="/recursos-externos" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Recursos externos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">Proyecto</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/acerca-de" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="/contribuir" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Contribuir
                  </Link>
                </li>
                <li>
                  <Link href="/creditos" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Créditos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/privacidad" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <a href="https://github.com/rabble/nobinarie" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="https://github.com/rabble/nobinarie" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-500 dark:text-gray-400 md:mt-0 md:order-1">
              &copy; {new Date().getFullYear()} nobinarie.com. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}