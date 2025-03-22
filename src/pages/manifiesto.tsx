// ABOUTME: This page presents the political manifesto of the nobinarie project
// ABOUTME: It explains the political principles behind inclusive language

import React from 'react';
import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';

export default function Manifiesto() {
  return (
    <ContentLayout 
      title="Manifiesto político" 
      description="Los principios políticos detrás del lenguaje inclusivo y el proyecto nobinarie"
      lastUpdated="21 de marzo de 2023"
    >
      <p>
        El proyecto <strong>nobinarie</strong> no es solo una herramienta tecnológica para facilitar el uso del 
        lenguaje inclusivo; es también un posicionamiento político que busca contribuir a la 
        construcción de una sociedad más justa y equitativa mediante la transformación del lenguaje.
      </p>

      <h2>Nuestra postura política</h2>
      
      <p>
        Creemos firmemente que:
      </p>
      
      <ul>
        <li>
          <strong>El lenguaje construye realidad.</strong> Las palabras que utilizamos no solo describen el mundo, 
          sino que lo configuran y moldean nuestra percepción de él.
        </li>
        <li>
          <strong>El binarismo de género es una construcción social</strong> que no representa la diversidad 
          de identidades y expresiones de género que existen.
        </li>
        <li>
          <strong>La liberación de las personas LGBTIQ+</strong> requiere transformaciones profundas en múltiples 
          niveles, incluyendo el lenguaje que utilizamos cotidianamente.
        </li>
        <li>
          <strong>El lenguaje inclusivo es un acto político</strong> de resistencia contra la invisibilización y 
          la exclusión.
        </li>
      </ul>

      <div className="bg-rainbow-orange/10 dark:bg-rainbow-orange/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-orange dark:text-rainbow-orange mt-0">Nuestro compromiso</h3>
        <p className="mb-0">
          Nos comprometemos a desarrollar y promover herramientas que faciliten el uso del lenguaje inclusivo, 
          reconociendo que este es solo un aspecto de una lucha más amplia por la justicia social y la 
          liberación de todas las personas oprimidas por el sistema cisheteropatriarcal.
        </p>
      </div>

      <h2>Principios fundamentales</h2>
      
      <h3>1. Antipatriarcal</h3>
      <p>
        Nos oponemos al sistema patriarcal que establece relaciones jerárquicas basadas en el género y 
        que asigna un valor superior a lo masculino. El uso del masculino como supuesto neutro refleja 
        y refuerza este sistema de dominación que buscamos desmantelar.
      </p>
      
      <h3>2. Anticapitalista</h3>
      <p>
        Reconocemos que el patriarcado y el capitalismo son sistemas interconectados de opresión. 
        Nuestras herramientas son de código abierto y gratuitas, porque creemos que el conocimiento 
        y los recursos lingüísticos deben ser accesibles para todes, no commodities para el beneficio 
        de unos pocos.
      </p>
      
      <h3>3. Interseccional</h3>
      <p>
        Entendemos que las opresiones basadas en género, raza, clase, capacidad, etc., se intersectan 
        y refuerzan mutuamente. Nuestro enfoque de lenguaje inclusivo considera estas intersecciones 
        y busca ser accesible para personas en diferentes situaciones y contextos.
      </p>
      
      <h3>4. Comunitario</h3>
      <p>
        El proyecto nobinarie surge de y pertenece a la comunidad. Valoramos el conocimiento y las 
        experiencias de las personas trans y no binarias como fundamentales para el desarrollo 
        de un lenguaje verdaderamente inclusivo.
      </p>

      <h2>El lenguaje inclusivo como práctica revolucionaria</h2>
      
      <p>
        El lenguaje inclusivo no es simplemente una cuestión de "corrección política" o de etiqueta, 
        sino una práctica revolucionaria que:
      </p>
      
      <ul>
        <li>Desafía estructuras de poder establecidas</li>
        <li>Cuestiona lo que consideramos "normal" o "natural"</li>
        <li>Abre espacios para identidades y existencias históricamente negadas</li>
        <li>Crea nuevas posibilidades de ser y estar en el mundo</li>
      </ul>
      
      <p>
        Al utilizar el lenguaje inclusivo, no solo estamos cambiando palabras, sino participando 
        activamente en la transformación social hacia un mundo donde todas las personas puedan existir 
        en libertad y con dignidad.
      </p>

      <div className="bg-rainbow-red/10 dark:bg-rainbow-red/20 p-6 rounded-xl my-8">
        <h3 className="text-rainbow-red dark:text-rainbow-red mt-0">Posicionamiento ante las críticas</h3>
        <p>
          Reconocemos que el lenguaje inclusivo genera resistencias. Frente a quienes argumentan que es 
          "innecesario", "confuso" o "una moda", afirmamos que es una herramienta vital para nombrar 
          realidades que existen y que han sido sistemáticamente borradas por el lenguaje tradicional.
        </p>
        <p className="mb-0">
          Rechazamos la falsa neutralidad de las instituciones lingüísticas que han funcionado históricamente 
          como guardianas de un lenguaje que reproduce desigualdades.
        </p>
      </div>

      <h2>El futuro que construimos</h2>
      
      <p>
        Imaginamos y trabajamos por un futuro donde:
      </p>
      
      <ul>
        <li>Todas las identidades de género sean reconocidas y respetadas</li>
        <li>El lenguaje refleje la diversidad humana en toda su complejidad</li>
        <li>Las herramientas tecnológicas estén al servicio de la liberación y no del control</li>
        <li>La comunicación inclusiva sea la norma y no la excepción</li>
      </ul>
      
      <p>
        Este futuro no llegará automáticamente; se construye día a día a través de nuestras 
        prácticas cotidianas, incluyendo cómo elegimos hablar y escribir.
      </p>

      <div className="flex justify-center my-10">
        <Link 
          href="/contribuir" 
          className="btn-primary"
        >
          Sumate a esta lucha 💪
        </Link>
      </div>

      <h2>Recursos relacionados</h2>
      
      <ul>
        <li>
          <Link href="/historia" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Historia del proyecto
          </Link>
        </li>
        <li>
          <Link href="/por-que-usamos-la-e" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            ¿Por qué usamos la -e?
          </Link>
        </li>
        <li>
          <Link href="/contribuir" className="text-rainbow-blue dark:text-rainbow-blue hover:underline">
            Cómo contribuir al proyecto
          </Link>
        </li>
      </ul>
    </ContentLayout>
  );
}