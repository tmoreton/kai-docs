import { Category, QuickStartCommands, Skill, NavigationItem, DocFile } from "./types";

// ============================================
// CATEGORIES - Main documentation sections
// ============================================

export const categories: Category[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Quick setup guides, installation, and your first steps with Kai.",
    icon: "rocket",
    href: "/docs/getting-started",
    items: [
      { title: "Introduction", href: "/docs/getting-started/introduction", slug: "introduction" },
      { title: "Quick Start", href: "/docs/getting-started/quick-start", slug: "quick-start" },
      { title: "Installation", href: "/docs/getting-started/installation", slug: "installation" },
      { title: "Configuration", href: "/docs/getting-started/configuration", slug: "configuration" },
      { title: "First Steps", href: "/docs/getting-started/first-steps", slug: "first-steps" },
    ],
  },
  {
    id: "core-features",
    title: "Core Features",
    description: "Agent swarms, context management, memory systems, and core capabilities.",
    icon: "zap",
    href: "/docs/core-features",
    items: [
      { title: "Agent Swarms", href: "/docs/core-features/agent-swarms", slug: "agent-swarms" },
      { title: "Context Management", href: "/docs/core-features/context-management", slug: "context-management" },
      { title: "Memory Systems", href: "/docs/core-features/memory-systems", slug: "memory-systems" },
      { title: "Function Calling", href: "/docs/core-features/function-calling", slug: "function-calling" },
      { title: "Message Routing", href: "/docs/core-features/message-routing", slug: "message-routing" },
      { title: "Code Generation", href: "/docs/core-features/code-generation", slug: "code-generation" },
      { title: "Testing Tools", href: "/docs/core-features/testing-tools", slug: "testing-tools" },
      { title: "Git Integration", href: "/docs/core-features/git-integration", slug: "git-integration" },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    description: "Built-in capabilities and integrations that extend Kai's functionality.",
    icon: "puzzle",
    href: "/docs/skills",
    items: [
      { title: "Overview", href: "/docs/skills/overview", slug: "overview" },
      { title: "Installation", href: "/docs/skills/installation", slug: "installation" },
      { title: "Building Skills", href: "/docs/skills/building-skills", slug: "building-skills" },
      { title: "Best Practices", href: "/docs/skills/best-practices", slug: "best-practices" },
    ],
  },
  {
    id: "agents",
    title: "Agents",
    description: "Persona-based agents, configuration, and specialized worker roles.",
    icon: "users",
    href: "/docs/agents",
    items: [
      { title: "Overview", href: "/docs/agents/overview", slug: "overview" },
      { title: "Personas", href: "/docs/agents/personas", slug: "personas" },
      { title: "Configuration", href: "/docs/agents/configuration", slug: "configuration" },
      { title: "Custom Agents", href: "/docs/agents/custom-agents", slug: "custom-agents" },
      { title: "Agent Communication", href: "/docs/agents/agent-communication", slug: "agent-communication" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "System design, data flow, and how Kai works under the hood.",
    icon: "layers",
    href: "/docs/architecture",
    items: [
      { title: "Overview", href: "/docs/architecture/overview", slug: "overview" },
      { title: "System Design", href: "/docs/architecture/system-design", slug: "system-design" },
      { title: "Data Flow", href: "/docs/architecture/data-flow", slug: "data-flow" },
      { title: "Protocol", href: "/docs/architecture/protocol", slug: "protocol" },
      { title: "Security", href: "/docs/architecture/security", slug: "security" },
    ],
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "Production deployment, scaling, and advanced configuration options.",
    icon: "settings",
    href: "/docs/advanced",
    items: [
      { title: "Deployment", href: "/docs/advanced/deployment", slug: "deployment" },
      { title: "Scaling", href: "/docs/advanced/scaling", slug: "scaling" },
      { title: "Custom Integrations", href: "/docs/advanced/custom-integrations", slug: "custom-integrations" },
      { title: "Troubleshooting", href: "/docs/advanced/troubleshooting", slug: "troubleshooting" },
    ],
  },
];

// ============================================
// QUICK START COMMANDS - CLI and WebUI examples
// ============================================

export const quickStartCommands: QuickStartCommands = {
  cli: {
    title: "CLI Quick Start",
    description: "Start using Kai directly from your terminal",
    steps: [
      {
        label: "1. Initialize a new project",
        code: "npx kai init my-project",
        language: "bash",
      },
      {
        label: "2. Navigate to your project",
        code: "cd my-project",
        language: "bash",
      },
      {
        label: "3. Add a skill",
        code: "npx kai skill add @kai-sdk/web-search",
        language: "bash",
      },
      {
        label: "4. Start the agent",
        code: "npx kai start",
        language: "bash",
      },
    ],
  },
  webui: {
    title: "WebUI Quick Start",
    description: "Use Kai through the web interface",
    steps: [
      {
        label: "1. Start the WebUI server",
        code: "npx kai webui",
        language: "bash",
      },
      {
        label: "2. Open the interface",
        code: "# Navigate to http://localhost:3000",
        language: "bash",
      },
      {
        label: "3. Create a new swarm",
        code: "# Click 'New Swarm' in the dashboard",
        language: "text",
      },
      {
        label: "4. Add agents to your swarm",
        code: "# Use the 'Add Agent' button to configure workers",
        language: "text",
      },
    ],
  },
};

// ============================================
// SKILLS - All 21 built-in skills metadata
// ============================================

export const skills: Skill[] = [
  // Data & API Skills
  {
    name: "@kai-sdk/fs",
    description: "File system operations - read, write, and manage files with intelligent path handling",
    setupTime: "1 min",
    category: "data",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/fs",
  },
  {
    name: "@kai-sdk/web",
    description: "Web fetching capabilities for HTTP requests and API interactions",
    setupTime: "1 min",
    category: "data",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/web",
  },
  {
    name: "@kai-sdk/fetch",
    description: "Enhanced fetch with retry logic, caching, and response parsing",
    setupTime: "1 min",
    category: "data",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/fetch",
  },
  {
    name: "@kai-sdk/read-file",
    description: "Advanced file reading with format detection and content extraction",
    setupTime: "1 min",
    category: "data",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/read-file",
  },

  // Search Skills
  {
    name: "@kai-sdk/web-search",
    description: "Web search capabilities using Tavily and other search providers",
    setupTime: "2 min",
    category: "search",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/web-search",
  },
  {
    name: "@kai-sdk/recall-search",
    description: "Search past conversations and interactions for context retrieval",
    setupTime: "1 min",
    category: "search",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/recall-search",
  },
  {
    name: "@kai-sdk/archival-search",
    description: "Search long-term archival memory for stored knowledge",
    setupTime: "1 min",
    category: "search",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/archival-search",
  },

  // Memory Skills
  {
    name: "@kai-sdk/core-memory",
    description: "Core memory management for persisting critical information",
    setupTime: "1 min",
    category: "memory",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/core-memory",
  },
  {
    name: "@kai-sdk/archival-insert",
    description: "Insert knowledge into long-term archival storage",
    setupTime: "1 min",
    category: "memory",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/archival-insert",
  },

  // Agent Skills
  {
    name: "@kai-sdk/agent",
    description: "Agent lifecycle management and coordination utilities",
    setupTime: "2 min",
    category: "agent",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/agent",
  },
  {
    name: "@kai-sdk/agent-list",
    description: "List and discover available agents in the system",
    setupTime: "1 min",
    category: "agent",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/agent-list",
  },

  // Communication Skills
  {
    name: "@kai-sdk/imap",
    description: "Email reading and processing via IMAP protocol",
    setupTime: "5 min",
    category: "communication",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/imap",
  },
  {
    name: "@kai-sdk/slack",
    description: "Slack integration for messaging and channel management",
    setupTime: "3 min",
    category: "communication",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/slack",
  },
  {
    name: "@kai-sdk/ses",
    description: "Email sending via AWS SES with templating support",
    setupTime: "5 min",
    category: "communication",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/ses",
  },
  {
    name: "@kai-sdk/exa",
    description: "Exa AI search integration for semantic web queries",
    setupTime: "2 min",
    category: "communication",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/exa",
  },

  // Browser Skills
  {
    name: "@kai-sdk/playwright",
    description: "Browser automation using Playwright for web interactions",
    setupTime: "3 min",
    category: "browser",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/playwright",
  },
  {
    name: "@kai-sdk/browserbase",
    description: "Cloud browser automation with Browserbase integration",
    setupTime: "5 min",
    category: "browser",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/browserbase",
  },

  // Media Skills
  {
    name: "@kai-sdk/ffmpeg",
    description: "Video and audio processing using FFmpeg",
    setupTime: "3 min",
    category: "media",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/ffmpeg",
  },
  {
    name: "@kai-sdk/cloudinary",
    description: "Image and video management with Cloudinary",
    setupTime: "3 min",
    category: "media",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/cloudinary",
  },
  {
    name: "@kai-sdk/vision",
    description: "Computer vision and image analysis capabilities",
    setupTime: "2 min",
    category: "media",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/vision",
  },
  {
    name: "@kai-sdk/openrouter",
    description: "Multi-model AI access via OpenRouter API",
    setupTime: "2 min",
    category: "media",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/openrouter",
  },
  {
    name: "@kai-sdk/generate-image",
    description: "AI image generation using various providers",
    setupTime: "2 min",
    category: "media",
    npmUrl: "https://www.npmjs.com/package/@kai-sdk/generate-image",
  },
];

// ============================================
// NAVIGATION - Tree structure for sidebar
// ============================================

export const navigation: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    items: [],
  },
  {
    title: "Documentation",
    href: "/docs",
    items: categories.map((cat) => ({
      title: cat.title,
      href: cat.href,
      description: cat.description,
      items: cat.items.map((item) => ({
        title: item.title,
        href: item.href,
      })),
    })),
  },
  {
    title: "Skills",
    href: "/skills",
    items: [
      { title: "All Skills", href: "/skills" },
      { title: "Data & API", href: "/skills/data" },
      { title: "Search", href: "/skills/search" },
      { title: "Memory", href: "/skills/memory" },
      { title: "Communication", href: "/skills/communication" },
      { title: "Browser", href: "/skills/browser" },
      { title: "Media", href: "/skills/media" },
    ],
  },
  {
    title: "API Reference",
    href: "/api",
    items: [
      { title: "Overview", href: "/api/overview" },
      { title: "Client SDK", href: "/api/client" },
      { title: "Server API", href: "/api/server" },
      { title: "WebSocket", href: "/api/websocket" },
    ],
  },
  {
    title: "Examples",
    href: "/examples",
    items: [
      { title: "Basic Setup", href: "/examples/basic" },
      { title: "Agent Swarm", href: "/examples/swarm" },
      { title: "Custom Skills", href: "/examples/custom-skills" },
      { title: "Production Deployment", href: "/examples/deployment" },
    ],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a document by its slug path
 * Combines category slug with item slug
 */
export function getDocBySlug(categorySlug: string, itemSlug: string): Category["items"][0] | undefined {
  const category = categories.find((c) => c.id === categorySlug);
  if (!category) return undefined;
  return category.items.find((item) => item.slug === itemSlug);
}

/**
 * Get all documentation items as a flat array
 */
export function getAllDocs(): Array<{
  category: Category;
  item: Category["items"][0];
  fullSlug: string;
}> {
  const allDocs: Array<{
    category: Category;
    item: Category["items"][0];
    fullSlug: string;
  }> = [];

  for (const category of categories) {
    for (const item of category.items) {
      allDocs.push({
        category,
        item,
        fullSlug: `${category.id}/${item.slug}`,
      });
    }
  }

  return allDocs;
}

/**
 * Get skills by category
 */
export function getSkillsByCategory(category: string): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

/**
 * Search skills by name or description
 */
export function searchSkills(query: string): Skill[] {
  const lowerQuery = query.toLowerCase();
  return skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(lowerQuery) ||
      skill.description.toLowerCase().includes(lowerQuery) ||
      skill.category.toLowerCase().includes(lowerQuery)
  );
}
