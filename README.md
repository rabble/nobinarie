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
- **Contenido:** TSX para componentes y páginas

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

# Instalar navegadores para pruebas E2E (Playwright)
npx playwright install

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos disponibles

- **Desarrollo:** `npm run dev` - Inicia el servidor de desarrollo en http://localhost:3000
- **Compilación:** `npm run build` - Compila el proyecto para producción
- **Exportación estática:** `npm run export` - Genera los archivos estáticos para hosting
- **Generación de diccionarios:** `npm run dictionary:generate` - Genera archivos ZIP de diccionarios
- **Despliegue a Cloudflare Pages:** `npm run deploy:pages` - Despliega a entorno de desarrollo
- **Despliegue a producción:** `npm run deploy:pages:prod` - Despliega a entorno de producción

### Comandos para pruebas

- **Ejecutar todas las pruebas:** `npm test` - Ejecuta todas las pruebas unitarias e integración
- **Pruebas unitarias:** `npm run test:unit` - Prueba componentes individuales
- **Pruebas de integración:** `npm run test:integration` - Prueba interacciones entre componentes
- **Pruebas E2E:** `npm run test:e2e` - Pruebas end-to-end con Playwright
- **Linting:** `npm run lint` - Verifica la calidad del código
- **Verificación de tipos:** `npm run typecheck` - Verifica tipado TypeScript

## 📋 Estructura del proyecto

```
/
├── docs/                # Documentación del proyecto
│   └── design-decisions/ # Decisiones de diseño
├── public/              # Archivos estáticos
│   ├── downloads/       # Archivos de diccionarios
│   └── pdfs/            # Recursos imprimibles
├── src/
│   ├── components/      # Componentes React
│   │   ├── Layout.tsx   # Componente principal de diseño
│   │   ├── Header.tsx   # Navegación y controles de accesibilidad
│   │   ├── Footer.tsx   # Pie de página
│   │   └── ErrorBoundary.tsx # Manejo de errores
│   ├── lib/             # Funciones utilitarias
│   │   ├── config.ts    # Configuración del sitio
│   │   └── dictionary.ts # Funciones para gestionar diccionarios
│   ├── pages/           # Páginas del sitio
│   │   ├── index.tsx    # Página principal
│   │   ├── que-es-lengua-inclusiva.tsx # Página de información
│   │   └── ...          # Otras páginas de contenido
│   └── tests/           # Pruebas automatizadas
│       ├── unit/        # Pruebas unitarias
│       ├── integration/ # Pruebas de integración
│       └── e2e/         # Pruebas de extremo a extremo
├── tailwind.config.js   # Configuración de TailwindCSS
├── next.config.js       # Configuración de Next.js
└── wrangler.jsonc       # Configuración de Cloudflare Workers
```

## 🧪 Pruebas

El proyecto utiliza Vitest para pruebas unitarias e integración, y Playwright para pruebas E2E:

### Pruebas unitarias

Verifican que los componentes individuales funcionen correctamente:

```bash
npm run test:unit
```

### Pruebas de integración

Verifican que los componentes interactúen correctamente entre sí:

```bash
npm run test:integration
```

### Pruebas E2E

Simulan la interacción del usuario con el sitio en navegadores reales:

```bash
# Asegúrate de instalar los navegadores primero
npx playwright install

# Ejecuta las pruebas E2E
npm run test:e2e
```

## 🚀 Despliegue

El sitio se despliega a Cloudflare Pages como un sitio estático:

```bash
# Despliegue a entorno de desarrollo
npm run deploy:pages

# Despliegue a producción
npm run deploy:pages:prod
```

## 📦 Gestión de diccionarios

Para generar los archivos ZIP de diccionarios:

```bash
npm run dictionary:generate
```

Esto crea los archivos en `public/downloads/` para ser distribuidos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, consulta nuestros [lineamientos de contribución](CONTRIBUTING.md) antes de enviar cambios.

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE)