---
title: Slack Skill
description: Send messages, upload files, create threads in Slack
category: skills
---

# Slack Skill

Slack notifications — send messages, upload files, create threads.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `SLACK_BOT_TOKEN` | Slack Bot User OAuth Token (starts with xoxb-) | Yes |

## Tools

### Messaging

| Tool | Description |
|------|-------------|
| `setup` | Set up Slack credentials |
| `send_message` | Send a direct message to a user |
| `send_to_channel` | Post a message to a channel |

### File Upload

| Tool | Description |
|------|-------------|
| `upload_file` | Upload a file to a channel or send as DM |

### Threads

| Tool | Description |
|------|-------------|
| `create_thread` | Reply in a thread to an existing message |

### Utility

| Tool | Description |
|------|-------------|
| `get_info` | Get bot connection info and status |
| `list_channels` | List channels the bot has access to |

## Setup

1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Create New App → From scratch
3. Add Bot Token Scopes:
   - `chat:write`
   - `files:write`
   - `users:read`
   - `channels:read`
4. Install to workspace
5. Copy Bot User OAuth Token (starts with `xoxb-`)

## Usage Examples

```
Send a DM to user@company.com: "Meeting in 5 minutes"
```

```
Post "Deploy successful! 🚀" to #deployments
```

```
Upload report.pdf to #general with message "Weekly report"
```

```
Reply in thread to message with timestamp 1234567890.123456
```

```
List all channels I can access
```

## Dependencies

- `@slack/web-api` - Official Slack Web API client

## License

MIT
