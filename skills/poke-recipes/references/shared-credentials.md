---
name: recipes-shared-credentials
summary: Shared creds = your auth ships with the recipe; otherwise each user authenticates themselves.
metadata:
  internal: true
---

# Shared credentials

When configuring required integrations on a recipe, you decide whether credentials are **shared** (yours, baked in) or **per-user** (each installer authenticates).

## Per-user (default, almost always right)

- User runs OAuth / pastes their own API key on install.
- Their data stays theirs; you never see it.
- Right for any recipe that touches the user's accounts (email, calendar, GitHub, Linear, etc.).

## Shared

- Your credentials ship with the recipe; every installer hits the integration as you.
- Right only when:
  - The integration is **read-only public data** you happen to have access to.
  - You're running a demo / showcase you control end-to-end.
  - The integration's TOS allows sharing creds.
- **Never share creds for** anything billable, anything with PII, OAuth tokens for major providers (Google/Microsoft), or anything that could be abused at scale.

## Rule of thumb

Default to per-user. Only flip on shared after thinking through what an installer could do with your creds. If you wouldn't email the credential to a stranger, don't ship it shared.
