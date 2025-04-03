#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Command-Line Interface for the Inclusive Dictionary Converter.

This script takes a standard dictionary file (e.g., Hunspell, plaintext)
and converts it into an inclusive language version based on configured rules.
"""

import argparse
import sys
import os
from pathlib import Path

# Ensure src directory is discoverable
project_root = Path(__file__).parent.parent
src_path = project_root / 'src'
sys.path.insert(0, str(src_path))

from conversor_inclusivo import ConversorInclusivo

def main():
    """Main function to parse arguments and run the conversion."""
    parser = argparse.ArgumentParser(
        description="Converts standard Spanish dictionaries to inclusive versions.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter
    )

    parser.add_argument(
        "input_file",
        help="Path to the input dictionary file."
    )
    parser.add_argument(
        "-o", "--output",
        help="Path to the output (converted) dictionary file. "
             "If not specified, will print to stdout."
    )
    parser.add_argument(
        "-f", "--format",
        choices=["json", "plaintext", "hunspell"],
        help="Specify input/output format. Auto-detects based on file extension if not specified."
    )
    parser.add_argument(
        "--mode",
        choices=["aggressive", "conservative"],
        default="aggressive",
        help="Conversion mode: aggressive (replace gendered forms) or conservative (add inclusive forms)."
    )
    parser.add_argument(
        "--marker",
        choices=["e", "x", "@"],
        default="e",
        help="Marker to use for inclusive forms: 'e', 'x', or '@'."
    )
    parser.add_argument(
        "--rules",
        help="Path to custom rules file (JSON format)."
    )
    parser.add_argument(
        "--exceptions",
        help="Path to custom exceptions file (format: 'word:inclusive_form', one per line)."
    )
    parser.add_argument(
        "--invariables",
        help="Path to custom invariable words file (one word per line)."
    )
    parser.add_argument(
        "--exclusions",
        help="Path to custom exclusion categories file (JSON format)."
    )
    parser.add_argument(
        "--neologisms",
        help="Path to custom neologisms file (one word per line)."
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Enable verbose output."
    )
    parser.add_argument(
        "--stats",
        action="store_true",
        help="Show conversion statistics."
    )

    args = parser.parse_args()

    # Basic input validation
    if not os.path.exists(args.input_file):
        print(f"Error: Input file not found: {args.input_file}", file=sys.stderr)
        sys.exit(1)

    if args.verbose:
        print(f"Starting conversion for: {args.input_file}")
        print(f"Mode: {args.mode}, Marker: {args.marker}")
        if args.output:
            print(f"Output will be saved to: {args.output}")

    try:
        # Initialize the converter with the specified marker and mode
        conversor = ConversorInclusivo(marker=args.marker, mode=args.mode)

        # Load configurations if specified
        conversor.load_config(
            rules_path=args.rules,
            exceptions_path=args.exceptions,
            invariables_path=args.invariables,
            exclusions_path=args.exclusions,
            neologisms_path=args.neologisms
        )

        # Process the file
        processed_words = conversor.procesar_archivo(
            args.input_file,
            args.output,
            input_format=args.format,
            output_format=args.format
        )

        if args.verbose:
            print(f"Processed {len(processed_words)} words")
            print("Conversion process finished.")
        
        if args.stats:
            stats = conversor.get_stats()
            print("\nConversion Statistics:")
            for key, value in stats.items():
                print(f"  {key}: {value}")

        # If no output file is specified, print words to stdout
        if not args.output:
            for word in processed_words:
                print(word)

    except Exception as e:
        print(f"An error occurred during conversion: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
