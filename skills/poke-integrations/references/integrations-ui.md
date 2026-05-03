---
name: integrations-ui
summary: poke.com/integrations — view, manage, and re-auth all connected integrations.
metadata:
  internal: true
---

# The integrations dashboard

**[poke.com/integrations](https://poke.com/integrations)** is where users manage connected services.

## What's there

- All active integrations and the linked accounts.
- Status indicators (healthy / failed / re-auth needed).
- Per-integration disconnect.
- Per-integration refresh / retry with re-authentication.
- Add new (links to [[builtin-integrations|catalog]] or [[custom-mcp|custom MCP]]).

## When to send the user there

- "Why isn't Poke seeing my recent emails?" → check the connection in `/integrations`.
- "I want to remove an integration" → `/integrations` → disconnect.
- "I rotated my API key" → `/integrations` → refresh / re-auth.
- "I want to add a custom MCP" → `/integrations/new`.

## Not to confuse with

- **[poke.com/kitchen](https://poke.com/kitchen)** — developer dashboard (API keys, recipes, payouts). See [[../../poke/references/kitchen]].
- **[poke.com/recipes](https://poke.com/recipes)** — recipe catalog for installing pre-built workflows.
