// src/components/sections/Footer/Footer.tsx
"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteConfig, footerData } from "@/config/siteConfig";
import FooterLink from "./FooterLink";
import {Phone, Mail} from 'lucide-react';
import Link from "next/link";

const ease = [0.76, 0, 0.24, 1] as const;
const currentYear = new Date().getFullYear();
/* ─────────────────────────────────────────────
   Circuit Board SVG Art
───────────────────────────────────────────── */
function CircuitArt() {
  return (
    <svg
      viewBox="0 0 560 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[89%] h-full"
      aria-hidden
    >
      {/* ── Core 2×2 outer grid ── */}
      <rect x="190" y="60"  width="130" height="130" stroke="white" strokeWidth="1.2" />
      <rect x="320" y="60"  width="130" height="130" stroke="white" strokeWidth="1.2" />
      <rect x="190" y="190" width="130" height="130" stroke="white" strokeWidth="1.2" />
      <rect x="320" y="190" width="130" height="130" stroke="white" strokeWidth="1.2" />

      {/* ── Inner grid subdivisions ── */}
      {/* top-left quadrant verticals */}
      <line x1="233" y1="60"  x2="233" y2="190" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="277" y1="60"  x2="277" y2="190" stroke="white" strokeWidth="0.5" opacity="0.45" />
      {/* top-left quadrant horizontals */}
      <line x1="190" y1="103" x2="320" y2="103" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="190" y1="147" x2="320" y2="147" stroke="white" strokeWidth="0.5" opacity="0.45" />
      {/* top-right quadrant verticals */}
      <line x1="363" y1="60"  x2="363" y2="190" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="407" y1="60"  x2="407" y2="190" stroke="white" strokeWidth="0.5" opacity="0.45" />
      {/* top-right quadrant horizontals */}
      <line x1="320" y1="103" x2="450" y2="103" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="320" y1="147" x2="450" y2="147" stroke="white" strokeWidth="0.5" opacity="0.45" />
      {/* bottom-left */}
      <line x1="233" y1="190" x2="233" y2="320" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="277" y1="190" x2="277" y2="320" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="190" y1="233" x2="320" y2="233" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="190" y1="277" x2="320" y2="277" stroke="white" strokeWidth="0.5" opacity="0.45" />
      {/* bottom-right */}
      <line x1="363" y1="190" x2="363" y2="320" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="407" y1="190" x2="407" y2="320" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="320" y1="233" x2="450" y2="233" stroke="white" strokeWidth="0.5" opacity="0.45" />
      <line x1="320" y1="277" x2="450" y2="277" stroke="white" strokeWidth="0.5" opacity="0.45" />

      {/* ── Overlapping rotated rectangles (star burst core) ── */}
      <rect x="225" y="95"  width="150" height="150" stroke="white" strokeWidth="0.9" opacity="0.35" transform="rotate(12 300 170)" />
      <rect x="238" y="108" width="124" height="124" stroke="white" strokeWidth="0.7" opacity="0.22" transform="rotate(26 300 170)" />
      <rect x="251" y="121" width="98"  height="98"  stroke="white" strokeWidth="0.5" opacity="0.14" transform="rotate(41 300 170)" />

      {/* ── Solder pad corners ── */}
      <rect x="183" y="53"  width="14" height="14" stroke="white" strokeWidth="1.2" />
      <rect x="443" y="53"  width="14" height="14" stroke="white" strokeWidth="1.2" />
      <rect x="183" y="313" width="14" height="14" stroke="white" strokeWidth="1.2" />
      <rect x="443" y="313" width="14" height="14" stroke="white" strokeWidth="1.2" />
      {/* centre junction pads */}
      <rect x="313" y="53"  width="14" height="14" stroke="white" strokeWidth="1"   fill="white" fillOpacity="0.2" />
      <rect x="313" y="313" width="14" height="14" stroke="white" strokeWidth="1"   fill="white" fillOpacity="0.2" />

      {/* ── Traces left ── */}
      <line x1="0"   y1="125" x2="190" y2="125" stroke="white" strokeWidth="1" />
      <line x1="0"   y1="255" x2="190" y2="255" stroke="white" strokeWidth="1" />
      {/* L-branch up */}
      <line x1="90"  y1="0"   x2="90"  y2="125" stroke="white" strokeWidth="1" />
      {/* L-branch down */}
      <line x1="150" y1="255" x2="150" y2="440" stroke="white" strokeWidth="1" />

      {/* ── Traces right ── */}
      <line x1="450" y1="125" x2="560" y2="125" stroke="white" strokeWidth="1" />
      <line x1="450" y1="255" x2="560" y2="310" stroke="white" strokeWidth="1" />
      <line x1="450" y1="190" x2="560" y2="190" stroke="white" strokeWidth="1" opacity="0.4" />

      {/* ── Traces up ── */}
      <line x1="255" y1="0"   x2="255" y2="60"  stroke="white" strokeWidth="1" />
      <line x1="385" y1="0"   x2="385" y2="60"  stroke="white" strokeWidth="1" />
      <line x1="320" y1="0"   x2="320" y2="60"  stroke="white" strokeWidth="1" opacity="0.4" />

      {/* ── Traces down ── */}
      <line x1="255" y1="320" x2="255" y2="440" stroke="white" strokeWidth="1" />
      <line x1="385" y1="320" x2="385" y2="440" stroke="white" strokeWidth="1" />
      <line x1="450" y1="320" x2="490" y2="440" stroke="white" strokeWidth="1" opacity="0.5" />

      {/* ── Node dots ── */}
      <circle cx="190" cy="125" r="3.5" fill="white" />
      <circle cx="190" cy="255" r="3.5" fill="white" />
      <circle cx="90"  cy="125" r="3"   fill="white" />
      <circle cx="150" cy="255" r="3"   fill="white" />
      <circle cx="450" cy="125" r="3.5" fill="white" />
      <circle cx="450" cy="255" r="3.5" fill="white" />
      <circle cx="450" cy="190" r="2.5" fill="white" opacity="0.5" />
      <circle cx="255" cy="60"  r="3.5" fill="white" />
      <circle cx="385" cy="60"  r="3.5" fill="white" />
      <circle cx="320" cy="60"  r="2.5" fill="white" opacity="0.5" />
      <circle cx="255" cy="320" r="3.5" fill="white" />
      <circle cx="385" cy="320" r="3.5" fill="white" />
      <circle cx="150" cy="320" r="3"   fill="white" opacity="0.6" />

      {/* ── Vanishing edge dots ── */}
      <circle cx="0"   cy="125" r="4" fill="white" opacity="0.25" />
      <circle cx="0"   cy="255" r="4" fill="white" opacity="0.25" />
      <circle cx="90"  cy="0"   r="4" fill="white" opacity="0.25" />
      <circle cx="255" cy="0"   r="4" fill="white" opacity="0.25" />
      <circle cx="385" cy="0"   r="4" fill="white" opacity="0.25" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Main Footer
───────────────────────────────────────────── */
export default function Footer() {
  const [agreed, setAgreed] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <footer ref={ref} className="relative w-full bg-[#050505] text-white overflow-hidden">

      {/* ═══════════════════════════════════════
          CIRCUIT ART — floats upper-right
      ════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : {}}
        transition={{ duration: 2, ease }}
        className="pointer-events-none absolute right-0 top-0 w-fit flex items-center justify-end h-[420px]"
        aria-hidden
      >
        <CircuitArt />
        <img src="/images/logo.webp" alt="Weblinx Media" className="absolute top-30 right-35 z-30 " width={'130'}/>
        {/* fade mask on left edge so it blends into content */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
        {/* fade mask on bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent" />
      </motion.div>

      {/* ═══════════════════════════════════════
          MAIN BODY
      ════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14">

        {/* ── HEADLINE ── */}
        <div className="pt-20 ">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="font-outfit text-[14px] tracking-[0.01em] text-white/40 mb-4"
          >
            {siteConfig.companyName} — Digital Agency
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.18 }}
            className="font-parkinsans font-semibold w-[70%] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(3.2rem, 3.5vw, 3rem)" }}
          >
            Every Vision
            Needs An
            <span className="text-primary"> Architect</span>
          </motion.h2>
        </div>
        <div className="w-full md:w-[60%] mt-5">
     <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <p className="font-parkinsans text-[12px] tracking-[0.05em] text-white/38">
              Subscribe to our Newsletter --
            </p>

            {/* pill input */}
            <div className="flex items-center gap-2 border border-white/15 rounded-full pl-5 pr-1.5 py-1.5 hover:border-white/30 focus-within:border-primary/35 transition-colors duration-300">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent flex-grow outline-none font-parkinsans text-[11px] tracking-widest text-white placeholder:text-white/20 min-w-0"
              />
              <button
                disabled={!agreed}
                aria-label="Subscribe"
                className="w-9 h-9 shrink-0 rounded-full border border-white/20 flex items-center justify-center
                           hover:bg-primary hover:border-primary hover:text-black
                           disabled:opacity-25 disabled:cursor-not-allowed
                           transition-all duration-300"
              >
                {/* right arrow */}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 6.5H11.5M11.5 6.5L6.5 1.5M11.5 6.5L6.5 11.5"
                    stroke="currentColor" strokeWidth="1.4"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* checkbox */}
            <label
              className="flex items-center gap-2.5 cursor-pointer group select-none"
              onClick={() => setAgreed((v) => !v)}
            >
              <div
                className={`w-3.5 h-3.5 border rounded-[2px] flex items-center justify-center transition-all duration-200 shrink-0
                  ${agreed ? "bg-primary border-primary" : "border-white/18 group-hover:border-white/40"}`}
              >
                {agreed && (
                  <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                    <path d="M1 2.5L2.5 4L6 1" stroke="#050505" strokeWidth="1.3"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="font-outfit text-[10px] text-white/20 group-hover:text-white/45 transition-colors tracking-wide">
                I agree to receive marketing emails
              </span>
            </label>
          </motion.div>
          </div>
        {/* ── LOWER GRID: newsletter | pages | services | resources+socials ── */}
        <div className=" flex flex-col w-full md:w-[100%] mx-auto md:flex-row justify-between gap-x-20 gap-y-12 pb-14 border-b mt-25 border-white/[0.06]">

          {/* Newsletter */}
     
   {/* Services column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.46 }}
            className="flex flex-col w-fit md:w-[330px] gap-3"
          >
            <p className="font-parkinsans text-[13px] tracking-[0.03em] text-background/60 mb-1">
              / Info
            </p>

            <div className="w-full flex flex-col items-start justify-start pr-5">
                <img src="/images/logo2.png" width={'100'} className="brightness-0 invert-[90%]" alt="Weblinx Media" />
                <span className="text-white/40 text-[14px] my-5 font-parkinsans leading-[1.2]">Weblinx Media is a full-service digital marketing agency. Attract, Convert and Close more leads online and get better results with us.</span>
           <div className="flex flex-col  gap-1">
                    <div className="flex items-center gap-3 text-white/40 hover:text-acid-lime transition-colors cursor-pointer">
                        <Phone size={16} className="text-background" />
                        <span className="font-outfit text-[14px]">{siteConfig.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 hover:text-acid-lime transition-colors cursor-pointer">
                        <Mail size={16} className="text-background" />
                        <span className="font-outfit text-[14px]">{siteConfig.mail}</span>
                    </div>
                </div>
            </div>
               </motion.div>
          {/* Pages column */}
         
   <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.46 }}
            className="flex flex-col gap-3"
          >
            <p className="font-parkinsans text-[13px] tracking-[0.03em] text-background/60 mb-1">
              / Services
            </p>
            {siteConfig.services.map((s) => (
              <FooterLink key={s.name} name={s.name} href={s.href} />
            ))}
          </motion.div>
       
 <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.38 }}
            className="flex flex-col gap-3"
          >
            <p className="font-parkinsans text-[13px] tracking-[0.03em] text-background/60 mb-1">
              / Pages
            </p>
            {siteConfig.navLinks.map((l) => (
              <FooterLink key={l.name} name={l.name} href={l.href} />
            ))}
          </motion.div>
          {/* Resources + Connect column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.54 }}
            className="flex flex-col gap-3"
          >
            <p className="font-parkinsans text-[13px] tracking-[0.03em] text-background/60 mb-1">
              / Resources
            </p>
            {footerData.resources.map((r) => (
              <FooterLink key={r.name} name={r.name} href={r.href} />
            ))}

            {/* <div className="h-[1px] bg-white/[0.05] my-3" /> */}

            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: 0.54 }}
            className="flex flex-col gap-3"
          >

<p className="font-parkinsans text-[13px] tracking-[0.03em] text-background/60 mb-1">
              / Connect
            </p>
            {footerData.socials.map((s) => (
              <FooterLink key={s.name} name={s.name} href={s.href} showArrow />
            ))}
          </motion.div>
             {/* Services column */}
       
        </div>

        {/* Legal links row (above bottom strip) */}
        <div className="flex flex-wrap justify-center items-center gap-2 py-6">
            <div className="flex items-center text-[14px] text-white/55 font-parkinsans gap-2">
              ©{currentYear} - All rights reserved by <Link href='/' className="underline text-background/90">Weblinx Media</Link> |
            </div>
            <div className="flex flex-wrap items-center gap-2">
          {footerData.legal.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="text-[14px] font-parkinsans  text-white/55 hover:text-background/90 transition-colors duration-300"
            >
              {l.name}
            </Link>
          ))}</div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          BOTTOM STRIP — social | location | ©
      ════════════════════════════════════════ */}
   

    </footer>
  );
}