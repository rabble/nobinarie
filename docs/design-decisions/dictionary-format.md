# Dictionary Format Design Decision

## Decision

For the nobinarie.com spell-check dictionaries, we've chosen:

- **Dictionary Format**: Hunspell AFF/DIC format as the primary format
- **Versioning System**: Semantic versioning (MAJOR.MINOR.PATCH)
- **Directory Structure**: Organized by version with a "latest" symbolic link
- **Changelog**: Markdown-based changelog with dated entries per version
- **Distribution**: Compressed archives (.zip) with installation instructions

## Alternatives Considered

1. **Dictionary Formats**:
   - Plain wordlists: Too simplistic for handling Spanish morphology
   - Custom JSON format: Not compatible with standard spell-checking tools
   - Aspell/MySpell formats: Less comprehensive than Hunspell
   - XML-based dictionaries: More complex than needed and less widely supported

2. **Versioning Approaches**:
   - Date-based versioning: Less clear about the significance of changes
   - Build numbers: Does not communicate the nature of changes
   - Branch-based versioning: Too complex for end users to understand

3. **Distribution Methods**:
   - Single file downloads: Would require users to manually handle multiple files
   - Package manager distribution: Higher barrier to entry for non-technical users
   - Web-based installation: Would require browser extensions or complex setup
   - Git submodules: Too technical for most users

## Rationale

1. **Hunspell AFF/DIC Format**:
   - Industry standard format supported by most software (LibreOffice, Firefox, Chrome, macOS, etc.)
   - Powerful enough to handle Spanish language morphology and gender transformations
   - Well-documented with existing tools for validation and testing
   - Allows for advanced features like affix rules that are essential for handling inclusive Spanish's "-e" endings efficiently

2. **Semantic Versioning**:
   - Clear communication of the significance of changes:
     - MAJOR: Incompatible changes (e.g., format changes that might break existing implementations)
     - MINOR: New functionality in a backward-compatible manner (e.g., new words, new categories)
     - PATCH: Backward-compatible bug fixes (e.g., correcting misspellings)
   - Widely understood versioning scheme
   - Helps users decide when to update

3. **Directory Structure**:
   - Version-based directories create a clear historical record
   - "latest" symbolic link provides an easy way for users to find the most current version
   - Separation of versions allows multiple versions to be maintained simultaneously
   - Cleanly separates metadata (changelog, README) from the actual dictionary files

4. **Changelog and Documentation**:
   - Transparent tracking of all changes between versions
   - Helps users understand what's new in each version
   - Provides a historical record of the dictionary's development
   - Installation instructions with each version accommodate any version-specific requirements