---
title: Notion Skill
description: Query databases, create pages, manage content in Notion
category: skills
---

# Notion Skill

Notion integration for AI assistants. Works with **Claude Desktop** via MCP, or with Kai.

**Not for Claude Code** — if you're using the `claude` CLI tool, use claude-skills instead.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `NOTION_API_KEY` | Notion integration API key | Yes |
| `NOTION_VERSION` | API version | No (default: 2022-06-28) |

## Tools

| Tool | Description |
|------|-------------|
| `search` | Search pages and databases |
| `get_page` | Get page properties |
| `get_page_content` | Get page block content |
| `create_page` | Create a new page |
| `update_page` | Update page properties |
| `query_database` | Query with filters |
| `get_database` | Get database schema |
| `append_blocks` | Add blocks to a page |
| `delete_block` | Delete a block |

## Setup

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Create a new integration
3. Copy the "Internal Integration Token"
4. Share pages/databases with your integration:
   - In Notion, open the page/database
   - Click "..." menu → "Add connections"
   - Select your integration

## Usage Examples

```
Search my Notion for "Project Roadmap"
```

```
Create a new task in my Tasks database
```

```
Get the content of my meeting notes page
```

```
Update the status of page XYZ to Done
```

## Notion IDs

- **Page IDs**: `abc123de-f456-7890-abcd-ef1234567890`
- **Database IDs**: Similar format, found in URL when viewing database
- Extract from: `https://www.notion.so/workspace/ABC123?v=...` → `ABC123`

## Programmatic Usage

```javascript
// Search for pages
const results = await notionSkill.actions.search({
  query: "Project roadmap",
  filter: "page"
});

// Get page content
const content = await notionSkill.actions.get_page_content({
  page_id: "abc123..."
});

// Create a page
const page = await notionSkill.actions.create_page({
  parent: "database_id_or_page_id",
  title: "New Task",
  properties: {
    Status: { select: { name: "In Progress" } }
  }
});
```

## License

MIT
