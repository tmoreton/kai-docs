---
title: Web UI Getting Started
description: Browser-based chat interface with SSE streaming for Kai
category: web-ui
---

# Web UI Getting Started

Kai includes a browser-based chat interface with real-time streaming, session management, and agent control.

## Starting the Server

The Web UI is built into both the Desktop app and CLI. It starts automatically when you run:

### Desktop App
The Desktop app includes the web UI built-in. Just open Kai and it will be available at `http://localhost:3141`.

### CLI

```bash
# Start web server (includes API + UI + agent daemon)
kai server

# Custom port
kai server --port 3000

# API + agents only (no UI)
kai server --no-ui

# API + UI only (no agents)
kai server --no-agents

# Bind to all interfaces (for remote access)
kai server --host 0.0.0.0
```

Default URL: `http://localhost:3141`

## Interface Sections

### Chat
- Real-time streaming responses
- Tool call visualization
- Session history sidebar
- Markdown rendering with code highlighting

### Code View
- Browse your project files
- View file contents with syntax highlighting
- Integrated with chat context

### Agents
- View all background agents
- Run agents manually
- Check agent status and logs
- Create new agents from YAML workflows

### Settings
- Configure API keys
- Change default model
- Manage MCP servers
- Adjust permissions

## Features

- **Real-time streaming** - SSE-based chat with token-by-token display
- **Session management** - Create, view, and delete conversations
- **Agent dashboard** - Monitor and control background agents
- **Model switching** - Change LLM models on the fly
- **Tool visualization** - See which tools are being called
- **Markdown rendering** - Full support for code blocks, lists, etc.
- **PWA support** - Install as a desktop app from browser

## Web API Endpoints

When running `kai server`, these endpoints are available:

### Status & Chat

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/status` | GET | Server status, model, usage |
| `/api/chat` | POST | Chat with SSE streaming |
| `/api/chat/stop` | POST | Cancel a streaming response |

### Sessions

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/sessions` | GET | List sessions |
| `/api/sessions/:id` | GET | Get session messages |
| `/api/sessions` | POST | Create new session |
| `/api/sessions/:id` | DELETE | Delete session |

### Agents

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/agents` | GET | List agents |
| `/api/agents/:id` | GET | Agent details + runs |
| `/api/agents/:id` | PATCH | Edit agent (toggle, rename, schedule) |
| `/api/agents/:id` | DELETE | Delete agent |
| `/api/agents/:id/run` | POST | Run agent |
| `/api/agents/:id/output` | GET | Latest run output |
| `/api/agents/:id/recap` | GET | LLM-generated run summary |
| `/api/agents/:id/logs` | GET | Agent logs |
| `/api/agents/:id/runs/:runId` | GET | Steps for a specific run |

### Models & Files

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/models` | GET | Available models (cached) |
| `/api/image` | GET | Serve local image files |

## Chat API Example

```javascript
// POST /api/chat
{
  "message": "Explain this code",
  "session_id": "abc123",
  "model": "moonshotai/kimi-k2.5"
}

// Response: SSE stream
// data: {"type": "token", "content": "Here"}
// data: {"type": "token", "content": " is"}
// data: {"type": "done"}
```

## Configuration

The web server respects all Kai configuration options from:
- `.kai/settings.json`
- `kai.config.json`
- `~/.kai/settings.json`
- Environment variables

## Architecture

```
packages/web/        # React SPA (Vite + React Router)
src/web/
├── server.ts       # Hono HTTP server + SSE streaming
└── public/         # Static assets
```

The web UI communicates with the server via:
- SSE (Server-Sent Events) for streaming responses
- REST API for session/agent management
- TanStack Query for data fetching and caching
