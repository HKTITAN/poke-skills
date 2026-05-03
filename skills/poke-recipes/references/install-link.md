---
name: recipes-install-link
summary: Recipes get a `poke.com/r/<referralCode>` URL; partners can use custom URLs.
metadata:
  internal: true
---

# Install links

Published recipes get a public install URL.

## Default form

```
https://poke.com/r/<referralCode>
```

Tracks installs back to your Kitchen account for [[publishing-payouts|payouts]].

## Partner form

Approved partners get custom URLs (e.g. branded `poke.com/<partner>`). Apply via Kitchen.

## QR codes

When you create a recipe via [[create-via-cli|`poke tunnel ... --recipe`]], the CLI prints a QR code rendering of the install link — useful for talks, demos, and physical handoffs.

## What the user sees

Opening the link launches Poke onboarding, walks them through any [[../../poke-integrations/SKILL|integration]] auth, and seeds the agent with your [[onboarding-context]]. They land in iMessage/Telegram/SMS already set up. See [[../../poke/references/overview]] for channel info.
