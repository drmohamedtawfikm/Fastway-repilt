
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-[48px] z-50 border-b border-slate-100 py-4 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gradient-purple rounded-xl flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-purple-900/20">F</div>
          <span className="text-2xl font-black text-[#4e1a89] tracking-tight">Fastway</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-slate-500 font-bold">
          <a href="#how-it-works" className="hover:text-[#4e1a89] transition-colors">إزاي شغالين؟</a>
          <a href="#restaurants" className="hover:text-[#4e1a89] transition-colors">المطاعم</a>
          <a href="#trust" className="hover:text-[#4e1a89] transition-colors">ليه فاست واي؟</a>
        </div>

        <button className="bg-[#4e1a89] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#3b1368] transition-all shadow-md">
          دخول
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
