---
name: webhooks-condition-action-model
summary: `condition` = the event category, `action` = what the agent does each fire. Specific beats vague.
metadata:
  internal: true
---

# Condition / action model

The two strings you pass to [[../../poke/references/create-webhook]] are read **once** by the agent at trigger creation. They define the lens; the per-fire `data` is the specifics.

- **`condition`** — what *kind* of event this trigger represents. The agent uses it as context, not as a runtime filter (your code decides when to fire).
- **`action`** — what the agent should do each time the trigger fires.

## Good vs bad

| Use case      | Good                                                                                              | Bad                              |
|---------------|---------------------------------------------------------------------------------------------------|----------------------------------|
| Deploy fail   | `condition: "When a production deploy fails"` / `action: "Summarize the error in one paragraph"`  | `"deploy stuff"` / `"tell me"`   |
| New signup    | `"When a new pro-tier user signs up"` / `"Reply with their email and plan"`                       | `"signup"` / `"do something"`    |
| Cron digest   | `"When the daily metrics digest runs"` / `"Format the top 3 movers as bullets"`                   | `"daily"` / `"send report"`      |

## Rule of thumb

If you'd struggle to explain the trigger to a teammate in one sentence, it's too vague. Single-purpose triggers behave better than multi-purpose ones; create separate triggers per event kind rather than one mega-trigger.

For what travels in `data`, see [[payload-shape]].
