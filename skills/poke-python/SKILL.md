---
name: poke-python
description: Build with the Poke Python SDK — `pip install poke`. Mirrors the Node SDK with snake_case methods (`send_message`, `create_webhook`, `send_webhook`), richer exception types, and an MCP callbacks middleware for async tool progress updates. Use when the user is on Python (3.8+), writing a FastAPI/Flask/Django app, or building an MCP server in Python that needs Poke callbacks.
license: MIT
compatibility: Requires Python >= 3.8 for the core SDK; Python >= 3.10 for the MCP callbacks module.
metadata:
  author: HKTITAN
  version: "1.0.0"
  graph: true
---

# Poke Python SDK — Map of Content

The official Python SDK on PyPI: [`pip install poke`](https://pypi.org/project/poke/). Same surface as the Node SDK ([[../poke/SKILL]]) with Pythonic naming and finer-grained exceptions.

## Setup

- [[references/install]] — `pip install poke`; Python 3.8+; zero dependencies.
- [[references/quickstart]] — `Poke()`, `send_message`, `create_webhook`, `send_webhook` in 10 lines.
- [[references/auth-and-config]] — credential resolution + `base_url`.

## Reliability

- [[references/exceptions]] — `PokeError`, `AuthenticationError`, `ForbiddenError`, `RateLimitError`.

## MCP server-side (Python only — Node SDK has no equivalent)

- [[references/mcp-callbacks]] — `with_callbacks`, `PokeCallbackMiddleware`, callback context for streaming progress to Poke from your MCP tools.

## Cross-references

- The conceptual model is identical to Node — see [[../poke/SKILL]] for SDK methods, [[../poke-webhooks/SKILL]] for webhook design, [[../poke/references/use-cases]] for canonical patterns.
- For tunneling a Python MCP server to Poke, see [[../poke-mcp-tunnel/references/tunnel-local]].

## Reference

- PyPI: https://pypi.org/project/poke/
- API docs: https://poke.com/docs/api
