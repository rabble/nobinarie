// ABOUTME: This file contains the homepage component for the Nobinarie website
// ABOUTME: It showcases the main features and purpose of the platform

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/Layout';

/**
 * Homepage component displays landing page with key features and navigation
 */
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>nobinarie.com | Lenguaje inclusivo en español</title>
        <meta 
          name="description" 
          content="Recursos, guías y herramientas para usar el lenguaje inclusivo no binario en español" 
        />
      </Head>

      {/* Hero section */}
      <section className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-rainbow-gradient bg-300% animate-rainbow-text">
              Lenguaje inclusivo para todes
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
              Recursos, herramientas y guías para usar la terminación <span className="font-semibold">-e</span> y comunicarte de forma inclusiva
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                href="/que-es-lengua-inclusiva"
                className="btn-primary"
              >
                Aprende más
              </Link>
              <Link
                href="/glosario"
                className="btn-secondary"
              >
                Ver glosario
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="bubble bubble-3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              ¿Por qué lenguaje inclusivo?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              El lenguaje inclusivo con terminación en -e ofrece una alternativa que respeta a todas las personas, independientemente de su identidad de género.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-rainbow-gradient p-0.5">
                <div className="bg-white dark:bg-gray-800 p-6">
                  <div className="text-center mb-4">
                    <span className="inline-block text-4xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                    Visibilidad
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Reconoce la existencia de personas con identidades no binarias y evita reforzar el binarismo de género en la comunicación.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-rainbow-gradient p-0.5">
                <div className="bg-white dark:bg-gray-800 p-6">
                  <div className="text-center mb-4">
                    <span className="inline-block text-4xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                    Inclusión
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Crea un entorno más acogedor al utilizar términos que no excluyen a las personas según su identidad de género.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-rainbow-gradient p-0.5">
                <div className="bg-white dark:bg-gray-800 p-6">
                  <div className="text-center mb-4">
                    <span className="inline-block text-4xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                    Evolución
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    El lenguaje evoluciona constantemente para reflejar los cambios en la sociedad y las necesidades de comunicación de las personas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools section */}
      <section className="py-16 relative overflow-hidden">
        <div className="bubble bubble-2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Herramientas inclusivas
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              Recursos prácticos para ayudarte a incorporar el lenguaje inclusivo en tu comunicación diaria.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Resource Card 1 */}
            <Link href="/descargas" className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px]">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rainbow-blue text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Diccionarios
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Descarga nuestros diccionarios inclusivos para Word, LibreOffice y otras aplicaciones.
                </p>
              </div>
            </Link>

            {/* Resource Card 2 */}
            <Link href="/glosario" className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px]">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rainbow-purple text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Glosario
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Consulta ejemplos de términos inclusivos y sus equivalentes binarios.
                </p>
              </div>
            </Link>

            {/* Resource Card 3 */}
            <Link href="/tutoriales" className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px]">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rainbow-green text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Tutoriales
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Aprende a configurar tu corrector ortográfico para que reconozca términos inclusivos.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-gradient-to-r from-rainbow-blue/10 to-rainbow-purple/10 dark:from-rainbow-blue/5 dark:to-rainbow-purple/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Comienza a usar lenguaje inclusivo hoy
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Explorar todos nuestros recursos y aprende cómo implementar el lenguaje inclusivo
            en tu comunicación diaria.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/que-es-lengua-inclusiva"
              className="btn-primary"
            >
              Aprender lenguaje inclusivo
            </Link>
            <Link
              href="/contribuir"
              className="btn-secondary"
            >
              Contribuir al proyecto
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}