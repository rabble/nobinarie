// ABOUTME: This file sets up the test environment
// ABOUTME: It configures test-related libraries and global mocks

import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock Next.js router
vi.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: {},
    asPath: '',
    push: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
    },
    beforePopState: vi.fn(() => null),
    prefetch: vi.fn(() => null),
  }),
}));

// Mock Next.js Head component
vi.mock('next/head', () => {
  return {
    __esModule: true,
    default: function HeadMock({ children }: { children: React.ReactNode }) {
      return <>{children}</>;
    },
  };
});