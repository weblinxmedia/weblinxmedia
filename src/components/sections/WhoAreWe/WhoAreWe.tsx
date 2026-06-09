// src/components/sections/WhoAreWe/WhoAreWe.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Reusable Reveal Wrapper
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ y: "-100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.33, 1, 0.68, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

const ArrowSVG = () => (
  <svg 
    className="btn-arrow" 
    width="14" 
    height="14" 
    viewBox="0 0 14 14" 
    fill="none"
    aria-hidden="true"
  >
    <path 
      d="M1 13L13 1M13 1H4M13 1V10" 
      stroke="currentColor" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function WhoAreWe() {
  const headingText = "An independent web design and branding agency setted up who care, build relationships, have industry experience, and win awards.";
  const words = headingText.split(" ");

  return (
    <section className="w-full bg-warm-white py-15 px-6 md:px-16 text-text-dark relative z-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
        
        {/* Left Column: Label */}
        <div className="md:col-span-1">
          <Reveal delay={0.1}>
            <span className="text-text-muted text-[0.75rem] uppercase tracking-[0.12em] font-outfit font-medium flex items-center gap-2">
              • Who are we?
            </span>
          </Reveal>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-3">
          <div className="max-w-[1000px]">
            
            {/* Main Heading: Word-by-word Reveal */}
            <h2 className="font-parkinsans font-medium leading-[1.25] tracking-[-0.02em] text-[clamp(2.4rem,2.5vw,2.5rem)] mb-12 flex flex-wrap gap-x-[0.25em]">
              {words.map((word, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <motion.span
                    initial={{ y: "-100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.2 + (i * 0.02), // Staggered reveal
                        ease: [0.33, 1, 0.68, 1] 
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-16">
              
              {/* Button A: Filled Pill */}
              <Reveal delay={0.6}>
                <Link href="/about" className="group block">
                  <div className="bg-acid-lime hover:bg-acid-lime-hover px-7 py-4 rounded-full flex items-center gap-3 transition-all duration-500 shadow-sm overflow-hidden">
                    <span className="btn-text font-parkinsans font-semibold text-sm text-text-dark transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-[4px]">
                      About Us
                    </span>
                    <div className="group-hover:translate-x-[5px] group-hover:rotate-[45deg] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <ArrowSVG />
                    </div>
                  </div>
                </Link>
              </Reveal>

              {/* Button B: Text Link */}
              <Reveal delay={0.7}>
                <Link href="/team" className="group flex items-center gap-3 py-2">
                  <span className="btn-text font-parkinsans font-semibold text-sm text-text-dark transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-[4px] group-hover:underline underline-offset-8">
                    Meet the Team
                  </span>
                  <div className="group-hover:translate-x-[5px] group-hover:rotate-[45deg] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <ArrowSVG />
                  </div>
                </Link>
              </Reveal>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn-arrow {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .btn-text, .btn-arrow {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}