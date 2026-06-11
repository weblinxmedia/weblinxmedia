// src/components/sections/KineticText/KineticText.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const line1 = "Weblinx Media - Let's Get Connected ! - ";
const line2 = "Webflow - SEO Marketing - Webdesign - Graphics - Strategy - ";

export default function KineticText() {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial positions
      gsap.set(line1Ref.current, { xPercent: -3 });
      gsap.set(line2Ref.current, { xPercent: 3 });

      // Create the scroll-triggered animation
      gsap.to([line1Ref.current, line2Ref.current], {
        xPercent: (i) => (i === 0 ? 3 : -3), // Line 1 moves right, Line 2 moves left
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-white text-black py-20 md:pt-35 md:pb-32 overflow-hidden"
    >
      <div 
        className="relative flex flex-col items-center justify-center gap-1"
        style={{ transform: "rotate(4deg)" }}
      >
        
        {/* Line 1: Stroked Text */}
        <div 
          ref={line1Ref} 
          className="flex whitespace-nowrap will-change-transform"
        >
          <span className="font-parkinsans text-6xl md:text-7xl tracking-tighter font-semibold text-background">
            {line1.repeat(3)}
          </span>
        </div>

        {/* Line 2: Filled Text */}
        <div 
          ref={line2Ref} 
          className="flex whitespace-nowrap will-change-transform"
        >
          <span className="font-parkinsans text-6xl md:text-7xl tracking-tighter font-semibold text-black">
            {line2.repeat(3)}
          </span>
        </div>

      </div>

      <style jsx>{`
        .stroke-black {
          -webkit-text-stroke: 2px black;
        }
      `}</style>
    </section>
  );
}