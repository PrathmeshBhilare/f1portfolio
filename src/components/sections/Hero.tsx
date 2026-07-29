'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  startAnimation: boolean;
}

export default function Hero({ startAnimation }: HeroProps) {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-bg-primary flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.webm" type="video/webm" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,11,0.9)] to-[rgba(10,10,11,0.2)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.2em] text-text-primary"
        >
          PRATHMESH BHILARE
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-text-muted font-display font-medium text-xl md:text-2xl tracking-[0.15em] uppercase"
        >
          FREELANCE FULL-STACK DEV // AI/ML ENGINEER
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: startAnimation ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-12"
        >
          <a
            href="#projects"
            className="inline-block group relative overflow-hidden px-8 py-4 border border-accent text-accent uppercase font-display font-semibold tracking-widest text-sm transition-transform active:scale-95"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-200">
              View Projects
            </span>
            <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: startAnimation ? 0.7 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-display">Scroll</span>
        <ChevronDown size={24} className="text-text-primary" />
      </motion.div>
    </section>
  );
}
