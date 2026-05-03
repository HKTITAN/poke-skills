---
name: webhooks-bootstrapping
summary: Six-step checklist for adding Poke webhooks to an existing app, end-to-end.
metadata:
  internal: true
---

# Bootstrapping checklist

When asked to add Poke webhooks to an existing app, walk through these in order:

1. **Get a key** — V2 only. See [[../../poke/references/api-keys]].
2. **Set `POKE_API_KEY` in env** — local + deploy target. See [[../../poke/references/credential-resolution]].
3. **Mint the trigger** — one-shot script or REPL call to [[../../poke/references/create-webhook]] with the user's chosen [[condition-action-model|condition/action]].
4. **Persist URL + token** — env vars named after the trigger (`POKE_<NAME>_WEBHOOK_URL` / `_TOKEN`). See [[trigger-once-fire-many]].
5. **Wire `sendWebhook`** — pick the matching pattern: [[vercel-pattern]], [[github-actions-pattern]], [[cron-pattern]]. Shape `data` per [[payload-shape]].
6. **Test end-to-end** — fire one real event, confirm Poke surfaces a message before declaring done.

## Don't skip step 6

Most webhook bugs (wrong env name, V1 key, malformed `data`, leaked token) only show on a real fire. A green test isn't done until the agent has actually messaged the user.
