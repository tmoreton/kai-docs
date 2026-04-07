---
title: Tools Reference
description: Complete reference for all 25+ built-in tools available to Kai
category: cli
---

# Tools Reference

Kai's LLM has access to these tools for file operations, web access, memory management, and more.

## File Operations

| Tool | Description | Key Parameters |
|------|-------------|--------------|
| `bash` | Run shell commands (working directory persists) | `command` |
| `bash_background` | Start long-running processes (returns PID) | `command` |
| `read_file` | Read files with line numbers, offset/limit | `file_path`, `offset`, `limit` |
| `write_file` | Create or overwrite files | `file_path`, `content` |
| `edit_file` | Targeted text replacements | `file_path`, `old_string`, `new_string` |
| `glob` | Find files by pattern | `pattern` |
| `grep` | Search file contents with regex | `pattern` |

## Web & Search

| Tool | Description | Key Parameters |
|------|-------------|--------------|
| `web_fetch` | Fetch URL content (HTML → readable text) | `url`, `method` |
| `web_search` | Web search via Tavily | `query`, `max_results` |
| `generate_image` | Image generation via OpenRouter | `prompt`, `width`, `height` |
| `take_screenshot` | Capture screen for vision analysis | `region` |
| `analyze_image` | Analyze images with vision model | `image_path`, `question` |

## Memory & Recall

| Tool | Description | Key Parameters |
|------|-------------|--------------|
| `core_memory_read` | Read identity/context memory | `block` (optional) |
| `core_memory_update` | Update persona, human, goals, scratchpad | `block`, `content`, `operation` |
| `search_recall` | Search past conversation history | `query`, `limit` |
| `archival_memory_insert` | Store long-term knowledge | `content`, `source`, `tags` |
| `archival_memory_search` | Search long-term knowledge | `query`, `tags` |

## Sub-agents

| Tool | Description | Key Parameters |
|------|-------------|--------------|
| `spawn_agent` | Spawn subagents (explorer/planner/worker) | `agent_type`, `task` |
| `spawn_swarm` | Spawn multiple agents in parallel | `agents[]`, `swarm_name` |

## External Skills

| Tool | Description |
|------|-------------|
| `skill__*` | Dynamic tools from external skills (~/.kai/skills/) |

## Tool Details

### bash

Execute shell commands with persistent working directory.

```json
{
  "command": "npm install",
  "timeout": 120000
}
```

### bash_background

Start long-running background processes.

```json
{
  "command": "npm run dev",
  "wait_seconds": 5
}
```

### read_file

Read files with optional offset and limit for large files.

```json
{
  "file_path": "src/index.ts",
  "offset": 1,
  "limit": 50
}
```

### write_file

Create new files or completely overwrite existing ones.

```json
{
  "file_path": "src/new-file.ts",
  "content": "console.log('hello');"
}
```

### edit_file

Make targeted edits with exact string matching.

```json
{
  "file_path": "src/index.ts",
  "old_string": "const x = 1;",
  "new_string": "const x = 2;"
}
```

### web_search

Search the web via Tavily API.

```json
{
  "query": "latest TypeScript features",
  "max_results": 5
}
```

### web_fetch

Fetch and convert web pages to readable text.

```json
{
  "url": "https://example.com/docs",
  "method": "GET"
}
```

### generate_image

Generate images via OpenRouter.

```json
{
  "prompt": "A futuristic city at sunset",
  "width": 1280,
  "height": 720
}
```

### core_memory_update

Update memory blocks.

```json
{
  "block": "scratchpad",
  "content": "Working on feature X",
  "operation": "append"
}
```

### spawn_agent

Spawn specialized sub-agents.

```json
{
  "agent_type": "explorer",
  "task": "Analyze the codebase structure"
}
```

Agent types:
- `explorer` - Explore and analyze code
- `planner` - Create implementation plans
- `worker` - Execute specific tasks

## Skill Tools

When external skills are installed in `~/.kai/skills/`, Kai gains additional tools prefixed with `skill__`. For example:

- `skill__youtube_get_channel`
- `skill__twitter_search_tweets`
- `skill__browser_screenshot`

List loaded skills with `/skill` command.
