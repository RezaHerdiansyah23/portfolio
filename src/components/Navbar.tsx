import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="glass-panel p-2 px-6 flex items-center justify-between border-white/60">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 shadow-lg"></div>
          <span className="font-black italic text-xl tracking-tighter text-orange-500">REZA H.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-500">
          <a href="#hero" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-orange-500 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>

        <button className="bg-gradient-to-tr from-orange-600 to-orange-400 text-white px-5 py-1.5 rounded-full font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all">
          LET&apos;S TALK
        </button>
      </div>
    </nav>
  );
};
