import React, { useState, useEffect } from 'react';
import { User, LogOut, Settings, Folder, FileText, Globe } from 'lucide-react';

export const Taskbar = () => {
  const [time, setTime] = useState('');
  const [isStartOpen, setIsStartOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-[#245edb] to-[#3f8cf3] border-t border-white/30 flex items-center justify-between px-1 z-50">
      <div className="flex items-center h-full gap-1">
        {/* Start Button */}
        <div className="relative">
          <button 
            onClick={() => setIsStartOpen(!isStartOpen)}
            className={`h-8 flex items-center px-4 rounded-r-full bg-gradient-to-b from-[#388e3c] to-[#2e7d32] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5)] border-r-2 border-b-2 border-black/30 hover:brightness-110 active:scale-95 transition-all outline-none ${isStartOpen ? 'brightness-75' : ''}`}
          >
            <span className="text-white font-bold italic text-lg drop-shadow-md">start</span>
          </button>

          {/* Start Menu */}
          {isStartOpen && (
            <div className="absolute bottom-full left-0 mb-0.5 w-64 bg-white border-2 border-xp-blue-dark rounded-t-lg shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
              <div className="bg-gradient-to-r from-xp-blue-dark to-xp-blue-light p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-white border border-white flex items-center justify-center overflow-hidden">
                  <User size={24} className="text-xp-blue-dark" />
                </div>
                <span className="text-white font-bold drop-shadow-sm">Administrator</span>
              </div>
              
              <div className="flex bg-[#d3e5fa]">
                <div className="flex-1 bg-white p-2 text-xs font-semibold text-gray-700">
                   <div className="p-2 hover:bg-blue-100 flex items-center gap-2 cursor-pointer">
                      <Globe size={16} className="text-blue-600" /> Web Browser
                   </div>
                   <div className="p-2 hover:bg-blue-100 flex items-center gap-2 cursor-pointer">
                      <FileText size={16} className="text-blue-600" /> Resume.doc
                   </div>
                   <div className="h-px bg-gray-200 my-1"></div>
                   <div className="p-2 hover:bg-blue-100 flex items-center gap-2 cursor-pointer">
                      <Folder size={16} className="text-yellow-600" /> All Programs
                   </div>
                </div>
                <div className="w-24 bg-[#d3e5fa] p-2 text-[10px] font-bold text-xp-blue-dark border-l border-white">
                   <div className="p-1 hover:underline cursor-pointer">My Documents</div>
                   <div className="p-1 hover:underline cursor-pointer">My Pictures</div>
                   <div className="p-1 hover:underline cursor-pointer">My Music</div>
                   <div className="h-px bg-white/50 my-2"></div>
                   <div className="p-1 hover:underline cursor-pointer">Control Panel</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-xp-blue-dark to-xp-blue-light p-1 flex justify-end gap-2 px-3">
                 <button className="flex items-center gap-1 text-white text-[10px] font-bold hover:underline">
                    <LogOut size={12} /> Log Off
                 </button>
                 <button className="flex items-center gap-1 text-white text-[10px] font-bold hover:underline">
                    <Settings size={12} /> Turn Off
                 </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="h-6 w-px bg-white/20 mx-1"></div>
        
        {/* Navigation / Tasks */}
        <div className="flex gap-2">
            <button className="xp-button text-white bg-[#3f8cf3] border-none shadow-none hover:bg-white/10 px-3 hidden sm:block">Projects</button>
            <button className="xp-button text-white bg-[#3f8cf3] border-none shadow-none hover:bg-white/10 px-3 hidden sm:block">Skills</button>
        </div>
      </div>

      <div className="h-8 px-4 bg-[#1290eb] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)] border border-white/20 flex items-center mr-1">
        <span className="text-white text-xs font-medium">{time}</span>
      </div>
    </div>
  );
};
