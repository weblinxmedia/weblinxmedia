// src/app/privacy/PrivacyContent.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";

// Accent Color: #FFAD14 (Vibrant yellow-orange from site design)

const WhatsAppIcon = () => (
  <svg
    className="w-4.5 h-4.5 fill-current inline-block mr-1 align-middle text-[#FFAD14]"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.37 5.028L2 22l5.13-1.346a9.924 9.924 0 0 0 4.881 1.28h.005c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.037-5.176-2.924-7.062A9.928 9.928 0 0 0 12.012 2zm5.72 14.16c-.313.882-1.534 1.624-2.126 1.705-.592.081-1.343.14-3.864-.863-3.218-1.282-5.267-4.537-5.428-4.75-.162-.214-1.302-1.724-1.302-3.29 0-1.568.815-2.34 1.107-2.645.293-.306.638-.383.85-.383.214 0 .426.002.612.011.192.01.45.034.69.605.25.592.85 2.057.925 2.21.074.151.124.327.024.524-.099.198-.148.32-.297.494-.149.173-.313.387-.448.519-.149.144-.305.302-.132.597.173.295.768 1.259 1.648 2.042.12.106.223.167.332.222.887.697 1.568.798 1.956.632.388-.166.887-.714 1.011-1.011.124-.297.247-.253.46-.173.214.08 1.353.636 1.583.75.23.114.383.17.439.266.056.096.056.555-.257 1.437z" />
  </svg>
);

const SectionIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "introduction":
      return (
        <svg className="w-6 h-6 text-[#FFAD14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "scope":
      return (
        <svg className="w-6 h-6 text-[#FFAD14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case "collection":
      return (
        <svg className="w-6 h-6 text-[#FFAD14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case "storage":
      return (
        <svg className="w-6 h-6 text-[#FFAD14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case "rights":
      return (
        <svg className="w-6 h-6 text-[#FFAD14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "cookies":
      return (
        <svg className="w-6 h-6 text-[#FFAD14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "us-privacy":
      return (
        <svg className="w-6 h-6 text-[#FFAD14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V14a2 2 0 012-2h.055M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      );
    case "marketing":
      return (
        <svg className="w-6 h-6 text-[#FFAD14]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function PrivacyContent() {
  const [activeId, setActiveId] = useState<string>("introduction");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const tocItems = [
    { id: "introduction", label: "1. Introduction & Org Info" },
    { id: "scope", label: "2. Scope & Application" },
    { id: "collection", label: "3. Data Collection & Processing" },
    { id: "storage", label: "4. Data Storage & Protection" },
    { id: "rights", label: "5. User Rights & Choices" },
    { id: "cookies", label: "6. Cookies & Tracking" },
    { id: "us-privacy", label: "7. US Privacy Laws" },
    { id: "marketing", label: "8. Direct Marketing" },
  ];

  useEffect(() => {
    // 1. Table of Contents active link observer
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    // 2. Scroll event for Back-to-Top visibility
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 110; // offset to not hide headings under sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[#FAF9F6] min-h-screen font-outfit select-text text-neutral-800 antialiased pt-[90px]">
      {/* Immersive Dark Header */}
      <header className="relative w-full bg-[#050505] text-white pt-24 pb-20 overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black opacity-80" />
        
        {/* Glow effect matching yellow brand tone */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FFAD14] rounded-full blur-[160px] opacity-10" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-14 lg:px-16 flex flex-col items-start">
          <span className="text-xs text-[#FFAD14] uppercase tracking-[0.2em] font-parkinsans font-bold mb-3">
            LEGAL COMPLIANCE
          </span>
          <h1 className="font-parkinsans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-white max-w-4xl">
            Privacy Policy
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFAD14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFAD14]"></span>
            </span>
            <span className="inline-block bg-neutral-900 border border-neutral-800 px-3.5 py-1.5 rounded-full text-xs text-neutral-400 font-parkinsans font-medium tracking-wide">
              Effective Date: 15/07/2026, 15:42:28
            </span>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-14 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          
          {/* Sticky Left Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32 hidden lg:flex flex-col gap-6 pl-2 py-4" aria-label="Table of contents">
              <span className="font-parkinsans text-[11px] uppercase tracking-[0.15em] text-neutral-400 font-bold border-b border-neutral-200/60 pb-2">
                Table of Contents
              </span>
              <nav>
                <ul className="flex flex-col gap-2 font-parkinsans text-[13px] leading-relaxed">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleTocClick(e, item.id)}
                        className={`block py-2 pl-3 border-l-2 transition-all duration-300 ${
                          activeId === item.id
                            ? "border-[#FFAD14] text-[#FFAD14] font-semibold translate-x-1"
                            : "border-neutral-200 text-neutral-400 hover:text-neutral-600 hover:border-neutral-300"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Policy Document Content */}
          <article className="lg:col-span-3 space-y-12">
            
            {/* 1. Introduction and organizational info */}
            <section
              id="introduction"
              className="scroll-mt-32 bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#FFAD14]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-50 rounded-lg">
                  <SectionIcon type="introduction" />
                </div>
                <h2 className="font-parkinsans font-bold text-2xl md:text-3xl text-neutral-900 tracking-tight">
                  Introduction and organizational info
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-[16px] md:text-[17px]">
                <p>
                  We, at Weblinx Media, are dedicated to serving our customers and contacts to the best of our abilities. Part of our commitment involves the responsible management of personal information collected through our website{" "}
                  <a href="https://weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                    weblinxmedia.com
                  </a>
                  , and any related interactions. Our primary goals in processing this information include:
                </p>
                <ul className="space-y-3.5 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Enhancing the user experience on our platform by understanding customer needs and preferences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Providing timely support and responding to inquiries or service requests.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Improving our products and services to meet the evolving demands of our users.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Conducting necessary business operations, such as billing and account management.</span>
                  </li>
                </ul>
                <p>
                  It is our policy to process personal information with the utmost respect for privacy and security. We adhere to all relevant regulations and guidelines to ensure that the data we handle is protected against unauthorized access, disclosure, alteration, and destruction. Our practices are designed to safeguard the confidentiality and integrity of your personal information, while enabling us to deliver the services you trust us with.
                </p>
                <p>
                  We do not have a designated Data Protection Officer (DPO) but remain fully committed to addressing your privacy concerns. Should you have any questions or require further information about how we manage personal information, please feel free to contact us at{" "}
                  <a href="mailto:admin@weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                    admin@weblinxmedia.com
                  </a>{" "}
                  or via WhatsApp at{" "}
                  <a
                    href="https://wa.me/19014684352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFAD14] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <WhatsAppIcon />
                    +1 (901) 468-4352
                  </a>
                  .
                </p>
                <p>
                  Your privacy is our priority. We are committed to processing your personal information transparently and with your safety in mind. This commitment extends to our collaboration with third-party services that may process personal information on our behalf, such as in the case of sending invoices. Rest assured, all activities are conducted in strict compliance with applicable privacy laws.
                </p>
              </div>
            </section>

            {/* 2. Scope and application */}
            <section
              id="scope"
              className="scroll-mt-32 bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#FFAD14]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-50 rounded-lg">
                  <SectionIcon type="scope" />
                </div>
                <h2 className="font-parkinsans font-bold text-2xl md:text-3xl text-neutral-900 tracking-tight">
                  Scope and application
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-[16px] md:text-[17px]">
                <p>
                  Our privacy policy is designed to protect the personal information of all our stakeholders, including website visitors, registered users, and customers. Whether you are just browsing our website{" "}
                  <a href="https://weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                    weblinxmedia.com
                  </a>
                  , using our services as a registered user, or engaging with us as a valued customer, we ensure that your personal data is processed with the highest standards of privacy and security. This policy outlines our practices and your rights related to personal information.
                </p>
              </div>
            </section>

            {/* 3. Data collection and processing */}
            <section
              id="collection"
              className="scroll-mt-32 bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#FFAD14]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-50 rounded-lg">
                  <SectionIcon type="collection" />
                </div>
                <h2 className="font-parkinsans font-bold text-2xl md:text-3xl text-neutral-900 tracking-tight">
                  Data collection and processing
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-[16px] md:text-[17px]">
                <p>
                  Our commitment to transparency and data protection extends to how we collect and use your personal information. We gather personal data through various interactions, including but not limited to, when you utilize our services or products such as Marketing, Website Development, Video Editing, or directly provide information to us.
                </p>
                
                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Types of Personal Information We Process
                </h3>
                <ul className="space-y-3.5 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>First and last name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Email address and/or Phone number</span>
                  </li>
                </ul>

                <p className="pt-2">
                  Please note, that we only process information that is essential for delivering our services, complying with legal obligations, or enhancing your user experience. Your privacy is paramount, and we are dedicated to handling your personal information responsibly and in accordance with all applicable laws.
                </p>
                <p>
                  At Weblinx Media, we believe in using personal information responsibly and ethically. The data we collect serves multiple purposes, all aimed at enhancing the services we offer and ensuring the highest level of satisfaction among our users, customers, and employees.
                </p>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Key Purposes of Data Collection
                </h3>
                <ul className="space-y-3.5 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Authentication and security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Research and development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Marketing and advertising</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>Improving public health</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <span>User feedback and satisfaction</span>
                  </li>
                </ul>

                <p className="pt-2">
                  Your privacy is our priority. We process your personal information transparently and in accordance with your preferences and applicable privacy laws. We are committed to ensuring that your data is used solely for the purposes for which it was collected and in ways that you have authorized.
                </p>
              </div>
            </section>

            {/* 4. Data storage and protection */}
            <section
              id="storage"
              className="scroll-mt-32 bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#FFAD14]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-50 rounded-lg">
                  <SectionIcon type="storage" />
                </div>
                <h2 className="font-parkinsans font-bold text-2xl md:text-3xl text-neutral-900 tracking-tight">
                  Data storage and protection
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-[16px] md:text-[17px]">
                <div>
                  <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mb-2.5 border-b border-neutral-100 pb-2">
                    Data storage
                  </h3>
                  <p>
                    Personal information is stored in secure servers located in our hosting infrastructure. For services that require international data transfer, we ensure that such transfers comply with all applicable laws and maintain data protection standards equivalent to those in our primary location.
                  </p>
                </div>

                <div>
                  <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mb-2.5 border-b border-neutral-100 pb-2">
                    Data hosting partners
                  </h3>
                  <p>
                    We partner with reputable data hosting providers committed to using state-of-the-art security measures. These partners are selected based on their adherence to stringent data protection standards.
                  </p>
                </div>

                <div>
                  <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mb-2.5 border-b border-neutral-100 pb-2">
                    Data protection measures
                  </h3>
                  <p>
                    <strong>Security audits and monitoring:</strong> Regular security audits are conducted to identify and remediate potential vulnerabilities. We also monitor our systems for unusual activities to prevent unauthorized access.
                  </p>
                </div>

                <div>
                  <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mb-2.5 border-b border-neutral-100 pb-2">
                    Data processing agreements
                  </h3>
                  <p>
                    When we share your data with third-party service providers, we do so under the protection of Data Processing Agreements (DPAs) that ensure your information is managed in accordance with GDPR and other relevant data protection laws. These agreements mandate that third parties implement adequate technical and organizational measures to ensure the security of your data.
                  </p>
                </div>

                <div>
                  <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mb-2.5 border-b border-neutral-100 pb-2">
                    Transparency and control
                  </h3>
                  <p>
                    We believe in transparency and providing you with control over your personal information. You will always be informed about any significant changes to our sharing practices, and where applicable, you will have the option to consent to such changes.
                  </p>
                </div>

                <p className="pt-4 border-t border-neutral-100">
                  Your trust is important to us, and we strive to ensure that your personal information is disclosed only in accordance with this policy and when there is a justified reason to do so. For any queries or concerns about how we share and disclose personal information, please reach out to us at{" "}
                  <a href="mailto:admin@weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                    admin@weblinxmedia.com
                  </a>{" "}
                  or via WhatsApp at{" "}
                  <a
                    href="https://wa.me/19014684352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFAD14] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <WhatsAppIcon />
                    +1 (901) 468-4352
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* 5. User rights and choices */}
            <section
              id="rights"
              className="scroll-mt-32 bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#FFAD14]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-50 rounded-lg">
                  <SectionIcon type="rights" />
                </div>
                <h2 className="font-parkinsans font-bold text-2xl md:text-3xl text-neutral-900 tracking-tight">
                  User rights and choices
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-[16px] md:text-[17px]">
                <p>
                  At Weblinx Media, we recognize and respect your rights regarding your personal information, in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We are committed to ensuring you can exercise your rights effectively. Below is an overview of your rights and how you can exercise them:
                </p>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Your Rights
                </h3>
                <ul className="space-y-4 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0 animate-pulse" />
                    <div>
                      <strong>Right of access (Art. 15 GDPR):</strong> You have the right to request access to the personal information we hold about you and to obtain information about how we process it.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Right to rectification (Art. 16 GDPR):</strong> If you believe that any personal information we hold about you is incorrect or incomplete, you have the right to request its correction or completion.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Right to erasure (&apos;right to be forgotten&apos;) (Art. 17 GDPR):</strong> You have the right to request the deletion of your personal information when it is no longer necessary for the purposes for which it was collected, among other circumstances.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Right to restriction of processing (Art. 18 GDPR):</strong> You have the right to request that we restrict the processing of your personal information under certain conditions.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Right to data portability (Art. 20 GDPR):</strong> You have the right to receive your personal information in a structured, commonly used, and machine-readable format and to transmit those data to another controller.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Right to object (Art. 21 GDPR):</strong> You have the right to object to the processing of your personal information, under certain conditions, including processing for direct marketing.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Right to withdraw consent (Art. 7(3) GDPR):</strong> Where the processing of your personal information is based on your consent, you have the right to withdraw that consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Right to lodge a complaint (Art. 77 GDPR):</strong> You have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable data protection laws.
                    </div>
                  </li>
                </ul>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Exercising Your Rights
                </h3>
                <p>
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:admin@weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                    admin@weblinxmedia.com
                  </a>{" "}
                  or via WhatsApp at{" "}
                  <a
                    href="https://wa.me/19014684352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFAD14] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <WhatsAppIcon />
                    +1 (901) 468-4352
                  </a>
                  . We will respond to your request in accordance with applicable data protection laws and within the timeframes stipulated by those laws. Please note, in some cases, we may need to verify your identity as part of the process to ensure the security of your personal information.
                </p>
                <p>
                  We are committed to facilitating the exercise of your rights and to ensuring you have full control over your personal information. If you have any questions or concerns about how your personal information is handled, please do not hesitate to get in touch with us.
                </p>
              </div>
            </section>

            {/* 6. Cookies and tracking technologies */}
            <section
              id="cookies"
              className="scroll-mt-32 bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#FFAD14]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-50 rounded-lg">
                  <SectionIcon type="cookies" />
                </div>
                <h2 className="font-parkinsans font-bold text-2xl md:text-3xl text-neutral-900 tracking-tight">
                  Cookies and tracking technologies
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-[16px] md:text-[17px]">
                <p>
                  At Weblinx Media, we value your privacy and are committed to being transparent about our use of cookies and other tracking technologies on our website{" "}
                  <a href="https://weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                    weblinxmedia.com
                  </a>
                  . These technologies play a crucial role in ensuring the smooth operation of our digital platforms, enhancing your user experience, and providing insights that help us improve.
                </p>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Understanding Cookies and Tracking Technologies
                </h3>
                <p>
                  Cookies are small data files placed on your device that enable us to remember your preferences and collect information about your website usage. Tracking technologies, such as web beacons and pixel tags, help us understand how you interact with our site and which pages you visit.
                </p>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  How We Use These Technologies
                </h3>
                <ul className="space-y-4 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Essential cookies:</strong> Necessary for the website&apos;s functionality, such as authentication and security. They do not require consent.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Performance and analytics cookies:</strong> These collect information about how visitors use our website, which pages are visited most frequently, and if error messages are received from web pages. These cookies help us improve our website.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Functional cookies:</strong> Enable the website to provide enhanced functionality and personalization, like remembering your preferences.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Advertising and targeting cookies:</strong> Used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of the advertising campaign.
                    </div>
                  </li>
                </ul>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Your Choices and Consent
                </h3>
                <p>
                  Upon your first visit, our website will present you with a cookie consent banner, where you can:
                </p>
                <ul className="space-y-2.5 pl-4 list-decimal">
                  <li>
                    <strong className="text-neutral-850">Accept all cookies:</strong> Consent to the use of all cookies and tracking technologies.
                  </li>
                  <li>
                    <strong className="text-neutral-850">Reject non-essential cookies:</strong> Only essential cookies will be used to provide you with necessary website functions.
                  </li>
                  <li>
                    <strong className="text-neutral-850">Customize your preferences:</strong> Choose which categories of cookies you wish to allow.
                  </li>
                </ul>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Changes to Our Cookie Use
                </h3>
                <p>
                  We may update our use of cookies and tracking technologies to improve our services or comply with legal requirements. We will notify you of any significant changes and seek your consent where necessary.
                </p>
                <p>
                  For more detailed information about the cookies we use, their purposes, and how you can manage your preferences, please visit our detailed{" "}
                  <a href="https://weblinxmedia.com/cookies-policy" className="text-[#FFAD14] hover:underline font-semibold">
                    Cookie Policy
                  </a>
                  .
                </p>

                <p className="pt-4 border-t border-neutral-100">
                  Should you have any questions or concerns about our use of cookies and tracking technologies, please do not hesitate to contact us at{" "}
                  <a href="mailto:admin@weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                    admin@weblinxmedia.com
                  </a>{" "}
                  or via WhatsApp at{" "}
                  <a
                    href="https://wa.me/19014684352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFAD14] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <WhatsAppIcon />
                    +1 (901) 468-4352
                  </a>
                  . Your privacy and the integrity of your personal data are of utmost importance to us.
                </p>
              </div>
            </section>

            {/* 7. Compliance with United States privacy laws */}
            <section
              id="us-privacy"
              className="scroll-mt-32 bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#FFAD14]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-50 rounded-lg">
                  <SectionIcon type="us-privacy" />
                </div>
                <h2 className="font-parkinsans font-bold text-2xl md:text-3xl text-neutral-900 tracking-tight">
                  Compliance with United States privacy laws
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-[16px] md:text-[17px]">
                <p>
                  To appeal a decision we may make regarding your request, please contact us within 60 days of receiving our response by submitting your request through the link on our website or by using one of the following methods:
                </p>
                
                <div className="bg-neutral-50 p-6 rounded-xl space-y-2 border border-neutral-100 font-parkinsans text-[15px] font-medium">
                  <div>
                    Email:{" "}
                    <a href="mailto:admin@weblinxmedia.com" className="text-[#FFAD14] hover:underline">
                      admin@weblinxmedia.com
                    </a>
                  </div>
                  <div>
                    Phone:{" "}
                    <a href="tel:+19014684352" className="text-[#FFAD14] hover:underline">
                      +1 (901) 468-4352
                    </a>
                  </div>
                </div>

                <p>
                  In your appeal request, please include your original request, the date of our response, and a brief explanation of why you believe our decision was incorrect.
                </p>

                <p className="font-semibold text-neutral-850 pt-2">
                  For residents of the United States of America the following provisions apply:
                </p>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Provisions by Jurisdiction
                </h3>

                <ul className="space-y-5 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">A. Individual rights</strong>
                      The California Consumer Privacy Act (CCPA) provides residents of California specific rights regarding their personal information, additional to what has been described before.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">B. Right to Know</strong>
                      You may request that we disclose to you what personal information we have collected, used, shared, or sold about you, and why we collected, used, shared, or sold that information. Specifically, you may request the disclosure of:
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-neutral-500">
                        <li>The categories of personal information collected</li>
                        <li>Specific pieces of personal information collected</li>
                        <li>The categories of sources from which we collected personal information</li>
                        <li>The purposes for which personal information is used</li>
                        <li>The categories of third parties with whom personal information is shared</li>
                        <li>The categories of information that are sold or disclosed to third parties</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">C. Right to Delete</strong>
                      You may request that we delete personal information we have collected about you.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">D. Right to Correct</strong>
                      You may ask us to correct inaccurate information that we have about you.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">E. Right to Limit</strong>
                      You can request us to only use your sensitive personal information (for example, your social security number, your genetic data, etc.) for limited purposes, such as providing you with the services you requested.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">F. Right to Opt-Out</strong>
                      Weblinx Media does not sell or share personal information. In case your data is sold or shared you can make use of your right to opt-out of the sale or sharing of personal information by submitting your request through the link on our website.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">G. Right to Non-Discrimination</strong>
                      You have the right to be protected from discrimination for exercising your rights.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">H. Submitting requests</strong>
                      You may submit your request by sending an email to{" "}
                      <a href="mailto:admin@weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                        admin@weblinxmedia.com
                      </a>{" "}
                      or via WhatsApp at{" "}
                      <a
                        href="https://wa.me/19014684352"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFAD14] hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        <WhatsAppIcon />
                        +1 (901) 468-4352
                      </a>
                      . We will compare the information you submit to us with the information we have in our records to verify your request. We will then respond to your request in accordance with the requirements.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FFAD14] mt-2.5 shrink-0" />
                    <div>
                      <strong className="text-neutral-850 block mb-1">J. Sensitive data and/or biometric data</strong>
                      We only process sensitive personal data with your prior consent and only for specific purposes that are clearly disclosed at the time of collection. You may withdraw your consent at any time by submitting your request through the link on our website or by email to{" "}
                      <a href="mailto:admin@weblinxmedia.com" className="text-[#FFAD14] hover:underline font-medium">
                        admin@weblinxmedia.com
                      </a>
                      .
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* 8. Direct marketing and communications */}
            <section
              id="marketing"
              className="scroll-mt-32 bg-white rounded-2xl border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-t-[5px] border-t-[#FFAD14]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-neutral-50 rounded-lg">
                  <SectionIcon type="marketing" />
                </div>
                <h2 className="font-parkinsans font-bold text-2xl md:text-3xl text-neutral-900 tracking-tight">
                  Direct marketing and communications
                </h2>
              </div>
              <div className="space-y-6 text-neutral-600 leading-relaxed font-light text-[16px] md:text-[17px]">
                <p>
                  At Weblinx Media, we may use your personal information to send you direct marketing communications about our products, services, promotions, and other relevant information that we believe may be of interest to you. We are committed to ensuring that our direct marketing practices are transparent, lawful, and in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the ePrivacy Directive.
                </p>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Obtaining Consent for Direct Marketing
                </h3>
                <ul className="space-y-4 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Opt-in consent:</strong> We will obtain your explicit opt-in consent before sending you direct marketing communications, where required by law. This means that you will have the opportunity to actively consent to receiving marketing messages from us before we send them to you.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFAD14] mt-2 shrink-0" />
                    <div>
                      <strong>Unsubscribe option:</strong> Every direct marketing communication we send will include clear instructions on how to unsubscribe or opt-out from receiving future marketing communications. You can exercise your right to opt-out at any time, and we will promptly honor your request to stop sending you marketing messages.
                    </div>
                  </li>
                </ul>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Types of Direct Marketing Communications
                </h3>
                <p>
                  We may use your personal information to send you direct marketing communications via various channels, including:
                </p>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Email</li>
                  <li>Chatbots</li>
                </ul>

                <h3 className="font-parkinsans font-semibold text-lg md:text-xl text-neutral-800 mt-8 mb-4 border-b border-neutral-100 pb-2">
                  Managing Your Preferences
                </h3>
                <p>
                  You have control over the direct marketing communications you receive from us. You can manage your communication preferences by using the unsubscribe link provided in our marketing emails or text messages.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3.5 bg-neutral-900 border border-neutral-800 text-white rounded-full shadow-2xl hover:bg-[#FFAD14] hover:text-black hover:border-[#FFAD14] hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
          showScrollTop ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
        }`}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </div>
  );
}
