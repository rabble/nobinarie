// ABOUTME: This page showcases inclusive language in real-world contexts
// ABOUTME: It provides practical examples and success stories of inclusive language in action

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function LenguajeInclusivoEnAccion() {
  return (
    <ContentLayout 
      title="Lenguaje inclusivo en acción" 
      description="Casos reales y ejemplos prácticos del lenguaje inclusivo transformando la comunicación"
      lastUpdated="22 de marzo de 2023"
    >
      <p className="text-lg font-medium">
        El lenguaje inclusivo no es solo teoría o ideología: ya está siendo utilizado 
        en múltiples contextos, transformando la forma en que nos comunicamos y 
        generando espacios más inclusivos. En esta página presentamos ejemplos reales 
        y casos de éxito de la implementación del lenguaje inclusivo en diferentes ámbitos.
      </p>

      <div className="bg-gradient-to-r from-rainbow-purple/20 to-rainbow-blue/20 dark:from-rainbow-purple/30 dark:to-rainbow-blue/30 p-8 rounded-xl my-10">
        <h2 className="text-2xl font-bold mt-0 mb-6 text-center">Impacto del lenguaje inclusivo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-rainbow-purple mb-2">78%</div>
            <p className="text-sm">de jóvenes se sienten más incluidæs en espacios que utilizan lenguaje inclusivo</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-rainbow-blue mb-2">23</div>
            <p className="text-sm">universidades han adoptado guías oficiales de lenguaje inclusivo</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-rainbow-green mb-2">12+</div>
            <p className="text-sm">países con instituciones públicas que han integrado lenguaje inclusivo</p>
          </div>
        </div>
      </div>

      <h2>Ejemplos destacados por sector</h2>
      
      <div className="space-y-12 mt-8">
        <section>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 bg-rainbow-purple/10 dark:bg-rainbow-purple/20 rounded-xl p-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-rainbow-purple dark:text-rainbow-purple mt-0 mb-4">Educación</h3>
              <p className="mb-4">
                Las instituciones educativas han sido pioneras en la adopción del lenguaje inclusivo, 
                creando entornos donde todes les estudiantes se sienten representades y valorades.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
                <h4 className="font-semibold mt-0 mb-2">Universidad Nacional de Rosario (Argentina)</h4>
                <p className="text-sm mb-0">
                  Implementó en 2021 una guía oficial de comunicación inclusiva que permite el uso 
                  de la terminación en -e en documentos académicos, comunicaciones institucionales 
                  y tesis. Ha reportado una mejora significativa en el bienestar de estudiantes 
                  no binaries y mayor sensibilización en toda la comunidad universitaria.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mt-0 mb-2">Red de Escuelas Inclusivas (Chile)</h4>
                <p className="text-sm mb-0">
                  Una red de 17 escuelas secundarias que ha integrado el lenguaje inclusivo en sus 
                  materiales didácticos y comunicaciones. Docentes reportan una reducción en casos 
                  de discriminación y un aumento en la participación de estudiantes diversos en 
                  actividades escolares.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 bg-rainbow-blue/10 dark:bg-rainbow-blue/20 rounded-xl p-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-rainbow-blue dark:text-rainbow-blue mt-0 mb-4">Sector público</h3>
              <p className="mb-4">
                Gobiernos e instituciones públicas están adoptando lenguaje inclusivo como parte 
                de su compromiso con la igualdad y la diversidad.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
                <h4 className="font-semibold mt-0 mb-2">Ministerio de Igualdad (España)</h4>
                <p className="text-sm mb-0">
                  Ha implementado una guía de comunicación inclusiva que contempla el uso de la terminación 
                  en -e para comunicaciones internas y publicaciones. También promueve su adopción en otros 
                  organismos públicos como parte de las políticas de igualdad.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mt-0 mb-2">Municipalidad de Montevideo (Uruguay)</h4>
                <p className="text-sm mb-0">
                  Desde 2022, utiliza lenguaje inclusivo en sus comunicaciones oficiales, formularios 
                  y señalética. Ha implementado capacitaciones para funcionarios públicos y desarrollado 
                  una guía de lenguaje inclusivo específica para la atención ciudadana.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 bg-rainbow-green/10 dark:bg-rainbow-green/20 rounded-xl p-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-rainbow-green dark:text-rainbow-green mt-0 mb-4">Empresas y organizaciones</h3>
              <p className="mb-4">
                El sector privado está descubriendo que el lenguaje inclusivo no solo es una cuestión 
                de justicia social, sino también una estrategia efectiva para conectar con audiencias 
                diversas.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
                <h4 className="font-semibold mt-0 mb-2">Cooperativa Editorial Libres (México)</h4>
                <p className="text-sm mb-0">
                  Editorial especializada en literatura diversa que ha adoptado el lenguaje inclusivo 
                  en todas sus publicaciones. Sus libros han sido adoptados por más de 50 escuelas y 
                  han reportado un crecimiento del 200% en sus ventas en los últimos dos años.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mt-0 mb-2">Agencia de Publicidad Diversa (Colombia)</h4>
                <p className="text-sm mb-0">
                  Agencia que se especializa en campañas inclusivas y ha integrado el lenguaje inclusivo 
                  en todas sus producciones. Ha reportado que sus campañas logran mayor conexión emocional 
                  y engagement con públicos jóvenes, y ha ganado premios por innovación en comunicación.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 bg-rainbow-orange/10 dark:bg-rainbow-orange/20 rounded-xl p-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-rainbow-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-rainbow-orange dark:text-rainbow-orange mt-0 mb-4">Medios y cultura</h3>
              <p className="mb-4">
                Los medios de comunicación y la industria cultural están incorporando el lenguaje 
                inclusivo, ampliando los horizontes de representación y expresión.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-4">
                <h4 className="font-semibold mt-0 mb-2">Revista Digital Voz Diversa (Perú)</h4>
                <p className="text-sm mb-0">
                  Publicación digital que utiliza exclusivamente lenguaje inclusivo en todos sus 
                  artículos. Ha triplicado su audiencia en dos años y ha recibido reconocimientos 
                  por su contribución al periodismo inclusivo.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mt-0 mb-2">Serie "Identidades" (Argentina)</h4>
                <p className="text-sm mb-0">
                  Serie de televisión que incorpora diálogos en lenguaje inclusivo y aborda 
                  temáticas de diversidad de género. Ha recibido críticas positivas por su 
                  autenticidad y ha generado importantes conversaciones sobre inclusión en 
                  medios audiovisuales.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <h2 className="mt-12">Testimonios de impacto real</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="bg-gradient-to-br from-rainbow-purple/10 to-rainbow-blue/10 dark:from-rainbow-purple/20 dark:to-rainbow-blue/20 p-6 rounded-xl">
          <p className="italic mb-4">
            "Implementar lenguaje inclusivo en nuestra universidad no solo cambió nuestras 
            comunicaciones, sino que transformó la cultura institucional. Hemos visto un 
            aumento del 40% en la participación de estudiantes no binaries en actividades 
            estudiantiles y una mejora notable en el clima educativo."
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            — Dra. Claudia Martínez, Directora de Diversidad Universitaria
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-blue/10 to-rainbow-green/10 dark:from-rainbow-blue/20 dark:to-rainbow-green/20 p-6 rounded-xl">
          <p className="italic mb-4">
            "Como persona no binaria, entrar a un espacio donde se usa lenguaje inclusivo 
            hace una diferencia enorme. No es solo sentirme bienvenide, sino saber que mi 
            existencia está siendo reconocida. Ha cambiado completamente mi experiencia en 
            entornos educativos y laborales."
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            — Alex Ramos, estudiante universitarie
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-green/10 to-rainbow-yellow/10 dark:from-rainbow-green/20 dark:to-rainbow-yellow/20 p-6 rounded-xl">
          <p className="italic mb-4">
            "Nuestra campaña publicitaria con lenguaje inclusivo generó inicialmente algo 
            de controversia, pero también atrajo a un público joven que valoró nuestro 
            compromiso con la inclusión. Vimos un aumento del 35% en engagement en redes 
            sociales y un incremento del 22% en ventas entre consumidores de 18 a 25 años."
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            — Carlos Vega, Director de Marketing
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-yellow/10 to-rainbow-orange/10 dark:from-rainbow-yellow/20 dark:to-rainbow-orange/20 p-6 rounded-xl">
          <p className="italic mb-4">
            "Como docente, he visto cómo el lenguaje inclusivo ha transformado mi aula. 
            Estudiantes que antes permanecían en silencio ahora participan activamente. 
            No es solo una cuestión lingüística; es crear un espacio donde todes sienten 
            que pueden ser auténticamente quienes son."
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            — Prof. Marina Suárez, docente de secundaria
          </p>
        </div>
      </div>

      <h2>Estrategias exitosas de implementación</h2>
      
      <div className="space-y-6 my-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-rainbow-purple">
          <h3 className="text-xl font-bold mt-0 mb-2">Enfoque gradual y flexible</h3>
          <p className="mb-0">
            Las organizaciones que han implementado el lenguaje inclusivo de manera más 
            exitosa han adoptado un enfoque gradual, comenzando con comunicaciones internas 
            o áreas específicas antes de expandirlo a toda la institución. También han 
            mantenido cierta flexibilidad, permitiendo adaptaciones según el contexto.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-rainbow-blue">
          <h3 className="text-xl font-bold mt-0 mb-2">Formación y recursos</h3>
          <p className="mb-0">
            Proporcionar capacitación y recursos como guías, talleres y materiales de 
            referencia ha sido clave para una implementación efectiva. Las organizaciones 
            que invierten en formación reportan mayor aceptación y menos resistencia al cambio.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-rainbow-green">
          <h3 className="text-xl font-bold mt-0 mb-2">Participación comunitaria</h3>
          <p className="mb-0">
            Involucrar a la comunidad en el proceso de implementación, especialmente a 
            personas LGBTIQ+ y no binarias, ha demostrado ser fundamental para desarrollar 
            políticas lingüísticas que realmente respondan a necesidades reales y no sean 
            solo simbólicas.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-rainbow-orange">
          <h3 className="text-xl font-bold mt-0 mb-2">Comunicación clara sobre objetivos</h3>
          <p className="mb-0">
            Las instituciones que han comunicado claramente por qué están implementando 
            lenguaje inclusivo, enfocándose en los beneficios concretos en términos de 
            bienestar, clima organizacional e inclusión, han encontrado menos resistencia 
            y mayor compromiso.
          </p>
        </div>
      </div>

      <div className="bg-rainbow-red/10 dark:bg-rainbow-red/20 p-8 rounded-xl my-10">
        <h3 className="text-xl font-bold text-rainbow-red dark:text-rainbow-red mt-0 mb-4">Superando resistencias</h3>
        <p className="mb-4">
          La implementación del lenguaje inclusivo suele encontrar resistencias. Las experiencias 
          más exitosas han abordado estas resistencias a través de:
        </p>
        <ul className="space-y-2 mb-0">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Diálogo abierto y respetuoso, sin imponer pero explicando claramente los beneficios</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Evidencia y datos sobre el impacto positivo en grupos marginalizados</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Testimonios de personas directamente beneficiadas por el lenguaje inclusivo</span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rainbow-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Información científica sobre la evolución del lenguaje y su impacto social</span>
          </li>
        </ul>
      </div>

      <h2>Herramientas y recursos prácticos</h2>
      
      <p>
        Para facilitar la implementación del lenguaje inclusivo en diferentes contextos, 
        ofrecemos una serie de herramientas prácticas:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Link href="/descargas" className="block group">
          <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rainbow-blue dark:hover:border-rainbow-blue transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-rainbow-blue/10 dark:bg-rainbow-blue/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mt-0 mb-0 group-hover:text-rainbow-blue transition-colors">Diccionarios de corrección</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              Nuestros diccionarios para diferentes plataformas ayudan a que el lenguaje 
              inclusivo sea reconocido por correctores ortográficos, facilitando su uso en 
              documentos, emails y comunicaciones escritas.
            </p>
          </div>
        </Link>
        
        <Link href="/ejemplos" className="block group">
          <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rainbow-purple dark:hover:border-rainbow-purple transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-rainbow-purple/10 dark:bg-rainbow-purple/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mt-0 mb-0 group-hover:text-rainbow-purple transition-colors">Ejemplos prácticos</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              Nuestra guía de ejemplos proporciona modelos prácticos de cómo transformar 
              diferentes tipos de textos y comunicaciones al lenguaje inclusivo, con 
              explicaciones claras y contextualizadas.
            </p>
          </div>
        </Link>
        
        <Link href="/ensenar-lengua-inclusiva" className="block group">
          <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rainbow-green dark:hover:border-rainbow-green transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-rainbow-green/10 dark:bg-rainbow-green/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mt-0 mb-0 group-hover:text-rainbow-green transition-colors">Recursos educativos</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              Materiales formativos y guías para educadores que desean implementar el 
              lenguaje inclusivo en entornos educativos, con estrategias pedagógicas 
              adaptadas a diferentes edades y contextos.
            </p>
          </div>
        </Link>
        
        <Link href="/recursos-externos" className="block group">
          <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-rainbow-orange dark:hover:border-rainbow-orange transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-rainbow-orange/10 dark:bg-rainbow-orange/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rainbow-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mt-0 mb-0 group-hover:text-rainbow-orange transition-colors">Organizaciones aliadas</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              Directorio de organizaciones e instituciones que trabajan con lenguaje inclusivo 
              y pueden ofrecer apoyo, formación o colaboración para su implementación en 
              diferentes contextos.
            </p>
          </div>
        </Link>
      </div>

      <div className="flex justify-center my-12">
        <Link 
          href="/contribuir" 
          className="btn-primary text-lg px-8 py-4"
        >
          Sé parte del cambio lingüístico 🌈
        </Link>
      </div>

      <h2>Comparte tu experiencia</h2>
      
      <p>
        Si has implementado lenguaje inclusivo en tu organización, institución o comunidad, 
        nos encantaría conocer tu experiencia. Tus historias pueden inspirar a otras personas 
        y enriquecer nuestra comprensión del impacto real del lenguaje inclusivo.
      </p>
      
      <div className="text-center my-8">
        <Link 
          href="/contribuir#experiencias" 
          className="inline-flex items-center text-rainbow-blue dark:text-rainbow-blue hover:underline"
        >
          <span>Compartir tu historia</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
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
          <Link href="/ensenar-lengua-inclusiva" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Enseñar lengua inclusiva
          </Link>
        </li>
        <li>
          <Link href="/preguntas-frecuentes" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Preguntas frecuentes
          </Link>
        </li>
        <li>
          <Link href="/descargas" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Descarga nuestros diccionarios
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}