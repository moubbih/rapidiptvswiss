import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "IPTV Lugano | Best IPTV Service in Lugano 2026",
  description:
    "Best IPTV in Lugano with 30,000+ channels in 4K. Watch FC Lugano, RSI, Italian channels live. Plans from CHF 5.00/mo. Perfect for Ticino residents.",
  alternates: { canonical: "/iptv-lugano" },
};

export default function IPTVLuganoPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rapid IPTV Swiss - Lugano",
    description:
      "Premium IPTV service provider serving Lugano, Switzerland with 30,000+ live channels, movies, and series.",
    url: "https://rapidiptvswiss.com/iptv-lugano",
    areaServed: {
      "@type": "City",
      name: "Lugano",
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
          { name: "IPTV Lugano", href: "/iptv-lugano" },
        ]}
      />
      <StructuredData data={localSchema} id="local-schema" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          IPTV Lugano &mdash; Best IPTV Service in Lugano 2026
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Lugano is the jewel of Ticino, the Italian-speaking region of Switzerland. Nestled between the lake and the mountains, Lugano blends Swiss precision with Mediterranean flair. For residents who want access to Italian channels, Swiss content, and international programming, Rapid IPTV Swiss is the ideal solution. We deliver over 30,000 live channels in 4K quality, a massive on-demand library, and reliable streaming across all devices.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          IPTV That Works on Lugano&apos;s Networks
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Lugano has good broadband coverage from Swisscom, Sunrise, and Salt. Fiber connections offering 100 Mbps to 1 Gbps are available in central Lugano, Paradiso, Massagno, and Viganello. Many areas also have access to Swisscom&apos;s 10 Gbps fiber plans. Even on standard connections of 25&ndash;50 Mbps, our IPTV service streams smoothly without buffering or interruptions.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          For the best experience, especially if multiple people in your household stream at the same time, we recommend at least 15 Mbps per device. Learn more in our{" "}
          <Link href="/blog/best-internet-speed-for-iptv" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            internet speed guide for IPTV
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          FC Lugano and Italian-Swiss Sports
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          FC Lugano competes in the Swiss Super League, and Ticino fans follow the team with fierce loyalty. With Rapid IPTV Swiss, you can watch every home and away match live. We carry all the channels broadcasting Swiss football, including cup competitions and European qualifiers.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Lugano&apos;s proximity to Italy means Serie A is hugely popular here. Our service gives you access to every Serie A match, along with Champions League, Europa League, Premier League, La Liga, Bundesliga, Formula 1, MotoGP, and cycling events. See our{" "}
          <Link href="/sports" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            sports channel lineup
          </Link>{" "}
          for full details.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Italian Channels, RSI, and International Content
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Lugano is the largest city in Italian-speaking Switzerland, and our channel lineup reflects this. You get full access to RSI (RSI LA 1, RSI LA 2), the Swiss-Italian public broadcaster. We also carry a comprehensive Italian channel selection: Rai 1, Rai 2, Rai 3, Canale 5, Italia 1, Rete 4, La7, Sky Italia channels, and Mediaset networks.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          You also have access to Swiss-German (SRF) and French (RTS) channels for national coverage. For Lugano&apos;s cross-border community with ties to Como and Milan, our Italian channel selection is unmatched. Browse the complete{" "}
          <Link href="/live-channels" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            live channel list
          </Link>{" "}
          to see every available channel.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Easy Device Setup in Lugano
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Start watching IPTV in Lugano in just a few minutes. Our service works on Smart TVs, Android TV boxes, Amazon Fire Stick, Apple TV, smartphones, tablets, and laptops. No satellite dish needed, no cable contracts, and no hardware installation. Simply pick your plan, get your login credentials, and start streaming.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Our{" "}
          <Link href="/setup-guides" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            setup guides
          </Link>{" "}
          provide step-by-step instructions for every major device and app, including IPTV Smarters and TiviMate. WhatsApp support is available if you need any assistance.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          IPTV Subscriptions from CHF 5.00/Month
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Enjoy all-inclusive IPTV at an affordable price. Our annual plan starts at CHF 5.00 per month, with 3-month and 6-month options also available. Every plan supports 1 to 5 simultaneous connections and includes 30,000+ live channels, movies and series on demand, catch-up TV, and a full electronic program guide.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Pay with TWINT, credit card, PayPal, or cryptocurrency. No contracts and no hidden fees. Explore all options on our{" "}
          <Link href="/plans" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            pricing page
          </Link>.
        </p>

        <div className="mt-16 bg-[var(--color-background-surface)] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get IPTV in Lugano Now
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Join Ticino residents enjoying premium IPTV. Select your plan, set up in minutes, and start streaming Italian and international channels tonight.
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
