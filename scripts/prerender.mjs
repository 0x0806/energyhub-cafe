// Prerenders the app into dist/index.html so crawlers and no-JS clients get the full content.
import { readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const { render, buildJsonLd } = await import(pathToFileURL('dist-ssr/entry-server.js').href);

let html = readFileSync('dist/index.html', 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('prerender: root placeholder not found');
if (!html.includes('<!--jsonld-->')) throw new Error('prerender: jsonld placeholder not found');

const app = render();
const jsonLd = JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c');
html = html
  .replace('<div id="root"></div>', () => `<div id="root">${app}</div>`)
  .replace('<!--jsonld-->', () => `<script type="application/ld+json">${jsonLd}</script>`);

// Preload the fonts used above the fold so the headline does not reflow when they arrive.
const fonts = readdirSync('dist/assets').filter((f) =>
  /^(instrument-serif-latin-400-(normal|italic)|figtree-latin-(400|600)-normal)-.*\.woff2$/.test(f),
);
if (fonts.length !== 4) throw new Error(`prerender: expected 4 font files to preload, found ${fonts.length}`);
const preload = fonts
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');
const lcp = '<link rel="preload" href="/img/dishes/matrix-bowl-720.webp" as="image" type="image/webp" fetchpriority="high" />';
html = html.replace('</head>', () => `    ${preload}\n    ${lcp}\n  </head>`);

// Guards: the shipped HTML must carry the real content.
for (const needle of ['<h1', 'Chicken-egg protein matrix bowl', 'Every day, 5:00 AM', 'MenuItem']) {
  if (!html.includes(needle)) throw new Error(`prerender: missing "${needle}" in output`);
}
if ((html.match(/<h1/g) || []).length !== 1) throw new Error('prerender: expected exactly one h1');
writeFileSync('dist/index.html', html);

const today = new Date().toISOString().slice(0, 10);
const sm = readFileSync('dist/sitemap.xml', 'utf8').replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${today}</lastmod>`);
writeFileSync('dist/sitemap.xml', sm);

rmSync('dist-ssr', { recursive: true, force: true });
console.log(`prerendered ${(app.length / 1024).toFixed(0)} KB of markup, ${(jsonLd.length / 1024).toFixed(0)} KB JSON-LD`);
