'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, UserCheck, Clock, Zap, Target, LayoutTemplate, Box, Cpu, Layers } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Utility component for GSAP counter animation
const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    
    gsap.fromTo(nodeRef.current, 
      { innerText: 0 }, 
      { 
        innerText: value, 
        duration: 2, 
        ease: 'power3.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: nodeRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [value]);

  return (
    <span className="font-display font-bold text-4xl md:text-5xl tracking-tight text-text-primary">
      {prefix}<span ref={nodeRef}>0</span>{suffix}
    </span>
  );
};

export default function PitWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      if (!card) return;
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: idx * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  const CardWrapper = ({ children, idx, className = '' }: { children: React.ReactNode, idx: number, className?: string }) => (
    <div 
      ref={el => { cardsRef.current[idx] = el; }}
      className={`group relative bg-bg-secondary border border-line p-6 overflow-hidden transform-gpu transition-colors duration-500 hover:border-accent ${className}`}
    >
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );

  return (
    <section id="pitwall" ref={sectionRef} className="py-24 md:py-32 bg-bg-primary text-text-primary px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 border-b border-line pb-4 overflow-hidden">
          <h2 className="font-display text-2xl md:text-3xl text-accent uppercase tracking-widest font-semibold">
            04 / Pit Wall
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Main Counters */}
          <CardWrapper idx={0}>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 size={18} className="text-accent" />
              <h4 className="font-display text-xs text-text-muted uppercase tracking-widest">Completed Projects</h4>
            </div>
            <div className="mt-auto">
              <AnimatedCounter value={6} />
            </div>
          </CardWrapper>

          <CardWrapper idx={1}>
            <div className="flex items-center gap-3 mb-6">
              <UserCheck size={18} className="text-accent" />
              <h4 className="font-display text-xs text-text-muted uppercase tracking-widest">Ready Prototypes</h4>
            </div>
            <div className="mt-auto">
              <AnimatedCounter value={4} />
            </div>
          </CardWrapper>

          {/* Current Status (Spans 2 cols on lg) */}
          <CardWrapper idx={2} className="lg:col-span-2 bg-[#1A1A1E]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end h-full gap-6">
              <div>
                <h4 className="font-display text-xs text-text-muted uppercase tracking-widest mb-2 border-l-2 border-accent pl-2">Current Status</h4>
                <div className="text-2xl md:text-3xl font-display font-bold uppercase text-accent-secondary">
                  Open for Freelance
                </div>
                <p className="font-sans text-sm text-text-muted mt-2 max-w-sm">
                  Currently accepting new projects for Q3/Q4. Looking for ambitious teams building high-performance web applications.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-secondary"></span>
                </span>
                <span className="font-display text-xs uppercase tracking-widest text-accent-secondary">Online</span>
              </div>
            </div>
          </CardWrapper>

          {/* Development Style */}
          <CardWrapper idx={3} className="lg:col-span-2">
            <h4 className="font-display text-xs text-text-muted uppercase tracking-widest mb-6 border-b border-line pb-2">Development Style</h4>
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="flex items-center gap-3 p-3 border border-line bg-bg-primary/50 group-hover:border-accent/30 transition-colors">
                <Zap size={16} className="text-accent" />
                <span className="font-display text-sm uppercase tracking-wider">Fast</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-line bg-bg-primary/50 group-hover:border-accent/30 transition-colors">
                <Layers size={16} className="text-accent" />
                <span className="font-display text-sm uppercase tracking-wider">Scalable</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-line bg-bg-primary/50 group-hover:border-accent/30 transition-colors">
                <LayoutTemplate size={16} className="text-accent" />
                <span className="font-display text-sm uppercase tracking-wider">Animated</span>
              </div>
              <div className="flex items-center gap-3 p-3 border border-line bg-bg-primary/50 group-hover:border-accent/30 transition-colors">
                <Cpu size={16} className="text-accent" />
                <span className="font-display text-sm uppercase tracking-wider">AI Powered</span>
              </div>
            </div>
          </CardWrapper>

          {/* Average Delivery */}
          <CardWrapper idx={4}>
            <div className="flex items-center gap-3 mb-6">
              <Target size={18} className="text-accent" />
              <h4 className="font-display text-xs text-text-muted uppercase tracking-widest">Avg Delivery</h4>
            </div>
            <div className="mt-auto">
              <div className="font-display font-bold text-3xl md:text-4xl tracking-tight text-text-primary">
                3-7 <span className="text-lg text-text-muted">Days</span>
              </div>
            </div>
          </CardWrapper>

          {/* Response Time */}
          <CardWrapper idx={5}>
            <div className="flex items-center gap-3 mb-6">
              <Clock size={18} className="text-accent" />
              <h4 className="font-display text-xs text-text-muted uppercase tracking-widest">Response Time</h4>
            </div>
            <div className="mt-auto">
              <div className="font-display font-bold text-3xl md:text-4xl tracking-tight text-text-primary">
                &lt;12 <span className="text-lg text-text-muted">Hours</span>
              </div>
            </div>
          </CardWrapper>

          {/* Primary Stack */}
          <CardWrapper idx={6} className="lg:col-span-2">
            <h4 className="font-display text-xs text-text-muted uppercase tracking-widest mb-6 border-b border-line pb-2">Primary Stack</h4>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Firebase', 'Supabase', 'TailwindCSS', 'GSAP'].map((tech) => (
                <div key={tech} className="px-4 py-2 border border-line bg-bg-primary font-mono text-xs uppercase tracking-widest text-text-primary group-hover:border-accent/50 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </CardWrapper>

          {/* Deployment Platforms */}
          <CardWrapper idx={7} className="lg:col-span-2">
            <h4 className="font-display text-xs text-text-muted uppercase tracking-widest mb-6 border-b border-line pb-2">Deployment Platforms</h4>
            <div className="flex flex-wrap gap-4">
              {['Vercel', 'Cloudflare', 'Firebase', 'AWS', 'Supabase'].map((platform) => (
                <div key={platform} className="flex items-center gap-2 font-display text-sm text-text-primary uppercase tracking-widest">
                  <Box size={14} className="text-accent-secondary" />
                  {platform}
                </div>
              ))}
            </div>
          </CardWrapper>

        </div>
      </div>
    </section>
  );
}
