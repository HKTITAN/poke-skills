---
name: integrations-oauth-vs-apikey
summary: Built-ins use OAuth or API key; Poke walks the user through whichever the service requires.
metadata:
  internal: true
---

# OAuth vs API key

When connecting a [[builtin-integrations|built-in integration]], Poke walks the user through whichever auth mechanism the underlying service requires:

- **OAuth** (Google, Microsoft, GitHub, Linear, Notion, etc.) — user is redirected to the service, approves scopes, comes back. Tokens are stored by Poke; refresh is automatic.
- **API key** (some services) — user pastes a key. Poke stores it encrypted.

For [[custom-mcp|custom MCPs]] auth is whatever the MCP server requires — typically the optional `--api-key` you pass at `poke mcp add` time, forwarded to the server on each call.

## What you control as a developer

You don't control the auth mechanism — that's set by the integrating service / MCP server. You can only:

- Decide *which* integrations a [[../../poke-recipes/SKILL|recipe]] requires.
- Decide whether to use [[../../poke-recipes/references/shared-credentials|shared credentials]] (almost never — be careful).

## When auth fails

The user is prompted to re-auth in [[integrations-ui]]. See [[disconnect-refresh]].
