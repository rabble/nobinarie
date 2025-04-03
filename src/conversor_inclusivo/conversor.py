# -*- coding: utf-8 -*-

"""
Core logic for the inclusive dictionary converter.

This module defines the ConversorInclusivo class which handles the loading
of rules, exceptions, exclusions, and performs the word transformations.
"""

import re
import json
import os
from pathlib import Path
from typing import List, Dict, Set, Tuple, Optional, Union

class ConversorInclusivo:
    """
    Handles the conversion of Spanish words and dictionaries to inclusive forms.

    Attributes:
        rules (List[Tuple[str, str]]): List of regex patterns and replacements for transformations.
        exceptions (Dict[str, str]): Dictionary mapping specific words to their inclusive forms.
        invariables (Set[str]): Set of words that should never be modified.
        exclusions (Dict[str, Set[str]]): Dictionary categorizing words to exclude (e.g., 'epicene').
        neologisms (Set[str]): Set of specific inclusive neologisms to ensure are present.
        stats (Dict[str, int]): Dictionary to keep track of conversion statistics.
        marker (str): The marker character to use for inclusive forms ('e', 'x', '@').
        mode (str): The processing mode ('aggressive' = replace, 'conservative' = add).
    """

    def __init__(self, marker: str = 'e', mode: str = 'aggressive'):
        """
        Initializes the converter with default empty configurations.
        
        Args:
            marker: The marker to use for inclusive forms ('e', 'x', or '@'). Defaults to 'e'.
            mode: The processing mode ('aggressive' or 'conservative'). Defaults to 'aggressive'.
        """
        self.rules: List[Tuple[str, str]] = []
        self.exceptions: Dict[str, str] = {}
        self.invariables: Set[str] = set()
        self.exclusions: Dict[str, Set[str]] = {
            'epicene': set(),
            'neuter': set(),
            'invariable_grammar': set(), # Adverbs, prepositions etc.
            'ends_in_e_defined_gender': set(),
            'technical_loanwords': set(),
        }
        self.neologisms: Set[str] = set()
        self.stats: Dict[str, int] = {
            'processed': 0,
            'modified': 0,
            'exceptions_applied': 0,
            'excluded': 0,
            'neologisms_added': 0,
            'errors': 0,
        }
        
        # Set marker and mode
        self._set_marker(marker)
        self._set_mode(mode)
        
        # Initialize default rules
        self._initialize_rules()

    def _set_marker(self, marker: str):
        """
        Sets the marker for inclusive forms.
        
        Args:
            marker: The marker to use ('e', 'x', or '@').
        
        Raises:
            ValueError: If an invalid marker is provided.
        """
        if marker not in ['e', 'x', '@']:
            raise ValueError(f"Invalid marker: {marker}. Must be one of: 'e', 'x', '@'")
        self.marker = marker
        
    def _set_mode(self, mode: str):
        """
        Sets the processing mode.
        
        Args:
            mode: The mode to use ('aggressive' or 'conservative').
        
        Raises:
            ValueError: If an invalid mode is provided.
        """
        if mode not in ['aggressive', 'conservative']:
            raise ValueError(f"Invalid mode: {mode}. Must be one of: 'aggressive', 'conservative'")
        self.mode = mode
    
    def _initialize_rules(self):
        """Initialize the transformation rules based on the current marker."""
        self.rules = []
        
        if self.marker == 'e':
            # Basic vowel endings
            self.rules.extend([
                (r'o$', 'e'),       # amigo -> amigue
                (r'a$', 'e'),       # amiga -> amigue
                (r'os$', 'es'),     # amigos -> amigues
                (r'as$', 'es'),     # amigas -> amigues
                
                # Complex suffixes
                (r'or$', 'ore'),    # profesor -> profesore
                (r'ora$', 'ore'),   # profesora -> profesore
                (r'dor$', 'dore'),  # trabajador -> trabajadore
                (r'dora$', 'dore')  # trabajadora -> trabajadore
            ])
            
        elif self.marker == 'x':
            # Basic vowel endings with x marker
            self.rules.extend([
                (r'o$', 'x'),       # amigo -> amigx
                (r'a$', 'x'),       # amiga -> amigx
                (r'os$', 'xs'),     # amigos -> amigxs
                (r'as$', 'xs'),     # amigas -> amigxs
                
                # Complex suffixes
                (r'or$', 'xr'),     # profesor -> profesxr
                (r'ora$', 'xr'),    # profesora -> profesxr
                (r'dor$', 'dxr'),   # trabajador -> trabajadxr
                (r'dora$', 'dxr')   # trabajadora -> trabajadxr
            ])
            
        elif self.marker == '@':
            # Basic vowel endings with @ marker
            self.rules.extend([
                (r'o$', '@'),       # amigo -> amig@
                (r'a$', '@'),       # amiga -> amig@
                (r'os$', '@s'),     # amigos -> amig@s
                (r'as$', '@s'),     # amigas -> amig@s
                
                # Complex suffixes
                (r'or$', '@r'),     # profesor -> profes@r
                (r'ora$', '@r'),    # profesora -> profes@r
                (r'dor$', 'd@r'),   # trabajador -> trabajad@r
                (r'dora$', 'd@r')   # trabajadora -> trabajad@r
            ])

    def load_config(self, rules_path: Optional[str] = None, exceptions_path: Optional[str] = None,
                    invariables_path: Optional[str] = None, exclusions_path: Optional[str] = None,
                    neologisms_path: Optional[str] = None):
        """
        Loads configuration from specified files.

        Args:
            rules_path: Path to the rules configuration file.
            exceptions_path: Path to the exceptions list file.
            invariables_path: Path to the invariable words list file.
            exclusions_path: Path to the exclusion categories file.
            neologisms_path: Path to the neologisms list file.
        """
        if rules_path and os.path.exists(rules_path):
            self._load_rules(rules_path)
            
        if exceptions_path and os.path.exists(exceptions_path):
            self._load_exceptions(exceptions_path)
            
        if invariables_path and os.path.exists(invariables_path):
            self._load_invariables(invariables_path)
            
        if exclusions_path and os.path.exists(exclusions_path):
            self._load_exclusions(exclusions_path)
            
        if neologisms_path and os.path.exists(neologisms_path):
            self._load_neologisms(neologisms_path)

    def _load_rules(self, path: str):
        """
        Loads transformation rules from a JSON file.
        
        Expected format:
        {
            "rules": [
                {"pattern": "regex pattern", "replacement": "replacement"}
            ]
        }
        
        Args:
            path: Path to the rules JSON file.
        """
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            if 'rules' in data and isinstance(data['rules'], list):
                # Clear existing rules and load new ones
                self.rules = []
                for rule in data['rules']:
                    if 'pattern' in rule and 'replacement' in rule:
                        self.rules.append((rule['pattern'], rule['replacement']))
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error loading rules from {path}: {e}")

    def _load_exceptions(self, path: str):
        """
        Loads exceptions from a file (one exception per line, format: 'word:inclusive_form').
        
        Args:
            path: Path to the exceptions file.
        """
        try:
            with open(path, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#'):
                        parts = line.split(':', 1)
                        if len(parts) == 2:
                            word, inclusive_form = parts
                            self.exceptions[word.strip().lower()] = inclusive_form.strip()
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error loading exceptions from {path}: {e}")

    def _load_invariables(self, path: str):
        """
        Loads invariable words from a file (one word per line).
        
        Args:
            path: Path to the invariables file.
        """
        try:
            with open(path, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#'):
                        self.invariables.add(line.lower())
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error loading invariables from {path}: {e}")

    def _load_exclusions(self, path: str):
        """
        Loads exclusion categories from a JSON file.
        
        Expected format:
        {
            "epicene": ["palabra1", "palabra2"],
            "neuter": ["palabra3", "palabra4"],
            ...
        }
        
        Args:
            path: Path to the exclusions JSON file.
        """
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            for category in self.exclusions:
                if category in data and isinstance(data[category], list):
                    self.exclusions[category] = set(word.lower() for word in data[category])
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error loading exclusions from {path}: {e}")

    def _load_neologisms(self, path: str):
        """
        Loads neologisms from a file (one word per line).
        
        Args:
            path: Path to the neologisms file.
        """
        try:
            with open(path, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith('#'):
                        self.neologisms.add(line.lower())
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error loading neologisms from {path}: {e}")

    def generar_formas_inclusivas(self, palabra: str) -> List[str]:
        """
        Generates potential inclusive form(s) for a given word based on the current marker.

        Applies transformation rules, considering exceptions and exclusions.

        Args:
            palabra: The word to convert.

        Returns:
            A list containing the generated inclusive form(s), or an empty list
            if the word should not be modified or no rule applies.
        """
        self.stats['processed'] += 1
        palabra_lower = palabra.lower() # Work with lowercase for matching

        # 1. Check Exclusions & Invariables
        if palabra_lower in self.invariables:
            self.stats['excluded'] += 1
            return []
        for category in self.exclusions:
            if palabra_lower in self.exclusions[category]:
                self.stats['excluded'] += 1
                return []

        # 2. Check Exceptions
        if palabra_lower in self.exceptions:
            self.stats['exceptions_applied'] += 1
            # Return the exception, preserving original case if possible
            # (Simple case preservation for now)
            if palabra[0].isupper():
                 return [self.exceptions[palabra_lower].capitalize()]
            return [self.exceptions[palabra_lower]]

        # 3. Apply Transformation Rules based on current marker
        generated_forms = []
        modified = False
        
        for pattern, replacement in self.rules:
            if re.search(pattern, palabra_lower):
                new_word = re.sub(pattern, replacement, palabra)
                if palabra[0].isupper():
                    new_word = new_word.capitalize()
                generated_forms.append(new_word)
                modified = True
                break  # Apply only the first matching rule

        if modified:
            self.stats['modified'] += 1
            return generated_forms
        else:
            # Word processed but not modified by rules
            return []

    def procesar_palabra(self, palabra: str) -> List[str]:
        """
        Processes a word based on the current mode and marker.
        
        Args:
            palabra: The word to process.
            
        Returns:
            A list of words to include in the dictionary. If mode is 'aggressive',
            returns only the inclusive form(s). If mode is 'conservative', returns
            both the original word and inclusive form(s).
        """
        inclusive_forms = self.generar_formas_inclusivas(palabra)
        
        if not inclusive_forms:
            # Word was not modified (excluded or no rule applied)
            return [palabra]
            
        if self.mode == 'aggressive':
            # Return only the inclusive forms
            return inclusive_forms
        else:  # 'conservative'
            # Return both the original word and inclusive forms
            return [palabra] + inclusive_forms

    def procesar_archivo(self, input_path: str, output_path: Optional[str] = None,
                         input_format: Optional[str] = None, output_format: Optional[str] = None):
        """
        Processes an entire dictionary file.

        Reads the input file, applies transformations to each word,
        and writes the result to the output file or stdout.

        Args:
            input_path: Path to the input dictionary file.
            output_path: Path to the output dictionary file. If None, might print to stdout.
            input_format: The format of the input file (e.g., 'hunspell', 'plaintext', 'json'). Auto-detect if None.
            output_format: The desired format for the output. Defaults to input format if None.
        """
        # Detect format if not specified
        if input_format is None:
            input_format = self._detect_format(input_path)
            
        if output_format is None:
            output_format = input_format
        
        # Read words based on format
        words = self._read_dictionary(input_path, input_format)
        
        # Process each word
        processed_words = []
        for word in words:
            result_words = self.procesar_palabra(word)
            processed_words.extend(result_words)
            
        # Add neologisms
        for neologism in self.neologisms:
            if neologism not in processed_words:
                processed_words.append(neologism)
                self.stats['neologisms_added'] += 1
        
        # Remove duplicates
        processed_words = list(dict.fromkeys(processed_words))
        
        # Write output
        if output_path:
            self._write_dictionary(processed_words, output_path, output_format)
        
        return processed_words

    def _detect_format(self, file_path: str) -> str:
        """
        Detects the format of a dictionary file based on extension and content.
        
        Args:
            file_path: Path to the dictionary file.
            
        Returns:
            The detected format ('hunspell', 'plaintext', 'json').
        """
        # Simple detection based on file extension
        extension = Path(file_path).suffix.lower()
        
        if extension == '.dic':
            return 'hunspell'
        elif extension == '.json':
            return 'json'
        else:
            # Default to plaintext for .txt or unknown extensions
            return 'plaintext'

    def _read_dictionary(self, file_path: str, format: str) -> List[str]:
        """
        Reads a dictionary file based on its format.
        
        Args:
            file_path: Path to the dictionary file.
            format: The format of the file ('hunspell', 'plaintext', 'json').
            
        Returns:
            A list of words from the dictionary.
        """
        if format == 'hunspell':
            return self._read_hunspell_dic(file_path)
        elif format == 'json':
            return self._read_json(file_path)
        else:  # 'plaintext'
            return self._read_plaintext(file_path)

    def _write_dictionary(self, words: List[str], file_path: str, format: str):
        """
        Writes a list of words to a dictionary file.
        
        Args:
            words: The list of words to write.
            file_path: Path to the output file.
            format: The format to use ('hunspell', 'plaintext', 'json').
        """
        if format == 'hunspell':
            self._write_hunspell_dic(file_path, words)
        elif format == 'json':
            self._write_json(file_path, words)
        else:  # 'plaintext'
            self._write_plaintext(file_path, words)

    def _read_plaintext(self, path: str) -> List[str]:
        """
        Reads a plaintext dictionary file (one word per line).
        
        Args:
            path: Path to the plaintext file.
            
        Returns:
            A list of words from the file.
        """
        words = []
        try:
            with open(path, 'r', encoding='utf-8') as f:
                for line in f:
                    word = line.strip()
                    if word and not word.startswith('#'):
                        words.append(word)
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error reading plaintext file {path}: {e}")
            
        return words

    def _write_plaintext(self, path: str, words: List[str]):
        """
        Writes a list of words to a plaintext file (one word per line).
        
        Args:
            path: Path to the output plaintext file.
            words: The list of words to write.
        """
        try:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(f"# Inclusive dictionary ({self.mode}, marker: {self.marker})\n")
                f.write(f"# Generated by ConversorInclusivo v{__import__('conversor_inclusivo').__version__}\n")
                f.write(f"# Words: {len(words)}\n")
                
                for word in sorted(words):
                    f.write(f"{word}\n")
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error writing plaintext file {path}: {e}")

    def _read_hunspell_dic(self, path: str) -> List[str]:
        """
        Reads a Hunspell .dic file.
        
        Args:
            path: Path to the Hunspell .dic file.
            
        Returns:
            A list of words from the file.
        """
        words = []
        
        # Try different encodings
        encodings = ['utf-8', 'latin-1', 'iso-8859-1', 'cp1252']
        
        for encoding in encodings:
            try:
                with open(path, 'r', encoding=encoding) as f:
                    lines = f.readlines()
                    
                    # Skip the first line (word count) if it's a number
                    start_index = 0
                    if lines and lines[0].strip().isdigit():
                        start_index = 1
                    
                    for i in range(start_index, len(lines)):
                        line = lines[i].strip()
                        if line and not line.startswith('#'):
                            # Extract just the word (ignore flags after /)
                            word = line.split('/', 1)[0].strip()
                            if word:
                                words.append(word)
                
                # If we got here, the encoding worked
                print(f"Successfully read dictionary with {encoding} encoding")
                break
                
            except UnicodeDecodeError:
                # Try the next encoding
                continue
            except Exception as e:
                self.stats['errors'] += 1
                print(f"Error reading Hunspell file {path}: {e}")
                break
        
        if not words:
            self.stats['errors'] += 1
            print(f"Could not read {path} with any of the attempted encodings: {encodings}")
            
        return words

    def _write_hunspell_dic(self, path: str, words: List[str]):
        """
        Writes a list of words to a Hunspell .dic file.
        
        Args:
            path: Path to the output Hunspell .dic file.
            words: The list of words to write.
        """
        try:
            with open(path, 'w', encoding='utf-8') as f:
                # Write the word count as the first line
                f.write(f"{len(words)}\n")
                
                # Write each word
                for word in sorted(words):
                    f.write(f"{word}\n")
                    
            # Handle .aff file (simple copy from input if available)
            aff_path = path.replace('.dic', '.aff')
            input_aff = aff_path.replace('.inclusive', '')
            if os.path.exists(input_aff):
                # Copy the .aff file
                with open(input_aff, 'r', encoding='utf-8') as src, open(aff_path, 'w', encoding='utf-8') as dst:
                    dst.write(src.read())
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error writing Hunspell file {path}: {e}")

    def _read_json(self, path: str) -> List[str]:
        """
        Reads a JSON dictionary file.
        
        Expected format:
        {
            "name": "Dictionary Name",
            "version": "1.0.0",
            "description": "Description text",
            "words": ["word1", "word2", ...]
        }
        
        Args:
            path: Path to the JSON file.
            
        Returns:
            A list of words from the file.
        """
        words = []
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            if 'words' in data and isinstance(data['words'], list):
                words = data['words']
                
            # Store metadata for later use when writing
            self._json_metadata = {
                'name': data.get('name', 'Español Inclusivo'),
                'version': data.get('version', '1.0.0'),
                'description': data.get('description', 'Diccionario con términos inclusivos en español')
            }
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error reading JSON file {path}: {e}")
            
        return words

    def _write_json(self, path: str, words: List[str]):
        """
        Writes a list of words to a JSON dictionary file.
        
        Args:
            path: Path to the output JSON file.
            words: The list of words to write.
        """
        try:
            # Use stored metadata if available, otherwise create default
            if not hasattr(self, '_json_metadata'):
                self._json_metadata = {
                    'name': 'Español Inclusivo',
                    'version': '1.0.0',
                    'description': 'Diccionario con términos inclusivos en español'
                }
                
            # Update metadata based on mode and marker
            marker_display = {'e': '-e', 'x': '-x', '@': '@'}
            mode_display = {'aggressive': 'Reemplazo', 'conservative': 'Adición'}
            
            name = f"Español Inclusivo ({mode_display[self.mode]}, {marker_display[self.marker]})"
            description = f"Diccionario con términos inclusivos en español, usando {marker_display[self.marker]} como marcador"
            
            # Create the output data
            data = {
                'name': name,
                'version': self._json_metadata['version'],
                'description': description,
                'words': sorted(words)
            }
            
            # Write to file with nice formatting
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error writing JSON file {path}: {e}")

    def get_stats(self) -> Dict[str, int]:
        """Returns the current conversion statistics."""
        return self.stats