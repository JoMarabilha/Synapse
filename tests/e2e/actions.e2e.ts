import { test, expect } from '@playwright/test';

const base = process.env.PW_BASE_URL ?? 'http://localhost:5173';

const actions = [
  { path: '/proposals', id: 'new-proposal-btn' },
  { path: '/proposals', id: 'save-proposal-btn' },
  { path: '/proposals', id: 'delete-proposal-btn' },
  { path: '/documents', id: 'upload-agenda-btn' },
  { path: '/documents', id: 'preview-doc-btn' },
  { path: '/meetings', id: 'create-meeting-btn' },
  { path: '/meetings', id: 'start-meeting-btn' },
  { path: '/settings', id: 'save-settings-btn' },
];

test.describe('actions', () => {
  for (const { path, id } of actions) {
    test(`click ${id}`, async ({ page }, testInfo) => {
      await page.goto(base + path);
      const btns = page.getByTestId(id);
      const count = await btns.count();
      if (count === 0) test.skip();
      const btn = count > 1 ? btns.first() : btns;

      const errors: string[] = [];
      page.on('pageerror', (err) => errors.push(String(err)));
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      const beforeUrl = page.url();

      try {
        await btn.click();
        await page.waitForTimeout(800);

        const dialog = page.getByRole('dialog');
        if ((await dialog.count()) > 0 && await dialog.first().isVisible()) {
          await expect(dialog.first()).toBeVisible();
        } else if (page.url() !== beforeUrl) {
          await expect(page).toHaveURL(/proposals|documents|meetings/);
        } else {
          expect(errors, 'errors after click').toHaveLength(0);
        }

        expect(errors, 'errors after click').toHaveLength(0);
      } catch (err) {
        const screenshotPath = `test-results/${id}-failure.png`;
        await page.screenshot({ path: screenshotPath, fullPage: true });
        await testInfo.attach('screenshot', { path: screenshotPath, contentType: 'image/png' });
        throw err;
      }
    });
  }
});
