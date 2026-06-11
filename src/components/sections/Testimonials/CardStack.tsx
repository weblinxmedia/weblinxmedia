// src/components/sections/Testimonials/CardStack.tsx
"use client";
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { luxuryTestimonialData } from '@/config/siteConfig';

interface CardStackProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function CardStack({ activeIndex, setActiveIndex }: CardStackProps) {
  const testimonials = luxuryTestimonialData.testimonials;

  const cycleForward = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  };

  const cycleBackward = () => {
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="relative w-full h-[550px] flex items-center justify-center">
      {/* 3D Perspective Container */}
      <div className="relative w-[300px] h-[480px]" style={{ perspective: "1200px", transformStyle: "preserve-3d" }}>
        {testimonials.map((testimonial, i) => {
          const delta = (i - activeIndex + testimonials.length) % testimonials.length;
          let transform, opacity, zIndex;

          if (delta === 0) { // Active Card
            transform = "translateX(0%) rotateY(0deg) translateZ(0px)";
            opacity = 1;
            zIndex = 3;
          } else if (delta === 1) { // Next Card (Right)
            transform = "translateX(40%) scale(0.9) rotateY(-15deg) translateZ(-50px)";
            opacity = 0.6;
            zIndex = 2;
          } else if (delta === testimonials.length - 1) { // Previous Card (Left)
            transform = "translateX(-40%) scale(0.9) rotateY(15deg) translateZ(-50px)";
            opacity = 0.6;
            zIndex = 2;
          } else { // All other cards in the back
            transform = "scale(0.8) translateZ(-100px)";
            opacity = 0;
            zIndex = 1;
          }

          return (
            <motion.div
              key={testimonial.id}
              className="absolute  z-100 w-full h-full"
              initial={false}
              animate={{ transform, opacity, zIndex }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TestimonialCard {...testimonial} isActive={delta === 0} />
            </motion.div>
          );
        })}

        {/* Navigation Buttons */}
        <div className='relative h-full left-0'>
        <button onClick={cycleBackward} className="absolute cursor-pointer left-[32%] -bottom-2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-black/10 bg-background flex items-center justify-center text-black hover:text-black hover:bg-white/80 transition-all duration-300 shadow-md">
          <ArrowLeft size={20} />
        </button>
        <button onClick={cycleForward} className="absolute cursor-pointer right-[32%] -bottom-2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-black/10 bg-background flex items-center justify-center text-black hover:text-black hover:bg-white/80 transition-all duration-300 shadow-md">
          <ArrowRight size={20} />
        </button>
      </div></div>
    </div>
  );
}