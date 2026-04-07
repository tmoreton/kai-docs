"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Terminal, 
  Monitor, 
  Zap, 
  Brain, 
  GitBranch, 
  Bot,
  ArrowRight,
  Sparkles,
  Code2
} from "lucide-react";
import Link from "next/link";

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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white shadow-lg shadow-teal-600/20">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Kai</span>
            <Badge variant="secondary" className="text-xs">v2.0</Badge>
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
            <Link href="/cli/">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8">
                <Terminal className="w-4 h-4 mr-2" />
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/web-ui/">
              <Button size="lg" variant="outline" className="px-8">
                <Monitor className="w-4 h-4 mr-2" />
                Try Web UI
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
