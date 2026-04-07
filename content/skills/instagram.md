---
title: Instagram Skill
description: Instagram content - profiles, posts, hashtags, insights
category: skills
---

# Instagram Skill

Instagram content — profiles, posts, hashtags, insights via Instagram Graph API.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `INSTAGRAM_ACCESS_TOKEN` | Instagram access token (Basic Display or Graph API) | No |
| `INSTAGRAM_APP_ID` | Instagram App ID (for hashtag search) | No |
| `INSTAGRAM_APP_SECRET` | Instagram App Secret (for token refresh) | No |

## Tools

| Tool | Description |
|------|-------------|
| `setup` | Set up Instagram API credentials |
| `get_user_info` | Get Instagram user profile information |
| `get_user_posts` | Get media posts from a user's account |
| `search_hashtags` | Search for media by hashtag (Business/Creator account required) |
| `get_media_stats` | Get statistics and insights for a specific post |
| `get_account_insights` | Get account-level insights and analytics |

## Setup

1. Go to [Meta for Developers](https://developers.facebook.com/apps/)
2. Create a new app
3. Add Instagram product
4. Get App ID and App Secret
5. Generate access token

## Usage Examples

```
Get info for Instagram user @natgeo
```

```
Get recent posts from @design account
```

```
Search for posts with hashtag #travel
```

```
Get analytics for my Instagram business account
```

## Notes

- Hashtag search requires a Business/Creator account
- Some features require additional permissions from Meta
- Basic profile data can be retrieved without authentication

## License

MIT
