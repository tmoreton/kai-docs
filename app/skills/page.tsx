import Link from 'next/link'
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
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react'

// Sidebar Navigation
function Sidebar() {
  const sections = [
    {
      title: 'Overview',
      items: [
        { label: 'All Skills', href: '/skills/', active: true },
        { label: 'Installation', href: '/skills/installation/' },
        { label: 'Configuration', href: '/skills/configuration/' },
      ]
    },
    {
      title: 'Categories',
      items: [
        { label: 'Web & Social', href: '/skills/category/web/' },
        { label: 'Development', href: '/skills/category/dev/' },
        { label: 'Data & Storage', href: '/skills/category/data/' },
        { label: 'Integrations', href: '/skills/category/integrations/' },
      ]
    }
  ]

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-20 pr-4">
        <nav className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className={`
                        block px-3 py-2 text-sm rounded-md transition-colors
                        ${item.active 
                          ? 'bg-teal-50 text-teal-700 font-medium' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

// Skill data - all 21 skills
const skills = [
  {
    id: 'browser',
    name: 'Browser',
    description: 'Web browsing and interaction - navigate pages, click elements, fill forms, take screenshots',
    icon: <Globe size={24} />,
    category: 'Web & Social',
    installed: true
  },
  {
    id: 'email',
    name: 'Email',
    description: 'Email sending and reading - SMTP/IMAP integration for notifications and automation',
    icon: <Mail size={24} />,
    category: 'Integrations',
    installed: false
  },
  {
    id: 'git',
    name: 'Git',
    description: 'Advanced Git operations - smart commits, PR workflows, branch management',
    icon: <GitBranch size={24} />,
    category: 'Development',
    installed: true
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'Docker container management - build images, run containers, compose operations',
    icon: <Container size={24} />,
    category: 'Development',
    installed: false
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Database operations - migrations, SQL queries, schema inspection, backups',
    icon: <Database size={24} />,
    category: 'Data & Storage',
    installed: true
  },
  {
    id: 'data-storage',
    name: 'Data Storage',
    description: 'Read and write JSON, Markdown, and text files with auto-detection',
    icon: <FileText size={24} />,
    category: 'Data & Storage',
    installed: true
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'Notion workspace integration - query databases, create pages, manage content',
    icon: <Square size={24} />,
    category: 'Integrations',
    installed: false
  },
  {
    id: 'web-tools',
    name: 'Web Tools',
    description: 'Web utilities - fetch pages, search with Tavily',
    icon: <Globe size={24} />,
    category: 'Web & Social',
    installed: true
  },
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'YouTube analytics - channel stats, video metrics, comments, trending',
    icon: <Youtube size={24} />,
    category: 'Web & Social',
    installed: false
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    description: 'Twitter/X API - search tweets, analyze users, post threads, track topics',
    icon: <Twitter size={24} />,
    category: 'Web & Social',
    installed: false
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Instagram API - user profiles, media posts, hashtag search, insights',
    icon: <Instagram size={24} />,
    category: 'Web & Social',
    installed: false
  },
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Facebook Pages API - page info, posts, insights, publishing',
    icon: <Facebook size={24} />,
    category: 'Web & Social',
    installed: false
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'LinkedIn API - profile info, create posts, analytics, people search',
    icon: <Linkedin size={24} />,
    category: 'Web & Social',
    installed: false
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    description: 'TikTok API - user info, videos, stats, hashtag search',
    icon: <Music2 size={24} />,
    category: 'Web & Social',
    installed: false
  },
  {
    id: 'threads',
    name: 'Threads',
    description: 'Threads API - profile, posts, publishing, replies, insights',
    icon: <AtSign size={24} />,
    category: 'Web & Social',
    installed: false
  },
  {
    id: 'bluesky',
    name: 'Bluesky',
    description: 'Bluesky AT Protocol - profile, feed, posting, search, social actions',
    icon: <AtSign size={24} />,
    category: 'Web & Social',
    installed: false
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    description: 'OpenRouter AI - image generation, chat completions, model routing',
    icon: <Image size={24} />,
    category: 'Integrations',
    installed: true
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    description: 'Google Sheets - create spreadsheets, export analytics, share reports',
    icon: <Table2 size={24} />,
    category: 'Data & Storage',
    installed: false
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'Slack notifications - send alerts, upload files, create threads',
    icon: <MessageCircle size={24} />,
    category: 'Integrations',
    installed: false
  },
  {
    id: 'webhook',
    name: 'Webhook',
    description: 'Webhook triggers - POST to Zapier, Make, custom endpoints',
    icon: <Webhook size={24} />,
    category: 'Integrations',
    installed: false
  }
]

// Skill Card Component
function SkillCard({ 
  id,
  name,
  description,
  icon,
  category,
  installed
}: typeof skills[0]) {
  return (
    <Link 
      href={`/skills/${id}/`}
      className="group block bg-white rounded-xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
          {icon}
        </div>
        {installed && (
          <div className="flex items-center gap-1 text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded-full">
            <Check size={12} />
            Installed
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-1">
        {name}
      </h3>
      <p className="text-xs text-teal-600 font-medium mb-2">{category}</p>
      <p className="text-sm text-slate-600 line-clamp-2">{description}</p>
    </Link>
  )
}

export default function SkillsPage() {
  const categories = Array.from(new Set(skills.map(s => s.category)))

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-teal-600 transition-colors">Docs</Link>
          <ChevronRight size={16} />
          <span className="text-slate-900 font-medium">Skills</span>
        </nav>

        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <svg width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#4A9088"/>
                  <g fill="white">
                    <path d="M35 32 L55 45 L35 58 L35 50 L45 45 L35 40 Z"/>
                    <rect x="35" y="62" width="25" height="5" rx="1"/>
                  </g>
                </svg>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Skills</h1>
                  <p className="text-slate-600">21 built-in capabilities for Kai</p>
                </div>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl">
                Skills extend Kai with powerful capabilities for web browsing, database operations, 
                social media integration, and more. Each skill adds specialized tools to your workflow.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="text-3xl font-bold text-teal-600">{skills.length}</div>
                <div className="text-sm text-slate-600">Total Skills</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="text-3xl font-bold text-teal-600">{categories.length}</div>
                <div className="text-sm text-slate-600">Categories</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="text-3xl font-bold text-teal-600">
                  {skills.filter(s => s.installed).length}
                </div>
                <div className="text-sm text-slate-600">Installed</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="text-3xl font-bold text-teal-600">∞</div>
                <div className="text-sm text-slate-600">Possibilities</div>
              </div>
            </div>

            {/* Quick Start */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Installing Skills</h2>
              <div className="bg-slate-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">CLI</span>
                </div>
                <code className="text-lg font-mono text-green-400">
                  kai skills install &lt;skill-name&gt;
                </code>
              </div>
              <p className="text-slate-600 mt-4">
                Or install multiple skills at once:
              </p>
              <div className="bg-slate-900 rounded-xl p-6 mt-4">
                <code className="text-lg font-mono text-green-400">
                  kai skills install browser twitter database
                </code>
              </div>
            </section>

            {/* All Skills Grid */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">All Skills</h2>
                <div className="flex gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <SkillCard key={skill.id} {...skill} />
                ))}
              </div>
            </section>

            {/* Next Steps */}
            <section className="bg-teal-50 rounded-xl p-8 border border-teal-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Building Custom Skills</h2>
              <p className="text-slate-600 mb-6">
                You can create your own skills to extend Kai with custom capabilities.
              </p>
              <Link 
                href="/skills/custom/"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                Learn about custom skills
                <ArrowRight size={16} />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
