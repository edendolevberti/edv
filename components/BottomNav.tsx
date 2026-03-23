import React, { useState, useEffect } from 'react';
import { Home, Laptop, Image, User, Star, MessageCircle } from 'lucide-react';

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
                    <Home className="w-5 h-5 md:w-9 md:h-9" strokeWidth={activeSection === 'hero' ? 2.5 : 2} />
                    <span className="text-[9px] md:text-base font-medium">בית</span>
                </button>

                <button 
                    onClick={() => scrollTo('services')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'services' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <Laptop className="w-5 h-5 md:w-9 md:h-9" strokeWidth={activeSection === 'services' ? 2.5 : 2} />
                    <span className="text-[9px] md:text-base font-medium">שירותים</span>
                </button>

                <button 
                    onClick={() => scrollTo('gallery')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'gallery' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <Image className="w-5 h-5 md:w-9 md:h-9" strokeWidth={activeSection === 'gallery' ? 2.5 : 2} />
                    <span className="text-[9px] md:text-base font-medium">עבודות</span>
                </button>
            </div>

            {/* Center Logo - Floating */}
            <div className="relative -top-6 md:-top-9 mx-2 flex-shrink-0 z-10">
                <button 
                    onClick={() => scrollTo('hero')}
                    className="w-16 h-16 md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-br from-pink-600 to-purple-600 p-[2px] md:p-[3px] shadow-lg shadow-purple-500/40 transform transition-transform active:scale-95 flex items-center justify-center"
                >
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border border-white/10">
                        <div className="flex flex-col items-center justify-center leading-none">
                            <span className="text-white font-black text-[16px] md:text-2xl tracking-wider">EDEN</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-bold text-[13px] md:text-lg tracking-widest">DOLEV</span>
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
                    <User className="w-5 h-5 md:w-9 md:h-9" strokeWidth={activeSection === 'about' ? 2.5 : 2} />
                    <span className="text-[9px] md:text-base font-medium">אודות</span>
                </button>

                <button 
                    onClick={() => scrollTo('testimonials')}
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 ${activeSection === 'testimonials' ? 'text-yellow-400 scale-110' : 'text-slate-400 hover:text-slate-200'}`}
                >
                    <Star className="w-5 h-5 md:w-9 md:h-9" strokeWidth={activeSection === 'testimonials' ? 2.5 : 2} />
                    <span className="text-[9px] md:text-base font-medium">המלצות</span>
                </button>

                 <a 
                    href={`https://api.whatsapp.com/send?phone=972547202011&text=${encodeURIComponent("היי עדן, הגעתי מהאתר ואשמח לשמוע פרטים על בניית אתר/חנות או ניהול GMB")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-0.5 transition-all duration-300 text-slate-400 hover:text-[#25D366]`}
                >
                    <MessageCircle className="w-5 h-5 md:w-9 md:h-9" strokeWidth={2} />
                    <span className="text-[9px] md:text-base font-medium">בוואטסאפ</span>
                </a>
            </div>

        </div>
    </div>
  );
};

export default BottomNav;
