// src/components/sections/Industries/IndustryCard.tsx
"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  name: string;
  descriptor?: string;
  icon: LucideIcon;
  onClick: () => void;
  index: number;
}

export default function IndustryCard({
  name,
  descriptor,
  icon: Icon,
  onClick,
  index,
}: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: 0.06 + index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -7, transition: { duration: 0.25, ease: "easeOut" } }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View ${name} industry details`}
      className="group relative rounded-4xl p-6 md:p-7 min-h-[210px] flex flex-col items-center text-center cursor-pointer overflow-hidden select-none outline-none focus-visible:ring-2 focus-visible:ring-background/80"
      style={{
    
        border: "2px solid var(--color-background)",
        touchAction: "manipulation",
      }}
    >
      {/* Top gold sweep on hover */}
      <div
        className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)",
        }}
      />

      {/* Hover inner glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Icon ring container */}
      <div className="relative mb-5 w-[60px] h-[60px] flex items-center justify-center">
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            border: "2px solid var(--color-background)",
          }}
        />
        {/* Hover glow ring */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            border: "1px solid rgba(212,175,55,0.28)",
            boxShadow: "0 0 18px rgba(212,175,55,0.14), inset 0 0 12px rgba(212,175,55,0.04)",
          }}
        />
        {/* Inner fill */}
        <div
          className="absolute inset-[4px] rounded-full transition-all opacity-100 duration-500 group-hover:opacity-100"
          style={{ background: "rgba(212,175,55,0.05)", opacity: 1 }}
        />
        {/* Icon */}
        <Icon
          size={22}
          strokeWidth={1.5}
          className="relative z-10 text-background transition-colors duration-400"
        />
      </div>

      {/* Name */}
      <h3 className="font-parkinsans font-medium text-[15px] md:text-[19px] text-background  transition-colors duration-300 leading-snug mb-1">
        {name}
      </h3>

      {/* Descriptor */}
      {descriptor && (
        <p className="font-outfit text-[11px] text-background transition-colors duration-300 mt-0.5">
          {descriptor}
        </p>
      )}

      {/* Bottom-right "Explore" hint */}
      <div className="absolute bottom-4 right-[10%] -translate-x-1/2 flex items-center gap-1.5 opacity-100 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span
          className="font-outfit relative text-[10px] text-background uppercase"
          style={{ letterSpacing: "0.18em" }}
        >
          Explore
        </span>
        <div className="w-3 h-px absolute -right-5 bg-background" />
      </div>
    </motion.div>
  );
}