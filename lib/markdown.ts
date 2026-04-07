import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { Frontmatter, DocFile } from "./types";

// ============================================
// Markdown File Operations
// ============================================

const CONTENT_DIR = path.join(process.cwd(), "content");

/**
 * Read a markdown file and parse its frontmatter and content
 *
 * @example
 * const doc = await readMarkdownFile("getting-started/quick-start.md")
 * // Returns: { slug: "quick-start", frontmatter: {...}, content: "..." }
 */
export async function readMarkdownFile(filePath: string): Promise<DocFile | null> {
  try {
    const fullPath = path.join(CONTENT_DIR, filePath);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    // Extract slug from filename or frontmatter
    const slug = path.basename(filePath, ".md");

    return {
      slug,
      frontmatter: validateFrontmatter(data),
      content,
    };
  } catch (error) {
    console.error(`Error reading markdown file: ${filePath}`, error);
    return null;
  }
}

/**
 * Read all markdown files from the content directory
 */
export async function getAllMarkdownFiles(): Promise<DocFile[]> {
  try {
    const files = await getMarkdownFilesRecursive(CONTENT_DIR);
    const docs = await Promise.all(
      files.map(async (filePath) => {
        const relativePath = path.relative(CONTENT_DIR, filePath);
        return readMarkdownFile(relativePath);
      })
    );

    return docs.filter((doc): doc is DocFile => doc !== null);
  } catch (error) {
    console.error("Error reading all markdown files:", error);
    return [];
  }
}

/**
 * Recursively get all markdown files in a directory
 */
async function getMarkdownFilesRecursive(dir: string): Promise<string[]> {
  const files: string[] = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const subFiles = await getMarkdownFilesRecursive(fullPath);
        files.push(...subFiles);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Directory doesn't exist or can't be read
    return [];
  }

  return files;
}

// ============================================
// Frontmatter Validation & Processing
// ============================================

/**
 * Validate and normalize frontmatter data
 */
function validateFrontmatter(data: Record<string, unknown>): Frontmatter {
  return {
    title: String(data.title || "Untitled"),
    description: data.description ? String(data.description) : undefined,
    category: data.category ? String(data.category) : undefined,
    order: typeof data.order === "number" ? data.order : undefined,
    lastUpdated: data.lastUpdated ? String(data.lastUpdated) : undefined,
    author: data.author ? String(data.author) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  };
}

/**
 * Extract excerpt from markdown content (first paragraph or specified length)
 */
export function extractExcerpt(content: string, maxLength: number = 200): string {
  // Remove frontmatter if present
  const cleanContent = content.replace(/^---[\s\S]*?---/, "").trim();

  // Find first paragraph
  const match = cleanContent.match(/^([^#\n].*?)(?:\n\n|\n#|$)/s);

  if (match) {
    const excerpt = match[1].trim();
    return excerpt.length > maxLength ? excerpt.slice(0, maxLength).trim() + "..." : excerpt;
  }

  // Fallback: return first maxLength characters
  return cleanContent.slice(0, maxLength).trim() + (cleanContent.length > maxLength ? "..." : "");
}

// ============================================
// Markdown Rendering (Simple Version)
// ============================================

/**
 * Convert markdown to HTML (simple implementation)
 * For production, consider using remark/rehype pipeline
 */
export function renderMarkdownToHtml(content: string): string {
  let html = content;

  // Code blocks with language
  html = html.replace(
    /```(\w+)?\n([\s\S]*?)```/g,
    (_match, language = "text", code) => {
      const escapedCode = escapeHtml(code.trim());
      const langClass = language !== "text" ? ` class="language-${language}"` : "";
      return `<pre><code${langClass}>${escapedCode}</code></pre>`;
    }
  );

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Headings
  html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  // Bold and italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");
  html = html.replace(/_(.*?)_/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />');

  // Unordered lists
  html = html.replace(/^\* (.*$)/gim, "<li>$1</li>");
  html = html.replace(/^- (.*$)/gim, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

  // Ordered lists
  html = html.replace(/^\d+\. (.*$)/gim, "<li>$1</li>");

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");

  // Horizontal rules
  html = html.replace(/^---$/gim, "<hr />");
  html = html.replace(/^\*\*\*$/gim, "<hr />");

  // Paragraphs (must be last)
  html = html.replace(/\n\n/g, "</p><p>");
  html = html.replace(/^(?!<[a-z])/gim, "<p>");
  html = html.replace(/$/gim, "</p>");

  // Clean up empty paragraphs and fix nested issues
  html = html.replace(/<p><\/p>/g, "");
  html = html.replace(/<p>(<h[1-6]>)/g, "$1");
  html = html.replace(/(<\/h[1-6]>)<\/p>/g, "$1");
  html = html.replace(/<p>(<pre>)/g, "$1");
  html = html.replace(/(<\/pre>)<\/p>/g, "$1");
  html = html.replace(/<p>(<ul>)/g, "$1");
  html = html.replace(/(<\/ul>)<\/p>/g, "$1");
  html = html.replace(/<p>(<blockquote>)/g, "$1");
  html = html.replace(/(<\/blockquote>)<\/p>/g, "$1");

  return html;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

// ============================================
// Table of Contents Generation
// ============================================

export interface TocItem {
  level: number;
  text: string;
  id: string;
}

/**
 * Generate table of contents from markdown headings
 */
export function generateTableOfContents(content: string): TocItem[] {
  const headings: TocItem[] = [];
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = slugify(text);

    headings.push({ level, text, id });
  }

  return headings;
}

/**
 * Create a slug from text (for heading anchors)
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 50);
}

// ============================================
// Advanced Rendering (with Remark/Rehype)
// ============================================

/**
 * Optional: Full remark/rehype pipeline for production use
 * Requires: npm install remark remark-gfm remark-html rehype-highlight
 *
 * Uncomment and use this for advanced markdown processing
 */
/*
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import rehypeHighlight from "rehype-highlight";
import { unified } from "unified";

export async function renderMarkdownAdvanced(content: string): Promise<string> {
  const result = await unified()
    .use(remark)
    .use(remarkGfm)
    .use(remarkHtml, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .process(content);

  return String(result);
}
*/

// ============================================
// Content Organization
// ============================================

/**
 * Group docs by category based on frontmatter
 */
export function groupDocsByCategory(docs: DocFile[]): Record<string, DocFile[]> {
  return docs.reduce((acc, doc) => {
    const category = doc.frontmatter.category || "uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(doc);
    return acc;
  }, {} as Record<string, DocFile[]>);
}

/**
 * Sort docs by order frontmatter field
 */
export function sortDocsByOrder(docs: DocFile[]): DocFile[] {
  return [...docs].sort((a, b) => {
    const orderA = a.frontmatter.order ?? Number.MAX_SAFE_INTEGER;
    const orderB = b.frontmatter.order ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });
}
