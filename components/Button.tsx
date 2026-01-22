import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-10 py-4 uppercase tracking-[0.15em] font-sans font-bold text-xs md:text-sm transition-all duration-500 ease-out flex items-center justify-center";
  
  const variants = {
    // Primary: Dark Loam background, Stone text
    primary: "bg-loam-900 text-stone-100 border border-loam-900 hover:bg-stone-100 hover:text-loam-900",
    // Outline: Stone border, Stone text (for dark backgrounds)
    outline: "bg-transparent border border-stone-100 text-stone-100 hover:bg-stone-100 hover:text-loam-900",
    // Text: Simple link style
    text: "bg-transparent text-loam-800 hover:text-bronze-600 underline-offset-4 hover:underline px-0 py-2"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
};