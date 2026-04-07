---
title: TikTok Skill
description: TikTok videos - user profiles, video stats, hashtag search
category: skills
---

# TikTok Skill

TikTok videos — user profiles, video stats, hashtag search.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `TAVILY_API_KEY` | Tavily API Key for web search | Yes |
| `TIKTOK_RESEARCH_API_KEY` | TikTok Research API Key | No |
| `TIKTOK_CLIENT_KEY` | TikTok App Client Key (Display API) | No |
| `TIKTOK_CLIENT_SECRET` | TikTok App Client Secret | No |

## Tools

| Tool | Description |
|------|-------------|
| `setup` | Set up TikTok API credentials |
| `get_user_info` | Get profile information for a TikTok user |
| `get_user_videos` | Get recent videos from a user |
| `get_video_stats` | Get statistics for a specific video |
| `search_videos` | Search for videos by keyword or hashtag |

## Setup

### Basic (Web Search)

Only Tavily API key required:

```bash
export TAVILY_API_KEY=your_key
```

### Enhanced (Research API)

Apply for [TikTok Research API](https://developers.tiktok.com/) for accurate stats.

## Usage Examples

```
Get info for TikTok user @charlidamelio
```

```
Get recent videos from @tiktok account
```

```
Search for videos with hashtag #dance
```

```
Get stats for video https://tiktok.com/@user/video/123456
```

## Dependencies

- `node-fetch` (optional)
- `tavily` (optional)

## License

MIT
