"use client";

import { useState } from "react";
import { Check, Users, Tv, Sparkles } from "lucide-react";

const PRICE_TABLE: Record<number, { "1": number; "6": number; "12": number }> = {
  1: { "1": 14.99, "6": 59.99, "12": 83.99 },
  2: { "1": 23.99, "6": 95.99, "12": 134.39 },
  3: { "1": 32.99, "6": 131.99, "12": 184.79 },
};

const DURATIONS = [
  { label: "1 Month", months: "1" as const, period: "month" },
  { label: "6 Months", months: "6" as const, period: "half-year", popular: true },
  { label: "12 Months", months: "12" as const, period: "year" },
];

const DEVICE_OPTIONS = [1, 2, 3] as const;

const FEATURES = [
  "30,000+ Premium Channels",
  "150,000+ Movies & Series",
  "Swiss Channels (SRF, RTS, RSI)",
  "4K Ultra HD Quality",
  "Anti-Freeze Technology",
  "EPG TV Guide",
  "7-Day Catch-Up TV",
  "24/7 Premium Support",
];

const WA_NUMBER = "41XXXXXXXXXX";

function getPrice(devices: number, months: "1" | "6" | "12"): number {
  return PRICE_TABLE[devices]?.[months] ?? 0;
}

function perMonth(total: number, months: number): string {
  return (total / months).toFixed(2);
}

export default function PricingPage() {
  const [devices, setDevices] = useState(1);

  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
          IPTV Subscription <span className="text-[var(--color-brand-primary)]">Switzerland</span> &mdash; Pricing
        </h1>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Transparent pricing in CHF. No hidden fees, no contracts. Pay with TWINT, Credit Card, or PayPal. Instant activation.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 mb-14">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium"><Users className="w-4 h-4" /><span>How many devices?</span></div>
          <div className="flex flex-wrap justify-center gap-2 bg-[var(--color-background-surface)] p-2 rounded-2xl border border-white/5">
            {DEVICE_OPTIONS.map((d) => (
              <button key={d} onClick={() => setDevices(d)} className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${devices === d ? "bg-[var(--color-brand-primary)] text-white shadow-lg shadow-blue-500/20" : "text-neutral-400 hover:text-white hover:bg-white/5"}`}>
                {d} Device{d > 1 ? "s" : ""}
              </button>
            ))}
          </div>
          {devices > 1 && <span className="inline-flex items-center gap-1.5 text-emerald-400 text-sm font-semibold bg-emerald-400/10 px-3 py-1 rounded-full"><Sparkles className="w-3.5 h-3.5" />Multi-device discount applied</span>}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {DURATIONS.map((plan, idx) => {
            const total = getPrice(devices, plan.months);
            const monthCount = parseInt(plan.months);
            const monthly = perMonth(total, monthCount);
            return (
              <div key={idx} className={`relative bg-[var(--color-background-surface)] border rounded-2xl p-8 flex flex-col transition-all duration-300 ${plan.popular ? "border-[var(--color-brand-primary)] md:-translate-y-3 shadow-[0_0_40px_rgba(59,130,246,0.12)] ring-1 ring-[var(--color-brand-primary)]/40" : "border-white/10 hover:border-white/20 hover:-translate-y-1"}`}>
                {plan.popular && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-brand-primary)] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Most Popular</div>}
                <div className="text-center mb-6 mt-2">
                  <h2 className="text-xl font-bold text-white mb-3">{plan.label}</h2>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-[var(--color-brand-primary)]">CHF {total}</span>
                  </div>
                  <p className="text-neutral-500 text-sm mt-2">CHF {monthly}/month &middot; {devices} device{devices > 1 ? "s" : ""}</p>
                  <p className="text-neutral-600 text-xs mt-1">One-time payment &middot; No contract</p>
                </div>
                <div className="space-y-3 mb-8 flex-1">
                  {FEATURES.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3"><Check className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0" /><span className="text-neutral-300 text-sm">{feat}</span></div>
                  ))}
                  <div className="flex items-center gap-3"><Tv className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0" /><span className="text-white font-bold text-sm">{devices} Simultaneous Device{devices > 1 ? "s" : ""}</span></div>
                </div>
                <div className="mt-auto space-y-3">
                  <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'd like to order the ${plan.label} IPTV plan for ${devices} device${devices > 1 ? "s" : ""} (CHF ${total})`)}`} target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-[1.02] ${plan.popular ? "bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white shadow-lg shadow-blue-500/20" : "bg-white text-black hover:bg-neutral-200"}`}>Order Now</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">All IPTV Plans at a Glance (CHF)</h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-neutral-400 font-medium p-4">Devices</th>
                {DURATIONS.map((d, i) => <th key={i} className="text-center text-neutral-400 font-medium p-4">{d.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {DEVICE_OPTIONS.map((d) => (
                <tr key={d} className={`border-b border-white/5 transition-colors ${d === devices ? "bg-[var(--color-brand-primary)]/5" : "hover:bg-white/[0.02]"}`}>
                  <td className="p-4 text-white font-semibold">{d} Device{d > 1 ? "s" : ""} {d === devices && <span className="ml-2 text-[10px] bg-[var(--color-brand-primary)] text-white px-2 py-0.5 rounded-full font-bold uppercase">Selected</span>}</td>
                  {DURATIONS.map((plan, i) => <td key={i} className="p-4 text-center text-neutral-300"><span className="font-bold text-white">CHF {getPrice(d, plan.months)}</span></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-12 text-center">
        <p className="text-neutral-500 text-sm">Payment methods: TWINT, Visa, Mastercard, PayPal. All prices in Swiss Francs (CHF).</p>
      </div>
    </div>
  );
}
