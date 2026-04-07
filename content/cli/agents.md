---
title: Background Agents
description: Schedule autonomous workflows with cron via YAML definitions
category: cli
---

# Background Agents

Agents run autonomous YAML workflows on a cron schedule. Perfect for recurring tasks, monitoring, and automation.

## Creating an Agent

```bash
kai agent create <name> <workflow.yaml> [--schedule "0 */6 * * *"]
```

## Example Workflow

```yaml
name: nightly-commit
description: Auto-commit config changes
schedule: "0 2 * * *"
steps:
  - name: check_changes
    type: shell
    command: "cd ~/.kai && git status --porcelain"
  - name: generate_message
    type: llm
    prompt: "Generate a commit message for: ${vars.check_changes}"
  - name: commit
    type: shell
    command: "cd ~/.kai && git add -A && git commit -m '${vars.generate_message}'"
```

## Workflow Step Types

| Type | Description |
|------|-------------|
| `llm` | Send a prompt to the LLM, store the response |
| `integration` | Call a built-in integration (youtube, data, web, image, mcp) |
| `shell` | Run a shell command |
| `notify` | Send a desktop notification |
| `review` | Self-improvement review loop |

## Built-in Integrations

| Integration | Actions |
|-------------|---------|
| `youtube` | `search_videos`, `get_video_stats`, `get_channel`, `get_recent_uploads`, `get_trending` |
| `data` | `read`, `write`, `append`, `archive`, `read_text`, `list_files` |
| `web` | Web search via Tavily |
| `image` | Image generation via OpenRouter |
| `mcp` | Call tools on configured MCP servers |

## Managing Agents

### List Agents

```bash
kai agent list
```

### Run Agent Now

```bash
kai agent run <id>
```

### View Output

```bash
kai agent output <id>
```

### Agent Info + History

```bash
kai agent info <id>
```

### Delete Agent

```bash
kai agent delete <id>
```

## Daemon (Scheduler)

### Start the Scheduler

```bash
kai agent daemon
```

### Stop the Scheduler

```bash
kai agent stop
```

### REPL Commands

```bash
/agent              # List background agents
/agent run <id>     # Run an agent now
/agent output <id>  # View agent output
/agent info <id>    # Agent details + run history
```

## Self-Improving Agents

Workflows can include a review loop for quality iteration:

```yaml
steps:
  - name: generate
    type: llm
    prompt: "Write a blog post about..."
  - name: review
    type: review
    criteria:
      - "Is the tone professional?"
      - "Are facts accurate?"
      - "Is it engaging?"
    max_iterations: 3
```

## Cron Schedule Format

| Expression | Meaning |
|------------|---------|
| `0 2 * * *` | Daily at 2 AM |
| `0 */6 * * *` | Every 6 hours |
| `*/15 * * * *` | Every 15 minutes |
| `0 9 * * 1` | Every Monday at 9 AM |

## Web API

When running `kai server`, agents can be managed via API:

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
