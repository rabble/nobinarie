// ABOUTME: This file contains the ContentLayout component for consistent page layout
// ABOUTME: It provides a standard structure for content pages with breadcrumbs and styling

import React, { ReactNode } from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ContentLayoutProps {
  title: string;
  description: string;
  backgroundClass?: string;
  breadcrumbs?: BreadcrumbItem[];
  children: ReactNode;
}

/**
 * ContentLayout component provides a consistent layout for content pages
 * 
 * Features:
 * - Page title and description in a styled header section
 * - Optional breadcrumb navigation
 * - Customizable background gradient
 * - Bubble decorative elements for visual interest
 * - Structured content area with consistent styling
 * - Responsive layout with proper spacing
 * 
 * @param title Page title shown as the main heading
 * @param description Subtitle shown below the main heading
 * @param backgroundClass Optional CSS class for customizing the header background
 * @param breadcrumbs Optional array of breadcrumb items for navigation
 * @param children The page content
 */
const ContentLayout: React.FC<ContentLayoutProps> = ({ 
  title, 
  description, 
  backgroundClass = "bg-white dark:bg-gray-900",
  breadcrumbs = [{ label: "Inicio" }],
  children 
}) => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-3"></div>

      {/* Header section with background gradient */}
      <div className={backgroundClass}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex mb-4" aria-label="Breadcrumbs">
              <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                {breadcrumbs.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <svg className="mx-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {item.href ? (
                      <Link href={item.href} className="hover:text-rainbow-blue dark:hover:text-rainbow-blue transition-colors">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="font-medium text-gray-800 dark:text-gray-200">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Page title and description */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>

      {/* Page content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;