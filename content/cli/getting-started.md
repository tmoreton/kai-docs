---
title: Getting Started with Kai CLI
description: Quick install, setup, and first run guide for Kai's interactive AI assistant
category: cli
---

# Getting Started

Kai is an AI coding assistant with persistent memory, background agents, and tool use. Powered by OpenRouter.

## Quick Start

```bash
# Install dependencies
npm install

# Set up your API key
cp .env.example .env
# Edit .env and add your OpenRouter API key

# Run in development
npm run dev

# Or build and run
npm run build
npm start
```

## Requirements

- Node.js 18+
- OpenRouter API key ([get one here](https://openrouter.ai/keys))
- Optional: Tavily API key for web search

## Environment Setup

Create a `.env` file with:

```bash
OPENROUTER_API_KEY=your_api_key_here
MODEL_ID=moonshotai/kimi-k2.5  # optional override
TAVILY_API_KEY=your_tavily_key  # optional, for web search
```

## First Run

Start the interactive REPL:

```bash
kai
```

Or run a one-shot query:

```bash
kai "explain this codebase"
```

## Resume Sessions

Kai automatically saves sessions. Resume where you left off:

```bash
kai --continue             # Resume most recent session
kai --resume <id>          # Resume specific session
kai --name "my session"    # Name the session
```

## Configuration Files

Kai loads config from (highest priority first):

1. `.kai/settings.json` (project-level)
2. `kai.config.json` (project-level)
3. `~/.kai/settings.json` (user-level)

### Settings Example

```json
{
  "model": "moonshotai/kimi-k2.5",
  "mcp": {
    "servers": {
      "example": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem", "/tmp"],
        "env": {}
      }
    }
  },
  "permissions": {
    "mode": "default",
    "allow": [],
    "deny": []
  },
  "hooks": {
    "before": {},
    "after": {}
  }
}
```

## Non-Technical Users

📖 New to coding? Check out the [Simple Chat UI Guide](CHAT_UI_GUIDE.md) — no coding experience required!

## Next Steps

- [Commands Reference](commands.md) - All available CLI and REPL commands
- [Memory System](memory.md) - How Kai remembers conversations and knowledge
- [Background Agents](agents.md) - Set up autonomous workflows
- [Tools Reference](tools.md) - All built-in tools and capabilities
