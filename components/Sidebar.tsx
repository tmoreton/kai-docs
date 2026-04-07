import React, { useState } from 'react';
import { ChevronRight, ChevronDown, LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  icon?: LucideIcon;
  children?: NavItem[];
}

export interface SidebarSectionProps {
  title: string;
  items: NavItem[];
  defaultExpanded?: boolean;
}

interface SidebarProps {
  sections: SidebarSectionProps[];
  activeItemId?: string;
  className?: string;
}

const SidebarNavItem: React.FC<{
  item: NavItem;
  depth?: number;
  activeItemId?: string;
  onItemClick?: (item: NavItem) => void;
}> = ({ item, depth = 0, activeItemId, onItemClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.id === activeItemId;
  const Icon = item.icon;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
    onItemClick?.(item);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`
          flex items-center w-full
          px-3 py-2
          rounded-lg
          text-sm
          transition-colors duration-150
          focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-1
          ${
            isActive
              ? 'bg-teal-50 text-teal-700 font-medium'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }
          ${depth > 0 ? 'ml-4' : ''}
        `}
      >
        {hasChildren && (
          <span className="mr-1">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </span>
        )}
        {Icon && <Icon className="w-4 h-4 mr-2 stroke-[1.5]" />}
        <span className="truncate">{item.label}</span>
      </button>

      {hasChildren && isExpanded && (
        <div className="mt-1">
          {item.children!.map((child) => (
            <SidebarNavItem
              key={child.id}
              item={child}
              depth={depth + 1}
              activeItemId={activeItemId}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeItemId,
  className = '',
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    () => new Set(sections.filter((s) => s.defaultExpanded).map((s) => s.title))
  );

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <aside
      className={`
        w-64 min-h-screen
        bg-white border-r border-gray-200
        p-4
        ${className}
      `}
    >
      <div className="space-y-6">
        {sections.map((section) => {
          const isExpanded = expandedSections.has(section.title);

          return (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="
                  flex items-center justify-between w-full
                  px-3 py-2
                  text-xs font-semibold text-gray-400 uppercase tracking-wider
                  hover:text-gray-600
                  transition-colors duration-150
                  focus:outline-none
                "
              >
                <span>{section.title}</span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {isExpanded && (
                <div className="mt-2 space-y-1">
                  {section.items.map((item) => (
                    <SidebarNavItem
                      key={item.id}
                      item={item}
                      activeItemId={activeItemId}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
