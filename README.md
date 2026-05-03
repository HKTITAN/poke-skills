# Poke Skills

Agent skills for building with [Poke](https://poke.com) — the personal AI agent by Interaction Company that lives in iMessage, Telegram, and SMS. Covers the [Node SDK](https://www.npmjs.com/package/poke), the [Python SDK](https://pypi.org/project/poke/), the [REST API](https://poke.com/docs/api), the `poke` CLI, [Recipes](https://poke.com/docs), and [Integrations](https://poke.com/integrations).

## Install

```bash
npx skills add HKTITAN/poke-skills
```

This uses the [skills.sh](https://skills.sh) CLI to install the skills into your detected agent (Claude Code, Cursor, etc.). The CLI will prompt for scope (project vs. global) and method (symlink vs. copy).

## Paste this into your coding agent

The fastest way to set up any coding agent — Claude Code, Cursor, Windsurf, Codex, Aider, Cline, or anything that reads project rules — is to drop the block below into your agent's instructions / `AGENTS.md` / `.cursorrules` / system prompt.

```
You have access to Poke Skills — the authoritative reference for building with
Poke (poke.com): the Node SDK, Python SDK, REST API, webhooks, the `poke` CLI,
Recipes, and Integrations. Always consult these before writing Poke code.

- Repo:           https://github.com/HKTITAN/poke-skills
- Skills root:    https://github.com/HKTITAN/poke-skills/tree/main/skills
- Install:        npx skills add HKTITAN/poke-skills
- Authoring rules and conventions: AGENTS.md at the repo root.

Each skill is a graph:
- `skills/<skill>/SKILL.md` is a Map of Content — descriptions plus [[wikilinks]].
- `skills/<skill>/references/<topic>.md` are atomic concept nodes.
- Cross-skill links use `[[../<other-skill>/references/<node>]]`.

The six skills:
- poke               — Node SDK + REST API + platform overview
- poke-python        — Python SDK + MCP callbacks middleware (Python-only)
- poke-webhooks      — condition/action triggers + wiring patterns (Vercel, GHA, cron)
- poke-mcp-tunnel    — `poke login`, `poke mcp add`, `poke tunnel`
- poke-recipes       — shareable install bundles, Kitchen, payouts
- poke-integrations  — built-ins (Linear, Notion, GitHub, Sentry, Gmail, Outlook…) + custom MCP

External authoritative docs (only after consulting the skills):
- API:           https://poke.com/docs/api
- All docs:      https://poke.com/docs
- API keys:      https://poke.com/kitchen/api-keys (V2 keys only — V1 `pk_` is deprecated)
- Node package:  https://www.npmjs.com/package/poke
- Python pkg:    https://pypi.org/project/poke/

Rules:
1. Before recommending a method name, parameter, exception class, env var, or
   endpoint, read the relevant skill node and verify. Cite the node path you
   used (e.g. `skills/poke/references/send-webhook.md`).
2. Never invent SDK methods, recipe fields, or integration names. If the skills
   don't cover it, say so and ask — don't guess from training data.
3. Prefer reading the specific `references/<node>.md` over the whole SKILL.md
   when you know the area — it's cheaper on context and the graph is built for
   exactly this kind of traversal.
4. The Node and Python SDKs differ — snake_case in Python, plus a finer
   exception hierarchy and the MCP callbacks module that Node lacks. Don't mix
   them up.

Smoke test: read `skills/poke-python/references/exceptions.md` and tell me which
three exception subclasses Python exposes that Node's single PokeAuthError does
not split out. (Answer: AuthenticationError, ForbiddenError, RateLimitError.)
```

## What's included

| Skill                | Use it when…                                                                                |
|----------------------|---------------------------------------------------------------------------------------------|
| `poke`               | Sending messages or hitting the REST API in Node — SDK quick-start, auth, types, platform context. |
| `poke-python`        | Same surface in Python — `pip install poke` plus the MCP callbacks middleware (Python-only).|
| `poke-webhooks`      | Wiring an event source (deploys, signups, cron) into a Poke webhook trigger.                |
| `poke-mcp-tunnel`    | `poke login`, registering a remote MCP, or tunneling localhost to Poke.                     |
| `poke-recipes`       | Building shareable Recipe install bundles with onboarding, integrations, and payouts.       |
| `poke-integrations`  | Pre-built integrations (Linear, Notion, GitHub, Sentry, Vercel, Gmail, Outlook…) and custom MCPs. |

## Structure: skill graphs, not flat files

Each skill is a **graph**, not a single file. The pattern (per [Akshay Pachaar's "Skill Graphs > SKILL.md"](https://x.com/akshay_pachaar/status/2024848778415755327)):

- **`SKILL.md`** is a *Map of Content* — short descriptions of every node in the graph, plus `[[wikilinks]]` to follow.
- **`references/*.md`** are atomic concept files — one complete thought each, with their own YAML frontmatter and outbound `[[wikilinks]]` to siblings (within the skill) and across skills. (`references/` is the [Agent Skills spec](https://agentskills.io/specification) standard directory for additional documentation.)
- The agent **scans descriptions and frontmatter first**, then follows only the links it needs. Most decisions happen before reading a single full node.
- Nodes are marked `metadata.internal: true` so the skills.sh CLI surfaces only the six top-level skills, not every node.
- Cross-skill wikilinks (e.g. `[[../poke/references/auth-errors]]`) make all six skills navigable as one larger graph.

## Repository layout

```
poke-skills/
├── README.md
└── skills/
    ├── poke/                    # Node SDK + REST API + platform overview
    │   ├── SKILL.md
    │   └── references/  (overview, kitchen, use-cases, installation, api-keys,
    │                credential-resolution, send-message, create-webhook,
    │                send-webhook, rest-endpoint, auth-errors, async-semantics)
    ├── poke-python/             # Python SDK
    │   ├── SKILL.md
    │   └── references/  (install, quickstart, auth-and-config, exceptions, mcp-callbacks)
    ├── poke-webhooks/           # webhook trigger design + wiring patterns
    │   ├── SKILL.md
    │   └── references/  (condition-action-model, trigger-once-fire-many, payload-shape,
    │                retry-policy, vercel-pattern, github-actions-pattern,
    │                cron-pattern, bootstrapping)
    ├── poke-mcp-tunnel/         # CLI: login, mcp add, tunnel
    │   ├── SKILL.md
    │   └── references/  (install-cli, login, mcp-add-remote, tunnel-local,
    │                tunnel-vs-add, env-vars, troubleshooting)
    ├── poke-recipes/            # shareable install bundles
    │   ├── SKILL.md
    │   └── references/  (what-is-a-recipe, install-link, create-in-kitchen,
    │                create-via-cli, onboarding-context, shared-credentials,
    │                publishing-payouts)
    └── poke-integrations/       # built-in integrations + custom MCPs
        ├── SKILL.md
        └── references/  (builtin-integrations, custom-mcp, oauth-vs-apikey,
                     integrations-ui, disconnect-refresh)
```

## Get an API key

Create a **V2** API key at [poke.com/kitchen/api-keys](https://poke.com/kitchen/api-keys). Legacy V1 keys (`pk_` prefix) won't work against the current endpoints.

## References

- Node SDK: https://www.npmjs.com/package/poke
- Python SDK: https://pypi.org/project/poke/
- API docs: https://poke.com/docs/api
- All docs: https://poke.com/docs
- Recipe catalog: https://poke.com/recipes
- Integrations: https://poke.com/integrations
- Kitchen (developer dashboard): https://poke.com/kitchen
- Status: https://status.poke.com
- skills.sh: https://skills.sh / https://skills.sh/docs
- Skill-graph idea: [@akshay_pachaar](https://x.com/akshay_pachaar/status/2024848778415755327) / [arscontexta](https://github.com/agenticnotetaking/arscontexta)

## License

MIT
