"use client";

import { Users, DollarSign, Palette, Tv, Rocket, ShieldCheck, Check, MessageCircle } from "lucide-react";

const WA_NUMBER = "15595082154";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

const BENEFITS = [
  { icon: Users, title: "Manage Your Customers", desc: "Full control with a dedicated reseller panel. Manage billing, support, and customer interactions." },
  { icon: DollarSign, title: "Flexible CHF Pricing", desc: "Set your own prices in CHF. Maximize profit with competitive pricing in the Swiss market." },
  { icon: Palette, title: "White-Label Options", desc: "Brand our service as your own. Fully branded IPTV experience without technical overhead." },
  { icon: Tv, title: "30,000+ Channels", desc: "Full access to all channels including Swiss SRF, RTS, RSI plus international content." },
  { icon: ShieldCheck, title: "Secure Panel", desc: "Advanced security with CAPTCHA and encryption to protect your data and customers." },
  { icon: Rocket, title: "Instant Setup", desc: "Get started in minutes. Add customers, generate trials, manage devices from one dashboard." },
];

const PLANS = [
  { credits: 5, price: "CHF 129", label: "Demo Panel", popular: false },
  { credits: 10, price: "CHF 230", label: "Growth", popular: true },
  { credits: 15, price: "CHF 279", label: "Business", popular: false },
  { credits: 20, price: "CHF 329", label: "Enterprise", popular: false },
];

export default function ResellerPageClient() {
  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] px-4 py-1.5 rounded-full text-sm font-semibold mb-6"><Rocket className="w-4 h-4" />Reseller Program</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5">Become a Rapid IPTV Swiss <span className="text-[var(--color-brand-primary)]">Reseller</span></h1>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mb-8">Start your own IPTV business in Switzerland. Get your reseller panel, manage customers, set CHF prices, and earn profit with every subscription.</p>
        <a href={`${WA_LINK}?text=${encodeURIComponent("Hi, I'm interested in becoming a reseller")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"><MessageCircle className="w-5 h-5" />Get Started on WhatsApp</a>
      </div>

      <div className="container mx-auto px-4 md:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BENEFITS.map((b, idx) => (
            <div key={idx} className="bg-[var(--color-background-surface)] border border-white/10 rounded-xl p-6 hover:border-[var(--color-brand-primary)]/30 transition-all hover:-translate-y-1">
              <b.icon className="w-8 h-8 text-[var(--color-brand-primary)] mb-4" /><h3 className="text-lg font-bold text-white mb-2">{b.title}</h3><p className="text-neutral-400 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Reseller Plans (CHF)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div key={idx} className={`relative bg-[var(--color-background-surface)] border rounded-2xl p-6 flex flex-col transition-all ${plan.popular ? "border-[var(--color-brand-primary)] ring-1 ring-[var(--color-brand-primary)]/40" : "border-white/10 hover:border-white/20"}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-brand-primary)] text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase">Recommended</div>}
              <div className="text-center mb-4 mt-2">
                <p className="text-sm text-neutral-400 font-medium mb-1">{plan.label}</p>
                <h3 className="text-3xl font-extrabold text-white mb-1">{plan.credits} Credits</h3>
                <p className="text-2xl font-bold text-[var(--color-brand-primary)]">{plan.price}</p>
              </div>
              <div className="space-y-2.5 mb-6 flex-1">
                {["Full channel range", "White-label options", "Customer management", "CHF pricing"].map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[var(--color-brand-primary)] shrink-0" /><span className="text-neutral-300 text-xs">{f}</span></div>
                ))}
              </div>
              <a href={`${WA_LINK}?text=${encodeURIComponent(`Hi, I'm interested in the ${plan.credits} Credits reseller plan`)}`} target="_blank" rel="noopener noreferrer" className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all hover:scale-[1.02] ${plan.popular ? "bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white" : "bg-white/10 hover:bg-white/15 text-white border border-white/10"}`}>Get {plan.credits} Credits</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
