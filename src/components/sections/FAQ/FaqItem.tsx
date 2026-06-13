// src/components/sections/FAQ/FaqItem.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Split answer into words for the rising animation effect
  const words = answer.split(" ");

  return (
    <div className={`w-full px-5 py-6  border-1 rounded-3xl border-black/30 ${isOpen ? 'border-background' : 'border-background'} `}>
      {/* Question Header */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full  flex items-center justify-between cursor-pointer text-left group"
      >
        <span className={`font-parkinsans text-xl md:text-xl  font-semibold tracking-tighter transition-colors duration-300 ${isOpen ? 'text-acid-lime' : 'text-black'}`}>
          {question}
        </span>
        <div className={`rounded-full transition-all duration-300 ${isOpen ? 'bg-acid-lime border-acid-lime text-black rotate-180' : 'border-white/20 text-black'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      {/* Answer Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            <div className=" mb-2 mt-4 py-2 px-3 bg-background rounded-t-3xl rounded-br-3xl flex flex-wrap w-[90%] md:w-[90%] ">
              {words.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.01, ease: "easeOut" }}
                    className="block font-outfit text-black/70 mr-[2.5px] text-[13px] leading-normal"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}