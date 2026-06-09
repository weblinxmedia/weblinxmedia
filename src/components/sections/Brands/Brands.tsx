// src/components/sections/Brands/Brands.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { brandsData } from "@/config/siteConfig";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Brands() {
  const sectionRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!portfolioRef.current || !sectionRef.current) return;

      const cards = portfolioRef.current.querySelectorAll(".portfolio-card-wrapper");

      // We define "randomized" offsets: negative goes UP, positive goes DOWN
      // This creates a chaotic, premium parallax feel
      const movementOffsets = [-150, 120, -200, 80, -120, 160, -90];

      cards.forEach((card, i) => {
        gsap.fromTo(card, 
          { y: 0 }, 
          {
            y: movementOffsets[i],
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom", // Starts when section enters bottom
              end: "bottom top",   // Ends when section leaves top
              scrub: 1,            // Smooth 1s catch-up
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-30 bg-background rounded-t-[7rem]">
      
      {/* 1. Header */}
      <div className="text-center px-6 w-full lg:w-[60vw] mx-auto mb-8 relative z-10">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ x: "100%" }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] as any }}
            className="font-parkinsans m-0 p-0 text-3xl md:text-[50px] font-medium text-black leading-tight tracking-tight"
          >
            {brandsData.heading}
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.p 
            initial={{ x: "-100%" }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] as any }}
            className="font-parkinsans text-black/70 text-medium md:text-medium"
          >
            {brandsData.subheading}
          </motion.p>
        </div>
      </div>

      {/* 2. Marquee */}
      <div className="group w-[85%] relative flex overflow-hidden  px-8 py-6 mb-10 mx-auto rounded-full bg-white/95 z-10">
        <div className="flex animate-marquee group-hover:pause  whitespace-nowrap">
          {[...brandsData.logos, ...brandsData.logos].map((logo, i) => (
            <div key={i} className="mx-2 md:mx-3 w-auto md:w-48 h-9 relative grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. CTA Button */}
      <div className="flex justify-center mb-32 relative z-10">
        <motion.button
          whileHover={{ scale: 1.03, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)" }}
          className="bg-[#040404] text-background font-parkinsans font-regular px-12 py-5 rounded-full text-sm tracking-normal cursor-pointer transition-all duration-300"
        >
          Let's Start a Project Together
        </motion.button>
      </div>

      {/* 4. Asymmetric Portfolio Parallax */}
      <div className=" py-20">
        <div 
          ref={portfolioRef}
          className="relative flex justify-center items-center gap-4 w-[110vw] left-[-5vw]"
        >
          {brandsData.portfolio.map((item, i) => (
            <div 
              key={i} 
              className="portfolio-card-wrapper relative w-full will-change-transform"
            >
              <div className="relative w-full h-[400px] md:h-[300px] overflow-hidden rounded-2xl shadow-2xl bg-gray-50">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  className="object-cover" 
                  sizes="20vw"
                  priority={i < 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}