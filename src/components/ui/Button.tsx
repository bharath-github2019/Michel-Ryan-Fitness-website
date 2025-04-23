import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  href, 
  type = 'button',
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  const baseClasses = 'font-bold rounded-md transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    secondary: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black active:bg-gray-200',
  };
  
  const sizeClasses = {
    small: 'text-sm px-4 py-2',
    medium: 'px-6 py-3',
    large: 'text-lg px-8 py-4',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`;
  
  if (href && !disabled) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;