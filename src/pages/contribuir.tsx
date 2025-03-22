// ABOUTME: This file is the contribute page
// ABOUTME: It explains how people can contribute to the project

import React from 'react';
import ContentLayout from '../components/ContentLayout';
import Link from 'next/link';

export default function Contribuir() {
  const contributionAreas = [
    {
      title: 'Añadir palabras al diccionario',
      icon: 'dictionary',
      description: 'Ayúdanos a expandir nuestro diccionario con nuevas palabras inclusivas y sus definiciones.',
      actions: [
        'Revisar el glosario actual para identificar términos faltantes',
        'Proponer nuevas palabras con sus definiciones y usos correctos',
        'Ayudar a validar las contribuciones de otros colaboradores'
      ]
    },
    {
      title: 'Mejorar la documentación',
      icon: 'document',
      description: 'Hacé que nuestra documentación sea más clara, accesible e inclusiva para todes.',
      actions: [
        'Corregir errores y mejorar la claridad de los tutoriales',
        'Traducir contenido a otros idiomas',
        'Crear nuevas guías para casos de uso específicos'
      ]
    },
    {
      title: 'Reportar errores',
      icon: 'bug',
      description: 'Ayúdanos a identificar y corregir problemas en nuestros diccionarios o en el sitio web.',
      actions: [
        'Reportar palabras mal etiquetadas o con errores',
        'Notificar problemas técnicos en el sitio web',
        'Sugerir mejoras para la experiencia de usuario'
      ]
    },
    {
      title: 'Contribuir al código',
      icon: 'code',
      description: 'Si tenés habilidades técnicas, podés contribuir directamente al desarrollo del proyecto.',
      actions: [
        'Resolver issues abiertos en nuestro repositorio',
        'Mejorar características existentes',
        'Implementar nuevas funcionalidades'
      ]
    },
    {
      title: 'Difundir el proyecto',
      icon: 'share',
      description: 'Ayúdanos a llegar a más personas que puedan beneficiarse de nuestros recursos inclusivos.',
      actions: [
        'Compartir nuestro proyecto en redes sociales',
        'Organizar talleres o charlas sobre lenguaje inclusivo',
        'Mencionar nuestro proyecto en artículos o publicaciones'
      ]
    },
    {
      title: 'Donar o patrocinar',
      icon: 'heart',
      description: 'Las donaciones nos ayudan a mantener la infraestructura y dedicar más tiempo al proyecto.',
      actions: [
        'Realizar donaciones únicas o recurrentes',
        'Patrocinar el desarrollo de funcionalidades específicas',
        'Proporcionar recursos como servidores o servicios'
      ]
    }
  ];

  return (
    <ContentLayout
      title="Contribuir al proyecto"
      description="Ayúdanos a hacer que el lenguaje inclusivo sea accesible para todes"
      breadcrumbs={[]}
    >
      <div className="space-y-16">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-rainbow-purple/10 to-rainbow-blue/10 rounded-xl p-8 shadow-inner">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              ¡Gracias por querer contribuir a este proyecto!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Nobinarie es un proyecto de código abierto dedicado a promover y facilitar el uso del lenguaje inclusivo en español. 
              Cada contribución, sin importar su tamaño, es valiosa para nuestra comunidad.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a 
                href="https://github.com/nobinarie/diccionario-inclusivo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rainbow-gradient bg-300% hover:bg-left-animation transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Ver en GitHub
              </a>
              <a 
                href="mailto:contacto@nobinarie.org" 
                className="inline-flex items-center px-4 py-2 border border-rainbow-blue text-sm font-medium rounded-md text-rainbow-blue bg-transparent hover:bg-rainbow-blue/10 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contactarnos
              </a>
            </div>
          </div>
        </section>

        {/* Principles section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Nuestros principios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-rainbow-blue/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Inclusión</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Nuestro objetivo es crear un espacio y recursos que sean verdaderamente inclusivos para todas las personas, 
                independientemente de su identidad de género, orientación sexual, origen, discapacidad o cualquier otra característica.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-rainbow-green/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Accesibilidad</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Diseñamos nuestras herramientas y recursos para que sean accesibles para todas las personas, 
                incluyendo aquellas con discapacidades. Nos esforzamos por seguir los estándares web de accesibilidad.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-rainbow-purple/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Código abierto</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Creemos en la colaboración y en compartir el conocimiento. Todo nuestro código y recursos están 
                disponibles públicamente bajo licencias abiertas para que cualquier persona pueda usar, estudiar, modificar y distribuir.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-rainbow-yellow/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-rainbow-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Comunidad</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Valoramos y respetamos a todes les miembres de nuestra comunidad. Construimos un entorno colaborativo 
                donde todas las voces son escuchadas y todas las contribuciones son reconocidas.
              </p>
            </div>
          </div>
        </section>

        {/* Contribution areas section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Formas de contribuir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributionAreas.map((area, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {area.icon === 'dictionary' && (
                      <svg className="w-6 h-6 text-rainbow-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {area.icon === 'document' && (
                      <svg className="w-6 h-6 text-rainbow-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                    {area.icon === 'bug' && (
                      <svg className="w-6 h-6 text-rainbow-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                    {area.icon === 'code' && (
                      <svg className="w-6 h-6 text-rainbow-yellow mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {area.icon === 'share' && (
                      <svg className="w-6 h-6 text-rainbow-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    )}
                    {area.icon === 'heart' && (
                      <svg className="w-6 h-6 text-rainbow-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{area.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {area.description}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {area.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-rainbow-blue mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Code of Conduct section */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-rainbow-blue">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Código de conducta
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Estamos comprometides con proporcionar un espacio seguro y acogedor para todes, 
            independientemente de su identidad de género, orientación sexual, discapacidad, 
            apariencia física, tamaño corporal, raza, etnia, edad, religión o nivel de experiencia.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Esperamos que todes les participantes de nuestra comunidad sigan estas directrices:
          </p>
          <ul className="space-y-3 ml-6 list-disc text-gray-700 dark:text-gray-300">
            <li>Usar lenguaje inclusivo y acogedor</li>
            <li>Ser respetuose con diferentes puntos de vista y experiencias</li>
            <li>Aceptar con gracia las críticas constructivas</li>
            <li>Centrarse en lo que es mejor para la comunidad</li>
            <li>Mostrar empatía hacia otres miembres de la comunidad</li>
          </ul>
          <div className="mt-6">
            <a 
              href="https://github.com/nobinarie/diccionario-inclusivo/blob/main/CODE_OF_CONDUCT.md" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-rainbow-blue hover:underline"
            >
              Ver código de conducta completo
              <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </section>

        {/* Getting Started section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Cómo empezar
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <ol className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-rainbow-blue/20 text-rainbow-blue font-semibold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Familiarizate con nuestro proyecto
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Antes de contribuir, te recomendamos explorar nuestro sitio web y repositorio para entender 
                      mejor nuestros objetivos, estructura y modo de trabajo.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <Link href="/que-es-lengua-inclusiva" className="text-rainbow-blue hover:underline">
                        ¿Qué es el lenguaje inclusivo?
                      </Link>
                      <Link href="/glosario" className="text-rainbow-blue hover:underline">
                        Explorar el glosario
                      </Link>
                      <a href="https://github.com/nobinarie/diccionario-inclusivo" target="_blank" rel="noopener noreferrer" className="text-rainbow-blue hover:underline">
                        Ver el repositorio
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-rainbow-green/20 text-rainbow-green font-semibold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Buscá issues abiertos o discusiones
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Revisa nuestros issues abiertos y discusiones en GitHub para encontrar tareas en las que puedas colaborar 
                      o problemas que puedas resolver.
                    </p>
                    <div className="mt-4">
                      <a href="https://github.com/nobinarie/diccionario-inclusivo/issues" target="_blank" rel="noopener noreferrer" className="text-rainbow-blue hover:underline">
                        Ver issues abiertos
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-rainbow-purple/20 text-rainbow-purple font-semibold">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Hacé fork del repositorio y creá un pull request
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Si querés contribuir con código o contenido, hacé un fork de nuestro repositorio, 
                      implementá tus cambios y envialos a través de un pull request.
                    </p>
                    <div className="mt-4">
                      <a href="https://github.com/nobinarie/diccionario-inclusivo/fork" target="_blank" rel="noopener noreferrer" className="text-rainbow-blue hover:underline">
                        Fork del repositorio
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-rainbow-yellow/20 text-rainbow-yellow font-semibold">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Participá en la comunidad
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Unite a nuestras discusiones, comentá en issues y pull requests, y compartí tus ideas 
                      para mejorar el proyecto.
                    </p>
                    <div className="mt-4">
                      <a href="https://github.com/nobinarie/diccionario-inclusivo/discussions" target="_blank" rel="noopener noreferrer" className="text-rainbow-blue hover:underline">
                        Unirse a las discusiones
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-rainbow-gradient p-0.5 rounded-xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              ¿Listo para contribuir?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Tu ayuda, sin importar cuán pequeña parezca, es fundamental para hacer que el lenguaje inclusivo 
              sea accesible para todes. ¡Esperamos tu contribución!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://github.com/nobinarie/diccionario-inclusivo"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rainbow-blue hover:bg-rainbow-blue/80 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Contribuir en GitHub
              </a>
              <a 
                href="mailto:contacto@nobinarie.org" 
                className="inline-flex items-center px-6 py-3 border border-rainbow-purple text-base font-medium rounded-md text-rainbow-purple bg-transparent hover:bg-rainbow-purple/10 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enviar un email
              </a>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Preguntas frecuentes
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                ¿Necesito saber programar para contribuir?
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                ¡No! Hay muchas formas de contribuir sin conocimientos técnicos, como añadir palabras al 
                diccionario, mejorar la documentación, reportar errores o ayudar con la difusión del proyecto.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                ¿Qué tecnologías usa este proyecto?
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                El sitio web está construido con Next.js, React y TypeScript. Los diccionarios usan el formato 
                Hunspell, compatible con la mayoría de los correctores ortográficos de software libre.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                ¿Cómo se evalúan las contribuciones?
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Todas las contribuciones son revisadas por les mantenedores del proyecto. Valoramos la calidad 
                sobre la cantidad y nos aseguramos de que todas las contribuciones se alineen con nuestros 
                principios y objetivos.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                ¿Puedo usar estos recursos en mis propios proyectos?
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                ¡Sí! Todos nuestros recursos están disponibles bajo licencias abiertas. Los diccionarios están 
                bajo una licencia Creative Commons, y el código del sitio web bajo la licencia MIT.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ContentLayout>
  );
}