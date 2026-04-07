import React from 'react';
import { Zap, Monitor, Terminal } from 'lucide-react';

export type FilterTab = 'all' | 'web-ui' | 'cli';

interface FilterTabsProps {
  activeTab: FilterTab;
  onTabChange: (tab: FilterTab) => void;
  className?: string;
}

const tabs: { id: FilterTab; label: string; icon: typeof Zap }[] = [
  { id: 'all', label: 'All', icon: Zap },
  { id: 'web-ui', label: 'Web UI', icon: Monitor },
  { id: 'cli', label: 'CLI', icon: Terminal },
];

export const FilterTabs: React.FC<FilterTabsProps> = ({
  activeTab,
  onTabChange,
  className = '',
}) => {
  return (
    <div
      className={`
        inline-flex items-center
        bg-gray-100/80
        rounded-full
        p-1
        ${className}
      `}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center gap-2
              px-4 py-2
              rounded-full
              text-sm font-medium
              transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1
              ${
                isActive
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            <Icon className="w-4 h-4 stroke-[1.5]" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabs;
