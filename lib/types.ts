/**
 * TypeScript type definitions for Kai Documentation
 */

// ============================================
// Core Data Types
// ============================================

export interface DocItem {
  title: string;
  href: string;
  slug: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  items: DocItem[];
}

export interface QuickStartStep {
  label: string;
  code: string;
  language: string;
}

export interface QuickStartCommand {
  title: string;
  description: string;
  steps: QuickStartStep[];
}

export interface QuickStartCommands {
  cli: QuickStartCommand;
  webui: QuickStartCommand;
}

export interface Skill {
  name: string;
  description: string;
  setupTime: string;
  category: "data" | "search" | "memory" | "agent" | "communication" | "browser" | "media";
  npmUrl?: string;
}

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  items: Array<{
    title: string;
    href: string;
    description?: string;
    items?: Array<{
      title: string;
      href: string;
    }>;
  }>;
}

// ============================================
// Markdown/Content Types
// ============================================

export interface Frontmatter {
  title: string;
  description?: string;
  category?: string;
  order?: number;
  lastUpdated?: string;
  author?: string;
  tags?: string[];
}

export interface DocFile {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
  html?: string;
  excerpt?: string;
}

// ============================================
// Component Prop Types
// ============================================

export interface CategoryCardProps {
  category: Category;
  variant?: "default" | "compact" | "featured";
}

export interface QuickStartProps {
  activeTab?: "cli" | "webui";
  className?: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  currentPath?: string;
}

export interface SidebarProps {
  categories: Category[];
  currentSlug?: string;
}

export interface SkillCardProps {
  skill: Skill;
  showCategory?: boolean;
}

// ============================================
// Utility Types
// ============================================

export type SkillCategory =
  | "data"
  | "search"
  | "memory"
  | "agent"
  | "communication"
  | "browser"
  | "media";

export type IconName =
  | "rocket"
  | "zap"
  | "puzzle"
  | "users"
  | "layers"
  | "settings"
  | "file-text"
  | "search"
  | "database"
  | "globe"
  | "message-square"
  | "image"
  | "code"
  | "terminal"
  | "git-branch"
  | "cpu"
  | "shield"
  | "server";
