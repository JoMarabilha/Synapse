import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const FALLBACK_ROUTES = ['/', '/documents', '/meetings', '/proposals', '/knowledge', '/workflows', '/analytics', '/collaboration', '/security', '/settings'];

function getPort(): number {
  try {
    const vite = fs.readFileSync('vite.config.ts', 'utf-8');
    const m = vite.match(/port:\s*(\d+)/);
    return m ? parseInt(m[1], 10) : 5173;
  } catch {
    return 5173;
  }
}

function getRoutes(): string[] {
  try {
    const app = fs.readFileSync('src/App.tsx', 'utf-8');
    const matches = Array.from(app.matchAll(/<Route path="([^"]+)"/g)).map(m => m[1]);
    const filtered = matches.filter(p => p !== '*' && p.startsWith('/'));
    return Array.from(new Set([...filtered, ...FALLBACK_ROUTES]));
  } catch {
    return FALLBACK_ROUTES;
  }
}

const PORT = getPort();
const BASE = process.env.PW_BASE_URL || `http://localhost:${PORT}`;
const ROUTES = getRoutes();

const ARTIFACT = 'artifacts/buttons-audit.json';

async function appendResults(results: any[]) {
  await fs.promises.mkdir(path.dirname(ARTIFACT), { recursive: true });
  const existing = fs.existsSync(ARTIFACT) ? JSON.parse(fs.readFileSync(ARTIFACT, 'utf-8')) : [];
  existing.push(...results);
  fs.writeFileSync(ARTIFACT, JSON.stringify(existing, null, 2));
}

test.describe.serial('buttons audit', () => {
  for (const route of ROUTES) {
    test(`route ${route}`, async ({ page }, testInfo) => {
      await page.goto(BASE + route);
      await page.waitForSelector('#root', { state: 'visible' });

      const errors: string[] = [];
      page.on('pageerror', e => errors.push(`pageerror: ${e.message}`));
      page.on('console', m => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
      const requests: string[] = [];
      page.on('request', r => requests.push(`${r.method()} ${r.url()}`));

      const candidateSelector = [
        'button',
        '[role="button"]',
        '[type="button"]',
        'a[role="button"]',
        '[data-testid$="-btn"]',
        '[data-action]'
      ].join(',');

      const candidates = page.locator(candidateSelector);
      const total = await candidates.count();
      const limit = Math.min(total, 15);
      const results: any[] = [];

      for (let i = 0, seen = 0; seen < limit && i < total; i++) {
        const el = candidates.nth(i);
        if (!(await el.isVisible()) || (await el.isDisabled?.()) === true) continue;
        const text = (await el.innerText()).trim();
        const testid = await el.getAttribute('data-testid');
        const lower = `${text} ${testid || ''}`.toLowerCase();
        if (/delete|remove|apagar|eliminar|danger|desvincular/.test(lower)) continue;
        seen++;

        const selector = await el.evaluate(node => {
          const tag = node.tagName.toLowerCase();
          const id = node.id ? `#${node.id}` : '';
          const cls = node.className ? '.' + node.className.toString().split(/\s+/).join('.') : '';
          return tag + id + cls;
        });
        const bbox = await el.boundingBox();
        const before = await el.evaluate(node => ({
          className: node.className,
          ariaPressed: node.getAttribute('aria-pressed'),
          hidden: (node as any).hidden
        }));
        const urlBefore = page.url();
        errors.length = 0;
        requests.length = 0;
        let clickErr: string | undefined;
        try {
          await el.click({ trial: false, timeout: 1000 });
        } catch (e: any) {
          clickErr = e.message;
        }
        await page.waitForTimeout(800);
        const urlAfter = page.url();
        const dialog = await page.$('role=dialog');
        const domAfter = await el.evaluate(node => node ? ({
          className: node.className,
          ariaPressed: node.getAttribute('aria-pressed'),
          hidden: (node as any).hidden
        }) : null);
        const domChanged = !domAfter || before.className !== domAfter.className || before.ariaPressed !== domAfter.ariaPressed || before.hidden !== domAfter.hidden;
        let status: 'OK' | 'Broken' | 'Suspicious' = 'Suspicious';
        const reasons: string[] = [];
        if (errors.length || clickErr) {
          status = 'Broken';
          if (clickErr) reasons.push(`click: ${clickErr}`);
          reasons.push(...errors);
        } else if (urlBefore !== urlAfter) {
          status = 'OK';
          reasons.push('url changed');
        } else if (dialog) {
          status = 'OK';
          reasons.push('dialog appeared');
        } else if (domChanged) {
          status = 'OK';
          reasons.push('dom changed');
        } else if (requests.length) {
          status = 'OK';
          reasons.push('network request');
        } else {
          reasons.push('no url change/dialog/dom/network');
        }

        let screenshotPath: string | undefined;
        if (status !== 'OK') {
          const safeText = (text || 'button').replace(/[^a-z0-9]+/gi, '_').slice(0, 50);
          const routeSlug = route === '/' ? 'root' : route.replace(/\//g, '_');
          const dir = path.join('test-results', 'buttons-audit', routeSlug);
          await fs.promises.mkdir(dir, { recursive: true });
          screenshotPath = path.join(dir, `${safeText}.png`);
          await page.screenshot({ path: screenshotPath });
        }

        results.push({ route, selector, text, testid, status, reasons, urlBefore, urlAfter, requests: [...requests], screenshotPath, bbox });
      }

      await appendResults(results);
    });
  }
});
