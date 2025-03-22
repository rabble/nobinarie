// ABOUTME: This page explains why we use -e endings for inclusive language
// ABOUTME: It provides justification for using -e instead of -x or @

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function PorQueUsamosLaE() {
  return (
    <ContentLayout 
      title="¿Por qué usamos la -e?" 
      description="Razones lingüísticas, sociales y prácticas para preferir la terminación en -e para el lenguaje inclusivo"
      breadcrumbs={[
        { label: 'Qué es lengua inclusiva', href: '/que-es-lengua-inclusiva' }
      ]}
      lastUpdated="15 de marzo de 2023"
    >
      <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
        <div className="bg-rainbow-gradient p-px rounded-lg shadow-md mb-10">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <p className="text-xl leading-relaxed">
              En el movimiento por un lenguaje más inclusivo en español se han propuesto varias 
              alternativas para evitar el masculino genérico, pero en nobinarie.com hemos optado 
              por promover específicamente el uso de la terminación <strong className="text-rainbow-blue">-e</strong> como 
              marcador de género neutro o inclusivo.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Alternativas existentes y sus limitaciones
        </h2>
        
        <p className="mb-6">
          Antes de explicar por qué elegimos la -e, veamos las alternativas existentes:
        </p>
        
        <div className="overflow-x-auto mb-10 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left border-b border-gray-200 dark:border-gray-600">Alternativa</th>
                <th className="py-3 px-4 text-left border-b border-gray-200 dark:border-gray-600">Ejemplos</th>
                <th className="py-3 px-4 text-left border-b border-gray-200 dark:border-gray-600">Limitaciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-medium">Uso de -x</span>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">todxs, niñxs, amigxs</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  Imposible de pronunciar, difícil de leer, no sigue las reglas fonéticas del español
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-medium">Uso de @</span>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">tod@s, niñ@s, amig@s</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  No representa neutralidad sino fusión de "o" y "a", mantiene el binarismo, imposible de pronunciar
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-medium">Dobletes</span>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">todos y todas, niños y niñas</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  Mantiene el sistema binario, excluye identidades no binarias, vuelve el texto repetitivo y largo
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-medium">Sustantivos colectivos</span>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">el estudiantado, el profesorado</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  No siempre hay equivalentes, cambia el significado, solo aplica a sustantivos
                </td>
              </tr>
              <tr className="bg-rainbow-blue/5 dark:bg-rainbow-blue/10 hover:bg-rainbow-blue/10 dark:hover:bg-rainbow-blue/20">
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  <span className="font-medium text-rainbow-blue">Terminación -e</span>
                </td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">todes, niñes, amigues</td>
                <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-600">
                  Resistencia institucional, necesita difusión y práctica
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Razones lingüísticas para usar la -e
        </h2>
        
        <div className="bg-rainbow-blue/10 dark:bg-rainbow-blue/20 p-6 rounded-xl my-8 border-l-4 border-rainbow-blue shadow-md">
          <h3 className="text-rainbow-blue dark:text-rainbow-blue mt-0 text-xl font-bold mb-3">La -e ya existe en el sistema de la lengua</h3>
          <p className="mb-0 text-lg">
            El español ya tiene palabras de género común terminadas en -e: "estudiante", "inteligente", 
            "amante", etc. También tenemos sustantivos epicenos en -e como "personaje" o adjetivos como 
            "alegre" que no varían según el género. La terminación -e ya forma parte del sistema morfológico 
            del español.
          </p>
        </div>
        
        <p className="text-lg mb-4">
          Otras razones lingüísticas importantes:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-lg text-rainbow-blue dark:text-rainbow-blue mb-2">Pronunciabilidad</h4>
            <p className="mb-0">
              A diferencia de la "x" o la "@", la "e" es una vocal 
              que se integra perfectamente en la cadena hablada del español.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-lg text-rainbow-purple dark:text-rainbow-purple mb-2">Regularidad morfológica</h4>
            <p className="mb-0">
              La terminación -e permite mantener la regularidad 
              en la formación de plurales y concordancias: "amigue → amigues", "le niñe → les niñes".
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-lg text-rainbow-green dark:text-rainbow-green mb-2">Integración fonológica</h4>
            <p className="mb-0">
              La "e" es una vocal media que se sitúa entre la "a" (más abierta) 
              y la "o" (más cerrada), lo que simboliza incluso fonéticamente un punto intermedio.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-lg text-rainbow-red dark:text-rainbow-red mb-2">Economía lingüística</h4>
            <p className="mb-0">
              Es mucho más económico decir "todes" que "todos y todas" 
              o "todos, todas y todes".
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Razones de accesibilidad
        </h2>
        
        <p className="text-lg mb-5">
          La accesibilidad es una consideración fundamental en nuestra elección:
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-10">
          <ul className="space-y-4 mb-0">
            <li className="flex items-start">
              <span className="text-rainbow-green mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <span className="font-medium">Lectores de pantalla:</span> Los lectores de pantalla pueden pronunciar correctamente las palabras 
                con terminación en -e, mientras que otras alternativas como la -x o la @ generan confusión.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-rainbow-green mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <span className="font-medium">Dislexia y trastornos de lectura:</span> Las formas con -e son más fáciles de procesar para 
                personas con dislexia u otros trastornos de lectura que signos como @ o x.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-rainbow-green mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <span className="font-medium">Facilidad de escritura:</span> Es más sencillo escribir con terminaciones en -e que 
                recordar cuándo usar @ o x.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-rainbow-green mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <span className="font-medium">Personas con discapacidad auditiva:</span> La comunicación oral es fundamental para 
                muchas personas con discapacidad auditiva que leen los labios, y las terminaciones en -e son pronunciables.
              </div>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Razones sociales y políticas
        </h2>
        
        <div className="flex flex-col md:flex-row gap-5 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex-1 border-t-4 border-rainbow-blue">
            <h3 className="text-lg font-bold mb-2">Verdadera inclusión</h3>
            <p className="mb-0">
              La -e no es una fusión de lo masculino y lo femenino, 
              sino una forma realmente neutra que incluye a todas las identidades de género.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex-1 border-t-4 border-rainbow-purple">
            <h3 className="text-lg font-bold mb-2">Visibilidad</h3>
            <p className="mb-0">
              El uso de la -e hace visible la diversidad de género y 
              cuestiona activamente el binarismo.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-5 mb-10">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex-1 border-t-4 border-rainbow-green">
            <h3 className="text-lg font-bold mb-2">Transformación consciente</h3>
            <p className="mb-0">
              Usar la -e es una elección deliberada que contribuye a transformar 
              la realidad social a través del lenguaje.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 flex-1 border-t-4 border-rainbow-red">
            <h3 className="text-lg font-bold mb-2">Uso creciente</h3>
            <p className="mb-0">
              La terminación -e está ganando aceptación en el habla 
              cotidiana, especialmente entre jóvenes y en espacios activistas.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Uso práctico en textos
        </h2>
        
        <p className="text-lg mb-5">
          Una ventaja adicional es que la -e permite adaptar cualquier palabra con marca de género:
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
            <span className="font-medium block mb-1">Artículos</span>
            <span className="text-rainbow-purple">el/la → le</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
            <span className="font-medium block mb-1">Pronombres</span>
            <span className="text-rainbow-blue">nosotros/as → nosotres</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
            <span className="font-medium block mb-1">Sustantivos</span>
            <span className="text-rainbow-green">amigo/a → amigue</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
            <span className="font-medium block mb-1">Adjetivos</span>
            <span className="text-rainbow-red">bonito/a → bonite</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center md:col-span-2">
            <span className="font-medium block mb-1">Cuantificadores</span>
            <span className="text-rainbow-purple">todos/todas → todes</span>
          </div>
        </div>

        <div className="bg-rainbow-green/10 dark:bg-rainbow-green/20 p-6 rounded-xl my-10 shadow-md">
          <h3 className="text-rainbow-green dark:text-rainbow-green mt-0 text-xl font-bold mb-3">¿Cuándo usar la -e?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="font-medium mb-0">Para referirse a personas con identidad no binaria</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="font-medium mb-0">Para grupos mixtos de personas</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="font-medium mb-0">Cuando no se conoce o no es relevante el género</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
              <p className="font-medium mb-0">Para evitar el masculino genérico</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Respondiendo a críticas comunes
        </h2>
        
        <div className="space-y-5 mb-10">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-rainbow-blue">
            <p className="font-bold text-lg mb-2">"El lenguaje inclusivo destruye el idioma"</p>
            <p className="mb-0 text-gray-700 dark:text-gray-300">
              Las lenguas evolucionan constantemente para adaptarse a las necesidades comunicativas 
              de sus hablantes. Esta evolución no es una destrucción sino una transformación natural.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-rainbow-purple">
            <p className="font-bold text-lg mb-2">"El masculino genérico ya incluye a todos"</p>
            <p className="mb-0 text-gray-700 dark:text-gray-300">
              Estudios psicolingüísticos demuestran que, incluso cuando se usa el masculino con intención 
              genérica, las personas tienden a pensar principalmente en hombres, lo que genera un sesgo cognitivo.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-rainbow-green">
            <p className="font-bold text-lg mb-2">"Es una moda pasajera"</p>
            <p className="mb-0 text-gray-700 dark:text-gray-300">
              Las transformaciones lingüísticas con base en demandas de justicia social no son modas, 
              sino evoluciones necesarias del lenguaje para representar mejor la realidad social.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-rainbow-red">
            <p className="font-bold text-lg mb-2">"Suena raro o artificial"</p>
            <p className="mb-0 text-gray-700 dark:text-gray-300">
              Cualquier cambio lingüístico suena extraño al principio. Con el uso, estas formas se 
              normalizan y dejan de percibirse como extrañas.
            </p>
          </div>
        </div>

        <div className="flex justify-center my-12">
          <Link 
            href="/descargas" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-rainbow-gradient bg-300% hover:bg-left-animation transition-all rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Empezá a usar la -e ahora 🌈
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Recursos relacionados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/glosario" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-rainbow-blue/5 dark:hover:bg-rainbow-blue/10 border border-gray-200 dark:border-gray-700 flex items-center">
            <span className="text-rainbow-blue mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <span className="font-bold">Glosario de términos inclusivos</span>
          </Link>
          
          <Link href="/ejemplos" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-rainbow-blue/5 dark:hover:bg-rainbow-blue/10 border border-gray-200 dark:border-gray-700 flex items-center">
            <span className="text-rainbow-blue mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="font-bold">Ejemplos de lenguaje inclusivo</span>
          </Link>
          
          <Link href="/ensenar-lengua-inclusiva" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-rainbow-blue/5 dark:hover:bg-rainbow-blue/10 border border-gray-200 dark:border-gray-700 flex items-center">
            <span className="text-rainbow-blue mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </span>
            <span className="font-bold">Enseñar lengua inclusiva</span>
          </Link>
          
          <Link href="/recursos-externos" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-rainbow-blue/5 dark:hover:bg-rainbow-blue/10 border border-gray-200 dark:border-gray-700 flex items-center">
            <span className="text-rainbow-blue mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
            <span className="font-bold">Recursos externos</span>
          </Link>
        </div>
      </div>
    </ContentLayout>
  );
}