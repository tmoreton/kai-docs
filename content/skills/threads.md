---
title: Threads Skill
description: Threads posts - profiles, publishing, replies, insights
category: skills
---

# Threads Skill

Threads posts — profiles, publishing, replies, insights via Meta Threads API.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `THREADS_ACCESS_TOKEN` | Threads Access Token (from Meta OAuth) | No |
| `THREADS_USER_ID` | Threads User ID | No |

## Tools

| Tool | Description |
|------|-------------|
| `setup` | Set up Threads API credentials |
| `get_user_profile` | Get the authenticated user's profile |
| `get_threads` | Get a list of threads posted by a user |
| `get_thread_replies` | Get replies to a specific thread |
| `get_conversation` | Get a thread and its nested replies |
| `post_thread` | Post a new thread (text, image, video, or carousel) |
| `post_thread_carousel_item` | Create a carousel item container |
| `hide_reply` | Hide or unhide a reply |
| `get_insights` | Get insights/metrics for a specific thread |
| `get_rate_limits` | Check API rate limits |

## Setup

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Create an app
3. Add Threads product
4. Complete OAuth flow to get access token

## Usage Examples

```
Get my Threads profile
```

```
Get my recent threads
```

```
Post "Hello Threads!" with an image
```

```
Get replies to my latest thread
```

```
Get insights for thread ID 123456
```

## Post Types

- `TEXT` - Text only (max 500 chars)
- `IMAGE` - Single image post
- `VIDEO` - Video post
- `CAROUSEL` - Multiple images/videos

## License

MIT
