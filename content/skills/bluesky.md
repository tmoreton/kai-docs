---
title: Bluesky Skill
description: Bluesky social - profiles, feeds, posts, AT Protocol
category: skills
---

# Bluesky Skill

Bluesky social — profiles, feeds, posts, AT Protocol integration.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `BLUESKY_IDENTIFIER` | Your Bluesky handle or DID | Yes |
| `BLUESKY_PASSWORD` | Your Bluesky app password | Yes |
| `BLUESKY_SERVICE` | AT Protocol service URL | No (default: https://bsky.social) |

## Tools

### Profile & Feed

| Tool | Description |
|------|-------------|
| `setup` | Set up Bluesky credentials |
| `get_profile` | Get a user's profile information |
| `get_feed` | Get recent posts from a user's feed |
| `get_session` | Get current authentication session info |

### Posting

| Tool | Description |
|------|-------------|
| `post_post` | Post a new post to Bluesky |
| `search_posts` | Search posts by keyword or phrase |

### Interactions

| Tool | Description |
|------|-------------|
| `get_notifications` | Get notifications |
| `follow_user` | Follow a user |
| `like_post` | Like a specific post |
| `repost_post` | Repost a specific post |

## Setup

1. Create account at [bsky.app](https://bsky.app)
2. Go to Settings → App Passwords
3. Create an app password
4. Use your handle (e.g., `user.bsky.social`) and app password

## Usage Examples

```
Get profile for @bsky.app
```

```
Get recent posts from @user.bsky.social
```

```
Post "Hello Bluesky! 🦋" to my account
```

```
Search for posts about "AI"
```

```
Follow @user.bsky.social
```

## Dependencies

- `@atproto/api` - Official AT Protocol JavaScript client

## License

MIT
