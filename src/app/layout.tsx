// src/app/layout.tsx
import type { Metadata } from "next";
import { Parkinsans, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll"; // <-- Import the new component
import { GoogleAnalytics } from "@next/third-parties/google";
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
// app/layout.tsx
// app/layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        
      </head>
      {/* Added overflow-x-hidden to body to permanently prevent horizontal scrollbars globally */}
      <body className={`${parkinsans.variable} ${outfit.variable} bg-white text-black transition-colors duration-300 overflow-x-hidden`}>
        <ThemeProvider>
          {/* Wrap the children with SmoothScroll */}
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-8FKF0T0QMM"/>
      </body>
    </html>
  );
}