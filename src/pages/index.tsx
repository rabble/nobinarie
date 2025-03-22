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
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl mx-auto text-center">
                  Descargá y usá nuestros diccionarios de corrección ortográfica inclusivos para escribir
                  en español con terminaciones en -e de forma natural y sin errores.
                </p>
                
                {/* Examples box in hero section */}
                <div className="mt-6 bg-white/80 dark:bg-gray-900/80 shadow-xl rounded-xl overflow-hidden border border-rainbow-purple/20 max-w-4xl mx-auto backdrop-blur-sm">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-left">Ejemplos de lenguaje inclusivo</h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="flex flex-col">
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3 text-left">Español tradicional</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span className="text-gray-700 dark:text-gray-300">Todos los estudiantes están invitados</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span className="text-gray-700 dark:text-gray-300">Los niños juegan en el parque</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span className="text-gray-700 dark:text-gray-300">Hola a todos</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span className="text-gray-700 dark:text-gray-300">Estamos muy emocionados</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-red-500 font-bold mr-2">✗</span>
                            <span className="text-gray-700 dark:text-gray-300">Mis amigos y vecinos</span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-lg font-medium text-rainbow-gradient bg-300% bg-clip-text text-transparent mb-3 text-left">Español inclusivo</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span className="text-gray-700 dark:text-gray-300"><span className="text-rainbow-blue">Todes les estudiantes</span> están invitades</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span className="text-gray-700 dark:text-gray-300"><span className="text-rainbow-orange">Les niñes</span> juegan en el parque</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span className="text-gray-700 dark:text-gray-300">Hola a <span className="text-rainbow-purple">todes</span></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span className="text-gray-700 dark:text-gray-300">Estamos muy <span className="text-rainbow-green">emocionades</span></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 font-bold mr-2">✓</span>
                            <span className="text-gray-700 dark:text-gray-300">Mis <span className="text-rainbow-pink">amigues</span> y <span className="text-rainbow-blue">vecines</span></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-center">
                    <Link
                      href="/lenguaje-inclusivo-en-accion"
                      className="inline-flex items-center text-rainbow-red dark:text-rainbow-red font-medium hover:underline transition duration-150 text-sm"
                    >
                      <span>Ver más ejemplos y casos de uso</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 sm:flex sm:justify-center">
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
            <h2 className="text-base font-semibold text-rainbow-red uppercase tracking-wide">Destacado</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rainbow-red to-rainbow-purple">Lenguaje inclusivo en acción</span>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
              Descubrí cómo el lenguaje inclusivo ya está transformando la comunicación en el mundo real
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-3 bg-rainbow-red"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-rainbow-red/10 dark:bg-rainbow-red/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Organizaciones</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Más de 20 universidades y organizaciones han adoptado oficialmente el lenguaje inclusivo
                </p>
                <div className="text-rainbow-red font-medium flex items-center">
                  <Link href="/lenguaje-inclusivo-en-accion#organizaciones" className="hover:underline">Ver ejemplos</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-3 bg-rainbow-purple"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-rainbow-purple/10 dark:bg-rainbow-purple/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Historias de éxito</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Testimonios de personas y organizaciones que están usando el lenguaje inclusivo
                </p>
                <div className="text-rainbow-purple font-medium flex items-center">
                  <Link href="/lenguaje-inclusivo-en-accion#testimonios" className="hover:underline">Leer testimonios</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="h-3 bg-rainbow-blue"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-rainbow-blue/10 dark:bg-rainbow-blue/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Estrategias prácticas</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Consejos y métodos probados para implementar el lenguaje inclusivo con éxito
                </p>
                <div className="text-rainbow-blue font-medium flex items-center">
                  <Link href="/lenguaje-inclusivo-en-accion#estrategias" className="hover:underline">Ver estrategias</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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