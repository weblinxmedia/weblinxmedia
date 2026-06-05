// src/components/sections/Showcase/ServiceLink.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceLink({ text }: { text: string }) {
  return (
    <div className="overflow-hidden group py-1">
      <a href="#" className="reveal-item flex items-center font-thin text-xl md:text-xl font-parkinsans text-white transition-colors duration-300">
        {/* Hover Circle: Scale 0 to 1 */}
        <span className="w-4 h-4 relative bg-background rounded-full flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100">
              <ArrowUpRight 
          className="opacity-100 -translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 transition-all duration-300" 
          size={15} 
        />
        </span>

        {/* Text: Moves right on hover */}
        <span className="group-hover:translate-x-2 font-[300] transition-transform font-thin duration-300">
          {text}
        </span>
        
        {/* Arrow: Fades and slides in */}
     
      </a>
    </div>
  );
}