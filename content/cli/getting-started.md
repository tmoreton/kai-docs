---
title: Getting Started with Kai CLI
description: Quick install, setup, and first run guide for Kai's interactive AI assistant
category: cli
---

# Getting Started

Kai is an AI coding assistant with persistent memory, background agents, and tool use. Powered by OpenRouter.

## Quick Start

### Option 1: Desktop App (macOS)

Download the native macOS app with built-in Node.js runtime:

[Download Kai Desktop v1.1.8](https://github.com/tmoreton/kai/releases/download/v1.1.8/Kai_v1.1.8_aarch64.dmg) — for Apple Silicon Macs

- Drag to Applications folder
- Open and set your OpenRouter API key on first launch
- No command line required

### Option 2: CLI Install (npm)

Install via npm for any platform (macOS, Linux, Windows):

```bash
npm install -g kai
```

Then set up your environment:

```bash
# Create env file
cp .env.example .env

# Edit .env and add your OpenRouter API key
OPENROUTER_API_KEY=your_key_here
```

### Option 3: Source Install

```bash
# Clone and install
git clone https://github.com/tmoreton/kai.git
cd kai
npm install

# Set up API key
cp .env.example .env
# Edit .env

# Run in development
npm run dev
```

## Requirements

- **Desktop app**: macOS 10.15+ (Apple Silicon)
- **CLI/npm**: Node.js 18+
- **All versions**: OpenRouter API key ([get one here](https://openrouter.ai/keys))
- Optional: Tavily API key for web search

## First Run

### Desktop App
1. Open Kai from Applications
2. Enter your OpenRouter API key on the onboarding screen
3. Start chatting in the web UI

### CLI

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

## Environment Setup

Create a `.env` file with:

```bash
OPENROUTER_API_KEY=your_api_key_here
MODEL_ID=moonshotai/kimi-k2.5  # optional override
TAVILY_API_KEY=your_tavily_key  # optional, for web search
```

## Next Steps

- [Commands Reference](commands.md) - All available CLI and REPL commands
- [Memory System](memory.md) - How Kai remembers conversations and knowledge
- [Background Agents](agents.md) - Set up autonomous workflows
- [Tools Reference](tools.md) - All built-in tools and capabilities
