'use client';

import React, { useState } from 'react';
import { useAudio, TRACKS } from '@/context/AudioContext';
import { Volume2, VolumeX, Music, Volume1 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioToggle() {
  const { isMuted, toggleMute, currentTrack, setTrack } = useAudio();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-3">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-bg-secondary border border-line p-2 flex flex-col gap-1 min-w-[240px]"
            style={{ clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)' }}
          >
            <div className="px-3 py-2 mb-1 border-b border-line flex justify-between items-center">
              <span className="font-display text-[10px] text-text-muted uppercase tracking-widest">Audio Hub</span>
            </div>
            
            {TRACKS.map((track, idx) => {
              const isActive = currentTrack === idx && !isMuted;
              return (
                <button
                  key={track.id}
                  onClick={() => {
                    setTrack(idx);
                  }}
                  className={`flex items-center gap-3 px-3 py-2 text-sm font-sans transition-colors text-left group ${currentTrack === idx ? 'text-accent' : 'text-text-muted hover:text-text-primary'}`}
                >
                  <Music size={14} className={`transition-opacity ${currentTrack === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                  <span className="truncate flex-1">{track.title}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="playing-indicator"
                      className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                    />
                  )}
                </button>
              );
            })}
            
            <div className="h-[1px] bg-line my-1" />
            
            <button
              onClick={toggleMute}
              className="flex items-center justify-between px-3 py-2 text-sm font-sans text-text-muted hover:text-text-primary transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                {isMuted ? <VolumeX size={14} /> : <Volume1 size={14} />}
                <span>{isMuted ? 'Unmute Master Audio' : 'Mute Master Audio'}</span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 flex items-center justify-center border border-accent bg-bg-secondary text-accent group overflow-hidden transition-transform active:scale-95"
        style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
      >
        <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200 ease-out z-0" />
        <div className="relative z-10 group-hover:text-bg-primary transition-colors duration-200">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </div>
      </button>
    </div>
  );
}
