---
name: poke
description: Build with the Poke developer SDK and REST API — send messages to a user's Poke agent, create webhook triggers, authenticate with API keys, and understand the platform (channels, Kitchen, integrations, recipes). Use when the user asks to "send a message to Poke", "call the Poke API", "use the poke npm package", "integrate with poke.com", or builds anything against `poke.com/api/v1`.
license: MIT
compatibility: Requires Node.js >= 18 for the SDK. The REST endpoint can be called from any HTTP client.
metadata:
  author: HKTITAN
  version: "1.1.0"
  graph: true
---

# Poke SDK & API — Map of Content

[Poke](https://poke.com) is a personal AI agent by Interaction Company. The `poke` npm package and REST API let you send the agent messages and create webhook triggers programmatically.

This skill is structured as a **graph**: scan the descriptions below, follow only the `[[wikilinks]]` you need. Don't read every node up front.

## Platform context

- [[references/overview]] — what Poke is, channels (iMessage / Telegram / SMS), languages, status.
- [[references/kitchen]] — the developer dashboard at poke.com/kitchen.
- [[references/use-cases]] — canonical API patterns: desktop capture, event automation, service bridging.

## Setup

- [[references/installation]] — installing the npm package, Node version requirements.
- [[references/api-keys]] — getting a V2 key, the V1 vs V2 trap.
- [[references/credential-resolution]] — order in which `Poke()` finds an API key.

## SDK methods (one node per method)

- [[references/send-message]] — `poke.sendMessage(text)`: fire one message at the agent.
- [[references/create-webhook]] — `poke.createWebhook({ condition, action })`: mint a persistent trigger.
- [[references/send-webhook]] — `poke.sendWebhook({ webhookUrl, webhookToken, data })`: fire an existing trigger.

## Talking to the API directly

- [[references/rest-endpoint]] — `POST /api/v1/inbound/api-message` from any language.

## When things go wrong

- [[references/auth-errors]] — `PokeAuthError`, retry rules, key rotation.
- [[references/async-semantics]] — what `success: true` actually means.

## Sibling skills

- [[../poke-webhooks/SKILL]] — designing condition/action pairs and wiring event sources.
- [[../poke-mcp-tunnel/SKILL]] — the `poke` CLI: login, registering a remote MCP, tunneling localhost.
- [[../poke-recipes/SKILL]] — creating shareable Recipe install bundles.
- [[../poke-integrations/SKILL]] — pre-built integrations and connecting custom MCPs to a user's Poke.

## Reference links

- npm: https://www.npmjs.com/package/poke
- API docs: https://poke.com/docs/api
- Get a key: https://poke.com/kitchen/api-keys
- Status: https://status.poke.com
