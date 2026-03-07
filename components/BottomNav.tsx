import React, { useState, useEffect } from 'react';
import { Home, Laptop, Image, User, Mail, Briefcase, Star } from 'lucide-react';

const BottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Force hero active when at the top
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      const sections = ['hero', 'services', 'gallery', 'about', 'experience', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset for better triggering

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call immediately to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60]">
        {/* Glassmorphism Container */}
        <div className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10 px-2 py-2 flex justify-between items-end shadow-[0_-10px_40px_rgba(0,0,0,0.3)] pb-[env(safe-area-inset-bottom)] md:px-8 md:py-3 md:max-w-4xl md:mx-auto md:rounded-t-2xl md:border-x md:border-white/10">
            
            {/* Left Icons Group */}
            <div className="flex items-center justify-around flex-1 mb-1">
                <button 
                    onClick={() => scrollTo('hero')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'hero' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <Home size={20} strokeWidth={activeSection === 'hero' ? 2.5 : 2} />
                    <span className="text-[9px] font-medium">בית</span>
                </button>

                <button 
                    onClick={() => scrollTo('services')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'services' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <Laptop size={20} strokeWidth={activeSection === 'services' ? 2.5 : 2} />
                    <span className="text-[9px] font-medium">שירותים</span>
                </button>

                <button 
                    onClick={() => scrollTo('gallery')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'gallery' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <Image size={20} strokeWidth={activeSection === 'gallery' ? 2.5 : 2} />
                    <span className="text-[9px] font-medium">עבודות</span>
                </button>
            </div>

            {/* Center Logo - Floating */}
            <div className="relative -top-5 mx-1 flex-shrink-0 z-10">
                <button 
                    onClick={() => scrollTo('hero')}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-emerald-500 p-[2px] shadow-lg shadow-purple-500/40 transform transition-transform active:scale-95 flex items-center justify-center"
                >
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border border-white/10">
                        <div className="flex flex-col items-center justify-center leading-none">
                            <span className="text-white font-black text-[9px] tracking-wider">EDEN</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-bold text-[7px] tracking-widest">DOLEV</span>
                        </div>
                    </div>
                </button>
            </div>

            {/* Right Icons Group */}
            <div className="flex items-center justify-around flex-1 mb-1">
                <button 
                    onClick={() => scrollTo('about')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'about' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <User size={20} strokeWidth={activeSection === 'about' ? 2.5 : 2} />
                    <span className="text-[9px] font-medium">אודות</span>
                </button>

                <button 
                    onClick={() => scrollTo('testimonials')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'testimonials' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <Star size={20} strokeWidth={activeSection === 'testimonials' ? 2.5 : 2} />
                    <span className="text-[9px] font-medium">המלצות</span>
                </button>

                 <button 
                    onClick={() => scrollTo('contact')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'contact' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <Mail size={20} strokeWidth={activeSection === 'contact' ? 2.5 : 2} />
                    <span className="text-[9px] font-medium">צור קשר</span>
                </button>
            </div>

        </div>
    </div>
  );
};

export default BottomNav;
