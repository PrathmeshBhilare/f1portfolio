'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, FileText, Layers, Target, Activity } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const GithubIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const allProjects = [
  {
    id: 1,
    name: 'Premium Hair Salon PWA',
    status: 'LIVE',
    mission: 'A visually striking Progressive Web App designed for high-end salons.',
    role: 'Lead Developer',
    outcome: 'More Bookings & Premium Branding',
    techStack: ['Next.js', 'TailwindCSS', 'Framer Motion', 'PWA'],
    features: [
      'A flawless, high-end visual identity that matches their in-store experience.',
      'A streamlined booking flow that turns casual browsers into confirmed appointments.',
      'Optimized for local search so they appear when people look for salons nearby.'
    ],
    challenges: 'The salon had an outdated digital presence that didn\'t reflect their high-end services, actively losing them premium clients.',
    process: 'Built a visually striking, incredibly fast Progressive Web App (PWA) that immediately communicates luxury and makes booking frictionless.',
    links: { demo: 'https://salon-app-nu-six.vercel.app', github: '#', caseStudy: '#' }
  },
  {
    id: 2,
    name: 'FX Legacy Trading Platform',
    status: 'LIVE',
    mission: 'Premium trading education platform inspired by institutional finance and modern digital experiences.',
    role: 'Full Stack Developer',
    outcome: 'Designed and developed a premium multi-page platform focused on performance, immersive interactions, and scalable content.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Lenis', 'Supabase'],
    features: [
      'Interactive animations',
      'Dynamic articles & course pages',
      'Premium UI & responsive layouts',
      'Community integration'
    ],
    challenges: 'Built a highly animated experience while keeping performance smooth across desktop and mobile devices.',
    process: 'Developed reusable components, optimized animations, and prepared the platform for future CMS-powered content management. Inspired by modern fintech platforms, this project blends premium design with scalable architecture.',
    links: { demo: 'https://fx-legacyy.vercel.app/', github: '#', caseStudy: '#' }
  },
  {
    id: 3,
    name: 'Jagdamb Global Logistics',
    status: 'LIVE',
    mission: 'Premium export business website designed to showcase products, global capabilities, certifications, and international trade services.',
    role: 'Full Stack Developer',
    outcome: 'Built a responsive corporate website that strengthens brand credibility and presents export products for global buyers.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Product Catalog',
      'Global Export Focus',
      'Company Profile',
      'Responsive Design',
      'Contact System',
      'SEO Ready'
    ],
    challenges: 'Designed a professional B2B experience that balances premium visuals with clear product presentation for international buyers.',
    process: 'Developed reusable components, optimized performance, and structured content for scalability and future expansion.',
    links: { demo: 'https://jagdambgloballogistics.vercel.app/', github: '#', caseStudy: '#' }
  },
  {
    id: 4,
    name: 'Lumière Hair Studio Prototype',
    status: 'PROTOTYPE',
    mission: 'An intuitive, high-conversion booking interface tailored exclusively for premium hair studios.',
    role: 'UI/UX Designer & Developer',
    outcome: 'A highly interactive, ready-to-deploy digital storefront and booking system.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    features: [
      'Multi-step booking flow',
      'Stylist portfolio integration',
      'Real-time availability calendar',
      'Mobile-first responsive design'
    ],
    challenges: 'Designing a frictionless multi-step booking experience that feels premium while remaining incredibly simple to navigate on mobile devices.',
    process: 'Mapped out the user journey from discovery to appointment confirmation, focusing on reducing friction and elevating the luxury brand feel.',
    links: { demo: 'https://salon-nexus-prototype.prathmeshbhilare52.workers.dev/', github: '#', caseStudy: '#' }
  },
  {
    id: 5,
    name: 'BeautyBook Prototype',
    status: 'PROTOTYPE',
    mission: 'A premium, all-in-one digital booking experience designed specifically for high-end beauty parlours and spas.',
    role: 'Frontend Developer & UI Designer',
    outcome: 'Delivered a sophisticated, ready-to-scale template tailored for wellness and beauty brands.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Elegant service catalog',
      'Integrated booking system',
      'Visual portfolio gallery',
      'Seamless mobile navigation'
    ],
    challenges: 'Balancing a highly visual, image-rich design with extremely fast loading times and a frictionless user journey.',
    process: 'Employed advanced image optimization and carefully choreographed Framer Motion transitions to create a luxurious feel.',
    links: { demo: 'https://beautybook.prathmeshbhilareml.workers.dev/', github: '#', caseStudy: '#' }
  },
  {
    id: 6,
    name: "Panu's Momos Prototype",
    status: 'PROTOTYPE',
    mission: 'A vibrant, custom digital storefront tailored for a beloved local Momo shop in Pune.',
    role: 'Web Designer & Developer',
    outcome: 'A mouth-watering, mobile-first web experience driving local discovery.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Appetizing digital menu',
      'Vibrant brand storytelling',
      'Seamless mobile experience',
      'Local SEO optimization'
    ],
    challenges: 'Translating the authentic street-food energy into a modern, premium digital experience without losing its local charm.',
    process: 'Prioritized high-quality imagery, warm color palettes, and straightforward navigation to drive foot traffic and online orders.',
    links: { demo: 'https://momo-web.prathmeshbhilare52.workers.dev/', github: '#', caseStudy: '#' }
  },
  {
    id: 7,
    name: 'Chaturthi Pure Veg Prototype',
    status: 'PROTOTYPE',
    mission: 'A custom-designed digital storefront for an authentic, premium pure veg restaurant in Koregaon.',
    role: 'Frontend Developer & UI Designer',
    outcome: 'A delightful digital menu and brand experience highlighting culinary authenticity.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Interactive digital menu',
      'Elegant brand presentation',
      'Seamless mobile responsiveness',
      'Local discovery optimization'
    ],
    challenges: 'Capturing the essence of a traditional pure veg dining experience in a modern, highly interactive web interface.',
    process: 'Developed a rich visual language with appetizing layouts and smooth scroll animations to engage local food enthusiasts.',
    links: { demo: 'https://chaturthi-web.prathmeshbhilare52.workers.dev/', github: '#', caseStudy: '#' }
  }
];

type FilterType = 'ALL' | 'LIVE' | 'PROTOTYPE';
const filters: FilterType[] = ['ALL', 'LIVE', 'PROTOTYPE'];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeFilter, setActiveFilter] = useState<FilterType>('ALL');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState(allProjects);

  // Initial scroll reveal for cards
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, []);

  const handleFilter = (newFilter: FilterType) => {
    if (newFilter === activeFilter) return;
    
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          setActiveFilter(newFilter);
          setVisibleProjects(allProjects.filter(p => newFilter === 'ALL' || p.status === newFilter));
          setExpandedId(null);
          
          gsap.to(gridRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
            clearProps: 'y'
          });
        }
      });
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 bg-bg-primary text-text-primary px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-line pb-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display text-2xl md:text-3xl text-accent uppercase tracking-widest font-semibold">
            03 / The Garage
          </h2>
          
          {/* Filters */}
          <div className="relative flex gap-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilter(filter)}
                className={`pb-2 font-display uppercase tracking-widest text-xs md:text-sm transition-all duration-300 relative active:scale-95 ${activeFilter === filter ? 'text-text-primary' : 'text-text-muted hover:text-text-primary/80'}`}
              >
                {filter}
                {activeFilter === filter && (
                  <motion.div layoutId="activeFilter" className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[400px]">
          {visibleProjects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.div
                key={project.id}
                ref={(el) => { cardsRef.current[idx] = el; }}
                layout
                className={`group/card relative bg-bg-secondary border border-line flex flex-col transform-gpu overflow-hidden transition-all duration-500 cursor-pointer active:scale-[0.98] ${isExpanded ? 'border-accent shadow-[0_0_30px_rgba(255,78,0,0.1)] lg:col-span-2' : 'hover:border-accent/50'}`}
                whileHover={!isExpanded ? { y: -4, boxShadow: '0 10px 30px -10px rgba(255, 78, 0, 0.1)' } : {}}
                transition={{ duration: 0.3 }}
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
              >
                {/* Background moving grid effect on hover */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 78, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 78, 0, 0.5) 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundPosition: 'center center' }} />
                
                {/* Tiny orange accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent transform -translate-x-full group-hover/card:translate-x-0 transition-transform duration-700 ease-out" />

                <div className="p-6 md:p-8 relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div className="flex flex-col items-start gap-3">
                        <div className={`px-2 py-0.5 border text-[10px] font-mono tracking-widest uppercase rounded-sm ${project.status === 'LIVE' ? 'border-accent text-accent bg-accent/10' : 'border-accent-secondary text-accent-secondary bg-accent-secondary/10'}`}>
                          {project.status}
                        </div>
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight group-hover/card:text-accent transition-colors duration-300">{project.name}</h3>
                      </div>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-text-muted self-end md:self-auto p-2 rounded-full border border-line group-hover/card:border-accent/50 group-hover/card:text-accent transition-colors">
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    <p className="font-sans text-text-primary text-base md:text-lg leading-relaxed mb-6 font-medium">
                      {project.mission}
                    </p>

                    {/* Spec Sheet Stats (Always visible) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4 py-4 border-t border-line">
                      <div className="flex flex-col">
                        <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-1 flex items-center gap-1"><Target size={12}/> Role</span>
                        <span className="font-display text-sm text-text-primary uppercase truncate">{project.role}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-display text-[10px] text-text-muted uppercase tracking-widest mb-1 flex items-center gap-1"><Activity size={12}/> Outcome</span>
                        <span className="font-display text-sm text-text-primary uppercase truncate">{project.outcome}</span>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-2 border-t border-line grid grid-cols-1 md:grid-cols-2 gap-8">
                          
                          {/* Left Column: Tech & Features */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-display text-xs text-text-muted uppercase tracking-widest mb-3 flex items-center gap-2"><Layers size={14}/> Technology Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                  <span key={tech} className="px-3 py-1 bg-bg-primary border border-line text-xs font-mono uppercase text-text-primary">{tech}</span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-display text-xs text-text-muted uppercase tracking-widest mb-3">Key Features</h4>
                              <ul className="space-y-2">
                                {project.features.map(feature => (
                                  <li key={feature} className="text-sm text-text-muted flex items-start gap-2">
                                    <span className="text-accent mt-1">▹</span> {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Right Column: Challenges & Process */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-display text-xs text-text-muted uppercase tracking-widest mb-2">Development Challenges</h4>
                              <p className="text-sm text-text-primary leading-relaxed border-l-2 border-line pl-3">{project.challenges}</p>
                            </div>
                            <div>
                              <h4 className="font-display text-xs text-text-muted uppercase tracking-widest mb-2">Engineering Process</h4>
                              <p className="text-sm text-text-muted leading-relaxed">{project.process}</p>
                            </div>
                          </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-line">
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="group/btn relative overflow-hidden px-6 py-3 border border-accent text-accent uppercase font-display font-semibold tracking-widest text-xs transition-transform active:scale-95 flex items-center gap-2" style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }} onClick={e => e.stopPropagation()}>
                            <span className="relative z-10 group-hover/btn:text-bg-primary transition-colors duration-200 flex items-center gap-2">View Live <ExternalLink size={14}/></span>
                            <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-200 ease-out" />
                          </a>
                          
                          {project.links.github && project.links.github !== '#' && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-line text-text-primary hover:border-text-primary hover:text-bg-primary hover:bg-text-primary uppercase font-display font-semibold tracking-widest text-xs transition-all active:scale-95 flex items-center gap-2" onClick={e => e.stopPropagation()}>
                              <GithubIcon size={14}/> Repository
                            </a>
                          )}

                          {project.links.caseStudy && project.links.caseStudy !== '#' && (
                            <a href={project.links.caseStudy} target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-text-muted hover:text-accent uppercase font-display font-semibold tracking-widest text-xs transition-all active:scale-95 flex items-center gap-2" onClick={e => e.stopPropagation()}>
                              <FileText size={14}/> Case Study
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
