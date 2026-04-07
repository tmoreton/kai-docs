import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and merges Tailwind classes
 * using tailwind-merge to handle conflicts.
 *
 * @example
 * cn("px-4 py-2", "px-6") // returns "py-2 px-6" (later px overrides earlier)
 * cn("text-red-500", isActive && "text-blue-500") // conditional classes
 * cn("btn", { "btn-primary": isPrimary, "btn-large": isLarge }) // object syntax
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// ============================================
// Date Formatting Utilities
// ============================================

export interface DateFormatOptions {
  format?: "short" | "medium" | "long" | "relative";
  includeTime?: boolean;
  locale?: string;
}

/**
 * Format a date timestamp into a readable string
 *
 * @example
 * formatDate(new Date()) // "Jan 15, 2025"
 * formatDate(new Date(), { format: "long" }) // "January 15, 2025"
 * formatDate(new Date(), { format: "relative" }) // "2 hours ago"
 * formatDate(new Date(), { includeTime: true }) // "Jan 15, 2025, 2:30 PM"
 */
export function formatDate(
  date: Date | string | number,
  options: DateFormatOptions = {}
): string {
  const { format = "medium", includeTime = false, locale = "en-US" } = options;

  const d = typeof date === "string" || typeof date === "number" ? new Date(date) : date;

  if (isNaN(d.getTime())) {
    return "Invalid date";
  }

  // Relative time formatting
  if (format === "relative") {
    return formatRelativeDate(d, locale);
  }

  const dateFormats: Record<string, Intl.DateTimeFormatOptions> = {
    short: { month: "short", day: "numeric", year: "numeric" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
  };

  const timeFormat: Intl.DateTimeFormatOptions = includeTime
    ? { hour: "numeric", minute: "numeric", hour12: true }
    : {};

  const formatter = new Intl.DateTimeFormat(locale, {
    ...dateFormats[format],
    ...timeFormat,
  });

  return formatter.format(d);
}

/**
 * Format a date as relative time (e.g., "2 hours ago", "yesterday")
 */
function formatRelativeDate(date: Date, locale: string = "en-US"): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, "second");
  } else if (diffInMinutes < 60) {
    return rtf.format(-diffInMinutes, "minute");
  } else if (diffInHours < 24) {
    return rtf.format(-diffInHours, "hour");
  } else if (diffInDays < 30) {
    return rtf.format(-diffInDays, "day");
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return rtf.format(-months, "month");
  } else {
    const years = Math.floor(diffInDays / 365);
    return rtf.format(-years, "year");
  }
}

/**
 * Format a date as ISO string for storage/APIs
 */
export function formatISODate(date: Date | string | number): string {
  const d = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
  return d.toISOString();
}

// ============================================
// URL/Slug Utilities
// ============================================

/**
 * Convert a string into a URL-friendly slug
 *
 * @example
 * slugify("Hello World") // "hello-world"
 * slugify("  Getting Started  ") // "getting-started"
 * slugify("API & Webhooks") // "api-webhooks"
 * slugify("Café & Résumé") // "cafe-resume"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD") // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, "") // Remove non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple hyphens
}

/**
 * Create a full URL path from category and slug
 *
 * @example
 * createDocPath("getting-started", "quick-start") // "/docs/getting-started/quick-start"
 */
export function createDocPath(categorySlug: string, itemSlug: string): string {
  return `/docs/${slugify(categorySlug)}/${slugify(itemSlug)}`;
}

/**
 * Extract category and item slug from a full doc path
 *
 * @example
 * parseDocPath("/docs/getting-started/quick-start") // { category: "getting-started", item: "quick-start" }
 */
export function parseDocPath(path: string): { category: string; item: string } | null {
  const match = path.match(/^\/docs\/([^\/]+)\/([^\/]+)$/);
  if (!match) return null;
  return { category: match[1], item: match[2] };
}

/**
 * Generate a hash/anchor link from a heading text
 *
 * @example
 * generateAnchor("Getting Started with Kai") // "getting-started-with-kai"
 */
export function generateAnchor(headingText: string): string {
  return slugify(headingText);
}

// ============================================
// String Utilities
// ============================================

/**
 * Truncate text to a specified length with ellipsis
 */
export function truncate(text: string, maxLength: number, suffix: string = "..."): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Convert camelCase or snake_case to Title Case
 *
 * @example
 * toTitleCase("gettingStarted") // "Getting Started"
 * toTitleCase("getting_started") // "Getting Started"
 */
export function toTitleCase(text: string): string {
  return text
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^\s/, "")
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

// ============================================
// Array/Object Utilities
// ============================================

/**
 * Group an array of objects by a key
 *
 * @example
 * groupBy([{category: "a", name: "1"}, {category: "a", name: "2"}], "category")
 * // { a: [{category: "a", name: "1"}, {category: "a", name: "2"}] }
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

/**
 * Sort an array of objects by a key
 */
export function sortBy<T>(array: T[], key: keyof T, order: "asc" | "desc" = "asc"): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
}

// ============================================
// URL/Path Utilities
// ============================================

/**
 * Join URL paths safely, handling slashes
 *
 * @example
 * joinPath("/api", "v1", "users") // "/api/v1/users"
 * joinPath("api/", "/v1/", "users") // "api/v1/users"
 */
export function joinPath(...paths: string[]): string {
  return paths
    .map((path) => path.replace(/^\/+|\/+$/g, ""))
    .filter((path) => path.length > 0)
    .join("/");
}

/**
 * Check if a URL is external
 */
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//.test(url) || url.startsWith("//");
}

/**
 * Get the active item from navigation based on current path
 */
export function getActiveNavItem(
  items: { href: string; title: string }[],
  currentPath: string
): { href: string; title: string } | undefined {
  // Exact match
  const exact = items.find((item) => item.href === currentPath);
  if (exact) return exact;

  // Check if current path starts with item path (for nested routes)
  // Sort by length descending to match most specific first
  const sorted = [...items].sort((a, b) => b.href.length - a.href.length);
  return sorted.find((item) => currentPath.startsWith(item.href));
}
