---
title: Memory System
description: Understanding Kai's three-layer memory - soul, archival, and recall
category: cli
---

# Memory System

Kai has three memory layers that work together to provide persistent context across sessions.

## Memory Layers

| Layer | Purpose | Storage |
|-------|---------|---------|
| **Soul** | Persistent identity (`persona`, `human`) + per-project context (`goals`, `scratchpad`) | `~/.kai/soul/` + `~/.kai/projects/{id}/` |
| **Archival** | Long-term knowledge store, searchable by keyword and tags | `~/.kai/projects/{id}/archival/` (JSONL) |
| **Recall** | Searchable archive of past conversations across sessions | `~/.kai/projects/{id}/recall/` (JSONL) |

Memory is **scoped per-project** (auto-detected via `.git`, `package.json`, etc.).

## Soul Memory

Soul memory is always in context and contains your identity and preferences.

### Core Blocks

| Block | Description | Tool |
|-------|-------------|------|
| `persona` | Kai's identity and personality | `core_memory_read` / `core_memory_update` |
| `human` | Information about you, the user | `core_memory_read` / `core_memory_update` |
| `goals` | Per-project goals and objectives | `core_memory_read` / `core_memory_update` |
| `scratchpad` | Working notes and temporary context | `core_memory_read` / `core_memory_update` |

### Reading Soul Memory

```bash
# View all core memory
/soul

# Or via tool
core_memory_read()
core_memory_read({ block: "persona" })
```

### Updating Soul Memory

```
Remember that I prefer TypeScript over JavaScript
```

This automatically updates the `human` block with your preferences.

## Archival Memory

Long-term knowledge storage that persists across sessions.

### Tools

| Tool | Purpose |
|------|---------|
| `archival_memory_insert` | Store long-term knowledge |
| `archival_memory_search` | Search long-term knowledge |

### Example Usage

```javascript
// Store knowledge
archival_memory_insert({
  content: "The API rate limit is 1000 requests/hour",
  source: "API documentation",
  tags: ["api", "limits"]
})

// Search knowledge
archival_memory_search({
  query: "rate limits",
  tags: ["api"]
})
```

## Recall (Conversation History)

Searchable archive of all past conversations.

### Tool

| Tool | Purpose |
|------|---------|
| `search_recall` | Search past conversation history |

### Example Usage

```javascript
search_recall({ query: "database migration" })
```

## Viewing Memory Stats

```bash
/soul  # Shows core memory + recall stats
```

## Project Scoping

Kai auto-detects project root and scopes memory:

1. Looks for `.git` directory
2. Looks for `package.json`
3. Uses current working directory

Each project has isolated:
- Goals and scratchpad
- Archival memory
- Recall history

## Storage Locations

```
~/.kai/
├── soul/
│   ├── persona           # Kai's identity
│   └── human             # User profile
├── projects/
│   └── {project-id}/
│       ├── goals         # Project objectives
│       ├── scratchpad    # Working notes
│       ├── archival/     # Knowledge JSONL files
│       └── recall/       # Conversation history JSONL
```
