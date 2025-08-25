import { test, expect } from '@playwright/test';

const routes = [
  '/', '/documents', '/meetings', '/proposals', '/knowledge',
  '/workflows', '/analytics', '/collaboration', '/security', '/settings'
];

const base = process.env.PW_BASE_URL ?? 'http://localhost:5173';

test.describe('routes', () => {
  for (const path of routes) {
    test(`navigate to ${path}`, async ({ page }) => {
      await page.goto(base + path);
      await expect(page.locator('#root')).toBeVisible();
    });
  }
});
