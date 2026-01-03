import React from 'react';
import FloatingIcons from './FloatingIcons';
import InfiniteCarousel from './InfiniteCarousel';
import { ArrowDown, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/972547202011?text=היי עדן, הגעתי מהאתר ואשמח לשמוע פרטים";

  const quickServices = [
    { icon: '🎬', text: 'עריכת וידאו & Reels' },
    { icon: '📱', text: 'ניהול סושיאל' },
    { icon: '📸', text: 'ימי צילום' },
    { icon: '🎨', text: 'עיצוב גרפי' },
  ];

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-x-hidden pt-24 pb-10">
      
      {/* 1. Main Brand Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2e1065] via-[#0f172a] to-[#020617] z-0"></div>

      {/* 2. Animated Blobs (Deep Background) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* 3. Floating Icons Layer */}
      <FloatingIcons />

      {/* 4. Blur Overlay Layer (Creates the depth effect over icons/bg but under text) */}
      <div className="absolute inset-0 backdrop-blur-[2px] z-0 pointer-events-none"></div>

      {/* 5. Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 pointer-events-none mix-blend-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mb-8 md:mb-12 mt-4 md:mt-10 flex-grow flex flex-col justify-center">
        <h2 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-2 md:mb-4 tracking-widest uppercase drop-shadow-md">
          יוצרים תוכן מנצח
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
          EDEN DOLEV <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
             VIDEO & SOCIAL
          </span>
        </h1>

        {/* Info Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {quickServices.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-800/40 backdrop-blur-md border border-slate-600/50 px-4 py-2 rounded-xl flex items-center gap-2 text-gray-100 font-medium shadow-lg hover:bg-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-xl filter drop-shadow-md">{item.icon}</span>
              <span className="text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="text-base md:text-2xl text-gray-200 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2 font-light tracking-wide">
          מומחים ביצירת סרטונים ויראליים, צילום מקצועי ועריכה שמשאירה חותם.
          הופכים את הסיפור שלכם לתוכן שאי אפשר להתעלם ממנו.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full px-8 md:px-0">
          <a
            href="#contact"
            className="px-6 md:px-8 py-3 md:py-4 animate-gradient rounded-full text-white font-bold text-base md:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
          >
            התחילו פרויקט
          </a>
          <a
            href="#services"
            className="px-6 md:px-8 py-3 md:py-4 bg-slate-800/40 border-2 border-slate-600/50 rounded-full text-white font-bold text-base md:text-lg hover:border-blue-400 hover:text-blue-300 transition-all duration-300 w-full sm:w-auto backdrop-blur-md"
          >
            גלו את השירותים
          </a>
           <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 md:py-4 bg-[#25D366] rounded-full text-white font-bold text-base md:text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} fill="white" />
            ווטסאפ
          </a>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="w-full mt-auto z-20">
        <InfiniteCarousel />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hidden md:block z-10">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;