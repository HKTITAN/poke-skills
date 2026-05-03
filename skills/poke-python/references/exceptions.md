---
name: python-exceptions
summary: `PokeError` (base), `AuthenticationError` (401), `ForbiddenError` (403), `RateLimitError` (429). Richer than Node's single `PokeAuthError`.
metadata:
  internal: true
---

# Exceptions

The Python SDK splits errors more finely than Node's single `PokeAuthError`.

## Hierarchy

```python
from poke import (
    PokeError,            # base — has .status (HTTP code)
    AuthenticationError,  # 401 — bad/missing key
    ForbiddenError,       # 403 — key lacks permissions
    RateLimitError,       # 429 — rate limited
)
```

## Retry policy

| Exception              | Retry?                                |
|------------------------|---------------------------------------|
| `AuthenticationError`  | **No** — fix the key.                 |
| `ForbiddenError`       | **No** — fix scopes / regenerate key. |
| `RateLimitError`       | **Yes** — backoff (e.g. exponential, respect any `Retry-After` header). |
| Other `PokeError`      | Inspect `.status`; 5xx retry, 4xx don't. |
| Network exceptions (urllib/socket) | Yes — backoff. |

## Snippet

```python
from poke import Poke, AuthenticationError, RateLimitError, PokeError
import time

def fire(poke, **kwargs):
    for i in range(3):
        try:
            return poke.send_webhook(**kwargs)
        except AuthenticationError:
            raise                          # never retry
        except RateLimitError:
            time.sleep(2 ** i)
        except PokeError as e:
            if 500 <= e.status < 600 and i < 2:
                time.sleep(2 ** i)
                continue
            raise
```

For the conceptual model see [[../../poke/references/auth-errors]] and [[../../poke-webhooks/references/retry-policy]].
