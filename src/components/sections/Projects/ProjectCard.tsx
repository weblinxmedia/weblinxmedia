// src/components/sections/Projects/ProjectCard.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  project: any;
  isFirst: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ProjectCard({ project, isFirst, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  return (
    <motion.div 
      layout
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative h-[500px] md:h-[500px] transition-all duration-700 ease-in-out ${isFirst ? 'w-full md:w-[30%]' : 'w-full md:w-[30%]'}`}
    >
      {/* Image Container */}
      <div className={`relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500 ${!isFirst ? 'grayscale hover:grayscale-0' : 'grayscale-0'}`}>
        <motion.div 
          className="w-full h-full"
          animate={{ scale: isFirst ? 1 : 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        >
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </motion.div>
        
        {/* Desaturation Overlay for background cards */}
        {!isFirst && <div className="absolute inset-0 bg-black/20" />}
      </div>

      {/* Text Content */}
      <div className= {`absolute bg-background px-3 py-3 bottom-10 left-5 rounded-t-3xl rounded-bl-3xl right-5 z-20 ${isFirst? `bg-background` :  `bg-background/80`}`}>
        <div className="overflow-hidden">
          <motion.h3 
            key={project.id}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            className={`font-parkinsans font-regular ${isFirst ? 'text-2xl md:text-2xl text-black' : 'text-xl md:text-2xl text-black/70'}`}
          >
            {project.title}
          </motion.h3>
        </div>

        <AnimatePresence>
          {isFirst && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
              className="mt-4"
            >
              <p className="font-outfit text-black/70 text-sm max-w-sm">
                {project.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}