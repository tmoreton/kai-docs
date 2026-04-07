---
title: Web Tools Skill
description: Web page fetching and Tavily web search
category: skills
---

# Web Tools Skill

A Kai skill for web operations. Provides web page fetching and Tavily web search.

## Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `fetch` | Fetch content from a URL | `url` (required), `method` |
| `search` | Search the web using Tavily | `query` (required), `max_results` |

## Installation

1. Copy this directory to your Kai skills folder
2. Set your Tavily API key:

```bash
export TAVILY_API_KEY=your_api_key_here
```

Or configure in the skill config under `tavily_api_key`.

Get your Tavily API key at: https://tavily.com

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `TAVILY_API_KEY` | Tavily API key for search | Yes |

## Usage Examples

```
Fetch the content from https://example.com
```

```
Search the web for "latest AI developments"
```

```
Search for "TypeScript tutorial" with 10 results
```

## Parameters

### fetch

- `url` (required) - URL to fetch
- `method` - HTTP method (default: GET)

### search

- `query` (required) - Search query
- `max_results` - Maximum results (default: 5)

## License

MIT
