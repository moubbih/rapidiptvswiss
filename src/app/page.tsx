import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import Carousel from "@/components/Carousel";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import BiggestSale from "@/components/BiggestSale";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best IPTV Switzerland 2026 | 30,000+ Channels 4K",
  description: "Best IPTV subscription in Switzerland 2026. 30,000+ channels including SRF, RTS, RSI in 4K. Plans from CHF 5.00/mo. Instant activation.",
  alternates: { canonical: "/" },
};

const SPORTS_ITEMS = [
  { id: "sport-0", title: "Football", imageSrc: "/sports-logos/svg/sport_0.svg" },
  { id: "sport-1", title: "NFL", imageSrc: "/sports-logos/svg/sport_1.svg" },
  { id: "sport-2", title: "Olympics", imageSrc: "/sports-logos/svg/sport_2.svg" },
  { id: "sport-3", title: "Cycling", imageSrc: "/sports-logos/svg/sport_3.svg" },
  { id: "sport-4", title: "Cricket", imageSrc: "/sports-logos/svg/sport_4.svg" },
  { id: "sport-5", title: "Formula 1", imageSrc: "/sports-logos/svg/sport_5.svg" },
  { id: "sport-6", title: "UFC", imageSrc: "/sports-logos/svg/sport_6.svg" },
  { id: "sport-7", title: "MotoGP", imageSrc: "/sports-logos/svg/sport_7.svg" },
  { id: "sport-8", title: "American Football", imageSrc: "/sports-logos/svg/sport_8.svg" },
  { id: "sport-9", title: "Tennis", imageSrc: "/sports-logos/svg/sport_9.svg" },
  { id: "sport-10", title: "Basketball", imageSrc: "/sports-logos/svg/sport_10.svg" },
  { id: "sport-11", title: "Rugby", imageSrc: "/sports-logos/svg/sport_11.svg" },
  { id: "sport-12", title: "MLB", imageSrc: "/sports-logos/svg/sport_12.svg" },
  { id: "sport-13", title: "NHL", imageSrc: "/sports-logos/svg/sport_13.svg" },
  { id: "sport-14", title: "Golf", imageSrc: "/sports-logos/svg/sport_14.svg" },
  { id: "sport-15", title: "NBA", imageSrc: "/sports-logos/svg/sport_15.svg" },
];

const VOD_ITEMS = [
  { id: "vod-0", title: "Scream 7", imageSrc: "https://m.media-amazon.com/images/M/MV5BMzk2YzRjYmItNTA5Mi00ODczLTljYzUtOWE1ZDFkODhlZWJlXkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg" },
  { id: "vod-1", title: "The Bluff", imageSrc: "https://m.media-amazon.com/images/M/MV5BZDVlYWM2YjAtZTUxMS00OWEwLWI4YWMtNmFhMjU3MDY4OGJkXkEyXkFqcGc@._V1_QL75_UX180_CR0,2,180,266_.jpg" },
  { id: "vod-2", title: "Wuthering Heights", imageSrc: "https://m.media-amazon.com/images/M/MV5BMGFlMTVkMDktZGMzMC00Yjk4LWFmNzEtNTFmMzM2YzM3MWFkXkEyXkFqcGc@._V1_QL75_UY266_CR17,0,180,266_.jpg" },
  { id: "vod-3", title: "Shelter", imageSrc: "https://m.media-amazon.com/images/M/MV5BMzI2ODY3MzQtYzllNy00YWM1LWExZTgtOGIwNjk2MmE2MmY2XkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg" },
  { id: "vod-4", title: "In the Blink of an Eye", imageSrc: "https://m.media-amazon.com/images/M/MV5BYjNhNjQ2Y2ItMGM5ZC00OWE4LWEwZjItOWM5ZTdkYmYyZjE5XkEyXkFqcGc@._V1_QL75_UX180_CR0,2,180,266_.jpg" },
  { id: "vod-5", title: "Mortal Kombat II", imageSrc: "https://m.media-amazon.com/images/M/MV5BNDMyNDJhMjMtZTc4My00MGExLWJjN2MtNWRlNWJmMjcyOTZlXkEyXkFqcGc@._V1_QL75_UY266_CR17,0,180,266_.jpg" },
  { id: "vod-6", title: "Crime 101", imageSrc: "https://m.media-amazon.com/images/M/MV5BZThlN2M4ZTUtYTU3Mi00MDE5LWFhYWUtNjkxMWEwNjUwNDVhXkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg" },
  { id: "vod-7", title: "GOAT", imageSrc: "https://m.media-amazon.com/images/M/MV5BYzE5OTJkOGMtYWFiNi00NTlkLWE3ZWItY2ZlNjkyOWVhMjMyXkEyXkFqcGc@._V1_QL75_UX180_CR0,2,180,266_.jpg" },
  { id: "vod-8", title: "The Bride!", imageSrc: "https://m.media-amazon.com/images/M/MV5BM2VmMDVlNzgtNThhZC00ZGMwLTg4MmEtZTUzNmRiYTkxYzUyXkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg" },
  { id: "vod-9", title: "28 Years Later", imageSrc: "https://m.media-amazon.com/images/M/MV5BZGU2M2Y1YTItMWYxNS00NDYxLThhOTYtNjNhOWUzNjA3MTYwXkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg" },
  { id: "vod-10", title: "Mercy", imageSrc: "https://m.media-amazon.com/images/M/MV5BMWJmYjcwMTMtMDU1ZC00ZGI5LTlmZDAtODI3NDA2ZTE5ZGVlXkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg" },
  { id: "vod-11", title: "Send Help", imageSrc: "https://m.media-amazon.com/images/M/MV5BOTgxOWY5NTMtYjdiNi00NTIyLTkwMTQtMWNjM2IzYTU0ODgyXkEyXkFqcGc@._V1_QL75_UX180_CR0,0,180,266_.jpg" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "IPTV Switzerland", href: "/" }]} />
      <StructuredData id="speakable-schema" data={{
        "@context": "https://schema.org", "@type": "WebPage",
        name: "Rapid IPTV Swiss \u2014 Best IPTV Service in Switzerland",
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#about h2", "#about p"] },
        url: "https://rapidiptvswiss.com",
      }} />
      <Hero />

      {/* About section with primary keywords */}
      <section id="about" className="w-full bg-[#060609] py-16 border-b border-white/5">
        <div className="container mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is IPTV Switzerland?</h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            Rapid IPTV Swiss is the leading <strong className="text-white">IPTV Switzerland</strong> provider, built specifically for Swiss households. Our premium IPTV Schweiz service delivers over 30,000 live TV channels &mdash; including Swiss national broadcasters SRF, RTS, and RSI &mdash; along with 150,000+ movies and series on demand in 4K Ultra HD quality. Whether you search for <em>IPTV Suisse</em>, <em>IPTV Schweiz</em>, or IPTV Switzerland, you&rsquo;ve found the best option.
          </p>
          <p className="text-base text-neutral-400 leading-relaxed mb-6">
            Our anti-freeze technology guarantees 99.9% uptime across all Swiss cities including Z&uuml;rich, Gen&egrave;ve, Basel, Bern, and Lausanne. Compatible with all major devices, setup takes under 5 minutes. Read our <Link href="/blog/how-does-iptv-work" className="text-[var(--color-brand-primary)] hover:underline">guide on how IPTV works</Link> or explore our <Link href="/live-channels" className="text-[var(--color-brand-primary)] hover:underline">full channel list</Link> to learn more.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: "30,000+", label: "Live Channels" },
              { value: "150,000+", label: "Movies & Series" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "4K UHD", label: "Streaming Quality" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-[var(--color-brand-primary)]">{stat.value}</p>
                <p className="text-sm text-neutral-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features"><FeaturesGrid /></section>

      <section id="content" className="w-full bg-[#08080d] py-16">
        <div className="container mx-auto max-w-[1400px]">
          <Carousel title="Top Live Sports Channels" items={SPORTS_ITEMS} aspectRatio="logo" />
          <Carousel title="Trending 4K VOD Movies" items={VOD_ITEMS} />
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="w-full py-20 bg-[var(--color-background-base)]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Compatible With <span className="text-[var(--color-brand-primary)]">All Devices</span></h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">Watch IPTV on any device. Fire TV Stick, Smart TV, Android, iOS, Apple TV, PC, and MAG Box &mdash; all supported.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { name: "Fire TV Stick", href: "/blog/iptv-on-firestick-switzerland" },
              { name: "Smart TV", href: "/blog/iptv-on-smart-tv-switzerland" },
              { name: "Android", href: "/blog/best-iptv-apps-2026" },
              { name: "iPhone / iPad", href: "/blog/best-iptv-apps-2026" },
              { name: "Apple TV", href: "/blog/iptv-on-apple-tv-setup" },
              { name: "Windows / Mac", href: "/installation-guide" },
            ].map((device) => (
              <Link key={device.name} href={device.href} className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6 text-center hover:border-[var(--color-brand-primary)]/30 transition-colors block">
                <p className="text-white font-semibold text-sm">{device.name}</p>
              </Link>
            ))}
          </div>
          <Link href="/supported-devices" className="inline-block mt-8 text-[var(--color-brand-primary)] hover:underline font-semibold">View all supported devices &rarr;</Link>
        </div>
      </section>

      <BiggestSale />

      <section id="pricing"><Pricing /></section>

      <section id="faq"><FAQ /></section>

      {/* Internal links section for SEO */}
      <section className="w-full py-16 bg-[#060609] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Learn More About IPTV in Switzerland</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Guides</h3>
              <ul className="space-y-2">
                <li><Link href="/blog/how-does-iptv-work" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">How Does IPTV Work?</Link></li>
                <li><Link href="/blog/best-internet-speed-for-iptv" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">Best Internet Speed for IPTV</Link></li>
                <li><Link href="/blog/swiss-tv-channels-iptv" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">Swiss TV Channels on IPTV</Link></li>
                <li><Link href="/blog/best-iptv-apps-2026" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">Best IPTV Apps 2026</Link></li>
                <li><Link href="/blog/iptv-for-expats-in-switzerland" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">IPTV for Expats</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Setup Guides</h3>
              <ul className="space-y-2">
                <li><Link href="/blog/iptv-on-firestick-switzerland" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">IPTV on Firestick</Link></li>
                <li><Link href="/blog/iptv-on-smart-tv-switzerland" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">IPTV on Smart TV</Link></li>
                <li><Link href="/blog/iptv-on-apple-tv-setup" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">IPTV on Apple TV</Link></li>
                <li><Link href="/blog/iptv-buffering-fix-guide" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">Fix IPTV Buffering</Link></li>
                <li><Link href="/installation-guide" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">Full Installation Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Compare &amp; Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/blog/iptv-vs-cable-tv-switzerland" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">IPTV vs Cable TV Switzerland</Link></li>
                <li><Link href="/blog/iptv-vs-netflix-streaming-comparison" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">IPTV vs Netflix</Link></li>
                <li><Link href="/blog/is-iptv-legal-in-switzerland" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">Is IPTV Legal in Switzerland?</Link></li>
                <li><Link href="/blog/iptv-payment-methods-switzerland" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">Payment Methods (TWINT)</Link></li>
                <li><Link href="/faq" className="text-neutral-400 hover:text-[var(--color-brand-primary)] text-sm transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
