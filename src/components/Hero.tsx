"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Info } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden" style={{ height: "100dvh" }}>
      <div className="absolute inset-0 z-0">
        <Image src="/hero_bg.webp" alt="IPTV Switzerland - Stream 30,000+ channels in 4K with Rapid IPTV Swiss" fill sizes="100vw" className="object-cover object-center opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-base)] via-[var(--color-background-base)]/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background-base)]/80 via-transparent to-transparent" />
      </div>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center text-center md:items-start md:text-left pt-16">
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl drop-shadow-2xl mb-4 md:mb-5">
          Best IPTV Switzerland 2026 &mdash; Rapid IPTV Swiss
        </motion.h1>

        <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-2xl text-[var(--color-text-secondary)] max-w-2xl mb-8 md:mb-10 drop-shadow-md leading-relaxed">
          Stream 30,000+ live channels including SRF, RTS, RSI &amp; global sports in stunning 4K. Buffer-free IPTV built for Swiss homes. Plans from CHF 5.00/mo.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link href="/plans" className="flex items-center justify-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 duration-300 w-full sm:w-auto shadow-lg shadow-blue-500/20">
            <Play className="w-5 h-5 fill-white" />
            View Plans &amp; Pricing
          </Link>
          <Link href="/live-channels" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 w-full sm:w-auto">
            <Info className="w-5 h-5" />
            Browse Channels
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
