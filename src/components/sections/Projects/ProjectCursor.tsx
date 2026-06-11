// src/components/sections/Projects/ProjectCursor.tsx
"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCursor({ active }: { active: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: sx, y: sy, left: -40, top: -40 }}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      className="fixed pointer-events-none z-[999] w-20 h-20 rounded-full border border-white/20 bg-white flex items-center justify-center text-black"
    >
      <ArrowUpRight size={32} />
    </motion.div>
  );
}