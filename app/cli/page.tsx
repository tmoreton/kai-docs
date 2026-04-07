import Link from 'next/link'
import { 
  Terminal, 
  ChevronRight,
  Command,
  MessageSquare,
  FolderOpen,
  Settings,
  Cpu,
  GitBranch,
  Sparkles,
  Zap,
  ArrowRight,
  Monitor
} from 'lucide-react'

// Sidebar Navigation Component
function Sidebar() {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        { label: 'Overview', href: '/cli/', active: true },
        { label: 'Installation', href: '#installation' },
        { label: 'Quick Start', href: '#quick-start' },
      ]
    },
    {
      title: 'Documentation',
      items: [
        { label: 'Commands', href: '#commands' },
        { label: 'Global Options', href: '#global-options' },
      ]
    },
    {
      title: 'Reference',
      items: [
        { label: 'Skills', href: '/skills/' },
        { label: 'Web UI', href: '/web-ui/' },
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

// CLI Command Card
function CommandCard({ 
  command, 
  description, 
  example,
  icon 
}: { 
  command: string
  description: string
  example: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-teal-300 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <code className="text-sm font-mono bg-slate-100 px-2 py-1 rounded text-slate-800">
              kai {command}
            </code>
          </div>
          <p className="text-sm text-slate-600 mb-3">{description}</p>
          <div className="bg-slate-900 rounded-lg p-3">
            <code className="text-xs font-mono text-slate-300">
              {example}
            </code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CliPage() {
  const commands = [
    {
      command: 'chat',
      description: 'Start an interactive chat session with Kai',
      example: '$ kai chat\n> What files are in this project?',
      icon: <MessageSquare size={20} />
    },
    {
      command: 'web',
      description: 'Launch the Kai web interface',
      example: '$ kai web --port 3000',
      icon: <Zap size={20} />
    },
    {
      command: 'git commit',
      description: 'Generate smart commit messages',
      example: '$ kai git commit -m "smart"',
      icon: <GitBranch size={20} />
    },
    {
      command: 'skills list',
      description: 'List available skills',
      example: '$ kai skills list',
      icon: <Sparkles size={20} />
    },
    {
      command: 'init',
      description: 'Initialize Kai in a project',
      example: '$ kai init --template typescript',
      icon: <FolderOpen size={20} />
    },
    {
      command: 'config',
      description: 'Manage Kai configuration',
      example: '$ kai config set model claude-3-opus',
      icon: <Settings size={20} />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-teal-600 transition-colors">Docs</Link>
          <ChevronRight size={16} />
          <span className="text-slate-900 font-medium">CLI</span>
        </nav>

        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Terminal size={24} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Kai CLI</h1>
                  <p className="text-slate-600">Command-line interface for Kai</p>
                </div>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl">
                The Kai CLI provides a powerful command-line interface for interacting with your codebase. 
                Start conversations, run commands, manage git workflows, and more.
              </p>
            </div>

            {/* Installation */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Installation</h2>
              <div className="bg-slate-900 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">npm</span>
                  <span className="text-xs text-slate-500">Copy</span>
                </div>
                <code className="text-lg font-mono text-green-400">
                  npm install -g @kai-ai/cli
                </code>
              </div>
              <p className="text-slate-600">
                Or install locally in your project:
              </p>
              <div className="bg-slate-900 rounded-xl p-6 mt-4">
                <code className="text-lg font-mono text-green-400">
                  npm install --save-dev @kai-ai/cli
                </code>
              </div>
            </section>

            {/* Quick Start */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Start</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Navigate to your project</h3>
                    <code className="text-sm font-mono text-slate-600">cd my-project</code>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Start a conversation</h3>
                    <code className="text-sm font-mono text-slate-600">kai chat</code>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Ask anything about your code</h3>
                    <p className="text-sm text-slate-600">Kai will analyze your codebase and provide intelligent responses.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Commands */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Commands</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commands.map((cmd, index) => (
                  <CommandCard key={index} {...cmd} />
                ))}
              </div>
            </section>

            {/* Global Options */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Global Options</h2>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Option</th>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">--model</td>
                      <td className="px-6 py-4 text-slate-600">Specify the AI model (claude-3-opus, claude-3-sonnet, gpt-4, etc.)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">--agent</td>
                      <td className="px-6 py-4 text-slate-600">Use a specific agent persona</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">--verbose</td>
                      <td className="px-6 py-4 text-slate-600">Enable verbose output</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">--help</td>
                      <td className="px-6 py-4 text-slate-600">Show help information</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">--version</td>
                      <td className="px-6 py-4 text-slate-600">Show version information</td>
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
                  href="/skills/"
                  className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-teal-200 hover:border-teal-300 hover:shadow-sm transition-all"
                >
                  <Sparkles size={20} className="text-teal-600" />
                  <div className="flex-1">
                    <span className="font-medium text-slate-900">Explore Skills</span>
                    <p className="text-xs text-slate-500">Browse 21 built-in skills</p>
                  </div>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-teal-500" />
                </Link>
                <Link 
                  href="/web-ui/"
                  className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-teal-200 hover:border-teal-300 hover:shadow-sm transition-all"
                >
                  <Monitor size={20} className="text-teal-600" />
                  <div className="flex-1">
                    <span className="font-medium text-slate-900">Try Web UI</span>
                    <p className="text-xs text-slate-500">Browser-based interface</p>
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
