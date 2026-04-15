import React from 'react';

interface AeroCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const AeroCard: React.FC<AeroCardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`aero-card ${className}`}>
      {title && (
        <h3 className="text-xl font-black text-aero-blue-dark mb-4 italic uppercase tracking-tighter">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
