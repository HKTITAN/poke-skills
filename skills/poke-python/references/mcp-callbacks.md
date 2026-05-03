---
name: python-mcp-callbacks
summary: Python-only — `with_callbacks`, `PokeCallbackMiddleware`, callback context for streaming progress from MCP tools to Poke.
metadata:
  internal: true
---

# MCP callbacks (Python 3.10+)

When you build an **MCP server in Python** that Poke connects to ([[../../poke-integrations/references/custom-mcp]]), the Python SDK provides a callbacks layer for streaming progress updates back to Poke during long-running tool calls. The Node SDK has no equivalent.

## Surface

```python
from poke import (
    with_callbacks,             # decorator for async tools
    PokeCallbackMiddleware,     # ASGI middleware
    extract_callback_context,   # manual header → context
    set_callback_context,       # set + return token
    reset_callback_context,     # restore previous
)
```

Requires Python **3.10+**.

## ASGI middleware (most apps)

Wrap your ASGI app (FastAPI, Starlette, etc.) so callback headers from Poke are extracted into a contextvar before each request:

```python
from fastapi import FastAPI
from poke import PokeCallbackMiddleware

app = FastAPI()
app.add_middleware(PokeCallbackMiddleware)
```

## `@with_callbacks` decorator

Decorate an async tool handler so it can emit progress / partial results that surface in Poke during the call:

```python
from poke import with_callbacks

@with_callbacks
async def long_running_tool(args):
    # ... emit progress through the callback context as work happens
    return result
```

## Manual context (for non-ASGI servers)

If you're not on ASGI, extract and set context yourself:

```python
from poke import extract_callback_context, set_callback_context, reset_callback_context

ctx = extract_callback_context(request_headers)
token = set_callback_context(ctx)
try:
    await do_work()
finally:
    reset_callback_context(token)
```

## When you need this

- Long-running tools where the user benefits from intermediate updates.
- MCP tools that stream partial results.
- Any tool whose runtime exceeds a few seconds and would otherwise feel "stuck" in chat.

If your MCP tools are sub-second and synchronous, you don't need callbacks at all.
