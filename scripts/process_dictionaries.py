#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Master script to process all dictionaries.
This script runs all the processing steps in sequence.

Usage:
    python process_dictionaries.py [--all-variants] [--dialects code1,code2,...]

Options:
    --all-variants    Process all variants (e/x/@, aggressive/conservative)
    --dialects        Comma-separated list of dialect codes to process variants for
                     (e.g., "es-AR,es-MX,es")
"""

import os
import sys
import argparse
import subprocess
from pathlib import Path

def run_command(command, description):
    """Run a shell command and print the description."""
    print(f"\n{description}...\n")
    print(f"Running: {command}")
    
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    
    if result.returncode == 0:
        print(f"Success: {description}")
        if result.stdout:
            print(result.stdout[:500] + ("..." if len(result.stdout) > 500 else ""))
    else:
        print(f"Error: {description} failed")
        print(result.stderr)
        
    return result.returncode == 0

def update_variants_script(dialects=None, process_all=False):
    """Update the process_all_variants.py script with the specified dialects."""
    script_path = "scripts/process_all_variants.py"
    
    with open(script_path, 'r') as f:
        lines = f.readlines()
    
    # Find the process_all and dialects_to_process lines
    process_all_idx = None
    dialects_idx = None
    
    for i, line in enumerate(lines):
        if 'process_all =' in line:
            process_all_idx = i
        if 'dialects_to_process =' in line:
            dialects_idx = i
    
    if process_all_idx is not None and process_all:
        lines[process_all_idx] = f"    process_all = True  # Set to True to process all dialects\n"
    elif process_all_idx is not None:
        lines[process_all_idx] = f"    process_all = False  # Set to True to process all dialects\n"
    
    if dialects_idx is not None and dialects:
        dialect_list = ", ".join([f'"{d}"' for d in dialects])
        lines[dialects_idx] = f"    dialects_to_process = [{dialect_list}]  # Add more or set process_all to True\n"
    
    # Write the updated content back to the file
    with open(script_path, 'w') as f:
        f.writelines(lines)
    
    print(f"Updated {script_path} with dialects: {dialects if dialects else 'None'}, process_all: {process_all}")

def main():
    """Run all processing steps."""
    # Parse command line arguments
    parser = argparse.ArgumentParser(description="Process Spanish dialect dictionaries.")
    parser.add_argument("--all-variants", action="store_true", 
                        help="Process all variants (e/x/@, aggressive/conservative)")
    parser.add_argument("--dialects", type=str, default="es-AR,es-MX,es",
                        help="Comma-separated list of dialect codes to process variants for")
    parser.add_argument("--process-all-dialects", action="store_true",
                        help="Process all dialects with all variants")
    
    args = parser.parse_args()
    
    # Extract dialect codes
    dialects = args.dialects.split(",") if args.dialects else []
    process_all_dialects = args.process_all_dialects
    
    print("Starting dictionary processing pipeline")
    print(f"Configuration: process_all_variants={args.all_variants}, dialects={dialects}, process_all_dialects={process_all_dialects}")
    
    # Step 1: Process all dialects with aggressive mode and -e marker
    print("\n--- Step 1: Process all dialects (aggressive mode, -e marker) ---")
    if not run_command("python scripts/process_all_dialects.py", 
                      "Processing all dialect dictionaries"):
        print("Error in processing dialects, aborting")
        return
    
    # Step 2: Fix dialect dictionaries and create indexes
    print("\n--- Step 2: Create dialect indexes ---")
    if not run_command("python scripts/fix_dialect_dictionaries.py", 
                      "Creating dialect indexes and fixing file locations"):
        print("Error in creating dialect indexes, aborting")
        return
    
    # Step 3: Process selected dialects with all variants if requested
    if args.all_variants:
        print("\n--- Step 3: Process selected dialects with all variants ---")
        
        # Update the process_all_variants.py script with the specified dialects
        update_variants_script(dialects, process_all_dialects)
        
        if not run_command("python scripts/process_all_variants.py", 
                          "Processing selected dialects with all variants"):
            print("Error in processing variants, continuing with next step")
    
    # Step 4: Generate ZIP files for web distribution
    print("\n--- Step 4: Create ZIP files for web distribution ---")
    if not run_command("python scripts/zip_dictionaries.py", 
                      "Creating ZIP files for web distribution"):
        print("Error in creating ZIP files, continuing with next step")
    
    # Final step: Summary
    print("\n--- Processing Complete ---")
    
    # Count total dictionaries processed
    json_count = subprocess.getoutput("ls -1 public/dictionaries/*.json | wc -l")
    zip_count = subprocess.getoutput("ls -1 public/dictionaries/*.zip | wc -l")
    dialect_count = subprocess.getoutput("ls -1 public/dictionaries/dialectos/ | grep -v 'README\\|summary\\|index' | wc -l")
    
    print(f"\nProcessing summary:")
    print(f"- Total JSON dictionaries: {json_count.strip()}")
    print(f"- Total ZIP archives: {zip_count.strip()}")
    print(f"- Total dialect dictionaries: {dialect_count.strip()}")
    print(f"\nOutput located in: public/dictionaries/")
    print(f"Dialect dictionaries in: public/dictionaries/dialectos/")
    
    print("\nAll dictionary processing steps completed!")

if __name__ == "__main__":
    main()