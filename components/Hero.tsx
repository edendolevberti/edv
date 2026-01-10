import React from 'react';
import FloatingIcons from './FloatingIcons';
import InfiniteCarousel from './InfiniteCarousel';
import { ArrowDown, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappMessage = "היי עדן, הגעתי מהאתר ואשמח לשמוע פרטים על בניית נוכחות דיגיטלית";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=972547202011&text=${encodeURIComponent(whatsappMessage)}`;

  const quickServices = [
    { icon: '💻', text: 'אתרי תדמית וחנויות (E-com)' },
    { icon: '🎬', text: 'הפקת תוכן וידאו לסושיאל' },
    { icon: '📍', text: 'שליטה בגוגל מפות (GMB)' },
  ];

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-x-hidden pt-24 pb-10">
      
      {/* 1. Main Brand Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b2e] via-[#0f172a] to-[#020617] z-0"></div>

      {/* 2. Animated Blobs (Deep Background) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* 3. Floating Icons Layer */}
      <FloatingIcons />

      {/* 4. Blur Overlay Layer (Creates the depth effect over icons/bg but under text) */}
      <div className="absolute inset-0 backdrop-blur-[2px] z-0 pointer-events-none"></div>

      {/* 5. Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 pointer-events-none mix-blend-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mb-8 md:mb-12 mt-4 md:mt-10 flex-grow flex flex-col justify-center">
        
        {/* Title / Role */}
        <h2 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 md:mb-4 tracking-widest uppercase drop-shadow-md">
          Digital Presence Expert
        </h2>
        
        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
          EDEN DOLEV
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-gray-100 max-w-4xl mx-auto mb-8 font-light leading-relaxed drop-shadow-lg">
          🌐 בונה ומנהל נוכחות דיגיטלית ב-360° לעסקים
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {quickServices.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-800/60 backdrop-blur-md border border-slate-600/50 px-5 py-3 rounded-xl flex items-center gap-3 text-gray-100 font-medium shadow-lg hover:bg-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-xl md:text-2xl filter drop-shadow-md">{item.icon}</span>
              <span className="text-sm md:text-lg">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
           <p className="text-lg md:text-xl text-gray-300 font-medium animate-pulse">
             הדרך שלך לצמיחה דיגיטלית מתחילה כאן 👇
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full px-8 md:px-0">
            <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 rounded-full text-white font-bold text-base md:text-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/50 hover:bg-blue-500 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
                התחילו פרויקט
            </a>
            <a
                href="#services"
                className="px-6 md:px-8 py-3 md:py-4 bg-slate-800/40 border-2 border-slate-600/50 rounded-full text-white font-bold text-base md:text-lg hover:border-pink-500 hover:text-pink-500 transition-all duration-300 w-full sm:w-auto backdrop-blur-md"
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