import React from 'react';

interface AeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'orange' | 'green' | 'glass' | 'blue';
  children: React.ReactNode;
}

export const AeroButton: React.FC<AeroButtonProps> = ({ 
  variant = 'orange', 
  children, 
  className = '', 
  ...props 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'green':
        return 'glossy-gradient-green';
      case 'glass':
        return 'bg-white/30 backdrop-blur-md border border-white/40 text-orange-200';
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-500';
      default:
        return 'glossy-gradient-orange';
    }
  };

  return (
    <button 
      className={`aero-button ${getVariantClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
