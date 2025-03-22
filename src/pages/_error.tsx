// ABOUTME: This file is a custom error page for handling various error types
// ABOUTME: It provides a friendly UI for error scenarios beyond 404

import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Layout from '@/components/Layout';
import Link from 'next/link';

interface ErrorProps {
  statusCode: number | null;
  error?: Error | null;
}

const Error: NextPage<ErrorProps> = ({ statusCode, error }) => {
  // Different error messages based on status code
  let title = 'Ha ocurrido un error';
  let message = 'Lo sentimos, algo salió mal. Por favor, inténtalo de nuevo más tarde.';
  
  if (statusCode === 404) {
    title = 'Página no encontrada';
    message = 'Lo sentimos, la página que estás buscando no existe o se ha movido.';
  } else if (statusCode === 500) {
    title = 'Error del servidor';
    message = 'Lo sentimos, estamos experimentando problemas en nuestro servidor. Por favor, inténtalo de nuevo más tarde.';
  } else if (statusCode === 403) {
    title = 'Acceso prohibido';
    message = 'No tienes permiso para acceder a esta página.';
  }

  return (
    <Layout pageTitle={title}>
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="w-24 h-24 bg-gradient-to-br from-rainbow-red to-rainbow-purple rounded-full flex items-center justify-center mb-6 opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
        <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6">
          {statusCode ? `Error ${statusCode}` : 'Error del cliente'}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          {message}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/" 
            className="px-6 py-3 bg-gradient-to-r from-rainbow-purple to-rainbow-blue text-white rounded-md hover:opacity-90 transition text-center"
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
      </div>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? (err as any).statusCode : 404;
  return { statusCode: statusCode || null, error: err || null };
};

export default Error;