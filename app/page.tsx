"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Download
} from "lucide-react";
import Link from "next/link";

// Logo component - teal circle with >_ prompt
function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#14b8a6"/>
      <g fill="white">
        <polygon points="35,30 60,45 35,60" transform="translate(5, -5) scale(0.8)"/>
        <rect x="35" y="62" width="30" height="6" rx="1"/>
      </g>
    </svg>
  )
}

const features = [
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
    icon: Bot,
    title: "Background Agents",
    description: "Autonomous workflows on cron schedules"
  },
  {
    icon: Zap,
    title: "21+ Skills",
    description: "YouTube, Twitter, Notion, Slack, and more"
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
            <Logo size={48} />
            <span className="text-2xl font-bold text-gray-900">Kai</span>
            <Badge variant="secondary" className="text-xs">v1.1.0</Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            AI coding assistant with{" "}
            <span className="text-teal-600">persistent memory</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Kai is an AI-powered development environment that understands your codebase, 
            remembers context across sessions, and helps you ship faster with intelligent tools.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/Kai_1.1.0_aarch64.dmg">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                <Apple className="w-4 h-4 mr-2" />
                Download for Mac
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
      <section className="px-6 py-16 bg-gradient-to-br from-gray-50 to-teal-50/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Download Kai
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Available as a native desktop app or CLI for any platform.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {/* macOS */}
            <Link href="/Kai_1.1.0_aarch64.dmg" className="group">
              <div className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-700 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <Apple className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">macOS</h3>
                  <p className="text-xs text-gray-500 mt-1">Apple Silicon</p>
                  <span className="text-xs text-teal-600 font-medium mt-2 inline-block">Download DMG</span>
                </div>
              </div>
            </Link>
            
            {/* Windows - coming soon */}
            <div className="flex flex-col items-center gap-3 p-5 bg-gray-50 rounded-xl border border-gray-200 opacity-75">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-600">Windows</h3>
                <p className="text-xs text-gray-500 mt-1">Coming soon</p>
              </div>
            </div>
            
            {/* Linux - coming soon */}
            <div className="flex flex-col items-center gap-3 p-5 bg-gray-50 rounded-xl border border-gray-200 opacity-75">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-gray-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.779.444 1.485.877 2.059.784 1.038 1.93 1.78 3.204 2.145 1.353.388 2.853.136 4.258-.346 1.031-.363 2.048-.921 3.005-1.596 1.412-.993 2.491-2.288 3.233-3.752.7-1.381 1.055-2.874 1.055-4.407 0-1.809-.482-3.553-1.353-5.107-.726-1.302-1.782-2.426-3.053-3.251C15.495.857 14.063.265 12.504 0z"/>
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-600">Linux</h3>
                <p className="text-xs text-gray-500 mt-1">Coming soon</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Cross-platform CLI:</strong> Works on macOS (Intel), Windows, and Linux today
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm text-gray-700">
              <span className="text-gray-400">$</span>
              <span>npm install -g kai</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-gray-50/50">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Everything you need</h2>
            <p className="text-gray-600">Built for developers who want AI superpowers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-teal-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">21 Ready-to-use Skills</h2>
              <p className="text-gray-600">Connect your favorite platforms with one command</p>
            </div>
            <Link href="/skills/">
              <Button variant="outline">
                Browse all skills
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "YouTube", desc: "Analytics & video stats" },
              { name: "Twitter", desc: "Post & analyze tweets" },
              { name: "Notion", desc: "Query databases" },
              { name: "Slack", desc: "Send notifications" },
              { name: "GitHub", desc: "PRs & commits" },
              { name: "Docker", desc: "Deploy containers" },
              { name: "Browser", desc: "Web scraping" },
              { name: "OpenRouter", desc: "AI image gen" },
            ].map((skill) => (
              <div key={skill.name} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-medium text-gray-900">{skill.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-teal-600">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to ship faster?
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Join developers using Kai to build with AI. Open source and free to use.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/cli/">
              <Button size="lg" variant="secondary" className="px-8">
                Read Documentation
              </Button>
            </Link>
            <a 
              href="https://github.com/tmoreton/kai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-teal-400 text-white hover:bg-teal-700 px-8">
                <Code2 className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
