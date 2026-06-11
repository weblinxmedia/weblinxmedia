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
    <div className="w-full border-b border-white/10">
      {/* Question Header */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`font-parkinsans text-xl md:text-2xl font-bold uppercase transition-colors duration-300 ${isOpen ? 'text-acid-lime' : 'text-white'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'bg-acid-lime border-acid-lime text-black rotate-180' : 'border-white/20 text-white'}`}>
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
            <div className="pb-10 flex flex-wrap gap-x-1.5">
              {words.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.01, ease: "easeOut" }}
                    className="inline-block font-outfit text-white/60 text-lg leading-relaxed"
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