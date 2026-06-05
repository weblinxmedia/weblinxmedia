// src/components/Header/Header.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Search } from "lucide-react";
import Logo from "./Logo";
import PhoneInfo from "./PhoneInfo";
import NavLinks from "./NavLinks";
import MenuOverlay from "./MenuOverlay";

export default function Header({ isVisible }: { isVisible: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setHidden(true); // Scrolling down
    } else {
      setHidden(false); // Scrolling up
    }
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={isVisible ? { y: hidden ? -100 : 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
     
        className="fixed w-[100%] z-[99999] mx-auto py-5"

      >
           
      
     
        <div className="flex items-center w-[92vw] mx-auto rounded-[3.4rem] border-1 border-gray-300 justify-between px-6 md:px-15 py-4 backdrop-blur-lg bg-white">
            <Logo />
        <div className="flex items-center gap-6">
            
          <NavLinks />
          
          <button className="hover:text-primary cursor-pointer transition-colors duration-300" data-hover>
            <Search size={20} />
          </button>
  <PhoneInfo />
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center cursor-pointer gap-2 text-sm font-outfit uppercase tracking-widest duration-300"
            data-hover
          >
            <img src="/images/menu.svg" alt="" className="w-6"/>
            
          </button>
        </div>
        </div>
      </motion.header>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}