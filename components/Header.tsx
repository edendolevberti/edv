import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'בית', href: '#hero' },
    { name: 'שירותים', href: '#services' },
    { name: 'תיק עבודות', href: '#gallery' },
    { name: 'מי אני', href: '#about' },
    { name: 'המלצות', href: '#testimonials' },
    { name: 'צור קשר', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-2 shadow-lg shadow-slate-200/50 dark:shadow-purple-900/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className={`font-bold transition-all duration-300 z-50 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
            <a 
              href="#hero" 
              onClick={(e) => handleScroll(e, '#hero')}
              className="flex items-center gap-2"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-emerald-600 dark:from-pink-500 dark:via-purple-500 dark:to-emerald-500 font-black tracking-tighter">
                EDEN DOLEV
              </span>
              <span className={`text-slate-700 dark:text-white text-xs sm:text-sm font-light tracking-widest hidden sm:block ${isScrolled ? 'opacity-0 w-0' : 'opacity-100 transition-opacity duration-500'}`}>
                 - DIGITAL PRESENCE EXPERT
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white relative group text-sm font-medium transition-colors font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block ml-4">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className={`px-6 py-2 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isScrolled
                  ? 'text-sm'
                  : 'shadow-emerald-600/30'
              }`}
            >
              בואו נתחיל
            </a>
          </div>

          {/* Mobile Controls */}
          <div className={`flex items-center gap-4 md:hidden ${isMobileMenuOpen ? 'relative z-[80]' : 'z-50'}`}>
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-100/50 dark:bg-slate-800/50 text-slate-800 dark:text-yellow-400 backdrop-blur-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-slate-800 dark:text-white flex items-center gap-2 group focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isMobileMenuOpen ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-gray-200 group-hover:text-blue-500'}`}>
                {isMobileMenuOpen ? 'סגור' : 'תפריט'}
              </span>
              <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer - Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/20 dark:bg-slate-900/80 backdrop-blur-sm z-[60] transition-opacity duration-700 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer - Panel */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[70%] bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-[70] shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 mt-20 flex-grow">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-2xl font-bold text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:pl-2 transition-all duration-500 flex items-center gap-3 group ${
                  isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={(e) => handleScroll(e, link.href)}
              >
                <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 text-blue-500">
                  <ArrowRight size={20} />
                </span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Menu Footer */}
        <div className="p-8 border-t border-slate-200 dark:border-slate-800">
           <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="block w-full text-center px-6 py-3 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg"
          >
            בואו נתחיל
          </a>
          <p className="text-center text-slate-500 text-xs mt-4 uppercase">Eden Dolev - Digital Presence Expert</p>
        </div>
      </div>
    </>
  );
};

export default Header;