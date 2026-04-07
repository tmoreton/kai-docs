# Kai Documentation Library

## Files Created

### `/lib/docs-data.ts`
Central data file containing:
- **categories[]** - 6 documentation categories with 29 total items
  - Getting Started (5 items)
  - Core Features (8 items)
  - Skills (4 items)
  - Agents (5 items)
  - Architecture (5 items)
  - Advanced (4 items)

- **quickStartCommands** - CLI and WebUI code examples with 4 steps each

- **skills[]** - All 21 skills metadata organized by category:
  - Data & API (4): fs, web, fetch, read-file
  - Search (3): web-search, recall-search, archival-search
  - Memory (2): core-memory, archival-insert
  - Agent (2): agent, agent-list
  - Communication (4): imap, slack, ses, exa
  - Browser (2): playwright, browserbase
  - Media (4): ffmpeg, cloudinary, vision, openrouter, generate-image

- **navigation** - Tree structure for sidebar navigation

- **Helper functions**: getDocBySlug, getAllDocs, getSkillsByCategory, searchSkills

### `/lib/types.ts`
TypeScript type definitions including:
- DocItem, Category interfaces
- QuickStart types
- Skill type with category union
- Navigation tree types
- Frontmatter and DocFile types
- Component prop types (CategoryCardProps, QuickStartProps, etc.)

### `/lib/utils.ts`
Utility functions:
- `cn()` - Tailwind class merging with clsx + tailwind-merge
- `formatDate()` - Multiple format options (short/medium/long/relative)
- `slugify()` - URL-friendly slug generation
- `createDocPath()`, `parseDocPath()` - URL helpers
- `truncate()`, `capitalize()`, `toTitleCase()` - String helpers
- `groupBy()`, `sortBy()` - Array utilities
- `isExternalUrl()`, `getActiveNavItem()` - Navigation helpers

### `/lib/markdown.ts`
Markdown processing:
- `readMarkdownFile()` - Read and parse .md files with frontmatter
- `getAllMarkdownFiles()` - Recursive content directory scanning
- `extractExcerpt()` - First paragraph extraction
- `renderMarkdownToHtml()` - Simple markdown to HTML converter
- `generateTableOfContents()` - TOC from headings
- `groupDocsByCategory()`, `sortDocsByOrder()` - Organization helpers
- Includes commented-out advanced remark/rehype pipeline option

### `/lib/index.ts`
Main exports file for clean imports:
```typescript
import { categories, skills, cn, formatDate } from "@/lib";
```

### `/next.config.js`
Next.js static export configuration:
- `output: "export"` and `distDir: "dist"`
- GitHub Pages asset prefix setup
- Image optimization for static export
- Redirects for common paths
- Security headers

### `/components.json`
shadcn/ui configuration with:
- RSC enabled
- TypeScript support
- Slate base color
- CSS variables enabled
- Path aliases configured

### `/content/getting-started/quick-start.md`
Sample markdown file demonstrating frontmatter structure

## Usage Examples

```typescript
import {
  categories,
  skills,
  quickStartCommands,
  cn,
  formatDate,
  getDocBySlug,
  renderMarkdownToHtml
} from "@/lib";

// Get all docs
const allDocs = getAllDocs();

// Find specific doc
const doc = getDocBySlug("getting-started", "quick-start");

// Get skills by category
const dataSkills = getSkillsByCategory("data");

// Search skills
const searchResults = searchSkills("file");

// Format date
const date = formatDate(new Date(), { format: "relative" });

// Tailwind classes
const className = cn("px-4 py-2", "px-6", active && "bg-blue-500");
```

## Installation

```bash
cd /Users/tmoreton/Code/kai-docs
npm install
```

Dependencies:
- next
- react/react-dom
- gray-matter (frontmatter parsing)
- clsx + tailwind-merge (class merging)
- lucide-react (icons)
- radix-ui primitives

## Component Support

The data structures support:
- **CategoryCard** - Display category with icon, description, item count
- **QuickStart** - Tabbed CLI/WebUI code examples
- **Navigation** - Tree sidebar with categories and items
- **SkillCard** - Individual skill display with metadata
- **Markdown rendering** - Content from `/content/` folder
