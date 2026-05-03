---
name: cli-env-vars
summary: Env vars the CLI honors — only override when pointing at non-prod.
metadata:
  internal: true
---

# Environment variables

| Variable          | Purpose                  | Default                     |
|-------------------|--------------------------|-----------------------------|
| `POKE_API_KEY`    | API key for SDK usage    | —                           |
| `POKE_API`        | API base URL             | `https://poke.com/api/v1`   |
| `POKE_FRONTEND`   | Frontend URL             | `https://poke.com`          |

## When to override

Only set `POKE_API` / `POKE_FRONTEND` when pointing at a non-production Poke environment (staging, internal). For normal use, leave defaults.

`POKE_API_KEY` is the one to set in CI / headless / Docker — see [[login]] for the interactive alternative, [[../../poke/references/credential-resolution]] for resolution order.
