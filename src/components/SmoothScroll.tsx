// src/components/SmoothScroll.tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 2. Initialize Lenis with premium physics
    const lenis = new Lenis({
      duration: 1.2, // Control the "weight" of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom Apple-like easing
      smoothWheel: true,
      wheelMultiplier: 1, // Adjust sensitivity
      touchMultiplier: 2, // Make mobile feel responsive
    });

    // 3. Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 4. Sync GSAP ticker with Lenis RAF (Request Animation Frame)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // 5. Disable GSAP lag smoothing to prevent desyncs
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up on unmount
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}