// src/components/sections/Showcase/Showcase.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showcaseData } from "@/config/siteConfig";
import ServiceCard from "./ServiceCard";
import InteractiveDotGrid from "../Hero/InteractiveDotGrid";
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

        gsap.set(cardRef.current, {
          width: isDesktop ? "65vw" : "80vw",
          height: isDesktop ? "75vh" : "60vh",
          x: 0,
          y: 0,
          rotationX: 25,
          rotationY: -25,
          rotationZ: isDesktop ? 5 : 1,
          transformPerspective: 1500,
          borderRadius: "4rem",
        });

        // 👇 Hide service cards initially, reveal only after expansion
        gsap.set(".service-card", { opacity: 0 });
        gsap.set(".reveal-item", { yPercent: 110 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: isDesktop ? "+=500%" : "+=300%",
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

        // Step B: Show service cards AFTER card is fullscreen
        tl.to(".service-card", {
          opacity: 1,
          duration: 0.1,
        });

        // Step C: Reveal text items
        tl.to(".reveal-item", {
          yPercent: 0,
          stagger: 0.05,
          duration: 1,
          ease: "power3.out",
        }, "-=0.5");

        // Step D: Horizontal scroll
        const scrollWidth = horizontalRef.current
          ? horizontalRef.current.offsetWidth - window.innerWidth
          : 0;
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
    <section ref={containerRef} className="relative w-full mx-auto  z-20 bg-[#040404]">
        
      <div className="h-screen w-full flex items-center justify-center  overflow-hidden">

        {/* Animated 3D Card */}
        <div
          ref={cardRef}
          className=" text-white flex flex-col bg-[#ffffff] items-start justify-center md:justify-end pb-4 overflow-hidden will-change-transform shadow-2xl"
        >
           <InteractiveDotGrid />
          {/* Glow */}
          <div
            className="w-[400px] absolute rounded-[4rem] bottom-[-20%] left-[-10%] h-[400px]"
            style={{
              backgroundImage: 'linear-gradient(-90deg, var(--color-background))',
              borderRadius: '100%',
              opacity: '30%',
              filter: 'blur(100px)',
            }}
          />
             <div
            className="w-[400px] absolute rounded-[4rem] top-[-20%] right-[-20%] h-[400px]"
            style={{
              backgroundImage: 'linear-gradient(-90deg, var(--color-background))',
              borderRadius: '100%',
              opacity: '30%',
              filter: 'blur(100px)',
            }}
          />

          {/* 👇 h2 sits at TOP of card, outside horizontal scroller */}
          <div className="w-full px-[3rem] ">
            <h2 className="reveal-item font-parkinsans text-[#040404] mb-5 text-center text-3xl md:text-5xl font-regular leading-[1.1]">
              {showcaseData.mainHeading}
            </h2>
          </div>

          {/* Horizontal Scroller */}
          <div
            ref={horizontalRef}
            className="flex items-start gap-[40px] px-[10vw] mt-10 md:mt-0 flex-nowrap h-fit pb-5"
          >
            {/* Intro Text Block */}
            <div className="min-w-[85vw] md:min-w-[30vw] flex flex-col items-start justify-end gap-5 h-full">
              <div className="overflow-hidden">
                <p className="reveal-item font-outfit text-[#040404] font-thin text-lg md:text-xl max-w-sm">
                  {showcaseData.subHeading}
                </p>
              </div>
            </div>

            {/* Service Cards — wrapped with service-card class */}
            {showcaseData.services.map((service, idx) => (
              <div key={idx} className="service-card">
                <ServiceCard
                  title={service.title}
                  links={service.links}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}