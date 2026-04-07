import React from 'react';
import { Monitor, Terminal } from 'lucide-react';

interface QuickStartCardProps {
  title: string;
  description: string;
  icon: 'monitor' | 'terminal';
  iconColor: 'blue' | 'orange';
  commands: string[];
}

interface QuickStartProps {
  title?: string;
  cards: QuickStartCardProps[];
  className?: string;
}

const iconMap = {
  monitor: Monitor,
  terminal: Terminal,
};

const iconColorClasses = {
  blue: 'text-blue-500',
  orange: 'text-orange-500',
};

export const QuickStart: React.FC<QuickStartProps> = ({
  title = 'Quick Start',
  cards,
  className = '',
}) => {
  return (
    <section className={`bg-[#f0fdfa] rounded-2xl p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => {
          const Icon = iconMap[card.icon];
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${iconColorClasses[card.iconColor]}`}>
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-gray-800 overflow-x-auto">
                {card.commands.map((cmd, i) => (
                  <div key={i} className={i > 0 ? 'mt-2' : ''}>
                    {cmd.startsWith('$') ? (
                      <span>
                        <span className="text-gray-500">$ </span>
                        <span>{cmd.slice(2)}</span>
                      </span>
                    ) : (
                      <span>{cmd}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickStart;
