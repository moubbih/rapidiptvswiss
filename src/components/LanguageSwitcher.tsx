"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

const LANGUAGES = [
  { code: "en", name: "English", flag: "\ud83c\uddec\ud83c\udde7" },
  { code: "de", name: "Deutsch", flag: "\ud83c\udde8\ud83c\udded" },
  { code: "fr", name: "Fran\u00e7ais", flag: "\ud83c\udde8\ud83c\udded" },
  { code: "it", name: "Italiano", flag: "\ud83c\udde8\ud83c\udded" },
];

const SUPPORTED_CODES = LANGUAGES.map((l) => l.code);

declare global {
  interface Window { google: any; googleTranslateElementInit: () => void; }
}

function setTranslateCookie(langCode: string) {
  if (langCode === "en") {
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  } else {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
  }
}

function getStoredLang(): string | null {
  const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
  return match ? match[1] : null;
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hasAutoDetected = useRef(false);

  useEffect(() => {
    const stored = getStoredLang();
    if (stored) {
      const found = LANGUAGES.find((l) => l.code === stored);
      if (found) setSelectedLang(found);
      return;
    }
    if (hasAutoDetected.current) return;
    hasAutoDetected.current = true;
    const browserLang = (navigator.language || "en").split("-")[0].toLowerCase();
    if (browserLang !== "en" && SUPPORTED_CODES.includes(browserLang)) {
      setTranslateCookie(browserLang);
      const found = LANGUAGES.find((l) => l.code === browserLang);
      if (found) setSelectedLang(found);
      sessionStorage.setItem("gt_auto", "1");
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "en,de,fr,it", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false },
        "gt_container"
      );
    };
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLanguage = useCallback((lang: (typeof LANGUAGES)[number]) => {
    setSelectedLang(lang);
    setIsOpen(false);
    setTranslateCookie(lang.code);
    const selectEl = document.querySelector("#gt_container select") as HTMLSelectElement | null;
    if (selectEl && lang.code !== "en") {
      selectEl.value = lang.code;
      selectEl.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  }, []);

  return (
    <>
      <div id="gt_container" className="fixed -top-[200px] -left-[200px] w-[1px] h-[1px] overflow-hidden" aria-hidden="true" />
      <div ref={dropdownRef} className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-200 text-sm text-neutral-300 hover:text-white" aria-label="Select language">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline text-xs font-medium">{selectedLang.flag} {selectedLang.code.toUpperCase()}</span>
          <span className="sm:hidden text-xs">{selectedLang.flag}</span>
          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-[#1a1a24] border border-white/10 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-xl overflow-hidden z-50 animate-in">
            <div className="py-1">
              {LANGUAGES.map((lang) => (
                <button key={lang.code} onClick={() => switchLanguage(lang)} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${selectedLang.code === lang.code ? "bg-blue-500/10 text-blue-400" : "text-neutral-300 hover:bg-white/5 hover:text-white"}`}>
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium flex-1 text-left">{lang.name}</span>
                  {selectedLang.code === lang.code && <Check className="w-4 h-4 text-blue-400" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
