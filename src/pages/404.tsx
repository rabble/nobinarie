// ABOUTME: This file is the 404 error page
// ABOUTME: It displays a friendly error message when a page is not found

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Custom404() {
  return (
    <Layout pageTitle="Página no encontrada">
      <div className="min-h-[40vh] flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">Página no encontrada</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          Lo sentimos, la página que estás buscando no existe o se ha movido.
        </p>
        <Link href="/" className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition">
          Volver a la página principal
        </Link>
      </div>
    </Layout>
  );
}