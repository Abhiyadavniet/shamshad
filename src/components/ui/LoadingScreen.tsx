import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const { lang } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);

  const phases = lang === 'fr' ? [
    'Allumage du feu de bois...',
    'Pétrissage des naans au tandoor...',
    'Infusion des épices afghanes...',
    'Bienvenue chez Shamshad Paris',
  ] : [
    'Heating the wood-fired grill...',
    'Baking fresh tandoor naans...',
    'Infusing authentic Afghan spices...',
    'Welcome to Shamshad Paris',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Smooth random increment
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);
        
        // Update text phase based on progress
        if (next < 30) setPhaseIndex(0);
        else if (next < 65) setPhaseIndex(1);
        else if (next < 90) setPhaseIndex(2);
        else setPhaseIndex(3);

        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete?.();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#080706] flex flex-col items-center justify-center overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -30,
        filter: 'blur(12px)',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#E07A4B]/20 via-[#F5B041]/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Center Brand Identity */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
        {/* Animated Glowing Logo Icon */}
        <motion.div
          className="relative mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#E07A4B] to-[#C46435] flex items-center justify-center text-white shadow-[0_0_50px_rgba(224,122,75,0.55)] border border-white/20">
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <Flame size={40} className="text-white" />
            </motion.div>
          </div>
          {/* Subtle spinning sparkle ring */}
          <div className="absolute -inset-2 rounded-3xl border border-[#E07A4B]/30 animate-pulse pointer-events-none" />
        </motion.div>

        {/* Brand Name with Tracking expansion */}
        <motion.h1
          className="font-display font-black text-3xl sm:text-4xl tracking-[0.25em] text-white uppercase mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          SHAMSHAD
        </motion.h1>

        {/* Paris Subtitle */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5B041] mb-10 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Sparkles size={12} />
          Paris 18ᵉ • Restaurant Afghan
          <Sparkles size={12} />
        </motion.p>

        {/* Progress Bar Container */}
        <div className="w-full max-w-xs space-y-3">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#E07A4B] via-[#F5B041] to-[#E07A4B] rounded-full shadow-[0_0_15px_#E07A4B]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.1 }}
            />
          </div>

          {/* Progress Percentage & Status Phase */}
          <div className="flex items-center justify-between text-xs">
            <AnimatePresence mode="wait">
              <motion.span
                key={phaseIndex}
                className="text-[#A8A29E] font-medium text-[11px] italic"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {phases[phaseIndex]}
              </motion.span>
            </AnimatePresence>

            <span className="font-heading font-bold text-[#E07A4B] tabular-nums">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Location Stamp */}
      <motion.div
        className="absolute bottom-8 text-[11px] uppercase tracking-widest text-white/30 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        26 Rue Marx Dormoy • Paris 75018
      </motion.div>
    </motion.div>
  );
}
