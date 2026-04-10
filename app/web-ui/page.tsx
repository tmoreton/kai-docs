import Link from 'next/link'
import { 
  Monitor, 
  ChevronRight,
  MessageSquare,
  Code2,
  Settings,
  Palette,
  Keyboard,
  FolderOpen,
  Bot,
  Zap,
  ArrowRight,
  Play,
  Layout,
  Search
} from 'lucide-react'

// Sidebar Navigation Component
function Sidebar() {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        { label: 'Overview', href: '/web-ui/', active: true },
        { label: 'Installation', href: '#installation' },
        { label: 'Quick Start', href: '#quick-start' },
      ]
    },
    {
      title: 'Features',
      items: [
        { label: 'Chat Interface', href: '#chat' },
        { label: 'Code Editor', href: '#editor' },
        { label: 'File Explorer', href: '#files' },
        { label: 'Skills Panel', href: '#skills' },
      ]
    },
    {
      title: 'Reference',
      items: [
        { label: 'CLI', href: '/cli/' },
        { label: 'Skills', href: '/skills/' },
        { label: 'GitHub', href: 'https://github.com/tmoreton/kai' },
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

// Feature Card
function FeatureCard({ 
  title, 
  description, 
  icon,
  href 
}: { 
  title: string
  description: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Link 
      href={href}
      className="group block bg-white rounded-xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-1">
            {title}
          </h3>
          <p className="text-sm text-slate-600">{description}</p>
        </div>
        <ArrowRight className="shrink-0 text-slate-300 group-hover:text-teal-500 transition-colors" size={20} />
      </div>
    </Link>
  )
}

// Screenshot placeholder component
function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl aspect-video flex items-center justify-center">
      <span className="text-slate-400 font-medium">{label}</span>
    </div>
  )
}

export default function WebUiPage() {
  const features = [
    {
      title: 'Chat Interface',
      description: 'Interactive conversations with context-aware AI assistance',
      icon: <MessageSquare size={24} />,
      href: '#chat'
    },
    {
      title: 'Code Editor',
      description: 'Built-in editor with syntax highlighting and AI completions',
      icon: <Code2 size={24} />,
      href: '#editor'
    },
    {
      title: 'File Explorer',
      description: 'Navigate and manage your project files visually',
      icon: <FolderOpen size={24} />,
      href: '#files'
    },
    {
      title: 'Agent Switcher',
      description: 'Switch between specialized AI agents on the fly',
      icon: <Bot size={24} />,
      href: '#agents'
    },
    {
      title: 'Skills Panel',
      description: 'Browse and activate 21 built-in skills',
      icon: <Zap size={24} />,
      href: '#skills'
    },
    {
      title: 'Themes',
      description: 'Customize the look with light and dark modes',
      icon: <Palette size={24} />,
      href: '#themes'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-teal-600 transition-colors">Docs</Link>
          <ChevronRight size={16} />
          <span className="text-slate-900 font-medium">Web UI</span>
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
                  <h1 className="text-3xl font-bold text-slate-900">Web UI</h1>
                  <p className="text-slate-600">Browser-based interface for Kai</p>
                </div>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl">
                The Kai Web UI provides a rich browser-based interface for interacting with your codebase. 
                Features include streaming chat, workflow management, and agent monitoring.
              </p>
            </div>

            {/* Screenshot */}
            <section className="mb-16">
              <ScreenshotPlaceholder label="Web UI Screenshot" />
            </section>

            {/* Quick Start */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Start</h2>
              <div className="bg-slate-900 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">Terminal</span>
                  <span className="text-xs text-slate-500">Copy</span>
                </div>
                <code className="text-lg font-mono text-green-400">
                  kai start
                </code>
              </div>
              <p className="text-slate-600 mb-6">
                The web interface will be available at <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono text-slate-700">http://localhost:3141</code>
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex gap-3 items-start p-4 bg-white rounded-lg border border-slate-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Launch</h3>
                    <p className="text-sm text-slate-600">Run kai start in your project</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 bg-white rounded-lg border border-slate-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Connect</h3>
                    <p className="text-sm text-slate-600">Open localhost:3141</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start p-4 bg-white rounded-lg border border-slate-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Chat</h3>
                    <p className="text-sm text-slate-600">Start conversing with Kai</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </section>

            {/* Interface Overview */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Interface Overview</h2>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Layout Components</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-lg">
                      <Layout size={20} className="text-teal-600" />
                      <div>
                        <span className="font-medium text-slate-900">Sidebar</span>
                        <p className="text-sm text-slate-600">File explorer, agent switcher, and skills panel</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-lg">
                      <MessageSquare size={20} className="text-teal-600" />
                      <div>
                        <span className="font-medium text-slate-900">Chat Panel</span>
                        <p className="text-sm text-slate-600">Main conversation area with message history</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-lg">
                      <Code2 size={20} className="text-teal-600" />
                      <div>
                        <span className="font-medium text-slate-900">Editor Area</span>
                        <p className="text-sm text-slate-600">Code editor with syntax highlighting</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-lg">
                      <Monitor size={20} className="text-teal-600" />
                      <div>
                        <span className="font-medium text-slate-900">Preview Panel</span>
                        <p className="text-sm text-slate-600">Live preview for web projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Keyboard Shortcuts */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Keyboard Shortcuts</h2>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Action</th>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Shortcut</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 text-slate-700">Focus chat input</td>
                      <td className="px-6 py-4"><kbd className="bg-slate-100 px-2 py-1 rounded font-mono text-xs">⌘ + /</kbd></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700">Toggle sidebar</td>
                      <td className="px-6 py-4"><kbd className="bg-slate-100 px-2 py-1 rounded font-mono text-xs">⌘ + B</kbd></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700">New chat</td>
                      <td className="px-6 py-4"><kbd className="bg-slate-100 px-2 py-1 rounded font-mono text-xs">⌘ + N</kbd></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700">Search files</td>
                      <td className="px-6 py-4"><kbd className="bg-slate-100 px-2 py-1 rounded font-mono text-xs">⌘ + P</kbd></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700">Open settings</td>
                      <td className="px-6 py-4"><kbd className="bg-slate-100 px-2 py-1 rounded font-mono text-xs">⌘ + ,</kbd></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Next Steps */}
            <section className="bg-teal-50 rounded-xl p-8 border border-teal-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Next Steps</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link 
                  href="/web-ui/chat/"
                  className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-teal-200 hover:border-teal-300 hover:shadow-sm transition-all"
                >
                  <MessageSquare size={20} className="text-teal-600" />
                  <div className="flex-1">
                    <span className="font-medium text-slate-900">Chat Features</span>
                    <p className="text-xs text-slate-500">Learn about conversations</p>
                  </div>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-teal-500" />
                </Link>
                <Link 
                  href="/web-ui/settings/"
                  className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-teal-200 hover:border-teal-300 hover:shadow-sm transition-all"
                >
                  <Settings size={20} className="text-teal-600" />
                  <div className="flex-1">
                    <span className="font-medium text-slate-900">Settings</span>
                    <p className="text-xs text-slate-500">Customize your experience</p>
                  </div>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-teal-500" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
