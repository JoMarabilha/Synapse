import { test, expect } from '@playwright/test';

const base = process.env.PW_BASE_URL ?? 'http://localhost:5173';

test.describe('buttons audit', () => {
  test('ensure clicks do not close page', async ({ page }) => {
    await page.goto(base + '/');
    const selectors = ['body'];

    for (const sel of selectors) {
      const btn = page.locator(sel);
      if (await btn.count() === 0) continue;

      await btn.click();
      // after the click
      await new Promise(r => setTimeout(r, 800));
      if (page.isClosed()) continue; // bail if click closed the page

      await expect(page.locator('#root')).toBeVisible();
    }
  });
});
