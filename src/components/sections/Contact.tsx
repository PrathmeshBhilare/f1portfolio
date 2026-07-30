'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const GithubIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsappIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!terminalRef.current) return;
    
    gsap.fromTo(terminalRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-bg-primary text-text-primary px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-line pb-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display text-2xl md:text-3xl text-accent uppercase tracking-widest font-semibold">
            05 / Pit Stop
          </h2>
          <p className="font-display text-xs text-text-muted uppercase tracking-widest">
            Comms Channel Open
          </p>
        </div>

        <div ref={terminalRef} className="bg-[#0A0A0C] border border-line p-6 md:p-12 font-mono relative overflow-hidden group shadow-2xl opacity-0 transform-gpu hover:border-accent/50 transition-colors duration-500">
          
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }} />

          {/* Terminal Header */}
          <div className="flex justify-between items-center mb-8 md:mb-12 border-b border-line/30 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-line/50"></div>
              <div className="w-3 h-3 rounded-full bg-line/50"></div>
              <div className="w-3 h-3 rounded-full bg-line/50"></div>
            </div>
            <div className="text-[10px] text-text-muted uppercase tracking-widest">
              Term_v2.0.4
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="text-text-muted text-xs md:text-sm mb-12 space-y-2 relative z-10">
            <p className="flex items-center gap-2"><span className="text-accent">&gt;</span> INITIATING SECURE CONNECTION...</p>
            <p className="flex items-center gap-2"><span className="text-accent">&gt;</span> ESTABLISHING HANDSHAKE...</p>
            <p className="flex items-center gap-2"><span className="text-accent">&gt;</span> STATUS: <span className="text-accent-secondary animate-pulse">ONLINE</span></p>
            <p className="flex items-center gap-2"><span className="text-accent">&gt;</span> AWAITING TRANSMISSION<span className="animate-ping inline-block w-2 h-4 bg-accent ml-1 translate-y-1"></span></p>
          </div>
          
          <div className="relative z-10 mb-16 md:mb-24 group/email inline-block w-full overflow-hidden">
            <p className="text-xs text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
              <Mail size={14} className="text-accent" /> Direct Link
            </p>
            <a href="mailto:prathmeshbhilare52@gmail.com" className="block font-display text-[15px] sm:text-xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-text-primary transition-all duration-500 hover:text-accent active:scale-95 relative truncate">
              prathmeshbhilare52@gmail.com
              <div className="h-1 w-0 bg-accent transition-all duration-500 group-hover/email:w-full mt-2" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 border-t border-line/30 pt-8">
            <a href="https://github.com/PrathmeshBhilare" target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-between p-4 bg-bg-primary/30 border border-line hover:border-accent transition-all duration-300 active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <GithubIcon size={20} className="text-text-muted group-hover/link:text-text-primary transition-colors" />
                <span className="font-display text-sm uppercase tracking-widest text-text-primary">GitHub</span>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover/link:text-accent transform group-hover/link:translate-x-1 transition-all" />
            </a>

            <a href="https://www.linkedin.com/in/prathmesh-bhilare-a81159253/" target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-between p-4 bg-bg-primary/30 border border-line hover:border-accent transition-all duration-300 active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <LinkedinIcon size={20} className="text-text-muted group-hover/link:text-text-primary transition-colors" />
                <span className="font-display text-sm uppercase tracking-widest text-text-primary">LinkedIn</span>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover/link:text-accent transform group-hover/link:translate-x-1 transition-all" />
            </a>

            <a href="https://x.com/BTCxknight" target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-between p-4 bg-bg-primary/30 border border-line hover:border-accent transition-all duration-300 active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <TwitterIcon size={20} className="text-text-muted group-hover/link:text-text-primary transition-colors" />
                <span className="font-display text-sm uppercase tracking-widest text-text-primary">X (Twitter)</span>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover/link:text-accent transform group-hover/link:translate-x-1 transition-all" />
            </a>

            <a href="https://wa.me/919022536817" target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-between p-4 bg-bg-primary/30 border border-line hover:border-accent transition-all duration-300 active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <WhatsappIcon size={20} className="text-text-muted group-hover/link:text-text-primary transition-colors" />
                <div className="grid overflow-hidden">
                  <span className="font-display text-sm uppercase tracking-widest text-text-primary col-start-1 row-start-1 transition-transform duration-300 group-hover/link:-translate-y-full">WhatsApp</span>
                  <span className="font-display text-sm uppercase tracking-widest text-accent col-start-1 row-start-1 translate-y-full transition-transform duration-300 group-hover/link:translate-y-0 whitespace-nowrap">+91 9022536817</span>
                </div>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover/link:text-accent transform group-hover/link:translate-x-1 transition-all" />
            </a>

            <a href="https://www.instagram.com/prathmesh.py?igsh=MWJrM2psY3hqNXBwbQ==" target="_blank" rel="noopener noreferrer" className="group/link flex items-center justify-between p-4 bg-bg-primary/30 border border-line hover:border-accent transition-all duration-300 active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <InstagramIcon size={20} className="text-text-muted group-hover/link:text-text-primary transition-colors" />
                <span className="font-display text-sm uppercase tracking-widest text-text-primary">Instagram</span>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover/link:text-accent transform group-hover/link:translate-x-1 transition-all" />
            </a>
          </div>

          <div className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 text-[120px] md:text-[200px] font-display font-bold text-line/10 md:text-line/10 opacity-30 md:opacity-100 pointer-events-none select-none z-0">
            05
          </div>
        </div>
      </div>
    </section>
  );
}
