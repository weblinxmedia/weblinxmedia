"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function HeroAccentBlock({ canAnimate }: { canAnimate: boolean }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <motion.div
      className="relative hidden md:absolute md:bottom-16 md:right-16 bg-black rounded-xl p-8 md:p-10 min-w-[clamp(240px,25vw,340px)] mt-16 md:mt-0 origin-bottom-right"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
      animate={canAnimate ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-white/50 font-outfit text-xs uppercase tracking-[0.15em] mb-3">
        {siteConfig.hero.accent.label}
      </p>
      <h3 className="text-white font-parkinsans font-semibold text-xl mb-6">
        {siteConfig.hero.accent.heading}
      </h3>
      <div className="flex gap-6 items-center">
        {siteConfig.hero.accent.logos.map((logo, i) => (
          <div key={i} className="relative h-7 w-24">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain brightness-0 invert opacity-70"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}