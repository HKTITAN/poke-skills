---
name: cli-tunnel-vs-add
summary: Use `tunnel` for local dev, `mcp add` for deployed servers. Don't keep a tunnel running in prod.
metadata:
  internal: true
---

# `tunnel` vs `mcp add`

| You want to…                          | Use                  |
|---------------------------------------|----------------------|
| Iterate on an MCP server on localhost | [[tunnel-local]]     |
| Connect a deployed, public MCP URL    | [[mcp-add-remote]]   |
| Share a dev demo over a QR code       | [[tunnel-local]] with `--recipe` |
| Long-lived production connection      | [[mcp-add-remote]] only |

## Rule of thumb

Tunnels are for development. Once the MCP server stabilizes, deploy it and switch to `poke mcp add`. Don't run `poke tunnel` as a permanent setup — it dies with the laptop.
