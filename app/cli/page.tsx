import Link from 'next/link'
import { 
  Terminal, 
  ChevronRight,
  MessageSquare,
  FolderOpen,
  Settings,
  GitBranch,
  Sparkles,
  Zap,
  ArrowRight,
  Monitor,
  Apple,
  Download,
  Bot,
  Cpu
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
        { label: 'Desktop App', href: '#desktop-app' },
      ]
    },
    {
      title: 'Documentation',
      items: [
        { label: 'CLI Commands', href: '#cli-commands' },
        { label: 'REPL Commands', href: '#repl-commands' },
        { label: 'Environment Setup', href: '#environment' },
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
              {command}
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
      command: 'kai',
      description: 'Start interactive REPL mode',
      example: '$ kai\n> explain this codebase',
      icon: <Terminal size={20} />
    },
    {
      command: 'kai "query"',
      description: 'One-shot query without interactive mode',
      example: '$ kai "review this file"',
      icon: <MessageSquare size={20} />
    },
    {
      command: 'kai server',
      description: 'Start web server with UI and agents',
      example: '$ kai server --port 3000',
      icon: <Zap size={20} />
    },
    {
      command: 'kai agent',
      description: 'Manage background agents',
      example: '$ kai agent list\n$ kai agent run <id>',
      icon: <Bot size={20} />
    },
    {
      command: '/git commit',
      description: 'AI-generated commit messages',
      example: '> /git commit --push',
      icon: <GitBranch size={20} />
    },
    {
      command: '/skill',
      description: 'List and manage skills',
      example: '> /skill reload',
      icon: <Sparkles size={20} />
    }
  ]

  const replCommands = [
    { command: '/help', description: 'Show all available commands' },
    { command: '/clear', description: 'Clear conversation history' },
    { command: '/compact', description: 'Compress context to save tokens' },
    { command: '/sessions', description: 'List recent sessions' },
    { command: '/soul', description: 'View core memory + recall stats' },
    { command: '/diff', description: 'Show all changes made this session' },
    { command: '/git', description: 'Git status + changed files' },
    { command: '/git diff', description: 'Colorized diff (staged + unstaged)' },
    { command: '/git commit [msg] [--push]', description: 'AI-generated commit + optional push' },
    { command: '/git pr [title]', description: 'Create PR (branch + commit + push + open)' },
    { command: '/agent', description: 'List background agents' },
    { command: '/doctor', description: 'Run system diagnostics' },
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
                <svg width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#4A9088"/>
                  <g fill="white">
                    <path d="M35 32 L55 45 L35 58 L35 50 L45 45 L35 40 Z"/>
                    <rect x="35" y="62" width="25" height="5" rx="1"/>
                  </g>
                </svg>
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Kai CLI</h1>
                  <p className="text-slate-600">Command-line interface for Kai</p>
                </div>
              </div>
              <p className="text-lg text-slate-600 max-w-2xl">
                The Kai CLI provides a powerful terminal interface with persistent memory, 
                background agents, and 21+ skills for AI-powered development.
              </p>
            </div>

            {/* Desktop App Section */}
            <section id="desktop-app" className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Desktop App (macOS)</h2>
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 shrink-0">
                    <Apple size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2">Download Kai Desktop</h3>
                    <p className="text-slate-600 mb-4">
                      Native macOS app with built-in Node.js runtime. No dependencies required.
                      Just drag to Applications and run.
                    </p>
                    <a 
                      href="https://github.com/tmoreton/kai/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      <Download size={18} />
                      Download for Mac (Apple Silicon)
                    </a>
                    <p className="text-xs text-slate-500 mt-3">
                      Check <a href="https://github.com/tmoreton/kai/releases" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">GitHub Releases</a> for downloads. 
                      For Intel Macs, use npm install below.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Installation (npm)</h2>
              <div className="bg-slate-900 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">npm global install</span>
                  <span className="text-xs text-slate-500">Copy</span>
                </div>
                <code className="text-lg font-mono text-green-400">
                  npm install -g kai
                </code>
              </div>
              <p className="text-slate-600">
                Or install locally in your project:
              </p>
              <div className="bg-slate-900 rounded-xl p-6 mt-4">
                <code className="text-lg font-mono text-green-400">
                  npm install --save-dev kai
                </code>
              </div>
            </section>

            {/* Environment Setup */}
            <section id="environment" className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Environment Setup</h2>
              <p className="text-slate-600 mb-4">
                Create a <code className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">.env</code> file with your API keys:
              </p>
              <div className="bg-slate-900 rounded-xl p-6">
                <code className="text-sm font-mono text-green-400 block">
                  OPENROUTER_API_KEY=your_key_here<br/>
                  MODEL_ID=moonshotai/kimi-k2.5  # optional<br/>
                  TAVILY_API_KEY=your_key       # optional, for web search
                </code>
              </div>
              <p className="text-slate-600 mt-4">
                Get an OpenRouter API key at{' '}
                <a href="https://openrouter.ai/keys" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  openrouter.ai/keys
                </a>
              </p>
            </section>

            {/* Quick Start */}
            <section id="quick-start" className="mb-16">
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
                    <h3 className="font-semibold text-slate-900">Start Kai</h3>
                    <code className="text-sm font-mono text-slate-600">kai</code>
                    <p className="text-sm text-slate-600">Or run a one-shot query: <code className="text-sm font-mono">kai &quot;explain this code&quot;</code></p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-teal-700 font-semibold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Use slash commands</h3>
                    <code className="text-sm font-mono text-slate-600">/git commit</code>
                    <p className="text-sm text-slate-600">Kai has AI-powered git workflows, agents, and 21+ skills.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CLI Commands */}
            <section id="cli-commands" className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">CLI Commands</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commands.map((cmd, index) => (
                  <CommandCard key={index} {...cmd} />
                ))}
              </div>
              
              <div className="mt-8 bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Command</th>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">kai --continue</td>
                      <td className="px-6 py-4 text-slate-600">Resume most recent session</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">kai --resume &lt;id&gt;</td>
                      <td className="px-6 py-4 text-slate-600">Resume specific session</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">kai --name &quot;name&quot;</td>
                      <td className="px-6 py-4 text-slate-600">Name the session</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">kai --yes</td>
                      <td className="px-6 py-4 text-slate-600">Auto-approve all tool calls</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">kai agent create &lt;name&gt; &lt;workflow.yaml&gt;</td>
                      <td className="px-6 py-4 text-slate-600">Create agent with optional --schedule</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-slate-700">kai mcp list</td>
                      <td className="px-6 py-4 text-slate-600">List configured MCP servers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* REPL Commands */}
            <section id="repl-commands" className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">REPL Slash Commands</h2>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Command</th>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {replCommands.map((cmd, index) => (
                      <tr key={index}>
                        <td className="px-6 py-3 font-mono text-slate-700">{cmd.command}</td>
                        <td className="px-6 py-3 text-slate-600">{cmd.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Configuration */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Configuration</h2>
              <p className="text-slate-600 mb-4">
                Kai loads config from (highest priority first):
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 mb-6">
                <li><code className="font-mono text-sm">.kai/settings.json</code> (project-level)</li>
                <li><code className="font-mono text-sm">kai.config.json</code> (project-level)</li>
                <li><code className="font-mono text-sm">~/.kai/settings.json</code> (user-level)</li>
              </ol>
              <div className="bg-slate-900 rounded-xl p-6">
                <code className="text-sm font-mono text-green-400 block">
                  {'{'}<br/>
                  &nbsp;&nbsp;&quot;model&quot;: &quot;moonshotai/kimi-k2.5&quot;,<br/>
                  &nbsp;&nbsp;&quot;mcp&quot;: {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&quot;servers&quot;: {'{'}...{'}'}<br/>
                  &nbsp;&nbsp;{'}'},<br/>
                  &nbsp;&nbsp;&quot;permissions&quot;: {'{'}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&quot;mode&quot;: &quot;default&quot;,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&quot;allow&quot;: [],<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&quot;deny&quot;: []<br/>
                  &nbsp;&nbsp;{'}'}<br/>
                  {'}'}
                </code>
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
