---
name: recipes-onboarding-context
summary: Onboarding context = what the agent knows; first message = what it does immediately. Both should be specific.
metadata:
  internal: true
---

# Onboarding context & first message

Two short pieces of writing that decide whether your recipe feels magical or generic.

## Onboarding context

Persistent context the agent holds about *this* recipe's user. Treat it like a system prompt: who is this user, what's their goal, what tools have they connected, what defaults should the agent assume.

**Good** — concrete, actionable:
> "User is a developer who just connected GitHub and Linear. They want to triage GitHub issues into Linear tickets. Default to creating tickets in the 'Bugs' team unless told otherwise."

**Bad** — vague:
> "User is a developer."

## First message

What the agent says or does *immediately* after install — before the user types anything. The most reliable way to demonstrate value in 5 seconds.

**Good** — proves the integrations work:
> "I'm connected to your GitHub and Linear. Want me to scan your last 24h of issues and propose tickets?"

**Bad** — empty greeting:
> "Hello! I'm your assistant."

## Rules of thumb

- Reference connected [[../../poke-integrations/SKILL|integrations]] by name in both fields. The user just authed them — show that work was real.
- Make the first message **propose an action**, not ask "what do you want to do?". Most users don't know.
- If your recipe needs particular `condition`/`action` triggers, mention them in onboarding context — see [[../../poke-webhooks/references/condition-action-model]].
