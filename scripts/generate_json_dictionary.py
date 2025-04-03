#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Script to manually generate JSON dictionary from Hunspell dictionary.
"""

import json
import sys
from pathlib import Path

# Ensure src directory is discoverable
project_root = Path(__file__).parent.parent
src_path = project_root / 'src'
sys.path.insert(0, str(src_path))

from conversor_inclusivo import ConversorInclusivo

def main():
    """Generate JSON dictionary manually from Hunspell dictionary."""
    print("Starting manual dictionary generation...")
    
    input_file = 'input_dictionaries/es_ES.dic'
    output_file = 'public/dictionaries/es_inclusive_manual.json'
    
    # Create converter with desired settings
    ci = ConversorInclusivo(marker='e', mode='aggressive')
    
    # Read input words
    print(f"Reading from {input_file}...")
    words = ci._read_hunspell_dic(input_file)
    print(f"Read {len(words)} words")
    
    # Process words
    print("Processing words...")
    processed = []
    for word in words:
        processed.extend(ci.procesar_palabra(word))
    
    # Remove duplicates
    processed = list(set(processed))
    print(f"Processed into {len(processed)} words")
    
    # Prepare data for JSON
    data = {
        'name': 'Español Inclusivo (Reemplazo, -e)',
        'version': '1.0.0',
        'description': 'Diccionario con términos inclusivos en español, usando -e como marcador',
        'words': sorted(processed)
    }
    
    # Write to file
    print(f"Writing to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"Word count: {len(processed)}")
    print(f"Written to: {output_file}")
    print("Done!")

if __name__ == "__main__":
    main()