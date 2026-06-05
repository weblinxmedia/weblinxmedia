// src/components/Preloader.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("preloaderShown");
    if (hasShown) {
      setShow(false);
      onComplete();
    }
  }, [onComplete]);

  const handleFinishIntro = () => {
    setHasAnimated(true);
    setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("preloaderShown", "true");
    }, 800);
  };

  const handleExitComplete = () => {
    onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999999999] flex items-center justify-center backdrop-blur-2xl bg-white/60"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, clipPath: "inset(100% 0 0 0)" }}
            animate={
              hasAnimated
                ? { opacity: 0, scale: 1.1 }
                : { opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0)" }
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
            onAnimationComplete={handleFinishIntro}
          >
            <Image
              src={siteConfig.logoUrl}
              alt="Weblinx Media Logo"
              width={160}
              height={160}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}