---
title: Git Skill
description: Advanced Git operations for AI assistants
category: skills
---

# Git Skill

Advanced Git operations for AI assistants. Works with **Claude Desktop** via MCP, or with Kai.

**Not for Claude Code** — if you're using the `claude` CLI tool, use claude-skills instead.

## Installation

### Step 1: Install MCP Adapter

```bash
npm install -g @kai-skills/mcp-adapter
```

### Step 2: Configure Claude Desktop

Edit config:
- **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Add the Git skill:

```json
{
  "mcpServers": {
    "git": {
      "command": "npx",
      "args": ["-y", "kai-skill-mcp", "/path/to/kai-skills/skills/git"]
    }
  }
}
```

### Step 3: Restart Claude Desktop

## Requirements

- Git CLI installed
- GitHub CLI (`gh`) — only needed for `git_pr_create`

## Tools

| Tool | Description |
|------|-------------|
| `git_smart_commit` | AI-powered commit with auto-generated messages |
| `git_pr_create` | Full PR workflow (branch, commit, push, open PR) |
| `git_log_summary` | Summarize commit history with statistics |
| `git_branch_suggest` | Suggest branch names based on context |
| `git_status_detailed` | Detailed status with file analysis |

## Configuration

Set these environment variables to customize behavior:

```bash
GIT_DEFAULT_BRANCH=main  # Default base branch for PRs
```

## Usage Examples

```
Commit my changes with a good message
```

```
Create a PR for this feature
```

```
Show me a summary of recent commits
```

```
What files have I changed?
```

## Programmatic Usage

```javascript
// Smart commit with push
const result = await gitSkill.actions.git_smart_commit({
  scope: "api",
  push: true
});

// Create PR
const pr = await gitSkill.actions.git_pr_create({
  title: "Add user authentication",
  body: "Implements JWT-based auth with refresh tokens"
});
```

## License

MIT
