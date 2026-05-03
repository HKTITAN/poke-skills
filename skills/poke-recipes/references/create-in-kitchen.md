---
name: recipes-create-in-kitchen
summary: Web flow — poke.com/kitchen → Create recipe → name, onboarding, integrations.
metadata:
  internal: true
---

# Create a recipe in Kitchen

1. Go to [poke.com/kitchen](https://poke.com/kitchen).
2. Click **Create recipe**.
3. **Basics** — name (required), description (optional).
4. **Onboarding** — define the user context the agent should hold + the prefilled first message. See [[onboarding-context]].
5. **Integrations** — pick required MCP integrations from the catalog ([[../../poke-integrations/references/builtin-integrations]]) or reference a custom MCP ([[../../poke-integrations/references/custom-mcp]]). Decide whether to enable [[shared-credentials]].
6. Save → preview → publish.

## When to use this vs CLI

- **Kitchen** — recipes built around prebuilt integrations only; no local MCP server.
- **CLI** ([[create-via-cli]]) — recipes that include a *local* MCP server you're tunneling, or you want a QR code on the spot.

## After publishing

You get an [[install-link]] and your recipe shows up in Payouts ([[publishing-payouts]]).
