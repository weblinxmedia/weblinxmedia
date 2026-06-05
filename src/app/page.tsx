// src/app/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero/Hero";
import ShowcaseSection from "@/components/sections/Showcase/ShowcaseSection";

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  return (
    // Make sure overflow-x-hidden is here so the perspective doesn't cause horizontal scrolling
    <main className="min-h-screen bg-white text-black overflow-x-hidden relative">
      <Preloader onComplete={() => setIsHeaderVisible(true)} />
      <Header isVisible={isHeaderVisible} />
      
      <Hero canAnimate={isHeaderVisible} />
       <ShowcaseSection />
      {/* The 3D Scroll Triggered Section */}
    <div className="w-full h-70 ">
      <h1>new section</h1>
    </div>
    </main>
  );
}