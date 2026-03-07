import React from 'react';
import { Code, ShoppingBag, Globe, Database } from 'lucide-react';

const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Code / React - Top Right */}
      <div className="absolute top-20 -right-4 md:top-[15%] md:right-[15%] animate-float">
        <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl flex items-center justify-center rotate-12 opacity-80 hover:opacity-100 transition-all duration-300 border border-slate-100 dark:border-slate-700">
          <Code className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-fuchsia-500" />
        </div>
      </div>

      {/* Shopping / E-commerce - Top Left */}
      <div className="absolute top-24 -left-4 md:top-[20%] md:left-[15%] animate-float-delayed">
         <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center -rotate-12 opacity-80 hover:opacity-100 transition-all duration-300 border border-slate-100 dark:border-slate-700">
          <ShoppingBag className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-pink-500" />
        </div>
      </div>

      {/* Globe / SEO - Middle Right */}
      <div className="absolute top-[55%] -right-2 md:top-[45%] md:right-[20%] animate-float-slow">
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex items-center justify-center rotate-6 opacity-80 hover:opacity-100 transition-all duration-300 border border-slate-100 dark:border-slate-700">
          <Globe className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-emerald-500" />
        </div>
      </div>

      {/* Database / Tech - Middle Left */}
      <div className="absolute top-[62%] -left-2 md:top-[55%] md:left-[20%] animate-float">
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center -rotate-6 opacity-80 hover:opacity-100 transition-all duration-300 border border-slate-100 dark:border-slate-700">
          <Database className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default FloatingIcons;