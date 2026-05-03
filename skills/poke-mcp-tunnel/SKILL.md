---
name: poke-mcp-tunnel
description: Connect a local MCP server to a Poke agent using the `poke` CLI — `poke login`, `poke mcp add` for remote URLs, and `poke tunnel` to forward a local port to Poke for development. Use when the user wants to "expose my MCP server to Poke", "test my MCP locally with Poke", "connect Poke to my localhost", or registers a remote MCP URL.
license: MIT
compatibility: Requires the `poke` CLI (npm install -g poke) and Node.js >= 18.
metadata:
  author: HKTITAN
  version: "1.0.0"
  graph: true
---

# Poke CLI: MCP & tunneling — Map of Content

The `poke` CLI ships with the same npm package as the [[../poke/SKILL|SDK]]. It handles auth, registering remote MCP servers, and tunneling a local MCP server to Poke for dev.

Scan the descriptions, follow only the `[[wikilinks]]` you need.

## Setup

- [[references/install-cli]] — installing the binary; Node version.
- [[references/login]] — `poke login`, `whoami`, `logout`; where credentials live.

## Connect an MCP server

- [[references/mcp-add-remote]] — `poke mcp add <url>` for a publicly reachable server.
- [[references/tunnel-local]] — `poke tunnel <url>` forwards localhost to Poke.
- [[references/tunnel-vs-add]] — when to use which.

## Operate

- [[references/env-vars]] — env vars the CLI honors.
- [[references/troubleshooting]] — common failures and what to check.

## Sibling skills

- [[../poke/SKILL]] — SDK / REST API.
- [[../poke-webhooks/SKILL]] — webhook triggers.
