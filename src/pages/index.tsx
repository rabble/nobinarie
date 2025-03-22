// ABOUTME: This file is the homepage of the site
// ABOUTME: It renders the main landing page with a clear call to action

import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative gradient bubbles */}
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>

        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">¡Vos podés escribir</span>{' '}
                  <span className="block rainbow-text bg-300% xl:inline">no binarie ahora!</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Descargá y usá nuestros diccionarios de corrección ortográfica inclusivos para escribir
                  en español con terminaciones en -e de forma natural y sin errores.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <Link href="/descargas" className="btn-primary">
                      Descargar ahora 🌈
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/tutoriales" className="btn-secondary">
                      Ver tutoriales ✨
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Decorative wavy divider */}
        <div className="relative h-16 bg-gradient-to-r from-rainbow-pink via-rainbow-blue to-rainbow-purple">
          <svg className="absolute bottom-0 w-full h-16 text-white dark:text-gray-900" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path fill="currentColor" d="M0 22L48 17.3C96 13 192 3 288 9.2C384 16 480 38 576 42.7C672 48 768 38 864 32.2C960 27 1056 27 1152 27.7C1248 29 1344 32 1392 33.8L1440 36V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-rainbow-blue uppercase tracking-wide">Características</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Español inclusivo para <span className="rainbow-text bg-300%">todes</span>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
              Nuestros diccionarios te permiten escribir en lenguaje inclusivo en cualquier dispositivo y aplicación.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="card">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center p-3 bg-rainbow-purple/20 dark:bg-rainbow-purple/30 rounded-xl">
                    <svg className="h-8 w-8 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">Fácil de instalar</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                    Tutoriales paso a paso para instalar los diccionarios en tu sistema operativo y aplicaciones favoritas.
                  </p>
                  <div className="mt-4">
                    <Link href="/tutoriales" className="text-rainbow-purple dark:text-rainbow-purple hover:underline">
                      Ver tutoriales →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="card">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center p-3 bg-rainbow-blue/20 dark:bg-rainbow-blue/30 rounded-xl">
                    <svg className="h-8 w-8 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">Altamente compatible</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                    Funciona con procesadores de texto, navegadores, correo electrónico y más aplicaciones.
                  </p>
                  <div className="mt-4">
                    <Link href="/descargas" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
                      Ver descargas →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="card">
                <div className="p-6">
                  <div className="inline-flex items-center justify-center p-3 bg-rainbow-green/20 dark:bg-rainbow-green/30 rounded-xl">
                    <svg className="h-8 w-8 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">Código abierto</h3>
                  <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                    Proyecto 100% de código abierto y gratuito. Contribuí y ayudá a mejorar el lenguaje inclusivo.
                  </p>
                  <div className="mt-4">
                    <Link href="/contribuir" className="text-rainbow-green dark:text-rainbow-green hover:underline">
                      Contribuir →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-rainbow-orange uppercase tracking-wide">Ejemplos</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Lenguaje inclusivo en acción
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
              Mirá algunos ejemplos de cómo funciona el lenguaje inclusivo con terminaciones en -e.
            </p>
          </div>
          
          <div className="mt-16 bg-white dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Español tradicional</h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    <li>
                      <span className="text-red-500 mr-2">✗</span> 
                      Todos los estudiantes están invitados
                    </li>
                    <li>
                      <span className="text-red-500 mr-2">✗</span> 
                      Los niños juegan en el parque
                    </li>
                    <li>
                      <span className="text-red-500 mr-2">✗</span> 
                      Hola a todos
                    </li>
                    <li>
                      <span className="text-red-500 mr-2">✗</span> 
                      Estamos muy emocionados
                    </li>
                    <li>
                      <span className="text-red-500 mr-2">✗</span> 
                      Mis amigos y vecinos
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-rainbow-gradient bg-300% bg-clip-text text-transparent">Español inclusivo</h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    <li>
                      <span className="text-green-500 mr-2">✓</span> 
                      <span className="text-rainbow-blue">Todes les estudiantes</span> están invitades
                    </li>
                    <li>
                      <span className="text-green-500 mr-2">✓</span> 
                      <span className="text-rainbow-orange">Les niñes</span> juegan en el parque
                    </li>
                    <li>
                      <span className="text-green-500 mr-2">✓</span> 
                      Hola a <span className="text-rainbow-purple">todes</span>
                    </li>
                    <li>
                      <span className="text-green-500 mr-2">✓</span> 
                      Estamos muy <span className="text-rainbow-green">emocionades</span>
                    </li>
                    <li>
                      <span className="text-green-500 mr-2">✓</span> 
                      Mis <span className="text-rainbow-pink">amigues</span> y <span className="text-rainbow-blue">vecines</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        {/* Background decorative bubbles */}
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-3"></div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="bg-rainbow-gradient rounded-3xl shadow-xl overflow-hidden">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center lg:max-w-3xl">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">¿Querés empezar a escribir inclusivo?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  Descargá nuestro diccionario y comenzá a usar el lenguaje inclusivo de forma correcta en todos tus dispositivos. Es 100% gratuito y de código abierto.
                </p>
                <div className="mt-8 flex">
                  <div className="inline-flex rounded-md shadow">
                    <Link
                      href="/descargas"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white text-rainbow-blue hover:bg-gray-50 transition-colors"
                    >
                      Descargar ahora
                    </Link>
                  </div>
                  <div className="ml-3 inline-flex">
                    <Link
                      href="/que-es-lengua-inclusiva"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rainbow-purple/30 hover:bg-rainbow-purple/40 transition-colors"
                    >
                      Aprender más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}