# Testing setup

## Playwright files detected
- tests/example.spec.ts

## Vitest run

```
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> vite_react_shadcn_ts@0.0.0 test
> vitest run --passWithNoTests


 RUN  v3.2.4 /workspace/Synapse

No test files found, exiting with code 0

include: src/**/*.{test,spec}.{ts,tsx}, tests/unit/**/*.spec.{ts,tsx}
exclude:  tests/e2e/**, **/*.e2e.*, node_modules/**, dist/**
```

## Playwright run

```
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> vite_react_shadcn_ts@0.0.0 test:e2e
> playwright test


Running 1 test using 1 worker

  ✘  1 tests/e2e/example.e2e.ts:3:1 › example (6ms)


  1) tests/e2e/example.e2e.ts:3:1 › example ────────────────────────────────────────────────────────

    Error: browserType.launch: 
    ╔══════════════════════════════════════════════════════╗
    ║ Host system is missing dependencies to run browsers. ║
    ║ Please install them with the following command:      ║
    ║                                                      ║
    ║     npx playwright install-deps                      ║
    ║                                                      ║
    ║ Alternatively, use apt:                              ║
    ║     apt-get install libatk1.0-0t64\                  ║
    ║         libatk-bridge2.0-0t64\                       ║
    ║         libatspi2.0-0t64\                            ║
    ║         libxcomposite1\                              ║
    ║         libxdamage1\                                 ║
    ║         libxfixes3\                                  ║
    ║         libxrandr2\                                  ║
    ║         libgbm1\                                     ║
    ║         libxkbcommon0\                               ║
    ║         libasound2t64                                ║
    ║                                                      ║
    ║ <3 Playwright Team                                   ║
    ╚══════════════════════════════════════════════════════╝

  1 failed
    tests/e2e/example.e2e.ts:3:1 › example ─────────────────────────────────────────────────────────
```

