---
title: Facebook Skill
description: Facebook Pages - page info, posts, insights, publishing
category: skills
---

# Facebook Skill

Facebook Pages — page info, posts, insights, publishing via Graph API.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `FACEBOOK_ACCESS_TOKEN` | Facebook Page Access Token | Yes |
| `FACEBOOK_PAGE_ID` | Facebook Page ID | Yes |

## Tools

| Tool | Description |
|------|-------------|
| `setup` | Set up Facebook API credentials |
| `get_page_info` | Get page details (name, followers, category) |
| `get_page_posts` | Get recent posts with engagement metrics |
| `get_page_insights` | Get page analytics (impressions, reach, engagement) |
| `post_to_page` | Post content to the Facebook page |

## Setup

1. Go to [Facebook Developers](https://developers.facebook.com/tools/explorer/)
2. Get a Page Access Token
3. Find your Page ID in Page Settings > Page Info

## Usage Examples

```
Get my Facebook page info
```

```
Get recent posts from my page
```

```
Post "Hello from AI!" to my Facebook page
```

```
Get page insights for last 7 days
```

## License

MIT
