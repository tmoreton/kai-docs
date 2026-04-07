---
title: "Quick Start Guide"
description: "Get up and running with Kai in under 5 minutes"
category: "getting-started"
order: 2
lastUpdated: "2025-01-15"
author: "Kai Team"
tags: ["beginner", "setup", "tutorial"]
---

# Quick Start Guide

Get up and running with Kai in under 5 minutes. This guide will walk you through the essential steps to start using Kai's agent swarms.

## Prerequisites

Before you begin, make sure you have:

- Node.js 18 or later installed
- An OpenAI API key (or other supported LLM provider)
- A code editor (VS Code recommended)

## Installation

Install Kai globally using npm:

```bash
npm install -g kai
```

Or use npx to run without installing:

```bash
npx kai --version
```

## Create Your First Project

Initialize a new Kai project:

```bash
kai init my-first-project
cd my-first-project
```

This creates a basic project structure with configuration files and sample agents.

## Configure Your Environment

Create a `.env` file in your project root:

```env
OPENAI_API_KEY=your_api_key_here
KAI_LOG_LEVEL=info
```

## Start the Agent

Launch your first agent:

```bash
kai start
```

You should see output indicating the agent is running and ready to accept commands.

## Next Steps

- Read about [Agent Swarms](/docs/core-features/agent-swarms)
- Explore the [Skills Library](/docs/skills)
- Learn about [Architecture](/docs/architecture)

---

*Last updated: January 15, 2025*
