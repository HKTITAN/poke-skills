---
name: cli-mcp-add-remote
summary: `poke mcp add <url> --name "..."` — register a publicly-reachable MCP server.
metadata:
  internal: true
---

# `poke mcp add <url>`

Register a remote MCP server with the user's Poke agent.

```bash
poke mcp add https://example.com/mcp --name "My Server"
poke mcp add https://example.com/mcp --name "My Server" --api-key sk-xxx
```

## Flags

| Flag                  | Description                                      |
|-----------------------|--------------------------------------------------|
| `-n, --name <name>`   | Display name for the connection (**required**)   |
| `-k, --api-key <key>` | API key the MCP server itself requires (if any)  |

## When to use this vs tunnel

If the server is already deployed, use this. If you're iterating locally, use [[tunnel-local]] instead. Decision rubric in [[tunnel-vs-add]].
