---
name: webhooks-vercel-pattern
summary: Fire a Poke webhook from a Next.js / Vercel route handler.
metadata:
  internal: true
---

# Pattern: Vercel / Next.js route handler

```ts
// app/api/deploy-failed/route.ts
import { Poke } from "poke";

export async function POST(req: Request) {
  const event = await req.json();
  const poke = new Poke();   // reads POKE_API_KEY from env
  await poke.sendWebhook({
    webhookUrl:   process.env.POKE_DEPLOY_WEBHOOK_URL!,
    webhookToken: process.env.POKE_DEPLOY_WEBHOOK_TOKEN!,
    data: {
      repo:   event.repo,
      branch: event.branch,
      error:  event.error?.slice(0, 500),
    },
  });
  return new Response("ok");
}
```

## Notes

- Set the three env vars in Vercel project settings: `POKE_API_KEY`, `POKE_DEPLOY_WEBHOOK_URL`, `POKE_DEPLOY_WEBHOOK_TOKEN`.
- The trigger itself is created once via [[trigger-once-fire-many|the one-shot setup]].
- For payload field choices see [[payload-shape]].
- Wrap with [[retry-policy|the retry helper]] if the upstream caller can't itself retry.
