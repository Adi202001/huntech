import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const baseStyles = "rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#1d1d1f] text-white hover:bg-gray-800 hover:shadow-lg",
    secondary: "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-gray-200",
    outline: "border border-[#1d1d1f] text-[#1d1d1f] hover:bg-[#1d1d1f] hover:text-white"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};