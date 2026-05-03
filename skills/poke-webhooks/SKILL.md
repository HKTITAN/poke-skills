---
name: poke-webhooks
description: Design and wire up Poke webhook triggers — translate an event source (deploy fail, new signup, alert) into a `createWebhook` + `sendWebhook` pair with a sensible condition/action and a safe payload shape. Use when the user asks to "trigger Poke when X happens", "notify Poke from my app", "build a Poke webhook", or wires Poke into CI/cron/serverless events.
license: MIT
metadata:
  author: HKTITAN
  version: "1.0.0"
  graph: true
---

# Poke Webhooks — Map of Content

Poke webhooks are persistent triggers: register once, fire many. This skill is structured as a graph — scan the descriptions, follow only the `[[wikilinks]]` you need.

For SDK basics see the [[../poke/SKILL]] graph.

## Core mental model

- [[references/condition-action-model]] — what `condition` and `action` actually do; how to write good ones.
- [[references/trigger-once-fire-many]] — why you call `createWebhook` once and persist the result.
- [[references/payload-shape]] — what `data` should look like; identifiers, truncation, no secrets.

## Reliability

- [[references/retry-policy]] — backoff rules per error class; idempotency notes.

## Wiring patterns (one node per source)

- [[references/vercel-pattern]] — Next.js / Vercel route handler.
- [[references/github-actions-pattern]] — fire from CI on `failure()`.
- [[references/cron-pattern]] — scheduled / digest triggers.
- [[references/bootstrapping]] — checklist for adding Poke webhooks to an existing app.

## Sibling nodes (in the `poke` graph)

- [[../poke/references/create-webhook]] — the SDK method.
- [[../poke/references/send-webhook]] — the firing method.
- [[../poke/references/auth-errors]] — what `PokeAuthError` means for webhooks.
