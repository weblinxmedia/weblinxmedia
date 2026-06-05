// src/components/Header/Logo.tsx
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Logo() {
  return (
    <Link href="/" className=" left-1/2 top-2 bg-white font-parkinsans text-xl md:text-2xl font-bold tracking-tight text-center">
      <img src="/images/logo2.png" className="w-23 " alt={siteConfig.logo} />
    </Link>
  );
}