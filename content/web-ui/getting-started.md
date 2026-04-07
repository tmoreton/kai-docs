---
title: Web UI Getting Started
description: Browser-based chat interface with SSE streaming for Kai
category: web-ui
---

# Web UI Getting Started

Kai includes a browser-based chat interface with real-time streaming, session management, and agent control.

## Starting the Server

```bash
# Start web server (includes API + UI + agent daemon)
kai server

# Custom port
kai server --port 3000

# API + agents only (no UI)
kai server --no-ui

# API + UI only (no agents)
kai server --no-agents
```

Default URL: `http://localhost:3141`

## Features

- **Real-time streaming** - SSE-based chat with token-by-token display
- **Session management** - Create, view, and delete conversations
- **Agent dashboard** - Monitor and control background agents
- **Model switching** - Change LLM models on the fly
- **Tool visualization** - See which tools are being called
- **Markdown rendering** - Full support for code blocks, lists, etc.

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

## Architecture

```
src/web/
├── server.ts         # Hono HTTP server + SSE streaming
└── public/
    └── index.html    # Web UI (SPA)
```

The web UI is a single-page application that communicates with the server via:
- SSE (Server-Sent Events) for streaming responses
- REST API for session/agent management

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

## Non-Technical Users

The Web UI is designed for users without coding experience. No terminal commands required — just open your browser and chat!

For more details, see the [Simple Chat UI Guide](../CHAT_UI_GUIDE.md).
