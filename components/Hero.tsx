import React, { useState, useEffect } from 'react';
import FloatingIcons from './FloatingIcons';
import { ArrowDown, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { CAROUSEL_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const whatsappMessage = "היי עדן, הגעתי מהאתר ואשמח לשמוע פרטים על בניית אתר/חנות או ניהול GMB";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=972547202011&text=${encodeURIComponent(whatsappMessage)}`;

  const quickServices = [
    { icon: '💻', text: 'בניית אתרים' },
    { icon: '🛍️', text: 'חנויות דיגיטליות' },
    { icon: '📍', text: 'ניהול גוגל לעסק שלי' },
  ];

  // Auto-play fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-28"
    >
      
      {/* Background Fade Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900 select-none">
        {CAROUSEL_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              draggable="false"
            />
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[1px]"></div>
          </div>
        ))}
      </div>

      {/* Floating Icons Layer */}
      <FloatingIcons />

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mb-8 md:mb-12 mt-4 md:mt-10 flex-grow flex flex-col justify-center">
        
        {/* Title / Role */}
        <h2 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2 md:mb-4 tracking-widest uppercase drop-shadow-md">
          Digital Presence Expert
        </h2>
        
        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl transition-colors duration-300">
          EDEN DOLEV
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl text-gray-100 max-w-4xl mx-auto mb-10 font-light leading-relaxed drop-shadow-lg transition-colors duration-300">
          🎯 מומחה לנוכחות דיגיטלית | בונים נכסים שמייצרים הכנסות
        </p>

        {/* Feature List - Text Only (No Button Styling) - Moved Below Buttons */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {quickServices.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-gray-200 select-none transition-colors duration-300"
            >
              <span className="text-2xl md:text-3xl filter drop-shadow-lg">{item.icon}</span>
              <span className="text-base md:text-lg font-medium tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#services"
        onClick={(e) => handleScroll(e, '#services')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 hidden md:block z-30 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;