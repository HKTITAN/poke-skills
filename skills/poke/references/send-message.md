---
name: poke-send-message
summary: `poke.sendMessage(text)` — fire one text message at the user's Poke agent.
metadata:
  internal: true
---

# `sendMessage(text)`

```ts
import { Poke } from "poke";
const poke = new Poke();
const res = await poke.sendMessage("What meetings do I have today?");
// { success: true, message: "Message sent successfully" }
```

## Signature

```ts
sendMessage(text: string): Promise<{ success: boolean; message: string }>
```

## What it does

Delivers `text` to the user's agent. The agent processes asynchronously and surfaces replies through the user's normal Poke channels (SMS, iMessage, web app). It does **not** return the agent's response — see [[async-semantics]].

## When to use

- One-shot prompts ("summarize my unread emails").
- Ad-hoc notifications where you don't need a persistent trigger.
- Anywhere a webhook would be overkill.

If you need to fire repeatedly on an event, use [[create-webhook]] + [[send-webhook]] instead — cheaper, gives the agent context.

## Equivalent raw call

This is sugar over [[rest-endpoint]] with body `{ "message": text }`.
