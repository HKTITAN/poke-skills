---
name: python-quickstart
summary: `Poke()`, `send_message`, `create_webhook`, `send_webhook` — Python equivalents of the Node SDK methods.
metadata:
  internal: true
---

# Quickstart

```python
from poke import Poke

poke = Poke()  # picks up POKE_API_KEY from env

# Send a message
res = poke.send_message("Summarize my unread emails")
# {"success": True, "message": "Message sent successfully"}

# Create a webhook (do this once, persist the result)
wh = poke.create_webhook(
    condition="When a production deploy fails",
    action="Send me a one-paragraph summary",
)
# {"triggerId": "...", "webhookUrl": "...", "webhookToken": "..."}

# Fire it
poke.send_webhook(
    webhook_url=wh["webhookUrl"],
    webhook_token=wh["webhookToken"],
    data={"repo": "acme/api", "branch": "main", "error": "OOM killed"},
)
# {"success": True}
```

## Class

```python
class Poke:
    def __init__(self, api_key: str | None = None, base_url: str | None = None) -> None: ...
    def send_message(self, message: str) -> dict: ...
    def create_webhook(self, condition: str, action: str) -> dict: ...
    def send_webhook(self, webhook_url: str, webhook_token: str, data: dict) -> dict: ...
```

## Differences from Node

| Node                  | Python                |
|-----------------------|-----------------------|
| `sendMessage`         | `send_message`        |
| `createWebhook({...})`| `create_webhook(...)` (kwargs, not options object) |
| `sendWebhook({...})`  | `send_webhook(...)`   |
| `PokeAuthError`       | `AuthenticationError` (+ `ForbiddenError`, `RateLimitError`) — see [[exceptions]] |

Conceptual model is identical — see [[../../poke/references/send-message]], [[../../poke/references/create-webhook]], [[../../poke/references/send-webhook]] for semantics that apply equally here.
