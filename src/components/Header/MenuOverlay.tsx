// src/components/Header/MenuOverlay.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function MenuOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openService, setOpenService] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999999] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* 40vw Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 w-[40vw] h-full z-[1243000] bg-white/95 backdrop-blur-xl border-l border-black/10 flex flex-col justify-center px-12"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:text-primary transition-colors"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col gap-6">
              {siteConfig.navLinks.map((link, index) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name}>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => setOpenService(!openService)}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="link-hover text-3xl md:text-5xl font-parkinsans font-bold"
                        >
                          {link.name}
                        </motion.span>
                        <motion.div
                          animate={{ rotate: openService ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={24} />
                        </motion.div>
                      </motion.div>

                      {/* Dropdown inside Sidebar */}
                      <AnimatePresence>
                        {openService && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="ml-4 mt-2 overflow-hidden border-l-2 border-primary pl-4"
                          >
                            {siteConfig.services.map((service, i) => (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <Link
                                  href={service.href}
                                  onClick={onClose}
                                  className="link-hover block text-xl md:text-2xl font-outfit py-2 text-black"
                                >
                                  {service.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="link-hover text-3xl md:text-5xl font-parkinsans font-bold"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}