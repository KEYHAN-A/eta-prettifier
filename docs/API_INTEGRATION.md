# API Integration Guide

This website is frontend-only and calls your existing gateway:

- Base URL: `https://api.keyhan.info`
- Response style: JSON with `success` and `error`

## Environment Variables

In `website/.env`:

```bash
VITE_API_BASE_URL=https://api.keyhan.info
VITE_SUBSCRIBE_PATH=/updates/subscribe
```

## Subscribe (Basic Newsletter)

```bash
curl -X POST "https://api.keyhan.info/updates/subscribe" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "source": "eta-ejs-prettifier-site",
    "consent": true
  }'
```

Example success response:

```json
{
  "success": true
}
```

## Optional Endpoint (if supported)

### Unsubscribe

```bash
curl -X POST "https://api.keyhan.info/updates/unsubscribe" \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

## UI Fallback Behavior

- If `VITE_SUBSCRIBE_PATH` is missing, the site can display waitlist mode.
