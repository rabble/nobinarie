// ABOUTME: This page provides resources for teaching inclusive language
// ABOUTME: It offers educational materials and methods for educators

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function EnsenarLenguaInclusiva() {
  return (
    <ContentLayout 
      title="Enseñar lengua inclusiva" 
      description="Recursos y recomendaciones para docentes, educadores y facilitadores"
      lastUpdated="21 de marzo de 2023"
    >
      <div className="prose-lg">
        <div className="bg-gradient-to-r from-rainbow-blue/10 to-rainbow-purple/10 dark:from-rainbow-blue/20 dark:to-rainbow-purple/20 p-6 rounded-xl mb-10 border-l-4 border-rainbow-blue">
          <p className="text-xl mb-0 leading-relaxed">
            Esta página está dedicada a docentes, educadores, talleristas y cualquier persona interesada 
            en enseñar el uso del lenguaje inclusivo con terminaciones en -e. Ofrece recursos prácticos, 
            metodologías y sugerencias para introducir y practicar el lenguaje inclusivo en diferentes 
            contextos educativos.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-rainbow-blue mb-6 pb-2 border-b border-rainbow-blue/20">¿Por qué enseñar lenguaje inclusivo?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-t-4 border-rainbow-pink hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-rainbow-pink/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-0 mb-1">Promueve la inclusión</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Crea espacios donde todas las personas se sienten representadas y visibilizadas, sin importar su identidad de género.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-t-4 border-rainbow-purple hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-rainbow-purple/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-0 mb-1">Desarrolla conciencia crítica</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Ayuda a les estudiantes a reflexionar sobre cómo el lenguaje refleja y construye realidades sociales.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-t-4 border-rainbow-blue hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-rainbow-blue/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-0 mb-1">Prepara para la diversidad</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Equipa a les estudiantes con herramientas para comunicarse respetuosamente en un mundo diverso.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border-t-4 border-rainbow-green hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-rainbow-green/20 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mt-0 mb-1">Fomenta la empatía</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Anima a considerar cómo nuestras palabras afectan a otras personas y sus identidades.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-rainbow-blue/10 dark:bg-rainbow-blue/20 p-8 rounded-xl my-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-rainbow-blue/10 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-rainbow-purple/10 rounded-full -ml-6 -mb-6"></div>
          
          <h3 className="text-2xl font-bold text-rainbow-blue dark:text-rainbow-blue mt-0 mb-4">Enfoque pedagógico</h3>
          <p className="text-lg mb-0 relative z-10">
            Recomendamos un enfoque pedagógico basado en la <span className="font-medium text-rainbow-purple">reflexión crítica</span>, 
            la <span className="font-medium text-rainbow-pink">empatía</span> y la 
            <span className="font-medium text-rainbow-green"> práctica contextualizada</span>, más que en reglas rígidas. 
            El objetivo es que les estudiantes comprendan el porqué del lenguaje inclusivo y puedan 
            usarlo de manera auténtica y significativa.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-rainbow-purple mb-6 pb-2 border-b border-rainbow-purple/20">Estrategias didácticas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 relative">
              <div className="absolute top-0 right-0 left-0 h-2 bg-rainbow-pink rounded-t-lg"></div>
              <h3 className="text-xl font-bold mb-4 text-rainbow-pink flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Para niñes y adolescentes
              </h3>
              
              <ul className="space-y-3 pl-0 list-none">
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-pink/20 text-rainbow-pink w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">1</span>
                  <div>
                    <span className="font-medium">Cuentos inclusivos:</span> Utiliza o adapta cuentos que incorporen lenguaje inclusivo y personajes diversos.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-pink/20 text-rainbow-pink w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">2</span>
                  <div>
                    <span className="font-medium">Juegos de rol:</span> Crea situaciones donde deban utilizar lenguaje inclusivo para comunicarse.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-pink/20 text-rainbow-pink w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">3</span>
                  <div>
                    <span className="font-medium">Transformación de textos:</span> Propón actividades donde transformen textos tradicionales a lenguaje inclusivo.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-pink/20 text-rainbow-pink w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">4</span>
                  <div>
                    <span className="font-medium">Creación de materiales:</span> Invita a crear afiches, videos o presentaciones que expliquen el lenguaje inclusivo.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-pink/20 text-rainbow-pink w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">5</span>
                  <div>
                    <span className="font-medium">Debates constructivos:</span> Organiza debates respetuosos sobre la importancia del lenguaje inclusivo.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 relative">
              <div className="absolute top-0 right-0 left-0 h-2 bg-rainbow-blue rounded-t-lg"></div>
              <h3 className="text-xl font-bold mb-4 text-rainbow-blue flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Para personas adultas
              </h3>
              
              <ul className="space-y-3 pl-0 list-none">
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-blue/20 text-rainbow-blue w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">1</span>
                  <div>
                    <span className="font-medium">Análisis crítico:</span> Examina textos, discursos y materiales para identificar sesgos de género en el lenguaje.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-blue/20 text-rainbow-blue w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">2</span>
                  <div>
                    <span className="font-medium">Estudios de caso:</span> Analiza situaciones reales donde el lenguaje inclusivo ha tenido impacto positivo.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-blue/20 text-rainbow-blue w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">3</span>
                  <div>
                    <span className="font-medium">Práctica contextualizada:</span> Realiza ejercicios de escritura y habla en contextos profesionales relevantes.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-blue/20 text-rainbow-blue w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">4</span>
                  <div>
                    <span className="font-medium">Testimonios:</span> Comparte experiencias de personas no binarias sobre la importancia del lenguaje inclusivo.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-rainbow-blue/20 text-rainbow-blue w-6 h-6 rounded-full text-center font-bold flex-shrink-0 mr-3">5</span>
                  <div>
                    <span className="font-medium">Investigación participativa:</span> Propón proyectos de investigación sobre la evolución del lenguaje inclusivo.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-rainbow-green mb-6 pb-2 border-b border-rainbow-green/20">Recursos descargables</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex items-start">
              <div className="bg-rainbow-purple text-white rounded-lg p-3 mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Guía para docentes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  PDF con estrategias, actividades y consejos para integrar el lenguaje inclusivo 
                  en el aula.
                </p>
                <Link href="/descargas/guia-docentes.pdf" className="inline-flex items-center px-4 py-2 bg-rainbow-purple/10 text-rainbow-purple rounded-lg font-medium hover:bg-rainbow-purple/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar (próximamente)
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex items-start">
              <div className="bg-rainbow-blue text-white rounded-lg p-3 mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Presentación educativa</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Diapositivas listas para usar en clase, con información, ejemplos y actividades 
                  sobre lenguaje inclusivo.
                </p>
                <Link href="/descargas/presentacion-educativa.pptx" className="inline-flex items-center px-4 py-2 bg-rainbow-blue/10 text-rainbow-blue rounded-lg font-medium hover:bg-rainbow-blue/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar (próximamente)
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex items-start">
              <div className="bg-rainbow-green text-white rounded-lg p-3 mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Fichas de actividades</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Conjunto de actividades prácticas para diferentes edades y niveles, 
                  listas para imprimir y usar.
                </p>
                <Link href="/descargas/fichas-actividades.pdf" className="inline-flex items-center px-4 py-2 bg-rainbow-green/10 text-rainbow-green rounded-lg font-medium hover:bg-rainbow-green/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar (próximamente)
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex items-start">
              <div className="bg-rainbow-orange text-white rounded-lg p-3 mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Glosario ilustrado</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Vocabulario inclusivo con ilustraciones, ejemplos y explicaciones 
                  adaptadas para diferentes edades.
                </p>
                <Link href="/descargas/glosario-ilustrado.pdf" className="inline-flex items-center px-4 py-2 bg-rainbow-orange/10 text-rainbow-orange rounded-lg font-medium hover:bg-rainbow-orange/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar (próximamente)
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-rainbow-purple mb-6 pb-2 border-b border-rainbow-purple/20">Planificación de talleres</h2>
          
          <p className="text-lg mb-6">
            A continuación, compartimos tres propuestas de planificación para talleres 
            de diferente duración, que puedes adaptar según tu contexto específico:
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-rainbow-gradient p-4 text-white">
              <h3 className="text-xl font-bold m-0">Taller introductorio (2 horas)</h3>
            </div>
            <div className="p-6">
              <div className="relative pl-8 pb-6 border-l-2 border-rainbow-blue before:content-[''] before:w-4 before:h-4 before:bg-rainbow-blue before:rounded-full before:absolute before:left-[-9px] before:top-0">
                <h4 className="text-lg font-semibold text-rainbow-blue">Actividad de sensibilización (20 min)</h4>
                <p className="text-gray-700 dark:text-gray-300">Reflexión sobre experiencias personales con el lenguaje y la identidad.</p>
              </div>
              
              <div className="relative pl-8 pb-6 border-l-2 border-rainbow-purple before:content-[''] before:w-4 before:h-4 before:bg-rainbow-purple before:rounded-full before:absolute before:left-[-9px] before:top-0">
                <h4 className="text-lg font-semibold text-rainbow-purple">Introducción teórica (30 min)</h4>
                <p className="text-gray-700 dark:text-gray-300">Fundamentos del lenguaje inclusivo y su importancia.</p>
              </div>
              
              <div className="relative pl-8 pb-6 border-l-2 border-rainbow-pink before:content-[''] before:w-4 before:h-4 before:bg-rainbow-pink before:rounded-full before:absolute before:left-[-9px] before:top-0">
                <h4 className="text-lg font-semibold text-rainbow-pink">Práctica guiada (40 min)</h4>
                <p className="text-gray-700 dark:text-gray-300">Ejercicios de transformación de textos al lenguaje inclusivo.</p>
              </div>
              
              <div className="relative pl-8 pb-6 border-l-2 border-rainbow-green before:content-[''] before:w-4 before:h-4 before:bg-rainbow-green before:rounded-full before:absolute before:left-[-9px] before:top-0">
                <h4 className="text-lg font-semibold text-rainbow-green">Debate y reflexión (20 min)</h4>
                <p className="text-gray-700 dark:text-gray-300">Discusión sobre desafíos y oportunidades.</p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-rainbow-orange before:content-[''] before:w-4 before:h-4 before:bg-rainbow-orange before:rounded-full before:absolute before:left-[-9px] before:top-0">
                <h4 className="text-lg font-semibold text-rainbow-orange">Cierre y recursos adicionales (10 min)</h4>
                <p className="text-gray-700 dark:text-gray-300">Recomendaciones para seguir practicando y aprendiendo.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-rainbow-gradient p-4 text-white">
              <h3 className="text-xl font-bold m-0">Curso intensivo (8 horas, dividido en 2 sesiones)</h3>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-rainbow-blue mb-4 pb-2 border-b border-rainbow-blue/20">Sesión 1</h4>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-blue">
                  <h5 className="font-semibold text-rainbow-blue mb-1">Contextualización histórica y social (45 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Evolución del lenguaje inclusivo y movimientos sociales relacionados.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-purple">
                  <h5 className="font-semibold text-rainbow-purple mb-1">Fundamentos lingüísticos (45 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Aspectos gramaticales, morfológicos y sintácticos del lenguaje inclusivo.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-pink">
                  <h5 className="font-semibold text-rainbow-pink mb-1">Análisis crítico de textos (90 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Identificación de sesgos de género en diferentes tipos de documentos.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-green">
                  <h5 className="font-semibold text-rainbow-green mb-1">Práctica de transformación (60 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Reescritura de textos utilizando lenguaje inclusivo.</p>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-rainbow-blue mb-4 pb-2 border-b border-rainbow-blue/20">Sesión 2</h4>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-blue">
                  <h5 className="font-semibold text-rainbow-blue mb-1">Revisión de la sesión anterior (30 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Repaso y resolución de dudas.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-purple">
                  <h5 className="font-semibold text-rainbow-purple mb-1">Comunicación oral inclusiva (60 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Estrategias para incorporar el lenguaje inclusivo en el habla.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-pink">
                  <h5 className="font-semibold text-rainbow-pink mb-1">Diseño de materiales didácticos (90 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Creación de recursos educativos inclusivos.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-green">
                  <h5 className="font-semibold text-rainbow-green mb-1">Abordaje de resistencias (60 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Estrategias para responder a críticas y promover el cambio.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border-l-4 border-rainbow-orange">
                  <h5 className="font-semibold text-rainbow-orange mb-1">Plan de acción y cierre (30 min)</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-0">Elaboración de un plan personal/institucional para implementar el lenguaje inclusivo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-rainbow-red/10 dark:bg-rainbow-red/20 p-8 rounded-xl my-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-rainbow-red/5 rounded-full -mr-20 -mt-20"></div>
          
          <h2 className="text-2xl font-bold text-rainbow-red mb-6">Abordando las críticas comunes</h2>
          <p className="text-lg mb-6">
            Al enseñar lenguaje inclusivo, es probable que encuentres resistencias. 
            Aquí te ofrecemos algunas sugerencias para abordarlas constructivamente:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-rainbow-red mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                "Es incorrecto gramaticalmente"
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Explica que las lenguas evolucionan constantemente y que la corrección gramatical es una 
                convención que cambia con el tiempo.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-rainbow-red mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                "Es difícil de pronunciar/escribir"
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Reconoce que cualquier cambio requiere práctica, pero que con el tiempo se vuelve natural.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-rainbow-red mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                "El masculino genérico ya incluye a todo el mundo"
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Comparte investigaciones sobre cómo el masculino genérico produce sesgos cognitivos.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-rainbow-red mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                "Hay problemas más importantes"
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Explica que el lenguaje refleja y refuerza estructuras sociales, y que el cambio lingüístico 
                es parte de un cambio social más amplio.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-rainbow-orange mb-6 pb-2 border-b border-rainbow-orange/20">Testimonios de educadores</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg relative">
            <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rainbow-green/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
              </svg>
            </div>
            <p className="text-lg italic mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
              "Incorporar el lenguaje inclusivo en mis clases de literatura ha abierto 
              conversaciones fascinantes sobre cómo el lenguaje construye realidades. 
              <span className="block mt-2">
                Mis estudiantes ahora analizan los textos con una mirada más crítica 
                y son más conscientes del poder de las palabras."
              </span>
            </p>
            <div className="flex items-center">
              <div className="bg-rainbow-green/20 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                <span className="text-rainbow-green font-bold text-xl">M</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white m-0">Marcela</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 m-0">Profesora de literatura, Buenos Aires</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-lg relative">
            <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rainbow-purple/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
              </svg>
            </div>
            <p className="text-lg italic mb-5 text-gray-700 dark:text-gray-300 leading-relaxed">
              "Al principio encontré mucha resistencia, pero cuando enfoqué la enseñanza 
              desde la empatía y las experiencias personales, comencé a ver cambios. 
              <span className="block mt-2">
                Ahora tengo estudiantes que defienden el uso del lenguaje inclusivo 
                en otros espacios educativos."
              </span>
            </p>
            <div className="flex items-center">
              <div className="bg-rainbow-purple/20 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                <span className="text-rainbow-purple font-bold text-xl">C</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white m-0">Carlos</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 m-0">Educador social, Santiago de Chile</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-12">
          <Link 
            href="/ejemplos" 
            className="px-8 py-4 bg-rainbow-gradient text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-1"
          >
            Ver ejemplos prácticos 🔍
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recursos relacionados</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/ejemplos" className="flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-rainbow-blue/10 dark:hover:bg-rainbow-blue/20 transition-colors group">
              <div className="bg-rainbow-blue/20 rounded-full p-2 mr-3 group-hover:bg-rainbow-blue/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 dark:text-white group-hover:text-rainbow-blue dark:group-hover:text-rainbow-blue transition-colors">
                Ejemplos
              </span>
            </Link>
            
            <Link href="/glosario" className="flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-rainbow-purple/10 dark:hover:bg-rainbow-purple/20 transition-colors group">
              <div className="bg-rainbow-purple/20 rounded-full p-2 mr-3 group-hover:bg-rainbow-purple/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 dark:text-white group-hover:text-rainbow-purple dark:group-hover:text-rainbow-purple transition-colors">
                Glosario
              </span>
            </Link>
            
            <Link href="/recursos-externos" className="flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-rainbow-green/10 dark:hover:bg-rainbow-green/20 transition-colors group">
              <div className="bg-rainbow-green/20 rounded-full p-2 mr-3 group-hover:bg-rainbow-green/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 dark:text-white group-hover:text-rainbow-green dark:group-hover:text-rainbow-green transition-colors">
                Recursos externos
              </span>
            </Link>
            
            <Link href="/preguntas-frecuentes" className="flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-rainbow-red/10 dark:hover:bg-rainbow-red/20 transition-colors group">
              <div className="bg-rainbow-red/20 rounded-full p-2 mr-3 group-hover:bg-rainbow-red/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900 dark:text-white group-hover:text-rainbow-red dark:group-hover:text-rainbow-red transition-colors">
                Preguntas frecuentes
              </span>
            </Link>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}