import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string | string[];
  language?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers = false,
  showCopyButton = true,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const codeLines = Array.isArray(code) ? code : code.split('\n');
  const displayCode = codeLines.join('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {showCopyButton && (
        <button
          onClick={handleCopy}
          className={`
            absolute top-3 right-3
            p-2 rounded-md
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-teal-500
            ${
              copied
                ? 'bg-green-100 text-green-600'
                : 'bg-white/50 text-gray-500 hover:text-gray-700 hover:bg-white opacity-0 group-hover:opacity-100'
            }
          `}
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      )}
      <pre
        className={`
          bg-gray-100
          rounded-lg
          p-4
          font-mono text-sm text-gray-800
          overflow-x-auto
          ${showCopyButton ? 'pr-12' : ''}
        `}
      >
        <code>
          {showLineNumbers ? (
            <div className="flex">
              <div className="select-none pr-4 text-gray-400 text-right min-w-[2.5rem]">
                {codeLines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="flex-1">
                {codeLines.map((line, i) => (
                  <div key={i}>{line || ' '}</div>
                ))}
              </div>
            </div>
          ) : (
            codeLines.map((line, i) => (
              <div key={i}>{line || ' '}</div>
            ))
          )}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
