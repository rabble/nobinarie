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
      <p>
        En el movimiento por un lenguaje más inclusivo en español se han propuesto varias 
        alternativas para evitar el masculino genérico, pero en nobinarie.com hemos optado 
        por promover específicamente el uso de la terminación <strong>-e</strong> como 
        marcador de género neutro o inclusivo.
      </p>

      <h2>Alternativas existentes y sus limitaciones</h2>
      
      <p>Antes de explicar por qué elegimos la -e, veamos las alternativas existentes:</p>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Alternativa</th>
              <th className="py-2">Ejemplos</th>
              <th className="py-2">Limitaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 border-t">Uso de <strong>-x</strong></td>
              <td className="py-2 border-t">todxs, niñxs, amigxs</td>
              <td className="py-2 border-t">
                Imposible de pronunciar, difícil de leer, no sigue las reglas fonéticas del español
              </td>
            </tr>
            <tr>
              <td className="py-2 border-t">Uso de <strong>@</strong></td>
              <td className="py-2 border-t">tod@s, niñ@s, amig@s</td>
              <td className="py-2 border-t">
                No representa neutralidad sino fusión de "o" y "a", mantiene el binarismo, imposible de pronunciar
              </td>
            </tr>
            <tr>
              <td className="py-2 border-t">Dobletes</td>
              <td className="py-2 border-t">todos y todas, niños y niñas</td>
              <td className="py-2 border-t">
                Mantiene el sistema binario, excluye identidades no binarias, vuelve el texto repetitivo y largo
              </td>
            </tr>
            <tr>
              <td className="py-2 border-t">Sustantivos colectivos</td>
              <td className="py-2 border-t">el estudiantado, el profesorado</td>
              <td className="py-2 border-t">
                No siempre hay equivalentes, cambia el significado, solo aplica a sustantivos
              </td>
            </tr>
            <tr>
              <td className="py-2 border-t">Terminación <strong>-e</strong></td>
              <td className="py-2 border-t">todes, niñes, amigues</td>
              <td className="py-2 border-t">
                Resistencia institucional, necesita difusión y práctica
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Razones lingüísticas para usar la -e</h2>
      
      <div className="bg-rainbow-blue/10 dark:bg-rainbow-blue/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-blue dark:text-rainbow-blue mt-0">La -e ya existe en el sistema de la lengua</h3>
        <p>
          El español ya tiene palabras de género común terminadas en -e: "estudiante", "inteligente", 
          "amante", etc. También tenemos sustantivos epicenos en -e como "personaje" o adjetivos como 
          "alegre" que no varían según el género. La terminación -e ya forma parte del sistema morfológico 
          del español.
        </p>
      </div>
      
      <p>Otras razones lingüísticas importantes:</p>
      
      <ul>
        <li>
          <strong>Pronunciabilidad</strong>: A diferencia de la "x" o la "@", la "e" es una vocal 
          que se integra perfectamente en la cadena hablada del español.
        </li>
        <li>
          <strong>Regularidad morfológica</strong>: La terminación -e permite mantener la regularidad 
          en la formación de plurales y concordancias: "amigue → amigues", "le niñe → les niñes".
        </li>
        <li>
          <strong>Integración fonológica</strong>: La "e" es una vocal media que se sitúa entre la "a" (más abierta) 
          y la "o" (más cerrada), lo que simboliza incluso fonéticamente un punto intermedio.
        </li>
        <li>
          <strong>Economía lingüística</strong>: Es mucho más económico decir "todes" que "todos y todas" 
          o "todos, todas y todes".
        </li>
      </ul>

      <h2>Razones de accesibilidad</h2>
      
      <p>
        La accesibilidad es una consideración fundamental en nuestra elección:
      </p>
      
      <ul>
        <li>
          <strong>Lectores de pantalla</strong>: Los lectores de pantalla pueden pronunciar correctamente las palabras 
          con terminación en -e, mientras que otras alternativas como la -x o la @ generan confusión.
        </li>
        <li>
          <strong>Dislexia y trastornos de lectura</strong>: Las formas con -e son más fáciles de procesar para 
          personas con dislexia u otros trastornos de lectura que signos como @ o x.
        </li>
        <li>
          <strong>Facilidad de escritura</strong>: Es más sencillo escribir con terminaciones en -e que 
          recordar cuándo usar @ o x.
        </li>
        <li>
          <strong>Personas con discapacidad auditiva</strong>: La comunicación oral es fundamental para 
          muchas personas con discapacidad auditiva que leen los labios, y las terminaciones en -e son pronunciables.
        </li>
      </ul>

      <h2>Razones sociales y políticas</h2>
      
      <p>
        El uso de la -e representa una posición política clara:
      </p>
      
      <ul>
        <li>
          <strong>Verdadera inclusión</strong>: La -e no es una fusión de lo masculino y lo femenino, 
          sino una forma realmente neutra que incluye a todas las identidades de género.
        </li>
        <li>
          <strong>Visibilidad</strong>: El uso de la -e hace visible la diversidad de género y 
          cuestiona activamente el binarismo.
        </li>
        <li>
          <strong>Transformación lingüística consciente</strong>: Usar la -e es una elección 
          deliberada que contribuye a transformar la realidad social a través del lenguaje.
        </li>
        <li>
          <strong>Uso creciente</strong>: La terminación -e está ganando aceptación en el habla 
          cotidiana, especialmente entre jóvenes y en espacios activistas.
        </li>
      </ul>

      <h2>Uso práctico en textos</h2>
      
      <p>
        Una ventaja adicional es que la -e permite adaptar cualquier palabra con marca de género:
      </p>
      
      <ul>
        <li>Artículos: "el/la" → "le"</li>
        <li>Pronombres: "nosotros/nosotras" → "nosotres"</li>
        <li>Sustantivos: "amigo/amiga" → "amigue"</li>
        <li>Adjetivos: "bonito/bonita" → "bonite"</li>
        <li>Cuantificadores: "todos/todas" → "todes"</li>
      </ul>

      <div className="bg-rainbow-green/10 dark:bg-rainbow-green/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-green dark:text-rainbow-green mt-0">¿Cuándo usar la -e?</h3>
        <p>
          La terminación -e se usa principalmente:
        </p>
        <ul className="mb-0">
          <li>Para referirse a personas con identidad no binaria</li>
          <li>Para grupos mixtos de personas</li>
          <li>Cuando no se conoce o no es relevante el género de la persona</li>
          <li>Para evitar el masculino genérico en referencias generales</li>
        </ul>
      </div>

      <h2>Respondiendo a críticas comunes</h2>
      
      <p>
        Estas son algunas respuestas a críticas habituales:
      </p>
      
      <div className="space-y-4">
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <p className="font-bold text-gray-900 dark:text-white">"El lenguaje inclusivo destruye el idioma"</p>
          <p className="text-gray-700 dark:text-gray-300 mb-0">
            Las lenguas evolucionan constantemente para adaptarse a las necesidades comunicativas 
            de sus hablantes. Esta evolución no es una destrucción sino una transformación natural.
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <p className="font-bold text-gray-900 dark:text-white">"El masculino genérico ya incluye a todos"</p>
          <p className="text-gray-700 dark:text-gray-300 mb-0">
            Estudios psicolingüísticos demuestran que, incluso cuando se usa el masculino con intención 
            genérica, las personas tienden a pensar principalmente en hombres, lo que genera un sesgo cognitivo.
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <p className="font-bold text-gray-900 dark:text-white">"Es una moda pasajera"</p>
          <p className="text-gray-700 dark:text-gray-300 mb-0">
            Las transformaciones lingüísticas con base en demandas de justicia social no son modas, 
            sino evoluciones necesarias del lenguaje para representar mejor la realidad social.
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <p className="font-bold text-gray-900 dark:text-white">"Suena raro o artificial"</p>
          <p className="text-gray-700 dark:text-gray-300 mb-0">
            Cualquier cambio lingüístico suena extraño al principio. Con el uso, estas formas se 
            normalizan y dejan de percibirse como extrañas.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Link 
          href="/descargas" 
          className="btn-primary"
        >
          Empezá a usar la -e ahora 🌈
        </Link>
      </div>

      <h2>Recursos relacionados</h2>
      
      <ul>
        <li>
          <Link href="/glosario" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Glosario de términos inclusivos
          </Link>
        </li>
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
          <Link href="/recursos-externos" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Recursos externos sobre lenguaje inclusivo
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}