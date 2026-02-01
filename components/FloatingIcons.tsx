import React from 'react';

const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Instagram - Top Right */}
      <div className="absolute top-20 -right-4 md:top-[15%] md:right-[15%] animate-float">
        <img 
          src="https://i.postimg.cc/mD4NT0N2/Instagram.webp" 
          alt="CapCut"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-2xl rotate-12"
        />
      </div>

      {/* TikTok - Top Left (Using standard App Icon style with black background) */}
      <div className="absolute top-24 -left-4 md:top-[20%] md:left-[15%] animate-float-delayed">
         <img 
          src="https://i.postimg.cc/XJWcnTcj/Tik_Tok.webp" 
          alt="ecommerce"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)] -rotate-12 rounded-full"
        />
      </div>

      {/* Facebook - Moved towards middle for desktop */}
      <div className="absolute top-[55%] -right-2 md:top-[45%] md:right-[20%] animate-float-slow">
        <img 
          src="https://i.postimg.cc/YSYzKpgL/Facebook.webp" 
          alt="Elementor"
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-2xl rotate-6"
        />
      </div>

      {/* Google - Moved towards middle for desktop */}
      <div className="absolute top-[62%] -left-2 md:top-[55%] md:left-[20%] animate-float">
        <img 
          src="https://i.postimg.cc/QM1JGX5W/Google.webp" 
          alt="Google"
          className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 opacity-70 hover:opacity-100 transition-opacity duration-300 drop-shadow-2xl -rotate-6 bg-white rounded-full"
        />
      </div>
    </div>
  );
};

export default FloatingIcons;