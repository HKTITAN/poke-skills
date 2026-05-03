---
name: cli-troubleshooting
summary: Common CLI failures — not logged in, tunnel up but no tools, port collisions, stale tools.
metadata:
  internal: true
---

# Troubleshooting

## "Not logged in"

Run [[login|`poke login`]]. If headless, set `POKE_API_KEY` instead — see [[env-vars]].

## Tunnel connects but the agent can't see tools

The tunnel forwards what's there. If the local server isn't actually serving, the tunnel has nothing to relay.

```bash
# From the same machine, hit the URL you passed to `poke tunnel`:
curl http://localhost:3000/mcp
```

If that fails, fix the MCP server first. The tunnel itself is rarely the culprit — see [[tunnel-local]].

## Tools missing after edits

`poke tunnel` re-syncs every **5 minutes**. For an immediate refresh, restart the tunnel.

## Port collisions

`poke tunnel` does **not** bind a local port — only your MCP server does. "Port already in use" errors come from the MCP server, not the tunnel.

## Auth on the tunneled server

If your MCP server requires its own API key, that's between Poke and the server — `poke mcp add ... --api-key` handles it for remote servers (see [[mcp-add-remote]]). For tunneled local servers, configure auth on the server itself.
