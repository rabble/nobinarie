// ABOUTME: This file is the main tutorials page
// ABOUTME: It provides links to platform-specific tutorials

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Tutoriales() {
  const platforms = [
    {
      name: 'Windows',
      icon: 'windows',
      href: '/tutoriales/windows',
      description: 'Instrucciones para instalar en Microsoft Windows',
    },
    {
      name: 'macOS',
      icon: 'apple',
      href: '/tutoriales/macos',
      description: 'Instrucciones para instalar en Apple macOS',
    },
    {
      name: 'Linux',
      icon: 'linux',
      href: '/tutoriales/linux',
      description: 'Instrucciones para instalar en distribuciones Linux',
    },
    {
      name: 'Android',
      icon: 'android',
      href: '/tutoriales/android',
      description: 'Instrucciones para instalar en dispositivos Android',
    },
    {
      name: 'iOS',
      icon: 'apple',
      href: '/tutoriales/ios',
      description: 'Instrucciones para instalar en iPhone y iPad',
    },
    {
      name: 'Navegadores Web',
      icon: 'globe',
      href: '/tutoriales/navegadores',
      description: 'Instrucciones para instalar en Chrome, Firefox, Edge y Safari',
    },
  ];

  return (
    <Layout pageTitle="Tutoriales de instalación">
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Tutoriales de instalación
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
              Seleccioná tu plataforma para ver instrucciones detalladas sobre cómo instalar y usar los diccionarios inclusivos.
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.href}
                className="block group"
              >
                <div className="flex flex-col h-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6 flex-grow">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                      {platform.name}
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {platform.description}
                    </p>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                    <span className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300">
                      Ver tutorial
                      <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              ¿No encontrás tu plataforma o tenés problemas con la instalación?{' '}
              <Link href="/contribuir" className="text-primary-600 dark:text-primary-400 hover:underline">
                Contactanos o contribuí
              </Link>{' '}
              para mejorar nuestros tutoriales.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}