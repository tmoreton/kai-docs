---
title: Data Storage Skill
description: Read/write JSON, Markdown, and text files
category: skills
---

# Data Storage Skill

A simple file I/O skill for reading and writing JSON, Markdown, and text files.

## Installation

```bash
cd /path/to/kai-skills
kai skills add ./skills/data-storage
```

Or install from registry:

```bash
kai skills install data-storage
```

## Tools

### Generic File I/O

| Tool | Description |
|------|-------------|
| `read` | Auto-detect file type and read (JSON or text) |
| `write` | Auto-detect and write (JSON or text) |
| `append` | Append content to a file |

### JSON Files

| Tool | Description |
|------|-------------|
| `read_json` | Read and parse a JSON file |
| `write_json` | Write data to a JSON file with optional pretty-printing |

### Markdown Files

| Tool | Description |
|------|-------------|
| `read_markdown` | Read a Markdown file |
| `write_markdown` | Write content to a Markdown file |

### Text Files

| Tool | Description |
|------|-------------|
| `read_text` | Read any text file |
| `write_text` | Write text to a file |

## Usage Example

```yaml
# In your kai skill.yaml
dependencies:
  - data-storage
```

```javascript
// In your handler
const result = await ctx.invoke("data-storage:read_json", {
  file_path: "./data/config.json"
});
console.log(result.content);  // JSON string content
```

## Return Format

All tools return an object with a `content` property:

```javascript
{ content: "...file content or status message..." }
```

## Usage Examples

```
Read the config.json file
```

```
Write {"key": "value"} to data.json
```

```
Append "New line" to log.txt
```

```
Read the README.md file
```

## License

MIT
