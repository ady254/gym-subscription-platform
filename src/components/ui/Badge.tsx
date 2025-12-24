import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'success' | 'warning' | 'info' | 'danger';
  className?: string;
}

export default function Badge({
  children,
  variant = 'info',
  className = '',
}: BadgeProps) {
  const variants = {
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
    danger: 'bg-red-100 text-red-700',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
