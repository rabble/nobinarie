// ABOUTME: This page provides external resources for inclusive language
// ABOUTME: It compiles articles, books, videos and links to other organizations

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function RecursosExternos() {
  return (
    <ContentLayout 
      title="Recursos externos" 
      description="Compilación de artículos, libros, videos y organizaciones sobre lenguaje inclusivo y diversidad de género"
      lastUpdated="21 de marzo de 2023"
    >
      <p>
        Hemos reunido una selección de recursos valiosos sobre lenguaje inclusivo, 
        estudios de género, diversidad y temas relacionados. Esta página se actualiza 
        periódicamente con nuevos recursos que consideramos relevantes y de calidad.
      </p>

      <div className="bg-rainbow-yellow/10 dark:bg-rainbow-yellow/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-yellow dark:text-rainbow-yellow mt-0">Nota sobre los enlaces</h3>
        <p className="mb-0">
          Los recursos que compartimos aquí provienen de diferentes fuentes y 
          representan diversas perspectivas. El hecho de incluirlos no implica que 
          respaldemos todas las opiniones expresadas en ellos. Te invitamos a 
          consultarlos con una mirada crítica y reflexiva.
        </p>
      </div>

      <h2>Publicaciones académicas</h2>
      
      <div className="space-y-6">
        <div className="border-l-4 border-rainbow-blue pl-4 py-1">
          <h3 className="mt-0 mb-1 text-lg font-semibold">Lenguaje inclusivo y cambio social: Una aproximación sociolingüística</h3>
          <p className="text-sm mb-1">Autora: Dra. María Marta García Negroni</p>
          <p className="text-sm mb-2">Revista Argentina de Lingüística, Vol. 32, 2020</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Estudio sobre las evoluciones recientes del español en Argentina y 
            otros países hispanohablantes en relación con los movimientos sociales 
            por la equidad de género.
          </p>
          <a 
            href="https://ejemplo.org/garcia-negroni-2020" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Ver publicación (enlace ficticio)
          </a>
        </div>
        
        <div className="border-l-4 border-rainbow-blue pl-4 py-1">
          <h3 className="mt-0 mb-1 text-lg font-semibold">Morfología no binaria: la terminación -e en el español contemporáneo</h3>
          <p className="text-sm mb-1">Autor: Dr. Santiago Kalinowski</p>
          <p className="text-sm mb-2">Cuadernos de Lingüística Hispánica, No. 37, 2021</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Análisis lingüístico de la terminación -e como morfema de género neutro 
            o no binario, con énfasis en su integración en el sistema gramatical español.
          </p>
          <a 
            href="https://ejemplo.org/kalinowski-2021" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Ver publicación (enlace ficticio)
          </a>
        </div>
        
        <div className="border-l-4 border-rainbow-blue pl-4 py-1">
          <h3 className="mt-0 mb-1 text-lg font-semibold">Lenguaje inclusivo en contextos educativos: desafíos y oportunidades</h3>
          <p className="text-sm mb-1">Autores: Ana María Fernández y Carlos López Rodríguez</p>
          <p className="text-sm mb-2">Revista de Educación y Diversidad, Vol. 15, 2019</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Estudio sobre la implementación de lenguaje inclusivo en escuelas 
            secundarias y universidades, con análisis de casos y recomendaciones.
          </p>
          <a 
            href="https://ejemplo.org/fernandez-lopez-2019" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Ver publicación (enlace ficticio)
          </a>
        </div>
      </div>

      <h2>Libros recomendados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <div className="h-40 bg-gradient-to-br from-rainbow-blue/20 to-rainbow-purple/20 mb-4 rounded flex items-center justify-center">
            <span className="text-4xl">📚</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Lenguaje inclusivo: Un pequeño paso en el camino hacia la equidad</h3>
          <p className="text-sm mb-2">Beatriz Sarlo, 2020</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Un análisis accesible y profundo sobre el papel del lenguaje en la 
            construcción de identidades y desigualdades.
          </p>
          <a 
            href="https://ejemplo.org/libro-sarlo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Más información (enlace ficticio)
          </a>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <div className="h-40 bg-gradient-to-br from-rainbow-green/20 to-rainbow-yellow/20 mb-4 rounded flex items-center justify-center">
            <span className="text-4xl">📚</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">El poder de las palabras: Lenguaje, género y cambio social</h3>
          <p className="text-sm mb-2">Diana Maffía, 2019</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Una exploración del poder performativo del lenguaje y su rol en la 
            transformación de las relaciones de género.
          </p>
          <a 
            href="https://ejemplo.org/libro-maffia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Más información (enlace ficticio)
          </a>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <div className="h-40 bg-gradient-to-br from-rainbow-orange/20 to-rainbow-red/20 mb-4 rounded flex items-center justify-center">
            <span className="text-4xl">📚</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Guía práctica de comunicación inclusiva</h3>
          <p className="text-sm mb-2">Gabriela Castellanos y Carlos Rodríguez, 2021</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Manual práctico con estrategias, ejemplos y ejercicios para implementar 
            el lenguaje inclusivo en diferentes contextos.
          </p>
          <a 
            href="https://ejemplo.org/guia-practica" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Más información (enlace ficticio)
          </a>
        </div>
      </div>

      <h2>Videos y documentales</h2>
      
      <div className="space-y-6 my-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gradient-to-br from-rainbow-red/10 to-rainbow-orange/10 dark:from-rainbow-red/20 dark:to-rainbow-orange/20 rounded-lg p-4 flex items-center justify-center md:w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rainbow-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold mt-0 mb-2">Palabras que incluyen: Documental sobre lenguaje inclusivo</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Documental que explora el uso del lenguaje inclusivo en diferentes 
              países hispanohablantes, con testimonios de lingüistas, activistas y personas no binarias.
            </p>
            <a 
              href="https://ejemplo.org/documental-palabras" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
            >
              Ver documental (enlace ficticio)
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gradient-to-br from-rainbow-purple/10 to-rainbow-blue/10 dark:from-rainbow-purple/20 dark:to-rainbow-blue/20 rounded-lg p-4 flex items-center justify-center md:w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold mt-0 mb-2">Serie de charlas TED: Lenguaje e inclusión</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Colección de charlas TED sobre la relación entre lenguaje, identidad y equidad, 
              que abordan el lenguaje inclusivo desde diferentes perspectivas.
            </p>
            <a 
              href="https://ejemplo.org/ted-lenguaje" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
            >
              Ver charlas (enlace ficticio)
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gradient-to-br from-rainbow-green/10 to-rainbow-blue/10 dark:from-rainbow-green/20 dark:to-rainbow-blue/20 rounded-lg p-4 flex items-center justify-center md:w-1/3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold mt-0 mb-2">Canal educativo: Lingüística y diversidad</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Canal de YouTube con videos explicativos sobre lenguaje inclusivo, 
              evolución lingüística y la relación entre lenguaje e identidad.
            </p>
            <a 
              href="https://ejemplo.org/canal-linguistica" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
            >
              Visitar canal (enlace ficticio)
            </a>
          </div>
        </div>
      </div>

      <h2>Organizaciones y colectivos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mt-0 mb-2">Red Latinoamericana por el Lenguaje Inclusivo</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Colectivo de lingüistas, educadores y activistas que promueve 
            la investigación y difusión del lenguaje inclusivo en toda América Latina.
          </p>
          <a 
            href="https://ejemplo.org/red-latinoamericana" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Visitar sitio web (enlace ficticio)
          </a>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mt-0 mb-2">Fundación Lenguaje y Derechos</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Organización dedicada a la promoción de los derechos lingüísticos 
            de comunidades minorizadas, incluyendo personas LGBTIQ+.
          </p>
          <a 
            href="https://ejemplo.org/fundacion-lenguaje" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Visitar sitio web (enlace ficticio)
          </a>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mt-0 mb-2">Observatorio de Lingüística y Género</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Centro de investigación que estudia la relación entre lenguaje y género, 
            con publicaciones periódicas y recursos educativos.
          </p>
          <a 
            href="https://ejemplo.org/observatorio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Visitar sitio web (enlace ficticio)
          </a>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mt-0 mb-2">Asociación por la Comunicación No Sexista</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Organización que ofrece formación y recursos para implementar 
            lenguaje inclusivo en medios de comunicación, empresas e instituciones.
          </p>
          <a 
            href="https://ejemplo.org/asociacion-nosexista" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Visitar sitio web (enlace ficticio)
          </a>
        </div>
      </div>

      <h2>Guías y manuales</h2>
      
      <div className="space-y-4 my-8">
        <div className="border-l-4 border-rainbow-green pl-4 py-1">
          <h3 className="mt-0 mb-1 text-lg font-semibold">Manual de comunicación inclusiva</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Guía completa para implementar lenguaje inclusivo en comunicaciones 
            institucionales, con ejemplos prácticos y recomendaciones.
          </p>
          <a 
            href="https://ejemplo.org/manual-comunicacion" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-green dark:text-rainbow-green hover:underline text-sm"
          >
            Descargar PDF (enlace ficticio)
          </a>
        </div>
        
        <div className="border-l-4 border-rainbow-purple pl-4 py-1">
          <h3 className="mt-0 mb-1 text-lg font-semibold">Guía de estilo para medios de comunicación</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Lineamientos específicos para periodistas y profesionales de la comunicación 
            sobre cómo implementar lenguaje inclusivo en noticias y reportajes.
          </p>
          <a 
            href="https://ejemplo.org/guia-medios" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-purple dark:text-rainbow-purple hover:underline text-sm"
          >
            Descargar PDF (enlace ficticio)
          </a>
        </div>
        
        <div className="border-l-4 border-rainbow-orange pl-4 py-1">
          <h3 className="mt-0 mb-1 text-lg font-semibold">Recursos para docentes: Enseñar inclusión desde el lenguaje</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Kit de herramientas para educadores con actividades, dinámicas y 
            planificaciones para trabajar el lenguaje inclusivo en el aula.
          </p>
          <a 
            href="https://ejemplo.org/recursos-docentes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-orange dark:text-rainbow-orange hover:underline text-sm"
          >
            Descargar PDF (enlace ficticio)
          </a>
        </div>
      </div>

      <div className="bg-rainbow-blue/10 dark:bg-rainbow-blue/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-blue dark:text-rainbow-blue mt-0">¿Conoces algún recurso valioso?</h3>
        <p className="mb-2">
          Si conoces algún recurso que debería estar en esta lista, no dudes en contactarnos. 
          Valoramos las contribuciones de la comunidad para hacer de esta página un recurso 
          cada vez más completo y útil.
        </p>
        <Link 
          href="/contribuir" 
          className="text-rainbow-blue dark:text-rainbow-blue hover:underline"
        >
          Sugerir un recurso
        </Link>
      </div>

      <h2>Recursos relacionados</h2>
      
      <ul>
        <li>
          <Link href="/ensenar-lengua-inclusiva" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Enseñar lengua inclusiva
          </Link>
        </li>
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
          <Link href="/preguntas-frecuentes" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Preguntas frecuentes
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}