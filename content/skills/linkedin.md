---
title: LinkedIn Skill
description: LinkedIn professional - profiles, posts, analytics, search
category: skills
---

# LinkedIn Skill

LinkedIn professional — profiles, posts, analytics, search via LinkedIn API v2.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `LINKEDIN_ACCESS_TOKEN` | LinkedIn OAuth 2.0 Access Token | No |
| `LINKEDIN_CLIENT_ID` | LinkedIn App Client ID | No |
| `LINKEDIN_CLIENT_SECRET` | LinkedIn App Client Secret | No |
| `TAVILY_API_KEY` | Tavily API key for web search fallback | No |

## Tools

| Tool | Description |
|------|-------------|
| `setup` | Set up LinkedIn API credentials |
| `get_profile_info` | Get LinkedIn profile information |
| `search_people` | Search for people by keywords, name, or title |
| `create_post` | Create a new post on LinkedIn |
| `get_post_stats` | Get engagement statistics for a post |

## Setup

1. Go to [LinkedIn Developers](https://linkedin.com/developers)
2. Create an app
3. Request OAuth 2.0 credentials
4. Get access token with required scopes

## Usage Examples

```
Get my LinkedIn profile info
```

```
Search for people with "AI Engineer" in their title
```

```
Create a LinkedIn post: "Excited to share my latest project!"
```

```
Get stats for my recent post
```

## Note

Posting requires `w_member_social` scope approval from LinkedIn.

## License

MIT
