// src/components/sections/Hero/HeroTicker.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteConfig } from "@/config/siteConfig";

export default function HeroTicker({ canAnimate }: { canAnimate: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Append a duplicate of the first item at the end to create the seamless visual loop
  const tickerItems = [...siteConfig.hero.ticker, siteConfig.hero.ticker[0]];

  useEffect(() => {
    if (!canAnimate || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      const totalItems = tickerItems.length;

      // Animate the wrapper up one item at a time
      for (let i = 1; i < totalItems; i++) {
        tl.to(wrapperRef.current, {
          // Move up by exact percentages of the wrapper's total height
          yPercent: -(i * (100 / totalItems)),
          duration: 0.7,
          ease: "power3.inOut",
          delay: 1.5, // Pause on each word
        });
      }
      
      // When timeline finishes, repeat: -1 instantly snaps yPercent back to 0 (the real first item)
    }, wrapperRef);

    return () => ctx.revert();
  }, [canAnimate, tickerItems.length]);

  return (
    <div className="relative h-[1.3em] overflow-hidden font-parkinsans text-[clamp(2rem,8vw,5rem)] text-primary">
      {/* 
        The wrapper holds all items in a vertical flex column. 
        We just slide this entire wrapper up. 
      */}
      <div ref={wrapperRef} className="flex flex-col will-change-transform">
        {tickerItems.map((item, i) => (
          <span 
            key={`${item}-${i}`} 
            className="h-[1.3em] flex items-center text-background leading-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}