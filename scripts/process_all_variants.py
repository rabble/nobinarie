#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Process all Spanish dialect dictionaries with all variants (modes and markers).
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

def process_dialect_variant(
    dialect_path: Path, 
    output_dir: Path, 
    mode: str, 
    marker: str
) -> Tuple[str, int]:
    """Process a single dialect dictionary with a specific mode and marker."""
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
    
    print(f"  Processing {dialect_code} dictionary: {dic_file} (mode: {mode}, marker: {marker})")
    
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
        
        # Create ZIP file
        zip_path = dialect_output_dir / f"{dialect_code}_inclusive_{mode}_{marker}.zip"
        
        # Create README content
        readme_content = f"# Español Inclusivo - {dialect_code}{country_display} ({mode_display[mode]}, {marker_display[marker]})\n\n"
        readme_content += f"{json_data['description']}\n\n"
        readme_content += f"Contiene {len(processed_words)} palabras.\n\n"
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
            zipf.write(json_output, arcname=json_output.name)
            
            # Add the README file
            zipf.write(readme_path, arcname="README.md")
            
            # Add Hunspell files if they exist
            if hunspell_output.exists():
                zipf.write(hunspell_output, arcname=hunspell_output.name)
            
            if hunspell_output.with_suffix('.aff').exists():
                zipf.write(hunspell_output.with_suffix('.aff'), arcname=hunspell_output.with_suffix('.aff').name)
        
        # Remove temp README
        os.remove(readme_path)
        
        print(f"    Created ZIP file: {zip_path}")
        
        # Copy files to main dictionaries directory
        main_json_path = output_dir.parent / f"{dialect_code}_inclusive_{mode}_{marker}.json"
        main_zip_path = output_dir.parent / f"{dialect_code}_inclusive_{mode}_{marker}.zip"
        
        shutil.copy(json_output, main_json_path)
        shutil.copy(zip_path, main_zip_path)
        
        return dialect_code, len(processed_words)
        
    except Exception as e:
        print(f"  Error processing {dialect_code}: {e}")
        return dialect_code, 0

def main():
    """Main function to batch process all dialects with all variants."""
    print("Starting batch processing of all Spanish dialect variants...")
    
    # Base directories
    input_dir = Path('input_dictionaries')
    output_base_dir = Path('public/dictionaries/dialectos')
    output_base_dir.mkdir(exist_ok=True, parents=True)
    
    # Configurations to process
    configurations = [
        # Mode, Marker
        ("aggressive", "e"),
        ("aggressive", "x"),
        ("aggressive", "@"),
        ("conservative", "e"),
        ("conservative", "x"),
        ("conservative", "@")
    ]
    
    # Select which dialects to process (can be adjusted to process fewer for testing)
    process_all = True  # Set to True to process all dialects
    dialects_to_process = ["es-AR", "es-MX", "es"]  # Add more or set process_all to True
    
    # Find all dialect directories
    all_dialect_dirs = [d for d in input_dir.iterdir() if d.is_dir() and d.name.startswith("es")]
    
    # Filter dialect directories if not processing all
    if process_all:
        dialect_dirs = all_dialect_dirs
    else:
        dialect_dirs = [d for d in all_dialect_dirs if d.name in dialects_to_process]
    
    # Add the base Spanish directory for es_ES.dic if it's in the list to process
    if (input_dir / "es_ES.dic").exists() and (process_all or "es_ES" in dialects_to_process):
        # Create a virtual dialect directory
        es_es_dir = Path('input_dictionaries/es_ES')
        es_es_dir.mkdir(exist_ok=True)
        shutil.copy(input_dir / "es_ES.dic", es_es_dir / "es_ES.dic")
        dialect_dirs.append(es_es_dir)
    
    print(f"Found {len(dialect_dirs)} dialect directories to process")
    
    # Process each dialect with each configuration
    results = []
    for dialect_dir in dialect_dirs:
        dialect_code = dialect_dir.name
        print(f"Processing dialect: {dialect_code}")
        
        for mode, marker in configurations:
            result = process_dialect_variant(dialect_dir, output_base_dir, mode, marker)
            results.append((result[0], mode, marker, result[1]))
    
    # Create output summary
    summary_path = output_base_dir / "variants_summary.md"
    with open(summary_path, 'w', encoding='utf-8') as f:
        f.write("# Variantes de Diccionarios en Español Inclusivo\n\n")
        f.write("Este directorio contiene todas las variantes de diccionarios inclusivos para diferentes dialectos del español.\n\n")
        
        # Group by dialect
        dialects = {}
        for dialect, mode, marker, count in results:
            if dialect not in dialects:
                dialects[dialect] = []
            dialects[dialect].append((mode, marker, count))
        
        # Write summary for each dialect
        for dialect, variants in sorted(dialects.items()):
            f.write(f"## {dialect}\n\n")
            f.write("| Modo | Marcador | Palabras |\n")
            f.write("|------|----------|----------|\n")
            
            for mode, marker, count in variants:
                mode_display = {'aggressive': 'Reemplazo', 'conservative': 'Adición'}
                marker_display = {'e': '-e', 'x': '-x', '@': '@'}
                
                f.write(f"| {mode_display[mode]} | {marker_display[marker]} | {count} |\n")
            
            f.write("\n")
    
    print(f"Created variants summary file: {summary_path}")
    print("\nBatch processing complete!")
    print(f"Processed {len(results)} dialect variants")
    print(f"Output directory: {output_base_dir}")

if __name__ == "__main__":
    main()