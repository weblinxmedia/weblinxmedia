// src/components/Header/NavLinks.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function NavLinks() {
  const [hoveredService, setHoveredService] = useState(false);

  return (
    <div className="hidden md:flex items-center gap-0">
      {siteConfig.navLinks.map((link, index) => {
        if (link.hasDropdown) {
          return (
            <div
              key={link.name}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredService(true)}
              onMouseLeave={() => setHoveredService(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="link-hover nav-links-px text-sm relative font-parkinsans flex items-center justify-center tracking-normal cursor-pointer transition-colors duration-300"
              
              >
                <Link href={link.href}   style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

                {link.name} <svg className="ml-1 nav-icon" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                </Link>
              </motion.div>

              <AnimatePresence>
                {hoveredService && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-full left-0 mt-2 w-64 nav-links-px  bg-white backdrop-blur-xl border border-black/10 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="py-4 px-6 flex flex-col flex items-center justify-center gap-3">
                      {siteConfig.services.map((service, i) => (
                        <motion.div
                          key={service.name}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.05 + i * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Link href={service.href} className="link-hover nav-links-px text-sm font-parkinsans text-black block">
                            {service.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <motion.div
          className="flex items-center justify-center"
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href={link.href} className="link-hover nav-links-px  text-sm font-parkinsans tracking-normal">
              {link.name}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}