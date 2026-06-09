// src/components/sections/Clients/Clients.tsx
"use client";

import { motion } from "framer-motion";
import ClientText from "./ClientText";
import ClientLogos from "./ClientLogos";

export default function Clients() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 md:px-16 bg-white overflow-hidden">
      
      {/* Background Decor Line: "Animate by ease of its line" */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-[1px] bg-black/10 origin-left"
      />

      <div className="relative z-10">
        <ClientText />
        <ClientLogos />
      </div>

      {/* Decorative vertical line for structure */}
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 right-1/4 w-[1px] h-full bg-black/5 origin-top hidden md:block"
      />
    </section>
  );
}