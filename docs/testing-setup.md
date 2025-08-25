# Testing setup

## Current Playwright config

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  testMatch: /.*\.e2e\.ts$/,
  timeout: 30_000,
  use: { baseURL: process.env.PW_BASE_URL || 'http://localhost:8080' },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:8080',
    reuseExistingServer: true
  }
});
```

