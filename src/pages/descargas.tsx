// ABOUTME: This file is the downloads page
// ABOUTME: It provides links to download the dictionary files

import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { getDictionaryVersions, getChangelogForVersion } from '@/lib/dictionary-browser';

export default function Descargas() {
  // Get available dictionary versions from the file system
  const versions = getDictionaryVersions();
  
  // Format the changelog for each version
  const downloads = versions.map(version => {
    const changelog = getChangelogForVersion(version);
    
    // Extract release date from changelog if available
    const dateMatch = changelog.match(/\d{4}-\d{2}-\d{2}/);
    const date = dateMatch ? dateMatch[0] : 'Fecha no disponible';
    
    // Extract description from changelog
    let description = 'Versión del diccionario inclusivo';
    if (changelog.includes('### Agregado')) {
      const addedSection = changelog.split('### Agregado')[1].split('###')[0];
      const bullets = addedSection.split('\n').filter(line => line.trim().startsWith('- '));
      if (bullets.length > 0) {
        description = bullets[0].replace('- ', '');
      }
    }
    
    return {
      version,
      date,
      description,
      link: `/dictionaries/v${version.split('.')[0]}/es_inclusive.zip`,
      notes: `Compatible con todas las plataformas principales`,
    };
  });

  return (
    <Layout pageTitle="Descargas">
      <div className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Descargar diccionarios inclusivos
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
              Descargá nuestros diccionarios de corrección ortográfica inclusivos para comenzar a escribir en lenguaje no binario.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            {/* Latest Version Card */}
            <div className="bg-rainbow-gradient p-0.5 rounded-lg shadow-lg mb-10">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Última versión
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      La versión más reciente y recomendada
                    </p>
                  </div>
                  <Link 
                    href="/dictionaries/latest/es_inclusive.zip"
                    className="mt-4 sm:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rainbow-blue hover:bg-rainbow-blue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-blue transition-colors"
                    download
                  >
                    Descargar última versión
                  </Link>
                </div>
                <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>Incluye las últimas palabras y mejoras para escribir en lenguaje inclusivo.</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Compatible con todas las plataformas principales (Windows, macOS, Linux)
                  </p>
                </div>
              </div>
            </div>
            
            {/* All Versions */}
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Todas las versiones
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  Elegí la versión específica que necesites.
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {downloads.map((download) => (
                    <li key={download.version}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-rainbow-blue dark:text-rainbow-blue truncate">
                              Versión {download.version}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                              Lanzada el {download.date}
                            </p>
                          </div>
                          <div className="ml-2 flex-shrink-0">
                            <Link 
                              href={download.link}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rainbow-blue hover:bg-rainbow-blue/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rainbow-blue transition-colors"
                              download
                            >
                              Descargar
                            </Link>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                          <p>{download.description}</p>
                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{download.notes}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Changelog Section */}
            <div className="mt-12 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Historial de versiones
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  Cambios y actualizaciones de cada versión del diccionario.
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
                {downloads.map((download) => (
                  <div key={`changelog-${download.version}`} className="mb-8 version-entry">
                    <h4 className="text-base font-medium text-gray-900 dark:text-white">
                      Versión {download.version} <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">({download.date})</span>
                    </h4>
                    <div className="mt-2 text-sm prose prose-sm dark:prose-invert max-w-none">
                      <pre className="bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-auto text-xs">
                        {getChangelogForVersion(download.version)}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    Después de descargar el diccionario, consultá nuestros <Link href="/tutoriales" className="font-medium underline text-yellow-700 dark:text-yellow-100">tutoriales de instalación</Link> para configurarlo en tu dispositivo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Instrucciones de instalación
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  Cómo instalar el diccionario en diferentes sistemas
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
                <div className="space-y-10">
                  {/* Windows Instructions */}
                  <div>
                    <h4 className="text-base font-medium text-gray-900 dark:text-white flex items-center">
                      <svg className="h-5 w-5 mr-2 text-rainbow-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Windows
                    </h4>
                    <ol className="mt-4 ml-6 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-decimal">
                      <li>Descargá el archivo ZIP del diccionario</li>
                      <li>Extraé los archivos (.aff y .dic) a una ubicación permanente</li>
                      <li><strong>Para LibreOffice/OpenOffice:</strong>
                        <ul className="ml-4 mt-1 list-disc">
                          <li>Abrí el programa y andá a Herramientas &gt; Opciones</li>
                          <li>Seleccioná Configuración de idioma &gt; Lingüística</li>
                          <li>Hacé clic en "Editar..." junto a "Módulos de ortografía disponibles"</li>
                          <li>Hacé clic en "Añadir..." y seleccioná la ubicación de los archivos del diccionario</li>
                        </ul>
                      </li>
                      <li><strong>Para Mozilla Firefox:</strong>
                        <ul className="ml-4 mt-1 list-disc">
                          <li>Abrí Firefox y andá a Ajustes &gt; General</li>
                          <li>Desplazate hasta la sección "Idioma y apariencia"</li>
                          <li>Hacé clic en "Revisar ortografía..." y seleccioná "Añadir diccionarios"</li>
                          <li>Seleccioná los archivos .aff y .dic descargados</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  
                  {/* macOS Instructions */}
                  <div>
                    <h4 className="text-base font-medium text-gray-900 dark:text-white flex items-center">
                      <svg className="h-5 w-5 mr-2 text-rainbow-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      macOS
                    </h4>
                    <ol className="mt-4 ml-6 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-decimal">
                      <li>Descargá el archivo ZIP del diccionario</li>
                      <li>Extraé los archivos (.aff y .dic)</li>
                      <li>Creá la carpeta <code>~/Library/Spelling/</code> si no existe:
                        <pre className="bg-gray-50 dark:bg-gray-900 p-2 rounded mt-1 overflow-auto text-xs">mkdir -p ~/Library/Spelling/</pre>
                      </li>
                      <li>Copiá los archivos .aff y .dic a dicha carpeta:
                        <pre className="bg-gray-50 dark:bg-gray-900 p-2 rounded mt-1 overflow-auto text-xs">cp path/to/es_inclusive.* ~/Library/Spelling/</pre>
                      </li>
                      <li>Reiniciá las aplicaciones para que detecten el nuevo diccionario</li>
                    </ol>
                  </div>
                  
                  {/* Linux Instructions */}
                  <div>
                    <h4 className="text-base font-medium text-gray-900 dark:text-white flex items-center">
                      <svg className="h-5 w-5 mr-2 text-rainbow-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Linux
                    </h4>
                    <ol className="mt-4 ml-6 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-decimal">
                      <li>Descargá el archivo ZIP del diccionario</li>
                      <li>Extraé los archivos (.aff y .dic)</li>
                      <li>Para una instalación a nivel de sistema (requiere permisos de administrador):
                        <pre className="bg-gray-50 dark:bg-gray-900 p-2 rounded mt-1 overflow-auto text-xs">sudo cp path/to/es_inclusive.* /usr/share/hunspell/</pre>
                      </li>
                      <li>Para una instalación a nivel de usuario:
                        <pre className="bg-gray-50 dark:bg-gray-900 p-2 rounded mt-1 overflow-auto text-xs">mkdir -p ~/.local/share/hunspell/
cp path/to/es_inclusive.* ~/.local/share/hunspell/</pre>
                      </li>
                      <li>Reiniciá las aplicaciones para que detecten el nuevo diccionario</li>
                    </ol>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link
                    href="/tutoriales"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rainbow-gradient bg-300% hover:bg-left-animation transition-colors"
                  >
                    Ver tutoriales detallados
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}