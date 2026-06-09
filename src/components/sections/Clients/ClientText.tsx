// src/components/sections/Clients/ClientText.tsx
"use client";
import { motion } from "framer-motion";
import { clientData } from "@/config/siteConfig";

export default function ClientText() {
  const words = clientData.heading.split(" ");

  return (
    <div className="max-w-4xl">
      <div className="flex flex-wrap gap-x-3 overflow-hidden mb-6">
        {words.map((word, i) => (
          <div key={i} className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.33, 1, 0.68, 1] }}
              className="font-parkinsans text-4xl md:text-6xl font-bold uppercase leading-tight"
            >
              {word}
            </motion.h2>
          </div>
        ))}
      </div>
      
      <div className="overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-outfit text-black/60 text-lg md:text-xl max-w-xl"
        >
          {clientData.subtext}
        </motion.p>
      </div>
    </div>
  );
}