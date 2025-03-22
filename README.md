# Diccionario de Corrección Ortográfica Inclusivo

Un conversor y sistema de corrección ortográfica que reconoce y valida el lenguaje inclusivo en español rioplatense.

## 📋 Descripción

Este proyecto permite convertir diccionarios de corrección ortográfica estándar a versiones inclusivas que reconocen terminaciones en `-e`, `-x` y `@` como alternativas válidas a las formas tradicionales con marca de género en español. Está especialmente diseñado para el español rioplatense (Argentina y Uruguay), donde el uso del lenguaje inclusivo ha ganado popularidad.

El sistema procesa múltiples formatos de diccionarios (Hunspell, JSON, SQLite, XML, listas de palabras) y les añade el soporte para formas inclusivas con terminaciones alternativas, manteniendo la coherencia gramatical y respetando las particularidades lingüísticas de la región.

## ✨ Características

- Conversión de diccionarios estándar a versiones inclusivas
- Soporte para múltiples formatos (.dic/.aff, .txt, .json, .xml, .db)
- Reglas de transformación para diferentes terminaciones de género
- Manejo de excepciones y casos especiales
- Soporte para artículos, pronombres y otras categorías gramaticales
- Adaptado especialmente al español rioplatense
- Preservación de palabras epicenas e invariables en género

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/rabble/nobinarie.git
cd diccionario-inclusivo

# Instalar dependencias
pip install -r requirements.txt
```

## 💻 Uso

### Conversor de diccionarios

```bash
# Convertir un diccionario Hunspell
python conversor_inclusivo.py diccionario_español.dic

# Especificar archivo de salida
python conversor_inclusivo.py diccionario_español.dic -o diccionario_inclusivo.dic

# Convertir una lista de palabras
python conversor_inclusivo.py palabras_español.txt -o palabras_inclusivas.txt
```

### Como librería en tu código

```python
from conversor_inclusivo import ConversorInclusivo

# Crear una instancia del conversor
conversor = ConversorInclusivo()

# Procesar un archivo
conversor.procesar_archivo("mi_diccionario.dic", "mi_diccionario_inclusivo.dic")

# Generar una forma inclusiva de una palabra específica
palabra_inclusiva = conversor.generar_forma_inclusiva("amigo")  # Devuelve "amigue"
```

### Integración con corrector ortográfico

El diccionario generado puede utilizarse con aplicaciones que soporten Hunspell:

- LibreOffice/OpenOffice: Coloca los archivos .dic y .aff en la carpeta de diccionarios
- Navegadores: Importa los archivos mediante la configuración de idiomas
- Aplicaciones basadas en SQLite: Utiliza directamente la base de datos generada

## 🔧 Personalización

Puedes personalizar el comportamiento del conversor modificando sus reglas y excepciones:

```python
conversor = ConversorInclusivo()

# Añadir excepciones propias
conversor.excepciones["palabra"] = "forma_inclusiva"

# Agregar palabras que no deben modificarse
conversor.no_modificar.add("termino_invariable")

# Modificar reglas de transformación
conversor.reglas.append((r'ion$', 'ione'))  # Para palabras terminadas en -ión
```

## 📚 Formatos soportados

- **Hunspell** (.dic/.aff): Utilizado por LibreOffice, Firefox, Chrome
- **Listas de palabras** (.txt, .wl): Archivos de texto con una palabra por línea
- **JSON** (.json): Diccionarios estructurados para aplicaciones web
- **XML** (.xml, .dict): Formatos XML como los usados por LanguageTool
- **SQLite** (.db, .sqlite): Bases de datos para aplicaciones móviles y web

## 🔍 Reglas de transformación

El sistema aplica las siguientes transformaciones principales:

| Terminación Estándar | Inclusivo (-e) | Ejemplo Original | Ejemplo Inclusivo |
|----------------------|----------------|------------------|-------------------|
| -o (masculino)       | -e             | amigo            | amigue            |
| -a (femenino)        | -e             | amiga            | amigue            |
| -os (plural masc.)   | -es            | amigos           | amigues           |
| -as (plural fem.)    | -es            | amigas           | amigues           |
| -or/-ora             | -ore           | profesor/a       | profesore         |
| -dor/-dora           | -dore          | trabajador/a     | trabajadore       |

Consulta la documentación para ver la lista completa de transformaciones.

## 🔄 Limitaciones y consideraciones

- El sistema no puede determinar automáticamente cuándo es apropiado usar lenguaje inclusivo según el contexto
- Algunas transformaciones pueden generar ambigüedades con palabras existentes
- El nivel de aceptación de las formas inclusivas varía según región y contexto social
- Las palabras heterogéneas (ej: hombre/mujer) no tienen siempre una forma inclusiva única y aceptada

## 📊 Estadísticas

Durante la conversión, el sistema muestra estadísticas útiles:

- Total de palabras procesadas
- Palabras modificadas
- Excepciones aplicadas
- Palabras sin cambios

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Puedes ayudar de varias formas:

- Mejorar las reglas de transformación
- Añadir excepciones relevantes
- Optimizar algoritmos
- Ampliar la documentación
- Reportar errores o comportamientos inesperados

## 📄 Licencia

Este proyecto está licenciado bajo [MIT License](LICENSE).

## ✒️ Autor

- [@rabble](https://github.com/rabble) - Idea original y desarrollo

## 📚 Referencias

- [Guía de lenguaje inclusivo en español](https://link-a-guia.com)
- [Hunspell Documentation](https://link-a-documentacion.com)
- [Estudios sociolingüísticos del español rioplatense](https://link-a-estudios.com)
