---
name: poke-use-cases
summary: Canonical patterns for the API — desktop capture, event automation, service bridging, context-rich instructions.
metadata:
  internal: true
---

# API use cases

The four patterns Poke documents for the API:

## 1. Desktop capture

A browser extension or desktop hotkey that fires `sendMessage` with the current selection / page / clipboard. Useful for "save this for later", "summarize this", "remind me about this".

```ts
await poke.sendMessage(`Save this for later:\n${selection}\n${pageUrl}`);
```

## 2. Event automation (CI/CD, monitoring)

Fire on infra events. Use a [[create-webhook|persistent webhook]] rather than `sendMessage` so the agent has stable context. See [[../../poke-webhooks/references/github-actions-pattern]].

## 3. Service bridging

Wrap a service that doesn't have a Poke integration (Typeform, custom internal tool) by accepting their webhook in your code and forwarding to Poke as a webhook fire. The bridge lets you keep `condition`/`action` semantic on the Poke side.

## 4. Context-rich instructions

`sendMessage` accepts any text — pass URLs, code blocks, file paths, JSON snippets. The agent will treat them as context for whatever it's asked to do.

```ts
await poke.sendMessage(`Review this diff:\n\`\`\`diff\n${diff}\n\`\`\``);
```

## Pattern selection

| Frequency / shape           | Use                                   |
|-----------------------------|---------------------------------------|
| Ad-hoc / one-shot           | [[send-message]]                      |
| Recurring on a real event   | [[create-webhook]] + [[send-webhook]] |
| Periodic schedule           | [[../../poke-webhooks/references/cron-pattern]] |
| Bridge a 3rd-party service  | Webhook in, [[send-webhook]] out      |
