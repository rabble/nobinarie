import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import ContentLayout from '../components/ContentLayout';

type Term = {
  id: string;
  category: string;
  old: string;
  new: string;
  definition: string;
  examples: string[];
};

const glossaryTerms: Term[] = [
  {
    id: '1',
    category: 'sustantivos',
    old: 'Amigo/Amiga',
    new: 'Amigue',
    definition: 'Persona con la que se mantiene una relación de amistad.',
    examples: ['Les amigues de la escuela', 'Mi mejor amigue']
  },
  {
    id: '2',
    category: 'sustantivos',
    old: 'Alumno/Alumna',
    new: 'Alumne',
    definition: 'Persona que recibe enseñanza.',
    examples: ['Les alumnes de la clase', 'Todes les alumnes']
  },
  {
    id: '3',
    category: 'pronombres',
    old: 'Todos/Todas',
    new: 'Todes',
    definition: 'Pronombre indefinido que abarca la totalidad de un grupo.',
    examples: ['Todes estamos invitades', 'Esto es para todes']
  },
  {
    id: '4',
    category: 'pronombres',
    old: 'Nosotros/Nosotras',
    new: 'Nosotres',
    definition: 'Pronombre personal de primera persona plural.',
    examples: ['Nosotres vamos al cine', 'Entre nosotres']
  },
  {
    id: '5',
    category: 'articulos',
    old: 'El/La',
    new: 'Le',
    definition: 'Artículo definido singular para sustantivos.',
    examples: ['Le estudiante', 'Le profesore']
  },
  {
    id: '6',
    category: 'articulos',
    old: 'Los/Las',
    new: 'Les',
    definition: 'Artículo definido plural para sustantivos.',
    examples: ['Les estudiantes', 'Les profesores']
  },
  {
    id: '7',
    category: 'articulos',
    old: 'Un/Una',
    new: 'Une',
    definition: 'Artículo indefinido singular para sustantivos.',
    examples: ['Une estudiante', 'Une profesore']
  },
  {
    id: '8',
    category: 'articulos',
    old: 'Unos/Unas',
    new: 'Unes',
    definition: 'Artículo indefinido plural para sustantivos.',
    examples: ['Unes poques estudiantes', 'Unes profesores']
  },
  {
    id: '9',
    category: 'adjetivos',
    old: 'Alto/Alta',
    new: 'Alte',
    definition: 'Adjetivo que describe a alguien o algo de gran estatura o elevado.',
    examples: ['Une estudiante alte', 'Les edificios son altes']
  },
  {
    id: '10',
    category: 'adjetivos',
    old: 'Bonito/Bonita',
    new: 'Bonite',
    definition: 'Adjetivo que describe a alguien o algo que tiene belleza.',
    examples: ['Un día bonite', 'Unes amigues bonites']
  },
  {
    id: '11',
    category: 'sustantivos',
    old: 'Niño/Niña',
    new: 'Niñe',
    definition: 'Persona que está en la niñez.',
    examples: ['Les niñes del colegio', 'Le niñe de la casa']
  },
  {
    id: '12',
    category: 'sustantivos',
    old: 'Profesor/Profesora',
    new: 'Profesore',
    definition: 'Persona que enseña una disciplina, ciencia o arte.',
    examples: ['Le profesore de matemáticas', 'Les profesores de la escuela']
  },
  {
    id: '13',
    category: 'sustantivos',
    old: 'Trabajador/Trabajadora',
    new: 'Trabajadore',
    definition: 'Persona que realiza un trabajo o actividad laboral.',
    examples: ['Les trabajadores de la fábrica', 'Une trabajadore social']
  },
  {
    id: '14',
    category: 'adjetivos',
    old: 'Emocionado/Emocionada',
    new: 'Emocionade',
    definition: 'Adjetivo que describe a alguien que siente emoción.',
    examples: ['Estamos muy emocionades', 'Le vi muy emocionade']
  },
  {
    id: '15',
    category: 'adjetivos',
    old: 'Cansado/Cansada',
    new: 'Cansade',
    definition: 'Adjetivo que describe a alguien que siente fatiga o falta de fuerzas.',
    examples: ['Estoy cansade', 'Todes estamos cansades']
  }
];

export default function Glosario() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.old.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          term.new.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <Head>
        <title>Glosario de términos | nobinarie.com</title>
        <meta name="description" content="Un listado de términos inclusivos y cómo utilizarlos correctamente" />
      </Head>

      <ContentLayout
        title="Glosario de términos"
        description="Un listado de términos inclusivos y cómo utilizarlos correctamente"
        backgroundClass="bg-gradient-to-r from-rainbow-blue/20 to-rainbow-purple/20 dark:from-rainbow-blue/10 dark:to-rainbow-purple/10"
      >
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="mb-4">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Buscar término
              </label>
              <input
                type="text"
                id="search"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-rainbow-blue focus:border-rainbow-blue"
                placeholder="Ej: amigo, todes, les..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Filtrar por categoría
              </label>
              <select
                id="category"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-rainbow-purple focus:border-rainbow-purple"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">Todas las categorías</option>
                <option value="sustantivos">Sustantivos</option>
                <option value="pronombres">Pronombres</option>
                <option value="articulos">Artículos</option>
                <option value="adjetivos">Adjetivos</option>
              </select>
            </div>
          </div>

          <p>
            Este glosario incluye algunos términos comunes transformados al lenguaje inclusivo con terminación en <strong>-e</strong>. 
            Es una herramienta de consulta para quienes quieren utilizar el lenguaje inclusivo en su comunicación diaria.
          </p>

          <div className="space-y-8 mt-8">
            {filteredTerms.map((term) => (
              <div 
                key={term.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-rainbow-gradient p-0.5">
                  <div className="bg-white dark:bg-gray-800 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
                          {term.category === 'sustantivos' ? 'Sustantivo' : 
                           term.category === 'pronombres' ? 'Pronombre' : 
                           term.category === 'articulos' ? 'Artículo' : 'Adjetivo'}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                          <span className="line-through opacity-50 mr-2">{term.old}</span>
                          <span className="text-rainbow-blue dark:text-rainbow-blue">{term.new}</span>
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">{term.definition}</p>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">Ejemplos:</h4>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                        {term.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-rainbow-yellow/10 dark:bg-rainbow-yellow/20 p-6 rounded-xl my-10">
            <h3 className="text-rainbow-yellow dark:text-rainbow-yellow mt-0">¿No encontrás el término que buscás?</h3>
            <p className="mb-0">
              Este glosario se actualiza regularmente. Si hay algún término que te gustaría ver incluido, por favor{' '}
              <Link href="/contribuir" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
                contactanos
              </Link>{' '}
              o contribuí directamente a través de{' '}
              <a
                href="https://github.com/rabble/nobinarie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rainbow-blue dark:text-rainbow-blue hover:underline"
              >
                GitHub
              </a>.
            </p>
          </div>

          <div className="flex justify-center my-10">
            <Link href="/descargas" className="btn-primary">
              Descargar diccionario completo 🌈
            </Link>
          </div>

          <h2>Reglas generales para el uso de la -e</h2>
          <p>Al transformar palabras al lenguaje inclusivo con terminación en -e, podés seguir estas reglas generales:</p>
          <ul>
            <li>
              <strong>Sustantivos y adjetivos terminados en -o/-a</strong>: Reemplazar por -e.<br />
              <span className="text-sm text-gray-600 dark:text-gray-400">Ejemplos: amigo/amiga → amigue, alto/alta → alte</span>
            </li>
            <li>
              <strong>Artículos el/la</strong>: Reemplazar por le.<br />
              <span className="text-sm text-gray-600 dark:text-gray-400">Ejemplos: el niño/la niña → le niñe</span>
            </li>
            <li>
              <strong>Artículos los/las</strong>: Reemplazar por les.<br />
              <span className="text-sm text-gray-600 dark:text-gray-400">Ejemplos: los niños/las niñas → les niñes</span>
            </li>
            <li>
              <strong>Pronombres con marca de género</strong>: Reemplazar terminación por -e.<br />
              <span className="text-sm text-gray-600 dark:text-gray-400">Ejemplos: nosotros/nosotras → nosotres, ellos/ellas → elles</span>
            </li>
            <li>
              <strong>Palabras ya terminadas en -e</strong>: No se modifican si ya son neutras.<br />
              <span className="text-sm text-gray-600 dark:text-gray-400">Ejemplos: estudiante, inteligente, fuerte (se mantienen igual)</span>
            </li>
          </ul>

          <h2>Recursos relacionados</h2>
          <ul>
            <li>
              <Link href="/ejemplos" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
                Ejemplos de lenguaje inclusivo
              </Link>
            </li>
            <li>
              <Link href="/por-que-usamos-la-e" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
                ¿Por qué usamos la -e?
              </Link>
            </li>
            <li>
              <Link href="/ensenar-lengua-inclusiva" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
                Enseñar lengua inclusiva
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto mt-16 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última actualización: {new Date(2023, 2, 15).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </ContentLayout>
    </Layout>
  );
}