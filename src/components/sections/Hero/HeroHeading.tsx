// src/components/sections/Hero/HeroHeading.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { siteConfig } from "@/config/siteConfig";

export default function HeroHeading({ canAnimate }: { canAnimate: boolean }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!canAnimate || !ref.current) return;

    const words = ref.current.querySelectorAll(".hero-word");
    const ctx = gsap.context(() => {
      // Force hardware acceleration for butter-smooth translation
      gsap.to(words, {
        y: "0%",
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        force3D: true, // GPU acceleration
      });
    }, ref);

    return () => ctx.revert();
  }, [canAnimate]);

  return (
    <h1 ref={ref} className="font-parkinsans overflow-hidden text-[clamp(3.5rem,8vw,8rem)] h- md:h-30 leading-[0.92] tracking-[-0.03em] text-black">
      {siteConfig.hero.heading.split(" ").map((word, i) => (
        <span key={i} className="inline-block  mr-[0.25em] pb-1">
          {/* translate-y-full ensures it is physically impossible to see before animation starts */}
          <span className="hero-word inline-block translate-y-[110%] will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}