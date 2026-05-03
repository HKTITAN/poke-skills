---
name: recipes-create-via-cli
summary: `poke tunnel <url> --recipe` — package a local MCP server as a shareable recipe with QR code.
metadata:
  internal: true
---

# Create a recipe via the CLI

Use when the recipe wraps a *local* MCP server you're developing.

```bash
# 1. Auth once
npx poke@latest login

# 2. Start your MCP server (whatever stack)
uv run python -m server   # → http://localhost:3000/mcp

# 3. Tunnel it AS a recipe
npx poke@latest tunnel http://localhost:3000/mcp \
  --name "My Recipe" \
  --recipe
```

The CLI prints both the [[install-link]] and a QR code.

## Critical caveat

> "The tunnel must stay active for shared users to access your local server."

This is dev/demo only. For a recipe you want to ship long-term:

1. Deploy the MCP server to a public URL.
2. Use [[create-in-kitchen]] referencing the deployed URL via [[../../poke-integrations/references/custom-mcp]].
3. Don't rely on the tunnel staying up.

See [[../../poke-mcp-tunnel/references/tunnel-vs-add]] for the dev-vs-prod decision.

## CLI variants

`npx poke@latest <cmd>` (no install) and globally-installed `poke <cmd>` (after `npm i -g poke` — see [[../../poke-mcp-tunnel/references/install-cli]]) are equivalent.
