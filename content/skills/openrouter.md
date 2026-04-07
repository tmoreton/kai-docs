---
title: OpenRouter Skill
description: AI image generation and chat completions via OpenRouter
category: skills
---

# OpenRouter Skill

OpenRouter AI — image generation with Nano Banana, chat completions, model routing.

## Configuration

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | OpenRouter API key from openrouter.ai/keys | Yes |
| `OPENROUTER_MODEL` | Default model for chat completions | No (default: anthropic/claude-3.5-sonnet) |

## Tools

| Tool | Description |
|------|-------------|
| `setup` | Set up OpenRouter API key |
| `generate_image` | Generate images using Gemini 3 Pro |
| `chat_completion` | Generate text completions using any model |
| `list_models` | List available models with pricing |
| `get_generation_status` | Check status of async image generation |

## Setup

1. Get API key at [openrouter.ai/keys](https://openrouter.ai/keys)
2. Configure in your MCP settings

## Usage Examples

### Generate Image

```
Generate an image of a futuristic city with flying cars
```

Parameters:
- `prompt` (required) - Image description
- `width` - Image width (default: 1280)
- `height` - Image height (default: 720)
- `model` - Model to use (default: google/gemini-3-pro-image-preview)
- `output_dir` - Directory to save images
- `reference_image` - Path to reference photo

### Chat Completion

```
Ask GPT-4: "What is quantum computing?"
```

Parameters:
- `prompt` (required)
- `model` - Model to use
- `temperature` - Sampling temperature (0-2, default: 0.7)
- `max_tokens` - Max tokens to generate (default: 2048)

### List Models

```
What models are available on OpenRouter?
```

## Dependencies

- `openai` (optional) - For API client

## License

MIT
