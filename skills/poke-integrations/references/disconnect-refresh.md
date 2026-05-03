---
name: integrations-disconnect-refresh
summary: Disconnect or re-auth a failed integration from poke.com/integrations.
metadata:
  internal: true
---

# Disconnect / refresh

## Disconnect

[poke.com/integrations](https://poke.com/integrations) → integration → **Disconnect**. Removes Poke's access immediately. Doesn't delete data on the service side — it just revokes the link.

## Refresh / re-auth

Common when:

- OAuth token expired and refresh failed (rare but happens).
- User revoked Poke's app on the provider side (e.g. Google security review).
- An API key was rotated.

Flow: `/integrations` → integration → **Refresh** / **Re-authenticate** → walk through [[oauth-vs-apikey|the original auth flow]] again.

## Diagnosing "Poke can't see X"

Order of checks:

1. Is the integration listed and **healthy** at `/integrations`? If not, refresh.
2. Did the user grant Poke the right scopes? Some services let you authorize partial access.
3. Is the underlying service itself up? Check status.poke.com and the provider's status page.
4. For [[custom-mcp|custom MCPs]] — is the server reachable? Try the URL from a clean network. See [[../../poke-mcp-tunnel/references/troubleshooting]].
