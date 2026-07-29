'use client';
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export const TRACKS = [
  { id: 0, title: 'F1 Theme (Brian Tyler)', url: '/theme-audio.mp3' },
  { id: 1, title: 'Lose My Mind (Don Toliver)', url: '/lose-my-mind.mp3' }
];

type AudioContextType = {
  isMuted: boolean;
  toggleMute: () => void;
  playAudio: () => void;
  currentTrack: number;
  setTrack: (index: number) => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current.load();
    }

    const audio = new Audio(TRACKS[currentTrack].url);
    audio.preload = 'auto';
    audio.muted = isMuted;
    audioRef.current = audio;

    const handleEnded = () => {
      // Auto-play the next track in the playlist when the current one finishes
      setCurrentTrack(prev => (prev + 1) % TRACKS.length);
    };

    audio.addEventListener('ended', handleEnded);

    if (hasStarted) {
      audio.play().catch(e => console.warn('Audio play failed:', e));
    }

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrack]); // Intentionally omitting isMuted and hasStarted so we don't recreate the element

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
    if (!hasStarted) {
      setHasStarted(true);
      audioRef.current?.play().catch(() => {});
    }
  };

  const playAudio = () => {
    if (isMuted) setIsMuted(false);
    if (!hasStarted) {
      setHasStarted(true);
    }
    audioRef.current?.play().catch(e => console.warn('Audio play failed:', e));
  };

  const setTrack = (index: number) => {
    setCurrentTrack(index);
    if (!hasStarted) setHasStarted(true);
    if (isMuted) setIsMuted(false);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playAudio, currentTrack, setTrack }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}
