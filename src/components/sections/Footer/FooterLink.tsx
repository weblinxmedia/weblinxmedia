// src/components/sections/Footer/FooterLink.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FooterLink({
  name,
  href,
  showArrow = false,
}: {
  name: string;
  href: string;
  showArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-1.5 py-0.5 w-fit "
    >
      {/* text */}
      <span
        className="
          font-parkinsans text-[16px] font-thin tracking-[-0.0em]
          text-white/40 group-hover:text-background group-hover:translate-x-2
          transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
        "
      >
        {name}
      </span>

      {showArrow && (
        <ArrowUpRight
          size={11}
          className="
            text-primary shrink-0
            opacity-0 -translate-x-1
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-400 ml-1.5 ease-[cubic-bezier(0.76,0,0.24,1)]
          "
        />
      )}

      {/* underline sweeps left → right */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/[0.06] ">
        <motion.div
          className="absolute inset-0 bg-primary origin-left"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: "circOut" }}
        />
      </div>
    </Link>
  );
}