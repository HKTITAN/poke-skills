---
name: python-auth-and-config
summary: Same credential resolution as Node — constructor → `POKE_API_KEY` → `~/.config/poke/credentials.json`.
metadata:
  internal: true
---

# Auth & config

The Python SDK resolves credentials in the same order as Node — see [[../../poke/references/credential-resolution]] for the canonical explanation.

## Resolution order

1. `api_key=` passed to `Poke(...)`.
2. `POKE_API_KEY` env var.
3. `~/.config/poke/credentials.json` (from `poke login`; see [[../../poke-mcp-tunnel/references/login]]).

## Options

| Option     | Env var          | Default                     |
|------------|------------------|-----------------------------|
| `api_key`  | `POKE_API_KEY`   | —                           |
| `base_url` | `POKE_API`       | `https://poke.com/api/v1`   |

```python
poke = Poke()                                  # env / login
poke = Poke(api_key="...")                      # explicit
poke = Poke(base_url="https://staging.poke.com/api/v1")
```

## V2 keys only

Same trap as Node: V1 keys (`pk_` prefix) are deprecated and will fail. See [[../../poke/references/api-keys]].
