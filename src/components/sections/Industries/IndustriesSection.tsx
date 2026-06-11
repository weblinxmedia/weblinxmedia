// src/components/sections/Industries/IndustriesSection.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { industriesData } from "@/config/industriesConfig";
import IndustryCard from "./IndustryCard";
import IndustryModal from "./IndustryModal";

export default function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<any>(null);

  return (
    <section className="relative  py-3 px-6 pb-30 md:px-16 overflow-hidden">

      {/* Ambient background glow */}
      

      {/* Decorative corner brackets */}
    
      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-10 flex flex-col items-center">

          {/* Overline with dashes */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex w-full items-center gap-3 mb-2"
          >
            <div className="w-8 h-px bg-background/50" />
            <span className="font-outfit text-[11px] text-background uppercase tracking-[0.4em]">
              Our Expertise
            </span>
            <div className="w-8 h-px bg-background/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-parkinsans w-full text-start font-semibold leading-none tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 7vw, 4rem)" }}
          >
            
            <span
              className="block font-parkinsans tracking-tighter mt-1 text-black">
              Industries We Serve
            </span>
          </motion.h2>

          {/* Animated divider */}
       
          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-montserrat text-black/80 w-full text-left leading-relaxed text-sm md:text-[15px]"
          >
            High-converting websites, bulletproof SEO strategies, and digital 
            solutions precision-crafted for each industry's unique demands.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {industriesData.map((item, idx) => (
            <IndustryCard
              key={item.id}
              {...item}
              index={idx}
              onClick={() => setSelectedIndustry(item)}
            />
          ))}
        </div>
      </div>

      <IndustryModal
        isOpen={!!selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
        data={selectedIndustry}
      />
    </section>
  );
}