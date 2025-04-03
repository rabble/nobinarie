#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import unittest
import sys
import os
import json
import tempfile
from pathlib import Path

# Add the src and scripts directories to the path
project_root = Path(__file__).parent.parent.parent
src_path = project_root / 'src'
scripts_path = project_root / 'scripts'
sys.path.insert(0, str(src_path))
sys.path.insert(0, str(scripts_path))

import generar_diccionarios
from conversor_inclusivo import ConversorInclusivo

class TestGeneradorDiccionarios(unittest.TestCase):
    """Tests for the dictionary generator script."""

    def setUp(self):
        """Set up temporary data and paths for testing."""
        # Create a temporary directory for outputs
        self.temp_dir = tempfile.TemporaryDirectory()
        self.output_dir = self.temp_dir.name
        
        # Create a test input file
        self.test_data = {
            "name": "Test Dictionary",
            "version": "1.0.0",
            "description": "Test description",
            "words": ["amigo", "amiga", "profesor", "profesora", "trabajador", "trabajadora"]
        }
        
        self.input_file = Path(self.temp_dir.name) / "test_input.json"
        with open(self.input_file, 'w', encoding='utf-8') as f:
            json.dump(self.test_data, f, ensure_ascii=False, indent=2)

    def tearDown(self):
        """Clean up temporary files and directories."""
        self.temp_dir.cleanup()

    def test_generate_dictionaries(self):
        """Test that dictionaries are generated with the right variations."""
        # Generate dictionaries with limited options for faster testing
        generar_diccionarios.generate_dictionary_variants(
            self.input_file, 
            self.output_dir,
            markers=['e'],
            modes=['aggressive', 'conservative'],
            formats=['json']
        )
        
        # Check that the expected files were created
        expected_files = [
            "es_inclusive_reemplazo_e.json",
            "es_inclusive_reemplazo_e.zip",
            "es_inclusive_adicion_e.json", 
            "es_inclusive_adicion_e.zip"
        ]
        
        for filename in expected_files:
            file_path = Path(self.output_dir) / filename
            self.assertTrue(file_path.exists(), f"Expected file not found: {filename}")

    def test_dictionary_content(self):
        """Test that the dictionary content is correctly transformed."""
        # First, ensure we have a simpler test input with just straightforward words
        simple_test_data = {
            "name": "Test Dictionary",
            "version": "1.0.0",
            "description": "Test description",
            "words": ["amigo", "profesor", "trabajador"]
        }
        
        simple_input_file = Path(self.temp_dir.name) / "simple_test_input.json"
        with open(simple_input_file, 'w', encoding='utf-8') as f:
            json.dump(simple_test_data, f, ensure_ascii=False, indent=2)
            
        # Generate only aggressive mode with -e marker for simplicity
        generar_diccionarios.generate_dictionary_variants(
            simple_input_file, 
            self.output_dir,
            markers=['e'],
            modes=['aggressive'],
            formats=['json']
        )
        
        # Read the generated dictionary
        output_file = Path(self.output_dir) / "es_inclusive_reemplazo_e.json"
        with open(output_file, 'r', encoding='utf-8') as f:
            output_data = json.load(f)
        
        # Check the content
        self.assertEqual(output_data["name"], "Español Inclusivo (Reemplazo, -e)")
        self.assertIn("words", output_data)
        
        # Verify transformations (exact set of words)
        expected_words_set = set(["amige", "profesore", "trabajadore"])
        actual_words_set = set(output_data["words"])
        
        self.assertEqual(expected_words_set, actual_words_set, 
                        f"Expected words {expected_words_set} don't match actual words {actual_words_set}")
        
        # Verify original forms are not present in aggressive mode
        original_words = ["amigo", "profesor", "trabajador"]
        for word in original_words:
            self.assertNotIn(word, output_data["words"], f"Original word found in aggressive mode: {word}")

    def test_conservative_mode(self):
        """Test that conservative mode preserves original words."""
        # First, ensure we have a simpler test input with just straightforward words
        simple_test_data = {
            "name": "Test Dictionary",
            "version": "1.0.0",
            "description": "Test description",
            "words": ["amigo", "profesor", "trabajador"]
        }
        
        simple_input_file = Path(self.temp_dir.name) / "simple_test_input.json"
        with open(simple_input_file, 'w', encoding='utf-8') as f:
            json.dump(simple_test_data, f, ensure_ascii=False, indent=2)
            
        # Generate only conservative mode with -e marker for simplicity
        generar_diccionarios.generate_dictionary_variants(
            simple_input_file, 
            self.output_dir,
            markers=['e'],
            modes=['conservative'],
            formats=['json']
        )
        
        # Read the generated dictionary
        output_file = Path(self.output_dir) / "es_inclusive_adicion_e.json"
        with open(output_file, 'r', encoding='utf-8') as f:
            output_data = json.load(f)
        
        # Check that all original words AND inclusive forms are present
        original_words = ["amigo", "profesor", "trabajador"]
        inclusive_words = ["amige", "profesore", "trabajadore"]
        
        # Verify that both original and inclusive forms are present
        expected_words_set = set(original_words + inclusive_words)
        actual_words_set = set(output_data["words"])
        
        self.assertEqual(expected_words_set, actual_words_set, 
                        f"Expected words {expected_words_set} don't match actual words {actual_words_set}")

if __name__ == '__main__':
    unittest.main()