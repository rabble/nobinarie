// ABOUTME: This file is the 500 error page for server-side errors
// ABOUTME: It provides a user-friendly error message when server errors occur

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Custom500() {
  return (
    <Layout pageTitle="Error del servidor">
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-24 h-24 bg-gradient-to-br from-rainbow-red to-rainbow-orange rounded-full flex items-center justify-center mb-6 opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Error del servidor</h1>
        <h2 className="text-xl font-medium text-rainbow-red dark:text-rainbow-red mb-6">Error 500</h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          Lo sentimos, estamos experimentando problemas en nuestro servidor. Por favor, inténtalo de nuevo más tarde.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/" 
            className="px-6 py-3 bg-gradient-to-r from-rainbow-red to-rainbow-orange text-white rounded-md hover:opacity-90 transition text-center"
          >
            Volver a la página principal
          </Link>
          
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Intentar de nuevo
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Si el problema persiste, podés:
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/contribuir#contact" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
                Contactar soporte
              </Link>
            </li>
            <li>
              <Link href="/" className="text-rainbow-purple dark:text-rainbow-purple hover:underline">
                Explorar otras secciones del sitio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}