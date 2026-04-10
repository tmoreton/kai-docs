"use client";

import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Zap, 
  Brain, 
  GitBranch, 
  Bot,
  ArrowRight,
  Code2,
  Terminal,
  Apple,
  Download,
  Github
} from "lucide-react";
import Link from "next/link";

// Logo component - teal circle with >_ prompt
function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#4A9088"/>
      <g fill="white">
        <path d="M35 32 L55 45 L35 58 L35 50 L45 45 L35 40 Z"/>
        <rect x="35" y="62" width="25" height="5" rx="1"/>
      </g>
    </svg>
  )
}

const features = [
  {
    icon: Bot,
    title: "Background Agents",
    description: "Autonomous workflows on cron schedules with YAML definitions"
  },
  {
    icon: Zap,
    title: "CI/CD Built-in",
    description: "Self-improving agents with review loops and quality iteration"
  },
  {
    icon: Terminal,
    title: "CLI REPL",
    description: "Interactive terminal with slash commands and tool calling"
  },
  {
    icon: Monitor,
    title: "Web UI",
    description: "Browser-based interface with streaming responses"
  },
  {
    icon: Brain,
    title: "Persistent Memory",
    description: "Soul, archival, and recall across sessions"
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Smart commits, PRs, and code review"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30 pointer-events-none" />
        
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Logo size={56} />
            <span className="text-4xl font-bold text-gray-900">Kai</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            AI coding assistant with{" "}
            <span className="text-teal-600">agents & workflows</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your AI team member that never sleeps. Deploy autonomous agents to handle coding tasks, 
            content creation, and daily workflows — while you focus on what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#download" 
              className="scroll-smooth"
            >
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                <Download className="w-4 h-4 mr-2" />
                Download Desktop App
              </Button>
            </a>
            <Link href="/cli/">
              <Button size="lg" variant="outline" className="px-8">
                <Terminal className="w-4 h-4 mr-2" />
                CLI Install
              </Button>
            </Link>
          </div>
          
          {/* Quick install */}
          <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm text-gray-700">
            <span className="text-gray-400">$</span>
            <span>npm install -g kai</span>
            <button className="ml-2 text-gray-400 hover:text-gray-600">Copy</button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="px-6 py-16 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Download Kai
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Available as a native desktop app or CLI for any platform. Desktop releases are built automatically from the <a href="https://github.com/tmoreton/kai" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">main repo</a>.
          </p>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {/* macOS */}
            <a 
              href="https://github.com/tmoreton/kai/releases/download/v1.0.0/Kai_v1.0.0_aarch64.dmg" 
              className="group"
            >
              <div className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <Apple className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">macOS</h3>
                  <p className="text-xs text-gray-500 mt-1">Apple Silicon (M1/M2/M3)</p>
                  <span className="text-xs text-teal-600 font-medium mt-2 inline-block">Download .dmg</span>
                </div>
              </div>
            </a>
            
            {/* macOS Intel */}
            <a 
              href="https://github.com/tmoreton/kai/releases/download/v1.0.0/Kai_v1.0.0_x86_64.dmg" 
              className="group"
            >
              <div className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <Apple className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">macOS Intel</h3>
                  <p className="text-xs text-gray-500 mt-1">Intel-based Macs</p>
                  <span className="text-xs text-teal-600 font-medium mt-2 inline-block">Download .dmg</span>
                </div>
              </div>
            </a>
            
            {/* Linux */}
            <a 
              href="https://github.com/tmoreton/kai/releases/download/v1.0.0/Kai_v1.0.0_amd64.AppImage"
              className="group"
            >
              <div className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.779.444 1.485.877 2.059.784 1.038 1.93 1.78 3.204 2.145 1.353.388 2.853.136 4.258-.346 1.031-.363 2.048-.921 3.005-1.596 1.412-.993 2.491-2.288 3.233-3.752.7-1.381 1.055-2.874 1.055-4.407 0-1.809-.482-3.553-1.353-5.107-.726-1.302-1.782-2.426-3.053-3.251C15.495.857 14.063.265 12.504 0z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Linux</h3>
                  <p className="text-xs text-gray-500 mt-1">AppImage</p>
                  <span className="text-xs text-teal-600 font-medium mt-2 inline-block">Download</span>
                </div>
              </div>
            </a>
            
            {/* Windows */}
            <a 
              href="https://github.com/tmoreton/kai/releases/download/v1.0.0/Kai_v1.0.0_x64-setup.exe"
              className="group"
            >
              <div className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">Windows</h3>
                  <p className="text-xs text-gray-500 mt-1">x64 Installer</p>
                  <span className="text-xs text-teal-600 font-medium mt-2 inline-block">Download .exe</span>
                </div>
              </div>
            </a>
          </div>
          
          {/* CLI Alternative */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-2">Prefer CLI?</h3>
            <p className="text-sm text-gray-600 mb-4">
              The CLI version works everywhere and auto-updates via npm.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm">
              <span className="text-gray-400">$</span>
              <span className="text-gray-700">npm install -g kai</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Get Started in Seconds
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Web UI Card */}
            <Link href="/web-ui/" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Monitor className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Web UI</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Browser-based interface with streaming responses, file upload, and session management.
                </p>
                <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs text-gray-300">
                  <span className="text-gray-500">$ </span>kai start
                </div>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* CLI Card */}
            <Link href="/cli/" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Terminal className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">CLI + REPL</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Interactive terminal with slash commands, tool calling, and background agents.
                </p>
                <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs text-gray-300">
                  <span className="text-gray-500">$ </span>kai
                </div>
                <div className="mt-4 flex items-center text-orange-600 text-sm font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Everything you need to ship faster
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Kai combines AI assistance with powerful tools for modern development workflows.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 mb-4">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              21+ Built-in Skills
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kai comes with skills for popular tools and services. Activate the ones you need, keep your context clean.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "YouTube", icon: "📺", color: "bg-red-50 text-red-600" },
              { name: "Twitter", icon: "🐦", color: "bg-blue-50 text-blue-600" },
              { name: "Git", icon: "🔀", color: "bg-orange-50 text-orange-600" },
              { name: "Notion", icon: "📝", color: "bg-gray-100 text-gray-700" },
              { name: "Slack", icon: "💬", color: "bg-purple-50 text-purple-600" },
              { name: "Email", icon: "📧", color: "bg-yellow-50 text-yellow-600" },
              { name: "Browser", icon: "🌐", color: "bg-blue-50 text-blue-600" },
              { name: "Database", icon: "🗄️", color: "bg-green-50 text-green-600" },
              { name: "Files", icon: "📁", color: "bg-amber-50 text-amber-600" },
              { name: "Image Gen", icon: "🎨", color: "bg-pink-50 text-pink-600" },
              { name: "Web Search", icon: "🔍", color: "bg-teal-50 text-teal-600" },
              { name: "+10 more", icon: "✨", color: "bg-gray-50 text-gray-600" },
            ].map((skill, index) => (
              <Link 
                key={index}
                href="/skills/"
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-sm transition-all"
              >
                <span className={`flex h-8 w-8 items-center justify-center rounded-md ${skill.color} text-sm`}>
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-gray-900">{skill.name}</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/skills/">
              <Button variant="outline">
                View all skills
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to accelerate your workflow?
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Join developers who ship faster with Kai's AI-powered agents and workflow automation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://github.com/tmoreton/kai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="px-8">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </a>
            <Link href="/cli/">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 px-8">
                <Terminal className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo size={24} />
            <span className="font-semibold text-gray-900">Kai</span>
          </div>
          <p className="text-sm text-gray-500">
            Open source AI coding assistant
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/tmoreton/kai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
