import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}', 'tests/unit/**/*.spec.{ts,tsx}'],
    exclude: ['tests/e2e/**'],
  },
});
