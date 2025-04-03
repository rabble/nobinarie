# Diccionario de Corrección Ortográfica Inclusivo

Un sistema de generación de diccionarios inclusivos para correctores ortográficos en múltiples dialectos del español.

## 📋 Descripción

Este proyecto convierte diccionarios estándar de español a versiones inclusivas que reconocen terminaciones en `-e`, `-x` y `@` como alternativas válidas a las formas tradicionales con marca de género. **Soporta más de 20 dialectos del español**, incluyendo las variantes de América Latina, España, Estados Unidos y Filipinas.

El sistema transforma diccionarios existentes mediante reglas lingüísticas adaptadas al español. Procesa archivos en formatos Hunspell y texto plano, generando versiones inclusivas que mantienen la coherencia gramatical mientras respetan las particularidades de cada dialecto.

## ✨ Características

- **Multilingüe**: Más de 20 dialectos del español (Argentina, México, Colombia, España, etc.)
- **Personalizable**: Tres marcadores de inclusividad (-e, -x, @)
- **Flexible**: Modos conservador (mantiene palabras originales) y agresivo (solo formas inclusivas)
- **Compatible**: Formatos Hunspell (.dic/.aff) y JSON para aplicaciones web
- **Transformación inteligente**: Reglas específicas para diferentes terminaciones de género
- **Configurable**: Manejo de excepciones y casos especiales
- **Eficiente**: Procesamiento automático de diccionarios completos
- **Bien documentado**: Instrucciones detalladas y estadísticas por dialecto

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/rabble/nobinarie.git
cd nobinarie

# Instalar dependencias
pip install -r requirements.txt

# Generar diccionarios (genera la versión básica para todos los dialectos)
python scripts/process_dictionaries.py
```

Los diccionarios generados estarán disponibles en el directorio `public/dictionaries/`.

## 💻 Uso

### Generación de Diccionarios Inclusivos

El proyecto incluye varios scripts para convertir y generar diccionarios inclusivos:

#### Script Principal

```bash
# Procesar todos los dialectos con configuración predeterminada
python scripts/process_dictionaries.py

# Procesar dialectos seleccionados con todas las variantes (e/x/@, agresivo/conservador)
python scripts/process_dictionaries.py --all-variants --dialects es-AR,es-MX,es

# Procesar todos los dialectos con todas las variantes (puede tardar bastante)
python scripts/process_dictionaries.py --all-variants --process-all-dialects
```

#### Procesamiento Manual

```bash
# Convertir un diccionario Hunspell (modo agresivo, marcador -e por defecto)
python scripts/conversor_inclusivo.py input_dictionaries/es_ES.dic -o public/dictionaries/es_inclusive.dic

# Personalizar modo y marcador
python scripts/conversor_inclusivo.py input_dictionaries/es_ES.dic -o public/dictionaries/es_inclusive_x.dic --mode aggressive --marker x

# Procesar todos los dialectos disponibles
python scripts/process_all_dialects.py

# Crear índices y organizar archivos
python scripts/fix_dialect_dictionaries.py

# Generar variantes para dialectos específicos
python scripts/process_all_variants.py

# Crear archivos ZIP para distribución web
python scripts/zip_dictionaries.py
```

### Dialectos Disponibles

El proyecto incluye diccionarios para más de 20 dialectos del español, incluyendo:

- 🇪🇸 España (es, es-ES)
- 🇦🇷 Argentina (es-AR)
- 🇲🇽 México (es-MX)
- 🇨🇴 Colombia (es-CO)
- 🇨🇱 Chile (es-CL)
- 🇵🇪 Perú (es-PE)
- 🇨🇺 Cuba (es-CU)
- 🇺🇸 Estados Unidos (es-US)
- Y muchos más

Cada dialecto está disponible en distintas variantes:

- **Marcadores**: -e, -x, @ 
- **Modos**: Reemplazo (agresivo), Adición (conservador)

### Fuentes de Diccionarios

El proyecto utiliza diccionarios base ubicados en la carpeta `input_dictionaries/`. Si deseas añadir un nuevo diccionario de dialecto:

1. Coloca el archivo .dic en un subdirectorio de `input_dictionaries/`
2. Ejecuta `python scripts/process_dictionaries.py` para procesarlo
3. Los diccionarios generados estarán en `public/dictionaries/dialectos/`

### Como librería en tu código

```python
from conversor_inclusivo import ConversorInclusivo

# Crear una instancia del conversor (personalizar marcador y modo)
conversor = ConversorInclusivo(marker='e', mode='aggressive')

# Cargar configuración personalizada
conversor.load_config(
    rules_path="config/rules.json",
    exceptions_path="config/exceptions.txt", 
    invariables_path="config/invariables.txt",
    exclusions_path="config/exclusions.json",
    neologisms_path="config/neologisms.txt"
)

# Procesar un archivo
conversor.procesar_archivo("mi_diccionario.dic", "mi_diccionario_inclusivo.dic")

# Generar formas inclusivas de palabras específicas
formas_inclusivas = conversor.generar_formas_inclusivas("amigo")  # Devuelve ["amige"]
resultado = conversor.procesar_palabra("arquitecto")  # Con modo agresivo: ["arquitecte"]
```

### Uso de los Diccionarios en Aplicaciones

Los diccionarios generados pueden integrarse en diferentes aplicaciones:

#### Correctores Ortográficos (formato Hunspell)

1. **LibreOffice/OpenOffice**:
   ```bash
   # Linux: Copiar al directorio de usuario
   cp public/dictionaries/dialectos/es-XX/es-XX_inclusive_aggressive_e.dic ~/.config/libreoffice/4/user/wordbook/
   cp public/dictionaries/dialectos/es-XX/es-XX_inclusive_aggressive_e.aff ~/.config/libreoffice/4/user/wordbook/
   
   # macOS:
   cp public/dictionaries/dialectos/es-XX/es-XX_inclusive_aggressive_e.* ~/Library/Application\ Support/LibreOffice/4/user/wordbook/
   
   # Windows:
   # Copiar a %APPDATA%\LibreOffice\4\user\wordbook\
   ```

2. **Firefox**:
   - Ir a Configuración > Idioma
   - Seleccionar "Comprobar la ortografía"
   - Usar "Agregar diccionarios" e importar los archivos .dic y .aff

3. **Aplicaciones basadas en Hunspell**:
   ```bash
   # Instalar localmente
   hunspell -d /ruta/a/diccionarios/es-XX_inclusive_aggressive_e
   ```

#### Aplicaciones Web (formato JSON)

1. **JavaScript (Node.js)**:
   ```javascript
   const fs = require('fs');
   
   // Cargar diccionario
   const dictionary = JSON.parse(
     fs.readFileSync('public/dictionaries/es_inclusive.json', 'utf8')
   );
   
   // Comprobar una palabra
   function checkWord(word) {
     return dictionary.words.includes(word.toLowerCase());
   }
   ```

2. **Integración con TypeScript**:
   ```typescript
   import { readFileSync } from 'fs';
   
   interface Dictionary {
     name: string;
     version: string;
     description: string;
     words: string[];
   }
   
   const loadDictionary = (path: string): Dictionary => {
     return JSON.parse(readFileSync(path, 'utf8'));
   };
   
   const dictionary = loadDictionary('public/dictionaries/es_inclusive.json');
   ```

3. **Uso en navegadores**:
   ```html
   <script>
   fetch('/dictionaries/es_inclusive.json')
     .then(response => response.json())
     .then(dictionary => {
       // Función para verificar palabras
       window.checkWord = word => dictionary.words.includes(word.toLowerCase());
     });
   </script>
   ```

#### Descarga para Usuarios Finales

Los usuarios pueden descargar los archivos ZIP que contienen tanto el formato JSON como Hunspell:

1. Ofrecer los archivos ZIP en tu sitio web
2. Proporcionar instrucciones para cada plataforma
3. Ofrecer variantes según dialecto y preferencias (-e, -x, @)

## 🔧 Personalización

Puedes personalizar el comportamiento del conversor de varias formas:

### Mediante archivos de configuración

Crea archivos de configuración para definir reglas, excepciones y listas:

- **rules.json**: Define patrones regex y reemplazos
- **exceptions.txt**: Lista de excepciones específicas (palabra:forma_inclusiva)
- **invariables.txt**: Palabras que no deben modificarse
- **exclusions.json**: Categorías de exclusiones por tipo
- **neologisms.txt**: Neologismos inclusivos a incluir

### Mediante código

```python
conversor = ConversorInclusivo(marker='e', mode='aggressive')

# Añadir excepciones propias
conversor.exceptions["palabra"] = "forma_inclusiva"

# Agregar palabras que no deben modificarse
conversor.invariables.add("termino_invariable")

# Modificar reglas de transformación
conversor.rules.append((r'ion$', 'ione'))  # Para palabras terminadas en -ión
```

## 📚 Formatos soportados

- **Hunspell** (.dic/.aff): Utilizado por LibreOffice, Firefox, Chrome
- **Listas de palabras** (.txt): Archivos de texto con una palabra por línea
- **JSON** (.json): Diccionarios estructurados para aplicaciones web

Los diccionarios generados se crean en los siguientes formatos:

- Archivos JSON para uso en aplicaciones web
- Archivos Hunspell (.dic) para uso en correctores ortográficos
- Archivos ZIP que contienen ambos formatos para facilitar la distribución

### Estructura de Archivos

```
public/dictionaries/
├── es_inclusive.json             # Diccionario JSON principal
├── es_inclusive.zip              # Versión comprimida
├── es-XX_inclusive_MODE_MARKER.* # Variantes por dialecto
└── dialectos/                    # Directorio de dialectos
    ├── index.json                # Índice de todos los dialectos
    ├── README.md                 # Documentación de dialectos
    └── es-XX/                    # Directorio por dialecto
        ├── es-XX_inclusive_aggressive_e.dic   # Hunspell (reemplazo, -e)
        ├── es-XX_inclusive_aggressive_e.json  # JSON (reemplazo, -e)
        ├── es-XX_inclusive_aggressive_x.*     # Variante con -x
        ├── es-XX_inclusive_aggressive_@.*     # Variante con @
        └── es-XX_inclusive_conservative_*.*   # Variantes conservadoras
```

## 🔍 Reglas de transformación

El sistema aplica las siguientes transformaciones principales:

| Terminación Estándar | Inclusivo (-e) | Ejemplo Original | Ejemplo Inclusivo |
|----------------------|----------------|------------------|-------------------|
| -o (masculino)       | -e             | amigo            | amige            |
| -a (femenino)        | -e             | amiga            | amige            |
| -os (plural masc.)   | -es            | amigos           | amiges           |
| -as (plural fem.)    | -es            | amigas           | amiges           |
| -or/-ora             | -ore           | profesor/a       | profesore         |
| -dor/-dora           | -dore          | trabajador/a     | trabajadore       |

Consulta la documentación para ver la lista completa de transformaciones.

## 🔄 Limitaciones y consideraciones

- El sistema no puede determinar automáticamente cuándo es apropiado usar lenguaje inclusivo según el contexto
- Algunas transformaciones pueden generar ambigüedades con palabras existentes
- El nivel de aceptación de las formas inclusivas varía según región y contexto social
- Las palabras heterogéneas (ej: hombre/mujer) no tienen siempre una forma inclusiva única y aceptada

## 📊 Estadísticas y Rendimiento

Durante la conversión, el sistema muestra estadísticas útiles:

- Total de palabras procesadas
- Palabras modificadas
- Excepciones aplicadas
- Palabras sin cambios

### Rendimiento por Dialecto

El sistema procesa más de 20 dialectos del español, con diferentes tamaños de diccionario:

| Dialecto | Original | Inclusivo (Reemplazo) | Inclusivo (Adición) |
|----------|----------|-----------------|----------------|
| Argentina (es-AR) | ~56,500 | ~51,300 | ~81,600 |
| México (es-MX) | ~58,200 | ~53,000 | ~84,300 |
| Colombia (es-CO) | ~61,500 | ~56,200 | ~90,000 |
| España (es-ES) | ~71,900 | ~66,600 | ~106,000 |
| Filipinas (es-PH) | ~67,000 | ~61,700 | ~98,000 |

Los resultados pueden variar según el marcador inclusivo (-e, -x, @) y el modo seleccionado.

## 🌎 Creando Diccionarios para Otros Idiomas

Aunque el proyecto está diseñado inicialmente para español, el sistema puede adaptarse a otros idiomas con marcas de género gramaticales:

### Pasos para adaptar a un nuevo idioma

1. **Crea archivo de reglas**: Define las transformaciones específicas del idioma
   ```json
   {
     "rules": [
       {"pattern": "patrón_regex", "replacement": "reemplazo"}
     ]
   }
   ```

2. **Define excepciones**: Palabras que requieren tratamiento especial
   ```
   palabra_original:forma_inclusiva
   otra_palabra:su_forma_inclusiva
   ```

3. **Lista de invariables**: Palabras que no deben modificarse
   ```
   palabra_invariable1
   palabra_invariable2
   ```

4. **Modifica la clase ConversorInclusivo**: Extiende o adapta la clase para las particularidades del idioma

### Ejemplos de otros idiomas

- **Italiano**: Transformaciones como `-o/-a` → `-ə`
- **Francés**: Transformaciones como `-eur/-euse` → `-eurse`
- **Portugués**: Transformaciones como `-o/-a` → `-e`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Puedes ayudar de varias formas:

- Mejorar las reglas de transformación
- Añadir excepciones relevantes o nuevos dialectos
- Optimizar algoritmos y rendimiento
- Ampliar la documentación y ejemplos
- Reportar errores o comportamientos inesperados
- Adaptar el sistema a otros idiomas

## 📄 Licencia

Este proyecto está licenciado bajo [MIT License](LICENSE).

## ✒️ Autor

- [@rabble](https://github.com/rabble) - Idea original y desarrollo

## 📚 Referencias

- [Guía de lenguaje inclusivo en español](https://link-a-guia.com)
- [Hunspell Documentation](https://link-a-documentacion.com)
- [Estudios sociolingüísticos del español rioplatense](https://link-a-estudios.com)