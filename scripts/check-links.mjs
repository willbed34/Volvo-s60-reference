import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const output = path.resolve('dist');
const htmlFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(fullPath);
  }
}

function publicPath(file) {
  const relative = path.relative(output, file).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return '/' + relative.slice(0, -'index.html'.length);
  return '/' + relative;
}

function resolveTarget(href, currentUrl) {
  const decoded = href.replaceAll('&amp;', '&').trim();
  if (!decoded || decoded.startsWith('#') || /^(https?:|mailto:|tel:|sms:|data:|javascript:)/i.test(decoded)) return null;
  const url = new URL(decoded, 'https://local-reference.invalid' + currentUrl);
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { pathname = url.pathname; }
  const relative = pathname.replace(/^\/+/, '');
  const candidates = [];
  if (!relative || pathname.endsWith('/')) candidates.push(path.join(output, relative, 'index.html'));
  else {
    candidates.push(path.join(output, relative));
    if (!path.extname(relative)) {
      candidates.push(path.join(output, relative, 'index.html'));
      candidates.push(path.join(output, relative + '.html'));
    }
  }
  return candidates.find(candidate => candidate.startsWith(output + path.sep) || candidate === path.join(output, 'index.html'))
    && candidates.find(existsSync) || null;
}

walk(output);
const broken = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const currentUrl = publicPath(file);
  for (const match of html.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi)) {
    const href = match[1];
    const target = resolveTarget(href, currentUrl);
    if (target === null && href && !href.startsWith('#') && !/^(https?:|mailto:|tel:|sms:|data:|javascript:)/i.test(href.trim())) {
      broken.push({ page: currentUrl, href });
    }
  }
}

if (broken.length) {
  console.error('Broken internal links:');
  for (const item of broken) console.error(`- ${item.page} -> ${item.href}`);
  process.exit(1);
}
console.log(`Checked ${htmlFiles.length} HTML pages; no broken internal links found.`);
