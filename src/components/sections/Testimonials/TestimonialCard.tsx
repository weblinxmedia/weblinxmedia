// src/components/sections/Testimonials/TestimonialCard.tsx
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

interface TestimonialCardProps {
  name: string;
  image: string;
  quote: string;
  title: string;
  isActive: boolean;
}

export default function TestimonialCard({ name, image, quote, title, isActive }: TestimonialCardProps) {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-white text-black border border-black/5">
      {/* Client Image */}
      <div className="relative w-full h-full">
        <Image src={image} alt={name} fill className="object-cover grayscale" />
      </div>
      
      {/* Text Content */}
      <div className="py-2 px-5 w-[90%] text-center rounded-t-4xl rounded-bl-4xl flex flex-col absolute bottom-2 left-[50%] -translate-x-1/2 bg-white/90 justify-end h-fit">
        <p className="font-outfit text-[11px] leading-snug mb-2">"{quote}"</p>
        <p className="font-parkinsans font-semibold text-sm">{name}</p>
      </div>

      {/* Logo Overlay */}
      <AnimatePresence>
        {!isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex items-center justify-center"
          >
            <div className="relative w-15 h-15 opacity-60">
              <Image src={siteConfig.logoUrl} alt="Weblinx Logo" fill className="object-contain brightness-0 invert" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}