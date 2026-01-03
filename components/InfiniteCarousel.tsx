import React from 'react';
import { CAROUSEL_IMAGES } from '../constants';

const InfiniteCarousel: React.FC = () => {
  // We need enough copies to fill the screen + 1 full scroll cycle. 
  // 3 copies of 7 images = 21 images. This is safe for almost all screen sizes.
  const allImages = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <div className="w-full bg-slate-900/50 backdrop-blur-sm border-t border-b border-slate-800 py-4 md:py-6 overflow-hidden relative z-10" dir="ltr">
      {/* 
        Container uses w-max to ensure it doesn't wrap. 
        Gap-4 (1rem/16px) is critical for the calculation in index.html 
      */}
      <div className="flex gap-4 animate-scroll px-4">
        {allImages.map((src, index) => (
          <div 
            key={index} 
            className="relative w-[200px] md:w-[250px] h-[120px] md:h-[150px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 border border-slate-700"
          >
            <img 
              src={src} 
              alt={`Work sample ${index}`} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;