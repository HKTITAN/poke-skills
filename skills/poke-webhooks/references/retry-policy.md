---
name: webhooks-retry-policy
summary: Retry rules per error class; never retry on auth errors; Poke does not dedupe.
metadata:
  internal: true
---

# Retry & idempotency

The SDK does no automatic retry. Wrap [[../../poke/references/send-webhook]] calls yourself.

## Per-error-class policy

| Error                      | Retry?                                  |
|----------------------------|-----------------------------------------|
| Network / DNS / timeout    | **Yes** — exponential backoff (1s, 4s, 16s; cap 3 tries). |
| 5xx                        | **Yes** — same backoff.                 |
| 401 / 403 ([[../../poke/references/auth-errors|`PokeAuthError`]]) | **No** — token wrong/revoked.         |
| 4xx other                  | **No** — payload malformed; log + alert. |

## Idempotency

Poke does **not** dedupe on its end. If your event source can deliver duplicates:

- Dedupe upstream (your queue, your DB).
- Include a stable `event_id` in `data` so the agent can reference it.
- Don't rely on Poke to drop the second fire — assume it will be processed.

## Concrete snippet

```ts
import { PokeAuthError } from "poke";

async function fireWithRetry(args) {
  for (let i = 0; i < 3; i++) {
    try { return await poke.sendWebhook(args); }
    catch (e) {
      if (e instanceof PokeAuthError) throw e;        // never retry
      if (i === 2) throw e;                            // last try
      await new Promise(r => setTimeout(r, 1000 * 4 ** i));
    }
  }
}
```
