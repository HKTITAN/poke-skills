---
name: poke-rest-endpoint
summary: `POST /api/v1/inbound/api-message` — call the Poke API directly without the SDK.
metadata:
  internal: true
---

# REST endpoint (no SDK)

For runtimes without the SDK (Python, Go, Bash, edge worker, etc.).

## Endpoint

```
POST https://poke.com/api/v1/inbound/api-message
```

## Headers

```
Authorization: Bearer YOUR_V2_API_KEY
Content-Type: application/json
```

Use a V2 key — see [[api-keys]].

## Body

```json
{ "message": "Your instruction or question here" }
```

## Response

```json
{ "success": true, "message": "Message sent successfully" }
```

## curl

```bash
curl -X POST https://poke.com/api/v1/inbound/api-message \
  -H "Authorization: Bearer $POKE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"message":"Summarize my unread emails"}'
```

## Deprecated

`POST /api/v1/inbound-sms/webhook` is the legacy endpoint. Do not use it.

## Webhook firing

For firing a trigger created via [[create-webhook]], `POST` to the returned `webhookUrl` with `Authorization: Bearer <webhookToken>` and the `data` object as the JSON body. That's exactly what [[send-webhook]] does under the hood.
