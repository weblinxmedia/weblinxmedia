// src/components/sections/AiSeoReimagined/AiSeoReimagined.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aiSeoReimaginedData } from "@/config/siteConfig";
import StrategyPoint from "./StrategyPoint";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AiSeoReimagined() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1); // Start with -1 for no active state
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".strategy-card");
      
      // Pin the entire section container
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 500}`, // Dynamic pin based on card count
          pin: true,
          scrub: 1,
          anticipatePin: 1, // Helps prevent jumps
        },
      });

      // Animate the scrolling of the right-side cards
      masterTL.to(".cards-column", {
        y: () => -(cards[0].clientHeight * cards.length + (cards.length - 1) * 64 - window.innerHeight * 0.8),
        ease: "none"
      });

      // Create triggers to update the active state on the left
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#0a0a0a] text-white overflow-hidden py-24 md:py-32">
      
      {/* Static Grid Background - NO animation */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
        backgroundSize: "30px 30px"
      }} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-6 md:px-16 h-full items-center">
        
        {/* Left Column: The Strategy Hub */}
        <div className="flex flex-col justify-center">
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] as any }}
              className="font-parkinsans text-4xl md:text-6xl font-bold uppercase leading-tight"
            >
              {aiSeoReimaginedData.heading}
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-outfit text-white/60 text-lg md:text-xl max-w-lg"
            >
              {aiSeoReimaginedData.subheading}
            </motion.p>
          </div>
          
          <div className="flex flex-col gap-6">
            {aiSeoReimaginedData.strategyPoints.map((point, i) => (
              <StrategyPoint 
                key={point.id} 
                title={point.title} 
                text={point.text}
                isActive={i === activeIndex}
              />
            ))}
          </div>
        </div>

        {/* Right Column: The Scrolling Service Cards */}
        <div className="cards-column relative h-full flex flex-col justify-start gap-16 py-24">
          {aiSeoReimaginedData.optimizationCards.map((card) => (
            <div key={card.id} className="strategy-card bg-[#111]/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/40 min-h-[250px]">
              <h4 className="font-parkinsans text-2xl text-primary uppercase font-bold mb-4">{card.title}</h4>
              <p className="font-outfit text-white/70 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}