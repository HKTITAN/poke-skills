---
name: poke-auth-errors
summary: `PokeAuthError` (401/403) — what triggers it, never retry, surface distinctly.
metadata:
  internal: true
---

# Auth errors

The SDK exports `PokeAuthError`, thrown on `401` and `403`.

```ts
import { Poke, PokeAuthError } from "poke";

try {
  await poke.sendMessage("hi");
} catch (e) {
  if (e instanceof PokeAuthError) {
    // Surface to operator, do NOT retry.
  }
  throw e;
}
```

## Common causes

- Using a [[api-keys|V1 key]] (`pk_` prefix) against current endpoints.
- Key was rotated/revoked in Kitchen.
- Key never made it into the env (check [[credential-resolution]]).
- For [[send-webhook]]: wrong `webhookToken`, or the trigger was deleted.

## Retry policy

**Never** retry on `PokeAuthError`. Retrying spams Poke and can lock the key. For network errors and 5xx, retry with backoff — see [[../../poke-webhooks/references/retry-policy]].
