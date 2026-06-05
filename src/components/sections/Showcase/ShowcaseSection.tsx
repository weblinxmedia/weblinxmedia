// src/components/sections/Showcase/Showcase.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showcaseData } from "@/config/siteConfig";
import ServiceCard from "./ServiceCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardRef.current || !horizontalRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        const { isDesktop } = context.conditions as { isDesktop: boolean };

        // 1. INITIAL 3D STATE (Top-Left Back, Bottom-Right Forward)
        gsap.set(cardRef.current, {
          width: isDesktop ? "65vw" : "80vw",
          height: isDesktop ? "75vh" : "40vh",
          x: isDesktop ? "5vw" : "-5vw",
          y: "-15vh",
          rotationX: 25,
          rotationY: -25,
          rotationZ: 5,
          transformPerspective: 1500,
          borderRadius: "40px",
        });

        gsap.set(".reveal-item", { yPercent: 110 });

        // 2. MAIN TIMELINE (Expansion + Pin)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: isDesktop ? "+=500%" : "+=300%", // Longer on desktop for horizontal
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });

        // Step A: Expand to Fullscreen & Detilt
        tl.to(cardRef.current, {
          width: "100vw",
          height: "100vh",
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          borderRadius: 0,
          duration: 2,
          ease: "power2.inOut",
        });

        // Step B: Reveal Items
        tl.to(".reveal-item", {
          yPercent: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
        }, "-=0.5");

        // Step C: Horizontal Movement (Only if items exceed viewport)
        const scrollWidth = horizontalRef.current ? horizontalRef.current.offsetWidth - window.innerWidth : 0;
        if (scrollWidth > 0) {
          tl.to(horizontalRef.current, {
            x: -scrollWidth,
            duration: 4,
            ease: "none",
          }, "+=0.2");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full z-20 bg-transparent -mt-[15vh]">
      <div className="h-screen w-full flex items-center justify-center overflow-hidden">
     
        {/* Animated 3D Card */}
        <div
          ref={cardRef}
          className="bg-[#050505] text-white flex flex-col items-start justify-end pb-4 overflow-hidden will-change-transform shadow-2xl"
        >
                   <div className="w-[400px] absolute bottom-[-20%] left-[-10%] h-[400px] "
            style={{
                    backgroundImage: 'linear-gradient(-90deg, var(--color-background))',
                    borderRadius: '100%',
                    opacity:'30%',
                    filter:'blur(100px)', 
            }}
            ></div>
            <div ref={horizontalRef}  className="h-37 flex overflow-hidden items-center mx-auto">
                <h2 className="reveal-item font-parkinsans px-[3rem]  text-background text-3xl md:text-5xl font-regular leading-tight">
                  {showcaseData.mainHeading}
                </h2>
              </div>
          {/* Horizontal Scroller */}
          <div 
            ref={horizontalRef} 
            className="flex items-start gap-[40px] px-[10vw] flex-nowrap h-fit pt-20 md:pt-3 pb-5"
          >
            {/* Intro Text Block */}
            <div className="min-w-[85vw] md:min-w-[30vw] flex flex-col items-start justify-end gap-5 h-full md:gap-5">
              
              <div className="overflow-hidden">
                <p className="reveal-item font-outfit text-white font-thin text-lg md:text-xl max-w-sm">
                  {showcaseData.subHeading}
                </p>
              </div>
            </div>

            {/* Service Cards Mapped from Config */}
            {showcaseData.services.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                title={service.title} 
                links={service.links} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}