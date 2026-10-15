#!/usr/bin/env node
// Prints every source URL already present in src/content/items/*.md, one per
// line. The daily pipeline greps this output before adding a new entry, so a
// URL already covered is skipped (or only re-added when something material
// changed), per the project's "no duplicate URLs" rule.
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const itemsDir = join(__dirname, '..', 'src', 'content', 'items');

let files = [];
try {
  files = readdirSync(itemsDir).filter((f) => f.endsWith('.md'));
} catch {
  process.exit(0); // no content yet
}

for (const file of files) {
  const raw = readFileSync(join(itemsDir, file), 'utf8');
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) continue;
  const urlLine = frontmatterMatch[1]
    .split('\n')
    .find((line) => /^url:/.test(line.trim()));
  if (!urlLine) continue;
  const url = urlLine.split(/^url:\s*/)[1]?.trim().replace(/^["']|["']$/g, '');
  if (url) console.log(url);
}
