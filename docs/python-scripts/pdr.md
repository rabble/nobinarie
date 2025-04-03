# Product Design Requirements (PDR) - Inclusive Dictionary Python Scripts

## 1. Introduction

This document outlines the technical requirements for the Python scripts responsible for converting standard Spanish dictionaries into inclusive language versions, as described in the project's main `README.md` and informed by the linguistic analysis in `docs/research.md`. The primary goal is to create tools (`conversor_inclusivo.py` and associated library) that automate this process for various dictionary formats, focusing on Rioplatense Spanish inclusive language patterns.

## 2. Core Requirements

2.1. **Dictionary Conversion:** The system shall parse input dictionary files and apply transformation rules based on linguistic analysis (`docs/research.md`) to generate inclusive language equivalents.
2.2. **Inclusive Language Focus:**
    *   The primary focus is on generating forms using `-e` as a neutral gender marker.
    *   The system should be designed with potential future extensibility for `-x` and `@` markers, as detailed in `docs/research.md`.
    *   Rules and exceptions must prioritize common usage patterns in Rioplatense Spanish.
2.3. **Format Support:** The system must support input and output for the following dictionary formats:
    *   **Hunspell (.dic / .aff):** Must correctly handle word lists (`.dic`) and potentially generate or modify affix rules (`.aff`) to support inclusive forms (See Section 7).
    *   **Plaintext word lists (.txt, .wl):** Simple one-word-per-line format.
    *   **JSON (.json):** Structured format suitable for web applications.
    *   **XML (.xml, .dict):** Including formats compatible with LanguageTool.
    *   **SQLite (.db, .sqlite):** Database format for application embedding.
2.4. **Morphological Transformation Rules:** The system shall implement configurable rules based on the table and analysis in `docs/research.md`:
    *   **Basic Vowel Endings:**
        *   `-o` (masc. singular) -> `-e` (e.g., amigo -> amigue)
        *   `-a` (fem. singular) -> `-e` (e.g., amiga -> amigue)
        *   `-os` (masc. plural) -> `-es` (e.g., amigos -> amigues)
        *   `-as` (fem. plural) -> `-es` (e.g., amigas -> amigues)
    *   **Complex Suffixes:**
        *   `-or`/`-ora` -> `-ore` (e.g., profesor/profesora -> profesore)
        *   `-dor`/`-dora` -> `-dore` (e.g., trabajador/trabajadora -> trabajadore)
        *   `-tor`/`-triz` -> `-tore` (e.g., actor/actriz -> actore) - *Note: Handle the asymmetry.*
        *   `-n`/`-na` -> `-ne` (e.g., campeón/campeona -> campeone)
        *   `-l`/`-la` -> `-le` (e.g., general/generala -> generale)
        *   `-és`/`-esa` -> `-ese` (e.g., francés/francesa -> francese)
        *   `-í`/`-a` (tónica) -> `-íe` (e.g., israelí/israelita -> israelíe) - *Requires careful handling.*
    *   **Pluralization:** Rules must correctly handle pluralization in conjunction with inclusive endings (e.g., `-ores`, `-dores`, `-tores`, `-nes`, `-les`, `-eses`).
    *   The system must allow for adding, removing, or modifying these rules via configuration.
2.5. **Orthographic Integrity:**
    *   **Diacritics (Tildes):** Transformations must correctly apply Spanish accentuation rules. Changes in word endings may shift stress and require adding/removing tildes (e.g., `campeón` -> `campeone`).
    *   **Diphthongs:** Rules must consider the impact on diphthongs.
2.6. **Exception Handling:**
    *   **Specific Mappings:** Maintain a configurable list of explicit word-to-inclusive-form mappings that override standard rules (e.g., `abuelo/abuela` -> `abuele`).
    *   **Heteronyms:** Identify and handle words with different roots for masculine/feminine forms (e.g., `hombre/mujer`, `padre/madre`). The system might flag these, suggest alternatives (`persona`, `mapadres`), or allow custom mappings via the exception list.
2.7. **Word Exclusion Categories (Based on `docs/research.md`):** The system shall maintain configurable lists of words *not* to be modified:
    *   **Epicene Nouns:** (e.g., `víctima`, `persona`, `testigo`)
    *   **Neuter/Abstract Nouns:** (e.g., `libro`, `mesa`, `aire`)
    *   **Invariable Words:** (e.g., adverbs, prepositions, conjunctions)
    *   **Words Already Ending in `-e` with Defined Gender:** (e.g., `puente` (m), `noche` (f)). Modification should only occur if the word refers to a person and an inclusive form is desired (e.g., `jefe` -> potentially `jefx` if `-x` is supported, but `-e` form already exists). Requires careful configuration.
    *   **Technical Terms/Loanwords:** (e.g., `software`, `internet`, `chef`) - Generally should not be modified based on standard Spanish gender rules.
2.8. **Grammatical Category Handling (Phased Approach):**
    *   **Phase 1 (Core):** Focus on Nouns and Adjectives via suffix transformation.
    *   **Phase 2/3:** Extend support to other categories based on `docs/research.md`:
        *   **Articles:** `el/la` -> `le`, `los/las` -> `les`.
        *   **Demonstratives:** `este/esta` -> `este`, `ese/esa` -> `ese`, etc. (or potentially `este/esta` -> `este`). Requires clear rule definition.
        *   **Determiners:** `un/una` -> `une`, `algún/alguna` -> `algune`, `ningún/ninguna` -> `ningune`, `todo/toda` -> `tode`.
        *   **Pronouns:** `él/ella` -> `elle`, `ellos/ellas` -> `elles`. Possessives (`suyo/suya` -> `suye`) might be lower priority.
        *   **Quantifiers/Numerals:** `uno/una` -> `une`, `primero/primera` -> `primere`.
    *   *Note:* Modifying these categories might be complex depending on the dictionary format's capabilities (e.g., Hunspell flags vs. simple word lists). The initial focus should be on generating the *forms*; integrating them correctly into spell-checking requires careful consideration of the format.
2.9. **Neologisms:** The system should allow adding specific, recognized Rioplatense inclusive neologisms (e.g., `chique`, `amigue`, `todes`, `mapadres`) directly to the dictionary, potentially via the exception list or a dedicated neologism list.

## 3. Usage Modes

3.1. **Command-Line Interface (CLI):**
    *   A script (`conversor_inclusivo.py`) shall provide CLI access.
    *   Must accept input dictionary file path.
    *   Must support `-o` / `--output` for output file path.
    *   Must support `-f` / `--format` to specify input/output formats (with auto-detection as a fallback).
    *   Must support options to load custom files for:
        *   Transformation rules (`--rules`)
        *   Exceptions (`--exceptions`)
        *   Invariable words (`--invariables`)
        *   Exclusion categories (`--exclusions`)
        *   Neologisms (`--neologisms`)
    *   Flags: `--verbose`, `--stats`.
3.2. **Python Library:**
    *   Core logic available as a module (`conversor_inclusivo`).
    *   Primary class (`ConversorInclusivo`) encapsulating logic.
    *   Methods to:
        *   Load configuration (rules, exceptions, exclusions, etc.).
        *   Process files (`procesar_archivo(input_path, output_path, format)`).
        *   Process content from strings/streams.
        *   Generate inclusive form(s) for a single word (`generar_formas_inclusivas(palabra)` -> potentially returns multiple forms like `-e`, `-x` if configured).
        *   Retrieve statistics.

## 4. Customization

4.1. **Rule Configuration:** External files (e.g., JSON, YAML) defining transformation patterns (regex, suffix replacement) and potentially conditions.
4.2. **Exception/Exclusion Lists:** External files (e.g., simple lists, CSV, JSON) for specific word mappings, invariable words, and category exclusions.

## 5. Output & Statistics

5.1. **Generated Dictionaries:** Valid dictionary files in the specified format. Configuration should allow choosing whether to *add* inclusive forms alongside originals or *replace* gendered forms where applicable.
5.2. **Conversion Statistics:** Report totals for processed words, modifications by rule type, exceptions applied, exclusions applied, neologisms added, errors encountered.

## 6. Non-Functional Requirements

6.1. **Performance:** Efficient handling of large dictionaries (hundreds of thousands of words).
6.2. **Maintainability:** Well-structured, documented (docstrings, comments), PEP 8 compliant code.
6.3. **Testability:** Comprehensive unit and integration tests covering rules, exceptions, formats, and CLI.
6.4. **Platform Compatibility:** Python 3.8+, Linux, macOS, Windows.
6.5. **Error Handling:** Clear messages for invalid files, formats, configurations, and rule conflicts.

## 7. Hunspell Specifics (`.aff` file handling)

7.1. **Phase 1:** The converter might initially ignore the `.aff` file or simply copy it alongside the generated `.dic` file. The generated `.dic` file would contain the explicit inclusive word forms.
7.2. **Phase 2/3:** Explore generating/modifying `.aff` rules. This is significantly more complex.
    *   Define new flags for inclusive endings (e.g., `/E` for `-e`).
    *   Create `SFX` rules in the `.aff` file to strip standard endings (`-o`, `-a`) and add inclusive ones (`-e`) under the new flag. (e.g., `SFX E o e amigo` -> `amigue`).
    *   This approach could reduce `.dic` file size but requires careful rule crafting to avoid conflicts and handle orthography (tildes).
    *   Requires robust `.aff` parsing and writing capabilities.

## 8. Limitations (Acknowledged)

8.1. **Context-Free:** Purely rule-based, no semantic understanding.
8.2. **Ambiguity/Conflicts:** Generated forms may clash with existing words. Needs careful exception management.
8.3. **Social Acceptance:** Tool generates forms, doesn't judge appropriateness.
8.4. **Dialectal Variation:** Focused on Rioplatense; other dialects may have different patterns.
