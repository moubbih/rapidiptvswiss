"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Tv } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "./LanguageSwitcher";
import AnimatedMenu from "./ui/animated-menu";

const MAIN_NAV_LINKS = [
  { name: "Home", href: "/home" },
  { name: "Pricing", href: "/plans" },
  { name: "Channels", href: "/live-channels" },
  { name: "Setup Guides", href: "/installation-guide" },
  { name: "Blog", href: "/articles" },
  { name: "Contact", href: "/reach-us" },
];

const MOBILE_NAV_LINKS = [
  ...MAIN_NAV_LINKS,
  { name: "FAQ", href: "/faq" },
  { name: "Sports", href: "/sports" },
  { name: "Movies & Series", href: "/movies-series" },
  { name: "Devices", href: "/supported-devices" },
  { name: "Reseller", href: "/reseller" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-[#0a0a0f]/95 backdrop-blur-md shadow-md py-3 md:py-4" : "bg-gradient-to-b from-black/80 to-transparent py-3 md:py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-2 group">
            <Tv className="w-7 h-7 md:w-8 md:h-8 text-[var(--color-brand-primary)] group-hover:text-[var(--color-brand-secondary)] transition-colors" />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Rapid<span className="text-[var(--color-brand-primary)]">IPTV</span>Swiss
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {MAIN_NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[var(--color-brand-primary)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link href="/plans" className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors duration-300 text-sm">
              Get Started
            </Link>
          </div>

          <div className="flex md:hidden items-center pr-24">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
      <AnimatedMenu links={MOBILE_NAV_LINKS} />
    </>
  );
}
