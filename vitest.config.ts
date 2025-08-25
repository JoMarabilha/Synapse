import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.spec.{ts,tsx}', 'src/**/*.test.{ts,tsx}', 'tests/**/*.spec.{ts,tsx}'],
    passWithNoTests: true
  }
});
