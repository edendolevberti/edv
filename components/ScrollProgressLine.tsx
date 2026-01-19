import React, { useEffect, useRef } from 'react';

const ScrollProgressLine: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for geometry calculation (Attached to the background path)
  const mobilePathRef = useRef<SVGPathElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  
  // Refs for the arrow ELEMENTS
  const mobileArrowRef = useRef<HTMLDivElement>(null);
  const desktopArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateAnimation = () => {
      if (!containerRef.current) return;
      
      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      
      const startScroll = elementTop - windowHeight * 0.7; 
      const endScroll = (elementTop + elementHeight) - windowHeight * 0.8;
      
      const distance = endScroll - startScroll;
      const current = window.scrollY - startScroll;
      
      let progress = current / distance;
      
      // Clamp progress between 0 and 1
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // Helper function to update arrow position
      const updateArrow = (
        path: SVGPathElement | null, 
        arrow: HTMLDivElement | null
      ) => {
        if (!path || !arrow) return;

        try {
          const len = path.getTotalLength();
          // Get point at current progress
          const point = path.getPointAtLength(len * progress);
          
          const lookDist = 1; 
          
          let p1 = point;
          let p2;

          if (len * progress < lookDist) {
             p2 = path.getPointAtLength(Math.min(len, len * progress + lookDist));
          } else {
             p2 = path.getPointAtLength(len * progress - lookDist);
             const temp = p1;
             p1 = p2;
             p2 = temp;
          }

          // Convert to pixels for correct angle calculation
          const scaleX = rect.width / 100;
          const scaleY = rect.height / 100;

          const p1Px = { x: p1.x * scaleX, y: p1.y * scaleY };
          const p2Px = { x: p2.x * scaleX, y: p2.y * scaleY };

          const angle = Math.atan2(p2Px.y - p1Px.y, p2Px.x - p1Px.x) * (180 / Math.PI);

          // Apply styles
          arrow.style.left = `${point.x}%`;
          arrow.style.top = `${point.y}%`;
          arrow.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          arrow.style.opacity = progress <= 0.01 || progress >= 0.99 ? '0' : '1';

        } catch (e) {
          // Fallback
        }
      };

      if (window.innerWidth < 1024) {
          updateArrow(mobilePathRef.current, mobileArrowRef.current);
      } else {
          updateArrow(desktopPathRef.current, desktopArrowRef.current);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateAnimation);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateAnimation);
    
    // Initial call
    updateAnimation();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateAnimation);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Background SVG - Stretched Path */}
      <svg 
        className="w-full h-full" 
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <filter id="headGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- MOBILE PATH (High density waves for 4 sections) --- */}
        <path 
          ref={mobilePathRef}
          className="lg:hidden"
          d="M 50 0 C 10 5, 10 6, 50 11 S 90 17, 50 22 S 10 28, 50 33 S 90 39, 50 44 S 10 50, 50 55 S 90 61, 50 66 S 10 72, 50 77 S 90 83, 50 88 S 10 94, 50 100"
          fill="none"
          stroke="#475569" 
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        />

        {/* --- DESKTOP PATH (High density waves for 4 sections) --- */}
        <path 
          ref={desktopPathRef}
          className="hidden lg:block"
          d="M 50 0 C 5 5, 5 6, 50 11 S 95 17, 50 22 S 5 28, 50 33 S 95 39, 50 44 S 5 50, 50 55 S 95 61, 50 66 S 5 72, 50 77 S 95 83, 50 88 S 5 94, 50 100"
          fill="none"
          stroke="#475569" 
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        />
      </svg>

      {/* --- MOBILE ARROW --- */}
      <div 
        ref={mobileArrowRef}
        className="absolute w-10 h-10 z-10 lg:hidden will-change-transform opacity-0 transition-opacity duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full filter drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
           <path d="M6 12L18 12M18 12L11 5M18 12L11 19" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* --- DESKTOP ARROW --- */}
      <div 
        ref={desktopArrowRef}
        className="absolute w-16 h-16 z-10 hidden lg:block will-change-transform opacity-0 transition-opacity duration-300"
      >
         <svg viewBox="0 0 24 24" className="w-full h-full filter drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]">
            <path d="M2 12L22 12" stroke="#ec4899" strokeWidth="1" strokeOpacity="0.8" />
            <path d="M12 4L22 12L12 20" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(236, 72, 153, 0.2)" />
            <circle cx="22" cy="12" r="2.5" fill="#ec4899" />
            <path d="M5 9L2 12L5 15" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
         </svg>
      </div>

    </div>
  );
};

export default ScrollProgressLine;