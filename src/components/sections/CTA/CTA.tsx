// src/components/sections/CTA/CTA.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="font-parkinsans text-5xl md:text-8xl font-bold uppercase text-black leading-tight"
          >
            Ready to grow <br/> your business?
          </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-outfit text-black/50 text-xl md:text-2xl max-w-2xl mx-auto"
        >
          Contact us to work with our result-driven digital marketing agency and start scaling today.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 bg-black text-white font-parkinsans font-bold uppercase rounded-full text-xs tracking-widest flex items-center gap-3"
          >
            Start a project <ArrowRight size={16}/>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-12 py-5 border border-black/10 text-black font-parkinsans font-bold uppercase rounded-full text-xs tracking-widest"
          >
            Get a Free Audit
          </motion.button>
        </div>
      </div>
    </section>
  );
}