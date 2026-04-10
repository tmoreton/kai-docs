import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link'
import { Monitor, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kai - AI Coding Assistant',
  description: 'AI-powered development environment with background agents, YAML workflows, and CI/CD integration',
  icons: {
    icon: '/favicon.svg',
  },
};

// Logo component matching the design: teal circle with >_ prompt
function Logo({ size = 32 }: { size?: number }) {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Logo size={32} />
                <span className="text-lg font-semibold text-gray-900">Kai</span>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/cli/" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-1.5">
                  <Monitor size={14} />
                  CLI
                </Link>
                <Link href="/web-ui/" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-1.5">
                  <Monitor size={14} />
                  Web UI
                </Link>
                <Link href="/skills/" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-1.5">
                  <Zap size={14} />
                  Skills
                </Link>
                <a 
                  href="https://github.com/tmoreton/kai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                >
                  GitHub
                </a>
              </nav>

              {/* Mobile menu button */}
              <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
