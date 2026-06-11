// src/app/page.tsx
"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import Hero from "@/components/sections/Hero/Hero";
import ShowcaseSection from "@/components/sections/Showcase/ShowcaseSection";
import Clients from "@/components/sections/Clients/Clients";
import WhoAreWe from "@/components/sections/WhoAreWe/WhoAreWe";
import Brands from "@/components/sections/Brands/Brands";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import OurProcess from "@/components/sections/Process/OurProcess";
import AiSeoReimagined from "@/components/sections/AiSeoReimagined/AiSeoReimagined";
import KineticText from "@/components/sections/KineticText/KineticText";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import IndustriesSection from "@/components/sections/Industries/IndustriesSection";
import Projects from "@/components/sections/Projects/Projects";
import ContactSection from "@/components/sections/Contact/ContactSection";
import FAQ from "@/components/sections/FAQ/FAQ";
// import AiSeoSection from "@/components/sections/AiSeo/AiSeoSection";


export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Weblinx Media",          // 👈 this is what shows next to icon
    "url": "https://www.weblinxmedia.com",
  };
  return (
    // Make sure overflow-x-hidden is here so the perspective doesn't cause horizontal scrolling
    <main className="min-h-screen bg-white text-black overflow-x-hidden relative">
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader onComplete={() => setIsHeaderVisible(true)} />
      <Header isVisible={isHeaderVisible} />
      
      <Hero canAnimate={isHeaderVisible} />
       <ShowcaseSection />
       {/* <Clients /> */}
       <WhoAreWe/>
       <Brands />
       <WhyChooseUs />
       <OurProcess/>
       {/* <AiSeoReimagined/> */}
       <KineticText/>
       <Testimonials />
       <IndustriesSection/>
       <Projects />
       <ContactSection />
       <FAQ />
      {/* The 3D Scroll Triggered Section */}
    <div className="w-full h-70 ">
      <h1>new section</h1>
    </div>
    </main>
  );
}