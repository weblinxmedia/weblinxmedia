// src/app/privacy/page.tsx
import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Weblinx Media",
  description: "Read the Privacy Policy of Weblinx Media to understand how we collect, use, store, protect, and process your personal data.",
  robots: "index, follow",
  alternates: {
    canonical: "https://weblinxmedia.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Weblinx Media",
    description: "Read the Privacy Policy of Weblinx Media to understand how we collect, use, store, protect, and process your personal data.",
    url: "https://weblinxmedia.com/privacy",
    siteName: "Weblinx Media",
    type: "website",
  },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://weblinxmedia.com/privacy#webpage",
    "name": "Privacy Policy | Weblinx Media",
    "url": "https://weblinxmedia.com/privacy",
    "description": "Read the Privacy Policy of Weblinx Media to understand how we collect, use, store, protect, and process your personal data.",
    "dateModified": "2026-07-15T15:42:28+05:00",
    "publisher": {
      "@type": "Organization",
      "name": "Weblinx Media",
      "url": "https://weblinxmedia.com"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Standard Header with Visibility Enabled */}
      <Header isVisible={true} />
      <PrivacyContent />
    </>
  );
}
