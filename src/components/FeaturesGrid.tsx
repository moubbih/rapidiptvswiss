import { Tv2, Wifi, MonitorSmartphone, Globe, Zap, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: Tv2,
    title: "Crystal Clear 4K UHD",
    description: "Watch Swiss channels like SRF, RTS, and RSI plus 30,000+ global channels in stunning 4K Ultra HD quality.",
  },
  {
    icon: Wifi,
    title: "Anti-Freeze Technology",
    description: "Our premium Swiss-optimized servers guarantee 99.9% uptime and zero buffering, even during Champions League finals.",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Device Support",
    description: "Stream on your Smart TV, Firestick, smartphone, tablet, Apple TV, or PC. Setup takes under 5 minutes.",
  },
  {
    icon: Globe,
    title: "Swiss + International",
    description: "All Swiss German, French & Italian channels plus international entertainment from over 80 countries worldwide.",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Get your IPTV subscription activated within minutes. No waiting, no installation appointments, no extra hardware.",
  },
  {
    icon: Clock,
    title: "7-Day Catch-Up TV",
    description: "Missed a show? Our catch-up feature lets you replay programs from the past 7 days on supported channels.",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="w-full py-16 md:py-24 bg-[var(--color-background-base)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[var(--color-brand-primary)]">Rapid IPTV Swiss?</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            The best IPTV provider in Switzerland 2026. Premium streaming designed for Swiss households in Z&uuml;rich, Gen&egrave;ve, Basel, Bern, and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-[var(--color-background-surface)] hover:bg-[var(--color-background-surface-hover)] border border-white/5 hover:border-[var(--color-brand-primary)]/30 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 group shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-brand-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-primary)]/20 transition-colors">
                <feature.icon className="w-7 h-7 text-[var(--color-brand-primary)]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">{feature.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
