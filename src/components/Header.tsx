// ABOUTME: This file contains the Header component with navigation and accessibility features
// ABOUTME: It provides the site header with responsive menu and accessibility controls

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Only show UI elements after hydration to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle font size for better readability
  const toggleFontSize = () => {
    document.documentElement.classList.toggle('text-lg');
    localStorage.setItem(
      'fontSizePreference',
      document.documentElement.classList.contains('text-lg') ? 'large' : 'normal'
    );
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.theme = isDark ? 'light' : 'dark';
  };

  // Load font size preference from local storage on client
  useEffect(() => {
    if (localStorage.getItem('fontSizePreference') === 'large') {
      document.documentElement.classList.add('text-lg');
    }
  }, []);

  return (
    <header 
      className="bg-gradient-to-r from-nonbinary-yellow via-nonbinary-purple to-nonbinary-purple dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 shadow-md relative overflow-hidden" 
      role="banner"
    >
      {/* Rainbow border on top */}
      <div className="h-1 w-full bg-rainbow-gradient absolute top-0 left-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="absolute top-0 left-0 p-2 -translate-y-full focus:translate-y-0 bg-rainbow-blue text-white z-50"
        >
          Skip to content
        </a>

        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-rainbow-gradient bg-300% animate-rainbow-text">
                nobinarie
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8" aria-label="Navigation principal">
              <Link 
                href="/que-es-lengua-inclusiva" 
                className={`${
                  router.pathname === '/que-es-lengua-inclusiva' 
                    ? 'border-rainbow-purple text-gray-900 dark:text-white' 
                    : 'border-transparent text-gray-800 dark:text-white hover:text-rainbow-purple dark:hover:text-rainbow-purple hover:border-rainbow-purple'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Qué es lengua inclusiva
              </Link>
              <Link 
                href="/por-que-usamos-la-e" 
                className={`${
                  router.pathname === '/por-que-usamos-la-e' 
                    ? 'border-rainbow-blue text-gray-900 dark:text-white' 
                    : 'border-transparent text-gray-800 dark:text-white hover:text-rainbow-blue dark:hover:text-rainbow-blue hover:border-rainbow-blue'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Por qué usamos la -e
              </Link>
              <Link 
                href="/tutoriales" 
                className={`${
                  router.pathname.startsWith('/tutoriales') 
                    ? 'border-rainbow-green text-gray-900 dark:text-white' 
                    : 'border-transparent text-gray-800 dark:text-white hover:text-rainbow-green dark:hover:text-rainbow-green hover:border-rainbow-green'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Tutoriales
              </Link>
              <Link 
                href="/contribuir" 
                className={`${
                  router.pathname === '/contribuir' 
                    ? 'border-rainbow-orange text-gray-900 dark:text-white' 
                    : 'border-transparent text-gray-800 dark:text-white hover:text-rainbow-orange dark:hover:text-rainbow-orange hover:border-rainbow-orange'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                Contribuir
              </Link>
            </nav>
          </div>
          
          {/* Accessibility controls */}
          <div className="flex items-center">
            {mounted && (
              <>
                <button 
                  className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-gray-800/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-yellow dark:focus:ring-offset-gray-900 transition-colors"
                  aria-label="Toggle font size"
                  onClick={toggleFontSize}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </button>
                <button 
                  className="ml-3 p-2 rounded-full text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-gray-800/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-yellow dark:focus:ring-offset-gray-900 transition-colors"
                  aria-label="Toggle dark mode"
                  onClick={toggleDarkMode}
                >
                  <svg className="hidden dark:block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <svg className="block dark:hidden h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </button>
              </>
            )}
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-gray-800/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rainbow-yellow transition-colors"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/que-es-lengua-inclusiva"
            className={`${
              router.pathname === '/que-es-lengua-inclusiva'
                ? 'bg-nonbinary-yellow/20 border-rainbow-purple text-rainbow-purple dark:text-rainbow-purple'
                : 'border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-purple hover:text-rainbow-purple dark:hover:text-rainbow-purple'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Qué es lengua inclusiva
          </Link>
          <Link
            href="/por-que-usamos-la-e"
            className={`${
              router.pathname === '/por-que-usamos-la-e'
                ? 'bg-nonbinary-yellow/20 border-rainbow-blue text-rainbow-blue dark:text-rainbow-blue'
                : 'border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-blue hover:text-rainbow-blue dark:hover:text-rainbow-blue'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Por qué usamos la -e
          </Link>
          <Link
            href="/tutoriales"
            className={`${
              router.pathname.startsWith('/tutoriales')
                ? 'bg-nonbinary-yellow/20 border-rainbow-green text-rainbow-green dark:text-rainbow-green'
                : 'border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-green hover:text-rainbow-green dark:hover:text-rainbow-green'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Tutoriales
          </Link>
          <Link
            href="/contribuir"
            className={`${
              router.pathname === '/contribuir'
                ? 'bg-nonbinary-yellow/20 border-rainbow-orange text-rainbow-orange dark:text-rainbow-orange'
                : 'border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-orange hover:text-rainbow-orange dark:hover:text-rainbow-orange'
            } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contribuir
          </Link>
        </div>
      </div>
    </header>
  );
}