// src/components/sections/Industries/IndustryModal.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function IndustryModal({ isOpen, onClose, data }: any) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999999999] flex items-center justify-center px-4 py-6">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0"
            style={{
              background: "rgba(3, 3, 9, 0.9)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 18 }}
            transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl z-10"
            style={{
              background: "linear-gradient(160deg, #0E0E1C 0%, #090910 100%)",
              border: "1px solid rgba(212,175,55,0.13)",
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.07)",
            }}
          >
            {/* Top shimmer line */}
            <div
              className="absolute top-0 left-[8%] right-[8%] h-px rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent)",
              }}
            />

            {/* ─── Modal Header ─── */}
            <div
              className="sticky top-0 z-20 px-8 md:px-12 pt-9 pb-7 flex items-start justify-between"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(14,14,28,1) 80%, transparent)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div>
                {/* Overline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25 }}
                  className="flex items-center gap-2 mb-3"
                >
                  <div className="w-4 h-px bg-[#D4AF37]/50" />
                  <span
                    className="font-outfit text-[10px] text-[#D4AF37] uppercase"
                    style={{ letterSpacing: "0.36em" }}
                  >
                    Industry Spotlight
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18, duration: 0.5 }}
                  className="font-parkinsans font-bold text-white leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
                >
                  {data.name}
                </motion.h2>
              </div>

              {/* Close button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={onClose}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-1 transition-colors duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                aria-label="Close modal"
              >
                <X size={15} className="text-white/35 hover:text-white/70 transition-colors" />
              </motion.button>
            </div>

            {/* ─── Modal Body ─── */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 px-8 md:px-12 pb-12 pt-4">

              {/* Left: Images */}
              <div className="md:col-span-2 flex flex-wrap gap-3 items-start content-start">
                {data.images.map((img: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.32 + i * 0.14, duration: 0.5 }}
                    className={`relative rounded-xl overflow-hidden group ${
                      i % 2 === 0 ? "w-full aspect-video" : "w-[76%] aspect-square"
                    }`}
                    style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <Image
                      src={img}
                      alt={data.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.48) 0%, transparent 60%)",
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Right: Content */}
              <div className="md:col-span-3 flex flex-col gap-6">

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.42 }}
                  className="font-outfit text-white/38 leading-relaxed text-sm md:text-[15px]"
                >
                  {data.description}
                </motion.p>

                {/* Thin divider */}
                <div className="h-px w-full bg-white/[0.05]" />

                {/* Sub-services */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.52 }}
                >
                  <h4
                    className="font-outfit font-medium text-[#D4AF37]/55 mb-5"
                    style={{ fontSize: "10px", letterSpacing: "0.38em", textTransform: "uppercase" }}
                  >
                    What We Optimize
                  </h4>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {data.subServices.map((item: string, i: number) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.57 + i * 0.05 }}
                        className="flex items-center gap-2.5 font-outfit text-white/35 text-[12px]"
                      >
                        <div
                          className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                          style={{ background: "rgba(212,175,55,0.55)" }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Stat quote */}
                {data.stat && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.68 }}
                    className="relative py-4 pl-5"
                    style={{ borderLeft: "1px solid rgba(212,175,55,0.28)" }}
                  >
                    {/* Top accent dot on the border */}
                    <div
                      className="absolute left-[-3px] top-0 w-[5px] h-[5px] rounded-full"
                      style={{ background: "rgba(212,175,55,0.7)" }}
                    />
                    <p className="font-outfit text-white/25 italic text-[13px] leading-relaxed">
                      "{data.stat}"
                    </p>
                  </motion.div>
                )}

                {/* CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.74 }}
                  whileHover={{ scale: 1.025, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group mt-2 w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-[15px] rounded-xl font-parkinsans font-bold text-sm text-black"
                  style={{
                    background:
                      "linear-gradient(108deg, #C9A84C 0%, #F5DEB3 52%, #C9A84C 100%)",
                    boxShadow: "0 6px 24px rgba(212,175,55,0.22)",
                  }}
                >
                  Let&apos;s Talk {data.name.split(" ")[0]} Growth
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}