# -*- coding: utf-8 -*-

"""
Core logic for the inclusive dictionary converter.

This module defines the ConversorInclusivo class which handles the loading
of rules, exceptions, exclusions, and performs the word transformations.
"""

import re
from typing import List, Dict, Set, Tuple, Optional

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
    """

    def __init__(self):
        """Initializes the converter with default empty configurations."""
        print("Initializing ConversorInclusivo...") # Debug print
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
        # TODO: Load default rules/lists in Phase 1

    def load_config(self, rules_path: Optional[str] = None, exceptions_path: Optional[str] = None,
                    invariables_path: Optional[str] = None, exclusions_path: Optional[str] = None,
                    neologisms_path: Optional[str] = None):
        """
        Loads configuration from specified files (Placeholder for future phases).

        Args:
            rules_path: Path to the rules configuration file.
            exceptions_path: Path to the exceptions list file.
            invariables_path: Path to the invariable words list file.
            exclusions_path: Path to the exclusion categories file.
            neologisms_path: Path to the neologisms list file.
        """
        print("Loading configuration (Placeholder)...")
        # Implementation in Phase 1/2: Read files and populate attributes
        if rules_path:
            print(f"  - Loading rules from: {rules_path}")
            # self._load_rules(rules_path)
        if exceptions_path:
            print(f"  - Loading exceptions from: {exceptions_path}")
            # self._load_exceptions(exceptions_path)
        if invariables_path:
            print(f"  - Loading invariables from: {invariables_path}")
            # self._load_invariables(invariables_path)
        if exclusions_path:
            print(f"  - Loading exclusions from: {exclusions_path}")
            # self._load_exclusions(exclusions_path)
        if neologisms_path:
            print(f"  - Loading neologisms from: {neologisms_path}")
            # self._load_neologisms(neologisms_path)
        pass

    def generar_formas_inclusivas(self, palabra: str) -> List[str]:
        """
        Generates potential inclusive form(s) for a given word.

        Applies transformation rules, considering exceptions and exclusions.
        Currently returns only the '-e' form if applicable.

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

        # 3. Apply Transformation Rules (Placeholder for Phase 1 rules)
        generated_forms = []
        modified = False
        # --- Placeholder Rule Application ---
        # Example: Basic -o/-a -> -e
        if palabra_lower.endswith('o'):
            base = palabra[:-1]
            generated_forms.append(base + 'e')
            modified = True
        elif palabra_lower.endswith('a'):
            base = palabra[:-1]
            generated_forms.append(base + 'e')
            modified = True
        # Add more rules here in Phase 1...
        # --- End Placeholder Rule Application ---

        if modified:
            self.stats['modified'] += 1
            # TODO: Handle orthography (tildes) in Phase 2
            return generated_forms
        else:
            # Word processed but not modified by rules
            return []

    def procesar_archivo(self, input_path: str, output_path: Optional[str] = None,
                         input_format: Optional[str] = None, output_format: Optional[str] = None):
        """
        Processes an entire dictionary file. (Placeholder for Phase 1)

        Reads the input file, applies transformations to each word,
        and writes the result to the output file or stdout.

        Args:
            input_path: Path to the input dictionary file.
            output_path: Path to the output dictionary file. If None, might print to stdout.
            input_format: The format of the input file (e.g., 'hunspell', 'plaintext'). Auto-detect if None.
            output_format: The desired format for the output. Defaults to input format if None.
        """
        print(f"Processing file: {input_path} (Placeholder)...")
        # 1. Detect format if not specified
        # 2. Get appropriate reader/writer based on format
        # 3. Read words/entries
        # 4. For each word:
        #    - Call generar_formas_inclusivas()
        #    - Decide whether to add/replace based on config
        # 5. Write output using the writer
        # 6. Handle neologisms (ensure they are in the output)

        # --- Placeholder Logic ---
        try:
            # Simulate reading and writing
            line_count = 0
            with open(input_path, 'r', encoding='utf-8') as infile:
                # Simulate processing
                for line in infile:
                    line_count += 1
                    word = line.strip().split('/')[0] # Basic word extraction
                    if word:
                         # Simulate calling the generator
                         inclusive_forms = self.generar_formas_inclusivas(word)
                         # In a real scenario, we'd collect these forms

            print(f"  - Simulated processing {line_count} lines.")
            print(f"  - Current Stats: {self.stats}")

            if output_path:
                 # Simulate writing output
                 with open(output_path, 'w', encoding='utf-8') as outfile:
                     outfile.write(f"# Processed {input_path}\n")
                     outfile.write(f"# Stats: {self.stats}\n")
                     # Write actual dictionary content here later
                 print(f"  - Placeholder output written to {output_path}")
            else:
                 print("  - Output path not specified (stdout simulation not implemented yet).")

        except Exception as e:
            self.stats['errors'] += 1
            print(f"Error processing file {input_path}: {e}")
            raise # Re-raise the exception
        # --- End Placeholder Logic ---

    def get_stats(self) -> Dict[str, int]:
        """Returns the current conversion statistics."""
        return self.stats

    # --- Private Helper Methods for Loading (Implement in later phases) ---

    # def _load_rules(self, path: str): pass
    # def _load_exceptions(self, path: str): pass
    # def _load_invariables(self, path: str): pass
    # def _load_exclusions(self, path: str): pass
    # def _load_neologisms(self, path: str): pass

    # --- Format Specific Handlers (Implement in Phase 1/2/3) ---

    # def _read_plaintext(self, path: str) -> List[str]: pass
    # def _write_plaintext(self, path: str, words: List[str]): pass
    # def _read_hunspell_dic(self, path: str) -> List[str]: pass
    # def _write_hunspell_dic(self, path: str, words: List[str]): pass
    # ... other formats ...

```

tests/__init__.py
