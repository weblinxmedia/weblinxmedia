// src/app/layout.tsx
import type { Metadata } from "next";
import { Parkinsans, Sora, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll"; // <-- Import the new component
import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from 'next/font/local'
import Header from "@/components/Header/Header";
import Footer from "@/components/sections/Footer/Footer";
import Script from 'next/script'
const parkinsans = Parkinsans({

  subsets: ["latin"],
  variable: "--font-parkinsans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const mediasans = localFont({
  src: [
    { path: './fonts/mediasans.ttf' }
  ],
  display: 'swap',
  variable: '--font-mediasans',
})
const eula = localFont({
  src: [
    { path: './fonts/eula.ttf' }
  ],
  display: 'swap',
  variable: '--font-eula',
})
const outfit = Sora({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});
// app/layout.tsx
// app/layout.tsx
// app/layout.tsx
// import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.weblinxmedia.com"),
  applicationName: 'Weblinx Media',
  title: {
    default: "Weblinx Media | Best Full Stack Web Development Agency",
    template: "%s | Weblinx Media",
  },
  description: "We are a results-driven web development & digital marketing agency committed to helping brands grow through SEO, Social Media, and Web Design.",
  keywords: ["Weblinx Media", "Weblinx", "Marketing Agencies near me", "Website development", "Website Design", "Marketing agencies in Lahore"],
  authors: [{ name: "Ali Imran" }],
  openGraph: {
    title: "Weblinx Media | Best Full Stack Web Development Agency",
    description: "We are a results-driven web development & digital marketing agency committed to helping brands grow through SEO, Social Media, and Web Design.",
    url: "https://www.weblinxmedia.com",
    type: "website",

  },

  verification: {
    google: "2TonKZSec1uToGHRforVHsvwbKdFVlivM4J8OD0lc9g", // paste your code here
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3916588355555529"
          crossOrigin="anonymous" strategy='afterInteractive' />
      </head>
      {/* Added overflow-x-hidden to body to permanently prevent horizontal scrollbars globally */}
      <body className={`${parkinsans.variable} ${eula.variable} ${outfit.variable} ${mediasans.variable} ${montserrat.variable} bg-white text-black transition-colors duration-300 overflow-x-hidden`}>
        <ThemeProvider>
          {/* Wrap the children with SmoothScroll */}
          <SmoothScroll>
            {/* <Header /> */}
            {children}
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-8FKF0T0QMM" />
      </body>
    </html>
  );
}