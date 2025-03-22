// ABOUTME: This file is the Windows tutorial page
// ABOUTME: It provides step-by-step instructions for installing dictionaries on Windows

import React from 'react';
import Link from 'next/link';
import ContentLayout from '@/components/ContentLayout';

export default function WindowsTutorial() {
  return (
    <ContentLayout
      title="Tutorial de instalación para Windows"
      description="Aprende a instalar y usar nuestros diccionarios inclusivos en Windows"
      breadcrumbs={[
        { label: 'Tutoriales', href: '/tutoriales' },
      ]}
      lastUpdated="21 de marzo de 2025"
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <p className="lead">
            En esta guía, aprenderás a instalar nuestros diccionarios inclusivos en diferentes aplicaciones
            de Windows, incluyendo LibreOffice, Microsoft Office, Mozilla Firefox y Google Chrome.
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
                  Una aplicación compatible con diccionarios Hunspell (LibreOffice, OpenOffice, Firefox, Chrome, etc.)
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
                  Permisos para instalar archivos en tu computadora (no se requieren privilegios de administrador)
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
                    src="/images/tutorials/windows/download-folder.png" 
                    alt="Carpeta de descargas con el archivo ZIP del diccionario" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-blue text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic derecho en el archivo ZIP y selecciona "Extraer todo..."</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Windows tiene una herramienta de extracción integrada. Si usás otro programa como 7-Zip o WinRAR, el proceso será similar.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/extract-zip.png" 
                    alt="Menú contextual para extraer archivos" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-blue text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Elige una ubicación para extraer los archivos</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Recomendamos extraer los archivos a una ubicación permanente, como una carpeta en tus Documentos.
                  Puedes crear una carpeta llamada "Diccionarios" para mantener todo organizado.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/extract-location.png" 
                    alt="Ventana de extracción de archivos" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-blue text-white font-medium">4</div>
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
                    src="/images/tutorials/windows/extracted-files.png" 
                    alt="Archivos del diccionario extraídos" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* LibreOffice Installation */}
        <section id="libreoffice">
          <h2>Instalación en LibreOffice / OpenOffice</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            LibreOffice y OpenOffice son suites ofimáticas gratuitas y de código abierto que tienen excelente
            soporte para diccionarios personalizados.
          </p>
          
          <ol className="mt-5 space-y-6">
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">1</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Abre LibreOffice Writer (o cualquier aplicación de LibreOffice)</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/libreoffice-writer.png" 
                    alt="LibreOffice Writer" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Abre el menú "Herramientas" y selecciona "Opciones"</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/libreoffice-tools-options.png" 
                    alt="Menú Herramientas en LibreOffice" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-rainbow-purple text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">En el diálogo de opciones, expande "Configuración de idioma" y selecciona "Lingüística"</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/libreoffice-language-settings.png" 
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
                    src="/images/tutorials/windows/libreoffice-linguistics.png" 
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
                    src="/images/tutorials/windows/libreoffice-add-dictionary.png" 
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
                    src="/images/tutorials/windows/libreoffice-select-dic.png" 
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
                    src="/images/tutorials/windows/libreoffice-dictionary-added.png" 
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
                <p className="font-medium text-gray-900 dark:text-white">Abre Firefox y haz clic en el botón de menú (tres líneas horizontales) en la esquina superior derecha</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/firefox-menu.png" 
                    alt="Menú de Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Selecciona "Ajustes" o "Preferencias" en el menú</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/firefox-settings.png" 
                    alt="Ajustes de Firefox" 
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
                    src="/images/tutorials/windows/firefox-language.png" 
                    alt="Sección de idioma en Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">4</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic en "Revisar ortografía..." o "Diccionarios de revisión ortográfica..."</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/firefox-spell-check.png" 
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
                    src="/images/tutorials/windows/firefox-add-dictionaries.png" 
                    alt="Añadir diccionarios en Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">6</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Busca y selecciona "Español" en la lista de diccionarios disponibles</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Selecciona la opción que mejor se adapte a tus necesidades. Si ya tienes un diccionario en español instalado, 
                  deberás reemplazarlo con nuestros archivos manualmente.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/firefox-dictionary-list.png" 
                    alt="Lista de diccionarios en Firefox" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white font-medium">7</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Instalación manual (si ya tienes un diccionario en español)</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Para reemplazar un diccionario existente con nuestra versión inclusiva:
                </p>
                <ol className="mt-4 ml-6 space-y-2 list-decimal text-gray-700 dark:text-gray-300">
                  <li>Cierra Firefox completamente</li>
                  <li>Navega a la carpeta de perfil de Firefox (generalmente en <code>C:\Users\[TuUsuario]\AppData\Roaming\Mozilla\Firefox\Profiles\[TuPerfil]\extensions</code>)</li>
                  <li>Busca el directorio del diccionario en español (podría tener un nombre como <code>es-ES@dictionaries.addons.mozilla.org</code>)</li>
                  <li>Dentro de esa carpeta, reemplaza los archivos <code>es.aff</code> y <code>es.dic</code> con tus archivos <code>es_inclusive.aff</code> y <code>es_inclusive.dic</code> (renómbralos para que coincidan)</li>
                  <li>Reinicia Firefox</li>
                </ol>
              </div>
            </li>
          </ol>
        </section>

        {/* Microsoft Word */}
        <section id="msword">
          <h2>Instalación en Microsoft Word</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Microsoft Word no admite directamente el formato de diccionario Hunspell, pero hay una solución alternativa.
          </p>
          
          <ol className="mt-5 space-y-6">
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-medium">1</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Abre Microsoft Word</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/word-open.png" 
                    alt="Microsoft Word" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-medium">2</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic en la pestaña "Archivo" y selecciona "Opciones"</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/word-options.png" 
                    alt="Opciones de Word" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-medium">3</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Selecciona "Revisión" en el panel izquierdo</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/word-proofing.png" 
                    alt="Revisión en Word" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-medium">4</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic en "Diccionarios personalizados..."</p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/word-custom-dictionaries.png" 
                    alt="Diccionarios personalizados en Word" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-medium">5</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Haz clic en "Agregar..." y crea un nuevo archivo de texto</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Deberás crear un nuevo archivo de texto (.txt) y guardarlo en la ubicación predeterminada.
                  Word solo admite diccionarios personalizados en formato de texto plano.
                </p>
                <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <img 
                    src="/images/tutorials/windows/word-add-dictionary.png" 
                    alt="Agregar diccionario en Word" 
                    className="w-full"
                  />
                </div>
              </div>
            </li>
            <li className="relative pl-9">
              <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-medium">6</div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Edita el archivo de texto con palabras inclusivas</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Lamentablemente, tendrás que agregar manualmente las palabras inclusivas a este archivo.
                  Para cada palabra que quieras incluir, agrégala en una línea separada.
                </p>
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700 dark:text-yellow-200">
                        Microsoft Word no soporta completamente las funcionalidades avanzadas de los diccionarios Hunspell.
                        Para una mejor experiencia con lenguaje inclusivo, recomendamos usar LibreOffice.
                      </p>
                    </div>
                  </div>
                </div>
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
                  El diccionario no aparece en la lista de idiomas
                </h3>
                <div className="mt-2 text-gray-700 dark:text-gray-300">
                  <p>Si el diccionario no aparece después de instalarlo:</p>
                  <ul className="mt-2 ml-6 space-y-2 list-disc">
                    <li>Asegúrate de que los archivos .aff y .dic estén en la misma carpeta</li>
                    <li>Verifica que los nombres de ambos archivos sean idénticos (excepto por la extensión)</li>
                    <li>Reinicia la aplicación después de instalar el diccionario</li>
                    <li>En LibreOffice, intenta ir a Herramientas &gt; Opciones &gt; Configuración de idioma &gt; Idiomas y selecciona "Español" como idioma predeterminado</li>
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
                    <li>Asegúrate de que el idioma seleccionado para el texto sea "Español"</li>
                    <li>Verifica que la revisión ortográfica esté activada (en Word: menú Revisar &gt; Ortografía y gramática)</li>
                    <li>Comprueba si tienes múltiples diccionarios en español instalados que podrían estar en conflicto</li>
                    <li>En Firefox, haz clic derecho en un campo de texto, selecciona "Idiomas" y asegúrate de que "Español (Inclusivo)" esté seleccionado</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Problemas con caracteres especiales
                </h3>
                <div className="mt-2 text-gray-700 dark:text-gray-300">
                  <p>Si experimentas problemas con caracteres acentuados o especiales:</p>
                  <ul className="mt-2 ml-6 space-y-2 list-disc">
                    <li>Asegúrate de que los archivos del diccionario estén codificados en UTF-8</li>
                    <li>En LibreOffice, verifica la configuración de idioma y asegúrate de que la compatibilidad con tu teclado esté correctamente configurada</li>
                    <li>Prueba a reinstalar el diccionario después de verificar que no haya caracteres corruptos en los archivos</li>
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