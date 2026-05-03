---
name: poke-async-semantics
summary: `success: true` means accepted, not that the agent has replied. Don't await replies inline.
metadata:
  internal: true
---

# Async semantics

Every Poke API call returning `{ success: true }` means **accepted for processing** — not that the agent has read, decided, or responded.

## What this means in practice

- Don't write code that waits for an agent reply on the same call.
- Don't loop polling a [[send-message]] response.
- The agent's reply (if any) surfaces in the user's normal Poke channels (SMS, iMessage, web app).
- For programmatic round-trips, use a webhook trigger ([[create-webhook]]) where the *action* feeds back into your system (e.g. the agent calls one of your tools), not a `sendMessage` await.

## Anti-pattern

```ts
const res = await poke.sendMessage("What's the weather?");
console.log(res.message); // ❌ "Message sent successfully" — NOT the answer
```

## Mental model

`sendMessage` is fire-and-forget at the API layer. The agent runs on its own clock.
