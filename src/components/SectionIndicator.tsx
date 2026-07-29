'use client';

import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'home', label: '01 / HERO' },
  { id: 'about', label: '02 / DRIVER PROFILE' },
  { id: 'projects', label: '03 / THE GARAGE' },
  { id: 'pitwall', label: '04 / PIT WALL' },
  { id: 'contact', label: '05 / PIT STOP' },
  { id: 'sessioncomplete', label: '06 / SESSION COMPLETE' },
];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('01 / HOME');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Basic delay to ensure sections are mounted before observing
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.id === entry.target.id);
            if (section) {
              setActiveSection(section.label);
            }
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% of the section is visible
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[9990] font-mono text-xs text-text-primary uppercase tracking-[0.2em] transition-opacity duration-700 pointer-events-none ${isVisible ? 'opacity-40' : 'opacity-0'}`}
    >
      {activeSection}
    </div>
  );
}
