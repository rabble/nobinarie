// ABOUTME: This file is the downloads page
// ABOUTME: It provides links to download the dictionary files

import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Descargas() {
  const downloads = [
    {
      version: '1.0.0',
      date: '2023-11-01',
      description: 'Primera versión estable del diccionario inclusivo',
      link: '/downloads/v1.0.0/diccionario-inclusivo.zip',
      notes: 'Compatible con todas las plataformas principales',
    },
  ];

  return (
    <Layout pageTitle="Descargas">
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Descargar diccionarios inclusivos
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
              Descargá nuestros diccionarios de corrección ortográfica inclusivos para comenzar a escribir en lenguaje no binario.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Versiones disponibles
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  Elegí la versión que necesites según tu sistema y aplicación.
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {downloads.map((download) => (
                    <li key={download.version}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-primary-600 dark:text-primary-400 truncate">
                              Versión {download.version}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                              Lanzada el {download.date}
                            </p>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <Link 
                              href={download.link}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                              Descargar
                            </Link>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                          <p>{download.description}</p>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{download.notes}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    Después de descargar el diccionario, consultá nuestros <Link href="/tutoriales" className="font-medium underline text-yellow-700 dark:text-yellow-100">tutoriales de instalación</Link> para configurarlo en tu dispositivo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                ¿Cómo usar estos diccionarios?
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Nuestros diccionarios vienen en formato Hunspell (.dic y .aff), el estándar más utilizado 
                para corrección ortográfica en múltiples plataformas y aplicaciones. Para aprender a 
                instalarlos en tu sistema específico, consultá nuestros tutoriales detallados.
              </p>
              <div className="mt-6">
                <Link
                  href="/tutoriales"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium"
                >
                  Ver tutoriales de instalación →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}