# API Integration Guide

This website is frontend-only and calls your existing gateway:

- Base URL: `https://api.keyhan.info`
- Auth style: `Authorization: Bearer <token>`
- Response style: JSON with `success` and `error`

## Environment Variables

In `website/.env`:

```bash
VITE_API_BASE_URL=https://api.keyhan.info
VITE_SUBSCRIBE_PATH=/updates/subscribe
VITE_ME_PATH=/auth/me
```

## 1) Anonymous Subscribe

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

## 2) Authenticated Subscribe

```bash
curl -X POST "https://api.keyhan.info/updates/subscribe" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "email": "user@example.com",
    "source": "eta-ejs-prettifier-site",
    "consent": true
  }'
```

## 3) Validate Token / Current User

```bash
curl -X GET "https://api.keyhan.info/auth/me" \
  -H "Authorization: Bearer <token>"
```

## Optional Endpoints (if supported)

### Update preferences

```bash
curl -X PATCH "https://api.keyhan.info/updates/preferences" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"releaseEmails": true, "newsletter": false}'
```

### Unsubscribe

```bash
curl -X POST "https://api.keyhan.info/updates/unsubscribe" \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

## UI Fallback Behavior

- If `VITE_SUBSCRIBE_PATH` is missing, the site can display waitlist mode.
- If endpoint requires auth, user can provide token and retry.
- If `/auth/me` fails, the form reports token validation error.
