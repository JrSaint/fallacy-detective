
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = 'bg-blue-500 hover:bg-blue-600', ...props }) => {
  return (
    <button
      className={`text-white font-bold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
