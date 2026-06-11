// src/components/sections/Projects/Projects.tsx
"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectData } from "@/config/siteConfig";
import ProjectCard from "./ProjectCard";
import ProjectCursor from "./ProjectCursor";

export default function Projects() {
  const [list, setList] = useState(projectData.projects);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const nextProject = () => {
    setList((prev) => {
      const newList = [...prev];
      const first = newList.shift();
      if (first) newList.push(first);
      return newList;
    });
  };

  const prevProject = () => {
    setList((prev) => {
      const newList = [...prev];
      const last = newList.pop();
      if (last) newList.unshift(last);
      return newList;
    });
  };

  return (
    <section ref={sectionRef} className="bg-[#040404] rounded-t-[5rem] relative w-full py-15 md:py-30 px-6 md:px-16 text-white overflow-hidden">
      <ProjectCursor active={isHovering} />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="font-parkinsans text-background text-5xl md:text-7xl tracking-tighter font-semibold pb-2 leading-none"
          >
            {projectData.heading}
          </motion.h2>
        </div>

        {/* Controls */}
        <div className="flex gap-4">
          <button onClick={prevProject} className="w-16 cursor-pointer h-16 rounded-full flex items-center justify-center bg-background text-black hover:bg-white hover:text-black transition-all duration-500">
            <ChevronLeft size={32} />
          </button>
          <button onClick={nextProject} className="w-16 cursor-pointer h-16 rounded-full flex items-center justify-center bg-background text-black hover:bg-white hover:text-black transition-all duration-500">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        {list.slice(0, 3).map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            isFirst={index === 0}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          />
        ))}
      </div>
    </section>
  );
}