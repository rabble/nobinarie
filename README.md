# nobinarie.com

Un sitio dedicado a la promoción y distribución de diccionarios de corrección ortográfica inclusivos para el español, con foco en el uso de las terminaciones en "-e".

## 🎯 Propósito

nobinarie.com es un sitio estático que promueve y distribuye diccionarios de corrección ortográfica inclusivos para el español. Sirve a activistas, educadores y aliades que quieren escribir en español no binario usando formas con "-e", no "x" o "@". También explica, justifica y educa sobre el uso del lenguaje inclusivo.

## 🧩 Características principales

- Descarga de diccionarios de corrección ortográfica inclusivos
- Tutoriales de instalación para diferentes plataformas
- Recursos educativos sobre lenguaje inclusivo
- Demostración interactiva de corrección ortográfica inclusiva
- Recursos descargables e imprimibles
- Totalmente accesible y adaptable a diferentes dispositivos

## 🏗️ Tecnologías

- **Framework:** Next.js (modo de exportación estática)
- **Estilos:** TailwindCSS
- **Hosting:** Cloudflare Pages
- **Contenido:** Markdown/MDX para facilitar la creación de contenido

## 💻 Desarrollo

### Requisitos previos

- Node.js (versión 18 o superior)
- npm o yarn

### Configuración del entorno de desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/rabble/nobinarie.git
cd nobinarie

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos disponibles

- **Desarrollo:** `npm run dev`
- **Compilación:** `npm run build`
- **Exportación estática:** `npm run export`
- **Pruebas:** `npm test`
- **Linting:** `npm run lint`
- **Verificación de tipos:** `npm run typecheck`

## 📋 Estructura del proyecto

```
/
├── public/              # Archivos estáticos
│   ├── downloads/       # Archivos para descargar
│   │   └── v1.0.0/      # Versiones de diccionarios
│   └── pdfs/            # Recursos imprimibles
├── src/
│   ├── components/      # Componentes React
│   ├── pages/           # Páginas del sitio
│   ├── styles/          # Estilos CSS
│   └── lib/             # Funciones utilitarias
├── docs/                # Documentación del proyecto
└── tests/               # Pruebas automatizadas
```

## 🧪 Pruebas

El proyecto incluye pruebas unitarias, de integración y de extremo a extremo:

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas unitarias
npm run test:unit

# Ejecutar pruebas de integración
npm run test:integration

# Ejecutar pruebas de extremo a extremo
npm run test:e2e
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, consulta nuestros [lineamientos de contribución](CONTRIBUTING.md) antes de enviar cambios.

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).