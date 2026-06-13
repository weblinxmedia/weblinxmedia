// src/components/sections/Hero/Hero.tsx
import HeroHeading from "./HeroHeading";
import HeroTicker from "./HeroTicker";
import HeroParagraph from "./HeroParagraph";
import HeroAccentBlock from "./HeroAccentBlock";
import InteractiveDotGrid from "./InteractiveDotGrid";

export default function Hero({ canAnimate }: { canAnimate: boolean }) {
  return (
    <section className="relative  min-h-screen w-full px-6 md:px-16 pt-28 pb-12 flex justify-center items-center flex-col md:flex-row md:items-center overflow-hidden bg-white">
      {/* The Dotted Interactive Background */}
      <InteractiveDotGrid />

      <div className="w-full hero-sec md:w-[95%] flex flex-col z-[999] justify-center z-10 relative">
        <HeroHeading canAnimate={canAnimate} />
        <HeroTicker canAnimate={canAnimate} />
        <HeroParagraph canAnimate={canAnimate} />
      </div>
      
      <div className="z-10 relative">
        <HeroAccentBlock canAnimate={canAnimate} />
      </div>
    </section>
  );
}