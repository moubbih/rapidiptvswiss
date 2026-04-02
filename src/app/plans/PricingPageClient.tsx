"use client";

import { useState } from "react";
import { Check, Users, Tv, Sparkles, CreditCard, Shield } from "lucide-react";
import StructuredData from "@/components/StructuredData";

/* ── Exact pricing grid (all in CHF) ─────────────────────── */
const PRICE_TABLE: Record<number, { "3": number; "6": number; "12": number }> = {
  1: { "3": 29.99, "6": 44.99, "12": 59.99 },
  2: { "3": 39.99, "6": 59.99, "12": 79.99 },
  3: { "3": 49.99, "6": 74.99, "12": 99.99 },
  4: { "3": 59.99, "6": 89.99, "12": 119.99 },
  5: { "3": 69.99, "6": 104.99, "12": 139.99 },
};

const DEVICE_LABELS: Record<number, string> = {
  1: "Single connection",
  2: "Couple / 2 rooms",
  3: "Family standard",
  4: "Large family",
  5: "Premium household",
};

const DURATIONS = [
  { label: "3 Months", months: "3" as const, monthCount: 3, savings: null },
  { label: "6 Months", months: "6" as const, monthCount: 6, savings: "Save 25%" },
  { label: "12 Months", months: "12" as const, monthCount: 12, savings: "Save 50%", highlight: true },
];

const DEVICE_OPTIONS = [1, 2, 3, 4, 5] as const;

const FEATURES = [
  "30,000+ live channels",
  "150,000+ VOD",
  "4K UHD quality",
  "Anti-freeze technology",
  "24/7 support",
  "All devices supported",
  "Free VPN included",
  "7-day money-back guarantee",
];

const WA_NUMBER = "15595082154";

function getPrice(devices: number, months: "3" | "6" | "12"): number {
  return PRICE_TABLE[devices]?.[months] ?? 0;
}

function perMonth(total: number, months: number): string {
  return (total / months).toFixed(2);
}

const PAYMENT_METHODS = [
  { name: "TWINT", color: "bg-white" },
  { name: "Visa", color: "bg-[#1a1f71]" },
  { name: "Mastercard", color: "bg-[#eb001b]" },
  { name: "PayPal", color: "bg-[#003087]" },
  { name: "Crypto", color: "bg-[#f7931a]" },
];

export default function PricingPage() {
  const [devices, setDevices] = useState(1);

  /* Product schema for the most popular plan: 3 devices / 12 months */
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Rapid IPTV Swiss \u2014 Family Plan 12 Months",
    description:
      "Premium IPTV subscription for Switzerland. 3 devices, 12 months. 30,000+ live channels including SRF, RTS, RSI. 150,000+ VOD in 4K Ultra HD. Anti-freeze technology.",
    image: "https://rapidiptvswiss.com/hero_bg.webp",
    brand: { "@type": "Brand", name: "Rapid IPTV Swiss" },
    offers: {
      "@type": "Offer",
      price: "99.99",
      priceCurrency: "CHF",
      availability: "https://schema.org/InStock",
      url: "https://rapidiptvswiss.com/plans",
      priceValidUntil: "2026-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "312",
    },
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-24 pb-20">
      <StructuredData data={productSchema} id="product-schema" />

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          IPTV Subscription{" "}
          <span className="text-[var(--color-brand-primary)]">Switzerland</span>{" "}
          &mdash; Pricing
        </h1>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Transparent pricing in CHF. No hidden fees, no contracts. Instant
          activation. Choose your devices and plan duration below.
        </p>
      </div>

      {/* ── Device selector ─────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 mb-14">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium">
            <Users className="w-4 h-4" />
            <span>How many devices do you need?</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 bg-[var(--color-background-surface)] p-2 rounded-2xl border border-white/5">
            {DEVICE_OPTIONS.map((d) => (
              <button
                key={d}
                onClick={() => setDevices(d)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  devices === d
                    ? "bg-[var(--color-brand-primary)] text-white shadow-lg shadow-blue-500/20"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {d} Device{d > 1 ? "s" : ""}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-neutral-500 text-sm">
              {DEVICE_LABELS[devices]}
            </span>
            {devices > 1 && (
              <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-semibold bg-emerald-400/10 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Multi-device discount
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── 3 Pricing cards ─────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {DURATIONS.map((plan, idx) => {
            const total = getPrice(devices, plan.months);
            const monthly = perMonth(total, plan.monthCount);

            /* 12-month card is always highlighted */
            const isHighlight = plan.highlight;

            /* Badge text: "Most popular" only for 3 devices + 12 months, otherwise "Best value" on 12-month */
            const badgeText =
              isHighlight && devices === 3
                ? "Most Popular"
                : isHighlight
                ? "Best Value"
                : null;

            return (
              <div
                key={idx}
                className={`relative bg-[var(--color-background-surface)] border rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  isHighlight
                    ? "border-[var(--color-brand-primary)] md:-translate-y-3 shadow-[0_0_40px_rgba(59,130,246,0.12)] ring-1 ring-[var(--color-brand-primary)]/40"
                    : plan.savings
                    ? "border-white/15 hover:border-white/25 hover:-translate-y-1"
                    : "border-white/10 hover:border-white/20 hover:-translate-y-1"
                }`}
              >
                {/* Badge */}
                {badgeText && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-brand-primary)] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                    {badgeText}
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-6 mt-2">
                  <h2 className="text-xl font-bold text-white mb-3">
                    {plan.label}
                  </h2>

                  {/* Total price */}
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={`text-5xl font-extrabold ${
                        isHighlight
                          ? "text-[var(--color-brand-primary)]"
                          : "text-white"
                      }`}
                    >
                      CHF {total}
                    </span>
                  </div>

                  {/* Per month */}
                  <p className="text-neutral-400 text-sm mt-2">
                    CHF {monthly}/mo &middot; {devices} device
                    {devices > 1 ? "s" : ""}
                  </p>

                  {/* Savings badge */}
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
                    <p className="text-neutral-600 text-xs mt-3">
                      Standard pricing
                    </p>
                  )}

                  <p className="text-neutral-600 text-xs mt-2">
                    One-time payment &middot; No contract
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  {FEATURES.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0" />
                      <span className="text-neutral-300 text-sm">{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3">
                    <Tv className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0" />
                    <span className="text-white font-bold text-sm">
                      {devices} Simultaneous Device{devices > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                      `Hi, I'd like to order the ${plan.label} IPTV plan for ${devices} device${
                        devices > 1 ? "s" : ""
                      } (CHF ${total})`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-[1.02] ${
                      isHighlight
                        ? "bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white shadow-lg shadow-blue-500/20"
                        : "bg-white text-black hover:bg-neutral-200"
                    }`}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Comparison note ─────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 mt-14">
        <div className="max-w-3xl mx-auto bg-[var(--color-background-surface)] border border-white/5 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Traditional Swiss cable TV costs{" "}
            <span className="text-white font-semibold">
              CHF 40&ndash;60/month
            </span>
            . With Rapid IPTV Swiss, get{" "}
            <span className="text-[var(--color-brand-primary)] font-semibold">
              10x more content
            </span>{" "}
            starting at just{" "}
            <span className="text-white font-semibold">CHF 5.00/mo</span>.
          </p>
        </div>
      </div>

      {/* ── Full comparison table ───────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          All IPTV Plans at a Glance (CHF)
        </h2>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-neutral-400 font-medium p-4">
                  Devices
                </th>
                {DURATIONS.map((d, i) => (
                  <th
                    key={i}
                    className={`text-center font-medium p-4 ${
                      d.highlight
                        ? "text-[var(--color-brand-primary)]"
                        : "text-neutral-400"
                    }`}
                  >
                    {d.label}
                    {d.highlight && (
                      <span className="block text-[10px] text-emerald-400 font-bold mt-0.5">
                        BEST VALUE
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEVICE_OPTIONS.map((d) => (
                <tr
                  key={d}
                  className={`border-b border-white/5 transition-colors ${
                    d === devices
                      ? "bg-[var(--color-brand-primary)]/5"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <td className="p-4 text-white font-semibold">
                    {d} Device{d > 1 ? "s" : ""}
                    <span className="block text-xs text-neutral-500 font-normal">
                      {DEVICE_LABELS[d]}
                    </span>
                    {d === devices && (
                      <span className="inline-block mt-1 text-[10px] bg-[var(--color-brand-primary)] text-white px-2 py-0.5 rounded-full font-bold uppercase">
                        Selected
                      </span>
                    )}
                  </td>
                  {DURATIONS.map((plan, i) => {
                    const price = getPrice(d, plan.months);
                    const mo = perMonth(price, plan.monthCount);
                    const isMostPopular =
                      d === 3 && plan.months === "12";
                    return (
                      <td
                        key={i}
                        className={`p-4 text-center ${
                          plan.highlight
                            ? "bg-[var(--color-brand-primary)]/[0.03]"
                            : ""
                        }`}
                      >
                        <span className="font-bold text-white">
                          CHF {price}
                        </span>
                        <span className="block text-xs text-neutral-500">
                          CHF {mo}/mo
                        </span>
                        {isMostPopular && (
                          <span className="inline-block mt-1 text-[9px] bg-blue-500/15 text-blue-400 px-2 py-0.5 rounded-full font-bold uppercase">
                            Most Popular
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Payment methods ─────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
            Accepted Payment Methods
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {PAYMENT_METHODS.map((pm) => (
              <div
                key={pm.name}
                className="flex items-center gap-2 bg-[var(--color-background-surface)] border border-white/10 rounded-xl px-5 py-3"
              >
                <div
                  className={`w-3 h-3 rounded-full ${pm.color}`}
                />
                <span className="text-white text-sm font-medium">
                  {pm.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 text-neutral-500 text-sm">
            <Shield className="w-4 h-4" />
            <span>
              Secure payments &middot; All prices in Swiss Francs (CHF)
              &middot; Instant activation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
