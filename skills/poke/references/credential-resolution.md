---
name: poke-credential-resolution
summary: Order the SDK searches for credentials — constructor → env → `~/.config/poke/credentials.json`.
metadata:
  internal: true
---

# Credential resolution order

`new Poke()` resolves the API key in this order:

1. **`apiKey`** passed to the constructor.
2. **`POKE_API_KEY`** environment variable.
3. **CLI credentials** at `~/.config/poke/credentials.json` (created by `poke login`; respects `$XDG_CONFIG_HOME`).

```ts
new Poke({ apiKey: "..." });   // explicit
new Poke();                     // env or CLI creds
```

## Constructor options

| Option    | Env var         | Default                       |
|-----------|-----------------|-------------------------------|
| `apiKey`  | `POKE_API_KEY`  | —                             |
| `baseUrl` | `POKE_API`      | `https://poke.com/api/v1`     |

For local dev where you've already run `poke login`, the no-arg `new Poke()` form just works — no env needed. See [[../../poke-mcp-tunnel/references/login]] for `poke login`.

If a key is found but invalid, you'll see [[auth-errors]].
