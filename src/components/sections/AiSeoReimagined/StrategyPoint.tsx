// src/components/sections/AiSeoReimagined/StrategyPoint.tsx
"use client";
import { motion } from 'framer-motion';

interface StrategyPointProps {
  title: string;
  text: string;
  isActive: boolean;
}

export default function StrategyPoint({ title, text, isActive }: StrategyPointProps) {
  return (
    <div className="relative pl-8 py-4 border-l-2 border-white/10">
      {/* Animated Fill Line */}
      <motion.div
        initial={false}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute top-0 left-[-2px] w-1 h-full bg-primary origin-top"
      />
      
      <motion.h4
        animate={{ color: isActive ? "#FFAD14" : "#FFFFFF" }}
        className="font-parkinsans text-2xl md:text-3xl font-bold uppercase transition-colors duration-300"
      >
        {title}
      </motion.h4>
      
      {/* Subtext Reveal */}
      <motion.p
        initial={false}
        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="font-outfit text-white/50 text-sm md:text-base mt-2 overflow-hidden"
      >
        {text}
      </motion.p>
    </div>
  );
}