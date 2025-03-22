// ABOUTME: This file contains the Linux tutorial page
// ABOUTME: It provides step-by-step instructions for installing inclusive dictionaries on Linux

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContentLayout from '../../components/ContentLayout';

/**
 * LinuxTutorial component provides step-by-step instructions for 
 * installing inclusive dictionaries on Linux distributions
 */
export default function LinuxTutorial() {
  const breadcrumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Tutoriales', href: '/tutoriales' },
    { label: 'Linux', href: '/tutoriales/linux', current: true }
  ];

  return (
    <ContentLayout
      title="Tutorial de instalación para Linux"
      description="Guía paso a paso para instalar y usar los diccionarios inclusivos en distribuciones Linux."
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-10">
        <p>
          Esta guía te enseñará a instalar nuestros diccionarios inclusivos con terminaciones en -e
          en diferentes distribuciones de Linux. Sigue los pasos a continuación para comenzar a usar
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
            <p><strong>Permisos:</strong> Algunas instalaciones pueden requerir permisos de 
            administrador (sudo).</p>
          </li>
          <li>
            <p><strong>Terminal:</strong> Necesitarás acceder a la terminal para algunos pasos
            de la instalación.</p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="extraccion">Paso 1: Extraer los archivos del diccionario</h2>
        <ol className="space-y-6">
          <li>
            <p>Abre una terminal y navega hasta la ubicación donde se descargó el archivo zip.</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/linux/terminal.jpg" 
                alt="Terminal de Linux mostrando comandos" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Extrae el archivo con el siguiente comando:</p>
            <div className="my-2">
              <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                <code>unzip es_inclusive_v1.0.0.zip -d ~/diccionario-inclusivo</code>
              </pre>
            </div>
          </li>
          <li>
            <p>Si no tienes instalado <code>unzip</code>, puedes instalarlo con:</p>
            <div className="my-2">
              <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                <code># Ubuntu/Debian
sudo apt install unzip

# Fedora/CentOS/RHEL
sudo dnf install unzip

# Arch Linux
sudo pacman -S unzip</code>
              </pre>
            </div>
          </li>
        </ol>
        <p className="mt-4">
          Ahora tendrás una carpeta <code>~/diccionario-inclusivo</code> con los archivos necesarios: 
          <code>es_inclusive.dic</code>, <code>es_inclusive.aff</code> y posiblemente algunos archivos adicionales.
        </p>
      </section>

      <section className="mb-12 border-l-4 border-indigo-200 pl-4">
        <h2 className="text-2xl font-bold mb-4" id="sistema">Instalación a nivel del sistema</h2>
        <p className="mb-4">Para hacer que el diccionario esté disponible a nivel del sistema:</p>
        <ol className="space-y-6">
          <li>
            <p>Crea el directorio necesario para los diccionarios Hunspell (si no existe):</p>
            <div className="my-2">
              <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                <code>sudo mkdir -p /usr/share/hunspell</code>
              </pre>
            </div>
          </li>
          <li>
            <p>Copia los archivos del diccionario:</p>
            <div className="my-2">
              <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                <code>sudo cp ~/diccionario-inclusivo/es_inclusive.dic /usr/share/hunspell/
sudo cp ~/diccionario-inclusivo/es_inclusive.aff /usr/share/hunspell/</code>
              </pre>
            </div>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/linux/copy-files.jpg" 
                alt="Copiando archivos de diccionario al directorio del sistema" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Crea enlaces simbólicos para la compatibilidad con más aplicaciones:</p>
            <div className="my-2">
              <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                <code>cd /usr/share/hunspell
sudo ln -s es_inclusive.dic es_ES_inclusive.dic
sudo ln -s es_inclusive.aff es_ES_inclusive.aff</code>
              </pre>
            </div>
          </li>
          <li>
            <p>Para algunas distribuciones, también puede ser útil colocar los archivos en myspell:</p>
            <div className="my-2">
              <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
                <code>sudo mkdir -p /usr/share/myspell/dicts
cd /usr/share/myspell/dicts
sudo ln -s /usr/share/hunspell/es_inclusive.dic .
sudo ln -s /usr/share/hunspell/es_inclusive.aff .</code>
              </pre>
            </div>
          </li>
        </ol>
        <p className="mt-4 text-indigo-700 bg-indigo-50 p-3 rounded-md">
          <strong>Nota:</strong> Los directorios exactos pueden variar según la distribución de Linux que estés utilizando. 
          Las instrucciones anteriores funcionan para la mayoría de las distribuciones basadas en Debian, 
          Ubuntu, Fedora y Arch.
        </p>
      </section>

      <section className="mb-12 border-l-4 border-purple-200 pl-4">
        <h2 className="text-2xl font-bold mb-4" id="libreoffice">Instalación en LibreOffice</h2>
        <p className="mb-4">Para instalar el diccionario en LibreOffice:</p>
        <ol className="space-y-6">
          <li>
            <p>Abre LibreOffice Writer</p>
          </li>
          <li>
            <p>Ve a <strong>Herramientas</strong> → <strong>Idioma</strong> → <strong>Más diccionarios en línea...</strong></p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/linux/libreoffice-menu.jpg" 
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
            <p>Haz clic en <strong>Añadir...</strong> y navega hasta <code>~/diccionario-inclusivo</code>.</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/linux/libreoffice-add.jpg" 
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
                src="/images/screenshots/linux/libreoffice-select.jpg" 
                alt="Seleccionar el idioma inclusivo en LibreOffice" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
        </ol>
        <p className="mt-4 text-purple-700 bg-purple-50 p-3 rounded-md">
          <strong>Nota:</strong> Si has realizado la instalación a nivel del sistema, el diccionario inclusivo 
          debería aparecer automáticamente en la lista de idiomas disponibles de LibreOffice.
        </p>
      </section>

      <section className="mb-12 border-l-4 border-blue-200 pl-4">
        <h2 className="text-2xl font-bold mb-4" id="firefox">Instalación en Firefox</h2>
        <ol className="space-y-6">
          <li>
            <p>Abre Firefox y haz clic en el menú (tres líneas horizontales en la esquina superior derecha).</p>
          </li>
          <li>
            <p>Selecciona <strong>Ajustes</strong> (o <strong>Preferencias</strong> en algunas versiones).</p>
            <div className="my-4 border p-1 inline-block bg-gray-50">
              <Image 
                src="/images/screenshots/linux/firefox-menu.jpg" 
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
                src="/images/screenshots/linux/firefox-language.jpg" 
                alt="Opciones de idioma en Firefox" 
                width={480} 
                height={270} 
                className="border"
              />
            </div>
          </li>
          <li>
            <p>Si has instalado el diccionario a nivel del sistema, debería aparecer en la lista.</p>
          </li>
          <li>
            <p>Si no está disponible, puedes instalarlo manualmente:</p>
            <ol className="list-decimal ml-6 mt-2">
              <li>
                <p>Crea o edita el archivo <code>~/.mozilla/firefox/[perfil]/persdict.dat</code>.</p>
              </li>
              <li>
                <p>Copia los contenidos del archivo <code>~/diccionario-inclusivo/es_inclusive.txt</code> 
                en este archivo si está disponible.</p>
              </li>
            </ol>
          </li>
          <li>
            <p>Reinicia Firefox para aplicar los cambios.</p>
          </li>
        </ol>
        <div className="mt-4 text-blue-700 bg-blue-50 p-3 rounded-md">
          <p className="mb-2">
            <strong>Alternativa:</strong> Si has instalado el diccionario a nivel del sistema, Firefox debería 
            detectarlo automáticamente. Si no lo hace, puedes copiar manualmente los archivos a la carpeta de 
            diccionarios de Firefox:
          </p>
          <div className="my-2">
            <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
              <code>mkdir -p ~/.mozilla/firefox/[perfil]/dictionaries
cp ~/diccionario-inclusivo/es_inclusive.* ~/.mozilla/firefox/[perfil]/dictionaries/</code>
            </pre>
          </div>
          <p className="text-sm">Reemplaza [perfil] con tu directorio de perfil actual.</p>
        </div>
      </section>

      <section className="mb-12 bg-orange-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4" id="problemas">Solución de problemas comunes</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">El diccionario no aparece en la lista de idiomas</h3>
          <p className="mb-2">Posibles soluciones:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Verifica que los archivos se copiaron correctamente a las ubicaciones del sistema</li>
            <li>Asegúrate de que los enlaces simbólicos fueron creados correctamente</li>
            <li>Reinicia la aplicación completamente</li>
            <li>En algunos casos, puede ser necesario reiniciar el sistema</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Permisos denegados al copiar archivos</h3>
          <p className="mb-2">Posibles soluciones:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Asegúrate de usar <code>sudo</code> para los comandos que requieren permisos de administrador</li>
            <li>Verifica que tu usuario tenga los permisos necesarios</li>
            <li>Para directorios personales (~), no deberías necesitar sudo</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Las palabras inclusivas siguen marcándose como errores</h3>
          <p className="mb-2">Posibles soluciones:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Asegúrate de haber seleccionado correctamente el idioma "Español (Inclusivo)"</li>
            <li>Verifica que el texto está configurado para usar el diccionario instalado</li>
            <li>En algunas aplicaciones, puede ser necesario agregar manualmente las palabras al diccionario personalizado</li>
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
            sobre la instalación en tu distribución de Linux, contáctanos:
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