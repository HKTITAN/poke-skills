---
name: poke-create-webhook
summary: `poke.createWebhook({ condition, action })` — mint a persistent trigger; returns URL + token.
metadata:
  internal: true
---

# `createWebhook({ condition, action })`

```ts
const webhook = await poke.createWebhook({
  condition: "When a new user signs up",
  action:    "Send me a welcome summary in Slack",
});
// { triggerId, webhookUrl, webhookToken }
```

## Signature

```ts
createWebhook(args: { condition: string; action: string }): Promise<{
  triggerId:    string;
  webhookUrl:   string;
  webhookToken: string;
}>
```

## What it does

Registers a trigger on the user's account. The agent reads `condition` + `action` **once** at creation. Each subsequent fire (via [[send-webhook]]) attaches a payload that the agent interprets through that lens.

## Critical: call it once, persist the result

Every call mints a new trigger. Don't recreate per fire — store `webhookUrl` + `webhookToken` somewhere durable (env, KV, secrets manager) and reuse.

## Writing good condition / action pairs

That's a skill on its own — see [[../../poke-webhooks/references/condition-action-model]].

## Token treatment

`webhookToken` is a secret. It travels in the `Authorization` header on [[send-webhook]] calls — leak it and anyone can fire your trigger.
