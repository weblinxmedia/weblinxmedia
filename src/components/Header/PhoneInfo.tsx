import { Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";

export default function PhoneInfo() {
  return (
    <Link href={`tel:${siteConfig.phone}`} className="hidden md:flex link-hover2 items-center gap-2 text-sm font-parkinsans duration-300">
   <span>Let's Connect</span>
    </Link>
  );
}