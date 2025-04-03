import React, { useState } from 'react';
import Head from 'next/head';
import { Layout } from '../components/Layout';

interface DictionaryItem {
  code: string;
  name: string;
  country: string;
  variants: Array<{
    mode: string;
    marker: string;
    fileName: string;
  }>;
}

const DescargarDiccionarios: React.FC = () => {
  const [selectedDialect, setSelectedDialect] = useState<string>('all');
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [selectedMarker, setSelectedMarker] = useState<string>('all');

  const dictionariesData: DictionaryItem[] = [
    {
      code: 'es',
      name: 'Español',
      country: 'General',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es_inclusive_aggressive_e.zip' },
        { mode: 'aggressive', marker: 'x', fileName: 'es_inclusive_aggressive_x.zip' },
        { mode: 'aggressive', marker: '@', fileName: 'es_inclusive_aggressive_@.zip' },
        { mode: 'conservative', marker: 'e', fileName: 'es_inclusive_conservative_e.zip' },
        { mode: 'conservative', marker: 'x', fileName: 'es_inclusive_conservative_x.zip' },
        { mode: 'conservative', marker: '@', fileName: 'es_inclusive_conservative_@.zip' },
      ]
    },
    {
      code: 'es-AR',
      name: 'Español',
      country: 'Argentina',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-AR_inclusive_aggressive_e.zip' },
        { mode: 'aggressive', marker: 'x', fileName: 'es-AR_inclusive_aggressive_x.zip' },
        { mode: 'aggressive', marker: '@', fileName: 'es-AR_inclusive_aggressive_@.zip' },
        { mode: 'conservative', marker: 'e', fileName: 'es-AR_inclusive_conservative_e.zip' },
        { mode: 'conservative', marker: 'x', fileName: 'es-AR_inclusive_conservative_x.zip' },
        { mode: 'conservative', marker: '@', fileName: 'es-AR_inclusive_conservative_@.zip' },
      ]
    },
    {
      code: 'es-MX',
      name: 'Español',
      country: 'México',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-MX_inclusive_aggressive_e.zip' },
        { mode: 'aggressive', marker: 'x', fileName: 'es-MX_inclusive_aggressive_x.zip' },
        { mode: 'aggressive', marker: '@', fileName: 'es-MX_inclusive_aggressive_@.zip' },
        { mode: 'conservative', marker: 'e', fileName: 'es-MX_inclusive_conservative_e.zip' },
        { mode: 'conservative', marker: 'x', fileName: 'es-MX_inclusive_conservative_x.zip' },
        { mode: 'conservative', marker: '@', fileName: 'es-MX_inclusive_conservative_@.zip' },
      ]
    },
    {
      code: 'es-ES',
      name: 'Español',
      country: 'España',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es_ES_inclusive_aggressive_e.zip' },
        { mode: 'aggressive', marker: 'x', fileName: 'es_ES_inclusive_aggressive_x.zip' },
        { mode: 'aggressive', marker: '@', fileName: 'es_ES_inclusive_aggressive_@.zip' },
        { mode: 'conservative', marker: 'e', fileName: 'es_ES_inclusive_conservative_e.zip' },
        { mode: 'conservative', marker: 'x', fileName: 'es_ES_inclusive_conservative_x.zip' },
        { mode: 'conservative', marker: '@', fileName: 'es_ES_inclusive_conservative_@.zip' },
      ]
    },
    {
      code: 'es-CO',
      name: 'Español',
      country: 'Colombia',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-CO_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-CL',
      name: 'Español',
      country: 'Chile',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-CL_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-PE',
      name: 'Español',
      country: 'Perú',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-PE_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-VE',
      name: 'Español',
      country: 'Venezuela',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-VE_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-EC',
      name: 'Español',
      country: 'Ecuador',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-EC_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-UY',
      name: 'Español',
      country: 'Uruguay',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-UY_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-PY',
      name: 'Español',
      country: 'Paraguay',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-PY_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-BO',
      name: 'Español',
      country: 'Bolivia',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-BO_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-CR',
      name: 'Español',
      country: 'Costa Rica',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-CR_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-CU',
      name: 'Español',
      country: 'Cuba',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-CU_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-DO',
      name: 'Español',
      country: 'República Dominicana',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-DO_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-GT',
      name: 'Español',
      country: 'Guatemala',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-GT_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-HN',
      name: 'Español',
      country: 'Honduras',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-HN_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-NI',
      name: 'Español',
      country: 'Nicaragua',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-NI_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-PA',
      name: 'Español',
      country: 'Panamá',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-PA_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-PR',
      name: 'Español',
      country: 'Puerto Rico',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-PR_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-SV',
      name: 'Español',
      country: 'El Salvador',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-SV_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-US',
      name: 'Español',
      country: 'Estados Unidos',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-US_inclusive_aggressive_e.zip' },
      ]
    },
    {
      code: 'es-PH',
      name: 'Español',
      country: 'Filipinas',
      variants: [
        { mode: 'aggressive', marker: 'e', fileName: 'es-PH_inclusive_aggressive_e.zip' },
      ]
    },
  ];

  // Filter dictionaries based on selected options
  const filteredDictionaries = dictionariesData.filter((dict) => {
    if (selectedDialect !== 'all' && dict.code !== selectedDialect) {
      return false;
    }
    
    // Check if any variant matches the selected mode and marker
    return dict.variants.some((variant) => {
      const modeMatch = selectedMode === 'all' || variant.mode === selectedMode;
      const markerMatch = selectedMarker === 'all' || variant.marker === selectedMarker;
      return modeMatch && markerMatch;
    });
  });

  // Filter variants based on selected options
  const getFilteredVariants = (variants: any[]) => {
    return variants.filter((variant) => {
      const modeMatch = selectedMode === 'all' || variant.mode === selectedMode;
      const markerMatch = selectedMarker === 'all' || variant.marker === selectedMarker;
      return modeMatch && markerMatch;
    });
  };

  const getCountryFlag = (code: string) => {
    // Extract country code from locale
    const country = code.split('-')[1];
    if (!country) return '🌐'; // Default for generic Spanish
    
    // Convert country code to regional indicator symbols (emoji flags)
    try {
      // Special case for some codes
      if (country === 'ES') return '🇪🇸';
      if (country === 'AR') return '🇦🇷';
      if (country === 'MX') return '🇲🇽';
      if (country === 'CO') return '🇨🇴';
      if (country === 'CL') return '🇨🇱';
      if (country === 'PE') return '🇵🇪';
      if (country === 'VE') return '🇻🇪';
      if (country === 'EC') return '🇪🇨';
      if (country === 'UY') return '🇺🇾';
      if (country === 'PY') return '🇵🇾';
      if (country === 'BO') return '🇧🇴';
      if (country === 'CR') return '🇨🇷';
      if (country === 'CU') return '🇨🇺';
      if (country === 'DO') return '🇩🇴';
      if (country === 'GT') return '🇬🇹';
      if (country === 'HN') return '🇭🇳';
      if (country === 'NI') return '🇳🇮';
      if (country === 'PA') return '🇵🇦';
      if (country === 'PR') return '🇵🇷';
      if (country === 'SV') return '🇸🇻';
      if (country === 'US') return '🇺🇸';
      if (country === 'PH') return '🇵🇭';
      
      return '🌐'; // Default
    } catch (e) {
      return '🌐'; // Fallback
    }
  };

  const getModeDisplayName = (mode: string) => {
    return mode === 'aggressive' ? 'Reemplazo' : 'Adición';
  };

  const getMarkerDisplayName = (marker: string) => {
    return marker === 'e' ? '-e' : marker === 'x' ? '-x' : '@';
  };

  return (
    <Layout>
      <Head>
        <title>Descargar Diccionarios | nobinarie.com</title>
        <meta 
          name="description" 
          content="Descarga diccionarios inclusivos para más de 20 dialectos del español con múltiples variantes de marcado inclusivo." 
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Diccionarios Inclusivos
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Descarga diccionarios inclusivos para más de 20 dialectos del español con soporte para 
            las terminaciones <strong>-e</strong>, <strong>-x</strong> y <strong>@</strong>.
          </p>
        </div>

        {/* Filter controls */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Filtrar diccionarios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dialect selector */}
            <div>
              <label htmlFor="dialectFilter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Dialecto
              </label>
              <select
                id="dialectFilter"
                value={selectedDialect}
                onChange={(e) => setSelectedDialect(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="all">Todos los dialectos</option>
                {dictionariesData.map((dict) => (
                  <option key={dict.code} value={dict.code}>
                    {getCountryFlag(dict.code)} {dict.name} ({dict.country})
                  </option>
                ))}
              </select>
            </div>

            {/* Mode selector */}
            <div>
              <label htmlFor="modeFilter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Modo
              </label>
              <select
                id="modeFilter"
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="all">Todos los modos</option>
                <option value="aggressive">Reemplazo (sólo formas inclusivas)</option>
                <option value="conservative">Adición (mantiene formas tradicionales)</option>
              </select>
            </div>

            {/* Marker selector */}
            <div>
              <label htmlFor="markerFilter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Marcador
              </label>
              <select
                id="markerFilter"
                value={selectedMarker}
                onChange={(e) => setSelectedMarker(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="all">Todos los marcadores</option>
                <option value="e">Terminación -e (amigue, profesore)</option>
                <option value="x">Terminación -x (amigx, profesxr)</option>
                <option value="@">Terminación @ (amig@, profes@r)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dictionary list */}
        <div className="space-y-8">
          {filteredDictionaries.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">No se encontraron diccionarios con los filtros seleccionados.</p>
            </div>
          ) : (
            filteredDictionaries.map((dict) => {
              const variants = getFilteredVariants(dict.variants);
              if (variants.length === 0) return null;

              return (
                <div key={dict.code} className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                    <span className="text-2xl mr-3">{getCountryFlag(dict.code)}</span>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {dict.name} ({dict.country})
                    </h3>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{dict.code}</span>
                  </div>
                  
                  <div className="px-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {variants.map((variant, idx) => (
                        <div 
                          key={idx} 
                          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {getModeDisplayName(variant.mode)}, {getMarkerDisplayName(variant.marker)}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {variant.mode === 'aggressive' ? 'Solo formas inclusivas' : 'Incluye formas tradicionales'}
                            </div>
                            <a
                              href={`/dictionaries/${variant.fileName}`}
                              download
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={(e) => {
                                // Check if file exists, if not show a message
                                const path = `/dictionaries/${variant.fileName}`;
                                const xhr = new XMLHttpRequest();
                                xhr.open('HEAD', path, false);
                                try {
                                  xhr.send();
                                  if (xhr.status === 404) {
                                    e.preventDefault();
                                    alert('Este diccionario estará disponible próximamente.');
                                  }
                                } catch (error) {
                                  e.preventDefault();
                                  console.error('Error checking file:', error);
                                }
                              }}
                            >
                              Descargar
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Instructions section */}
        <div className="mt-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Cómo usar los diccionarios</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Los diccionarios se proporcionan en formato ZIP que contiene:
            </p>
            
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Archivos Hunspell (.dic y .aff)</strong> - Para usar con LibreOffice, Word, Firefox y otros programas
              </li>
              <li>
                <strong>Archivo JSON (.json)</strong> - Para integración con aplicaciones web y JavaScript
              </li>
              <li>
                <strong>README.md</strong> - Información sobre el contenido y uso del diccionario
              </li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Visita nuestros <a href="/tutoriales" className="text-indigo-600 hover:text-indigo-800 underline">tutoriales</a> para obtener instrucciones detalladas de instalación.
            </p>
          </div>
        </div>

        {/* Dictionary types explanation */}
        <div className="mt-12 bg-gradient-to-r from-rainbow-blue/10 to-rainbow-purple/10 dark:from-rainbow-blue/5 dark:to-rainbow-purple/5 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Tipos de diccionarios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Por modo</h3>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white">Modo Reemplazo (Agresivo)</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    Reemplaza palabras binarias con sus formas inclusivas. Menor tamaño, pero solo contiene formas inclusivas.
                  </p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Ejemplo: "amigo" → "amigue"
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white">Modo Adición (Conservador)</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    Mantiene palabras binarias originales y añade formas inclusivas. Mayor tamaño, pero más compatible.
                  </p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Ejemplo: mantiene "amigo", "amiga" y añade "amigue"
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Por marcador</h3>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white">Terminación -e</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    Usa la terminación -e para formas inclusivas. La más pronunciable y común.
                  </p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Ejemplos: "amigue", "todes", "profesore"
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white">Terminación -x</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    Usa la terminación -x. Común en textos escritos académicos y documentos formales.
                  </p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Ejemplos: "amigx", "todxs", "profesxr"
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm">
                  <h4 className="font-medium text-gray-900 dark:text-white">Terminación @</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                    Usa el símbolo @ para sustituir a/o. Usada principalmente en comunicación informal.
                  </p>
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Ejemplos: "amig@", "tod@s", "profes@r"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DescargarDiccionarios;