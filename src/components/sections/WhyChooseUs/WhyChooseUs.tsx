"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import { whyChooseUsData } from "@/config/siteConfig";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. CORNER IMAGES PARALLAX
      // Left corners move right, Right corners move left
      gsap.to(".img-left", {
        x: "50%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
      gsap.to(".img-right", {
        x: "-50%",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      // 2. STAGGERED 3D CARD FLIP
      const cards = gsap.utils.toArray(".flip-card-inner");
      gsap.to(cards, {
        rotationY: 180,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 95%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#040404] py-24 md:py-20 px-6 md:px-16 overflow-hidden text-white">
      
      {/* Top Header Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-13">
        <div>
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="font-montserrat text-background text-4xl md:text-5xl font-medium"
            >
              {whyChooseUsData.heading}
            </motion.h2>
          </div>
          {/* Left-to-Right Animated Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            className="w-full h-[1px] bg-primary origin-left mb-8"
          />
        
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="font-outfit font-thin mb-4 text-white/90 text-medium leading-relaxed max-w-xl"
          >
            {whyChooseUsData.description}
          </motion.p>

           <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="font-outfit font-thin mb-4 text-white/90 text-medium leading-relaxed max-w-xl"
          >
            {whyChooseUsData.description2}
          </motion.p>
              <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="font-outfit font-thin text-white/90 text-medium leading-relaxed max-w-xl"
          >
            I can craft your graphic identiy, edit a corporate brand book, create your entire webdesign and develop your website : <span className="font-semibold">I ensure the continuity of your brand identity and support you during each key step of your project.</span>
          </motion.p>
        </div>

        {/* The 5-Image Composition */}
        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
            {/* Center Main Image */}
            <div className="relative w-2/3 h-2/3 z-10 rounded-2xl overflow-hidden border border-white/10">
                <Image src="/images/midimg.webp" alt="Main" fill className="object-cover" />
            </div>
            {/* Corner Images */}
            <div className="img-left absolute top-10 left-5 w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden border border-white/20 z-20">
                <Image src="/images/tl1.webp" alt="1" fill className="object-cover" />
            </div>
            <div className="img-left absolute bottom-10 left-5 w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden border border-white/20 z-20">
                <Image src="/images/tb1.webp" alt="2" fill className="object-cover" />
            </div>
            <div className="img-right absolute top-10 right-5 w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden border border-white/20 z-20">
                <Image src="/images/tr1.webp" alt="3" fill className="object-cover" />
            </div>
            <div className="img-right absolute bottom-10 right-5 w-20 h-20 md:w-32 md:h-32 rounded-xl overflow-hidden border border-white/20 z-20">
                <Image src="/images/tr2.webp" alt="4" fill className="object-cover" />
            </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-container grid grid-cols-1 md:grid-cols-4 gap-3">
        {whyChooseUsData.cards.map((card, i) => (
          <div key={i} className="perspective-1000 min-h-[250px] w-full group">
            <div className="flip-card-inner relative w-full h-full transition-transform duration-700 preserve-3d">
              
              {/* Front Side: "Scroll" */}
              <div className="absolute inset-0 backface-hidden bg-[#fff] rounded-2xl flex items-center justify-center border border-white/5">
              <img src="/images/logo.png" width="130"/>
              </div>

              {/* Back Side: Content */}
              <div 
                className="absolute inset-0 backface-hidden rounded-4xl py-8 flex flex-col justify-start items-center rotate-y-180 border border-white/10 overflow-hidden"
                style={{ backgroundColor: "var(--color-background)" }}
              >
                {/* Border Spark Animation */}
                <div className="absolute inset-0 border-spark z-0 opacity-10" />

                <div className="relative z-10 px-3">
                    <h4 className="font-parkinsans bg-white px-4 py-2 rounded-t-3xl rounded-bl-3xl text-xl font-regular leading-tight text-black mb-4">
                    {card.title}
                    </h4>
                    <p className="font-outfit px-1 text-black/80 text-sm leading-relaxed">
                    {card.text}
                    </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        /* Sparking Border Logic */
        .border-spark {
            position: absolute;
            inset: 0;
            border: 2px solid transparent;
            background: linear-gradient(#111, #111) padding-box,
                        conic-gradient(from var(--angle), transparent 70%, #fff) border-box;
            animation: rotate-spark 4s linear infinite;
        }

        @property --angle {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
        }

        @keyframes rotate-spark {
            to { --angle: 360deg; }
        }
      `}</style>
    </section>
  );
}