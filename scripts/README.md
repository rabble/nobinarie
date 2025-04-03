# Scripts Directory

This directory contains scripts for the Nobinarie project.

## Dictionary Converter Scripts

### Basic Scripts

#### `conversor_inclusivo.py`

A command-line tool for converting standard Spanish dictionaries to inclusive language versions.

```bash
python conversor_inclusivo.py path/to/source_dictionary -o output_file [options]
```

Options:
- `-o, --output`: Output file path
- `-f, --format`: Dictionary format (json, plaintext, hunspell)
- `--mode`: Conversion mode (aggressive, conservative)
- `--marker`: Inclusive marker to use (e, x, @)
- `--verbose`: Enable verbose output
- `--stats`: Show conversion statistics

#### `generar_diccionarios.py`

A script to generate multiple dictionary variants (different modes and markers) from a source dictionary.

```bash
python generar_diccionarios.py path/to/source_dictionary [options]
```

Options:
- `-o, --output-dir`: Output directory
- `--markers`: Markers to use (e, x, @)
- `--modes`: Processing modes (aggressive, conservative)
- `--formats`: Output formats (json, plaintext, hunspell)

### Dialect Processing Scripts

#### `process_all_dialects.py`

Process all Spanish dialect dictionaries in the input_dictionaries directory.

```bash
python process_all_dialects.py
```

This script:
- Processes all dialect directories under input_dictionaries/
- Generates inclusive dictionaries for each dialect (default: -e marker, aggressive mode)
- Creates JSON, Hunspell and ZIP files for each dialect

#### `process_all_variants.py`

Process selected dialects with all marker and mode variants.

```bash
python process_all_variants.py
```

This script:
- Processes selected dialects (configurable in the script)
- Generates all variants (all markers and modes) for each dialect
- Creates summary files for all generated dictionaries

#### `fix_dialect_dictionaries.py`

Create indexes and correct file locations for dialect dictionaries.

```bash
python fix_dialect_dictionaries.py
```

This script:
- Creates index.json and README.md files for dialect dictionaries
- Copies files to the main dictionaries directory for easier access

#### `generate_json_dictionary.py`

Generates JSON dictionary from Hunspell file with proper metadata.

```bash
python generate_json_dictionary.py
```

#### `zip_dictionaries.py`

Creates ZIP files from JSON dictionaries for web distribution.

```bash
python zip_dictionaries.py
```

## Usage Instructions

### Converting a single dictionary

```bash
# Convert a dictionary with default options (-e marker, aggressive mode)
python conversor_inclusivo.py input_dictionaries/es_ES.dic -o public/dictionaries/es_inclusive_hunspell.dic

# Convert with specific mode and marker
python conversor_inclusivo.py input_dictionaries/es_ES.dic -o public/dictionaries/es_inclusive_x.dic --mode aggressive --marker x
```

### Master Processing Script

A master script is provided to run all processing steps in sequence:

```bash
# Process all dialects with default settings
python process_dictionaries.py

# Process selected dialects with all variants (e/x/@, aggressive/conservative)
python process_dictionaries.py --all-variants --dialects es-AR,es-MX,es

# Process all dialects with all variants (warning: this may take a long time)
python process_dictionaries.py --all-variants --process-all-dialects
```

### Processing Individual Steps

To run individual processing steps:

```bash
# Process all dialects with default options (-e marker, aggressive mode)
python process_all_dialects.py

# Create proper indexes and fix file locations
python fix_dialect_dictionaries.py

# Process specific dialects with all variants
python process_all_variants.py

# Create ZIP files for web distribution
python zip_dictionaries.py
```

## Dictionary Options

### Conversion Modes

- `aggressive` - Replace gendered forms with inclusive forms (fewer words)
- `conservative` - Keep gendered forms and add inclusive forms (more words)

### Inclusive Markers

- `e` - Use "-e" as marker (amigue, profesore)
- `x` - Use "-x" as marker (amigx, profesxr)
- `@` - Use "@" as marker (amig@, profes@r)

## Dictionary Sources

You must provide your own source Spanish dictionaries. The scripts transform existing dictionaries you provide.

This project includes various Spanish dialect dictionaries in the input_dictionaries directory.
