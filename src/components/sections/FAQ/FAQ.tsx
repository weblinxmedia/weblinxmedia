// src/components/sections/FAQ/FAQ.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { siteConfig, faqData } from "@/config/siteConfig";
import FaqItem from "./FaqItem";

export default function FAQ() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="bg-background relative w-full py-24 md:py-40 px-6 md:px-16 text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        
        {/* LEFT COLUMN: BRAND INFO */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
             <span className="font-parkinsans text-acid-lime uppercase tracking-widest text-sm font-bold">
               {faqData.smallTitle}
             </span>
             <div className="flex items-center gap-6 py-4">
                <div className="w-16 h-16 relative grayscale brightness-200">
                    <Image src={siteConfig.logoUrl} alt="Logo" fill className="object-contain" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 text-white/70 hover:text-acid-lime transition-colors cursor-pointer">
                        <Phone size={16} />
                        <span className="font-outfit text-sm">+1 (123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70 hover:text-acid-lime transition-colors cursor-pointer">
                        <Mail size={16} />
                        <span className="font-outfit text-sm">hello@weblinx.media</span>
                    </div>
                </div>
             </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="font-parkinsans text-3xl md:text-5xl font-bold uppercase leading-tight"
                >
                  {faqData.hiringHeading}
                </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-outfit text-white/50 text-lg leading-relaxed"
            >
              {faqData.hiringAnswer}
            </motion.p>
          </div>
        </div>

        {/* RIGHT COLUMN: THE ACCORDIONS */}
        <div className="lg:col-span-7 flex flex-col pt-4">
          {/* Top Line Animation */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-[1px] bg-white/20 origin-left"
          />
          
          <div className="flex flex-col">
            {faqData.questions.map((item) => (
              <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}