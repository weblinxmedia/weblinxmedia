// src/components/sections/Clients/ClientLogos.tsx
"use client";
import { motion } from "framer-motion";
import { clientData } from "@/config/siteConfig";
import Image from "next/image";

export default function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-20">
      {clientData.logos.map((logo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8, filter: "grayscale(100%) blur(5px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "grayscale(0%) blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
          className="relative h-20 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}