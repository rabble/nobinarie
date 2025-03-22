// ABOUTME: This file contains the Header component that appears at the top of all pages
// ABOUTME: It provides navigation, accessibility features, and responsive mobile menu

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * Header component for the site
 * 
 * Features:
 * - Responsive navigation with mobile menu toggle
 * - Skip to content link for accessibility
 * - Visual emphasis on navigation items
 * - Attractive gradient background
 * - Rainbow accent border
 */
export const Header: React.FC = () => {
  // State to track whether mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-nonbinary-yellow via-nonbinary-purple to-nonbinary-purple dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 shadow-md relative overflow-hidden" role="banner">
      {/* Rainbow top border */}
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
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold bg-clip-text text-transparent bg-rainbow-gradient bg-300% animate-rainbow-text"
              >
                nobinarie
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8" aria-label="Navigation principal">
              <Link 
                href="/que-es-lengua-inclusiva" 
                className="border-transparent text-gray-800 dark:text-white hover:text-rainbow-purple dark:hover:text-rainbow-purple hover:border-rainbow-purple inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                Qué es lengua inclusiva
              </Link>
              <Link 
                href="/lenguaje-inclusivo-en-accion" 
                className="border-transparent text-gray-800 dark:text-white hover:text-rainbow-red dark:hover:text-rainbow-red hover:border-rainbow-red inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors animate-pulse-slow"
              >
                ¡En acción!
              </Link>
              <Link 
                href="/por-que-usamos-la-e" 
                className="border-transparent text-gray-800 dark:text-white hover:text-rainbow-blue dark:hover:text-rainbow-blue hover:border-rainbow-blue inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                Por qué usamos la -e
              </Link>
              <Link 
                href="/tutoriales" 
                className="border-transparent text-gray-800 dark:text-white hover:text-rainbow-green dark:hover:text-rainbow-green hover:border-rainbow-green inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                Tutoriales
              </Link>
              <Link 
                href="/contribuir" 
                className="border-transparent text-gray-800 dark:text-white hover:text-rainbow-orange dark:hover:text-rainbow-orange hover:border-rainbow-orange inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
              >
                Contribuir
              </Link>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-gray-800/40 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rainbow-yellow transition-colors"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm`}
        id="mobile-menu"
      >
        <div className="pt-2 pb-3 space-y-1">
          <Link
            href="/que-es-lengua-inclusiva"
            className="border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-purple hover:text-rainbow-purple dark:hover:text-rainbow-purple block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
          >
            Qué es lengua inclusiva
          </Link>
          <Link
            href="/lenguaje-inclusivo-en-accion"
            className="border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-red hover:text-rainbow-red dark:hover:text-rainbow-red block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors relative"
          >
            <span className="relative inline-block">
              ¡En acción!
              <span className="absolute -top-1 -right-4 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rainbow-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rainbow-red"></span>
              </span>
            </span>
          </Link>
          <Link
            href="/por-que-usamos-la-e"
            className="border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-blue hover:text-rainbow-blue dark:hover:text-rainbow-blue block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
          >
            Por qué usamos la -e
          </Link>
          <Link
            href="/tutoriales"
            className="border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-green hover:text-rainbow-green dark:hover:text-rainbow-green block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
          >
            Tutoriales
          </Link>
          <Link
            href="/contribuir"
            className="border-transparent text-gray-800 dark:text-white hover:bg-nonbinary-yellow/10 dark:hover:bg-white/5 hover:border-rainbow-orange hover:text-rainbow-orange dark:hover:text-rainbow-orange block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors"
          >
            Contribuir
          </Link>
        </div>
      </div>
    </header>
  );
};