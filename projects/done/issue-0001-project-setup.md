# Initialize Next.js Project with TypeScript and TailwindCSS

## Problem
We need to set up the core project structure for nobinarie.com using Next.js with TypeScript support and TailwindCSS for styling, configured for static export to be hosted on Cloudflare Pages.

## Approach
Initialize a new Next.js project with TypeScript support, install and configure TailwindCSS, and set up the project for static exports. We'll also implement the base directory structure as outlined in the developer specification.

## Implementation Plan
1. Create a new Next.js project with TypeScript
2. Install and configure TailwindCSS
3. Set up project for static export
4. Create the base directory structure
5. Configure basic ESLint and Prettier for code quality
6. Update package.json with appropriate scripts
7. Set up initial README.md with project info and setup instructions

## Failed Approaches
None yet.

## Testing
- Verify that the development server runs without errors
- Ensure that TypeScript compilation works correctly
- Confirm that TailwindCSS styles are applied properly
- Test static export generation

## Documentation
- Create README.md with project overview and setup instructions
- Document design decisions in docs/design-decisions

## Implementation
- Branch: `issue-0001/project-setup`
- Commits: TBD

## Tasks

**CRITICAL: The instructions in this file are not optional guidelines - they are ALL MANDATORY requirements. DO NOT SKIP STEPS**

- [ ] Plan your implementation
- [ ] Ensure that all implementation tasks are listed in this TODO list.

## Gate 1: Pre-Implementation - STOP HERE AND THINK

Before writing ANY implementation code, confirm completion of ALL of these tasks:
- [ ] Git repository initialized with proper branch checked out
- [ ] Required directories created
- [ ] Major design decisions documented in docs/design-decisions/tech-stack.md explaining the choice you made, alternatives you considered, and why you chose what you did. BE CONCISE.
- [ ] Stand up from your desk and scream out loud "WE DO TEST DRIVEN DEVELOPMENT. I WILL NOT WRITE ANY CODE UNTIL I WRITE AND RUN A FAILING TEST FOR THE THING I AM DOING"
- [ ] Create new failing unit tests for this functionality
- [ ] Create new failing integration tests for this functionality
- [ ] Create new failing end to end tests for this functionality
- [ ] Verify that new unit tests run to completion and fail
- [ ] Verify that new integration tests run to completion and fail
- [ ] Verify that new end to end tests run to completion and fail

## Gate 2: Implement the functionality - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS

- [ ] Initialize Next.js project with TypeScript
- [ ] Install and configure TailwindCSS
- [ ] Configure project for static export to Cloudflare Pages
- [ ] Create base directory structure
- [ ] Set up ESLint and Prettier
- [ ] Update package.json with scripts
- [ ] Create initial README.md

## Gate 3: Mid-Implementation Review - STOP HERE AND THINK: DID I FOLLOW BOTH THE LETTER AND SPIRIT OF MY INSTRUCTIONS

After implementing core functionality:
- [ ] Verify all completed code adheres to ALL requirements in this file and in CLAUDE.md
- [ ] Check for drift from documented design decisions
- [ ] Confirm test coverage for all implemented features

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