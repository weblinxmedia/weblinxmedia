// src/app/layout.tsx
import type { Metadata } from "next";
import { Parkinsans, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll"; // <-- Import the new component

const parkinsans = Parkinsans({
  subsets: ["latin"],
  variable: "--font-parkinsans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Sora({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Weblinx Media | Premium Web Design & Development",
  description: "Premium website design, development, and social media marketing agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Added overflow-x-hidden to body to permanently prevent horizontal scrollbars globally */}
      <body className={`${parkinsans.variable} ${outfit.variable} bg-white text-black transition-colors duration-300 overflow-x-hidden`}>
        <ThemeProvider>
          {/* Wrap the children with SmoothScroll */}
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}