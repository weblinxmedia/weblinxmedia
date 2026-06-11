// src/components/sections/Process/OurProcess.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processData } from "@/config/siteConfig";
import TimelineItem from "./TimelineItem";
import ImageGrid from "./ImageGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OurProcess() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Timeline Fill Animation
      gsap.to(".timeline-fill", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: 1,
        }
      });

      // 2. Image Parallax Animation
      gsap.to(".parallax-img", {
        y: (i) => `-${(i + 1) * 20}%`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#040404] pt-10 pb-40 px-6 rounded-b-[5rem]  md:px-20 text-white overflow-hidden"
    >
      {/* ── Ambient background glow ─────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left warm glow */}
        {/* <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-background/[0.04] blur-[120px]" />
        {/* Bottom-right cool glow */}
        {/* <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-background/[0.03] blur-[100px]" /> */}
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section eyebrow + heading ───────────────────────────────────── */}
        <div className="md:mb-12">
          <p className="font-outfit text-background text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-background" />
            How We Work
          </p>
          <h2 className="font-montserrat text-[#ffffff] text-4xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight">
            The{" "}
            <span className="relative inline-block">
              Blueprint
              {/* Underline accent */}
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-background rounded-full" />
            </span>
          </h2>
        </div>

        {/* ── Two-column layout ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-start">

          {/* Left Column: Vertical Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Track lines */}
            <div className="absolute left-[23px] md:left-[31px] top-0 w-[2px] h-full bg-white/[0.06]" />
            <div className="timeline-fill absolute left-[23px] md:left-[31px] top-0 w-[2px] h-full bg-background origin-top scale-y-0 shadow-[0_0_12px_#c8f135]" />

            <div className="flex flex-col gap-2 relative z-10">
              {processData.stages.map((stage, i) => (
                <TimelineItem
                  key={stage.number}
                  number={stage.number}
                  icon={stage.icon}
                  title={stage.title}
                  text={stage.text}
                  isLast={i === processData.stages.length - 1}
                  delay={i * 0.15}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Image Grid */}
          <div className="sticky top-24 h-screen md:block">
            <ImageGrid />
          </div>
        </div>
      </div>
    </section>
  );
}