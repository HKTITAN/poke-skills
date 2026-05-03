---
name: integrations-custom-mcp
summary: Add any MCP-compatible server at poke.com/integrations/new — server URL + optional API key.
metadata:
  internal: true
---

# Custom MCP integrations

If the service you want isn't on the [[builtin-integrations|prebuilt list]], you can connect any [MCP](https://modelcontextprotocol.io)-compatible server.

## Web flow

1. Go to **[poke.com/integrations/new](https://poke.com/integrations/new)**.
2. Provide the **server URL** (e.g. `https://example.com/mcp`).
3. Optionally provide an **API key** if the server requires one.
4. Confirm and the integration appears under [[integrations-ui|poke.com/integrations]].

## CLI flow (equivalent)

```bash
poke mcp add https://example.com/mcp --name "My Server"
poke mcp add https://example.com/mcp --name "My Server" --api-key sk-xxx
```

See [[../../poke-mcp-tunnel/references/mcp-add-remote]] for full flag reference.

## What "MCP-compatible" means

Your server must implement the Model Context Protocol — tools/resources/prompts exposed via the standard MCP transport. Poke calls it like any other MCP client.

## Local development

Don't try to register `http://localhost:...` directly — Poke can't reach your machine. Use [[../../poke-mcp-tunnel/references/tunnel-local|`poke tunnel`]] for dev, then deploy and switch to `poke mcp add` for prod ([[../../poke-mcp-tunnel/references/tunnel-vs-add]]).
