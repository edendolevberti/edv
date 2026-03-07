import React from 'react';
import FloatingIcons from './FloatingIcons';
import InfiniteCarousel from './InfiniteCarousel';
import { ArrowDown, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappMessage = "היי עדן, הגעתי מהאתר ואשמח לשמוע פרטים על בניית אתר/חנות או ניהול GMB";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=972547202011&text=${encodeURIComponent(whatsappMessage)}`;

  const quickServices = [
    { icon: '💻', text: 'בניית אתרים' },
    { icon: '🛍️', text: 'חנויות דיגיטליות' },
    { icon: '📍', text: 'ניהול גוגל לעסק שלי' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-x-hidden pt-24 pb-28">
      
      {/* 1. Main Brand Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-50 via-slate-50 to-white dark:from-[#2e1b2e] dark:via-[#0f172a] dark:to-[#020617] z-0 transition-colors duration-500"></div>

      {/* 2. Animated Blobs (Deep Background) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-500/30 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/30 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500/30 dark:bg-emerald-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-4000"></div>
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
        <h2 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 mb-2 md:mb-4 tracking-widest uppercase drop-shadow-md">
          Digital Presence Expert
        </h2>
        
        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-tight drop-shadow-2xl transition-colors duration-300">
          EDEN DOLEV
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-slate-700 dark:text-gray-100 max-w-4xl mx-auto mb-10 font-light leading-relaxed drop-shadow-lg transition-colors duration-300">
          🎯 מומחה לנוכחות דיגיטלית | בונים נכסים שמייצרים הכנסות
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-8 mb-12">
           <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 font-medium animate-pulse transition-colors duration-300">
             רוצים אתר או חנות שמוכרים באמת? 👇
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full px-8 md:px-0">
            
            {/* Start Project Button with Prominent RGB Border Animation */}
            <div className="relative group w-full sm:w-auto scale-100 hover:scale-105 transition-transform duration-300 z-20">
                {/* 1. Outer Glow (Blurry) */}
                <div className="absolute -inset-1 rounded-full opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-200 animate-gradient"></div>
                
                {/* 2. Sharp Border (Slightly larger than button to act as frame) */}
                <div className="absolute -inset-[2px] rounded-full opacity-100 animate-gradient"></div>
                
                {/* 3. The Button Content */}
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="relative block w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900 rounded-full leading-none flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
                >
                    <span className="text-slate-900 dark:text-white font-black text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">בואו נתחיל 🚀</span>
                </a>
            </div>

            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 bg-[#25D366] rounded-full text-white font-bold text-base md:text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 z-20"
            >
                <MessageCircle size={20} fill="white" />
                ייעוץ בוואטסאפ
            </a>
            </div>
        </div>

        {/* Feature List - Text Only (No Button Styling) - Moved Below Buttons */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {quickServices.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-slate-700 dark:text-gray-300 select-none transition-colors duration-300"
            >
              <span className="text-2xl md:text-3xl filter drop-shadow-lg">{item.icon}</span>
              <span className="text-base md:text-lg font-medium tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Infinite Carousel */}
      <div className="w-full mt-auto z-20">
        <InfiniteCarousel />
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#services"
        onClick={(e) => handleScroll(e, '#services')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-400 hidden md:block z-10 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;