'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useAudio } from '@/context/AudioContext';

interface GridStartProps {
  onComplete: () => void;
}

export default function GridStart({ onComplete }: GridStartProps) {
  const [started, setStarted] = useState(false);
  const startedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lightsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { playAudio } = useAudio();

  const handleStart = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    setStarted(true);
    playAudio();

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
             if (containerRef.current) {
               containerRef.current.style.display = 'none';
             }
             onComplete();
          }
        });
      }
    });

    // Illuminate lights one by one
    lightsRef.current.forEach((light, i) => {
      tl.to(light, {
        backgroundColor: '#FF0000',
        boxShadow: '0 0 20px #FF0000',
        duration: 0.1,
      }, i * 0.15);
    });

    // Wait a brief moment
    tl.to({}, { duration: 0.4 });

    // Lights out
    tl.to(lightsRef.current, {
      backgroundColor: 'var(--bg-secondary)',
      boxShadow: 'none',
      duration: 0.1,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleStart();
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary"
    >
      <div className="flex gap-4 mb-12">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            ref={(el) => {
              lightsRef.current[i] = el;
            }}
            className="w-12 h-12 rounded-full bg-bg-secondary border border-line"
          />
        ))}
      </div>
      
      {!started && (
        <button
          onClick={handleStart}
          className="group relative overflow-hidden px-8 py-4 border border-accent text-accent uppercase font-display font-semibold tracking-widest text-sm transition-transform active:scale-95"
          style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
        >
          <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-200">
            Start Engine
          </span>
          <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out" />
        </button>
      )}
    </div>
  );
}
