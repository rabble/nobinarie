#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script to create zip files from dictionary JSON files.
"""

import os
import zipfile
import json
from pathlib import Path

def main():
    """Create zip files from dictionary JSON files."""
    print("Creating dictionary zip files...")
    
    # Define directories
    dictionaries_dir = Path('public/dictionaries')
    
    # List all JSON files in dictionaries directory
    json_files = [f for f in dictionaries_dir.glob('*.json') if f.is_file()]
    
    for json_file in json_files:
        # Skip any non-dictionary files
        if not json_file.name.startswith('es_'):
            continue
        
        print(f"Processing {json_file}...")
        
        # Create a zip file with the same base name
        zip_path = dictionaries_dir / f"{json_file.stem}.zip"
        
        # Create a temporary README file
        readme_content = "# Diccionario en Español Inclusivo\n\n"
        readme_content += "Este archivo contiene un diccionario en español inclusivo para usar en correctores ortográficos y herramientas lingüísticas.\n"
        
        # Read JSON file to get dictionary metadata
        try:
            with open(json_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            name = data.get('name', 'Español Inclusivo')
            description = data.get('description', 'Diccionario con términos inclusivos en español')
            word_count = len(data.get('words', []))
            
            readme_content += f"\n## {name}\n\n"
            readme_content += f"{description}\n\n"
            readme_content += f"Contiene {word_count} palabras.\n"
            
        except Exception as e:
            print(f"  Error reading JSON file: {e}")
            continue
        
        # Create zip file
        try:
            with zipfile.ZipFile(zip_path, 'w') as zipf:
                # Add the JSON file
                zipf.write(json_file, arcname=f"{json_file.name}")
                
                # Add a README file
                readme_path = dictionaries_dir / "temp_readme.md"
                with open(readme_path, 'w', encoding='utf-8') as f:
                    f.write(readme_content)
                
                zipf.write(readme_path, arcname="README.md")
                
                # Remove temporary README
                os.remove(readme_path)
                
            print(f"  Created zip file: {zip_path}")
            
        except Exception as e:
            print(f"  Error creating zip file: {e}")
    
    print("Zip file creation complete!")

if __name__ == "__main__":
    main()