import React, { useEffect, useRef } from 'react';

const ScrollProgressLine: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Refs for geometry calculation (Attached to the background path)
  const mobilePathRef = useRef<SVGPathElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  
  // Refs for the arrow ELEMENTS (Divs now, to avoid distortion)
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
          // Get point at current progress (SVG Coordinates 0..100)
          const point = path.getPointAtLength(len * progress);
          
          // Calculate rotation based on Screen Pixels to avoid distortion
          // We need two points close to each other
          const lookDist = 1; // 1 unit in SVG space
          
          let p1 = point;
          let p2;

          // Handle lookahead/lookbehind for tangent
          if (len * progress < lookDist) {
             p2 = path.getPointAtLength(Math.min(len, len * progress + lookDist));
          } else {
             p2 = path.getPointAtLength(len * progress - lookDist);
             // Swap so we always calculate p1 -> p2 direction (tangent)
             const temp = p1;
             p1 = p2;
             p2 = temp;
          }

          // Convert to pixels for correct angle calculation
          // This fixes the distortion issue where the arrow angle was wrong on stretched SVGs
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

      // Update Arrows
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

        {/* --- MOBILE PATH --- */}
        <path 
          ref={mobilePathRef}
          className="lg:hidden"
          d="M 50 0 C 20 5, 20 10, 50 15 S 80 25, 50 30 S 20 40, 50 45 S 80 55, 50 60 S 20 70, 50 75 S 80 85, 50 90 S 20 100, 50 100"
          fill="none"
          stroke="#1e293b"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* --- DESKTOP PATH (WIDER) --- */}
        {/* Widened amplitude to 5% and 95% to span across project cards */}
        <path 
          ref={desktopPathRef}
          className="hidden lg:block"
          d="M 50 0 C 5 10, 5 20, 50 25 S 95 40, 50 50 S 5 70, 50 75 S 95 90, 50 100"
          fill="none"
          stroke="#1e293b"
          strokeWidth="0.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* --- MOBILE ARROW (DOM Element) --- */}
      <div 
        ref={mobileArrowRef}
        className="absolute w-8 h-8 z-10 lg:hidden will-change-transform opacity-0 transition-opacity duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full filter drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
           {/* Simple Right-Pointing Arrow Head */}
           <path d="M5 12L19 12M19 12L12 5M19 12L12 19" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* --- DESKTOP ARROW (DOM Element) --- */}
      <div 
        ref={desktopArrowRef}
        className="absolute w-10 h-10 z-10 hidden lg:block will-change-transform opacity-0 transition-opacity duration-300"
      >
         {/* Sci-fi Style Arrow Head pointing Right */}
         <svg viewBox="0 0 24 24" className="w-full h-full filter drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
            <path d="M4 12L20 12" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M12 4L20 12L12 20" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="20" cy="12" r="2" fill="#ec4899" />
         </svg>
      </div>

    </div>
  );
};

export default ScrollProgressLine;