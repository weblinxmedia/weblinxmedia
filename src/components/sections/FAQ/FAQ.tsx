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
    <section ref={sectionRef} className=" relative w-full py-14 md:py-16 px-6 md:px-16 text-black">
    <h4 className="font-parkinsans  mx-auto text-center tracking-tight text-[14px] md:text-xl font-medium">
               {faqData.smallTitle}
             </h4>
             <h1 className="text-3xl md:text-6xl my-2 font-parkinsans text-center mx-auto font-medium tracking-tighter ">
              Questions? We've Got Answers!
             </h1>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 mt-7 lg:grid-cols-12 gap-16 md:gap-24">
        
        
        {/* LEFT COLUMN: BRAND INFO */}
        <div className="lg:col-span-5 space-y-1">
         
          <div className="space-y-4">
             
             <div className="flex items-center gap-1 ">
                <div className="w-17 h-17 md:w-30 md:h-30 relative ">
                    <Image src={siteConfig.logoUrl} alt="Logo" fill className="object-contain" />
                </div>
               
             </div>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="font-parkinsans text-3xl md:text-2xl font-semibold leading-tight"
                >
                  {faqData.hiringHeading}
                </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-outfit text-black/70 text-sm leading-[1.3]"
            >
              {faqData.hiringAnswer}
            </motion.p>
          </div>
           <div className="flex flex-col mt-5 gap-1">
                    <div className="flex items-center gap-3 text-black/90 hover:text-acid-lime transition-colors cursor-pointer">
                        <Phone size={20} />
                        <span className="font-outfit text-sm">{siteConfig.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-black/90 hover:text-acid-lime transition-colors cursor-pointer">
                        <Mail size={20} />
                        <span className="font-outfit text-sm">{siteConfig.mail}</span>
                    </div>
                </div>
        </div>

        {/* RIGHT COLUMN: THE ACCORDIONS */}
        <div className="lg:col-span-7 flex flex-col pt-8">
          {/* Top Line Animation */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-[1px] bg-white/20 origin-left"
          />
          
          <div className="flex gap-6 flex-col">
            {faqData.questions.map((item) => (
              <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}