// ============================================
// Kai Documentation Library - Main Exports
// ============================================

// Data structures
export {
  categories,
  quickStartCommands,
  skills,
  navigation,
  getDocBySlug,
  getAllDocs,
  getSkillsByCategory,
  searchSkills,
} from "./docs-data";

// Types
export type {
  DocItem,
  Category,
  QuickStartStep,
  QuickStartCommand,
  QuickStartCommands,
  Skill,
  NavigationItem,
  Frontmatter,
  DocFile,
  CategoryCardProps,
  QuickStartProps,
  NavigationProps,
  SidebarProps,
  SkillCardProps,
  SkillCategory,
  IconName,
} from "./types";

// Utilities
export {
  cn,
  formatDate,
  formatISODate,
  slugify,
  createDocPath,
  parseDocPath,
  generateAnchor,
  truncate,
  capitalize,
  toTitleCase,
  groupBy,
  sortBy,
  joinPath,
  isExternalUrl,
  getActiveNavItem,
} from "./utils";

// Markdown processing
export {
  readMarkdownFile,
  getAllMarkdownFiles,
  extractExcerpt,
  renderMarkdownToHtml,
  generateTableOfContents,
  groupDocsByCategory,
  sortDocsByOrder,
} from "./markdown";

// Export types from markdown
export type { TocItem } from "./markdown";
