import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Zap,
  ChevronRight,
  Globe,
  Mail,
  GitBranch,
  Container,
  Database,
  FileText,
  Square,
  Youtube,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Music2,
  AtSign,
  Image,
  Table2,
  MessageCircle,
  Webhook,
  ArrowLeft,
  Copy,
  Check,
  Terminal,
  Settings,
  Play
} from 'lucide-react'

// Generate static params for all 20 skills
export function generateStaticParams() {
  const skills = [
    { skill: 'browser' },
    { skill: 'email' },
    { skill: 'git' },
    { skill: 'docker' },
    { skill: 'database' },
    { skill: 'data-storage' },
    { skill: 'notion' },
    { skill: 'web-tools' },
    { skill: 'youtube' },
    { skill: 'twitter' },
    { skill: 'instagram' },
    { skill: 'facebook' },
    { skill: 'linkedin' },
    { skill: 'tiktok' },
    { skill: 'threads' },
    { skill: 'bluesky' },
    { skill: 'openrouter' },
    { skill: 'google-sheets' },
    { skill: 'slack' },
    { skill: 'webhook' },
  ]
  return skills
}

// Skill data with detailed information
const skillDetails: Record<string, {
  name: string
  description: string
  fullDescription: string
  icon: React.ReactNode
  category: string
  installed: boolean
  tools: string[]
  config: { key: string; description: string; required: boolean }[]
  examples: { title: string; code: string }[]
}> = {
  browser: {
    name: 'Browser',
    description: 'Web browsing and interaction tools',
    fullDescription: 'The Browser skill enables Kai to navigate websites, interact with page elements, fill forms, click buttons, and capture screenshots. Perfect for web scraping, testing, and research tasks.',
    icon: <Globe size={24} />,
    category: 'Web & Social',
    installed: true,
    tools: [
      'browser_navigate - Navigate to URLs',
      'browser_click - Click page elements',
      'browser_type - Fill form inputs',
      'browser_screenshot - Capture screenshots',
      'browser_extract - Extract page content',
      'browser_scroll - Scroll pages'
    ],
    config: [
      { key: 'headless', description: 'Run browser in headless mode', required: false },
      { key: 'timeout', description: 'Page load timeout in ms', required: false },
    ],
    examples: [
      { title: 'Navigate to a page', code: '> Browse to https://example.com and take a screenshot' },
      { title: 'Fill a form', code: '> Go to the login page and fill in the credentials' },
    ]
  },
  email: {
    name: 'Email',
    description: 'Email sending and reading tools',
    fullDescription: 'The Email skill provides SMTP and IMAP integration for sending notifications, reading emails, and automating email workflows.',
    icon: <Mail size={24} />,
    category: 'Integrations',
    installed: false,
    tools: [
      'email_send - Send emails via SMTP',
      'email_read - Read emails via IMAP',
      'email_search - Search email inbox',
      'email_attachments - Handle attachments'
    ],
    config: [
      { key: 'smtp_host', description: 'SMTP server hostname', required: true },
      { key: 'smtp_port', description: 'SMTP server port', required: true },
      { key: 'username', description: 'Email username', required: true },
      { key: 'password', description: 'Email password', required: true },
    ],
    examples: [
      { title: 'Send an email', code: '> Send an email to team@company.com with the subject "Deployment complete"' },
    ]
  },
  git: {
    name: 'Git',
    description: 'Advanced Git operations',
    fullDescription: 'The Git skill provides intelligent Git workflows including smart commit message generation, PR creation, branch management, and changelog generation.',
    icon: <GitBranch size={24} />,
    category: 'Development',
    installed: true,
    tools: [
      'git_smart_commit - Generate commit messages',
      'git_create_pr - Create pull requests',
      'git_branch_summary - Analyze branch changes',
      'git_changelog - Generate changelogs'
    ],
    config: [
      { key: 'default_branch', description: 'Default branch name', required: false },
      { key: 'remote_name', description: 'Git remote name', required: false },
    ],
    examples: [
      { title: 'Smart commit', code: '> Commit my changes with a descriptive message' },
      { title: 'Create PR', code: '> Create a pull request for the current branch' },
    ]
  },
  docker: {
    name: 'Docker',
    description: 'Docker container management',
    fullDescription: 'The Docker skill enables container management including building images, running containers, managing Docker Compose, and viewing logs.',
    icon: <Container size={24} />,
    category: 'Development',
    installed: false,
    tools: [
      'docker_build - Build Docker images',
      'docker_run - Run containers',
      'docker_compose - Compose operations',
      'docker_logs - View container logs',
      'docker_exec - Execute commands in containers'
    ],
    config: [
      { key: 'registry', description: 'Docker registry URL', required: false },
    ],
    examples: [
      { title: 'Build and run', code: '> Build the Docker image and start the containers' },
    ]
  },
  database: {
    name: 'Database',
    description: 'Database operations',
    fullDescription: 'The Database skill provides database management including migrations (Prisma/TypeORM/Knex), SQL queries, schema inspection, and backups.',
    icon: <Database size={24} />,
    category: 'Data & Storage',
    installed: true,
    tools: [
      'db_query - Execute SQL queries',
      'db_migrate - Run migrations',
      'db_schema - Inspect schema',
      'db_backup - Create backups'
    ],
    config: [
      { key: 'connection_string', description: 'Database connection string', required: true },
      { key: 'dialect', description: 'Database dialect (postgres, mysql, etc)', required: true },
    ],
    examples: [
      { title: 'Run migration', code: '> Run the pending database migrations' },
      { title: 'Query data', code: '> Show me all users from the database' },
    ]
  },
  'data-storage': {
    name: 'Data Storage',
    description: 'Read and write files',
    fullDescription: 'The Data Storage skill enables reading and writing JSON, Markdown, and text files with automatic format detection.',
    icon: <FileText size={24} />,
    category: 'Data & Storage',
    installed: true,
    tools: [
      'storage_read - Read files',
      'storage_write - Write files',
      'storage_append - Append to files',
      'storage_delete - Delete files'
    ],
    config: [],
    examples: [
      { title: 'Read JSON', code: '> Read the package.json file' },
      { title: 'Write file', code: '> Create a new config.json file with these settings' },
    ]
  },
  notion: {
    name: 'Notion',
    description: 'Notion workspace integration',
    fullDescription: 'The Notion skill enables integration with Notion workspaces for querying databases, creating pages, and managing content.',
    icon: <Square size={24} />,
    category: 'Integrations',
    installed: false,
    tools: [
      'notion_query - Query databases',
      'notion_create - Create pages',
      'notion_update - Update pages',
      'notion_search - Search workspace'
    ],
    config: [
      { key: 'token', description: 'Notion integration token', required: true },
    ],
    examples: [
      { title: 'Query database', code: '> Get all tasks from the Notion database' },
    ]
  },
  'web-tools': {
    name: 'Web Tools',
    description: 'Web utilities',
    fullDescription: 'The Web Tools skill provides utilities for fetching web pages and searching with Tavily for research tasks.',
    icon: <Globe size={24} />,
    category: 'Web & Social',
    installed: true,
    tools: [
      'web_fetch - Fetch web pages',
      'web_search - Search with Tavily',
      'web_extract - Extract page data'
    ],
    config: [
      { key: 'tavily_api_key', description: 'Tavily API key for search', required: false },
    ],
    examples: [
      { title: 'Fetch page', code: '> Fetch the content from https://example.com' },
      { title: 'Search', code: '> Search for the latest React documentation' },
    ]
  },
  youtube: {
    name: 'YouTube',
    description: 'YouTube analytics',
    fullDescription: 'The YouTube skill provides analytics including channel stats, video metrics, comments analysis, and trending data.',
    icon: <Youtube size={24} />,
    category: 'Web & Social',
    installed: false,
    tools: [
      'youtube_channel - Get channel stats',
      'youtube_video - Video analytics',
      'youtube_comments - Get comments',
      'youtube_trending - Trending videos'
    ],
    config: [
      { key: 'api_key', description: 'YouTube Data API key', required: true },
    ],
    examples: [
      { title: 'Channel stats', code: '> Get analytics for my YouTube channel' },
    ]
  },
  twitter: {
    name: 'Twitter/X',
    description: 'Twitter/X API integration',
    fullDescription: 'The Twitter skill enables searching tweets, analyzing users, posting threads, and tracking topics via the X API.',
    icon: <Twitter size={24} />,
    category: 'Web & Social',
    installed: false,
    tools: [
      'twitter_search - Search tweets',
      'twitter_user - Get user info',
      'twitter_post - Post tweets',
      'twitter_thread - Post threads'
    ],
    config: [
      { key: 'bearer_token', description: 'Twitter API bearer token', required: true },
      { key: 'api_key', description: 'Twitter API key', required: true },
    ],
    examples: [
      { title: 'Search tweets', code: '> Search for recent tweets about AI development' },
    ]
  },
  instagram: {
    name: 'Instagram',
    description: 'Instagram API integration',
    fullDescription: 'The Instagram skill provides access to user profiles, media posts, hashtag search, and insights via the Instagram API.',
    icon: <Instagram size={24} />,
    category: 'Web & Social',
    installed: false,
    tools: [
      'instagram_profile - Get profile info',
      'instagram_posts - Get media posts',
      'instagram_hashtag - Search hashtags'
    ],
    config: [
      { key: 'access_token', description: 'Instagram access token', required: true },
    ],
    examples: [
      { title: 'Get posts', code: '> Get recent posts from the company Instagram' },
    ]
  },
  facebook: {
    name: 'Facebook',
    description: 'Facebook Pages API',
    fullDescription: 'The Facebook skill enables access to page information, posts, insights, and publishing via the Facebook Pages API.',
    icon: <Facebook size={24} />,
    category: 'Web & Social',
    installed: false,
    tools: [
      'facebook_page - Get page info',
      'facebook_posts - Get posts',
      'facebook_publish - Publish content'
    ],
    config: [
      { key: 'page_token', description: 'Facebook page access token', required: true },
    ],
    examples: [
      { title: 'Get insights', code: '> Get engagement insights for the Facebook page' },
    ]
  },
  linkedin: {
    name: 'LinkedIn',
    description: 'LinkedIn API integration',
    fullDescription: 'The LinkedIn skill provides access to profile information, post creation, analytics, and people search.',
    icon: <Linkedin size={24} />,
    category: 'Web & Social',
    installed: false,
    tools: [
      'linkedin_profile - Get profile',
      'linkedin_post - Create posts',
      'linkedin_search - People search'
    ],
    config: [
      { key: 'access_token', description: 'LinkedIn access token', required: true },
    ],
    examples: [
      { title: 'Create post', code: '> Create a LinkedIn post about the new feature' },
    ]
  },
  tiktok: {
    name: 'TikTok',
    description: 'TikTok API integration',
    fullDescription: 'The TikTok skill provides access to user information, videos, stats, and hashtag search capabilities.',
    icon: <Music2 size={24} />,
    category: 'Web & Social',
    installed: false,
    tools: [
      'tiktok_user - Get user info',
      'tiktok_videos - Get videos',
      'tiktok_hashtag - Search hashtags'
    ],
    config: [
      { key: 'api_key', description: 'TikTok API key', required: true },
    ],
    examples: [
      { title: 'Get videos', code: '> Get trending videos for a hashtag' },
    ]
  },
  threads: {
    name: 'Threads',
    description: 'Threads API integration',
    fullDescription: 'The Threads skill enables access to profile data, posts, publishing, replies, and insights.',
    icon: <AtSign size={24} />,
    category: 'Web & Social',
    installed: false,
    tools: [
      'threads_profile - Get profile',
      'threads_post - Create posts',
      'threads_reply - Reply to posts'
    ],
    config: [
      { key: 'access_token', description: 'Threads access token', required: true },
    ],
    examples: [
      { title: 'Create thread', code: '> Post a thread about the update' },
    ]
  },
  bluesky: {
    name: 'Bluesky',
    description: 'Bluesky AT Protocol',
    fullDescription: 'The Bluesky skill provides access to profile, feed, posting, search, and social actions via the AT Protocol.',
    icon: <AtSign size={24} />,
    category: 'Web & Social',
    installed: false,
    tools: [
      'bluesky_profile - Get profile',
      'bluesky_post - Create posts',
      'bluesky_feed - Get feed',
      'bluesky_search - Search posts'
    ],
    config: [
      { key: 'handle', description: 'Bluesky handle', required: true },
      { key: 'password', description: 'App password', required: true },
    ],
    examples: [
      { title: 'Create post', code: '> Post on Bluesky about the release' },
    ]
  },
  openrouter: {
    name: 'OpenRouter',
    description: 'OpenRouter AI integration',
    fullDescription: 'The OpenRouter skill provides image generation with Nano Banana, chat completions, and model routing capabilities.',
    icon: <Image size={24} />,
    category: 'Integrations',
    installed: true,
    tools: [
      'openrouter_image - Generate images',
      'openrouter_chat - Chat completions',
      'openrouter_models - List models'
    ],
    config: [
      { key: 'api_key', description: 'OpenRouter API key', required: true },
    ],
    examples: [
      { title: 'Generate image', code: '> Generate an image of a futuristic city' },
    ]
  },
  'google-sheets': {
    name: 'Google Sheets',
    description: 'Google Sheets integration',
    fullDescription: 'The Google Sheets skill enables creating spreadsheets, exporting analytics, and sharing reports.',
    icon: <Table2 size={24} />,
    category: 'Data & Storage',
    installed: false,
    tools: [
      'sheets_create - Create spreadsheets',
      'sheets_write - Write data',
      'sheets_read - Read data',
      'sheets_share - Share sheets'
    ],
    config: [
      { key: 'credentials', description: 'Google service account credentials', required: true },
    ],
    examples: [
      { title: 'Export data', code: '> Export the analytics to a Google Sheet' },
    ]
  },
  slack: {
    name: 'Slack',
    description: 'Slack notifications',
    fullDescription: 'The Slack skill provides the ability to send alerts, upload files, and create threads for team notifications.',
    icon: <MessageCircle size={24} />,
    category: 'Integrations',
    installed: false,
    tools: [
      'slack_send - Send messages',
      'slack_upload - Upload files',
      'slack_thread - Create threads'
    ],
    config: [
      { key: 'bot_token', description: 'Slack bot token', required: true },
      { key: 'channel', description: 'Default channel ID', required: false },
    ],
    examples: [
      { title: 'Send alert', code: '> Send a Slack notification that the build is complete' },
    ]
  },
  webhook: {
    name: 'Webhook',
    description: 'Webhook triggers',
    fullDescription: 'The Webhook skill enables POST requests to Zapier, Make, and custom endpoints for workflow automation.',
    icon: <Webhook size={24} />,
    category: 'Integrations',
    installed: false,
    tools: [
      'webhook_send - POST to endpoints',
      'webhook_zapier - Zapier integration',
      'webhook_make - Make integration'
    ],
    config: [
      { key: 'endpoints', description: 'Webhook endpoint URLs', required: false },
    ],
    examples: [
      { title: 'Trigger webhook', code: '> Trigger the deployment webhook' },
    ]
  },
}

export default async function SkillPage({ params }: { params: Promise<{ skill: string }> }) {
  const { skill: skillId } = await params
  const skill = skillDetails[skillId]
  
  if (!skill) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-teal-600 transition-colors">Docs</Link>
          <ChevronRight size={16} />
          <Link href="/skills/" className="hover:text-teal-600 transition-colors">Skills</Link>
          <ChevronRight size={16} />
          <span className="text-slate-900 font-medium">{skill.name}</span>
        </nav>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="sticky top-20 pr-4">
              <Link 
                href="/skills/"
                className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-teal-600 transition-colors mb-6"
              >
                <ArrowLeft size={16} />
                Back to all skills
              </Link>
              <nav className="space-y-1">
                <a href="#overview" className="block px-3 py-2 text-sm text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-md transition-colors">
                  Overview
                </a>
                <a href="#tools" className="block px-3 py-2 text-sm text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-md transition-colors">
                  Available Tools
                </a>
                <a href="#configuration" className="block px-3 py-2 text-sm text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-md transition-colors">
                  Configuration
                </a>
                <a href="#examples" className="block px-3 py-2 text-sm text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-md transition-colors">
                  Examples
                </a>
                <a href="#installation" className="block px-3 py-2 text-sm text-slate-600 hover:text-teal-600 hover:bg-slate-100 rounded-md transition-colors">
                  Installation
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-12" id="overview">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    {skill.icon}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900">{skill.name}</h1>
                    <p className="text-slate-600">{skill.category}</p>
                  </div>
                </div>
                {skill.installed ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                    <Check size={16} />
                    Installed
                  </div>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
                    <Zap size={16} />
                    Install
                  </button>
                )}
              </div>
              <p className="text-lg text-slate-600 max-w-2xl">
                {skill.fullDescription}
              </p>
            </div>

            {/* Tools Section */}
            <section className="mb-16" id="tools">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Available Tools</h2>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <ul className="divide-y divide-slate-200">
                  {skill.tools.map((tool, index) => (
                    <li key={index} className="px-6 py-4">
                      <code className="text-sm font-mono text-teal-700 bg-teal-50 px-2 py-1 rounded">
                        {tool.split(' - ')[0]}
                      </code>
                      <span className="ml-3 text-slate-600">{tool.split(' - ')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Configuration Section */}
            <section className="mb-16" id="configuration">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Configuration</h2>
              {skill.config.length > 0 ? (
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-3 text-left font-semibold text-slate-700">Setting</th>
                        <th className="px-6 py-3 text-left font-semibold text-slate-700">Description</th>
                        <th className="px-6 py-3 text-left font-semibold text-slate-700">Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {skill.config.map((config, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 font-mono text-sm text-slate-700">{config.key}</td>
                          <td className="px-6 py-4 text-slate-600">{config.description}</td>
                          <td className="px-6 py-4">
                            {config.required ? (
                              <span className="text-xs px-2 py-1 bg-red-50 text-red-700 rounded-full">Required</span>
                            ) : (
                              <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">Optional</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-slate-600">This skill requires no configuration.</p>
              )}
            </section>

            {/* Examples Section */}
            <section className="mb-16" id="examples">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Examples</h2>
              <div className="space-y-4">
                {skill.examples.map((example, index) => (
                  <div key={index} className="bg-white rounded-xl border border-slate-200 p-6">
                    <h3 className="font-medium text-slate-900 mb-3">{example.title}</h3>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <code className="text-sm font-mono text-green-400">{example.code}</code>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Installation Section */}
            <section className="mb-16" id="installation">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Installation</h2>
              <div className="bg-slate-900 rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">CLI</span>
                  <span className="text-xs text-slate-500">Copy</span>
                </div>
                <code className="text-lg font-mono text-green-400">
                  kai skills install {params.skill}
                </code>
              </div>
              <p className="text-slate-600">
                After installation, configure the skill using the{' '}
                <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-700">
                  kai config
                </code>{' '}
                command or edit your{' '}
                <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-700">
                  .kai/config.yaml
                </code>{' '}
                file.
              </p>
            </section>

            {/* Navigation */}
            <section className="flex items-center justify-between pt-8 border-t border-slate-200">
              <Link 
                href="/skills/"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
              >
                <ArrowLeft size={16} />
                All Skills
              </Link>
              <Link 
                href="/cli/commands/skills/"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
              >
                Skill Commands
                <ChevronRight size={16} />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
