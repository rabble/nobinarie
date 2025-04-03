# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler checks
- `npm test` - Run all tests
- `npm run test:unit` - Run unit tests only
- `npm run test:unit src/tests/unit/some-file.test.ts` - Run a single test file
- `npm run test:integration` - Run integration tests
- `npm run test:e2e` - Run E2E tests with Playwright

## Code Style Guidelines
- **Types**: Use TypeScript interfaces for props and state
- **Naming**: React components use PascalCase, functions use camelCase
- **Imports**: Group imports: React, Next.js, third-party, then local components/utils
- **CSS**: Use Tailwind with component classes (@layer components) and custom utilities (@layer utilities)
- **Error Handling**: Use try/catch and document error handling intentions
- **Component Structure**: Add JSDoc comments for component documentation
- **Testing**: Follow AAA pattern (Arrange-Act-Assert) with descriptive test names
- **Formatting**: Follow existing indentation (2 spaces) and bracket style