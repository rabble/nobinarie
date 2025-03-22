// ABOUTME: This file contains the tutorials index page
// ABOUTME: It lists all available platform-specific installation tutorials

import React from 'react';
import Link from 'next/link';
import ContentLayout from '../../components/ContentLayout';

/**
 * TutorialCard component displays a card for a specific platform tutorial
 */
interface TutorialCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  implemented: boolean;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ title, description, href, icon, implemented }) => {
  return (
    <Link
      href={implemented ? href : '#'}
      className={`block p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow ${
        implemented 
          ? 'border-indigo-200 hover:border-indigo-300 bg-white' 
          : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-70'
      }`}
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
        {!implemented && (
          <span className="ml-auto px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded">
            Próximamente
          </span>
        )}
      </div>
      <p className="text-gray-600">{description}</p>
      {implemented && (
        <div className="mt-4 text-indigo-600 font-medium">
          Ver tutorial →
        </div>
      )}
    </Link>
  );
};

/**
 * TutorialesIndex page component displays all available tutorial options
 */
const TutorialesIndex: React.FC = () => {
  const breadcrumbs = [
    { label: 'Inicio', href: '/' },
    { label: 'Tutoriales', href: '/tutoriales', current: true }
  ];

  return (
    <ContentLayout
      title="Tutoriales de Instalación"
      description="Guías paso a paso para instalar los diccionarios inclusivos en diferentes plataformas y aplicaciones."
      breadcrumbs={breadcrumbs}
    >
      <p className="mb-8">
        Selecciona tu sistema operativo o plataforma para ver instrucciones detalladas sobre cómo instalar y
        configurar nuestros diccionarios inclusivos con terminaciones en -e.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <TutorialCard
          title="Windows"
          description="Instrucciones para LibreOffice, Microsoft Word, Firefox y otros programas en Windows."
          href="/tutoriales/windows"
          icon="🪟"
          implemented={true}
        />
        
        <TutorialCard
          title="macOS"
          description="Guía para instalar en aplicaciones de Apple como Pages, Safari y otros programas."
          href="/tutoriales/macos"
          icon="🍎"
          implemented={false}
        />
        
        <TutorialCard
          title="Linux"
          description="Pasos para Ubuntu, Fedora y otras distribuciones de Linux."
          href="/tutoriales/linux"
          icon="🐧"
          implemented={true}
        />
        
        <TutorialCard
          title="Android"
          description="Instrucciones para instalar en smartphones y tablets con Android."
          href="/tutoriales/android"
          icon="📱"
          implemented={false}
        />
        
        <TutorialCard
          title="iOS/iPadOS"
          description="Guía para usar los diccionarios en iPhone y iPad."
          href="/tutoriales/ios"
          icon="📲"
          implemented={false}
        />
        
        <TutorialCard
          title="Navegadores web"
          description="Instrucciones para Chrome, Firefox, Safari y Edge."
          href="/tutoriales/navegadores"
          icon="🌐"
          implemented={false}
        />
      </div>

      <div className="bg-indigo-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">¿No encuentras tu plataforma?</h2>
        <p className="mb-4">
          Si utilizas otra plataforma o aplicación que no está listada aquí, puedes consultar nuestra
          documentación general o contactarnos para obtener ayuda personalizada.
        </p>
        <Link 
          href="/contribuir" 
          className="inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Contribuir con un nuevo tutorial →
        </Link>
      </div>
    </ContentLayout>
  );
};

export default TutorialesIndex;