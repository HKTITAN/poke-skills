---
name: recipes-what-is-a-recipe
summary: A Recipe = onboarding context + first-message behavior + required integrations + shareable install link.
metadata:
  internal: true
---

# What is a Recipe?

A Poke **Recipe** is a packaged install experience. When a user opens your recipe link, Poke walks them through auth for required integrations and seeds the agent with your onboarding context — so the user is running your workflow on first message.

## The four parts

1. **Name** (required) and description (optional).
2. **Onboarding context** — what the agent should know about the user / setup. See [[onboarding-context]].
3. **First message** — what the agent says or does on first contact.
4. **Required integrations** — MCP templates the user must connect (Linear, GitHub, custom MCP, etc.). See [[../../poke-integrations/SKILL]].

Plus a knob:
- **Shared credentials** — whether the recipe ships with your auth or asks each user to authenticate. See [[shared-credentials]].

## Where to author

Two paths, same result:
- Web: [[create-in-kitchen]] (poke.com/kitchen → Create recipe).
- CLI: [[create-via-cli]] (`poke tunnel ... --recipe`).

## Where it ends up

A public install URL — see [[install-link]].
