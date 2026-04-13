import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "IPTV Basel | Best IPTV Service in Basel 2026",
  description:
    "Best IPTV service in Basel with 30,000+ channels in 4K. Watch FC Basel, SRF, German & French channels. Plans from CHF 5.00/mo. Works on all devices.",
  alternates: { canonical: "/iptv-basel" },
};

export default function IPTVBaselPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rapid IPTV Swiss - Basel",
    description:
      "Premium IPTV service provider serving Basel, Switzerland with 30,000+ live channels, movies, and series.",
    url: "https://rapidiptvswiss.com/iptv-basel",
    areaServed: {
      "@type": "City",
      name: "Basel",
      containedInPlace: {
        "@type": "Country",
        name: "Switzerland",
      },
    },
    priceRange: "CHF 5.00 - CHF 13.00",
    sameAs: "https://rapidiptvswiss.com",
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "IPTV Basel", href: "/iptv-basel" },
        ]}
      />
      <StructuredData data={localSchema} id="local-schema" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          IPTV Basel &mdash; Best IPTV Service in Basel 2026
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Basel sits at the crossroads of Switzerland, France, and Germany, making it one of the most culturally rich cities in Europe. Known worldwide as a hub for pharmaceuticals, art, and architecture, Basel is home to a diverse population that values quality entertainment. Rapid IPTV Swiss brings over 30,000 live channels in 4K directly to your screen, serving the unique trilingual needs of Basel residents.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          IPTV Optimized for Basel&apos;s Fast Internet
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Basel benefits from strong broadband coverage across all three major Swiss ISPs. Swisscom, Sunrise, and Salt offer fiber connections reaching speeds of 100 Mbps to 10 Gbps in most Basel neighborhoods, including Kleinbasel, Grossbasel, Riehen, and Birsfelden. Even on a basic 25 Mbps plan, our IPTV service streams without any buffering.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          For the best streaming experience, we recommend at least 15 Mbps per device. Learn how to optimize your connection in our{" "}
          <Link href="/blog/best-internet-speed-for-iptv" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            IPTV internet speed guide
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          FC Basel and Live Sports Streaming
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Basel is a city that lives and breathes football. FC Basel has been one of the most successful clubs in Swiss football history, and our IPTV service ensures you never miss a single match. Watch every Swiss Super League game, UEFA Europa League fixture, and friendly live from your living room.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Beyond football, Basel residents enjoy tennis (the Swiss Indoors is held right here in Basel), ice hockey, cycling, and winter sports. Our service carries all major sports networks, giving you access to the Premier League, Bundesliga, La Liga, Formula 1, and more. See our full{" "}
          <Link href="/sports" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            sports channel selection
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Trilingual Channel Selection for a Border City
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Basel&apos;s location at the French and German borders means residents frequently watch content in all three languages. Our IPTV lineup includes all Swiss-German channels (SRF 1, SRF zwei), German networks (ARD, ZDF, ProSieben, RTL, SAT.1), and French broadcasters (TF1, France 2, M6, Canal+). You also get Austrian channels ORF 1 and ORF 2.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          With Basel&apos;s international pharma community, many residents also need English, Italian, or other language channels. We carry content from over 80 countries. Explore the complete{" "}
          <Link href="/live-channels" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            channel list
          </Link>{" "}
          to find your preferred programming.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Simple Setup, No Hardware Required
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Start watching IPTV in Basel within minutes. Our service works on Smart TVs, Android TV boxes, Amazon Fire Stick, Apple TV, smartphones, tablets, and laptops. No satellite dish, no cable box, and no technician appointment needed. Choose your plan, receive your credentials instantly, and start streaming.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Our{" "}
          <Link href="/setup-guides" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            setup guides
          </Link>{" "}
          walk you through installation on every major device and app. If you need assistance, our support team is just a WhatsApp message away.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Flexible IPTV Plans from CHF 5.00/Month
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Cut the cord and save with Rapid IPTV Swiss. Our plans start at CHF 5.00 per month on an annual subscription. Choose 3-month, 6-month, or 12-month durations with support for 1 to 5 simultaneous devices. Every subscription includes 30,000+ live channels, movies and series on demand, catch-up TV, and a full EPG.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Pay securely with TWINT, credit card, PayPal, or crypto. No binding contracts and no surprise charges. View all plans on our{" "}
          <Link href="/plans" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            pricing page
          </Link>.
        </p>

        <div className="mt-16 bg-[var(--color-background-surface)] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get IPTV in Basel Now
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Join Basel residents who have already switched to Rapid IPTV Swiss. Pick a plan, set up in minutes, and start enjoying premium entertainment.
          </p>
          <Link
            href="/plans"
            className="inline-block bg-[var(--color-brand-primary)] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            Choose Your Plan
          </Link>
        </div>
      </div>
    </div>
  );
}
