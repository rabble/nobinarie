#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Fix dialect dictionaries and create index file.
"""

import os
import json
import shutil
from pathlib import Path

def main():
    """Fix the dialect dictionaries and create an index."""
    print("Fixing dialect dictionaries and creating index...")
    
    # Base directories
    dialectos_dir = Path('public/dictionaries/dialectos')
    main_dict_dir = Path('public/dictionaries')
    
    # Ensure the main dictionary directory exists
    main_dict_dir.mkdir(exist_ok=True, parents=True)
    
    # Create an index.json file for the dialect dictionaries
    index = {
        "dialectos": []
    }
    
    # Process each dialect directory
    dialect_dirs = [d for d in dialectos_dir.iterdir() if d.is_dir()]
    
    # List of Spanish-speaking countries with their codes and names
    countries = {
        "es-AR": "Argentina",
        "es-BO": "Bolivia",
        "es-CL": "Chile",
        "es-CO": "Colombia",
        "es-CR": "Costa Rica",
        "es-CU": "Cuba",
        "es-DO": "República Dominicana",
        "es-EC": "Ecuador",
        "es-ES": "España",
        "es-GT": "Guatemala",
        "es-HN": "Honduras",
        "es-MX": "México",
        "es-NI": "Nicaragua",
        "es-PA": "Panamá",
        "es-PE": "Perú",
        "es-PH": "Filipinas",
        "es-PR": "Puerto Rico",
        "es-PY": "Paraguay",
        "es-SV": "El Salvador",
        "es-US": "Estados Unidos",
        "es-UY": "Uruguay",
        "es-VE": "Venezuela",
        "es": "Español (General)"
    }
    
    for dialect_dir in dialect_dirs:
        dialect_code = dialect_dir.name
        
        # Skip the es_ES directory which was incorrectly named
        if dialect_code == "input_dictionaries":
            continue
        
        # Look for all JSON files in the dialect directory
        json_files = list(dialect_dir.glob("*.json"))
        if not json_files:
            print(f"No JSON files found in {dialect_dir}, skipping")
            continue
        
        # Process each JSON file
        for json_file in json_files:
            # Read the JSON file
            try:
                with open(json_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                
                # Get metadata
                name = data.get('name', f'Español Inclusivo - {dialect_code}')
                description = data.get('description', f'Diccionario con términos inclusivos en español para {dialect_code}')
                word_count = len(data.get('words', []))
                
                # Get mode and marker from filename
                mode_marker = json_file.stem.split('_inclusive_')[1] if '_inclusive_' in json_file.stem else "aggressive_e"
                mode, marker = mode_marker.split('_')
                
                # Create entry for index
                entry = {
                    "code": dialect_code,
                    "name": countries.get(dialect_code, dialect_code),
                    "file": json_file.name,
                    "word_count": word_count,
                    "mode": mode,
                    "marker": marker,
                    "description": description
                }
                
                index["dialectos"].append(entry)
                
                # Copy the JSON file to the main dictionaries directory
                main_json_path = main_dict_dir / json_file.name
                shutil.copy(json_file, main_json_path)
                print(f"Copied {json_file} to {main_json_path}")
                
                # Copy the ZIP file to the main dictionaries directory if it exists
                zip_file = json_file.with_suffix('.zip')
                if zip_file.exists():
                    main_zip_path = main_dict_dir / zip_file.name
                    shutil.copy(zip_file, main_zip_path)
                    print(f"Copied {zip_file} to {main_zip_path}")
                
            except Exception as e:
                print(f"Error processing {json_file}: {e}")
    
    # Write the index file
    index_path = dialectos_dir / "index.json"
    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, indent=2)
    
    # Copy the index file to the main dictionaries directory
    main_index_path = main_dict_dir / "dialectos.json"
    shutil.copy(index_path, main_index_path)
    
    print(f"Created dialect index file: {index_path}")
    print(f"Copied index to: {main_index_path}")
    
    # Create a markdown file listing all the dictionaries
    md_path = dialectos_dir / "README.md"
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write("# Diccionarios en Español Inclusivo por Dialecto\n\n")
        f.write("Este directorio contiene diccionarios inclusivos para diferentes dialectos del español.\n\n")
        
        f.write("## Dialectos disponibles\n\n")
        
        # Sort entries by country name
        sorted_entries = sorted(index["dialectos"], key=lambda x: x["name"])
        
        for entry in sorted_entries:
            marker_display = {'e': '-e', 'x': '-x', '@': '@'}
            mode_display = {'aggressive': 'Reemplazo', 'conservative': 'Adición'}
            
            marker_text = marker_display.get(entry["marker"], entry["marker"])
            mode_text = mode_display.get(entry["mode"], entry["mode"])
            
            f.write(f"### {entry['name']} ({entry['code']})\n\n")
            f.write(f"- **Palabras**: {entry['word_count']}\n")
            f.write(f"- **Modo**: {mode_text}\n")
            f.write(f"- **Marcador**: {marker_text}\n")
            f.write(f"- **Archivo**: [{entry['file']}](./dialectos/{entry['code']}/{entry['file']})\n\n")
    
    print(f"Created markdown README: {md_path}")
    print("Dialect dictionary fixes complete!")

if __name__ == "__main__":
    main()