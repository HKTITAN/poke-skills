---
name: poke-send-webhook
summary: `poke.sendWebhook({ webhookUrl, webhookToken, data })` — fire an existing trigger with JSON data.
metadata:
  internal: true
---

# `sendWebhook({ webhookUrl, webhookToken, data })`

```ts
await poke.sendWebhook({
  webhookUrl:   process.env.POKE_DEPLOY_WEBHOOK_URL!,
  webhookToken: process.env.POKE_DEPLOY_WEBHOOK_TOKEN!,
  data: { repo: "acme/api", branch: "main", error: "OOM killed" },
});
// { success: true }
```

## Signature

```ts
sendWebhook(args: {
  webhookUrl:   string;
  webhookToken: string;
  data:         Record<string, unknown>;
}): Promise<{ success: boolean }>
```

## What `data` should look like

`data` is any JSON-serializable object. The agent interprets it through the `condition`/`action` set at [[create-webhook]] time. For shape guidelines (flatness, identifiers, truncation, no secrets) see [[../../poke-webhooks/references/payload-shape]].

## Failure modes

- Network error → retry with backoff. See [[../../poke-webhooks/references/retry-policy]].
- 401/403 → [[auth-errors]]. Do NOT retry.
- 4xx other → log payload + status, do NOT retry; payload is malformed.
- 5xx → retry with backoff.

## Idempotency

Poke does not dedupe. If your event source can deliver duplicates, dedupe upstream and include a stable id in `data`.
