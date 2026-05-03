---
name: cli-tunnel-local
summary: `poke tunnel <localhost-url>` — forward a running local MCP server to Poke. Tunnel does NOT start the server.
metadata:
  internal: true
---

# `poke tunnel <url>`

Forwards a local port to Poke so the agent can reach an MCP server running on the user's machine.

## The critical thing to know

**The tunnel only forwards traffic — it does not start your server.** Run the MCP server first, then point the tunnel at it.

```bash
# Terminal 1 — start the MCP server (whatever stack you use)
uv run python -m server          # listening on http://localhost:3000/mcp

# Terminal 2 — tunnel that port to Poke
poke tunnel http://localhost:3000/mcp --name "Local Dev"
```

## Flags

| Flag                  | Description                                  |
|-----------------------|----------------------------------------------|
| `-n, --name <name>`   | Display name for the connection (**required**) |
| `--recipe`            | Create a shareable recipe with a QR code     |

## Lifecycle

- Stays active until `Ctrl+C`.
- Auto re-syncs tools every **5 minutes**.
- For an immediate refresh after editing the server, restart `poke tunnel`.

## Decision: tunnel vs `mcp add`

See [[tunnel-vs-add]].

## When it doesn't work

See [[troubleshooting]] — the most common cause is the local server isn't actually listening.
