// components/SmoothScroller.js - Updated for React 19 compatibility
'use client';

import { useEffect } from 'react';

export default function SmoothScroller({ children }) {
  useEffect(() => {
    // Dynamically import Lenis to avoid SSR issues
    const initSmoothScroll = async () => {
      const Lenis = (await import('lenis')).default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: true,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    initSmoothScroll();
  }, []);

  return <>{children}</>;
}