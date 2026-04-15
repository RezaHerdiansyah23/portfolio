import React from 'react';

interface XPWindowProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
  className?: string;
}

export const XPWindow: React.FC<XPWindowProps> = ({ title, children, icon, className }) => {
  return (
    <div className={`xp-window ${className}`}>
      <div className="xp-titlebar">
        <div className="flex items-center gap-2">
          {icon && <span className="w-4 h-4">{icon}</span>}
          <span>{title}</span>
        </div>
        <div className="flex gap-1">
          <button className="xp-button px-2 py-0 h-5 flex items-center justify-center bg-xp-silver hover:brightness-125">
            <span className="mb-1 text-xs">_</span>
          </button>
          <button className="xp-button px-2 py-0 h-5 flex items-center justify-center bg-xp-silver hover:brightness-125">
             <div className="w-2 h-2 border border-black"></div>
          </button>
          <button className="xp-button px-2 py-0 h-5 flex items-center justify-center bg-red-500 hover:bg-red-400 text-white font-bold text-xs shadow-none">
            ✕
          </button>
        </div>
      </div>
      <div className="p-4 bg-white m-0.5 border border-gray-400">
        {children}
      </div>
    </div>
  );
};
