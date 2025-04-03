#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Batch process all Spanish dialect dictionaries to inclusive versions.
"""

import os
import sys
import json
import shutil
import zipfile
from pathlib import Path
from typing import Dict, List, Tuple

# Ensure src directory is discoverable
project_root = Path(__file__).parent.parent
src_path = project_root / 'src'
sys.path.insert(0, str(src_path))

from conversor_inclusivo import ConversorInclusivo

def get_dialect_info(dialect_path: Path) -> Dict:
    """Get dialect information from package.json."""
    try:
        pkg_path = dialect_path / "package.json"
        if pkg_path.exists():
            with open(pkg_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                return {
                    "name": data.get("name", dialect_path.name),
                    "description": data.get("description", f"Spanish dictionary for {dialect_path.name}"),
                    "version": data.get("version", "1.0.0"),
                    "country": data.get("spellcheck-info", {}).get("country", "")
                }
    except Exception as e:
        print(f"Error reading package.json for {dialect_path}: {e}")
    
    # Default values if package.json can't be read
    return {
        "name": dialect_path.name,
        "description": f"Spanish dictionary for {dialect_path.name}",
        "version": "1.0.0",
        "country": ""
    }

def process_dialect(
    dialect_path: Path, 
    output_dir: Path, 
    mode: str, 
    marker: str
) -> Tuple[str, int]:
    """Process a single dialect dictionary."""
    dialect_code = dialect_path.name
    
    # Get information about the dialect
    dialect_info = get_dialect_info(dialect_path)
    dialect_name = dialect_info["name"]
    country = dialect_info.get("country", "")
    
    # Find the dictionary file
    dic_file = None
    for file in dialect_path.glob("*.dic"):
        if file.name != "index.dic":
            dic_file = file
            break
    
    if not dic_file:
        dic_file = dialect_path / "index.dic"
    
    if not dic_file.exists():
        print(f"  No dictionary file found for {dialect_code}")
        return dialect_code, 0
    
    print(f"  Processing {dialect_code} dictionary: {dic_file}")
    
    # Create output directory for this dialect
    dialect_output_dir = output_dir / dialect_code
    dialect_output_dir.mkdir(exist_ok=True)
    
    # File names for output
    hunspell_output = dialect_output_dir / f"{dialect_code}_inclusive_{mode}_{marker}.dic"
    json_output = dialect_output_dir / f"{dialect_code}_inclusive_{mode}_{marker}.json"
    
    # Initialize converter
    converter = ConversorInclusivo(marker=marker, mode=mode)
    
    # Process the dictionary
    try:
        # Read the dictionary
        words = converter._read_hunspell_dic(str(dic_file))
        print(f"    Read {len(words)} words from {dic_file}")
        
        # Process words
        processed_words = []
        for word in words:
            processed_words.extend(converter.procesar_palabra(word))
        
        # Remove duplicates
        processed_words = list(dict.fromkeys(processed_words))
        print(f"    Processed into {len(processed_words)} words")
        
        # Write Hunspell file
        with open(hunspell_output, 'w', encoding='utf-8') as f:
            # Write the word count as the first line
            f.write(f"{len(processed_words)}\n")
            
            # Write each word
            for word in sorted(processed_words):
                f.write(f"{word}\n")
        
        # Copy the .aff file if it exists
        aff_file = dic_file.with_suffix('.aff')
        if aff_file.exists():
            shutil.copy(aff_file, hunspell_output.with_suffix('.aff'))
        
        # Write JSON file
        country_display = f" ({country})" if country else ""
        marker_display = {'e': '-e', 'x': '-x', '@': '@'}
        mode_display = {'aggressive': 'Reemplazo', 'conservative': 'Adición'}
        
        json_data = {
            'name': f"Español Inclusivo - {dialect_code}{country_display} ({mode_display[mode]}, {marker_display[marker]})",
            'version': dialect_info["version"],
            'description': f"Diccionario con términos inclusivos en español para {dialect_code}{country_display}, usando {marker_display[marker]} como marcador",
            'words': sorted(processed_words)
        }
        
        with open(json_output, 'w', encoding='utf-8') as f:
            json.dump(json_data, f, ensure_ascii=False, indent=2)
        
        print(f"    Created Hunspell file: {hunspell_output}")
        print(f"    Created JSON file: {json_output}")
        
        return dialect_code, len(processed_words)
        
    except Exception as e:
        print(f"  Error processing {dialect_code}: {e}")
        return dialect_code, 0

def create_zip_file(output_dir: Path, dialect_code: str, mode: str, marker: str, word_count: int):
    """Create ZIP file for a processed dictionary."""
    dialect_output_dir = output_dir / dialect_code
    
    # Define file paths
    json_file = dialect_output_dir / f"{dialect_code}_inclusive_{mode}_{marker}.json"
    zip_path = dialect_output_dir / f"{dialect_code}_inclusive_{mode}_{marker}.zip"
    
    if not json_file.exists():
        print(f"  JSON file not found for {dialect_code}, skipping ZIP creation")
        return
    
    try:
        # Read JSON file to get dictionary metadata
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        name = data.get('name', f'Español Inclusivo - {dialect_code}')
        description = data.get('description', f'Diccionario con términos inclusivos en español para {dialect_code}')
        
        # Create README content
        readme_content = f"# {name}\n\n"
        readme_content += f"{description}\n\n"
        readme_content += f"Contiene {word_count} palabras.\n\n"
        readme_content += "## Uso\n\n"
        readme_content += "Este diccionario puede usarse con correctores ortográficos que soportan formato JSON o Hunspell.\n\n"
        readme_content += "## Licencia\n\n"
        readme_content += "Este diccionario se distribuye bajo la misma licencia que el diccionario original, con modificaciones para inclusividad.\n"
        
        # Write README to temp file
        readme_path = dialect_output_dir / "README.md"
        with open(readme_path, 'w', encoding='utf-8') as f:
            f.write(readme_content)
        
        # Create ZIP file
        with zipfile.ZipFile(zip_path, 'w') as zipf:
            # Add the JSON file
            zipf.write(json_file, arcname=json_file.name)
            
            # Add the README file
            zipf.write(readme_path, arcname="README.md")
            
            # Add Hunspell files if they exist
            hunspell_dic = dialect_output_dir / f"{dialect_code}_inclusive_{mode}_{marker}.dic"
            hunspell_aff = dialect_output_dir / f"{dialect_code}_inclusive_{mode}_{marker}.aff"
            
            if hunspell_dic.exists():
                zipf.write(hunspell_dic, arcname=hunspell_dic.name)
            
            if hunspell_aff.exists():
                zipf.write(hunspell_aff, arcname=hunspell_aff.name)
        
        # Remove temp README
        os.remove(readme_path)
        
        print(f"  Created ZIP file: {zip_path}")
        
        # Copy to main dictionaries directory for easier access
        main_zip_path = output_dir.parent / "dictionaries" / f"{dialect_code}_inclusive_{mode}_{marker}.zip"
        shutil.copy(zip_path, main_zip_path)
        print(f"  Copied to main directory: {main_zip_path}")
        
    except Exception as e:
        print(f"  Error creating ZIP for {dialect_code}: {e}")

def create_summary(output_dir: Path, processed: List[Tuple[str, int]]):
    """Create summary file listing all processed dictionaries."""
    summary_path = output_dir / "summary.md"
    
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write("# Diccionarios en Español Inclusivo\n\n")
        f.write("Este directorio contiene diccionarios en español inclusivo para diferentes dialectos.\n\n")
        
        f.write("## Dialectos procesados\n\n")
        
        # Sort by dialect code
        processed.sort(key=lambda x: x[0])
        
        for dialect_code, word_count in processed:
            if word_count > 0:
                f.write(f"- **{dialect_code}**: {word_count} palabras\n")
            else:
                f.write(f"- ~~{dialect_code}~~: Procesamiento fallido\n")
    
    print(f"Created summary file: {summary_path}")

def main():
    """Main function to batch process all dialects."""
    print("Starting batch processing of Spanish dialect dictionaries...")
    
    # Base directories
    input_dir = Path('input_dictionaries')
    output_base_dir = Path('public/dictionaries/dialectos')
    output_base_dir.mkdir(exist_ok=True, parents=True)
    
    # Configuration
    mode = "aggressive"  # or "conservative"
    marker = "e"  # or "x" or "@"
    
    # Find all dialect directories
    dialect_dirs = [d for d in input_dir.iterdir() if d.is_dir() and d.name.startswith("es")]
    
    # Add the base Spanish directory for es_ES.dic
    if (input_dir / "es_ES.dic").exists():
        # Create a virtual dialect directory for es_ES
        dialect_dirs.append(input_dir)
    
    print(f"Found {len(dialect_dirs)} dialect directories")
    
    # Process each dialect
    processed = []
    for dialect_dir in dialect_dirs:
        dialect_code = dialect_dir.name
        if dialect_dir == input_dir:
            dialect_code = "es_ES"
            
        print(f"Processing dialect: {dialect_code}")
        dialect_code, word_count = process_dialect(dialect_dir, output_base_dir, mode, marker)
        processed.append((dialect_code, word_count))
        
        if word_count > 0:
            create_zip_file(output_base_dir, dialect_code, mode, marker, word_count)
    
    # Create summary
    create_summary(output_base_dir, processed)
    
    print("\nBatch processing complete!")
    print(f"Processed {len(processed)} dialect dictionaries")
    print(f"Output directory: {output_base_dir}")

if __name__ == "__main__":
    main()