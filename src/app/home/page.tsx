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
  title: "Rapid IPTV Swiss | Best IPTV Switzerland 2026 | 30,000+ Channels in 4K",
  description: "Stream 30,000+ live channels including SRF, RTS, RSI in 4K Ultra HD. Best IPTV subscription in Switzerland 2026. Anti-freeze technology, instant activation. Plans from CHF 5.00/mo.",
  alternates: { canonical: "/home" },
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
      <BreadcrumbSchema items={[{ name: "Home", href: "/home" }]} />
      <StructuredData id="speakable-schema" data={{
        "@context": "https://schema.org", "@type": "WebPage",
        name: "Rapid IPTV Swiss \u2014 Premium IPTV Service in Switzerland",
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#about h2", "#about p"] },
        url: "https://rapidiptvswiss.com/home",
      }} />
      <Hero />

      <section id="about" className="w-full bg-[#060609] py-16 border-b border-white/5">
        <div className="container mx-auto max-w-4xl px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is Rapid IPTV Swiss?</h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-6">
            Rapid IPTV Swiss is a premium IPTV subscription service built specifically for Switzerland. It delivers over 30,000 live TV channels &mdash; including Swiss national broadcasters SRF, RTS, and RSI &mdash; along with 150,000+ movies and series on demand in 4K Ultra HD quality. Our anti-freeze technology guarantees 99.9% uptime across all Swiss cities including Z&uuml;rich, Gen&egrave;ve, Basel, Bern, and Lausanne. Compatible with all major devices, setup takes under 5 minutes.
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
            {["Fire TV Stick", "Smart TV", "Android", "iPhone / iPad", "Apple TV", "Windows / Mac"].map((device) => (
              <div key={device} className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6 text-center hover:border-[var(--color-brand-primary)]/30 transition-colors">
                <p className="text-white font-semibold text-sm">{device}</p>
              </div>
            ))}
          </div>
          <Link href="/supported-devices" className="inline-block mt-8 text-[var(--color-brand-primary)] hover:underline font-semibold">View all supported devices &rarr;</Link>
        </div>
      </section>

      <BiggestSale />

      <section id="pricing"><Pricing /></section>

      <section id="faq"><FAQ /></section>
    </div>
  );
}
