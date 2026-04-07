# Kai Documentation

Unified documentation site for Kai CLI, Kai Web UI, and Kai Skills.

## Design System

Based on the clean, card-based aesthetic from the reference design:

- **Primary color:** Teal `#14b8a6`
- **Featured sections:** Mint `#f0fdfa`
- **Background:** Gray-50 `#f9fafb`
- **Cards:** White with gray-200 borders, rounded-2xl (12-16px)
- **Typography:** System fonts (SF Pro, Inter)
- **Icons:** Lucide React, 1.5px stroke, teal color

## Project Structure

```
kai-docs/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main docs landing (matching screenshot design)
│   ├── cli/page.tsx       # CLI documentation
│   ├── web-ui/page.tsx    # Web UI documentation
│   ├── skills/page.tsx    # Skills overview
│   └── skills/[skill]/    # Individual skill pages
├── components/            # UI components
│   ├── CategoryCard.tsx   # Navigation cards (teal icon + chevron)
│   ├── QuickStart.tsx     # Mint background, two-column code blocks
│   ├── FilterTabs.tsx     # All | Web UI | CLI segmented control
│   ├── CodeBlock.tsx      # Styled code display
│   ├── PageHeader.tsx     # Title + subtitle
│   ├── Sidebar.tsx        # Left navigation
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── docs-data.ts       # Documentation content data
│   ├── markdown.ts        # Markdown processing
│   ├── types.ts           # TypeScript definitions
│   └── utils.ts           # Utility functions
├── content/               # Markdown documentation
│   ├── cli/              # CLI docs (getting-started, commands, etc.)
│   ├── web-ui/           # Web UI docs
│   └── skills/           # 22 skill docs
└── dist/                 # Static export output
```

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Serve built files
npx serve dist
```

## Content Sources

Documentation is consolidated from:

1. **Kai CLI** (`/Users/tmoreton/Code/kai/README.md`)
   - Quick install, setup
   - All REPL commands and slash commands
   - Memory system (soul, archival, recall)
   - Background agents and YAML workflows
   - 25+ built-in tools reference

2. **Kai Skills** (`/Users/tmoreton/Code/kai-skills/`)
   - Skills overview and installation
   - 21 individual skill documentations:
     - Social Media: YouTube, Instagram, Twitter, Facebook, LinkedIn, TikTok, Threads, Bluesky
     - Automation: OpenRouter, Google Sheets, Slack, Webhook, Notion, Email
     - Utilities: Browser, Database, Data Storage, Docker, Git, Web Tools

3. **Kai Web UI** (landing-page and web UI source)
   - Web UI setup and features
   - API endpoints documentation

## Deployment

The site is configured for static export to GitHub Pages:

```javascript
// next.config.js
{
  output: 'export',
  distDir: 'dist',
  assetPrefix: '/kai'
}
```

Deploy to GitHub Pages:

```bash
# Build
npm run build

# Push dist/ to gh-pages branch
# Or use GitHub Actions for automated deployment
```

## Cross-Repository Links

This documentation site is the single source of truth linked from:

- **Kai CLI README** → links to `https://docs.kai.dev/cli`
- **Kai Web UI** → links to `https://docs.kai.dev/web-ui`
- **Kai Skills README** → links to `https://docs.kai.dev/skills`

## Design Components

### CategoryCard
Navigation cards matching the screenshot:
- Teal stroke icon (left)
- Bold dark gray title
- Chevron right (gray-400)
- White bg, gray-200 border
- Rounded-2xl
- Hover: shadow-md

### QuickStart
Featured section with mint/teal background:
- Two-column grid
- Web UI (blue monitor icon) + CLI (orange terminal icon)
- Code blocks with gray-100 bg

### FilterTabs
Segmented control:
- "All" (zap icon)
- "Web UI" (monitor icon)
- "CLI" (terminal icon)
- Rounded-full container
- Active tab: white bg + shadow

## License

MIT
