// src/app/page.tsx

"use client";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Weblinx Media",
  description: "Learn about the team behind Weblinx Media...",
};
export default function About() {
//   const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  return (
    // Make sure overflow-x-hidden is here so the perspective doesn't cause horizontal scrolling
  <main className="min-h-screen flex justify-center items-center w-full bg-white text-black overflow-x-hidden relative">
      {/* The 3D Scroll Triggered Section */}
     <div className="font-parkinsans font-bold text-4xl">
        (About Page) Not Live Yet...
    </div>
    </main>
  );
}