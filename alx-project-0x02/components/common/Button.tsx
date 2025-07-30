
import React from 'react';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'medium', shape = 'rounded-md', className = '' }) => {
  let sizeClasses = '';
  switch (size) {
    case 'small':
      sizeClasses = 'px-3 py-1 text-sm';
      break;
    case 'medium':
      sizeClasses = 'px-4 py-2 text-base';
      break;
    case 'large':
      sizeClasses = 'px-6 py-3 text-lg';
      break;
    default:
      sizeClasses = 'px-4 py-2 text-base'; 
  }

  const shapeClasses = shape;

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${sizeClasses} ${shapeClasses} focus:outline-none focus:shadow-outline ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;