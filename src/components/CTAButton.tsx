import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = ''
}: CTAButtonProps) {
  const baseStyles = 'rounded-lg transition-all duration-300 inline-block text-center cursor-pointer group font-medium';
  
  const variants = {
    primary: 'bg-blue-900 hover:bg-blue-800 text-white shadow-md hover:shadow-xl',
    secondary: 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-xl',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4',
    lg: 'px-10 py-5 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
