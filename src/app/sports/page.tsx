import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Link from "next/link";
import { Trophy, Tv, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV Live Sport Switzerland | Champions League, F1, NHL, NBA 2026",
  description: "Watch live sports in Switzerland with IPTV. Champions League, Bundesliga, Swiss Super League, Formula 1, UFC, NHL, NBA, tennis. 4K quality, no buffering.",
  alternates: { canonical: "/sports" },
};

const SPORTS = [
  { name: "Champions League", desc: "Every match live in 4K. Group stages through the final." },
  { name: "Bundesliga", desc: "All matches from Germany\u2019s top league plus Swiss Super League." },
  { name: "Premier League", desc: "Full English Premier League coverage with pre and post-match analysis." },
  { name: "Formula 1", desc: "Every Grand Prix live including practice, qualifying, and race day." },
  { name: "UFC / MMA", desc: "All UFC events including PPV fights at no extra cost." },
  { name: "NHL", desc: "Full National Hockey League coverage for ice hockey fans in Switzerland." },
  { name: "NBA", desc: "Regular season, playoffs, and NBA Finals live in HD." },
  { name: "Tennis", desc: "Grand Slams, ATP, WTA tours. Roland Garros, Wimbledon, US Open, Australian Open." },
  { name: "Swiss Super League", desc: "All matches from Switzerland\u2019s top football division." },
  { name: "Rugby", desc: "Six Nations, Rugby World Cup, Super Rugby and more." },
  { name: "Cycling", desc: "Tour de France, Giro d\u2019Italia, Tour de Suisse and all major races." },
  { name: "Boxing", desc: "All major boxing PPV events included in your subscription." },
];

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-24">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Live Sports", href: "/sports" }]} />
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IPTV <span className="text-[var(--color-brand-primary)]">Live Sport</span> Switzerland
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Watch every major sporting event live in 4K Ultra HD. No buffering, no blackouts, no extra PPV fees. All included in your Rapid IPTV Swiss subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Trophy, title: "All Major Leagues", desc: "Champions League, Premier League, Bundesliga, Swiss Super League, Serie A, La Liga and more." },
            { icon: Tv, title: "4K Ultra HD Quality", desc: "Crystal clear picture quality for every match. No pixelation, no lag, no buffering." },
            { icon: Zap, title: "Zero PPV Fees", desc: "UFC, boxing, and other PPV events are included at no extra cost with every subscription." },
          ].map((f) => (
            <div key={f.title} className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6 text-center">
              <f.icon className="w-10 h-10 text-[var(--color-brand-primary)] mx-auto mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Sports Available on Rapid IPTV Swiss</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {SPORTS.map((sport) => (
            <div key={sport.name} className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-5 hover:border-[var(--color-brand-primary)]/30 transition-colors">
              <h3 className="text-white font-bold mb-1">{sport.name}</h3>
              <p className="text-neutral-400 text-sm">{sport.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/plans" className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105">
            Get IPTV Sport Switzerland
          </Link>
        </div>
      </div>
    </div>
  );
}
