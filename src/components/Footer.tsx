import Link from "next/link";
import { Tv, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#060609] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/home" className="flex items-center gap-2 mb-6 group">
              <Tv className="w-8 h-8 text-[var(--color-brand-primary)]" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Rapid<span className="text-[var(--color-brand-primary)]">IPTV</span>Swiss
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Switzerland&apos;s premium IPTV provider. 4K streaming with Swiss-quality reliability across Z&uuml;rich, Gen&egrave;ve, Basel, Bern, Lausanne and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/home" },
                { name: "Pricing", href: "/plans" },
                { name: "Channel List", href: "/live-channels" },
                { name: "Sports", href: "/sports" },
                { name: "Movies & Series", href: "/movies-series" },
                { name: "Reseller", href: "/reseller" },
              ].map((link) => (
                <li key={link.name}><Link href={link.href} className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "FAQ", href: "/faq" },
                { name: "Setup Guides", href: "/installation-guide" },
                { name: "Devices", href: "/supported-devices" },
                { name: "Contact Us", href: "/reach-us" },
              ].map((link) => (
                <li key={link.name}><Link href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-white font-semibold mb-6">Blog</h3>
            <ul className="space-y-3">
              {[
                { name: "Is IPTV Legal in Switzerland?", href: "/blog/is-iptv-legal-in-switzerland" },
                { name: "IPTV vs Cable TV", href: "/blog/iptv-vs-cable-tv-switzerland" },
                { name: "Best Internet Speed for IPTV", href: "/blog/best-internet-speed-for-iptv" },
                { name: "How Does IPTV Work?", href: "/blog/how-does-iptv-work" },
              ].map((link) => (
                <li key={link.name}><Link href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 mb-6">
              {[
                { name: "Terms of Service", href: "/tos" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Cancellation Policy", href: "/cancellations" },
                { name: "Refund Policy", href: "/refunds" },
              ].map((link) => (
                <li key={link.name}><Link href={link.href} className="text-neutral-400 hover:text-white text-sm transition-colors">{link.name}</Link></li>
              ))}
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <Mail className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                <a href="mailto:support@rapidiptvswiss.com" className="hover:text-white transition-colors">support@rapidiptvswiss.com</a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400 text-sm">
                <MapPin className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                <span>Switzerland &middot; 24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">&copy; {new Date().getFullYear()} RapidIPTVSwiss. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-neutral-500">
            <span>Server Uptime: <span className="text-green-500 font-medium">99.99%</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
