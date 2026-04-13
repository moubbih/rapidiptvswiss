import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { Shield, Zap, Users, Globe, Mail, User } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Rapid IPTV Swiss Team",
  description: "Meet the team behind Rapid IPTV Swiss. 8+ years in streaming technology, serving Swiss households with premium IPTV since 2024.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Meier",
    jobTitle: "IPTV Technology Specialist",
    description: "Streaming infrastructure expert with 8+ years of experience in IPTV deployment across Europe. Specializes in Swiss broadcasting and multi-language content delivery.",
    worksFor: { "@type": "Organization", name: "Rapid IPTV Swiss", url: "https://rapidiptvswiss.com" },
    knowsAbout: ["IPTV", "streaming technology", "Swiss broadcasting", "SRF", "RTS", "RSI", "content delivery networks"],
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-24">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }]} />
      <StructuredData data={personSchema} id="person-schema" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About <span className="text-[var(--color-brand-primary)]">Rapid IPTV Swiss</span></h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">A small, dedicated team bringing premium IPTV to Swiss households since 2024.</p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-neutral-300 leading-relaxed">
            <p>Rapid IPTV Swiss started in early 2024 when our founder, Daniel Meier, realized that Swiss households were paying CHF 40&ndash;60 per month for cable TV packages with only 200&ndash;300 channels. After spending 8 years working in streaming infrastructure across Europe, he knew there was a better way to deliver television content to Swiss homes.</p>
            <p>We built Rapid IPTV Swiss specifically for the Swiss market. That means full support for all four national languages, optimized servers for Swiss ISPs like Swisscom, Sunrise, and Salt, and pricing in Swiss Francs with local payment methods including TWINT. Our anti-freeze technology uses geographically distributed server nodes with strict per-server user limits to ensure smooth streaming even during peak events.</p>
            <p>Today, we serve households across Z&uuml;rich, Gen&egrave;ve, Basel, Bern, Lausanne, Lugano, and beyond. Our service includes over 30,000 live channels, 150,000+ on-demand titles, and comprehensive Swiss channel coverage including SRF, RTS, and RSI.</p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[var(--color-brand-primary)]/10 flex items-center justify-center">
                  <User className="w-7 h-7 text-[var(--color-brand-primary)]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Daniel Meier</h3>
                  <p className="text-[var(--color-brand-primary)] text-sm">Founder &amp; IPTV Technology Specialist</p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">8+ years in streaming infrastructure and IPTV deployment across Europe. Previously worked on content delivery networks serving millions of concurrent viewers. Specializes in low-latency streaming, server optimization for Swiss ISPs, and multi-language broadcast systems.</p>
            </div>

            <div className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[var(--color-brand-primary)]/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-[var(--color-brand-primary)]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Support Team</h3>
                  <p className="text-[var(--color-brand-primary)] text-sm">Customer Service &amp; Technical Support</p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">Our multilingual support team is available 24/7 via WhatsApp and live chat. We provide assistance in English, German, French, and Italian, covering all four Swiss language regions. Average response time: under 5 minutes during business hours.</p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: Shield, title: "Swiss-Optimized Servers", desc: "Our infrastructure is specifically optimized for Swiss ISPs including Swisscom, Sunrise, and Salt. We use European server nodes with direct peering to minimize latency and maximize quality." },
            { icon: Zap, title: "Anti-Freeze Technology", desc: "We limit users per server and use global load balancing to prevent congestion. This guarantees buffer-free streaming even during peak events like Champions League finals or Formula 1 races." },
            { icon: Users, title: "Multilingual Support", desc: "Switzerland has four national languages and so does our support. Get help in English, German, French, or Italian via WhatsApp or live chat, 24 hours a day." },
            { icon: Globe, title: "30,000+ Channels", desc: "From Swiss local channels (SRF, RTS, RSI) to global sports and entertainment. We offer the widest channel selection available to Swiss viewers, all in up to 4K Ultra HD." },
          ].map((item) => (
            <div key={item.title} className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6">
              <item.icon className="w-8 h-8 text-[var(--color-brand-primary)] mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Company</p>
                <p className="text-white font-medium">Rapid IPTV Swiss</p>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Founded</p>
                <p className="text-white font-medium">2024</p>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Service Area</p>
                <p className="text-white font-medium">Switzerland (all cantons)</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:support@rapidiptvswiss.com" className="text-[var(--color-brand-primary)] hover:underline font-medium">support@rapidiptvswiss.com</a>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                <a href="https://wa.me/15595082154" className="text-[var(--color-brand-primary)] hover:underline font-medium">+1 (559) 508-2154</a>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">Languages</p>
                <p className="text-white font-medium">English, Deutsch, Fran&ccedil;ais, Italiano</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/plans" className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 text-center">View Our Plans</Link>
          <Link href="/reach-us" className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all border border-white/10 text-center">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
