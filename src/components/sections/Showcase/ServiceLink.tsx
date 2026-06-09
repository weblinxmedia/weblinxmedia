// src/components/sections/Showcase/ServiceLink.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function ServiceLink({ text }: { text: string }) {
  return (
    <div className="overflow-hidden group py-1">
      <Link href="#" className="reveal-item flex items-center font-thin text-xl md:text-xl font-parkinsans text-[#040404] transition-colors duration-300">
        {/* Hover Circle: Scale 0 to 1 */}
        <span className="w-4 h-4 relative bg-background rounded-full flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-100">
              <ArrowUpRight 
          className="opacity-100  group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300" 
          size={15} 
        />
        </span>

        {/* Text: Moves right on hover */}
        <span className="translate-x-2 font-[300] transition-transform font-thin duration-300">
          {text}
        </span>
        
        {/* Arrow: Fades and slides in */}
     
      </Link>
    </div>
  );
}