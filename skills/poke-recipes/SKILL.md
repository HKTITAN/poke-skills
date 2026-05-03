---
name: poke-recipes
description: Build and publish Poke Recipes — shareable install bundles that combine onboarding context, a first message, required integrations, and a `poke.com/r/<code>` install link. Use when the user asks to "make a Poke recipe", "share my Poke setup", "create an install link", "publish to poke.com/recipes", or wants to monetize a Poke workflow via payouts.
license: MIT
metadata:
  author: HKTITAN
  version: "1.0.0"
  graph: true
---

# Poke Recipes — Map of Content

A **Recipe** is the shareable unit of Poke. It bundles: onboarding context, a prefilled first message, required integrations (MCP templates), and a public install link. Users hit the link, walk through auth, and are running your workflow in a minute.

For the broader platform context see [[../poke/references/overview]].

## Concept

- [[references/what-is-a-recipe]] — anatomy of a recipe; the four parts.
- [[references/install-link]] — `poke.com/r/<code>` URLs and partner URLs.

## Authoring

- [[references/create-in-kitchen]] — create via the Kitchen UI.
- [[references/create-via-cli]] — create via `poke tunnel ... --recipe`.
- [[references/onboarding-context]] — what to write in onboarding + first message.
- [[references/shared-credentials]] — when to enable shared creds vs require user auth.

## Publish & monetize

- [[references/publishing-payouts]] — publishing flow, payouts in Kitchen.

## Sibling skills

- [[../poke/SKILL]] — SDK / API.
- [[../poke-mcp-tunnel/SKILL]] — required CLI when building a recipe locally.
- [[../poke-integrations/SKILL]] — the integrations you reference from a recipe.
