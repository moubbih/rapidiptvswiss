import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "IPTV Lausanne | Best IPTV Service in Lausanne 2026",
  description:
    "Top IPTV in Lausanne with 30,000+ channels in 4K. Watch FC Lausanne-Sport, RTS, French channels live. Plans from CHF 5.00/mo. Olympic capital streaming.",
  alternates: { canonical: "/iptv-lausanne" },
};

export default function IPTVLausannePage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rapid IPTV Swiss - Lausanne",
    description:
      "Premium IPTV service provider serving Lausanne, Switzerland with 30,000+ live channels, movies, and series.",
    url: "https://rapidiptvswiss.com/iptv-lausanne",
    areaServed: {
      "@type": "City",
      name: "Lausanne",
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
          { name: "IPTV Lausanne", href: "/iptv-lausanne" },
        ]}
      />
      <StructuredData data={localSchema} id="local-schema" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          IPTV Lausanne &mdash; Best IPTV Service in Lausanne 2026
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Lausanne is the Olympic capital of the world, home to the International Olympic Committee and a vibrant cultural scene on the shores of Lake Geneva. With a population passionate about sports, arts, and education, Lausanne deserves top-tier entertainment. Rapid IPTV Swiss delivers over 30,000 live channels, thousands of movies and series, and pristine 4K streaming to households across the city.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Reliable IPTV on Lausanne&apos;s Broadband Networks
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Lausanne has excellent internet coverage from all three major Swiss providers. Swisscom, Sunrise, and Salt offer fiber connections in most neighborhoods, with speeds ranging from 100 Mbps up to 10 Gbps. Whether you are in Ouchy, Flon, Chailly, or the university district, your broadband is ready for IPTV. Even standard connections of 25&ndash;50 Mbps handle our streams without any issues.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          For optimal streaming on multiple devices, we recommend at least 15 Mbps per screen. Get more tips in our{" "}
          <Link href="/blog/best-internet-speed-for-iptv" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            IPTV internet speed guide
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          FC Lausanne-Sport and Olympic Sports
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          As the Olympic capital, Lausanne has a deep connection to sports. Follow FC Lausanne-Sport in the Swiss Super League, catch Lausanne HC hockey games, or watch the latest athletics events. Rapid IPTV Swiss carries all major sports channels so you can experience every competition live.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Beyond local teams, you get full access to Ligue 1, the Premier League, Champions League, the Olympics, tennis Grand Slams, Formula 1, and cycling races including the Tour de Romandie. Browse our{" "}
          <Link href="/sports" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            sports channels
          </Link>{" "}
          for complete coverage.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          French-Language and International Channels
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Lausanne is in the French-speaking Romandie region. Our channel lineup features all RTS channels (RTS 1, RTS 2), along with French networks TF1, France 2, France 3, M6, Canal+, Arte, and BFM TV. You also get access to Swiss-German SRF channels and Italian-language RSI for nationwide coverage.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Lausanne is home to EPFL and the University of Lausanne, attracting students and professionals from around the world. For this international audience, we offer channels in English, Spanish, Portuguese, Arabic, Turkish, and many other languages. See the full{" "}
          <Link href="/live-channels" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            live channel list
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Watch on Any Device, Anywhere in Lausanne
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Rapid IPTV Swiss works on Smart TVs, Android boxes, Amazon Fire Stick, Apple TV, iPhones, Android devices, and computers. No satellite dish or cable subscription needed. Pick a plan, get your login details, and you are streaming within minutes. It is that simple.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Need help? Our{" "}
          <Link href="/setup-guides" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            setup guides
          </Link>{" "}
          cover step-by-step installation for IPTV Smarters, TiviMate, and all popular apps. WhatsApp support is also available around the clock.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Plans Starting at CHF 5.00/Month
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Get access to everything for as little as CHF 5.00 per month on a 12-month plan. We also offer 3-month and 6-month subscriptions with support for 1 to 5 devices. Every plan includes 30,000+ live channels, Video on Demand, catch-up TV, and EPG. No hidden fees and no long-term commitments.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          We accept TWINT, credit cards, PayPal, and cryptocurrency. Check all our options on the{" "}
          <Link href="/plans" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            pricing plans page
          </Link>.
        </p>

        <div className="mt-16 bg-[var(--color-background-surface)] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Streaming in Lausanne Today
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Join Lausanne viewers enjoying premium IPTV. Pick your plan, set up in minutes, and unlock thousands of channels tonight.
          </p>
          <Link
            href="/plans"
            className="inline-block bg-[var(--color-brand-primary)] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            View Plans &amp; Start Watching
          </Link>
        </div>
      </div>
    </div>
  );
}
