---
name: poke-overview
summary: What Poke is, where it lives (iMessage / Telegram / SMS), supported languages, status page.
metadata:
  internal: true
---

# What Poke is

[Poke](https://poke.com) is a personal AI assistant by Interaction Company. It lives **in messaging apps**, not in a dedicated UI — users interact with it the way they interact with a friend.

## Channels

- **iMessage** — supports inline replies (Nov 2025).
- **Telegram** — added Feb 2026.
- **SMS** — fallback for users without iMessage/Telegram.

Replies from API/SDK calls (`sendMessage`, webhook fires) surface in whichever of these the user has set up. See [[async-semantics]] — your code does not receive the agent's reply.

## Languages

English plus Spanish, Japanese, Chinese, French, German, Portuguese, Italian (as of Feb 2026). The agent picks language from user context — your `data` and `message` strings can be in any of these.

## What it can do (selection)

- Email (Gmail, Outlook — multi-account, multi-calendar, contacts).
- Recurring calendar events.
- PDF generation/editing with LaTeX formatting.
- Web search with verification.
- Proactive timezone handling across sources.
- Data visualization.

The agent's full toolset depends on which [[../../poke-integrations/SKILL|integrations]] the user has connected.

## Status

System status: **status.poke.com**.

## Developer surfaces

- **Kitchen** — developer dashboard ([[kitchen]]).
- **API/SDK** — see [[send-message]], [[create-webhook]], [[rest-endpoint]].
- **Recipes** — shareable install bundles ([[../../poke-recipes/SKILL]]).
- **Integrations / MCP** — connect tools/services ([[../../poke-integrations/SKILL]]).
