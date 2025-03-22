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
      <p>
        Esta página está dedicada a docentes, educadores, talleristas y cualquier persona interesada 
        en enseñar el uso del lenguaje inclusivo con terminaciones en -e. Ofrece recursos prácticos, 
        metodologías y sugerencias para introducir y practicar el lenguaje inclusivo en diferentes 
        contextos educativos.
      </p>

      <h2>¿Por qué enseñar lenguaje inclusivo?</h2>
      
      <ul>
        <li>
          <strong>Promueve la inclusión:</strong> Enseñar lenguaje inclusivo crea espacios 
          donde todas las personas se sienten representadas y visibilizadas.
        </li>
        <li>
          <strong>Desarrolla conciencia crítica:</strong> Ayuda a les estudiantes a reflexionar 
          sobre cómo el lenguaje refleja y construye realidades sociales.
        </li>
        <li>
          <strong>Prepara para la diversidad:</strong> Equipa a les estudiantes con herramientas 
          para comunicarse respetuosamente en un mundo cada vez más consciente de la diversidad.
        </li>
        <li>
          <strong>Fomenta la empatía:</strong> Anima a considerar cómo nuestras palabras 
          afectan a otras personas y sus identidades.
        </li>
      </ul>

      <div className="bg-rainbow-blue/10 dark:bg-rainbow-blue/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-blue dark:text-rainbow-blue mt-0">Enfoque pedagógico</h3>
        <p className="mb-0">
          Recomendamos un enfoque pedagógico basado en la reflexión crítica, la empatía y la 
          práctica contextualizada, más que en reglas rígidas. El objetivo es que les estudiantes 
          comprendan el porqué del lenguaje inclusivo y puedan usarlo de manera auténtica y significativa.
        </p>
      </div>

      <h2>Estrategias didácticas</h2>
      
      <h3>Para niñes y adolescentes</h3>
      
      <ol>
        <li>
          <strong>Cuentos inclusivos:</strong> Utiliza o adapta cuentos que incorporen lenguaje inclusivo 
          y personajes diversos.
        </li>
        <li>
          <strong>Juegos de rol:</strong> Crea situaciones donde deban utilizar lenguaje inclusivo para 
          comunicarse con diferentes personas.
        </li>
        <li>
          <strong>Transformación de textos:</strong> Propón actividades donde transformen textos tradicionales 
          a lenguaje inclusivo.
        </li>
        <li>
          <strong>Creación de materiales:</strong> Invita a crear afiches, videos o presentaciones 
          que expliquen el lenguaje inclusivo a sus pares.
        </li>
        <li>
          <strong>Debates constructivos:</strong> Organiza debates respetuosos sobre la importancia 
          y los desafíos del lenguaje inclusivo.
        </li>
      </ol>
      
      <h3>Para personas adultas</h3>
      
      <ol>
        <li>
          <strong>Análisis crítico:</strong> Examina textos, discursos y materiales para identificar 
          sesgos de género en el lenguaje.
        </li>
        <li>
          <strong>Estudios de caso:</strong> Analiza situaciones reales donde el lenguaje inclusivo 
          ha tenido impacto positivo.
        </li>
        <li>
          <strong>Práctica contextualizada:</strong> Realiza ejercicios de escritura y habla en 
          contextos profesionales relevantes.
        </li>
        <li>
          <strong>Testimonios:</strong> Comparte experiencias de personas no binarias sobre la 
          importancia del lenguaje inclusivo.
        </li>
        <li>
          <strong>Investigación participativa:</strong> Propón proyectos de investigación sobre 
          la evolución y el impacto del lenguaje inclusivo.
        </li>
      </ol>

      <h2>Recursos descargables</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg flex items-start">
          <div className="bg-rainbow-purple text-white rounded-lg p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="mt-0 mb-2 font-semibold">Guía para docentes</h3>
            <p className="text-sm mb-2">
              PDF con estrategias, actividades y consejos para integrar el lenguaje inclusivo 
              en el aula.
            </p>
            <Link href="/descargas/guia-docentes.pdf" className="text-rainbow-purple dark:text-rainbow-purple hover:underline text-sm">
              Descargar (próximamente)
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg flex items-start">
          <div className="bg-rainbow-blue text-white rounded-lg p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h3 className="mt-0 mb-2 font-semibold">Presentación educativa</h3>
            <p className="text-sm mb-2">
              Diapositivas listas para usar en clase, con información, ejemplos y actividades 
              sobre lenguaje inclusivo.
            </p>
            <Link href="/descargas/presentacion-educativa.pptx" className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm">
              Descargar (próximamente)
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg flex items-start">
          <div className="bg-rainbow-green text-white rounded-lg p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <h3 className="mt-0 mb-2 font-semibold">Fichas de actividades</h3>
            <p className="text-sm mb-2">
              Conjunto de actividades prácticas para diferentes edades y niveles, 
              listas para imprimir y usar.
            </p>
            <Link href="/descargas/fichas-actividades.pdf" className="text-rainbow-green dark:text-rainbow-green hover:underline text-sm">
              Descargar (próximamente)
            </Link>
          </div>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg flex items-start">
          <div className="bg-rainbow-orange text-white rounded-lg p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          <div>
            <h3 className="mt-0 mb-2 font-semibold">Glosario ilustrado</h3>
            <p className="text-sm mb-2">
              Vocabulario inclusivo con ilustraciones, ejemplos y explicaciones 
              adaptadas para diferentes edades.
            </p>
            <Link href="/descargas/glosario-ilustrado.pdf" className="text-rainbow-orange dark:text-rainbow-orange hover:underline text-sm">
              Descargar (próximamente)
            </Link>
          </div>
        </div>
      </div>

      <h2>Planificación de talleres</h2>
      
      <p>
        A continuación, compartimos tres propuestas de planificación para talleres 
        de diferente duración, que puedes adaptar según tu contexto específico:
      </p>
      
      <h3>Taller introductorio (2 horas)</h3>
      
      <ol>
        <li>
          <strong>Actividad de sensibilización (20 min):</strong> Reflexión sobre experiencias 
          personales con el lenguaje y la identidad.
        </li>
        <li>
          <strong>Introducción teórica (30 min):</strong> Fundamentos del lenguaje inclusivo 
          y su importancia.
        </li>
        <li>
          <strong>Práctica guiada (40 min):</strong> Ejercicios de transformación de textos 
          al lenguaje inclusivo.
        </li>
        <li>
          <strong>Debate y reflexión (20 min):</strong> Discusión sobre desafíos y oportunidades.
        </li>
        <li>
          <strong>Cierre y recursos adicionales (10 min):</strong> Recomendaciones para 
          seguir practicando y aprendiendo.
        </li>
      </ol>
      
      <h3>Curso intensivo (8 horas, dividido en 2 sesiones)</h3>
      
      <strong>Sesión 1:</strong>
      <ol>
        <li>
          <strong>Contextualización histórica y social (45 min):</strong> Evolución del lenguaje 
          inclusivo y movimientos sociales relacionados.
        </li>
        <li>
          <strong>Fundamentos lingüísticos (45 min):</strong> Aspectos gramaticales, morfológicos 
          y sintácticos del lenguaje inclusivo.
        </li>
        <li>
          <strong>Análisis crítico de textos (90 min):</strong> Identificación de sesgos de género 
          en diferentes tipos de documentos.
        </li>
        <li>
          <strong>Práctica de transformación (60 min):</strong> Reescritura de textos utilizando 
          lenguaje inclusivo.
        </li>
      </ol>
      
      <strong>Sesión 2:</strong>
      <ol>
        <li>
          <strong>Revisión de la sesión anterior (30 min):</strong> Repaso y resolución de dudas.
        </li>
        <li>
          <strong>Comunicación oral inclusiva (60 min):</strong> Estrategias para incorporar 
          el lenguaje inclusivo en el habla.
        </li>
        <li>
          <strong>Diseño de materiales didácticos (90 min):</strong> Creación de recursos 
          educativos inclusivos.
        </li>
        <li>
          <strong>Abordaje de resistencias (60 min):</strong> Estrategias para responder 
          a críticas y promover el cambio.
        </li>
        <li>
          <strong>Plan de acción y cierre (30 min):</strong> Elaboración de un plan personal/institucional 
          para implementar el lenguaje inclusivo.
        </li>
      </ol>

      <h2>Consejos para responder a preguntas y resistencias</h2>
      
      <div className="bg-rainbow-red/10 dark:bg-rainbow-red/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-red dark:text-rainbow-red mt-0">Abordando las críticas comunes</h3>
        <p>
          Al enseñar lenguaje inclusivo, es probable que encuentres resistencias. 
          Aquí te ofrecemos algunas sugerencias para abordarlas constructivamente:
        </p>
        <ul className="mb-0">
          <li>
            <strong>"Es incorrecto gramaticalmente":</strong> Explica que las lenguas evolucionan 
            constantemente y que la corrección gramatical es una convención que cambia con el tiempo.
          </li>
          <li>
            <strong>"Es difícil de pronunciar/escribir":</strong> Reconoce que cualquier cambio 
            requiere práctica, pero que con el tiempo se vuelve natural.
          </li>
          <li>
            <strong>"El masculino genérico ya incluye a todo el mundo":</strong> Comparte 
            investigaciones sobre cómo el masculino genérico produce sesgos cognitivos.
          </li>
          <li>
            <strong>"Hay problemas más importantes":</strong> Explica que el lenguaje refleja y 
            refuerza estructuras sociales, y que el cambio lingüístico es parte de un 
            cambio social más amplio.
          </li>
        </ul>
      </div>

      <h2>Testimonios de educadores</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        <div className="bg-gradient-to-br from-rainbow-green/10 to-rainbow-blue/10 dark:from-rainbow-green/20 dark:to-rainbow-blue/20 p-5 rounded-lg">
          <p className="italic mb-4">
            "Incorporar el lenguaje inclusivo en mis clases de literatura ha abierto 
            conversaciones fascinantes sobre cómo el lenguaje construye realidades. 
            Mis estudiantes ahora analizan los textos con una mirada más crítica 
            y son más conscientes del poder de las palabras."
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            — Marcela, profesora de literatura, Buenos Aires
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-purple/10 to-rainbow-red/10 dark:from-rainbow-purple/20 dark:to-rainbow-red/20 p-5 rounded-lg">
          <p className="italic mb-4">
            "Al principio encontré mucha resistencia, pero cuando enfoqué la enseñanza 
            desde la empatía y las experiencias personales, comencé a ver cambios. 
            Ahora tengo estudiantes que defienden el uso del lenguaje inclusivo 
            en otros espacios educativos."
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            — Carlos, educador social, Santiago de Chile
          </p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Link 
          href="/ejemplos" 
          className="btn-primary"
        >
          Ver ejemplos prácticos 🔍
        </Link>
      </div>

      <h2>Recursos relacionados</h2>
      
      <ul>
        <li>
          <Link href="/ejemplos" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Ejemplos de lenguaje inclusivo
          </Link>
        </li>
        <li>
          <Link href="/glosario" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Glosario de términos inclusivos
          </Link>
        </li>
        <li>
          <Link href="/recursos-externos" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Recursos externos
          </Link>
        </li>
        <li>
          <Link href="/preguntas-frecuentes" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Preguntas frecuentes
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}