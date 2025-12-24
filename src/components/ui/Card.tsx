import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
    : '';

  return (
    <div
      className={`bg-white rounded-xl shadow-lg transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
