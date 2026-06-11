// src/components/sections/Contact/InteractiveBackground.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function InteractiveBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden bg-[#050505] pointer-events-none">
      <div 
        ref={glowRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #C8F135 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
    </div>
  );
}