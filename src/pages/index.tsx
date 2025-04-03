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
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        {/* Decorative background elements removed */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              Lenguaje inclusivo para <span className="bg-clip-text text-transparent bg-gradient-to-r from-rainbow-blue to-rainbow-purple">todes</span>
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Recursos, herramientas y guías para usar lenguaje inclusivo con terminaciones <span className="font-semibold">-e, -x, @</span> en <span className="font-semibold">+20 dialectos</span> del español
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-lg text-gray-500 dark:text-gray-400">
              <span>🇪🇸</span>
              <span>🇦🇷</span>
              <span>🇲🇽</span>
              <span>🇨🇴</span>
              <span>🇨🇱</span>
              <span>🇵🇪</span>
              <span>🇻🇪</span>
              <span>🇪🇨</span>
              <span>🇨🇺</span>
              <span>🇺🇾</span>
              <span>+10 más</span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/descargas"
                className="btn-primary"
              >
                Descargar diccionarios
              </Link>
              <Link
                href="/tutoriales"
                className="btn-secondary"
              >
                Ver tutoriales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        {/* Bubble removed */}
        
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="border-t-4 border-rainbow-red">
                <div className="p-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-rainbow-red/10 text-rainbow-red mb-4 mx-auto">
                    <span className="text-2xl">🎯</span>
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="border-t-4 border-rainbow-purple">
                <div className="p-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-rainbow-purple/10 text-rainbow-purple mb-4 mx-auto">
                    <span className="text-2xl">🤝</span>
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="border-t-4 border-rainbow-green">
                <div className="p-6">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-rainbow-green/10 text-rainbow-green mb-4 mx-auto">
                    <span className="text-2xl">🌱</span>
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
        {/* Bubble removed */}
        
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
            <Link href="/descargas" className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-rainbow-blue text-white mb-5 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  Diccionarios Multilingües
                </h3>
                <div className="flex justify-center mb-3 flex-wrap gap-1">
                  <span className="text-xs">🇪🇸</span>
                  <span className="text-xs">🇦🇷</span>
                  <span className="text-xs">🇲🇽</span>
                  <span className="text-xs">🇨🇴</span>
                  <span className="text-xs">🇨🇱</span>
                  <span className="text-xs">+15</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Diccionarios inclusivos para más de 20 dialectos del español. Compatibles con Word, LibreOffice y otras aplicaciones.
                </p>
              </div>
            </Link>

            {/* Resource Card 2 */}
            <Link href="/glosario" className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-rainbow-purple text-white mb-5 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  Opciones de Marcado
                </h3>
                <div className="flex justify-center mb-3 gap-3">
                  <span className="font-bold">-e</span>
                  <span className="font-bold">-x</span>
                  <span className="font-bold">@</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Elige entre diferentes marcadores de inclusividad: terminación -e (amigue), -x (amigx) o @ (amig@).
                </p>
              </div>
            </Link>

            {/* Resource Card 3 */}
            <Link href="/tutoriales" className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-rainbow-green text-white mb-5 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  Tutoriales y Guías
                </h3>
                <div className="flex justify-center mb-3 gap-2">
                  <span className="text-xs">Windows</span>
                  <span className="text-xs">macOS</span>
                  <span className="text-xs">Linux</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Instrucciones detalladas para instalar y configurar los diccionarios en diferentes sistemas operativos y aplicaciones.
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
            Comunicación inclusiva para todo el mundo hispanohablante
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Con soporte para más de 20 dialectos del español y múltiples opciones de marcado inclusivo,
            nuestras herramientas se adaptan a toda la comunidad hispanohablante.
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-8">
            Descarga ahora los diccionarios para tu dialecto y comienza a usar lenguaje inclusivo en todos tus documentos y aplicaciones.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/descargas"
              className="btn-primary"
            >
              Descargar diccionarios
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