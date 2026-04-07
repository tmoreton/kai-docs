import React from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon: Icon,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-between w-full
        bg-white border border-gray-200
        rounded-2xl
        px-6 py-5
        transition-all duration-200 ease-in-out
        hover:shadow-md hover:border-gray-300
        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
        ${className}
      `}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10">
          <Icon className="w-6 h-6 text-teal-500 stroke-[1.5]" />
        </div>
        <span className="text-lg font-semibold text-gray-900">{title}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 stroke-[1.5]" />
    </button>
  );
};

export default CategoryCard;
