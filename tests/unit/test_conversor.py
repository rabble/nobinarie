#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import unittest
import sys
import os
from pathlib import Path

# Add the src directory to the path
project_root = Path(__file__).parent.parent.parent
src_path = project_root / 'src'
sys.path.insert(0, str(src_path))

from conversor_inclusivo import ConversorInclusivo

class TestConversorInclusivo(unittest.TestCase):
    """Tests for the ConversorInclusivo class."""

    def setUp(self):
        """Initialize a new ConversorInclusivo instance for each test."""
        self.conversor = ConversorInclusivo()

    def test_init(self):
        """Test that the converter initializes with default configurations."""
        self.assertTrue(len(self.conversor.rules) > 0)  # Should have default rules
        self.assertEqual(len(self.conversor.exceptions), 0)
        self.assertEqual(len(self.conversor.invariables), 0)
        self.assertEqual(len(self.conversor.exclusions['epicene']), 0)
        self.assertEqual(len(self.conversor.neologisms), 0)
        self.assertEqual(self.conversor.stats['processed'], 0)

    def test_basic_vowel_rules_e_marker(self):
        """Test the basic vowel transformation rules with -e marker."""
        # Create new converter with -e marker
        conversor = ConversorInclusivo(marker='e')
        
        # Test basic masculine singular (-o → -e)
        result = conversor.generar_formas_inclusivas("amigo")
        self.assertEqual(result, ["amige"])
        
        # Test basic feminine singular (-a → -e)
        result = conversor.generar_formas_inclusivas("amiga")
        self.assertEqual(result, ["amige"])
        
        # Test basic masculine plural (-os → -es)
        result = conversor.generar_formas_inclusivas("amigos")
        self.assertEqual(result, ["amiges"])
        
        # Test basic feminine plural (-as → -es)
        result = conversor.generar_formas_inclusivas("amigas")
        self.assertEqual(result, ["amiges"])

    def test_basic_vowel_rules_x_marker(self):
        """Test the basic vowel transformation rules with -x marker."""
        # Create new converter with -x marker
        conversor = ConversorInclusivo(marker='x')
        
        # Test basic masculine singular (-o → -x)
        result = conversor.generar_formas_inclusivas("amigo")
        self.assertEqual(result, ["amigx"])
        
        # Test basic feminine singular (-a → -x)
        result = conversor.generar_formas_inclusivas("amiga")
        self.assertEqual(result, ["amigx"])
        
        # Test basic masculine plural (-os → -xs)
        result = conversor.generar_formas_inclusivas("amigos")
        self.assertEqual(result, ["amigxs"])
        
        # Test basic feminine plural (-as → -xs)
        result = conversor.generar_formas_inclusivas("amigas")
        self.assertEqual(result, ["amigxs"])

    def test_basic_vowel_rules_at_marker(self):
        """Test the basic vowel transformation rules with @ marker."""
        # Create new converter with @ marker
        conversor = ConversorInclusivo(marker='@')
        
        # Test basic masculine singular (-o → -@)
        result = conversor.generar_formas_inclusivas("amigo")
        self.assertEqual(result, ["amig@"])
        
        # Test basic feminine singular (-a → -@)
        result = conversor.generar_formas_inclusivas("amiga")
        self.assertEqual(result, ["amig@"])
        
        # Test basic masculine plural (-os → -@s)
        result = conversor.generar_formas_inclusivas("amigos")
        self.assertEqual(result, ["amig@s"])
        
        # Test basic feminine plural (-as → -@s)
        result = conversor.generar_formas_inclusivas("amigas")
        self.assertEqual(result, ["amig@s"])

    def test_complex_suffix_rules(self):
        """Test transformation of complex suffixes."""
        # Create new converter with -e marker
        conversor = ConversorInclusivo(marker='e')
        
        # Test -or/-ora → -ore
        result = conversor.generar_formas_inclusivas("profesor")
        self.assertEqual(result, ["profesore"])
        result = conversor.generar_formas_inclusivas("profesora")
        self.assertEqual(result, ["profesore"])
        
        # Test -dor/-dora → -dore
        result = conversor.generar_formas_inclusivas("trabajador")
        self.assertEqual(result, ["trabajadore"])
        result = conversor.generar_formas_inclusivas("trabajadora")
        self.assertEqual(result, ["trabajadore"])

    def test_exceptions(self):
        """Test that exceptions override the default rules."""
        # Add some exceptions
        self.conversor.exceptions = {
            "niño": "infante",
            "niña": "infante",
            "actor": "intérprete",
            "actriz": "intérprete"
        }
        
        # Test exceptions
        result = self.conversor.generar_formas_inclusivas("niño")
        self.assertEqual(result, ["infante"])
        result = self.conversor.generar_formas_inclusivas("niña")
        self.assertEqual(result, ["infante"])
        result = self.conversor.generar_formas_inclusivas("actor")
        self.assertEqual(result, ["intérprete"])
        result = self.conversor.generar_formas_inclusivas("actriz")
        self.assertEqual(result, ["intérprete"])

    def test_exclusions(self):
        """Test that excluded words are not modified."""
        # Add some exclusions
        self.conversor.invariables.add("foto")
        self.conversor.exclusions['epicene'].add("persona")
        self.conversor.exclusions['neuter'].add("libro")
        
        # Test exclusions
        result = self.conversor.generar_formas_inclusivas("foto")
        self.assertEqual(result, [])
        result = self.conversor.generar_formas_inclusivas("persona")
        self.assertEqual(result, [])
        result = self.conversor.generar_formas_inclusivas("libro")
        self.assertEqual(result, [])

    def test_mode_aggressive(self):
        """Test aggressive mode (replace gendered forms)."""
        # Create new converter with aggressive mode
        conversor = ConversorInclusivo(mode="aggressive")
        # With aggressive mode, we return only the inclusive form
        result = conversor.procesar_palabra("amigo")
        self.assertEqual(result, ["amige"])

    def test_mode_conservative(self):
        """Test conservative mode (add inclusive forms alongside originals)."""
        # Create new converter with conservative mode
        conversor = ConversorInclusivo(mode="conservative")
        # With conservative mode, we return both the original and inclusive form
        result = conversor.procesar_palabra("amigo")
        self.assertEqual(result, ["amigo", "amige"])

if __name__ == '__main__':
    unittest.main()