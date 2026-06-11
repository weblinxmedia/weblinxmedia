// src/components/sections/Testimonials/Testimonials.tsx
"use client";
import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import CardStack from './CardStack';
import { luxuryTestimonialData } from '@/config/siteConfig';
import { useRef } from 'react';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const activeTestimonial = luxuryTestimonialData.testimonials[activeIndex];

  return (
    <section ref={sectionRef} className="relative w-full bg-warm-white pt-3 pb-14 px-6 md:px-16 text-text-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
        
        {/* Left Column: Card Stack */}
        <motion.div
        className='max-w-[85%]'
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <CardStack activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </motion.div>

        {/* Right Column: Content */}
        <div className=" relative min-h-[300px] mt-5 w-fit px-8 pt-[50px] rounded-t-[30px] rounded-br-[30px] pb-[30px] bg-background">
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="font-parkinsans text-3xl md:text-4xl font-medium text-black mb-6"
            >
              {luxuryTestimonialData.heading}
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="font-montserrat text-3xl md:text-[18px] font-semibold text-black"
            >
              "{activeTestimonial.title}"
            </motion.h2>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <p className="text-black/60 text-[14px] w-full md:w-[76%] font-parkinsans leading-[15px] pl-2 max-w-lg my-5">
                {activeTestimonial.quote}
              </p>
              <div className='w-80 text-right'>
              <p className="font-parkinsans font-regular text-xl text-black">
                - {activeTestimonial.name}
              </p></div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-3 w-full mx-auto overflow-hidden">
            <motion.button 
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="border border-black/20 font-parkinsans cursor-pointer font-regular px-8 py-3 rounded-full text-sm tracking-wider bg-black text-background hover:bg-black hover:text-white transition-colors duration-300"
            >
              {luxuryTestimonialData.cta}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}