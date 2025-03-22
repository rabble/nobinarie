// ABOUTME: This file contains the content page layout component
// ABOUTME: It provides a consistent structure for all content pages with navigation and styling

import React, { ReactNode } from 'react';
import Link from 'next/link';
import Layout from './Layout';

type Breadcrumb = {
  label: string;
  href: string;
};

interface ContentLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  lastUpdated?: string;
}

export default function ContentLayout({
  children,
  title,
  description,
  breadcrumbs = [],
  lastUpdated,
}: ContentLayoutProps) {
  const defaultBreadcrumbs = [
    { label: 'Inicio', href: '/' },
    ...(breadcrumbs || []),
  ];

  return (
    <Layout pageTitle={title} description={description}>
      <div className="relative overflow-hidden">
        {/* Decorative gradient bubbles */}
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-3"></div>

        {/* Header and breadcrumbs */}
        <div className="bg-gradient-to-r from-rainbow-blue/20 to-rainbow-purple/20 dark:from-rainbow-blue/10 dark:to-rainbow-purple/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumbs */}
            <nav className="flex mb-4" aria-label="Breadcrumbs">
              <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                {defaultBreadcrumbs.map((crumb, index) => (
                  <li key={crumb.href} className="flex items-center">
                    {index > 0 && (
                      <svg
                        className="h-5 w-5 text-rainbow-blue/50 mx-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {index === defaultBreadcrumbs.length - 1 ? (
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="hover:text-rainbow-blue dark:hover:text-rainbow-blue transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Page title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
            {children}
          </div>
          
          {lastUpdated && (
            <div className="max-w-4xl mx-auto mt-16 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Última actualización: {lastUpdated}
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}