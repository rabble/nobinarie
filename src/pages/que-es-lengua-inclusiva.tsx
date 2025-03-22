// ABOUTME: This page explains what inclusive language is
// ABOUTME: It provides information about inclusive Spanish using -e

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function QueEsLenguaInclusiva() {
  return (
    <ContentLayout 
      title="¿Qué es lengua inclusiva?" 
      description="Una introducción al lenguaje inclusivo en español y su importancia"
      lastUpdated="15 de marzo de 2023"
    >
      <div className="text-lg leading-relaxed">
        <p className="text-xl mb-8">
          El <strong className="text-rainbow-purple">lenguaje inclusivo</strong> es una forma de comunicación que busca incluir a todas las personas, 
          independientemente de su identidad de género. En español, una lengua con marcas gramaticales 
          de género muy presentes, el lenguaje inclusivo propone alternativas a las terminaciones 
          tradicionales en -o (masculino) y -a (femenino).
        </p>

        <h2 className="text-3xl font-bold text-rainbow-blue mt-12 mb-6">¿Por qué es necesario?</h2>
        
        <p className="mb-6">
          El español tradicional utiliza el masculino como género gramatical "neutro" o "no marcado". 
          Esto significa que cuando nos referimos a un grupo de personas donde hay al menos un hombre, 
          usamos la forma masculina. Por ejemplo, "los estudiantes" para un grupo mixto, o incluso para 
          un grupo donde la mayoría son mujeres.
        </p>
        
        <p className="mb-4 font-medium">
          Sin embargo, este uso:
        </p>
        
        <ul className="space-y-3 mb-10 pl-5">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-rainbow-pink/20 text-rainbow-pink mr-3 flex-shrink-0">•</span>
            <span>Invisibiliza a las mujeres y personas no binarias</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-rainbow-purple/20 text-rainbow-purple mr-3 flex-shrink-0">•</span>
            <span>Refuerza la idea de que lo masculino es lo universal y lo neutro</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-rainbow-blue/20 text-rainbow-blue mr-3 flex-shrink-0">•</span>
            <span>No representa adecuadamente a personas cuya identidad de género no es ni masculina ni femenina</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-rainbow-green/20 text-rainbow-green mr-3 flex-shrink-0">•</span>
            <span>Perpetúa sesgos lingüísticos que tienen efectos en cómo percibimos la realidad</span>
          </li>
        </ul>

        <div className="bg-rainbow-gradient p-1 rounded-xl my-12">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold rainbow-text bg-300% mt-0 mb-4">Un lenguaje para todes</h3>
            <p className="text-lg mb-0">
              El lenguaje inclusivo no es solo una cuestión gramatical, sino una herramienta para construir 
              una sociedad más igualitaria donde todas las personas se sientan representadas y visibilizadas 
              a través del lenguaje que usamos cotidianamente.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-rainbow-blue mt-12 mb-6">Formas del lenguaje inclusivo</h2>
        
        <p className="mb-6">
          En español se han propuesto diferentes formas de lenguaje inclusivo:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="bg-rainbow-blue/10 dark:bg-rainbow-blue/20 p-5 rounded-lg">
            <h4 className="font-bold text-rainbow-blue mb-2">Terminaciones con -e</h4>
            <p className="mb-0">"todes", "niñes", "amigues"</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">La que promovemos en este proyecto</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
            <h4 className="font-bold mb-2">Uso de -x</h4>
            <p className="mb-0">"todxs", "niñxs", "amigxs"</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">Difícil de pronunciar</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
            <h4 className="font-bold mb-2">Uso de la @</h4>
            <p className="mb-0">"tod@s", "niñ@s", "amig@s"</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">No es inclusivo con personas no binarias</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
            <h4 className="font-bold mb-2">Dobletes</h4>
            <p className="mb-0">"todos y todas", "niños y niñas"</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 italic">Binario</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-rainbow-blue mt-12 mb-6">¿Por qué preferimos la terminación en -e?</h2>
        
        <div className="mb-10">
          <p className="mb-6">
            En nobinarie.com promovemos el uso de la terminación en -e por varias razones:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-rainbow-pink/10 p-4 rounded-lg flex items-center">
              <svg className="h-6 w-6 text-rainbow-pink mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Es pronunciable, a diferencia de la "x" o la "@"</span>
            </div>
            <div className="bg-rainbow-purple/10 p-4 rounded-lg flex items-center">
              <svg className="h-6 w-6 text-rainbow-purple mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Se integra naturalmente con la fonética española</span>
            </div>
            <div className="bg-rainbow-blue/10 p-4 rounded-lg flex items-center">
              <svg className="h-6 w-6 text-rainbow-blue mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Representa una verdadera neutralidad de género</span>
            </div>
            <div className="bg-rainbow-green/10 p-4 rounded-lg flex items-center">
              <svg className="h-6 w-6 text-rainbow-green mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Es más accesible para personas con discapacidad visual</span>
            </div>
            <div className="bg-rainbow-orange/10 p-4 rounded-lg flex items-center">
              <svg className="h-6 w-6 text-rainbow-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sigue las reglas morfológicas del español</span>
            </div>
          </div>
          
          <p className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            Podés leer más sobre nuestra elección de usar la terminación -e en la página{' '}
            <Link href="/por-que-usamos-la-e" className="text-rainbow-blue dark:text-rainbow-blue hover:underline font-medium">
              ¿Por qué usamos la -e?
            </Link>
          </p>
        </div>

        <h2 className="text-3xl font-bold text-rainbow-blue mt-12 mb-6">El lenguaje inclusivo en la práctica</h2>
        
        <p className="mb-6">
          Algunos ejemplos del uso del lenguaje inclusivo con terminaciones en -e:
        </p>
        
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-rainbow-gradient text-white">
                <th className="p-4 text-left rounded-tl-lg">Forma tradicional</th>
                <th className="p-4 text-left rounded-tr-lg">Forma inclusiva</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">Los niños juegan</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-rainbow-blue font-medium">Les niñes juegan</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">Todos están invitados</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-rainbow-purple font-medium">Todes están invitades</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="p-4 border-b border-gray-200 dark:border-gray-700">Los ciudadanos argentinos</td>
                <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-rainbow-pink font-medium">Les ciudadanes argentines</td>
              </tr>
              <tr>
                <td className="p-4 rounded-bl-lg">Nosotros estamos emocionados</td>
                <td className="p-4 rounded-br-lg text-rainbow-green font-medium">Nosotres estamos emocionades</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-10">
          <p className="mb-0">
            Para saber más sobre cómo utilizar correctamente estas formas, consultá nuestro{' '}
            <Link href="/glosario" className="text-rainbow-blue dark:text-rainbow-blue hover:underline font-medium">
              glosario de términos
            </Link>{' '}
            y la sección de{' '}
            <Link href="/ejemplos" className="text-rainbow-blue dark:text-rainbow-blue hover:underline font-medium">
              ejemplos
            </Link>.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-rainbow-blue mt-12 mb-6">¿El lenguaje inclusivo es gramáticamente correcto?</h2>
        
        <div className="space-y-6 mb-12">
          <p>
            Las lenguas evolucionan constantemente para adaptarse a las necesidades comunicativas de 
            sus hablantes. El lenguaje inclusivo responde a una necesidad social de representar a todas 
            las personas, independientemente de su género.
          </p>
          
          <blockquote className="border-l-4 border-rainbow-purple pl-6 italic">
            <p className="text-lg">
              "Si bien algunas instituciones lingüísticas como la RAE aún no reconocen oficialmente el 
              lenguaje inclusivo, esto no significa que sea incorrecto. A lo largo de la historia, muchos 
              cambios lingüísticos comenzaron como usos no reconocidos por las autoridades, para luego ser 
              incorporados por el uso frecuente de los hablantes."
            </p>
          </blockquote>
          
          <p>
            Lo que consideramos "correcto" en el lenguaje es, en última instancia, lo que funciona para 
            comunicarnos efectivamente. Si el lenguaje inclusivo logra transmitir mensajes de forma clara 
            y además contribuye a visibilizar a todas las personas, está cumpliendo su función comunicativa.
          </p>
        </div>

        <div className="flex justify-center my-14">
          <Link 
            href="/descargas" 
            className="btn-primary text-lg px-8 py-4 transform transition hover:scale-105"
          >
            Comenzá a escribir inclusivo ahora 🌈
          </Link>
        </div>

        <div className="bg-rainbow-gradient p-1 rounded-xl mt-16">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold rainbow-text bg-300% mb-6">Recursos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/por-que-usamos-la-e" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-rainbow-blue/20 dark:hover:bg-rainbow-blue/20 transition-colors">
                <span className="block text-rainbow-blue font-medium">¿Por qué usamos la -e?</span>
              </Link>
              <Link href="/glosario" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-rainbow-purple/20 dark:hover:bg-rainbow-purple/20 transition-colors">
                <span className="block text-rainbow-purple font-medium">Glosario de términos inclusivos</span>
              </Link>
              <Link href="/ejemplos" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-rainbow-pink/20 dark:hover:bg-rainbow-pink/20 transition-colors">
                <span className="block text-rainbow-pink font-medium">Ejemplos de lenguaje inclusivo</span>
              </Link>
              <Link href="/ensenar-lengua-inclusiva" className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-rainbow-green/20 dark:hover:bg-rainbow-green/20 transition-colors">
                <span className="block text-rainbow-green font-medium">Enseñar lengua inclusiva</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}