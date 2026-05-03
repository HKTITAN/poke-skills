#!/usr/bin/env node
// Verify every [[wikilink]] in the repo resolves to an existing file.
// Skips text inside fenced code blocks and inline code spans.
// Forms supported:
//   [[references/foo]]            -> sibling references/foo.md inside the same skill
//   [[../poke/references/foo]]    -> cross-skill reference
//   [[../poke/SKILL]]             -> sibling skill's SKILL.md
//   [[references/foo|alias]]      -> alias form (display text after the pipe)

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";

const ROOT = process.cwd();
const SKILLS_DIR = join(ROOT, "skills");

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.isFile() && entry.name.endsWith(".md")) yield p;
  }
}

function stripCode(text) {
  // Remove fenced blocks first (```...```), then inline spans (`...`).
  return text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`\n]*`/g, "");
}

const wikilinkRe = /\[\[([^\]|]+?)(?:\|[^\]]+)?\]\]/g;
let failed = 0;

for (const file of walk(SKILLS_DIR)) {
  const text = stripCode(readFileSync(file, "utf8"));
  const dir = dirname(file);
  for (const m of text.matchAll(wikilinkRe)) {
    const target = m[1].trim();
    const candidates = [
      resolve(dir, target + ".md"),
      resolve(dir, target, "SKILL.md"),
    ];
    const ok = candidates.some((c) => {
      try { return statSync(c).isFile(); } catch { return false; }
    });
    if (!ok) {
      const rel = relative(ROOT, file);
      console.error(`::error file=${rel}::Unresolved wikilink [[${target}]]`);
      failed++;
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} unresolved wikilink(s).`);
  process.exit(1);
}
console.log("All wikilinks resolve.");
