// src/components/sections/Process/ImageGrid.tsx
import Image from "next/image";

export default function ImageGrid() {
  return (
    <div className="relative w-full h-[600px] md:h-full flex items-center justify-center">

      {/* ── Main center image ──────────────────────────────────────────── */}
      <div
        className="
          relative w-[72%] h-[65%] z-10
          rounded-2xl overflow-hidden
          border border-white/[0.08]
          shadow-[0_32px_80px_rgba(0,0,0,0.6)]
        "
      >
        <Image
          src="/images/workspace.webp"
          alt="Our workspace"
          fill
          className="object-cover"
        />
        {/* Subtle inner vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* ── Corner label badge ─────────────────────────────────────────── */}
      <div className="absolute bottom-[18%] left-[4%] z-20 bg-background text-black font-parkinsans font-bold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
        Est. 2024
      </div>

      {/* ── Parallax accent: top-right ─────────────────────────────────── */}
      <div
        className="
          parallax-img absolute top-8 right-0
          w-52 h-44 md:w-84 md:h-60
          rounded-xl overflow-hidden
          border border-white/[0.1]
          shadow-[0_16px_40px_rgba(0,0,0,0.5)]
          will-change-transform
        "
      >
        <Image
          src="/images/process1.jpg"
          alt="Process step"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>

      {/* ── Parallax accent: bottom-center-right ───────────────────────── */}
      <div
        className="
          parallax-img absolute bottom-4 right-1/4
          w-24 h-32 md:w-36 md:h-52
          rounded-xl overflow-hidden
          border border-white/[0.1]
          shadow-[0_16px_40px_rgba(0,0,0,0.5)]
          will-change-transform
        "
      >
        <Image
          src="/images/process2.png"
          alt="Process step"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* ── Parallax accent: mid-right ─────────────────────────────────── */}
      <div
        className="
          parallax-img absolute bottom-1/4 -right-8
          w-28 h-36 md:w-40 md:h-52
          rounded-xl overflow-hidden
          border border-white/[0.1]
          shadow-[0_16px_40px_rgba(0,0,0,0.5)]
          will-change-transform
        "
      >
        <Image
          src="/images/process3.jpeg"
          alt="Process step"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>

      {/* ── Decorative floating dot grid ───────────────────────────────── */}
      <div
        className="absolute top-0 left-0 w-24 h-24 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-background) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />
      <div
        className="absolute bottom-12 right-0 w-20 h-20 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-background) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />
    </div>
  );
}