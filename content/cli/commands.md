---
title: CLI and REPL Commands
description: Complete reference for all Kai CLI commands and REPL slash commands
category: cli
---

# Commands Reference

## CLI Commands

### Core Commands

| Command | Description |
|---------|-------------|
| `kai` | Start interactive REPL |
| `kai "query"` | One-shot query (no interactive mode) |
| `kai --continue` | Resume most recent session |
| `kai --resume <id>` | Resume specific session by ID |
| `kai --name "name"` | Name the session |
| `kai --yes` | Auto-approve all tool calls (non-interactive) |
| `kai --model <id>` | Override model for this session |

### Server Commands

| Command | Description |
|---------|-------------|
| `kai server` | Start web server on port 3141 |
| `kai server --port 3000` | Custom port |
| `kai server --no-ui` | API + agents only (no web interface) |
| `kai server --no-agents` | API + UI only (no agent daemon) |
| `kai server --host 0.0.0.0` | Bind to all interfaces |

### Agent Management

| Command | Description |
|---------|-------------|
| `kai agent list` | List all background agents |
| `kai agent create <name> <workflow.yaml>` | Create agent from YAML workflow |
| `kai agent run <id>` | Run an agent now (one-time) |
| `kai agent output <id>` | View latest run output |
| `kai agent info <id>` | Agent details + run history |
| `kai agent delete <id>` | Delete an agent |
| `kai agent daemon` | Start the cron scheduler |
| `kai agent stop` | Stop the scheduler |

Agent create supports optional flags:
- `--schedule "0 */6 * * *"` - Cron schedule (e.g., every 6 hours)
- `--enabled` / `--disabled` - Enable/disable on creation

### MCP Servers

| Command | Description |
|---------|-------------|
| `kai mcp list` | List configured MCP servers and their tools |

### Skill Management

| Command | Description |
|---------|-------------|
| `kai skill list` | List installed skills |
| `kai skill install <name>` | Install a skill from npm |
| `kai skill uninstall <name>` | Remove a skill |

## REPL Commands (Slash Commands)

### Session Commands

| Command | Description |
|---------|-------------|
| `/help` | Show all available commands |
| `/clear` | Clear conversation history (keep system prompt) |
| `/compact` | Compress context to save tokens |
| `/sessions` | List recent sessions |
| `/soul` | View core memory (persona, human, goals) + recall stats |
| `/diff` | Show all changes made this session |
| `/export [path]` | Export session to markdown file |
| `/exit` | Exit Kai |

### Git Commands

| Command | Description |
|---------|-------------|
| `/git` | Git status + changed files |
| `/git diff` | Colorized diff (staged + unstaged) |
| `/git log [n]` | Recent commits (default 15) |
| `/git undo [n] [hard]` | Undo last N commits + clear conversation |
| `/git stash [msg]` | Stash uncommitted changes |
| `/git commit [msg] [--push]` | AI-generated commit + optional push |
| `/git pr [title]` | Create PR (branch + commit + push + open PR) |
| `/git branch [name]` | List or create/switch branches |

### Agent Commands

| Command | Description |
|---------|-------------|
| `/agent` | List background agents |
| `/agent run <id>` | Run an agent now |
| `/agent output <id>` | View agent output |
| `/agent info <id>` | Agent details + run history |

### Skill Commands

| Command | Description |
|---------|-------------|
| `/skill` | List loaded skills |
| `/skill reload` | Reload all skills (hot reload) |

### MCP Commands

| Command | Description |
|---------|-------------|
| `/mcp` | List connected MCP servers + tools |
| `/mcp add <name> <cmd>` | Add an MCP server |
| `/mcp remove <name>` | Remove an MCP server |

### Code Review Commands

| Command | Description |
|---------|-------------|
| `/review [focus]` | AI code review of current git changes |
| `/security-review [focus]` | Security-focused audit of git changes |
| `/plan` | Toggle plan mode (research → plan → implement) |

### Utility Commands

| Command | Description |
|---------|-------------|
| `/doctor` | Run system diagnostics (check Node, Git, API keys) |
| `/notify` | Show agent notifications |
| `/notify --all` | Show all notifications (including cleared) |

## Custom Commands

You can add custom slash commands by creating markdown files in `.kai/commands/`:

```markdown
---
name: deploy
description: Deploy the current project
---

# Deploy

Run the deployment workflow...
```

## Pipe Input

Kai accepts piped input for scripting:

```bash
# Pipe text to Kai
echo "explain this function" | kai
cat file.ts | kai "review this code"

# Pipe with one-shot query
cat error.log | kai "what's causing this error?"
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENROUTER_API_KEY` | Yes | OpenRouter API key |
| `MODEL_ID` | No | Default model (default: `moonshotai/kimi-k2.5`) |
| `TAVILY_API_KEY` | No | Enable web search via Tavily |
| `YOUTUBE_API_KEY` | No | Enable YouTube agent features |

## Configuration Files

Kai loads config from (highest priority first):

1. `.kai/settings.json` (project-level)
2. `kai.config.json` (project-level)  
3. `~/.kai/settings.json` (user-level)

### Example settings.json

```json
{
  "model": "moonshotai/kimi-k2.5",
  "mcp": {
    "servers": {
      "filesystem": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem", "/tmp"],
        "env": {}
      }
    }
  },
  "permissions": {
    "mode": "default",
    "allow": ["read_file", "bash"],
    "deny": ["write_file"]
  },
  "hooks": {
    "before": {
      "bash": "echo 'Running bash command...'"
    },
    "after": {
      "write_file": "echo 'File written'"
    }
  }
}
```
