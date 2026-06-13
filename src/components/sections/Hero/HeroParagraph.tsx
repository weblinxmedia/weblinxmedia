// src/components/sections/Hero/HeroParagraph.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function HeroParagraph({ canAnimate }: { canAnimate: boolean }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Split text into words
  const words = siteConfig.hero.paragraph.split(" ");

  return (
    <div className="mt-3 flex flex-col items-start gap-5 md:gap-8 max-w-[80%] w-full">
      {/* 
          Instead of a single P tag, we use a flex container that wraps.
          Each word is inside its own 'mask' (overflow-hidden).
      */}
      <div className="flex flex-wrap row-gap-0 column-gap-2 overflow-hidden">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-1.5">
            <motion.span
              className="inline-block font-parkinsans text-lg leading-[1.3] text-black/90 will-change-transform"
              initial={reduceMotion ? false : { y: "110%" }}
              animate={canAnimate ? { y: 0 } : {}}
              transition={{
                duration: 0.8,
                // Sequential stagger: each word starts slightly after the previous one
                delay: 0.8 + i * 0.015, 
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
   
 
      <motion.div
      className="mt-1"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={canAnimate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href={siteConfig.hero.cta.href}>
          <button className="btn-hero">
              <span>
                 {siteConfig.hero.cta.label}
              </span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
}