import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Link from "next/link";
import { Shield, Zap, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Rapid IPTV Swiss | IPTV Provider Switzerland",
  description: "Learn about Rapid IPTV Swiss, Switzerland's premium IPTV provider. Our mission, technology, and commitment to delivering the best IPTV experience in Switzerland.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-24">
      <BreadcrumbSchema items={[{ name: "Home", href: "/home" }, { name: "About", href: "/about" }]} />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About <span className="text-[var(--color-brand-primary)]">Rapid IPTV Swiss</span></h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">We are a premium IPTV provider dedicated to bringing the best live TV streaming experience to households across Switzerland.</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <p className="text-neutral-300 leading-relaxed">Rapid IPTV Swiss was founded with a simple mission: to provide Swiss residents with a reliable, high-quality alternative to traditional cable TV. We believe everyone in Switzerland deserves access to premium entertainment without the excessive costs and rigid contracts of legacy providers.</p>
          <p className="text-neutral-300 leading-relaxed">Our service delivers over 30,000 live channels and 150,000+ on-demand titles in stunning 4K Ultra HD quality. We specifically cater to Switzerland&apos;s multilingual market, offering comprehensive coverage of Swiss German (SRF), French (RTS), and Italian (RSI) channels alongside international content.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: Shield, title: "Swiss-Optimized Servers", desc: "Our infrastructure is optimized for Swiss ISPs including Swisscom, Sunrise, and Salt for minimal latency and maximum quality." },
            { icon: Zap, title: "Anti-Freeze Technology", desc: "Proprietary load balancing ensures buffer-free streaming even during peak events like Champions League matches." },
            { icon: Users, title: "24/7 Multilingual Support", desc: "Our support team speaks English, German, French, and Italian to serve all Swiss cantons." },
            { icon: Globe, title: "Comprehensive Content", desc: "From Swiss local channels to global sports networks, we offer the widest selection available to Swiss viewers." },
          ].map((item) => (
            <div key={item.title} className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6">
              <item.icon className="w-8 h-8 text-[var(--color-brand-primary)] mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/plans" className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105">View Our Plans</Link>
        </div>
      </div>
    </div>
  );
}
