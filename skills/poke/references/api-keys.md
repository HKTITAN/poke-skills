---
name: poke-api-keys
summary: Get a V2 API key from Kitchen. Legacy V1 keys (`pk_` prefix) do NOT work.
metadata:
  internal: true
---

# API keys

Create keys at **[poke.com/kitchen/api-keys](https://poke.com/kitchen/api-keys)**.

## V1 vs V2 — this is the trap

- **V2 keys** — required for `POST /api/v1/inbound/api-message` and the modern SDK methods.
- **V1 keys** (`pk_` prefix) — *legacy*, will 401 against current endpoints. Don't use them.

If a `Poke` call throws [[auth-errors]] right after setup, check the key prefix first.

## Storage rules

- Store in env (`POKE_API_KEY`) or a secret manager. Never hardcode, never put in URLs, never bundle client-side.
- See [[credential-resolution]] for how the SDK finds the key.
