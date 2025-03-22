// ABOUTME: This page provides a glossary of inclusive language terms
// ABOUTME: It contains definitions and examples of inclusive terms using -e

import React, { useState } from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

// Glossary term type
type GlossaryTerm = {
  term: string;
  inclusiveForm: string;
  definition: string;
  examples: string[];
  category: string;
};

export default function Glosario() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Glossary terms
  const glossaryTerms: GlossaryTerm[] = [
    {
      term: "Amigo/Amiga",
      inclusiveForm: "Amigue",
      definition: "Persona con la que se mantiene una relación de amistad.",
      examples: ["Les amigues de la escuela", "Mi mejor amigue"],
      category: "sustantivos"
    },
    {
      term: "Alumno/Alumna",
      inclusiveForm: "Alumne",
      definition: "Persona que recibe enseñanza.",
      examples: ["Les alumnes de la clase", "Todes les alumnes"],
      category: "sustantivos"
    },
    {
      term: "Todos/Todas",
      inclusiveForm: "Todes",
      definition: "Pronombre indefinido que abarca la totalidad de un grupo.",
      examples: ["Todes estamos invitades", "Esto es para todes"],
      category: "pronombres"
    },
    {
      term: "Nosotros/Nosotras",
      inclusiveForm: "Nosotres",
      definition: "Pronombre personal de primera persona plural.",
      examples: ["Nosotres vamos al cine", "Entre nosotres"],
      category: "pronombres"
    },
    {
      term: "El/La",
      inclusiveForm: "Le",
      definition: "Artículo definido singular para sustantivos.",
      examples: ["Le estudiante", "Le profesore"],
      category: "articulos"
    },
    {
      term: "Los/Las",
      inclusiveForm: "Les",
      definition: "Artículo definido plural para sustantivos.",
      examples: ["Les estudiantes", "Les profesores"],
      category: "articulos"
    },
    {
      term: "Un/Una",
      inclusiveForm: "Une",
      definition: "Artículo indefinido singular para sustantivos.",
      examples: ["Une estudiante", "Une profesore"],
      category: "articulos"
    },
    {
      term: "Unos/Unas",
      inclusiveForm: "Unes",
      definition: "Artículo indefinido plural para sustantivos.",
      examples: ["Unes poques estudiantes", "Unes profesores"],
      category: "articulos"
    },
    {
      term: "Alto/Alta",
      inclusiveForm: "Alte",
      definition: "Adjetivo que describe a alguien o algo de gran estatura o elevado.",
      examples: ["Une estudiante alte", "Les edificios son altes"],
      category: "adjetivos"
    },
    {
      term: "Bonito/Bonita",
      inclusiveForm: "Bonite",
      definition: "Adjetivo que describe a alguien o algo que tiene belleza.",
      examples: ["Un día bonite", "Unes amigues bonites"],
      category: "adjetivos"
    },
    {
      term: "Niño/Niña",
      inclusiveForm: "Niñe",
      definition: "Persona que está en la niñez.",
      examples: ["Les niñes del colegio", "Le niñe de la casa"],
      category: "sustantivos"
    },
    {
      term: "Profesor/Profesora",
      inclusiveForm: "Profesore",
      definition: "Persona que enseña una disciplina, ciencia o arte.",
      examples: ["Le profesore de matemáticas", "Les profesores de la escuela"],
      category: "sustantivos"
    },
    {
      term: "Trabajador/Trabajadora",
      inclusiveForm: "Trabajadore",
      definition: "Persona que realiza un trabajo o actividad laboral.",
      examples: ["Les trabajadores de la fábrica", "Une trabajadore social"],
      category: "sustantivos"
    },
    {
      term: "Emocionado/Emocionada",
      inclusiveForm: "Emocionade",
      definition: "Adjetivo que describe a alguien que siente emoción.",
      examples: ["Estamos muy emocionades", "Le vi muy emocionade"],
      category: "adjetivos"
    },
    {
      term: "Cansado/Cansada",
      inclusiveForm: "Cansade",
      definition: "Adjetivo que describe a alguien que siente fatiga o falta de fuerzas.",
      examples: ["Estoy cansade", "Todes estamos cansades"],
      category: "adjetivos"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'Todas las categorías' },
    { id: 'sustantivos', name: 'Sustantivos' },
    { id: 'pronombres', name: 'Pronombres' },
    { id: 'articulos', name: 'Artículos' },
    { id: 'adjetivos', name: 'Adjetivos' }
  ];

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = searchTerm === '' || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
      term.inclusiveForm.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <ContentLayout 
      title="Glosario de términos" 
      description="Un listado de términos inclusivos y cómo utilizarlos correctamente"
      lastUpdated="15 de marzo de 2023"
    >
      {/* Search and filter */}
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
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p>
        Este glosario incluye algunos términos comunes transformados al lenguaje inclusivo con terminación en <strong>-e</strong>. 
        Es una herramienta de consulta para quienes quieren utilizar el lenguaje inclusivo en su comunicación diaria.
      </p>

      {filteredTerms.length > 0 ? (
        <div className="space-y-8 mt-8">
          {filteredTerms.map((term, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="bg-rainbow-gradient p-0.5">
                <div className="bg-white dark:bg-gray-800 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
                        {term.category === 'sustantivos' ? 'Sustantivo' : 
                         term.category === 'pronombres' ? 'Pronombre' : 
                         term.category === 'articulos' ? 'Artículo' : 
                         term.category === 'adjetivos' ? 'Adjetivo' : 'Término'}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                        <span className="line-through opacity-50 mr-2">{term.term}</span>
                        <span className="text-rainbow-blue dark:text-rainbow-blue">{term.inclusiveForm}</span>
                      </h3>
                    </div>
                  </div>
                  
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {term.definition}
                  </p>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Ejemplos:</h4>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                      {term.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <div className="text-rainbow-purple text-2xl mb-2">❓</div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">No se encontraron términos</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Prueba con otra búsqueda o selecciona una categoría diferente.
          </p>
        </div>
      )}

      <div className="bg-rainbow-yellow/10 dark:bg-rainbow-yellow/20 p-6 rounded-xl my-10">
        <h3 className="text-rainbow-yellow dark:text-rainbow-yellow mt-0">¿No encontrás el término que buscás?</h3>
        <p className="mb-0">
          Este glosario se actualiza regularmente. Si hay algún término que te gustaría ver incluido, 
          por favor <Link href="/contribuir" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">contactanos</Link> o 
          contribuí directamente a través de <a href="https://github.com/rabble/nobinarie" target="_blank" rel="noopener noreferrer" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">GitHub</a>.
        </p>
      </div>

      <div className="flex justify-center my-10">
        <Link 
          href="/descargas" 
          className="btn-primary"
        >
          Descargar diccionario completo 🌈
        </Link>
      </div>

      <h2>Reglas generales para el uso de la -e</h2>
      
      <p>
        Al transformar palabras al lenguaje inclusivo con terminación en -e, podés seguir estas reglas generales:
      </p>
      
      <ul>
        <li>
          <strong>Sustantivos y adjetivos terminados en -o/-a</strong>: Reemplazar por -e.
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Ejemplos: amigo/amiga → amigue, alto/alta → alte
          </span>
        </li>
        <li>
          <strong>Artículos el/la</strong>: Reemplazar por le.
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Ejemplos: el niño/la niña → le niñe
          </span>
        </li>
        <li>
          <strong>Artículos los/las</strong>: Reemplazar por les.
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Ejemplos: los niños/las niñas → les niñes
          </span>
        </li>
        <li>
          <strong>Pronombres con marca de género</strong>: Reemplazar terminación por -e.
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Ejemplos: nosotros/nosotras → nosotres, ellos/ellas → elles
          </span>
        </li>
        <li>
          <strong>Palabras ya terminadas en -e</strong>: No se modifican si ya son neutras.
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Ejemplos: estudiante, inteligente, fuerte (se mantienen igual)
          </span>
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
    </ContentLayout>
  );
}