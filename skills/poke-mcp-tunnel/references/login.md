---
name: cli-login
summary: `poke login` / `whoami` / `logout`; creds live at `~/.config/poke/credentials.json`.
metadata:
  internal: true
---

# Authenticate

```bash
poke login    # opens a browser for device-code login
poke whoami   # prints the current account
poke logout   # clears stored credentials
```

## Where creds live

`~/.config/poke/credentials.json` — respects `$XDG_CONFIG_HOME`.

## SDK fallback

If `POKE_API_KEY` isn't set, the SDK falls back to these creds — see [[../../poke/references/credential-resolution]]. So `poke login` once + `new Poke()` (no args) just works for local dev.

## Headless / CI

`poke login` needs a browser. In headless environments, use a V2 [[../../poke/references/api-keys|API key]] in `POKE_API_KEY` instead.
