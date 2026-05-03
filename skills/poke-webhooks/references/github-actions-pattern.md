---
name: webhooks-github-actions-pattern
summary: Fire a Poke webhook from GitHub Actions on `failure()` (or any conditional).
metadata:
  internal: true
---

# Pattern: GitHub Actions

```yaml
- name: Notify Poke on failure
  if: failure()
  run: |
    curl -X POST "$POKE_WEBHOOK_URL" \
      -H "Authorization: Bearer $POKE_WEBHOOK_TOKEN" \
      -H "Content-Type: application/json" \
      -d "{
        \"repo\":\"${{ github.repository }}\",
        \"sha\":\"${{ github.sha }}\",
        \"run\":\"${{ github.run_id }}\",
        \"url\":\"${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}\"
      }"
  env:
    POKE_WEBHOOK_URL:   ${{ secrets.POKE_WEBHOOK_URL }}
    POKE_WEBHOOK_TOKEN: ${{ secrets.POKE_WEBHOOK_TOKEN }}
```

## Why curl, not the SDK

CI runners are short-lived; spinning up Node + installing the SDK to fire one HTTP call is wasteful. Hit the [[../../poke/references/rest-endpoint|REST endpoint]] directly.

## Setup

1. Create the trigger once — see [[trigger-once-fire-many]].
2. Add the URL + token to repo secrets.
3. Reference them in the workflow as above.

## Payload

Keep it tight — see [[payload-shape]]. A `url` field linking back to the failed run is the single most useful thing to include.
