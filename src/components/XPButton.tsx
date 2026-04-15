import React from 'react';

interface XPButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'green' | 'orange';
  children: React.ReactNode;
}

export const XPButton: React.FC<XPButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'green':
        return 'xp-green-button';
      case 'orange':
        return 'bg-[#f6a11a] hover:brightness-110 active:scale-95 text-white font-bold px-6 py-2 rounded-full border-2 border-orange-700 shadow-lg';
      case 'secondary':
        return 'xp-button bg-gray-200 border-gray-400';
      default:
        return 'xp-button';
    }
  };

  return (
    <button 
      className={`${getVariantClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
