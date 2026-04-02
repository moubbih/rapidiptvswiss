"use client";

import { Flame, Check, Zap, ArrowRight } from "lucide-react";

const WA_NUMBER = "15595082154";

const DEALS = [
  {
    duration: "12 Months",
    salePrice: 83.99,
    originalPrice: 179.88,
    connections: 1,
    perMonth: "7.00",
    tag: "Great Value",
    features: ["30,000+ channels", "4K Ultra HD", "Anti-freeze tech", "All devices"],
  },
  {
    duration: "24 Months",
    salePrice: 149.99,
    originalPrice: 359.76,
    connections: 1,
    perMonth: "6.25",
    tag: "Best Long-Term Deal",
    isFeatured: true,
    features: ["30,000+ channels", "4K Ultra HD", "Anti-freeze tech", "All devices", "Free VPN included", "Priority support"],
  },
];

export default function BiggestSale() {
  return (
    <section className="w-full py-20 md:py-28 relative overflow-hidden bg-[#060609]">
      {/* Subtle gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--color-brand-primary)]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-5 animate-pulse">
            <Flame className="w-4 h-4" />
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Best IPTV Deals in{" "}
            <span className="text-[var(--color-brand-primary)]">Switzerland</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-lg mx-auto">
            Lock in the lowest price per month with our long-term plans.
          </p>
        </div>

        {/* Deal cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {DEALS.map((deal, idx) => {
            const discount = Math.round(
              ((deal.originalPrice - deal.salePrice) / deal.originalPrice) * 100
            );
            const isFeatured = deal.isFeatured;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1 group ${
                  isFeatured
                    ? "bg-gradient-to-b from-[var(--color-brand-primary)]/60 via-[var(--color-brand-primary)]/20 to-transparent"
                    : "bg-white/[0.08]"
                }`}
              >
                <div
                  className={`relative rounded-2xl p-6 md:p-8 h-full flex flex-col ${
                    isFeatured
                      ? "bg-[#0c0c14]"
                      : "bg-[var(--color-background-surface)]"
                  }`}
                >
                  {/* Top row: tag + discount */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isFeatured
                          ? "bg-[var(--color-brand-primary)]/15 text-[var(--color-brand-primary)]"
                          : "bg-white/5 text-neutral-400"
                      }`}
                    >
                      {deal.tag}
                    </span>
                    <span className="bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">
                      Save {discount}%
                    </span>
                  </div>

                  {/* Duration title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {deal.duration} Premium IPTV
                  </h3>

                  {/* Price block */}
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl md:text-5xl font-extrabold text-white leading-none">
                      CHF&nbsp;{deal.salePrice}
                    </span>
                    <span className="text-base text-neutral-500 line-through mb-1">
                      CHF&nbsp;{deal.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-6">
                    Just{" "}
                    <span className="text-white font-semibold">
                      CHF {deal.perMonth}/mo
                    </span>{" "}
                    &middot; {deal.connections} device &middot; One-time payment
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8 flex-1">
                    {deal.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-neutral-300 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                      `Hi, I'd like the ${deal.duration} Premium IPTV deal for CHF ${deal.salePrice}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] ${
                      isFeatured
                        ? "bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white shadow-lg shadow-blue-500/25"
                        : "bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/25"
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    Get This Deal
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-center text-[11px] text-neutral-500 mt-3 font-medium tracking-wider uppercase">
                    No contract &middot; Instant activation
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
