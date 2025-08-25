# Testing Setup

## Playwright run in container

```

> vite_react_shadcn_ts@0.0.0 test:e2e
> playwright test


Running 1 test using 1 worker

  ✘  1 tests/example.spec.ts:3:1 › example (1.4s)


  1) tests/example.spec.ts:3:1 › example ───────────────────────────────────────────────────────────

    Error: page.goto: net::ERR_TUNNEL_CONNECTION_FAILED at https://example.com/
    Call log:
    [2m  - navigating to "https://example.com/", waiting until "load"[22m


      2 |
      3 | test('example', async ({ page }) => {
    > 4 |   await page.goto('https://example.com');
        |              ^
      5 |   await expect(page).toHaveTitle(/Example/);
      6 | });
      7 |
        at /workspace/Synapse/tests/example.spec.ts:4:14

  1 failed
    tests/example.spec.ts:3:1 › example ────────────────────────────────────────────────────────────
```

## Routes smoke run

```
> vite_react_shadcn_ts@0.0.0 test:e2e
> playwright test


Running 10 tests using 1 worker

  ✘   1 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to / (21ms)
  ✘   2 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /documents (9ms)
  ✘   3 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /meetings (7ms)
  ✘   4 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /proposals (8ms)
  ✘   5 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /knowledge (8ms)
  ✘   6 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /workflows (9ms)
  ✘   7 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /analytics (8ms)
  ✘   8 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /collaboration (7ms)
  ✘   9 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /security (8ms)
  ✘  10 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /settings (7ms)


  1) tests/e2e/routes.e2e.ts:12:5 › routes › navigate to / ─────────────────────────────────────────

    Error: browserType.launch: Executable doesn't exist at /root/.cache/ms-playwright/chromium_headless_shell-1187/chrome-linux/headless_shell
    ╔═════════════════════════════════════════════════════════════════════════╗
    ║ Looks like Playwright Test or Playwright was just installed or updated. ║
    ║ Please run the following command to download new browsers:              ║
    ║                                                                         ║
    ║     npx playwright install                                              ║
    ║                                                                         ║
    ║ <3 Playwright Team                                                      ║
    ╚═════════════════════════════════════════════════════════════════════════╝

  ... 8 more failures ...

  10 failed
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to / ──────────────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /documents ─────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /meetings ──────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /proposals ─────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /knowledge ─────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /workflows ─────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /analytics ─────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /collaboration ─────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /security ──────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /settings ──────────────────────────────────
```
