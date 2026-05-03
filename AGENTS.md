# AGENTS.md

Guidance for AI coding agents working in this repository. Format: [agents.md](https://agents.md).

## What this repo is

A library of [Agent Skills](https://agentskills.io/specification) for building with [Poke](https://poke.com) — the personal AI agent by Interaction Company. Six top-level skills cover the Node SDK, Python SDK, REST API, webhooks, the `poke` CLI, recipes, and integrations.

This repo contains **only Markdown** — no source code to compile, no runtime to ship. The deliverable is the skill graph itself.

## Project layout

```
.
├── AGENTS.md                       # this file
├── README.md                       # human-facing intro + install
├── LICENSE                         # MIT
├── .github/workflows/validate.yml  # CI
└── skills/
    └── <skill-name>/
        ├── SKILL.md                # required, spec-compliant frontmatter
        └── references/             # spec-standard subdirectory for atomic nodes
            └── *.md                # one concept per file, with [[wikilinks]]
```

The closest `AGENTS.md` to the file you're editing wins; only this top-level one exists today.

## Authoring rules

When adding or editing a skill, follow these rules — CI enforces the spec ones:

### `SKILL.md` frontmatter (Agent Skills spec)

- `name` (required) — lowercase letters, digits, hyphens; ≤ 64 chars; **must match the parent directory name**; no leading/trailing/consecutive hyphens.
- `description` (required) — ≤ 1024 chars, non-empty, describes *what* the skill does *and when* to use it. Include trigger phrases users would actually say.
- `license` — keep `MIT` unless deliberately changing.
- `compatibility` — only set if the skill has runtime requirements (Node version, Python version, system packages).
- `metadata.author`, `metadata.version`, `metadata.graph: true` — local convention.

### Skill graph structure (local convention)

Each skill is a **graph**, not a monolithic file. Inspired by [Akshay Pachaar's "Skill Graphs > SKILL.md"](https://x.com/akshay_pachaar/status/2024848778415755327).

- `SKILL.md` is a **Map of Content**: short descriptions plus `[[wikilinks]]`. Don't dump prose here.
- `references/*.md` files are **atomic concepts** — one complete thought per file, ≤ ~60 lines. Add YAML frontmatter (`name`, `summary`, `metadata.internal: true`) so the skills.sh CLI doesn't surface them as separate skills.
- Cross-skill links use `[[../<other-skill>/references/<node>]]`.
- Keep `SKILL.md` under 500 lines per the spec; aim for under 100 in this repo.

### Wikilink conventions

- `[[references/foo]]` — same-skill link.
- `[[../poke/references/foo]]` — cross-skill link.
- `[[../poke/SKILL]]` — link to a sibling skill's MoC.
- `[[references/foo|display text]]` — alias form when the target slug isn't ideal prose.

Don't introduce a new wikilink target without creating the corresponding file.

## Adding a new skill

1. Create `skills/<name>/SKILL.md` with valid frontmatter (`name` matching the directory).
2. Add `skills/<name>/references/` with at least one node.
3. Cross-link the new skill from at least one existing skill's MoC.
4. Update the skill table and tree in `README.md`.
5. Run validation locally (see below) — CI will block merge if anything's off.

## Adding a new node to an existing skill

1. Create `skills/<skill>/references/<topic>.md` with frontmatter (`name`, `summary`, `metadata.internal: true`).
2. Add a `[[references/<topic>]]` line to the skill's `SKILL.md` MoC under the right section.
3. Add inbound links from at least one related node so it's discoverable through traversal.
4. Update README's reference list for that skill.

## Validation / dev environment

```bash
# Install the spec validator (Python 3.11+; not on PyPI — install from source)
pip install "git+https://github.com/agentskills/agentskills.git@main#subdirectory=skills-ref"

# Validate every skill's SKILL.md against the Agent Skills spec
for d in skills/*/; do skills-ref validate "$d"; done

# Check for broken intra-repo wikilinks
node scripts/check-wikilinks.mjs
```

CI runs these on every PR. See `.github/workflows/validate.yml`.

## Style

- Use em-dash `—` (U+2014), not `--`.
- Don't add emojis to skill content unless the user asked.
- Code fences must specify a language.
- Keep node titles imperative or noun-phrase, not full sentences.
- One blank line between sections; no trailing whitespace.

## Things NOT to do

- **Don't** add `nodes/` — the spec-standard directory is `references/`.
- **Don't** put real API keys, webhook tokens, or PII in any file. Examples must use `pk_...` or `process.env.POKE_*` placeholders.
- **Don't** create hidden auto-generated files; everything is hand-authored.
- **Don't** rewrite the skill-graph structure into single monolithic SKILL.md files — the graph layout is intentional.
- **Don't** introduce a build step or package.json — this repo is pure Markdown by design.

## Commit / PR conventions

- Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`.
- One skill / one concern per PR. Cross-skill renames are fine in a single PR.
- PR description should mention which skills were touched and link to any external docs you used.

## License

MIT. By contributing, you agree your contributions are MIT-licensed.
