# Implement Core Content Pages

## Problem
We need to create all the core content pages for nobinarie.com that explain inclusive Spanish, provide educational resources, and offer project information. These pages need to be written in inclusive Spanish and meet all accessibility requirements.

## Approach
Implement page components and content for each required section. Use MDX for content to allow easy authoring and maintenance. Ensure consistent styling and navigation across all pages.

## Implementation Plan
1. Set up MDX support in the Next.js project
2. Create page components for each content section
3. Write content in inclusive Spanish for each page:
   - What is inclusive Spanish
   - Why we use "-e"
   - Glossary of terms
   - Project manifesto
   - Examples of binary vs inclusive
   - Teaching inclusive language
   - External resources
   - FAQ
   - Project history
   - Press and media
   - Credits and acknowledgments
   - How to contribute via GitHub
4. Implement consistent layout and navigation across pages
5. Ensure all pages meet accessibility requirements

## Failed Approaches
None yet.

## Testing
- Verify all pages render correctly
- Test navigation between pages
- Ensure accessibility requirements are met
- Test responsiveness across devices

## Documentation
- Document content structure
- Create guidelines for adding new content

## Implementation
- Branch: `issue-0004/content-pages-implementation`
- Commits: TBD

## Tasks

**CRITICAL: The instructions in this file are not optional guidelines - they are ALL MANDATORY requirements. DO NOT SKIP STEPS**

- [x] Plan your implementation
- [x] Ensure that all implementation tasks are listed in this TODO list.

## Gate 1: Pre-Implementation - STOP HERE AND THINK

Before writing ANY implementation code, confirm completion of ALL of these tasks:
- [x] Git repository initialized with proper branch checked out
- [x] Required directories created
- [x] Major design decisions documented in docs/design-decisions/content-management.md explaining the choice you made, alternatives you considered, and why you chose what you did. BE CONCISE.
- [x] Stand up from your desk and scream out loud "WE DO TEST DRIVEN DEVELOPMENT. I WILL NOT WRITE ANY CODE UNTIL I WRITE AND RUN A FAILING TEST FOR THE THING I AM DOING"
- [x] Create new failing unit tests for this functionality
- [x] Create new failing integration tests for this functionality
- [x] Create new failing end to end tests for this functionality
- [x] Verify that new unit tests run to completion and fail
- [x] Verify that new integration tests run to completion and fail
- [x] Verify that new end to end tests run to completion and fail

## Gate 2: Implement the functionality - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS

- [x] ~~Set up MDX support in the project~~ (Used plain TSX pages instead)
- [x] Create page component for "What is inclusive Spanish"
- [x] Create page component for "Why we use '-e'"
- [x] Create page component for "Glossary of terms"
- [x] Create page component for "Project manifesto" 
- [x] Create page component for "Examples of binary vs inclusive"
- [x] Create page component for "Teaching inclusive language"
- [x] Create page component for "External resources"
- [x] Create page component for "FAQ"
- [x] Create page component for "Project history"
- [x] Create page component for "Press and media"
- [x] Create page component for "Credits and acknowledgments"
- [x] Create page component for "How to contribute via GitHub"
- [x] Implement consistent navigation between pages
- [x] Ensure all content is written in inclusive Spanish

## Gate 3: Mid-Implementation Review - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS

After implementing core functionality:
- [x] Verify all completed code adheres to ALL requirements in this file and in CLAUDE.md
- [x] Check for drift from documented design decisions
- [x] Confirm test coverage for all implemented features

## Gate 4: Pre-Completion Verification - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS

Before declaring the task complete perform these MANDATORY checks:
- [ ] Run ALL verification commands (tests, linting, typechecking)
- [ ] Write function-level documentation for all functions explaining what they do, their parameters, return values, and usage examples where appropriate.
- [ ] Add explanatory comments for any non-obvious or tricky code that might confuse another experienced developer who isn't familiar with this specific codebase.
- [ ] Update the README.md. It should always include:
  - [ ] a set of examples showing how to use all the commandline tools in the project.
  - [ ] how to run the test suite
  - [ ] steps needed to set up a development environment
- [ ] Run the unit tests by themselves. Verify that they to completion and pass and that there is no unexpected output
- [ ] Run the integration tests by themselves. Verify that they to completion and pass and that there is no unexpected output
- [ ] Run the end to end tests by themselves. Verify that they to completion and pass and that there is no unexpected output

## Gate 5: Final commit for the issue - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS
- [ ] Author a meaningful commit message for this change. Include details of your intent, as well as logs showing that you ran tests and that they passed.

FAILURE TO PASS ANY GATE INVALIDATES THE WHOLE IMPLEMENTATION. YOU ARE NOT DONE UNTIL YOU CLEAR GATE 5
NO EXCEPTIONS POLICY: Under no circumstances should you mark any test type as "not applicable". Every project, regardless of size or complexity, MUST have unit tests, integration tests, AND end-to-end tests. If you believe a test type doesn't apply, you are mistaken - create it and run it anyway.