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

## data-testid mapping

| Route | Visible label/icon | data-testid | File:Line |
|-------|-------------------|-------------|-----------|
| /proposals | New Proposal | new-proposal-btn | src/pages/Proposals.tsx:226 |
| /proposals | Delete | delete-proposal-btn | src/pages/Proposals.tsx:406 |
| /documents | Upload Document | upload-agenda-btn | src/pages/Documents.tsx:266 |
| /documents | Eye icon | preview-doc-btn | src/pages/Documents.tsx:428 |
| /meetings | New Meeting | create-meeting-btn | src/pages/Meetings.tsx:148 |
| /meetings | Start | start-meeting-btn | src/pages/Meetings.tsx:228 |
| /settings | Save Changes | save-settings-btn | src/pages/Settings.tsx:190 |



## Actions run

```
npm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

> vite_react_shadcn_ts@0.0.0 test:e2e
> playwright test

[2m[WebServer] [22mnpm warn Unknown env config "http-proxy". This will stop working in the next major version of npm.

Running 18 tests using 2 workers

  ✘   1 tests/e2e/actions.e2e.ts:18:5 › actions › click new-proposal-btn (10ms)
  ✘   2 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to / (10ms)
  ✘   4 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /documents (7ms)
  ✘   3 tests/e2e/actions.e2e.ts:18:5 › actions › click save-proposal-btn (7ms)
  ✘   6 tests/e2e/actions.e2e.ts:18:5 › actions › click delete-proposal-btn (8ms)
  ✘   5 tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /meetings (9ms)


  1) tests/e2e/actions.e2e.ts:18:5 › actions › click new-proposal-btn ──────────────────────────────

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

  2) tests/e2e/actions.e2e.ts:18:5 › actions › click save-proposal-btn ─────────────────────────────

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

  3) tests/e2e/routes.e2e.ts:12:5 › routes › navigate to / ─────────────────────────────────────────

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

  4) tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /documents ────────────────────────────────

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

  4 failed
    tests/e2e/actions.e2e.ts:18:5 › actions › click new-proposal-btn ───────────────────────────────
    tests/e2e/actions.e2e.ts:18:5 › actions › click save-proposal-btn ──────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to / ──────────────────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /documents ─────────────────────────────────
  2 interrupted
    tests/e2e/actions.e2e.ts:18:5 › actions › click delete-proposal-btn ────────────────────────────
    tests/e2e/routes.e2e.ts:12:5 › routes › navigate to /meetings ──────────────────────────────────
  12 did not run
```

### Broken actions
- new-proposal-btn
- save-proposal-btn
