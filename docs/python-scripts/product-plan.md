# Product Plan - Inclusive Dictionary Python Scripts

## 1. Introduction & Goals

This document outlines the product plan for developing Python scripts (`conversor_inclusivo.py` and associated library) to convert standard Spanish dictionaries into inclusive language versions, guided by `README.md` and the detailed linguistic analysis in `docs/research.md`.

**Primary Goals:**
*   Deliver a functional command-line tool for dictionary conversion focused on Rioplatense Spanish `-e` forms.
*   Provide a reusable, configurable Python library.
*   Implement robust morphological transformation rules based on linguistic research.
*   Handle orthographic changes (tildes) correctly.
*   Manage exceptions, exclusions, and neologisms effectively.
*   Support essential dictionary formats (Hunspell, Plaintext, JSON initially).

## 2. Target Audience

*   **End Users:** Individuals seeking Rioplatense Spanish inclusive dictionaries for spell checkers (LibreOffice, browsers, etc.).
*   **Developers:** Integrating inclusive language processing into applications.
*   **Linguists/Community Contributors:** Maintaining, refining, and extending the rules and word lists for Rioplatense Spanish.

## 3. Scope

### 3.1. Phase 1: Core Engine & Basic Formats

*   **Core Logic:** `ConversorInclusivo` class structure.
*   **Transformation Rules:** Implement basic vowel endings (`-o/a/os/as -> -e/es`) and core complex suffixes (`-or/ora -> -ore`, `-dor/dora -> -dore`).
*   **Orthography:** Basic handling for tilde preservation/removal where rules are simple (e.g., `campeón -> campeone`).
*   **Format Support:** Input/Output for Plaintext (.txt) and Hunspell (.dic only, `.aff` passthrough).
*   **Exclusions/Exceptions:** Support loading simple lists for invariable words and specific word-to-form exceptions. Implement handling for basic epicene/neuter exclusions based on lists.
*   **CLI:** Basic `conversor_inclusivo.py` (input/output files).
*   **Library:** Basic `procesar_archivo`, `generar_formas_inclusivas`.
*   **Testing:** Unit tests for core rules, basic orthography, format handlers, exceptions/exclusions.
*   **Documentation:** Basic README, code comments.

### 3.2. Phase 2: Advanced Rules, Config & Formats

*   **Enhanced Rules:** Implement remaining complex suffix rules from `research.md` (`-tor/triz`, `-n/na`, `-l/la`, `-és/esa`, `-í/a`).
*   **Advanced Orthography:** Implement robust tilde handling based on Spanish accentuation rules for all transformations. Handle diphthongs.
*   **Rule Customization:** Allow defining/overriding transformation rules via external configuration files (JSON/YAML).
*   **Enhanced Exclusions:** Implement loading/handling for all exclusion categories defined in PDR 2.7. Refine handling of words ending in `-e`.
*   **Heteronym Handling:** Implement strategy (flagging, mapping via exceptions).
*   **Neologism Handling:** Implement loading from a dedicated list.
*   **Format Support:** Add support for JSON input/output.
*   **CLI Enhancements:** Add `--format`, `--stats`, `--verbose`, options for loading all custom config files (rules, exceptions, exclusions, neologisms).
*   **Library Enhancements:** Refine API, add statistics methods, configuration loading methods.
*   **Testing:** Integration tests for CLI, advanced rules, orthography, all formats.
*   **Documentation:** User guide for CLI, library, configuration files.

### 3.3. Phase 3: Grammatical Categories, Hunspell .aff & Broader Formats

*   **Grammatical Categories:** Implement generation of inclusive forms for articles, determiners, pronouns, quantifiers (as defined in PDR 2.8). *Requires careful design regarding integration into dictionary formats.*
*   **Hunspell `.aff` Generation:** Implement optional generation/modification of `.aff` rules to support inclusive forms via flags (PDR Section 7). This is a complex task and may be a separate sub-project.
*   **Format Support:** Add support for XML (LanguageTool) and SQLite formats.
*   **Alternative Endings:** Explore configurable support for `-x` / `@` endings based on `research.md`.
*   **Packaging:** Package the library for distribution via PyPI.
*   **Performance Optimization:** Profile and optimize for very large dictionaries.
*   **Evaluation:** Implement methods or scripts for basic quality evaluation (e.g., comparing against a known inclusive corpus, checking for conflicts).

## 4. Development Phases & Milestones

1.  **Phase 0: Setup & Design (Complete based on this plan)**
2.  **Phase 1: Core Engine & Basic Formats**
    *   Milestone 1.1: Implement `ConversorInclusivo`, basic vowel rules (`-o/a/os/as -> -e/es`), `-or/ora`, `-dor/dora` rules. Basic orthography tests.
    *   Milestone 1.2: Implement Plaintext I/O handler.
    *   Milestone 1.3: Implement Hunspell `.dic` I/O handler (`.aff` passthrough).
    *   Milestone 1.4: Implement loading simple exception/invariable lists. Integrate into logic.
    *   Milestone 1.5: Implement basic CLI.
    *   Milestone 1.6: Unit tests for implemented features. Basic documentation.
3.  **Phase 2: Advanced Rules, Config & Formats**
    *   Milestone 2.1: Implement remaining complex suffix rules (`-tor/triz`, etc.).
    *   Milestone 2.2: Implement robust accentuation/tilde handling logic.
    *   Milestone 2.3: Implement external rule configuration.
    *   Milestone 2.4: Implement loading/handling for all exclusion categories & neologisms. Implement heteronym strategy.
    *   Milestone 2.5: Implement JSON I/O handler.
    *   Milestone 2.6: Enhance CLI with all options. Refine library API & stats.
    *   Milestone 2.7: Write integration tests. Improve documentation significantly.
4.  **Phase 3: Grammatical Categories, Hunspell .aff & Broader Formats**
    *   Milestone 3.1: Implement generation of forms for other grammatical categories.
    *   Milestone 3.2: (Optional/Complex) Implement Hunspell `.aff` generation/modification.
    *   Milestone 3.3: Implement XML & SQLite I/O handlers.
    *   Milestone 3.4: Explore `-x`/`@` support.
    *   Milestone 3.5: Package for PyPI. Add evaluation scripts.

## 5. Technology Stack

*   **Language:** Python (Version 3.8+ recommended)
*   **Libraries:** Standard Library (os, sys, re, json, sqlite3, xml.etree.ElementTree), `argparse`, potentially `PyYAML`, `unittest`/`pytest`.

## 6. Risks & Mitigation

*   **Rule Accuracy/Completeness:** Linguistic rules can be complex with many edge cases.
    *   *Mitigation:* Base rules on `research.md`. Allow extensive customization via config files. Encourage community feedback and contributions for refinement. Test against real-world text.
*   **Orthographic Complexity:** Handling tildes and other orthographic rules correctly across all transformations is difficult.
    *   *Mitigation:* Dedicate specific effort to this in Phase 2. Implement thorough unit tests for accentuation rules. Consult Spanish grammar resources.
*   **Performance:** Complex rules and large files could slow down conversion.
    *   *Mitigation:* Use efficient algorithms (e.g., regex optimization, appropriate data structures). Defer heavy optimization until Phase 3 unless critical issues arise.
*   **Format Complexity (Hunspell .aff):** Modifying `.aff` files correctly is non-trivial.
    *   *Mitigation:* Treat `.aff` generation as an advanced, optional feature (Phase 3). Initially focus on generating explicit forms in `.dic`.
*   **Scope Creep:** Trying to handle too many linguistic nuances or formats at once.
    *   *Mitigation:* Adhere strictly to the phased approach. Prioritize features based on core goals (Rioplatense `-e` forms first).

## 7. Release Criteria (Phase 1 - MVP)

*   All Phase 1 Milestones completed.
*   Core conversion logic for implemented `-e` rules functions correctly for Hunspell (.dic) and Plaintext.
*   Basic orthography handling for simple cases is functional.
*   Exceptions and basic exclusions are handled via lists.
*   Basic CLI tool is usable.
*   Unit tests pass.
*   Basic documentation exists.
