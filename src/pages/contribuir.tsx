// ABOUTME: This file is the contribution page
// ABOUTME: It explains how to contribute to the project via GitHub

import React from 'react';
import Layout from '@/components/Layout';

export default function Contribuir() {
  return (
    <Layout pageTitle="Contribuir al proyecto">
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Contribuí al proyecto
          </h1>
          
          <div className="mt-8 prose prose-primary dark:prose-invert max-w-none">
            <p>
              nobinarie.com es un proyecto de código abierto que depende de la comunidad para crecer y mejorar. 
              Hay muchas formas en las que podés contribuir, sin importar tu nivel de conocimientos técnicos.
            </p>
            
            <h2>Cómo contribuir</h2>
            
            <h3>Para contribuciones técnicas</h3>
            <ol>
              <li>Visitá nuestro <a href="https://github.com/rabble/nobinarie" target="_blank" rel="noopener noreferrer">repositorio en GitHub</a></li>
              <li>Mirá los "issues" abiertos o creá uno nuevo si encontrás un problema o tenés una idea</li>
              <li>Forkeá el repositorio y creá un Pull Request con tus cambios</li>
              <li>Nuestro equipo revisará tu contribución y la integrará si cumple con los estándares del proyecto</li>
            </ol>
            
            <h3>Para contribuciones de contenido</h3>
            <ul>
              <li>Ayudanos a mejorar los tutoriales</li>
              <li>Sugerí nuevos términos para el diccionario</li>
              <li>Reportá errores o problemas en la documentación</li>
              <li>Compartí ejemplos de uso de lenguaje inclusivo</li>
            </ul>
            
            <h3>Para contribuciones de difusión</h3>
            <ul>
              <li>Compartí el proyecto en redes sociales</li>
              <li>Organizá talleres o charlas sobre lenguaje inclusivo</li>
              <li>Usá los diccionarios en tu trabajo, estudio o activismo</li>
              <li>Contá tu experiencia usando lenguaje inclusivo</li>
            </ul>
            
            <h2>Lineamientos para contribuciones</h2>
            <p>
              Para mantener la calidad y coherencia del proyecto, te pedimos que sigas estos lineamientos:
            </p>
            <ul>
              <li>Usá lenguaje inclusivo en todas tus contribuciones</li>
              <li>Seguí el código de conducta del proyecto</li>
              <li>Documentá bien tus cambios y explicá su propósito</li>
              <li>Respetá las decisiones de diseño existentes</li>
              <li>Mantené un tono amable y constructivo en todas las interacciones</li>
            </ul>
            
            <h2>Contacto</h2>
            <p>
              Si tenés dudas o querés hablar sobre una posible contribución antes de hacerla, 
              podés abrir un issue en GitHub o contactarnos a través de nuestras redes sociales.
            </p>
            
            <p>
              ¡Gracias por tu interés en contribuir a nobinarie.com!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}