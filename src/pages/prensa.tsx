// ABOUTME: This page provides press and media information about the project
// ABOUTME: It includes press releases, media mentions, and contact information

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function Prensa() {
  return (
    <ContentLayout 
      title="Prensa y medios" 
      description="Información para prensa, artículos, entrevistas y materiales para medios de comunicación"
      lastUpdated="21 de marzo de 2023"
    >
      <p>
        Esta página está destinada a periodistas, medios de comunicación y cualquier persona 
        interesada en escribir o informar sobre el proyecto nobinarie. Aquí encontrarás 
        recursos, materiales, notas de prensa y contactos para la cobertura mediática 
        de nuestro proyecto y del lenguaje inclusivo.
      </p>

      <div className="bg-rainbow-blue/10 dark:bg-rainbow-blue/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-blue dark:text-rainbow-blue mt-0">Contacto para prensa</h3>
        <p>
          Si eres periodista o representante de un medio de comunicación y deseas entrevistar 
          a alguna persona del equipo, solicitar información adicional o coordinar una cobertura, 
          por favor contáctanos a:
        </p>
        <p className="font-medium mb-0">
          <strong>Email:</strong> prensa@nobinarie.com (email ficticio para este ejemplo)
        </p>
      </div>

      <h2>Comunicados de prensa</h2>
      
      <div className="space-y-6">
        <div className="border-l-4 border-rainbow-purple pl-4 py-2">
          <h3 className="mt-0 mb-1 font-semibold">Lanzamiento oficial del nuevo sitio nobinarie.com</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">21 de marzo de 2023</p>
          <p className="mb-2">
            El proyecto nobinarie anuncia el lanzamiento de su nuevo sitio web, una plataforma 
            integral para la promoción del lenguaje inclusivo con terminación en -e. El nuevo 
            portal ofrece diccionarios de corrección ortográfica, recursos educativos y 
            herramientas prácticas para facilitar la adopción del lenguaje inclusivo en 
            español.
          </p>
          <Link href="/prensa/comunicado-lanzamiento-2023.pdf" className="text-rainbow-purple dark:text-rainbow-purple hover:underline text-sm">
            Leer comunicado completo (próximamente)
          </Link>
        </div>
        
        <div className="border-l-4 border-rainbow-green pl-4 py-2">
          <h3 className="mt-0 mb-1 font-semibold">nobinarie alcanza las 10.000 descargas de diccionarios inclusivos</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">15 de noviembre de 2022</p>
          <p className="mb-2">
            Los diccionarios de corrección ortográfica para lenguaje inclusivo desarrollados 
            por el proyecto nobinarie han superado las 10.000 descargas, un hito que refleja 
            la creciente adopción del lenguaje inclusivo en entornos educativos, académicos y 
            profesionales en toda la comunidad hispanohablante.
          </p>
          <Link href="/prensa/comunicado-10k-descargas.pdf" className="text-rainbow-green dark:text-rainbow-green hover:underline text-sm">
            Leer comunicado completo (próximamente)
          </Link>
        </div>
        
        <div className="border-l-4 border-rainbow-orange pl-4 py-2">
          <h3 className="mt-0 mb-1 font-semibold">Alianza con universidades para promover el lenguaje inclusivo</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">5 de agosto de 2022</p>
          <p className="mb-2">
            El proyecto nobinarie anuncia acuerdos de colaboración con cinco universidades 
            latinoamericanas para integrar recursos sobre lenguaje inclusivo en sus programas 
            académicos. Esta alianza permitirá llevar formación especializada a estudiantes de 
            diversas disciplinas y contribuir a la normalización del lenguaje inclusivo en 
            entornos educativos.
          </p>
          <Link href="/prensa/comunicado-alianza-universidades.pdf" className="text-rainbow-orange dark:text-rainbow-orange hover:underline text-sm">
            Leer comunicado completo (próximamente)
          </Link>
        </div>
      </div>

      <h2>nobinarie en los medios</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mt-0 mb-2">"El lenguaje inclusivo gana terreno en la era digital"</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">El Diario Digital, 12 de enero de 2023</p>
          <p className="text-sm mb-3">
            Reportaje sobre la creciente adopción del lenguaje inclusivo en entornos digitales, 
            con entrevista a miembros del equipo nobinarie sobre el impacto de las herramientas 
            tecnológicas en la normalización de esta forma de comunicación.
          </p>
          <a 
            href="https://ejemplo.org/diario-digital-lenguaje-inclusivo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Leer artículo (enlace ficticio)
          </a>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mt-0 mb-2">"Tecnología al servicio de la inclusión lingüística"</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Revista Tecnología y Sociedad, Edición 45, 2022</p>
          <p className="text-sm mb-3">
            Análisis en profundidad sobre cómo las herramientas tecnológicas como los 
            diccionarios de nobinarie están contribuyendo a transformar prácticas lingüísticas 
            y a desafiar normas establecidas.
          </p>
          <a 
            href="https://ejemplo.org/revista-tecnologia-sociedad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Leer artículo (enlace ficticio)
          </a>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mt-0 mb-2">"Entrevista: El equipo detrás de nobinarie"</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Podcast "Voces Diversas", Episodio 23, 5 de octubre de 2022</p>
          <p className="text-sm mb-3">
            Conversación con fundadores y colaboradores del proyecto sobre sus motivaciones, 
            desafíos y visión para el futuro del lenguaje inclusivo en el mundo hispanohablante.
          </p>
          <a 
            href="https://ejemplo.org/podcast-voces-diversas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Escuchar podcast (enlace ficticio)
          </a>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold mt-0 mb-2">"Los diccionarios que desafían a la RAE"</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Canal Cultural TV, Programa "Tendencias", 18 de julio de 2022</p>
          <p className="text-sm mb-3">
            Reportaje televisivo sobre iniciativas como nobinarie que están promoviendo 
            cambios en el uso del lenguaje desde una perspectiva de inclusión y diversidad.
          </p>
          <a 
            href="https://ejemplo.org/canal-cultural-tendencias" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm"
          >
            Ver reportaje (enlace ficticio)
          </a>
        </div>
      </div>

      <h2>Kit de prensa</h2>
      
      <p>
        Para facilitar la cobertura mediática de nuestro proyecto, ofrecemos un kit de prensa 
        con materiales que pueden ser utilizados libremente por periodistas y medios de comunicación:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="h-12 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-2">Logos e imágenes</h3>
          <p className="text-sm mb-3">
            Logotipos oficiales, imágenes de nuestros recursos y fotografías del equipo en 
            diferentes formatos y resoluciones.
          </p>
          <Link href="/prensa/imagenes.zip" className="text-rainbow-blue dark:text-rainbow-blue hover:underline text-sm">
            Descargar (próximamente)
          </Link>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="h-12 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-2">Dossier informativo</h3>
          <p className="text-sm mb-3">
            Documento completo con información detallada sobre el proyecto, estadísticas, 
            testimonios e impacto social.
          </p>
          <Link href="/prensa/dossier-nobinarie.pdf" className="text-rainbow-purple dark:text-rainbow-purple hover:underline text-sm">
            Descargar (próximamente)
          </Link>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="h-12 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mt-0 mb-2">Cronología del proyecto</h3>
          <p className="text-sm mb-3">
            Línea de tiempo con los hitos más importantes en la historia de nobinarie, 
            desde sus inicios hasta la actualidad.
          </p>
          <Link href="/prensa/cronologia-nobinarie.pdf" className="text-rainbow-green dark:text-rainbow-green hover:underline text-sm">
            Descargar (próximamente)
          </Link>
        </div>
      </div>

      <h2>Datos y cifras</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full my-8">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b dark:border-gray-700">Estadística</th>
              <th className="text-left py-2 px-4 border-b dark:border-gray-700">Valor</th>
              <th className="text-left py-2 px-4 border-b dark:border-gray-700">Fecha de actualización</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Palabras en el diccionario</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">12.384</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Marzo 2023</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Total de descargas de diccionarios</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">14.725</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Marzo 2023</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Usuarios mensuales activos</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">3.200</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Febrero 2023</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Instituciones educativas aliadas</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">17</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Marzo 2023</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Países con usuaries actives</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">23</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Enero 2023</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b dark:border-gray-700">Documentos escritos con nuestros diccionarios</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Estimación: 35.000+</td>
              <td className="py-2 px-4 border-b dark:border-gray-700">Diciembre 2022</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Preguntas frecuentes para periodistas</h2>
      
      <div className="space-y-6 my-8">
        <div>
          <h3 className="text-lg font-semibold text-rainbow-blue dark:text-rainbow-blue">¿Cuál es la postura de nobinarie frente a las críticas de instituciones como la RAE?</h3>
          <p>
            Reconocemos el papel histórico de instituciones como la Real Academia Española, pero 
            entendemos que el lenguaje es una construcción social viva que evoluciona con las 
            necesidades comunicativas de sus hablantes. Consideramos que el lenguaje inclusivo 
            responde a una demanda social legítima de representación y visibilidad. Nuestro enfoque 
            no es confrontacional, sino propositivo: ofrecemos herramientas para quienes desean 
            comunicarse de manera más inclusiva.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-rainbow-purple dark:text-rainbow-purple">¿Por qué eligen promover específicamente la terminación en -e?</h3>
          <p>
            Promovemos la terminación en -e porque, a diferencia de otras alternativas como la x 
            o la @, es pronunciable, se integra naturalmente con la fonética española y representa 
            una verdadera neutralidad de género. Además, es más accesible para personas con 
            discapacidad visual que utilizan lectores de pantalla y sigue las reglas morfológicas 
            del español, creando una coherencia gramatical.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-rainbow-green dark:text-rainbow-green">¿Cuál es el impacto real del proyecto en las prácticas lingüísticas?</h3>
          <p>
            Aunque es difícil medir con precisión el impacto total, nuestros datos muestran un 
            crecimiento constante en la adopción de nuestras herramientas. Recibimos regularmente 
            testimonios de docentes, estudiantes y profesionales que utilizan nuestros recursos. 
            Además, hemos observado un aumento en la presencia del lenguaje inclusivo en medios 
            de comunicación, documentos académicos y comunicaciones institucionales, lo que sugiere 
            una normalización gradual.
          </p>
        </div>
      </div>

      <div className="bg-rainbow-purple/10 dark:bg-rainbow-purple/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-purple dark:text-rainbow-purple mt-0">Solicitud de entrevistas</h3>
        <p className="mb-0">
          Los miembros del equipo nobinarie están disponibles para entrevistas, participación 
          en programas o comentarios en artículos relacionados con lenguaje inclusivo, diversidad 
          de género, herramientas tecnológicas para la inclusión y temas afines. Para coordinar 
          una entrevista, por favor contacta a nuestro equipo de prensa con al menos 48 horas 
          de anticipación.
        </p>
      </div>

      <h2>Recursos relacionados</h2>
      
      <ul>
        <li>
          <Link href="/historia" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Historia del proyecto
          </Link>
        </li>
        <li>
          <Link href="/manifiesto" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Manifiesto político
          </Link>
        </li>
        <li>
          <Link href="/creditos" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Créditos y agradecimientos
          </Link>
        </li>
        <li>
          <Link href="/preguntas-frecuentes" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Preguntas frecuentes generales
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}