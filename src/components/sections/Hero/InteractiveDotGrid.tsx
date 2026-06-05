// src/components/sections/Hero/InteractiveDotGrid.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveDotGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the hover glow
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
      {/* Base Layer: Tiny, faint dots */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      
      {/* Interactive Layer: Bolder, slightly larger dots that follow the cursor */}
      <motion.div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage: "radial-gradient(circle 100px at calc(var(--x) * 1px) calc(var(--y) * 1px), black 20%, transparent 100%)",
          //@ts-ignore - framer motion handles css vars fine
          "--x": springX,
          "--y": springY,
        }}
      />
    </div>
  );
}