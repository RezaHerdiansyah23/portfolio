import React from 'react';

export const AeroCard = ({ children, className = '' }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`aero-card ${className}`}>{children}</div>
);
