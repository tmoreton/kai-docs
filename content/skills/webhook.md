---
title: Webhook Skill
description: POST to Zapier, Make, and custom endpoints
category: skills
---

# Webhook Skill

Webhook triggers — POST to Zapier, Make, custom endpoints.

## Configuration

No required configuration - all parameters passed per-action.

## Tools

| Tool | Description |
|------|-------------|
| `setup` | Set up webhook configuration |
| `send_webhook` | Send POST with JSON payload to any URL |
| `send_with_auth` | Send POST with Bearer token or API key |
| `test_endpoint` | Test connectivity to an endpoint |

## Usage Examples

### Simple Webhook

```
Send webhook to https://hooks.zapier.com/hooks/catch/123/abc with payload {"event": "signup"}
```

### Authenticated Webhook

```
Send authenticated webhook to https://api.example.com/webhook with Bearer token xyz123
```

### Test Endpoint

```
Test if https://api.example.com/health is reachable
```

## Parameters

### send_webhook

- `url` (required) - Webhook URL
- `payload` - JSON payload (default: empty object)
- `headers` - Additional HTTP headers

### send_with_auth

- `url` (required) - Webhook URL
- `auth_type` (required) - `bearer` or `api_key`
- `auth_token` - Bearer token
- `api_key` - API key (sent as X-API-Key header)
- `payload` - JSON payload
- `headers` - Additional headers

### test_endpoint

- `url` (required) - URL to test
- `method` - HTTP method (default: GET)
- `headers` - Additional headers
- `timeout` - Request timeout in ms (default: 10000)

## Common Integrations

- **Zapier**: Use webhook trigger in your Zap
- **Make (Integromat)**: Add webhook module to scenario
- **IFTTT**: Use Webhooks service
- **Custom**: Any HTTP endpoint that accepts POST

## License

MIT
