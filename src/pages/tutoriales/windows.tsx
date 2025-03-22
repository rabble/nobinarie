// ABOUTME: This file contains the Windows tutorial page
// ABOUTME: It provides step-by-step instructions for installing inclusive dictionaries on Windows

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContentLayout from '../../components/ContentLayout';

/**
 * WindowsTutorial component provides step-by-step instructions for 
 * installing inclusive dictionaries on Windows applications
 */
export default function WindowsTutorial() {
  const breadcrumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Tutoriales', href: '/tutoriales' },
    { label: 'Windows', href: '/tutoriales/windows', current: true }
  ];

  return (
    <ContentLayout
      title="Tutorial de instalación para Windows"
      description="Guía paso a paso para instalar y usar los diccionarios inclusivos en Windows."
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-10">
        <p>
          Esta guía te enseñará a instalar nuestros diccionarios inclusivos con terminaciones en -e
          en diferentes aplicaciones de Windows. Sigue los pasos a continuación para comenzar a usar
          lenguaje inclusivo en todos tus documentos.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Requisitos previos</h2>
        <ul className="space-y-2">
          <li>
            <p><strong>Archivo del diccionario:</strong> Descarga el paquete de diccionario inclusivo 
            desde nuestra <Link href="/descargas" className="text-indigo-600 hover:text-indigo-800">
              página de descargas
            </Link>.</p>
          </li>
          <li>
            <p><strong>Una aplicación compatible:</strong> LibreOffice, Microsoft Word, Mozilla Firefox, 
            o cualquier otra aplicación que soporte diccionarios en formato Hunspell.</p>
          </li>
          <li>
            <p><strong>Permisos para instalar:</strong> Necesitarás permisos para copiar archivos en
            determinadas carpetas del sistema o aplicaciones.</p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="extraccion">Paso 1: Extraer los archivos del diccionario</h2>
        <ol className="space-y-6">
          <li>
            <p>Localiza el archivo .zip descargado (generalmente nombrado <code>es_inclusive_v1.0.0.zip</code> o similar).</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/find-zip.jpg" 
                alt="Localizar el archivo ZIP del diccionario" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Haz clic derecho sobre el archivo y selecciona "Extraer todo..."</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/extract-zip.jpg" 
                alt="Menú contextual para extraer el archivo ZIP" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Elige una ubicación fácil de recordar, como tu Escritorio o carpeta Documentos.</p>
          </li>
          <li>
            <p>Haz clic en "Extraer" para descomprimir los archivos.</p>
          </li>
        </ol>
        <p className="mt-4">
          Ahora tendrás una carpeta con los archivos necesarios: <code>es_inclusive.dic</code>, 
          <code>es_inclusive.aff</code> y posiblemente algunos archivos adicionales.
        </p>
      </section>

      <section className="mb-12 border-l-4 border-indigo-200 pl-4">
        <h2 className="text-2xl font-bold mb-4" id="libreoffice">Instalación en LibreOffice / OpenOffice</h2>
        <ol className="space-y-6">
          <li>
            <p>Abre LibreOffice Writer</p>
          </li>
          <li>
            <p>Ve a <strong>Herramientas</strong> → <strong>Idioma</strong> → <strong>Más diccionarios en línea...</strong></p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/libreoffice-menu.jpg" 
                alt="Menú de LibreOffice para acceder a opciones de diccionarios" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>En la nueva ventana, haz clic en <strong>Diccionarios</strong> en el menú lateral.</p>
          </li>
          <li>
            <p>Haz clic en <strong>Añadir...</strong> y navega hasta donde extrajiste los archivos del diccionario.</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/libreoffice-add.jpg" 
                alt="Ventana de añadir nuevo diccionario en LibreOffice" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Selecciona los archivos <code>es_inclusive.dic</code> y <code>es_inclusive.aff</code>.</p>
          </li>
          <li>
            <p>Haz clic en <strong>Abrir</strong> y luego en <strong>Aceptar</strong>.</p>
          </li>
          <li>
            <p>Reinicia LibreOffice para aplicar los cambios.</p>
          </li>
          <li>
            <p>Para activar el diccionario, selecciona el texto y ve a <strong>Herramientas</strong> → <strong>Idioma</strong> → <strong>Para la selección</strong> → <strong>Español (Inclusivo)</strong>.</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/libreoffice-select.jpg" 
                alt="Seleccionar el idioma inclusivo en LibreOffice" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
        </ol>
        <p className="mt-4 text-indigo-700 bg-indigo-50 p-3 rounded-md">
          <strong>Nota:</strong> Si el diccionario no aparece inmediatamente, puede ser necesario
          reiniciar LibreOffice completo (no solo el documento actual).
        </p>
      </section>

      <section className="mb-12 border-l-4 border-purple-200 pl-4">
        <h2 className="text-2xl font-bold mb-4" id="firefox">Instalación en Mozilla Firefox</h2>
        <ol className="space-y-6">
          <li>
            <p>Abre Firefox y haz clic en el menú (tres líneas horizontales en la esquina superior derecha).</p>
          </li>
          <li>
            <p>Selecciona <strong>Ajustes</strong> (o <strong>Preferencias</strong> en algunas versiones).</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/firefox-menu.jpg" 
                alt="Menú de Firefox para acceder a ajustes" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Desplázate hacia abajo hasta la sección <strong>Idioma y apariencia</strong>.</p>
          </li>
          <li>
            <p>Haz clic en <strong>Elegir...</strong> junto a "Idioma".</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/firefox-language.jpg" 
                alt="Opciones de idioma en Firefox" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Haz clic en <strong>Diccionarios</strong>.</p>
          </li>
          <li>
            <p>Busca un diccionario llamado "Español (Inclusivo)" o similar.</p>
          </li>
          <li>
            <p>Si no está disponible, haz clic en <strong>Buscar más diccionarios</strong> y navega hasta donde extrajiste los archivos del diccionario.</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/firefox-add.jpg" 
                alt="Añadir nuevo diccionario a Firefox" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Selecciona los archivos <code>es_inclusive.dic</code> y <code>es_inclusive.aff</code>.</p>
          </li>
          <li>
            <p>Reinicia Firefox para aplicar los cambios.</p>
          </li>
        </ol>
        <p className="mt-4 text-purple-700 bg-purple-50 p-3 rounded-md">
          <strong>Alternativa:</strong> Si tienes problemas instalando directamente, puedes copiar manualmente los archivos 
          <code>es_inclusive.dic</code> y <code>es_inclusive.aff</code> a la carpeta de diccionarios de Firefox:
          <code>C:\Users\[TuUsuario]\AppData\Roaming\Mozilla\Firefox\Profiles\[TuPerfil]\dictionaries</code>
        </p>
      </section>

      <section className="mb-12 border-l-4 border-blue-200 pl-4">
        <h2 className="text-2xl font-bold mb-4" id="word">Instalación en Microsoft Word</h2>
        <ol className="space-y-6">
          <li>
            <p>Abre Microsoft Word y crea un nuevo documento o abre uno existente.</p>
          </li>
          <li>
            <p>Haz clic en <strong>Archivo</strong> → <strong>Opciones</strong>.</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/word-options.jpg" 
                alt="Opciones de Word" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Selecciona <strong>Revisión</strong> en el menú lateral.</p>
          </li>
          <li>
            <p>Haz clic en <strong>Configuración de diccionarios personalizados</strong>.</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/word-dictionaries.jpg" 
                alt="Configuración de diccionarios en Word" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Haz clic en <strong>Añadir</strong> y navega hasta donde extrajiste el archivo <code>es_inclusive.txt</code>.</p>
          </li>
          <li>
            <p>Selecciona el archivo y haz clic en <strong>Abrir</strong>.</p>
          </li>
          <li>
            <p>Asegúrate de que el diccionario esté marcado como "Habilitado" y haz clic en <strong>Aceptar</strong>.</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/windows/word-add.jpg" 
                alt="Añadir diccionario a Word" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Para activar el diccionario, selecciona el texto y establece el idioma como "Español".</p>
          </li>
        </ol>
        <p className="mt-4 text-blue-700 bg-blue-50 p-3 rounded-md">
          <strong>Nota:</strong> Microsoft Word utiliza un formato ligeramente diferente para los diccionarios personalizados.
          Asegúrate de usar el archivo <code>es_inclusive.txt</code> (formato de texto plano) en lugar de los archivos
          Hunspell (.dic/.aff).
        </p>
      </section>

      <section className="mb-12 bg-orange-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4" id="problemas">Solución de problemas comunes</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">El diccionario no aparece en la lista de idiomas</h3>
          <p className="mb-2">Posibles soluciones:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Reinicia la aplicación completamente</li>
            <li>Verifica que los archivos se copiaron en la ubicación correcta</li>
            <li>Comprueba si la aplicación requiere permisos adicionales</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Las palabras inclusivas siguen marcándose como errores</h3>
          <p className="mb-2">Posibles soluciones:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Asegúrate de haber seleccionado correctamente el idioma "Español (Inclusivo)"</li>
            <li>Verifica que el texto está configurado para usar el diccionario instalado</li>
            <li>En algunas aplicaciones, puede ser necesario agregar manualmente las palabras al diccionario personalizado</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Errores en la instalación</h3>
          <p className="mb-2">Posibles soluciones:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Descarga nuevamente el paquete del diccionario</li>
            <li>Intenta ejecutar la aplicación como administrador</li>
            <li>Verifica si hay actualizaciones disponibles para tu aplicación</li>
          </ul>
        </div>
      </section>

      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Recursos adicionales</h3>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/que-es-lengua-inclusiva" 
                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span className="mr-2">📚</span>
                Conocer más sobre lenguaje inclusivo
              </Link>
            </li>
            <li>
              <Link 
                href="/glosario" 
                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span className="mr-2">📖</span>
                Ver glosario de términos inclusivos
              </Link>
            </li>
            <li>
              <Link 
                href="/contribuir" 
                className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span className="mr-2">🤝</span>
                Contribuir al proyecto
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">¿Necesitas ayuda?</h3>
          <p className="mb-4">
            Si encuentras dificultades siguiendo este tutorial o tienes preguntas específicas
            sobre la instalación, contáctanos:
          </p>
          <Link 
            href="/contacto" 
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Contactar soporte
          </Link>
        </div>
      </section>

      <section className="border-t pt-6 mt-8">
        <p className="text-sm text-gray-600">
          Última actualización: Marzo 2025 • Versión del diccionario: 1.0.0 •
          Si encuentras errores en este tutorial, por favor 
          <Link href="/contribuir" className="text-indigo-600 hover:text-indigo-800 ml-1">
            repórtalos aquí
          </Link>.
        </p>
      </section>
    </ContentLayout>
  );
};

