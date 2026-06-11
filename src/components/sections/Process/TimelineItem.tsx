// src/components/sections/Process/TimelineItem.tsx
"use client";
import { motion } from "framer-motion";
import { ElementType } from "react";

interface TimelineItemProps {
  number: string;
  icon: ElementType;
  title: string;
  text: string;
  isLast: boolean;
  delay: number;
}

export default function TimelineItem({
  number,
  icon: Icon,
  title,
  text,
  isLast,
  delay,
}: TimelineItemProps) {
  return (
    <div className="group flex gap-6 md:gap-10">

      {/* ── Icon dot ──────────────────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Outer ring — glows on scroll-in */}
        <div
          className="
            relative w-12 h-12 md:w-16 md:h-16 rounded-full z-10
            border border-background/30
            bg-[#0f0f0f]
            flex items-center justify-center
            transition-all duration-500
            group-hover:border-background group-hover:shadow-[0_0_30px_#040404]
          "
        >
          {/* Inner accent ring */}
          <div className="absolute inset-[3px] rounded-full border border-background/10" />
          <Icon size={20} className="text-background relative z-10" />
        </div>

        {/* Connector line between dots */}
        {!isLast && (
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-background/90 to-transparent" />
        )}
      </div>

      {/* ── Content card ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, delay, ease: [0.33, 1, 0.68, 1] }}
        className="pb-7 pt-1 w-full"
      >
        {/* Number + Title row */}
        <div className="flex items-baseline gap-3">
          <span className="font-montserrat text-background/80 text-sm tabular-nums tracking-widest">
            {number}
          </span>
          {/* Tiny divider */}
          <span className="w-4 h-px bg-background/40 flex-shrink-0" />
          <h3 className="font-montserrat text-[#ffffff] text-2xl md:text-3xl lg:text-4xl font-regular leading-tight tracking-tight">
            {title}
          </h3>
        </div>

        {/* Separator line */}
        <div className="w-8 h-px bg-background/70 mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-background" />

        {/* Body text */}
        <p className="font-parkinsans text-[#ffffff]/85 text-sm md:text-base font-thin leading-tight ">
          {text}
        </p>
      </motion.div>
    </div>
  );
}