// ABOUTME: This file is the contribution page
// ABOUTME: It explains how to contribute to the project via GitHub

import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Contribuir() {
  return (
    <Layout pageTitle="Contribuir al proyecto">
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block p-1 bg-rainbow-gradient rounded-xl mb-4">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Contribuí al proyecto
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              nobinarie.com es un proyecto de código abierto que depende de la comunidad para crecer y mejorar.
              Hay muchas formas en las que podés contribuir, sin importar tu nivel de conocimientos técnicos.
            </p>
          </div>

          {/* Contribution Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Technical Contributions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
              <div className="p-1 bg-rainbow-blue"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-rainbow-blue/10 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contribuciones Técnicas</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ayudanos a mejorar el código, la infraestructura y las herramientas que hacen posible este proyecto.
                </p>
                <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Desarrollo web y mejoras en la interfaz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Implementación de nuevas funcionalidades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Corrección de errores y optimización</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Herramientas para creación de diccionarios</span>
                  </li>
                </ul>
                <a 
                  href="https://github.com/rabble/nobinarie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-rainbow-blue hover:text-rainbow-purple transition-colors"
                >
                  <span>Ver repositorio en GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Content Contributions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
              <div className="p-1 bg-rainbow-purple"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-rainbow-purple/10 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contribuciones de Contenido</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ayudanos a expandir y mejorar el contenido educativo y los recursos que ofrecemos.
                </p>
                <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Sugerencias para el diccionario inclusivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Creación y mejora de tutoriales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Redacción de guías y materiales educativos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Ejemplos y casos de uso del lenguaje inclusivo</span>
                  </li>
                </ul>
                <Link 
                  href="/contacto" 
                  className="inline-flex items-center text-rainbow-purple hover:text-rainbow-blue transition-colors"
                >
                  <span>Contáctanos con tus ideas</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Outreach Contributions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg">
              <div className="p-1 bg-rainbow-green"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-rainbow-green/10 p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contribuciones de Difusión</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ayudanos a difundir el lenguaje inclusivo y llegar a más personas.
                </p>
                <ul className="space-y-3 mb-6 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Compartir el proyecto en redes sociales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Organizar talleres y charlas sobre lenguaje inclusivo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Compartir testimonios y experiencias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rainbow-green mr-2 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>Promover el uso del diccionario en instituciones</span>
                  </li>
                </ul>
                <a 
                  href="https://twitter.com/intent/tweet?text=Conocé%20nobinarie.com%20-%20Recursos%20para%20el%20uso%20del%20lenguaje%20inclusivo%20y%20herramientas%20para%20implementarlo%20en%20tu%20día%20a%20día%20🌈&url=https://nobinarie.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-rainbow-green hover:text-rainbow-blue transition-colors"
                >
                  <span>Compartir en Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contribution Process */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 mb-16">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Proceso de contribución técnica</h2>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rainbow-blue via-rainbow-purple to-rainbow-green transform -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Explorar el repositorio</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Visitá nuestro repositorio en GitHub para familiarizarte con el código y la estructura del proyecto.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-rainbow-blue text-rainbow-blue">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left">
                      <a 
                        href="https://github.com/rabble/nobinarie" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rainbow-blue hover:bg-rainbow-blue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-blue"
                      >
                        Ver repositorio
                      </a>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 md:order-1">
                      <a 
                        href="https://github.com/rabble/nobinarie/issues" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rainbow-purple hover:bg-rainbow-purple/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-purple"
                      >
                        Ver issues
                      </a>
                    </div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-rainbow-purple text-rainbow-purple">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left md:order-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Encontrar o crear un issue</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Revisá los issues existentes o creá uno nuevo si encontrás un error o tenés una idea para mejorar el proyecto.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Forkear y clonar</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Forkeá el repositorio a tu cuenta de GitHub y clonalo en tu máquina local para comenzar a trabajar.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-rainbow-green text-rainbow-green">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded p-3 font-mono text-sm text-gray-800 dark:text-gray-200">
                        $ git clone https://github.com/tu-usuario/nobinarie.git<br />
                        $ cd nobinarie<br />
                        $ npm install
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 md:order-1">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded p-3 font-mono text-sm text-gray-800 dark:text-gray-200">
                        $ git checkout -b mejora/mi-contribucion<br />
                        <span className="text-green-600 dark:text-green-400"># Realiza tus cambios</span><br />
                        $ git commit -am "Descripción de tus cambios"<br />
                        $ git push origin mejora/mi-contribucion
                      </div>
                    </div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-rainbow-red text-rainbow-red">
                      <span className="text-lg font-bold">4</span>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left md:order-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Implementar y probar</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Creá una rama, implementá tus cambios y asegurate de que todo funcione correctamente.
                      </p>
                    </div>
                  </div>
                  
                  {/* Step 5 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Crear un Pull Request</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Enviá un Pull Request con tus cambios, describiendo claramente qué hiciste y por qué.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-rainbow-blue text-rainbow-blue">
                      <span className="text-lg font-bold">5</span>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left">
                      <a 
                        href="https://github.com/rabble/nobinarie/pulls" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rainbow-blue hover:bg-rainbow-blue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-blue"
                      >
                        Ver Pull Requests
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Guidelines */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 mb-16">
            <div className="px-6 py-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Lineamientos para contribuciones</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-rainbow-purple mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Lenguaje inclusivo</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Usá lenguaje inclusivo en todas tus contribuciones, tanto en el código como en la documentación y comentarios.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-rainbow-blue mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Código de conducta</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seguí nuestro código de conducta en todas tus interacciones. Tratá a todes con respeto y consideración.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-rainbow-green mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Documentación</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Documentá bien tus cambios. Explicá claramente qué hiciste y por qué, para que otres puedan entender tu contribución.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <span className="text-rainbow-red mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Calidad del código</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Asegurate de que tu código sea claro, bien estructurado y siga las convenciones de estilo del proyecto.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg md:col-span-2">
                  <div className="flex items-center mb-3">
                    <span className="text-rainbow-blue mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Comunicación constructiva</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mantené un tono amable y constructivo en todas las interacciones. Recordá que estamos todes trabajando juntes por un objetivo común.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-rainbow-gradient p-0.5 rounded-xl shadow-lg mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 sm:p-10 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Empezá a contribuir hoy
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Tu contribución, sin importar su tamaño, hace una gran diferencia. Juntes podemos hacer que el lenguaje inclusivo sea más accesible para todes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://github.com/rabble/nobinarie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rainbow-blue hover:bg-rainbow-blue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-blue"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Contribuir en GitHub
                </a>
                <Link 
                  href="/contacto" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-rainbow-purple bg-rainbow-purple/10 hover:bg-rainbow-purple/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-purple"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contactanos
                </Link>
              </div>
            </div>
          </div>

          {/* Thank You Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¡Gracias por tu interés en contribuir a nobinarie.com!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cada contribución nos acerca a un mundo donde el lenguaje es verdaderamente inclusivo para todes.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}