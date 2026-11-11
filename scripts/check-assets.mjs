// Fails if any dish image referenced in src/ is missing from the manifest or from public/img/dishes.
import { readFileSync, existsSync, readdirSync } from 'node:fs';

const manifest = JSON.parse(readFileSync('src/dish-manifest.json', 'utf8'));
const src = ['src/data.ts', 'src/App.tsx'].map((f) => readFileSync(f, 'utf8')).join('\n');
const keys = new Set([...src.matchAll(/\bimg: '([a-z0-9-]+)'/g)].map((m) => m[1]));
for (const m of src.matchAll(/\bk="([a-z0-9-]+)" size="(\d+)"/g)) keys.add(`${m[1]}:${m[2]}`);
for (const m of src.matchAll(/\bk=\{?s\.img\}?/g)) void m;

const problems = [];
for (const k of keys) {
  const [key, size] = k.split(':');
  const sizes = size ? [size] : ['256'];
  for (const sz of sizes) {
    if (!manifest[key]?.[sz]) problems.push(`manifest missing ${key} @${sz}`);
    else if (!existsSync(`public/img/dishes/${key}-${sz}.webp`)) problems.push(`file missing ${key}-${sz}.webp`);
  }
}
// signature cards use size 720 via s.img
for (const m of src.matchAll(/img: '([a-z0-9-]+)', alt:/g)) {
  if (!manifest[m[1]]?.['720']) problems.push(`manifest missing ${m[1]} @720`);
}
const orphans = readdirSync('public/img/dishes').filter((f) => f.endsWith('.webp')).length;
console.log(`${keys.size} referenced dishes, ${orphans} files on disk`);
if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
console.log('assets OK');
