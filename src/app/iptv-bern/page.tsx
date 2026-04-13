import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "IPTV Bern | Best IPTV Service in Bern 2026",
  description:
    "Premium IPTV in Bern with 30,000+ channels in 4K. Watch BSC Young Boys, SRF, and Swiss sports live. Plans from CHF 5.00/mo. Fast setup on any device.",
  alternates: { canonical: "/iptv-bern" },
};

export default function IPTVBernPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rapid IPTV Swiss - Bern",
    description:
      "Premium IPTV service provider serving Bern, Switzerland with 30,000+ live channels, movies, and series.",
    url: "https://rapidiptvswiss.com/iptv-bern",
    areaServed: {
      "@type": "City",
      name: "Bern",
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
          { name: "IPTV Bern", href: "/iptv-bern" },
        ]}
      />
      <StructuredData data={localSchema} id="local-schema" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          IPTV Bern &mdash; Best IPTV Service in Bern 2026
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Bern is the capital of Switzerland and a UNESCO World Heritage city. With its medieval old town, federal government buildings, and a strong local identity, Bern combines tradition with modern living. Rapid IPTV Swiss delivers premium entertainment to Bern residents with over 30,000 live channels, a vast library of movies and series, and flawless 4K streaming quality.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Seamless Streaming on Bern&apos;s Internet Networks
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Bern has solid broadband infrastructure across the city and surrounding areas. Swisscom, Sunrise, and Salt all provide reliable connections, with fiber plans available in most neighborhoods offering speeds from 100 Mbps to 10 Gbps. Even areas with standard connections of 25&ndash;50 Mbps will enjoy smooth, buffer-free IPTV streaming.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Whether you live near the Bundeshaus, in Breitenrain, Bumpliz, or the Bern suburbs, our service adapts to your connection for the best picture quality. Read our{" "}
          <Link href="/blog/best-internet-speed-for-iptv" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            guide on internet speed for IPTV
          </Link>{" "}
          to optimize your setup.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          BSC Young Boys and Live Sports
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Bern is passionate about its football club. BSC Young Boys are the dominant force in Swiss football, and with Rapid IPTV Swiss, you can watch every Swiss Super League match, Champions League group stage game, and domestic cup fixture live from the Wankdorf Stadium or anywhere else. Our IPTV service carries all the channels you need.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          SC Bern is another major draw for sports fans, competing in the National League ice hockey. Beyond local teams, you get access to Bundesliga, Premier League, La Liga, Serie A, Formula 1, the Tour de France, and every major international sporting event. Visit our{" "}
          <Link href="/sports" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            sports channels page
          </Link>{" "}
          for the full list.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Swiss-German Channels and More
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Bern is firmly in the German-speaking part of Switzerland. You get complete access to SRF 1, SRF zwei, SRF info, and all Swiss-German public channels. We also carry a full lineup of German broadcasters including ARD, ZDF, ProSieben, RTL, SAT.1, VOX, and DMAX, plus Austrian channels ORF 1 and ORF 2.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Bern is home to many federal employees and diplomats who speak multiple languages. Our service includes channels in French (RTS, TF1, France 2), Italian (RSI), English, Turkish, Arabic, and dozens more. Browse the full{" "}
          <Link href="/live-channels" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            live channel directory
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Set Up IPTV in Bern in Minutes
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Getting started is simple. Rapid IPTV Swiss works on Smart TVs (Samsung, LG, Sony), Android boxes, Amazon Fire Stick, Apple TV, smartphones, tablets, and computers. No satellite dish, no cable box, no waiting for a technician. Choose a plan, receive your credentials, and start watching right away.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Follow our{" "}
          <Link href="/setup-guides" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            step-by-step setup guides
          </Link>{" "}
          to get running on your preferred device. Our WhatsApp support team is standing by to help with any questions.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          IPTV Plans from CHF 5.00 per Month
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Premium IPTV does not have to be expensive. Our annual plan starts at just CHF 5.00 per month, giving you access to 30,000+ channels, Video on Demand, catch-up TV, and EPG. We offer 3-month, 6-month, and 12-month subscriptions supporting up to 5 simultaneous devices.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Payment options include TWINT, credit card, PayPal, and cryptocurrency. No contracts, no hidden charges. Compare plans on our{" "}
          <Link href="/plans" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            pricing page
          </Link>.
        </p>

        <div className="mt-16 bg-[var(--color-background-surface)] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Watching IPTV in Bern
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Thousands of Bern residents already enjoy Rapid IPTV Swiss. Choose your plan today, set up in minutes, and experience unlimited entertainment.
          </p>
          <Link
            href="/plans"
            className="inline-block bg-[var(--color-brand-primary)] text-white font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            View Plans &amp; Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}
