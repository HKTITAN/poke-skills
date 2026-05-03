---
name: poke-integrations
description: Connect tools and services to a user's Poke — built-in integrations (Linear, Notion, GitHub, Sentry, Vercel, Gmail, Outlook, etc.) and custom MCP servers via poke.com/integrations/new. Use when the user asks to "connect X to Poke", "add a custom MCP integration", "list available Poke integrations", "disconnect a service", or builds a recipe that requires specific integrations.
license: MIT
metadata:
  author: HKTITAN
  version: "1.0.0"
  graph: true
---

# Poke Integrations — Map of Content

Integrations are how a user's Poke agent gets access to tools and data. Two kinds:

- **Built-in** — prebuilt recipes for common services (OAuth/API key handled by Poke).
- **Custom MCP** — any [MCP-compatible](https://modelcontextprotocol.io) server, added by URL.

## Catalog

- [[references/builtin-integrations]] — the prebuilt list (Linear, Notion, GitHub, Sentry, Vercel, etc.).
- [[references/custom-mcp]] — adding any MCP server via poke.com/integrations/new.

## Auth & management

- [[references/oauth-vs-apikey]] — what to expect during connect.
- [[references/integrations-ui]] — managing connections at poke.com/integrations.
- [[references/disconnect-refresh]] — disconnecting / refreshing failed connections.

## Sibling skills

- [[../poke/SKILL]] — SDK / API.
- [[../poke-mcp-tunnel/SKILL]] — CLI for adding remote MCPs and tunneling local ones.
- [[../poke-recipes/SKILL]] — recipes can require specific integrations.
