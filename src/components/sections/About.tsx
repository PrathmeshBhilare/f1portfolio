'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-bg-primary text-text-primary px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 border-b border-line pb-4 overflow-hidden">
          <h2 className="font-display text-2xl md:text-3xl text-accent uppercase tracking-widest font-semibold">
            02 / Driver Profile
          </h2>
        </div>

        <div ref={cardRef} className="group/card relative bg-bg-secondary border border-line flex flex-col md:flex-row opacity-0 transform-gpu overflow-hidden transition-all duration-700 hover:border-accent hover:shadow-[0_0_30px_rgba(255,78,0,0.15)]">
          
          {/* Subtle Orange Glow Background on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
          
          {/* Card Scanlines Overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }} />

          {/* Photo Side */}
          <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto bg-[#1A1A1E] relative border-b md:border-b-0 md:border-r border-line flex items-center justify-center overflow-hidden group/image z-10">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src="/profile.jpeg" alt="Prathamesh Bhilare" className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 group-hover/image:scale-105 group-hover/image:grayscale-[50%]" />
             
             {/* Hover Telemetry Overlay */}
             <div className="absolute inset-0 bg-bg-primary/60 z-20 flex flex-col justify-end p-6 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none backdrop-blur-[2px]">
               <div className="font-mono text-xs text-accent-secondary flex flex-col gap-2">
                 <div className="flex justify-between border-b border-accent-secondary/30 pb-1"><span>SYS.STATUS</span><span>[ OK ]</span></div>
                 <div className="flex justify-between border-b border-accent-secondary/30 pb-1"><span>ENG.TEMP</span><span>[ 94°C ]</span></div>
                 <div className="flex justify-between border-b border-accent-secondary/30 pb-1"><span>AERO.BAL</span><span>[ OPTIMAL ]</span></div>
                 <div className="flex justify-between pb-1 text-accent"><span>RPM.MAX</span><span>[ 12,500 ]</span></div>
               </div>
             </div>
             
             {/* HUD Placeholder / Overlay */}
             <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
               {/* Corner Brackets */}
               <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-accent opacity-50 transition-all duration-500 group-hover/image:w-8 group-hover/image:h-8 group-hover/image:opacity-100" />
               <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-accent opacity-50 transition-all duration-500 group-hover/image:w-8 group-hover/image:h-8 group-hover/image:opacity-100" />
               <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-accent opacity-50 transition-all duration-500 group-hover/image:w-8 group-hover/image:h-8 group-hover/image:opacity-100" />
               <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-accent opacity-50 transition-all duration-500 group-hover/image:w-8 group-hover/image:h-8 group-hover/image:opacity-100" />

               {/* Scanline Animation */}
               <motion.div 
                 animate={{ y: ['-100%', '1000%'] }} 
                 transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} 
                 className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
               />
             </div>
          </div>

          {/* Stats & Bio Side */}
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-display text-3xl font-bold uppercase tracking-tight">PRATHMESH BHILARE</h3>
                <div className="h-px bg-line flex-grow"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 mb-10">
                <div className="flex flex-col">
                  <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-2 border-l-2 border-line pl-2">Driver</span>
                  <span className="font-display text-sm text-text-primary uppercase pl-2">Prathmesh Bhilare</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-2 border-l-2 border-line pl-2">Nationality</span>
                  <span className="font-display text-sm text-text-primary uppercase pl-2">India</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-2 border-l-2 border-line pl-2">Current Base</span>
                  <span className="font-display text-sm text-text-primary uppercase pl-2">Maharashtra</span>
                </div>
                <div className="flex flex-col md:col-span-1">
                  <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-2 border-l-2 border-line pl-2">Experience</span>
                  <span className="font-display text-sm text-text-primary uppercase pl-2">3 Years / 20+ Proj</span>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-2">
                  <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-2 border-l-2 border-line pl-2">Role</span>
                  <span className="font-display text-sm text-text-primary uppercase pl-2">Freelance Full Stack Developer</span>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-3">
                  <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-2 border-l-2 border-line pl-2">Mission</span>
                  <span className="font-display text-sm text-text-primary uppercase pl-2">Building Premium Digital Products</span>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-3">
                  <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-2 border-l-2 border-accent pl-2">Status</span>
                  <span className="font-display text-sm text-accent-secondary uppercase pl-2 font-semibold">AVAILABLE FOR NEW PROJECTS</span>
                </div>
              </div>
            </div>

            <div className="font-sans text-text-muted text-base leading-relaxed mb-10 border-l-2 border-accent pl-6 py-2">
              <p className="mb-4 text-text-primary font-medium italic">&quot;Building websites with the precision of an F1 pit crew.&quot;</p>
              <p className="mb-4">Every interface is engineered for speed, reliability and performance.</p>
              <p>Specializing in premium websites, AI automation and modern web applications.</p>
            </div>

            <div className="flex items-center justify-end gap-6 border-t border-line pt-6 mt-auto">
              <a 
                href="https://github.com/PrathmeshBhilare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-accent transition-all duration-300 group active:scale-95"
              >
                <span className="font-display text-xs tracking-widest uppercase">Github</span>
                <div className="w-10 h-10 border border-line flex items-center justify-center group-hover:border-accent relative overflow-hidden" style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
                  <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out z-0" />
                  <svg className="relative z-10 group-hover:text-bg-primary transition-colors duration-200 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/prathmesh-bhilare-a81159253/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-accent transition-all duration-300 group active:scale-95"
              >
                <span className="font-display text-xs tracking-widest uppercase">LinkedIn</span>
                <div className="w-10 h-10 border border-line flex items-center justify-center group-hover:border-accent relative overflow-hidden" style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
                  <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out z-0" />
                  <svg className="relative z-10 group-hover:text-bg-primary transition-colors duration-200 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
              </a>
              <a 
                href="https://www.instagram.com/prathmesh.py?igsh=MWJrM2psY3hqNXBwbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-muted hover:text-accent transition-all duration-300 group active:scale-95"
              >
                <span className="font-display text-xs tracking-widest uppercase">Instagram</span>
                <div className="w-10 h-10 border border-line flex items-center justify-center group-hover:border-accent relative overflow-hidden" style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
                  <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out z-0" />
                  <svg className="relative z-10 group-hover:text-bg-primary transition-colors duration-200 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
