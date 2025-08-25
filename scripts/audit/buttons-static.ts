import pkg from 'ts-morph';
import fs from 'fs';
import path from 'path';

const { Project, SyntaxKind, Node, JsxAttribute, JsxOpeningLikeElement } = pkg;

const project = new Project({ tsConfigFilePath: 'tsconfig.json' });
project.addSourceFilesAtPaths('src/**/*.{ts,tsx}');

interface RecordItem {
  file: string;
  line: number;
  rule: string;
  component?: string;
  dataTestId?: string;
  ariaLabel?: string;
  text?: string;
  snippet: string;
  reason: string;
}

const records: RecordItem[] = [];

for (const sourceFile of project.getSourceFiles()) {
  sourceFile.forEachDescendant((node) => {
    if (Node.isJsxOpeningElement(node) || Node.isJsxSelfClosingElement(node)) {
      analyzeElement(node as JsxOpeningLikeElement, sourceFile);
    }
  });
}

function analyzeElement(node: JsxOpeningLikeElement, sourceFile: any) {
  const tagName = node.getTagNameNode().getText();
  const hasAttr = (name: string) => node.getAttribute(name) != null;
  const getAttr = (name: string) => node.getAttribute(name) as JsxAttribute | undefined;
  const attrText = (attr?: JsxAttribute) => attr?.getInitializer()?.getText();

  const hasOnClick = hasAttr('onClick');
  const onClickText = attrText(getAttr('onClick'))?.replace(/\s+/g, '');
  const isNoop = onClickText ? /^(\(\)=>\{\}|noop\(\)?$)/.test(onClickText) : false;

  const hasAsChild = hasAttr('asChild');
  const hasHref = hasAttr('href');
  const hasTo = hasAttr('to');
  const disabled = hasAttr('disabled');
  const role = attrText(getAttr('role'))?.replace(/['"`]/g, '').toLowerCase();
  const dataTestId = attrText(getAttr('data-testid'))?.replace(/['"`]/g, '');
  const ariaLabel = attrText(getAttr('aria-label'))?.replace(/['"`]/g, '');

  const parentElement = Node.isJsxSelfClosingElement(node) ? node : node.getParentIfKind(SyntaxKind.JsxElement);
  let text = '';
  if (parentElement && Node.isJsxElement(parentElement)) {
    text = parentElement.getChildrenOfKind(SyntaxKind.JsxText).map(t => t.getText().trim()).filter(Boolean).join(' ');
  }

  let rule: string | undefined;
  let reason = '';

  if (tagName === 'Button') {
    if (!hasOnClick && !hasAsChild && !hasHref && !hasTo) {
      rule = 'a'; reason = 'missing onClick/asChild/href/to';
    } else if (hasOnClick && isNoop) {
      rule = 'a'; reason = 'noop onClick';
    }
  } else if (tagName === 'button') {
    if (!hasOnClick && !disabled) {
      rule = 'b'; reason = 'missing onClick';
    } else if (hasOnClick && isNoop) {
      rule = 'b'; reason = 'noop onClick';
    }
  } else if (tagName === 'a') {
    if (role === 'button') {
      if (!hasHref && !hasTo) {
        rule = 'c'; reason = 'missing href/to';
      } else if (hasOnClick && isNoop) {
        rule = 'c'; reason = 'noop onClick';
      }
    }
  }

  if (!rule && dataTestId && dataTestId.endsWith('-btn')) {
    const hasHrefOrTo = hasHref || hasTo;
    if (!hasOnClick && !hasHrefOrTo) {
      rule = 'd'; reason = 'missing onClick/href';
    } else if (hasOnClick && isNoop) {
      rule = 'd'; reason = 'noop onClick';
    }
  }

  if (rule) {
    const { line } = sourceFile.getLineAndColumnAtPos(node.getStart());
    const component = getComponentName(node);
    const snippet = node.getText().replace(/\s+/g, ' ').slice(0, 100);
    records.push({
      file: path.relative(process.cwd(), sourceFile.getFilePath()),
      line,
      rule,
      component,
      dataTestId,
      ariaLabel,
      text,
      snippet,
      reason
    });
  }
}

function getComponentName(node: Node): string | undefined {
  let current: Node | undefined = node;
  while (current) {
    const parent = current.getParent();
    if (!parent) break;
    if (Node.isFunctionDeclaration(parent) && parent.getName()) return parent.getName();
    if (Node.isVariableDeclaration(parent)) {
      const init = parent.getInitializer();
      if (init && Node.isArrowFunction(init) && parent.getName()) return parent.getName();
    }
    if (Node.isClassDeclaration(parent) && parent.getName()) return parent.getName();
    current = parent;
  }
  return undefined;
}

fs.mkdirSync('artifacts', { recursive: true });
fs.mkdirSync('docs', { recursive: true });

fs.writeFileSync('artifacts/buttons-static.json', JSON.stringify(records, null, 2));

let md = '# Buttons Static Audit\n\n## Findings\n\n';
md += '| File | Line | Rule | Component | data-testid | aria-label | Text | Snippet |\n';
md += '| --- | --- | --- | --- | --- | --- | --- | --- |\n';
for (const r of records) {
  const row = [
    r.file,
    r.line,
    r.rule,
    r.component || '',
    r.dataTestId || '',
    r.ariaLabel || '',
    (r.text || '').replace(/\|/g, '\\|'),
    '`' + r.snippet + '`'
  ].join(' | ');
  md += `| ${row} |\n`;
}

const totals = { a: 0, b: 0, c: 0, d: 0 } as Record<string, number>;
const fileCount: Record<string, number> = {};
for (const r of records) {
  totals[r.rule]++;
  fileCount[r.file] = (fileCount[r.file] || 0) + 1;
}

const topFiles = Object.entries(fileCount).sort((a, b) => b[1] - a[1]).slice(0, 10)
  .map(([f, c]) => `- ${f}: ${c}`).join('\n');

md += '\n## Summary\n\n### Totals per rule\n';
md += `- (a) <Button> without onClick/asChild/href/to: ${totals.a}\n`;
md += `- (b) <button> without onClick and not disabled: ${totals.b}\n`;
md += `- (c) <a role="button"> without href/to: ${totals.c}\n`;
md += `- (d) data-testid "-btn" elements without handlers: ${totals.d}\n`;
md += '\n### Top 10 files by count\n';
md += topFiles + '\n';
md += '\n### Suggested minimal fixes\n';
md += '- Add onClick handlers or link props (href/to) for interactive buttons.\n';
md += '- Convert <a role="button"> to <Link to="..."> or add href.\n';
md += '- Ensure data-testid "-btn" elements are wired or removed.\n';

fs.writeFileSync('docs/buttons-static-audit.md', md);

console.log(`Total candidates: ${records.length}`);
console.log('Rule totals:', totals);
console.log('Top files:\n' + topFiles);

