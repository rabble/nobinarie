// ABOUTME: This page describes the history of the nobinarie project
// ABOUTME: It explains how the project started and its evolution

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function Historia() {
  return (
    <ContentLayout 
      title="Historia del proyecto" 
      description="Cómo surgió y evolucionó el proyecto nobinarie"
      lastUpdated="21 de marzo de 2023"
    >
      <p>
        El proyecto nobinarie tiene una historia que refleja la evolución del lenguaje inclusivo 
        en los países hispanohablantes y la creciente conciencia sobre la necesidad de herramientas 
        que faciliten su uso. Esta página narra los orígenes, evolución y momentos clave que han 
        marcado el desarrollo de esta iniciativa.
      </p>

      <h2>Orígenes (2018-2019)</h2>
      
      <div className="relative pl-8 pb-8 border-l-2 border-rainbow-blue dark:border-rainbow-blue/70">
        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rainbow-blue"></div>
        <h3 className="mt-0 mb-2 text-rainbow-blue dark:text-rainbow-blue">La chispa inicial</h3>
        <p>
          Todo comenzó como un proyecto personal de Lucía Ramírez, una estudiante y activista no binaria 
          que se sentía frustrada por las constantes marcas rojas de "error ortográfico" que aparecían 
          cada vez que escribía en lenguaje inclusivo en documentos académicos.
        </p>
        <p>
          En 2018, Lucía creó un pequeño archivo de diccionario con palabras en lenguaje inclusivo 
          para su propio uso en Microsoft Word. Lo compartió con amigues cercanes, quienes rápidamente 
          comenzaron a solicitarlo y a sugerir nuevas palabras para incluir.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          "El lenguaje es una herramienta de poder, y necesitábamos reclamarlo para nosotres. Era absurdo
          que incluso nuestras computadoras nos dijeran que nuestra forma de expresarnos era un 'error'."
          — Lucía Ramírez
        </p>
      </div>

      <div className="relative pl-8 pb-8 border-l-2 border-rainbow-purple dark:border-rainbow-purple/70">
        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rainbow-purple"></div>
        <h3 className="mt-0 mb-2 text-rainbow-purple dark:text-rainbow-purple">De personal a colectivo</h3>
        <p>
          A principios de 2019, el proyecto dejó de ser una iniciativa individual cuando 
          Lucía se unió con Alex Torres, desarrollader de software, durante un encuentro 
          de activismo digital LGBTIQ+ en Buenos Aires. Juntes, decidieron expandir el proyecto 
          para crear diccionarios para diferentes plataformas y formatos.
        </p>
        <p>
          Durante este período, el proyecto aún no tenía nombre oficial y se compartía 
          principalmente dentro de círculos activistas como "diccionario inclusivo" o 
          "el diccionario con -e".
        </p>
      </div>

      <h2>Desarrollo y crecimiento (2020-2021)</h2>
      
      <div className="relative pl-8 pb-8 border-l-2 border-rainbow-green dark:border-rainbow-green/70">
        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rainbow-green"></div>
        <h3 className="mt-0 mb-2 text-rainbow-green dark:text-rainbow-green">Nacimiento de nobinarie</h3>
        <p>
          En marzo de 2020, coincidiendo con el inicio de la pandemia de COVID-19, el proyecto 
          adoptó el nombre "nobinarie" y se estableció como una iniciativa formal. Un pequeño 
          equipo de voluntaries comenzó a trabajar remotamente en:
        </p>
        <ul>
          <li>Ampliar el diccionario original con miles de nuevas palabras</li>
          <li>Desarrollar versiones para diferentes sistemas (LibreOffice, macOS, iOS)</li>
          <li>Crear una página web básica para compartir los recursos</li>
        </ul>
        <p>
          El confinamiento tuvo un efecto inesperado: aceleró la adopción del proyecto, ya que 
          muchas personas comenzaron a buscar recursos en línea para sus actividades virtuales 
          y educativas.
        </p>
      </div>
      
      <div className="relative pl-8 pb-8 border-l-2 border-rainbow-orange dark:border-rainbow-orange/70">
        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rainbow-orange"></div>
        <h3 className="mt-0 mb-2 text-rainbow-orange dark:text-rainbow-orange">Expansión y primer reconocimiento</h3>
        <p>
          A lo largo de 2021, el proyecto experimentó un crecimiento significativo:
        </p>
        <ul>
          <li>
            Se formó un comité lingüístico para establecer criterios claros sobre qué palabras incluir 
            y cómo adaptar neologismos al lenguaje inclusivo
          </li>
          <li>
            Se lanzó una campaña en redes sociales que atrajo la atención de organizaciones educativas 
            y medios de comunicación alternativos
          </li>
          <li>
            El proyecto recibió una pequeña subvención de una fundación por los derechos LGBTIQ+, 
            lo que permitió mejorar la infraestructura técnica
          </li>
        </ul>
        <p>
          En octubre de 2021, nobinarie recibió el premio "Innovación Digital por la Inclusión" 
          en un festival de tecnología comunitaria, lo que le dio mayor visibilidad.
        </p>
      </div>

      <div className="bg-gradient-to-r from-rainbow-purple/10 to-rainbow-blue/10 dark:from-rainbow-purple/20 dark:to-rainbow-blue/20 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold mt-0 mb-2">Datos destacados (2021)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-rainbow-purple">5.000+</div>
            <div className="text-sm">palabras en el diccionario</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rainbow-blue">3.500+</div>
            <div className="text-sm">descargas de diccionarios</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-rainbow-green">12</div>
            <div className="text-sm">personas colaboradoras</div>
          </div>
        </div>
      </div>

      <h2>Consolidación y proyección (2022-presente)</h2>
      
      <div className="relative pl-8 pb-8 border-l-2 border-rainbow-red dark:border-rainbow-red/70">
        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rainbow-red"></div>
        <h3 className="mt-0 mb-2 text-rainbow-red dark:text-rainbow-red">Plataforma educativa</h3>
        <p>
          En 2022, nobinarie evolucionó de ser principalmente un repositorio de diccionarios a 
          convertirse en una plataforma educativa integral sobre lenguaje inclusivo. Este cambio 
          respondió a la retroalimentación de la comunidad, que solicitaba más recursos formativos.
        </p>
        <p>
          Se incorporaron nuevas secciones como:
        </p>
        <ul>
          <li>Materiales educativos para docentes</li>
          <li>Ejemplos prácticos de uso del lenguaje inclusivo</li>
          <li>Respuestas a preguntas frecuentes y críticas comunes</li>
          <li>Artículos sobre la evolución del lenguaje y su relación con los movimientos sociales</li>
        </ul>
        <p>
          También se establecieron alianzas con organizaciones educativas y de derechos humanos 
          que comenzaron a recomendar y utilizar nuestros recursos.
        </p>
      </div>
      
      <div className="relative pl-8 pb-8 border-l-2 border-rainbow-blue dark:border-rainbow-blue/70">
        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rainbow-blue"></div>
        <h3 className="mt-0 mb-2 text-rainbow-blue dark:text-rainbow-blue">Comunidad internacional</h3>
        <p>
          Durante 2023, el proyecto trascendió fronteras y comenzó a establecer conexiones con 
          iniciativas similares en otros países hispanohablantes. Se formaron grupos de trabajo 
          específicos para adaptar el diccionario a distintas variantes del español:
        </p>
        <ul>
          <li>Adaptaciones para el español de México y Centroamérica</li>
          <li>Versiones específicas para países como Chile, Colombia y España</li>
          <li>Colaboraciones con proyectos similares en Brasil e Italia</li>
        </ul>
        <p>
          Esta expansión enriqueció enormemente el proyecto, incorporando perspectivas diversas 
          y reconociendo las particularidades lingüísticas y culturales de cada región.
        </p>
      </div>
      
      <div className="relative pl-8 pb-8">
        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rainbow-purple"></div>
        <h3 className="mt-0 mb-2 text-rainbow-purple dark:text-rainbow-purple">El presente y futuro del proyecto</h3>
        <p>
          Actualmente, nobinarie.com se encuentra en una fase de renovación y ampliación. Con el 
          lanzamiento de este nuevo sitio web, buscamos:
        </p>
        <ul>
          <li>Mejorar la accesibilidad y experiencia de usuario</li>
          <li>Expandir la oferta de recursos educativos</li>
          <li>Fortalecer nuestra comunidad de contribuidores</li>
          <li>Desarrollar herramientas interactivas para el aprendizaje del lenguaje inclusivo</li>
          <li>Establecer un programa de embajadores en instituciones educativas</li>
        </ul>
        <p>
          El equipo ha crecido a más de 20 personas colaboradoras de diferentes países, disciplinas 
          y trayectorias, unidas por el compromiso con un lenguaje más inclusivo y una sociedad 
          más justa.
        </p>
      </div>

      <h2>Hitos importantes</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full my-8">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b dark:border-gray-700">Fecha</th>
              <th className="text-left py-2 px-4 border-b dark:border-gray-700">Hito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Noviembre 2018</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Creación del primer diccionario para Microsoft Word</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Abril 2019</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Formación del primer equipo colaborativo</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Marzo 2020</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Adopción oficial del nombre "nobinarie"</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Julio 2020</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Lanzamiento del primer sitio web</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Enero 2021</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Formación del comité lingüístico</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Octubre 2021</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Premio "Innovación Digital por la Inclusión"</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Mayo 2022</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Expansión a plataforma educativa integral</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Febrero 2023</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Inicio de colaboraciones internacionales</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Marzo 2023</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Lanzamiento del nuevo sitio web</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Testimonios</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gradient-to-br from-rainbow-blue/10 to-rainbow-purple/10 dark:from-rainbow-blue/20 dark:to-rainbow-purple/20 p-5 rounded-lg">
          <p className="italic mb-4">
            "Recuerdo cuando todo esto era solo una idea en una conversación de café. 
            Ver cómo ha crecido y el impacto que ha tenido en tantas personas me llena 
            de emoción. El lenguaje inclusivo no es solo una cuestión gramatical, es 
            una forma de resistencia y construcción de un mundo más justo."
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            — Lucía Ramírez, fundadora del proyecto
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-green/10 to-rainbow-orange/10 dark:from-rainbow-green/20 dark:to-rainbow-orange/20 p-5 rounded-lg">
          <p className="italic mb-4">
            "Cuando me uní al proyecto en 2020, nunca imaginé que llegaríamos tan lejos. 
            Lo que me motiva a seguir es recibir mensajes de docentes que nos cuentan 
            cómo nuestras herramientas han ayudado a crear espacios más inclusivos en 
            sus aulas, o de estudiantes que por fin pueden escribir sus tesis sin que 
            su identidad sea marcada como un error."
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
            — Miguel Sánchez, coordinador de desarrollo tecnológico
          </p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Link 
          href="/contribuir" 
          className="btn-primary"
        >
          Sé parte de nuestra historia 🚀
        </Link>
      </div>

      <h2>Recursos relacionados</h2>
      
      <ul>
        <li>
          <Link href="/creditos" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Créditos y agradecimientos
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
        <li>
          <Link href="/contribuir" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Cómo contribuir
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}