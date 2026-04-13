import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "IPTV Geneva | Best IPTV Service in Geneva 2026",
  description:
    "Top IPTV service in Geneva with 30,000+ channels in 4K. Watch Servette FC, RTS, French channels and more. Plans from CHF 5.00/mo. Ideal for expats.",
  alternates: { canonical: "/iptv-geneve" },
};

export default function IPTVGenevePage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rapid IPTV Swiss - Geneva",
    description:
      "Premium IPTV service provider serving Geneva, Switzerland with 30,000+ live channels, movies, and series.",
    url: "https://rapidiptvswiss.com/iptv-geneve",
    areaServed: {
      "@type": "City",
      name: "Geneva",
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
          { name: "IPTV Geneva", href: "/iptv-geneve" },
        ]}
      />
      <StructuredData data={localSchema} id="local-schema" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          IPTV Geneva &mdash; Best IPTV Service in Geneva 2026
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Geneva is one of the most cosmopolitan cities in the world. Home to the United Nations, CERN, the Red Cross, and countless international organizations, Geneva has a uniquely diverse population. Residents speak French, English, Spanish, Arabic, Portuguese, and dozens of other languages. Rapid IPTV Swiss is the perfect entertainment solution for this multicultural city, offering over 30,000 live channels from more than 80 countries, all in stunning 4K quality.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Reliable IPTV on Geneva&apos;s High-Speed Networks
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Geneva enjoys excellent broadband infrastructure from all three major Swiss providers. Swisscom offers fiber connections up to 10 Gbps in many Geneva neighborhoods. Sunrise and Salt provide competitive plans with speeds ranging from 100 Mbps to 1 Gbps across most of the canton. Even on a standard 25 Mbps connection, our IPTV service streams smoothly without buffering.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Whether you live in Eaux-Vives, Carouge, Plainpalais, or the lakeside communes, your connection is ready for IPTV. Learn more about optimal settings in our{" "}
          <Link href="/blog/best-internet-speed-for-iptv" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            internet speed guide for IPTV
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Live Sports for Geneva Fans
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Geneva has a passionate sports scene. Follow Servette FC in the Swiss Super League, cheer on the Geneva Eagles (Geneve-Servette HC) in the National League ice hockey, or catch international athletics events hosted in the city. With Rapid IPTV Swiss, every match is available live on your screen.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          You also get full coverage of Ligue 1 (the French league is hugely popular in Geneva), the English Premier League, La Liga, Serie A, Champions League, and all major international tournaments. Explore the complete{" "}
          <Link href="/sports" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            sports channel lineup
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          French-Language Channels and Content for Expats
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          As the heart of Romandie, Geneva&apos;s primary language is French. Our service includes all RTS channels (RTS 1, RTS 2), along with a full selection of French broadcasters: TF1, France 2, France 3, M6, Canal+, and BFM TV. You also get access to Swiss-German channels (SRF) and Italian-language RSI for full national coverage.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          For Geneva&apos;s large international community, we offer channels in English (BBC, Sky, CNN), Arabic (Al Jazeera, MBC), Spanish, Portuguese, Turkish, and many more. Check the full{" "}
          <Link href="/live-channels" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            live channel list
          </Link>{" "}
          to find content in your native language.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Quick Setup on Every Device
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Setting up IPTV in Geneva is fast and straightforward. Our service runs on Smart TVs, Android boxes, Amazon Fire Stick, Apple TV, iPhones, iPads, Android phones, and PCs. No satellite dish or cable subscription needed. Just pick a plan, get your credentials, and start streaming within minutes.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Visit our{" "}
          <Link href="/setup-guides" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            device setup guides
          </Link>{" "}
          for detailed instructions on IPTV Smarters, TiviMate, and other popular apps. Our WhatsApp support team is available if you need any help.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          IPTV Plans Starting at CHF 5.00/Month
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Enjoy premium entertainment at a fraction of the cost of traditional cable. Our subscriptions start at just CHF 5.00 per month with an annual plan. Choose from 3-month, 6-month, or 12-month options with support for 1 to 5 devices. Every plan includes 30,000+ live channels, on-demand movies and series, catch-up TV, and a built-in EPG.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          We accept TWINT, credit cards, PayPal, and cryptocurrency. No hidden fees, no long-term contracts. See all available options on our{" "}
          <Link href="/plans" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            pricing page
          </Link>.
        </p>

        <div className="mt-16 bg-[var(--color-background-surface)] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Streaming IPTV in Geneva Today
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Join the growing community of IPTV viewers in Geneva. Choose your plan, set up in minutes, and unlock unlimited entertainment.
          </p>
          <Link
            href="/plans"
            className="inline-block bg-[var(--color-brand-primary)] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            View Plans &amp; Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
