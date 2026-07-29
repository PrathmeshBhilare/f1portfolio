'use client';

import { useState } from 'react';
import GridStart from '@/components/sections/GridStart';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import PitWall from '@/components/sections/PitWall';
import Contact from '@/components/sections/Contact';
import SessionComplete from '@/components/sections/SessionComplete';

export default function Home() {
  const [entryComplete, setEntryComplete] = useState(false);

  return (
    <main className={`min-h-screen relative bg-bg-primary text-text-primary ${!entryComplete ? 'overflow-hidden' : ''}`}>
      {!entryComplete && (
        <GridStart onComplete={() => setEntryComplete(true)} />
      )}
      
      <Hero startAnimation={entryComplete} />
      
      <div className={entryComplete ? 'block' : 'hidden'}>
        <About />
        <Projects />
        <PitWall />
        <Contact />
        <SessionComplete />
      </div>
    </main>
  );
}
