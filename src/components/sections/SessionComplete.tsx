'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flag, Activity, Terminal, ShieldCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SessionComplete() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !flagRef.current) return;

    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(flagRef.current,
      { rotateX: 90, opacity: 0 },
      {
        rotateX: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <footer id="sessioncomplete" ref={sectionRef} className="py-24 bg-bg-primary text-text-primary px-4 border-t border-line relative overflow-hidden">
      
      {/* Checkered background accent */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'conic-gradient(var(--text-primary) 90deg, transparent 90deg 180deg, var(--text-primary) 180deg 270deg, transparent 270deg 360deg)', backgroundSize: '60px 60px' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4" ref={flagRef} style={{ perspective: '1000px' }}>
            <div className="w-16 h-16 bg-accent flex items-center justify-center rounded-sm transform -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-[0_0_20px_rgba(255,78,0,0.3)]">
              <Flag size={32} className="text-bg-primary fill-current" />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter text-text-primary">
                Session Complete
              </h2>
              <p className="font-display text-sm text-text-muted uppercase tracking-widest mt-2">
                All systems nominal. Ready to deploy.
              </p>
            </div>
          </div>

          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex flex-col items-center gap-2">
            <div className="w-12 h-12 border border-line rounded-full flex items-center justify-center group-hover:border-accent transition-colors duration-300">
              <svg className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <span className="font-display text-[10px] uppercase tracking-widest text-text-muted group-hover:text-text-primary transition-colors">Return to Grid</span>
          </button>
          
        </div>

        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-line/50">
          
          {/* Tech Footprint */}
          <div>
            <h3 className="font-display text-sm text-text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <Terminal size={16} className="text-accent" /> System Stack
            </h3>
            <ul className="space-y-3 font-mono text-xs text-text-muted">
              <li>&gt; Built with Next.js 14</li>
              <li>&gt; React Server Components</li>
              <li>&gt; Framer Motion & GSAP Anim</li>
              <li>&gt; TailwindCSS Utility Layer</li>
              <li>&gt; Deployed on Vercel Edge</li>
            </ul>
          </div>

          {/* Telemetry Log */}
          <div>
            <h3 className="font-display text-sm text-text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <Activity size={16} className="text-accent" /> Telemetry Log
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-line/30 pb-2">
                <span className="font-mono text-xs text-text-muted">Performance</span>
                <span className="font-mono text-xs text-accent">99.9%</span>
              </div>
              <div className="flex justify-between items-center border-b border-line/30 pb-2">
                <span className="font-mono text-xs text-text-muted">Accessibility</span>
                <span className="font-mono text-xs text-accent">100%</span>
              </div>
              <div className="flex justify-between items-center border-b border-line/30 pb-2">
                <span className="font-mono text-xs text-text-muted">Best Practices</span>
                <span className="font-mono text-xs text-accent">100%</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="font-mono text-xs text-text-muted">SEO</span>
                <span className="font-mono text-xs text-accent">100%</span>
              </div>
            </div>
          </div>

          {/* Legal / Validation */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-display text-sm text-text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent" /> Clearance
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Design and development by Prathmesh Bhilare. Inspired by the speed, precision, and telemetry of Formula 1.
              </p>
            </div>
            
            <div className="mt-8 font-mono text-[10px] text-text-muted uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Prathmesh Bhilare. All rights reserved. <br/>
              VERSION 2.0 / SPEC: F1-AERO
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
