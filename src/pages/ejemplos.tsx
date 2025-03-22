// ABOUTME: This page provides examples of binary vs inclusive language
// ABOUTME: It shows side-by-side comparisons with explanations

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function Ejemplos() {
  return (
    <ContentLayout 
      title="Ejemplos: lenguaje binario vs inclusivo" 
      description="Comparación de textos en español tradicional y en lenguaje inclusivo con terminaciones en -e"
      lastUpdated="21 de marzo de 2023"
    >
      <p>
        En esta página encontrarás ejemplos comparativos entre el español tradicional (binario) 
        y el español inclusivo utilizando la terminación en -e. Estos ejemplos te ayudarán a 
        comprender mejor cómo funciona el lenguaje inclusivo en la práctica.
      </p>

      <h2>Comparaciones básicas</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left py-2">Español binario</th>
              <th className="text-left py-2">Español inclusivo</th>
              <th className="text-left py-2">Explicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Los niños</td>
              <td className="py-2">Les niñes</td>
              <td className="py-2">Sustantivo y artículo en plural</td>
            </tr>
            <tr>
              <td className="py-2">Un amigo</td>
              <td className="py-2">Une amigue</td>
              <td className="py-2">Sustantivo y artículo en singular</td>
            </tr>
            <tr>
              <td className="py-2">Nosotros</td>
              <td className="py-2">Nosotres</td>
              <td className="py-2">Pronombre personal</td>
            </tr>
            <tr>
              <td className="py-2">Ellos son altos</td>
              <td className="py-2">Elles son altes</td>
              <td className="py-2">Pronombre y adjetivo</td>
            </tr>
            <tr>
              <td className="py-2">Bienvenidos</td>
              <td className="py-2">Bienvenides</td>
              <td className="py-2">Adjetivo en plural</td>
            </tr>
            <tr>
              <td className="py-2">Muchos estudiantes</td>
              <td className="py-2">Muches estudiantes</td>
              <td className="py-2">Determinante cuantificador + sustantivo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-rainbow-green/10 dark:bg-rainbow-green/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-green dark:text-rainbow-green mt-0">¿Cuándo usar lenguaje inclusivo?</h3>
        <p className="mb-0">
          El lenguaje inclusivo se utiliza principalmente cuando nos referimos a grupos de personas 
          donde hay diversidad de géneros o cuando nos referimos a una persona cuya identidad de 
          género no se alinea con el binario masculino/femenino.
        </p>
      </div>

      <h2>Oraciones completas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h3 className="text-lg font-semibold">Español binario</h3>
          <p className="italic">
            "Todos los ciudadanos están invitados a participar en la asamblea. 
            Los interesados pueden registrarse con los organizadores del evento, 
            quienes estarán encargados de dar la bienvenida a los asistentes."
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-purple/10 to-rainbow-blue/10 dark:from-rainbow-purple/20 dark:to-rainbow-blue/20 p-5 rounded-lg border-l-4 border-rainbow-blue">
          <h3 className="text-lg font-semibold text-rainbow-blue">Español inclusivo</h3>
          <p className="italic">
            "Todes les ciudadanes están invitades a participar en la asamblea. 
            Les interesades pueden registrarse con les organizadores del evento, 
            quienes estarán encargades de dar la bienvenida a les asistentes."
          </p>
        </div>
      </div>

      <h3>Análisis de los cambios</h3>
      <ul>
        <li><strong>Todos → Todes</strong>: El pronombre indefinido adopta la terminación en -e</li>
        <li><strong>Los ciudadanos → Les ciudadanes</strong>: Tanto el artículo como el sustantivo adoptan la terminación en -e</li>
        <li><strong>invitados → invitades</strong>: El adjetivo cambia su terminación</li>
        <li><strong>Los interesados → Les interesades</strong>: Cambio en artículo y adjetivo sustantivado</li>
        <li><strong>encargados → encargades</strong>: Adjetivo con terminación en -e</li>
        <li><strong>los asistentes → les asistentes</strong>: Solo cambia el artículo porque "asistentes" ya termina en -e</li>
      </ul>

      <h2>Textos más extensos</h2>

      <h3>Correo formal</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
          <h4 className="font-semibold">Español binario</h4>
          <div className="italic text-sm">
            <p>Estimados colaboradores:</p>
            <p>
              Nos dirigimos a ustedes para informarles sobre los cambios en 
              la política de la empresa. Todos los empleados deberán actualizar 
              sus datos en el sistema antes del próximo viernes. Los coordinadores 
              de cada área serán los responsables de verificar que los miembros 
              de sus equipos hayan completado esta tarea.
            </p>
            <p>
              Agradecemos su comprensión y quedamos a disposición de todos los 
              interesados para resolver cualquier duda.
            </p>
            <p>Saludos cordiales,<br />Los directivos</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-rainbow-purple/10 to-rainbow-blue/10 dark:from-rainbow-purple/20 dark:to-rainbow-blue/20 p-5 rounded-lg border-l-4 border-rainbow-blue">
          <h4 className="font-semibold text-rainbow-blue">Español inclusivo</h4>
          <div className="italic text-sm">
            <p>Estimades colaboradores:</p>
            <p>
              Nos dirigimos a ustedes para informarles sobre los cambios en 
              la política de la empresa. Todes les empleades deberán actualizar 
              sus datos en el sistema antes del próximo viernes. Les coordinadores 
              de cada área serán les responsables de verificar que les integrantes 
              de sus equipos hayan completado esta tarea.
            </p>
            <p>
              Agradecemos su comprensión y quedamos a disposición de todes les 
              interesades para resolver cualquier duda.
            </p>
            <p>Saludos cordiales,<br />Le directiva</p>
          </div>
        </div>
      </div>

      <h2>Palabras que no cambian</h2>
      
      <p>
        No todas las palabras en español necesitan modificarse para ser inclusivas. 
        Estas son algunas categorías que generalmente no requieren cambios:
      </p>
      
      <ul>
        <li>
          <strong>Palabras que ya terminan en -e</strong>: estudiante, integrante, representante
        </li>
        <li>
          <strong>Sustantivos sin marca de género</strong>: persona, víctima, gente, población
        </li>
        <li>
          <strong>Pronombres sin marca de género</strong>: alguien, nadie, quien, cada
        </li>
        <li>
          <strong>Adjetivos invariables</strong>: inteligente, eficiente, responsable
        </li>
      </ul>

      <h2>Recomendaciones prácticas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-rainbow-yellow/10 dark:bg-rainbow-yellow/20 p-5 rounded-lg">
          <h3 className="text-rainbow-yellow dark:text-rainbow-yellow mt-0">Empezar gradualmente</h3>
          <p className="mb-0">
            Comienza incorporando algunas expresiones inclusivas en tu comunicación 
            cotidiana. Con la práctica, se volverá más natural.
          </p>
        </div>
        
        <div className="bg-rainbow-red/10 dark:bg-rainbow-red/20 p-5 rounded-lg">
          <h3 className="text-rainbow-red dark:text-rainbow-red mt-0">Ser consistente</h3>
          <p className="mb-0">
            Intenta mantener la coherencia en el uso del lenguaje inclusivo 
            a lo largo de todo un texto o discurso.
          </p>
        </div>
        
        <div className="bg-rainbow-purple/10 dark:bg-rainbow-purple/20 p-5 rounded-lg">
          <h3 className="text-rainbow-purple dark:text-rainbow-purple mt-0">Usar sustantivos colectivos</h3>
          <p className="mb-0">
            Cuando sea posible, utiliza términos como "el profesorado" en lugar de 
            "los profesores" o "la ciudadanía" en vez de "los ciudadanos".
          </p>
        </div>
        
        <div className="bg-rainbow-blue/10 dark:bg-rainbow-blue/20 p-5 rounded-lg">
          <h3 className="text-rainbow-blue dark:text-rainbow-blue mt-0">Instalar los diccionarios</h3>
          <p className="mb-0">
            Utiliza nuestros diccionarios de corrección ortográfica para que 
            tu procesador de textos reconozca las palabras con terminación en -e.
          </p>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Link 
          href="/descargas" 
          className="btn-primary"
        >
          Descargá nuestros diccionarios 📚
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
          <Link href="/ensenar-lengua-inclusiva" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Enseñar lengua inclusiva
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