"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import StructuredData from "./StructuredData";

const WA_NUMBER = "41XXXXXXXXXX";

/* ── Exact prices for homepage preview (1 & 2 devices) ──── */
const PRICE_TABLE: Record<number, { "3": number; "6": number; "12": number }> = {
  1: { "3": 29.99, "6": 44.99, "12": 59.99 },
  2: { "3": 39.99, "6": 59.99, "12": 79.99 },
};

const PLANS = [
  { duration: "3 Months", months: "3" as const, monthCount: 3, savings: null },
  { duration: "6 Months", months: "6" as const, monthCount: 6, savings: "Save 25%" },
  { duration: "12 Months", months: "12" as const, monthCount: 12, savings: "Save 50%", highlight: true },
];

const FEATURES = [
  "30,000+ Live Channels",
  "150,000+ Movies & Series",
  "Swiss Channels (SRF, RTS, RSI)",
  "4K Ultra HD Quality",
  "Anti-Freeze Technology",
  "24/7 Customer Support",
];

export default function Pricing() {
  const [devices, setDevices] = useState<1 | 2>(1);

  const getPrice = (months: "3" | "6" | "12") => PRICE_TABLE[devices][months];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Rapid IPTV Swiss Subscription",
    description:
      "Premium IPTV subscription Switzerland with 30,000+ channels, Swiss channels SRF RTS RSI, 4K Ultra HD, anti-freeze technology.",
    image: "https://rapidiptvswiss.com/hero_bg.webp",
    brand: { "@type": "Brand", name: "Rapid IPTV Swiss" },
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      name: `${plan.duration} - ${devices} Device(s)`,
      price: getPrice(plan.months),
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      url: "https://rapidiptvswiss.com/plans",
      priceValidUntil: "2026-12-31",
    })),
  };

  return (
    <div className="w-full py-24 relative overflow-hidden">
      <StructuredData data={productSchema} id="homepage-product-schema" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[var(--color-brand-primary)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            IPTV Subscription{" "}
            <span className="text-[var(--color-brand-primary)]">Switzerland</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            No hidden fees. No contracts. Instant activation. All prices in CHF.
          </p>
        </div>

        {/* Device toggle: 1 or 2 */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4 bg-[var(--color-background-surface)] p-2 rounded-full border border-white/5">
            <button
              onClick={() => setDevices(1)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                devices === 1
                  ? "bg-[var(--color-brand-primary)] text-white shadow-lg"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              1 Device
            </button>
            <button
              onClick={() => setDevices(2)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                devices === 2
                  ? "bg-[var(--color-brand-primary)] text-white shadow-lg"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              2 Devices
            </button>
          </div>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {PLANS.map((plan, idx) => {
            const currentPrice = getPrice(plan.months);
            const monthly = (currentPrice / plan.monthCount).toFixed(2);
            const isHighlight = plan.highlight;

            return (
              <div
                key={idx}
                className={`relative bg-[var(--color-background-surface)] border rounded-2xl p-8 transition-all duration-300 transform ${
                  isHighlight
                    ? "border-[var(--color-brand-primary)] md:-translate-y-4 shadow-[0_0_40px_rgba(59,130,246,0.15)] ring-1 ring-[var(--color-brand-primary)]/50"
                    : "border-white/10 hover:border-white/20 hover:-translate-y-1"
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-brand-primary)] text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
                    Best Value
                  </div>
                )}

                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    <span
                      className={`text-5xl font-extrabold ${
                        isHighlight
                          ? "text-[var(--color-brand-primary)]"
                          : "text-white"
                      }`}
                    >
                      CHF {currentPrice}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-500 mt-2">
                    CHF {monthly}/mo &middot; {devices} Device
                    {devices > 1 && "s"}
                  </div>
                  {plan.savings ? (
                    <span
                      className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold ${
                        isHighlight
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      {plan.savings}
                    </span>
                  ) : (
                    <div className="text-xs text-neutral-600 mt-3">
                      Standard pricing
                    </div>
                  )}
                  <div className="text-xs text-neutral-600 mt-1">
                    One-time payment &middot; No contract
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {FEATURES.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0" />
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                    `Hi, I'd like to order the ${plan.duration} IPTV plan for ${devices} device${
                      devices > 1 ? "s" : ""
                    } (CHF ${currentPrice})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] ${
                    isHighlight
                      ? "bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white shadow-lg shadow-blue-500/20"
                      : "bg-white text-black hover:bg-neutral-200"
                  }`}
                >
                  Order Now
                </a>
              </div>
            );
          })}
        </div>

        {/* See all plans link */}
        <div className="text-center mt-10">
          <Link
            href="/plans"
            className="text-[var(--color-brand-primary)] hover:underline font-semibold text-lg"
          >
            Need 3&ndash;5 devices? See all plans &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
