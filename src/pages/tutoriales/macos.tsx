// ABOUTME: This file contains the macOS tutorial page
// ABOUTME: It provides step-by-step instructions for installing inclusive dictionaries on macOS

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContentLayout from '../../components/ContentLayout';

/**
 * MacOSTutorial component provides step-by-step instructions for 
 * installing inclusive dictionaries on macOS applications
 */
export default function MacOSTutorial() {
  const breadcrumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Tutoriales', href: '/tutoriales' },
    { label: 'macOS', href: '/tutoriales/macos', current: true }
  ];

  return (
    <ContentLayout
      title="Tutorial de instalación para macOS"
      description="Guía paso a paso para instalar y usar los diccionarios inclusivos en macOS."
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <p className="lead">
            En esta guía, aprenderás a instalar nuestros diccionarios inclusivos en diferentes aplicaciones
            de macOS, incluyendo las aplicaciones nativas de Apple, LibreOffice, Mozilla Firefox y Google Chrome.
          </p>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-400">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  Necesitarás descargar nuestro diccionario inclusivo antes de comenzar. Podés hacerlo desde
                  la <Link href="/descargas" className="font-medium underline hover:text-blue-600">página de descargas</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section>
          <h2>Requisitos previos</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-rainbow-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-base text-gray-700 dark:text-gray-300">
                  macOS 10.15 Catalina o posterior (funciona en versiones anteriores pero con algunas diferencias)
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-rainbow-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Archivo del diccionario inclusivo descargado (formato ZIP)
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-rainbow-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Conocimientos básicos de la Terminal de macOS (para algunos métodos de instalación)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Extracting Files */}
        <section>
          <h2>Paso 1: Extraer los archivos del diccionario</h2>
          <ol className="mt-5 space-y-6">
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-blue text-white font-medium">1</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Localiza el archivo ZIP descargado</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Por defecto, tu navegador guarda las descargas en la carpeta "Descargas". El archivo debería llamarse <code>es_inclusive.zip</code> o similar.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/download-folder.png" 
                    alt="Carpeta de descargas con el archivo ZIP del diccionario" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-blue text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz doble clic en el archivo ZIP para extraerlo</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  macOS tiene una herramienta de extracción integrada que creará una carpeta con el mismo nombre que el archivo ZIP.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/extract-zip.png" 
                    alt="Extracción de archivos en macOS" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-blue text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Verifica los archivos extraídos</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Deberías ver dos archivos principales:
                </p>
                <ul className="mt-2 ml-6 space-y-1 list-disc text-gray-700 dark:text-gray-300">
                  <li><code>es_inclusive.aff</code> - El archivo de afijos que contiene las reglas gramaticales</li>
                  <li><code>es_inclusive.dic</code> - El archivo de diccionario que contiene las palabras</li>
                </ul>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/extracted-files.png" 
                    alt="Archivos del diccionario extraídos" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* System-Wide Installation */}
        <section id="system-wide">
          <h2>Paso 2: Instalación a nivel del sistema</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Para hacer que el diccionario esté disponible para todas las aplicaciones nativas de macOS (como Mail, Pages, TextEdit, etc.),
            necesitás instalarlo en la carpeta de Ortografía del sistema.
          </p>
          
          <ol className="mt-5 space-y-6">
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-green text-white font-medium">1</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Abre la Terminal de macOS</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Puedes encontrar la Terminal en Aplicaciones &gt; Utilidades &gt; Terminal, o buscarla con Spotlight (⌘ + Espacio).
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/terminal.png" 
                    alt="Terminal de macOS" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-green text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Crea la carpeta de diccionarios si no existe</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Ejecuta el siguiente comando para crear la carpeta de Ortografía en tu directorio de usuario:
                </p>
                <pre className="mt-2 p-3 bg-gray-50 dark:bg-gray-900 rounded overflow-auto text-sm">
                  mkdir -p ~/Library/Spelling/
                </pre>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-green text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Copia los archivos del diccionario a la carpeta de Ortografía</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Asumiendo que descargaste el archivo en la carpeta Descargas, ejecuta estos comandos
                  (ajusta la ruta según dónde hayas extraído los archivos):
                </p>
                <pre className="mt-2 p-3 bg-gray-50 dark:bg-gray-900 rounded overflow-auto text-sm">
                  cp ~/Downloads/es_inclusive.aff ~/Library/Spelling/
                  cp ~/Downloads/es_inclusive.dic ~/Library/Spelling/
                </pre>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/copy-files.png" 
                    alt="Copiando archivos a la carpeta Spelling" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-green text-white font-medium">4</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Método alternativo: usando el Finder</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Si preferís no usar la Terminal, podés seguir estos pasos:
                </p>
                <ol className="mt-2 ml-6 space-y-2 list-decimal text-gray-700 dark:text-gray-300">
                  <li>Abre el Finder y presiona ⌘ + Shift + G (o selecciona Ir &gt; Ir a la carpeta...)</li>
                  <li>Escribe <code>~/Library/Spelling/</code> y haz clic en "Ir"</li>
                  <li>Si la carpeta no existe, crea una nueva carpeta llamada "Spelling" dentro de Library</li>
                  <li>Arrastra los archivos <code>es_inclusive.aff</code> y <code>es_inclusive.dic</code> a esta carpeta</li>
                </ol>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/finder-library.png" 
                    alt="Navegando a la carpeta Library en Finder" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-green text-white font-medium">5</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Reinicia las aplicaciones</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Cierra y vuelve a abrir cualquier aplicación en la que quieras usar el diccionario inclusivo.
                  En algunos casos, puede ser necesario reiniciar tu Mac para que los cambios tengan efecto en todas las aplicaciones.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Pages, Keynote, Numbers */}
        <section id="apple-apps">
          <h2>Uso en Pages, Keynote y Numbers</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Después de la instalación a nivel del sistema, puedes configurar las aplicaciones de Apple para usar el diccionario inclusivo.
          </p>
          
          <ol className="mt-5 space-y-6">
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-white font-medium">1</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Abre Pages (o Keynote/Numbers)</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/pages-app.png" 
                    alt="Aplicación Pages de macOS" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Selecciona Edición &gt; Ortografía y gramática &gt; Mostrar ortografía y gramática</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/pages-spelling.png" 
                    alt="Menú de ortografía en Pages" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">En el diálogo de ortografía, haz clic en el menú desplegable y selecciona "Español (Inclusivo)"</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Si has instalado correctamente el diccionario, debería aparecer como una opción en el menú desplegable.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/pages-select-dictionary.png" 
                    alt="Seleccionando el diccionario inclusivo en Pages" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 text-white font-medium">4</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Para establecer el diccionario inclusivo como predeterminado</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Ve a Preferencias del sistema &gt; Teclado &gt; Texto y selecciona "Español (Inclusivo)" como el idioma de corrección ortográfica predeterminado.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/system-preferences.png" 
                    alt="Preferencias del sistema para la corrección ortográfica" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* LibreOffice Installation */}
        <section id="libreoffice">
          <h2>Instalación en LibreOffice</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            LibreOffice tiene su propio sistema de gestión de diccionarios. Sigue estos pasos para instalarlo directamente en LibreOffice.
          </p>
          
          <ol className="mt-5 space-y-6">
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">1</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Abre LibreOffice Writer (o cualquier aplicación de LibreOffice)</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/libreoffice-writer.png" 
                    alt="LibreOffice Writer en macOS" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Ve a LibreOffice &gt; Preferencias en la barra de menú</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/libreoffice-preferences.png" 
                    alt="Menú Preferencias en LibreOffice" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">En el diálogo de preferencias, expande "Configuración de idioma" y selecciona "Lingüística"</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/libreoffice-language-settings.png" 
                    alt="Configuración de idioma en LibreOffice" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">4</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic en "Editar..." junto a "Módulos de ortografía disponibles"</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/libreoffice-linguistics.png" 
                    alt="Módulos de ortografía en LibreOffice" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">5</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic en "Añadir..." y navega hasta la ubicación donde extrajiste los archivos del diccionario</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/libreoffice-add-dictionary.png" 
                    alt="Añadir diccionario en LibreOffice" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">6</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Selecciona el archivo <code>es_inclusive.dic</code> y haz clic en "Abrir"</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/libreoffice-select-dic.png" 
                    alt="Seleccionar archivo de diccionario" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">7</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Confirma que el nuevo diccionario aparece en la lista y cierra todos los diálogos con "Aceptar"</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Deberías ver "Español (Inclusivo)" o "es_inclusive" en la lista de diccionarios disponibles.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/libreoffice-dictionary-added.png" 
                    alt="Diccionario añadido a LibreOffice" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* Firefox Installation */}
        <section id="firefox">
          <h2>Instalación en Mozilla Firefox</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Firefox permite usar diccionarios personalizados para la corrección ortográfica en formularios web y otros campos de texto.
          </p>
          
          <ol className="mt-5 space-y-6">
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">1</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Abre Firefox y haz clic en el menú de hamburguesa (tres líneas horizontales) en la esquina superior derecha</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/firefox-menu.png" 
                    alt="Menú de Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Selecciona "Preferencias" en el menú</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/firefox-preferences.png" 
                    alt="Preferencias de Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Desplázate hacia abajo hasta encontrar la sección "Idioma y apariencia"</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/firefox-language.png" 
                    alt="Sección de idioma en Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">4</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic en "Diccionarios de revisión ortográfica..."</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/firefox-spell-check.png" 
                    alt="Opciones de revisión ortográfica en Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">5</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic en "Añadir diccionarios..."</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Firefox te mostrará una nueva ventana o pestaña con opciones para agregar diccionarios.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/firefox-add-dictionaries.png" 
                    alt="Añadir diccionarios en Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">6</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Instalación manual (para reemplazar el diccionario en español existente)</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Para usar nuestro diccionario inclusivo, necesitarás reemplazar el diccionario en español estándar:
                </p>
                <ol className="mt-4 ml-6 space-y-2 list-decimal text-gray-700 dark:text-gray-300">
                  <li>Cierra Firefox completamente</li>
                  <li>Abre el Finder y presiona ⌘ + Shift + G</li>
                  <li>Escribe <code>~/Library/Application Support/Firefox/Profiles/</code> y haz clic en "Ir"</li>
                  <li>Abre la carpeta que termina con <code>.default</code> o tiene un nombre similar (es tu perfil de Firefox)</li>
                  <li>Dentro de esa carpeta, ve a <code>extensions</code> y busca un directorio del diccionario en español (podría tener un nombre como <code>es-ES@dictionaries.addons.mozilla.org</code>)</li>
                  <li>Reemplaza los archivos <code>es.aff</code> y <code>es.dic</code> con tus archivos <code>es_inclusive.aff</code> y <code>es_inclusive.dic</code> (cámbiales el nombre para que coincidan)</li>
                </ol>
              </div>
            </li>
          </ol>
        </section>

        {/* Chrome Installation */}
        <section id="chrome">
          <h2>Instalación en Google Chrome</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Google Chrome usa el corrector ortográfico del sistema en macOS, así que si has instalado el diccionario a nivel del sistema (Paso 2),
            debería funcionar automáticamente.
          </p>
          
          <ol className="mt-5 space-y-6">
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-medium">1</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Verifica la configuración de ortografía en Chrome</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Haz clic en el menú de Chrome (tres puntos verticales) &gt; Preferencias &gt; Configuración avanzada &gt; Idiomas
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/chrome-settings.png" 
                    alt="Configuración de Chrome" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Asegúrate de que "Español" esté en la lista de idiomas</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Si no está en la lista, haz clic en "Añadir idiomas" y añade "Español".
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/chrome-languages.png" 
                    alt="Lista de idiomas en Chrome" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Activa la corrección ortográfica</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Asegúrate de que la opción "Corrector ortográfico" esté activada para "Español".
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/macos/chrome-spell-check.png" 
                    alt="Corrector ortográfico en Chrome" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-medium">4</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Prueba el diccionario inclusivo</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Escribe algunas palabras inclusivas en un campo de texto en Chrome para verificar que el corrector ortográfico las reconoce correctamente.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting">
          <h2>Solución de problemas comunes</h2>
          
          <div className="mt-6 space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  El diccionario no aparece en las aplicaciones de Apple
                </h3>
                <div className="mt-2 text-gray-700 dark:text-gray-300">
                  <p>Si el diccionario no aparece en Pages, Numbers, etc.:</p>
                  <ul className="mt-2 ml-6 space-y-2 list-disc">
                    <li>Verifica que los archivos estén correctamente copiados en <code>~/Library/Spelling/</code></li>
                    <li>Asegúrate de que los nombres de ambos archivos sean idénticos (excepto por la extensión)</li>
                    <li>Reinicia la aplicación o incluso toda la computadora</li>
                    <li>Verifica que tu usuario tenga permisos de lectura/escritura en la carpeta Spelling</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Problemas de permisos al instalar el diccionario
                </h3>
                <div className="mt-2 text-gray-700 dark:text-gray-300">
                  <p>Si recibes errores de permisos al intentar copiar los archivos:</p>
                  <ul className="mt-2 ml-6 space-y-2 list-disc">
                    <li>Intenta usar el Finder en lugar de la Terminal para copiar archivos</li>
                    <li>Asegúrate de que estás usando la ruta correcta a tu carpeta de usuario (<code>~/Library</code> apunta a la carpeta Library de tu usuario)</li>
                    <li>Si necesitas instalar el diccionario a nivel del sistema (para todos los usuarios), usa:
                      <pre className="mt-2 p-3 bg-gray-50 dark:bg-gray-900 rounded overflow-auto text-sm">
                        sudo mkdir -p /Library/Spelling/
                        sudo cp ~/Downloads/es_inclusive.* /Library/Spelling/
                      </pre>
                      (Tendrás que ingresar tu contraseña de administrador)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Las palabras inclusivas siguen marcándose como incorrectas
                </h3>
                <div className="mt-2 text-gray-700 dark:text-gray-300">
                  <p>Si las palabras inclusivas siguen marcándose como errores ortográficos:</p>
                  <ul className="mt-2 ml-6 space-y-2 list-disc">
                    <li>Asegúrate de que el texto está configurado en español (selecciona el texto y verifica su configuración de idioma)</li>
                    <li>En las aplicaciones de Apple, haz clic derecho en el texto marcado como incorrecto, selecciona "Aprender ortografía" para añadir palabras específicas</li>
                    <li>En LibreOffice, verifica que el idioma del texto sea "Español (Inclusivo)" en Formato &gt; Carácter &gt; Fuente &gt; Idioma</li>
                    <li>Reinicia la aplicación después de cambiar la configuración de idioma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2>Siguientes pasos</h2>
          
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Comenzá a usar el lenguaje inclusivo
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Aprende los fundamentos del lenguaje inclusivo y cómo aplicarlo en tu escritura.
                </p>
                <div className="mt-4">
                  <Link 
                    href="/que-es-lengua-inclusiva" 
                    className="inline-flex items-center text-rainbow-blue hover:underline"
                  >
                    Conocer más
                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Consulta nuestro glosario
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Explora términos y palabras inclusivas para enriquecer tu vocabulario.
                </p>
                <div className="mt-4">
                  <Link 
                    href="/glosario" 
                    className="inline-flex items-center text-rainbow-blue hover:underline"
                  >
                    Ver glosario
                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-rainbow-gradient p-0.5 rounded-lg">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                ¿Encontraste un problema o tenés sugerencias?
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Tu feedback nos ayuda a mejorar nuestros diccionarios y tutoriales.
              </p>
              <div className="mt-4">
                <Link
                  href="/contribuir"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rainbow-gradient bg-300% hover:bg-left-animation transition-colors"
                >
                  Contribuir al proyecto
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ContentLayout>
  );
}