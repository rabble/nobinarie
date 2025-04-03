# Checklist - Inclusive Dictionary Python Scripts Development

## Phase 0: Setup & Design

> Note: This system is designed to transform existing Spanish dictionaries into inclusive versions. Users must provide their own source dictionaries in supported formats. The system does not create a comprehensive Spanish dictionary from scratch.

*   [x] Define Product Design Requirements (PDR) incorporating `research.md`
*   [x] Define Product Plan incorporating `research.md`
*   [x] Create Development Checklist incorporating `research.md`
*   [ ] Set up Python project structure (`src/conversor_inclusivo`, `tests`, `scripts`, `config`)
*   [ ] Initialize Git repository (if not already part of the main repo)
*   [ ] Set up virtual environment and `requirements.txt` / `pyproject.toml`

## Phase 1: Core Engine & Basic Formats

### Core Logic & Basic Rules
*   [ ] Implement `ConversorInclusivo` class structure (`src/conversor_inclusivo/conversor.py`).
*   [ ] Implement rule: `-o` -> `-e`.
*   [ ] Implement rule: `-a` -> `-e`.
*   [ ] Implement rule: `-os` -> `-es`.
*   [ ] Implement rule: `-as` -> `-es`.
*   [ ] Implement rule: `-or/-ora` -> `-ore` (handle plural `-ores`).
*   [ ] Implement rule: `-dor/-dora` -> `-dore` (handle plural `-dores`).
*   [ ] Implement `generar_formas_inclusivas(palabra)` method.
*   [ ] Implement basic orthography handling (tilde preservation/removal for simple cases).
*   [ ] Write unit tests for basic rules and orthography.

### Format Handling (Plaintext)
*   [ ] Implement Plaintext input reader.
*   [ ] Implement Plaintext output writer.
*   [ ] Write unit tests for Plaintext handler.

### Format Handling (Hunspell .dic)
*   [ ] Implement Hunspell `.dic` reader (handle count, ignore flags).
*   [ ] Implement Hunspell `.dic` writer (calculate count, write words).
*   [ ] Implement `.aff` file passthrough (copy alongside `.dic`).
*   [ ] Write unit tests for Hunspell `.dic` handler.

### Customization (MVP)
*   [ ] Implement loading exceptions from simple file (`word:inclusive_form`).
*   [ ] Implement loading invariable words from simple file (one word per line).
*   [ ] Implement loading basic exclusion lists (epicene, neuter nouns).
*   [ ] Integrate exceptions/invariables/exclusions into conversion logic.
*   [ ] Write unit tests for loading and applying customizations.

### Command-Line Interface (CLI)
*   [ ] Create `scripts/conversor_inclusivo.py`.
*   [ ] Use `argparse` for input file argument.
*   [ ] Use `argparse` for `-o` / `--output` argument.
*   [ ] Implement basic workflow: read -> process -> write.
*   [ ] Add basic error handling.
*   [ ] Perform manual tests with sample files.

### Library API (MVP)
*   [ ] Implement `procesar_archivo(input_path, output_path)` method.
*   [ ] Ensure `generar_formas_inclusivas` is usable.

### Documentation & Cleanup
*   [ ] Add docstrings to classes/methods.
*   [ ] Create basic `README.md` for Python scripts.
*   [ ] Code review for clarity and PEP 8.

## Phase 2: Advanced Rules, Config & Formats

### Enhanced Rules & Orthography
*   [ ] Implement rule: `-tor/-triz` -> `-tore` (handle asymmetry, plural `-tores`).
*   [ ] Implement rule: `-n/-na` -> `-ne` (handle plural `-nes`).
*   [ ] Implement rule: `-l/-la` -> `-le` (handle plural `-les`).
*   [ ] Implement rule: `-és/-esa` -> `-ese` (handle plural `-eses`).
*   [ ] Implement rule: `-í/-a` (tónica) -> `-íe` (handle plural `-íes`).
*   [ ] Implement robust accentuation/tilde logic based on Spanish rules.
*   [ ] Implement handling for diphthong changes.
*   [ ] Write unit tests for advanced rules and comprehensive orthography.

### Advanced Customization
*   [ ] Design configuration file format for rules (JSON/YAML).
*   [ ] Implement loading rules from external config file.
*   [ ] Implement loading/handling for all exclusion categories (PDR 2.7).
*   [ ] Refine handling of words already ending in `-e`.
*   [ ] Implement heteronym handling strategy (flagging/mapping).
*   [ ] Implement loading neologisms from dedicated list file.
*   [ ] Write unit tests for advanced customization features.

### Format Handling (JSON)
*   [ ] Define JSON dictionary structure.
*   [ ] Implement JSON input handler.
*   [ ] Implement JSON output handler.
*   [ ] Write unit tests for JSON handler.

### CLI Enhancements
*   [ ] Add `--format` option.
*   [ ] Add `--stats` option and implement statistics collection.
*   [ ] Add `--verbose` option.
*   [ ] Add options for all custom config files (`--rules`, `--exceptions`, `--invariables`, `--exclusions`, `--neologisms`).
*   [ ] Add `--mode=aggressive|conservative` option.
*   [ ] Add `--marker=e|x|@` option.
*   [ ] Improve error reporting.

### Library Enhancements
*   [ ] Add method(s) to retrieve detailed statistics.
*   [ ] Add methods for loading configuration.
*   [ ] Refine API based on usage.

### Testing & Documentation
*   [ ] Write integration tests for CLI with various options and formats.
*   [ ] Expand documentation: user guide, configuration file format, rule definition.
*   [ ] Add examples.

## Phase 3: Multiple Dictionary Variants, Grammatical Categories & Broader Formats

### Multiple Dictionary Variants
*   [ ] Implement "aggressive" mode (replacement of gendered forms).
*   [ ] Implement "conservative" mode (addition of inclusive forms).
*   [ ] Implement `-e` marker handling (primary approach).
*   [ ] Implement `-x` marker handling (alternative approach).
*   [ ] Implement `-@` marker handling (alternative approach).
*   [ ] Add command-line flags for mode and marker selection.
*   [ ] Create dictionary naming conventions for different variants.
*   [ ] Implement batch generation of all dictionary variants.

### Grammatical Categories
*   [ ] Implement generation of inclusive forms for Articles (`le`, `les`).
*   [ ] Implement generation of inclusive forms for Demonstratives (`este`, `ese`, etc.).
*   [ ] Implement generation of inclusive forms for Determiners (`une`, `algune`, etc.).
*   [ ] Implement generation of inclusive forms for Pronouns (`elle`, `elles`, `suye`?).
*   [ ] Implement generation of inclusive forms for Quantifiers/Numerals (`todes`, `une`, `primere`).
*   [ ] Design integration strategy for grammatical forms into dictionary formats.

### Hunspell & Broader Formats
*   [ ] **(Optional/Complex)** Design `.aff` rule generation strategy.
*   [ ] **(Optional/Complex)** Implement `.aff` file parser/writer.
*   [ ] **(Optional/Complex)** Implement logic to generate `.aff` rules for inclusive forms.
*   [ ] Implement XML (LanguageTool) input/output handler.
*   [ ] Implement SQLite input/output handler.

### Finalization
*   [ ] Set up packaging (`setup.py` / `pyproject.toml`) for PyPI.
*   [ ] Profile performance and optimize if needed.
*   [ ] Implement basic dictionary quality evaluation scripts/methods.
*   [ ] Write tests for Phase 3 features.
*   [ ] Finalize documentation and examples.
