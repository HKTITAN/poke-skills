---
name: webhooks-trigger-once-fire-many
summary: Call `createWebhook` once; persist the URL + token; fire many times via `sendWebhook`.
metadata:
  internal: true
---

# Trigger once, fire many

Every call to [[../../poke/references/create-webhook]] mints a *new* trigger. Don't recreate per fire — that's the most common bug.

## Pattern

```ts
// One-shot setup script (run manually or as a deploy step)
const wh = await poke.createWebhook({
  condition: "When a production deploy fails",
  action:    "Send me a one-paragraph summary",
});
console.log(wh.webhookUrl, wh.webhookToken);
```

Persist the pair as env vars or in a secrets manager:

```
POKE_DEPLOY_WEBHOOK_URL=...
POKE_DEPLOY_WEBHOOK_TOKEN=...
```

Then in your event handler, only call [[../../poke/references/send-webhook]]:

```ts
await poke.sendWebhook({
  webhookUrl:   process.env.POKE_DEPLOY_WEBHOOK_URL!,
  webhookToken: process.env.POKE_DEPLOY_WEBHOOK_TOKEN!,
  data: { /* ... */ },
});
```

## Why this matters

- Recreating per fire produces an explosion of orphaned triggers in the user's account.
- The token is a **secret** — leaking it lets anyone fire your trigger.
- See [[../../poke/references/auth-errors]] if a stored token starts failing — it may have been rotated.
