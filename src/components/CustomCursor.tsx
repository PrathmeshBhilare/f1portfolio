'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Fallback to native cursor on touch devices
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // GSAP quickTo is heavily optimized for requestAnimationFrame and perfectly syncs with monitor refresh rates
    // A duration of 0.15 with power3.out provides a buttery smooth, premium trailing effect with ZERO jitter
    const xMoveCursor = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yMoveCursor = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xMoveCursor(e.clientX);
      yMoveCursor(e.clientY);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}} />
      <div 
        ref={cursorRef}
        // Minimal, 10px solid circle, pure orange, no shadows, blur or borders.
        className={`fixed top-0 left-0 w-[10px] h-[10px] bg-[#FF5A00] rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}

