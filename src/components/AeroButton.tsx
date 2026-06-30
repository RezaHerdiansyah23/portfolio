import React from 'react';

const VARIANTS: Record<string, string> = {
  green: 'glossy-gradient-green',
  glass: 'bg-white/30 backdrop-blur-md border border-white/40 text-orange-200',
  blue: 'bg-blue-600 hover:bg-blue-500',
  orange: 'glossy-gradient-orange',
};

export const AeroButton = ({ variant = 'orange', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string }) => (
  <button className={`aero-button ${VARIANTS[variant] || VARIANTS.orange} ${className}`} {...props} />
);
