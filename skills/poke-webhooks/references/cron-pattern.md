---
name: webhooks-cron-pattern
summary: Fire a Poke webhook from a scheduled task / cron — daily digests, periodic reports.
metadata:
  internal: true
---

# Pattern: cron / scheduled

For periodic triggers — daily digests, weekly reports, alert sweeps.

```ts
// scheduler/digest.ts — runs daily at 09:00
import { Poke } from "poke";

const poke = new Poke();

const digest = await buildMetricsDigest();

await poke.sendWebhook({
  webhookUrl:   process.env.POKE_DIGEST_WEBHOOK_URL!,
  webhookToken: process.env.POKE_DIGEST_WEBHOOK_TOKEN!,
  data: {
    period:    "2026-05-02",
    top_movers: digest.movers,        // pre-shaped: [{ name, delta }]
    summary_url: digest.dashboardUrl,
  },
});
```

## Hosts

- **Vercel Cron** — `vercel.json` schedule + a route handler (combine with [[vercel-pattern]]).
- **GitHub Actions schedule** — workflow with `schedule: - cron: '0 9 * * *'` + the [[github-actions-pattern]] curl.
- **Native cron / systemd timer** — any host that can run a one-shot script.

## Tips

- Pre-aggregate in your script; don't push raw data and ask the agent to summarize.
- The `condition`/`action` should describe the **digest**, not the underlying metric — see [[condition-action-model]].
- For long-running aggregations, separate "build digest" from "fire webhook" so retries on the fire don't recompute.
