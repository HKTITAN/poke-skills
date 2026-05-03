---
name: webhooks-payload-shape
summary: `data` rules — flat-ish keys, stable id, a URL, pre-truncate large fields, no secrets.
metadata:
  internal: true
---

# Payload shape

`data` is `Record<string, unknown>` — any JSON-serializable object. The agent reads it through the lens of [[condition-action-model|your condition/action]].

## Rules

- **Flat-ish keys** — lowercase, consistent casing (snake_case or camelCase, pick one).
- **Stable identifier** — `event_id`, `user_id`, `commit_sha`, etc. Lets the agent dedupe and reference.
- **A URL** — wherever the user can click through to the source of truth.
- **Pre-truncate** large fields (logs, stack traces) to ~500 chars. The agent doesn't need full logs.
- **No secrets** — payloads can surface in messages to the user. No tokens, keys, PII you wouldn't text yourself.

## Example (good)

```json
{
  "event_id": "evt_2k9...",
  "repo":     "acme/api",
  "branch":   "main",
  "sha":      "a1b2c3d",
  "error":    "OOM killed during build step 3/7",
  "url":      "https://ci.example.com/builds/4821"
}
```

## Example (bad)

```json
{
  "everything": "<<<5MB of build logs>>>",
  "api_key":    "sk-...",
  "data":       { "nested": { "deeply": { "again": {} } } }
}
```

For idempotency / dedup, see [[retry-policy]].
