import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: 'קצת עלי', href: '#about' },
    { name: 'ביקורות', href: '#testimonials' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-slate-900/90 backdrop-blur-md py-2 shadow-lg shadow-purple-900/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className={`font-bold transition-all duration-300 z-50 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
            <a href="#hero" className="flex items-center gap-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black tracking-tighter">
                EDV
              </span>
              <span className={`text-white text-sm font-light tracking-widest hidden sm:block ${isScrolled ? 'opacity-0 w-0' : 'opacity-100 transition-opacity duration-500'}`}>
                EDEN DOLEV VIDEO
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white relative group text-sm font-medium transition-colors font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className={`px-6 py-2 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg animate-gradient ${
                isScrolled
                  ? 'text-sm'
                  : 'hover:shadow-purple-500/50'
              }`}
            >
              בואו נדבר
            </a>
          </div>

          {/* Mobile Menu Button with Aesthetic Text */}
          <button
            className="md:hidden text-white flex items-center gap-2 group z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isMobileMenuOpen ? 'text-white' : 'text-gray-200 group-hover:text-pink-400'}`}>
              תפריט
            </span>
            <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer - Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[60] transition-opacity duration-700 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer - Panel */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[70%] bg-slate-900 border-r border-slate-800 z-[70] shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 mt-20 flex-grow">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-2xl font-bold text-gray-300 hover:text-white hover:pl-2 transition-all duration-500 flex items-center gap-3 group ${
                  isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 text-pink-500">
                  <ArrowRight size={20} />
                </span>
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Menu Footer */}
        <div className="p-8 border-t border-slate-800">
           <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-3 rounded-full font-bold text-white animate-gradient shadow-lg"
          >
            בואו נדבר
          </a>
          <p className="text-center text-slate-500 text-xs mt-4">EDEN DOLEV VIDEO</p>
        </div>
      </div>
    </>
  );
};

export default Header;