import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  className = '',
}) => {
  return (
    <header className={`mb-8 ${className}`}>
      <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default PageHeader;
