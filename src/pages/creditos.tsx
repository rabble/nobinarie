// ABOUTME: This page lists the credits and acknowledgments for the project
// ABOUTME: It recognizes contributors, collaborators, and supporters

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function Creditos() {
  return (
    <ContentLayout 
      title="Créditos y agradecimientos" 
      description="Reconocimiento a todas las personas que han contribuido al proyecto nobinarie"
      lastUpdated="21 de marzo de 2023"
    >
      <p>
        El proyecto nobinarie existe gracias al trabajo, dedicación y compromiso de muchas personas 
        que han contribuido de diversas formas a lo largo del tiempo. Esta página reconoce y agradece 
        a quienes han hecho posible este proyecto.
      </p>

      <h2>Equipo principal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12 mt-8">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rainbow-purple to-rainbow-blue flex items-center justify-center text-white text-2xl font-bold mb-4">
            LR
          </div>
          <h3 className="text-lg font-semibold mb-1">Lucía Ramírez</h3>
          <p className="text-sm text-rainbow-purple dark:text-rainbow-purple mb-2">Fundadora y directora</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Activista no binaria y lingüista. Inició el proyecto en 2018 y coordina el 
            comité lingüístico.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rainbow-blue to-rainbow-green flex items-center justify-center text-white text-2xl font-bold mb-4">
            AT
          </div>
          <h3 className="text-lg font-semibold mb-1">Alex Torres</h3>
          <p className="text-sm text-rainbow-blue dark:text-rainbow-blue mb-2">Dirección tecnológica</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Desarrollador de software y activista. Responsable del desarrollo técnico 
            de los diccionarios y plataformas.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rainbow-green to-rainbow-yellow flex items-center justify-center text-white text-2xl font-bold mb-4">
            MS
          </div>
          <h3 className="text-lg font-semibold mb-1">Miguel Sánchez</h3>
          <p className="text-sm text-rainbow-green dark:text-rainbow-green mb-2">Coordinación de desarrollo</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Ingeniero de software. Lidera el desarrollo de las herramientas tecnológicas 
            y coordina el equipo técnico.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rainbow-yellow to-rainbow-orange flex items-center justify-center text-white text-2xl font-bold mb-4">
            CM
          </div>
          <h3 className="text-lg font-semibold mb-1">Carmen Mendoza</h3>
          <p className="text-sm text-rainbow-yellow dark:text-rainbow-yellow mb-2">Dirección educativa</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Educadora y activista. Responsable de los materiales pedagógicos y 
            la estrategia educativa.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rainbow-orange to-rainbow-red flex items-center justify-center text-white text-2xl font-bold mb-4">
            JP
          </div>
          <h3 className="text-lg font-semibold mb-1">Javier Pérez</h3>
          <p className="text-sm text-rainbow-orange dark:text-rainbow-orange mb-2">Comunicación y prensa</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Comunicador social. Gestiona las relaciones con los medios, redes sociales 
            y estrategia de comunicación.
          </p>
        </div>
        
        <div className="text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-rainbow-red to-rainbow-purple flex items-center justify-center text-white text-2xl font-bold mb-4">
            VG
          </div>
          <h3 className="text-lg font-semibold mb-1">Valeria Gutiérrez</h3>
          <p className="text-sm text-rainbow-red dark:text-rainbow-red mb-2">Diseño y experiencia de usuario</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Diseñadora gráfica y UX. Responsable de la identidad visual y experiencia 
            de usuario del proyecto.
          </p>
        </div>
      </div>

      <h2 className="mt-12">Equipos de trabajo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="bg-gradient-to-br from-rainbow-purple/10 to-rainbow-blue/10 dark:from-rainbow-purple/20 dark:to-rainbow-blue/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-rainbow-purple dark:text-rainbow-purple mt-0 mb-4">Comité lingüístico</h3>
          <p className="mb-4">
            Responsable de la creación, revisión y actualización del contenido de los diccionarios 
            y recursos lingüísticos.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Dra. Ana Martínez, lingüista</li>
            <li>Prof. Roberto Vega, filólogo</li>
            <li>Cecilia Fernández, traductora</li>
            <li>Dr. Carlos Ramírez, sociolingüista</li>
            <li>Valentina Ortiz, escritora</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-blue/10 to-rainbow-green/10 dark:from-rainbow-blue/20 dark:to-rainbow-green/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-rainbow-blue dark:text-rainbow-blue mt-0 mb-4">Equipo de desarrollo</h3>
          <p className="mb-4">
            Encargado del desarrollo técnico de los diccionarios, sitio web y herramientas digitales.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Sofía Rodríguez, desarrolladora frontend</li>
            <li>Martín López, desarrollador backend</li>
            <li>Laura Gómez, ingeniera de QA</li>
            <li>Daniel Torres, desarrollador móvil</li>
            <li>Camila Herrera, DevOps</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-green/10 to-rainbow-yellow/10 dark:from-rainbow-green/20 dark:to-rainbow-yellow/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-rainbow-green dark:text-rainbow-green mt-0 mb-4">Equipo educativo</h3>
          <p className="mb-4">
            Responsable de crear materiales educativos y estrategias pedagógicas para 
            la enseñanza del lenguaje inclusivo.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Prof. Mariana Silva, educadora</li>
            <li>Diego Méndez, diseñador instruccional</li>
            <li>Julia Paredes, psicopedagoga</li>
            <li>Prof. Andrés Castillo, docente universitario</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-orange/10 to-rainbow-red/10 dark:from-rainbow-orange/20 dark:to-rainbow-red/20 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-rainbow-orange dark:text-rainbow-orange mt-0 mb-4">Equipo de comunicación</h3>
          <p className="mb-4">
            Encargado de la estrategia de comunicación, redes sociales, prensa y difusión.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Patricia Ramos, community manager</li>
            <li>Fernando Díaz, periodista</li>
            <li>Gabriela Suárez, diseñadora gráfica</li>
            <li>Rodrigo Núñez, editor de contenidos</li>
          </ul>
        </div>
      </div>

      <h2>Colaboradores y contribuyentes</h2>
      
      <p>
        Agradecemos a todas las personas que han contribuido al proyecto nobinarie a través 
        de correcciones, sugerencias, código, diseño, traducciones y muchas otras formas:
      </p>
      
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl my-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 text-sm">
          <div>Alejandra Moreno</div>
          <div>Pablo Gutiérrez</div>
          <div>Marina Sosa</div>
          <div>Sebastián Vega</div>
          <div>Victoria Paz</div>
          <div>Nicolás Rivas</div>
          <div>Laura Quiroga</div>
          <div>Julián Castro</div>
          <div>Andrea Rojas</div>
          <div>Manuel Delgado</div>
          <div>Carolina Torres</div>
          <div>Francisco Silva</div>
          <div>Mónica Paredes</div>
          <div>Ricardo Fuentes</div>
          <div>Silvia Campos</div>
          <div>Eduardo Méndez</div>
          <div>Roxana Díaz</div>
          <div>Gustavo Navarro</div>
          <div>Cecilia Paz</div>
          <div>Rafael Mora</div>
          <div>María Eugenia Solís</div>
          <div>Ignacio Vargas</div>
          <div>Daniela Rivera</div>
          <div>Matías Fernández</div>
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4 mb-0">
          Y a más de 50 contribuyentes adicionales que han aportado a este proyecto.
        </p>
      </div>

      <h2>Organizaciones aliadas</h2>
      
      <p>
        Agradecemos a las siguientes organizaciones por su apoyo, colaboración y alianzas 
        que han fortalecido nuestro trabajo:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
          <div className="h-16 flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-rainbow-blue/20 dark:bg-rainbow-blue/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-1">Fundación Diversidad Lingüística</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Por su apoyo financiero y asesoría en el desarrollo del proyecto.
          </p>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
          <div className="h-16 flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-rainbow-purple/20 dark:bg-rainbow-purple/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-1">Red de Universidades por la Diversidad</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Por facilitar espacios académicos y de investigación.
          </p>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
          <div className="h-16 flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-rainbow-green/20 dark:bg-rainbow-green/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-1">Colectivo Tecnología Inclusiva</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Por su colaboración técnica y apoyo en el desarrollo de herramientas.
          </p>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
          <div className="h-16 flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-rainbow-orange/20 dark:bg-rainbow-orange/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-1">Asociación por los Derechos LGBTIQ+</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Por su asesoría y respaldo institucional al proyecto.
          </p>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
          <div className="h-16 flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-rainbow-red/20 dark:bg-rainbow-red/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-1">Observatorio de Medios y Comunicación</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Por su ayuda en la difusión y promoción del proyecto.
          </p>
        </div>
        
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
          <div className="h-16 flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-rainbow-yellow/20 dark:bg-rainbow-yellow/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-1">Fondo para Iniciativas Digitales</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Por su apoyo financiero para el desarrollo tecnológico.
          </p>
        </div>
      </div>

      <h2>Agradecimientos especiales</h2>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Queremos expresar nuestro agradecimiento especial a:
        </p>
        
        <ul>
          <li>
            <strong>A la comunidad de personas no binarias</strong> que han compartido sus experiencias, 
            perspectivas y necesidades, orientando nuestro trabajo hacia un impacto real y significativo.
          </li>
          <li>
            <strong>A los movimientos por la diversidad de género</strong> que han abierto camino y 
            creado conciencia sobre la importancia del lenguaje inclusivo.
          </li>
          <li>
            <strong>A les docentes y educadores</strong> que han incorporado el lenguaje inclusivo 
            en sus prácticas y han promovido su uso en entornos educativos.
          </li>
          <li>
            <strong>A las instituciones académicas</strong> que han apoyado la investigación sobre 
            lenguaje inclusivo y han contribuido a su legitimación.
          </li>
          <li>
            <strong>A todes les usuaries</strong> que utilizan nuestros diccionarios día a día, 
            contribuyendo a normalizar el lenguaje inclusivo en diferentes espacios.
          </li>
        </ul>
        
        <p>
          Y un agradecimiento muy especial a todas las personas que, a lo largo de la historia, 
          han luchado por visibilizar y dignificar todas las identidades de género, creando las 
          condiciones para que proyectos como nobinarie puedan existir y prosperar.
        </p>
      </div>

      <div className="bg-gradient-to-r from-rainbow-purple/10 to-rainbow-blue/10 dark:from-rainbow-purple/20 dark:to-rainbow-blue/20 p-6 rounded-xl my-10">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-0 mb-2">¿Quieres formar parte de esta lista?</h3>
        <p className="mb-4">
          Estamos siempre abiertos a nuevas colaboraciones y contribuciones. Si quieres 
          formar parte del proyecto nobinarie, hay muchas formas de participar.
        </p>
        <Link 
          href="/contribuir" 
          className="btn-primary inline-flex"
        >
          Conoce cómo contribuir
        </Link>
      </div>

      <h2>Recursos relacionados</h2>
      
      <ul>
        <li>
          <Link href="/historia" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Historia del proyecto
          </Link>
        </li>
        <li>
          <Link href="/contribuir" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Cómo contribuir
          </Link>
        </li>
        <li>
          <Link href="/prensa" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Prensa y medios
          </Link>
        </li>
        <li>
          <Link href="/manifiesto" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Manifiesto político
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}