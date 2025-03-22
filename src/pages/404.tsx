// ABOUTME: This file is the 404 error page
// ABOUTME: It displays a friendly error message when a page is not found

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Custom404() {
  return (
    <Layout pageTitle="Página no encontrada">
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-24 h-24 bg-gradient-to-br from-rainbow-blue to-rainbow-purple rounded-full flex items-center justify-center mb-6 opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Página no encontrada</h1>
        <h2 className="text-xl font-medium text-rainbow-blue dark:text-rainbow-blue mb-6">Error 404</h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          Lo sentimos, la página que estás buscando no existe o se ha movido a otra ubicación.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/" 
            className="px-6 py-3 bg-gradient-to-r from-rainbow-blue to-rainbow-purple text-white rounded-md hover:opacity-90 transition text-center"
          >
            Volver a la página principal
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Volver atrás
          </button>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">¿Buscando algo específico?</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/que-es-lengua-inclusiva" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
                ¿Qué es lengua inclusiva?
              </Link>
            </li>
            <li>
              <Link href="/lenguaje-inclusivo-en-accion" className="text-rainbow-red dark:text-rainbow-red hover:underline">
                Lenguaje inclusivo en acción
              </Link>
            </li>
            <li>
              <Link href="/descargas" className="text-rainbow-green dark:text-rainbow-green hover:underline">
                Descargar diccionarios
              </Link>
            </li>
            <li>
              <Link href="/tutoriales" className="text-rainbow-orange dark:text-rainbow-orange hover:underline">
                Tutoriales de instalación
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}