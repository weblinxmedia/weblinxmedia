// src/components/CookieConsent.tsx
"use client";

import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    functional: false,
    advertising: false,
  });
  const [showCustomizePanel, setShowCustomizePanel] = useState<boolean>(false);

  useEffect(() => {
    // Show banner only if no consent choice is saved in localStorage
    const consentValue = localStorage.getItem("weblinx_cookie_consent");
    if (!consentValue) {
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCookieConsent = (type: "all" | "essential" | "custom") => {
    if (type === "all") {
      localStorage.setItem("weblinx_cookie_consent", "all");
    } else if (type === "essential") {
      localStorage.setItem("weblinx_cookie_consent", "essential");
    } else {
      localStorage.setItem("weblinx_cookie_consent", JSON.stringify(cookieSettings));
    }
    setShowCookieConsent(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 w-full z-[999999] bg-[#09090b]/95 backdrop-blur-md border-t border-neutral-800 text-white py-4.5 px-6 md:px-12 transition-all duration-500 font-outfit ${
        showCookieConsent ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {!showCustomizePanel ? (
          <>
            {/* Left side info text */}
            <div className="flex items-center gap-3">
              <span className="text-[#FFAD14] text-lg hidden md:inline shrink-0">🍪</span>
              <p className="font-outfit font-light text-[13.5px] leading-relaxed text-neutral-300">
                <strong className="font-semibold text-white mr-1">We value your privacy.</strong>
                We use cookies to improve your browsing experience, analyze our traffic, and deliver personalized marketing. You can customize your preferences or learn more in our{" "}
                <a href="https://weblinxmedia.com/cookies-policy" className="text-[#FFAD14] underline hover:text-white font-medium">
                  Cookie Policy
                </a>
                .
              </p>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3.5 shrink-0 self-end lg:self-auto">
              <button
                onClick={() => setShowCustomizePanel(true)}
                className="text-xs text-neutral-400 hover:text-[#FFAD14] transition-colors font-medium px-2 py-1.5 cursor-pointer"
              >
                Customize
              </button>
              <button
                onClick={() => handleCookieConsent("essential")}
                className="py-1.5 px-4 bg-neutral-900 border border-neutral-800 text-neutral-300 font-parkinsans font-semibold text-xs rounded-lg hover:bg-neutral-800 hover:text-white active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => handleCookieConsent("all")}
                className="py-1.5 px-4 bg-[#FFAD14] text-black font-parkinsans font-bold text-xs rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Customize Panel (Inline Layout) */}
            <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-8 gap-y-3">
              <h4 className="font-parkinsans font-bold text-[14px] text-white shrink-0 flex items-center gap-2">
                <span className="text-[#FFAD14]">⚙️</span> Customize Cookies:
              </h4>

              <label className="flex items-center gap-2.5 cursor-pointer text-[13px] text-neutral-300">
                <input
                  type="checkbox"
                  checked={cookieSettings.essential}
                  disabled
                  className="w-3.5 h-3.5 accent-[#FFAD14] opacity-50 cursor-not-allowed"
                />
                <span>Essential (Required)</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer text-[13px] text-neutral-300 hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={cookieSettings.analytics}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, analytics: e.target.checked })}
                  className="w-3.5 h-3.5 accent-[#FFAD14] cursor-pointer"
                />
                <span>Performance &amp; Analytics</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer text-[13px] text-neutral-300 hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={cookieSettings.functional}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, functional: e.target.checked })}
                  className="w-3.5 h-3.5 accent-[#FFAD14] cursor-pointer"
                />
                <span>Functional</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer text-[13px] text-neutral-300 hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={cookieSettings.advertising}
                  onChange={(e) => setCookieSettings({ ...cookieSettings, advertising: e.target.checked })}
                  className="w-3.5 h-3.5 accent-[#FFAD14] cursor-pointer"
                />
                <span>Advertising</span>
              </label>
            </div>

            {/* Customize Panel Actions */}
            <div className="flex items-center gap-3 shrink-0 self-end lg:self-auto">
              <button
                onClick={() => setShowCustomizePanel(false)}
                className="text-xs text-neutral-400 hover:text-white transition-colors font-medium px-2 py-1.5 cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => handleCookieConsent("custom")}
                className="py-1.5 px-4 bg-[#FFAD14] text-black font-parkinsans font-bold text-xs rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Save Preferences
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
