import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "IPTV Zurich | Best IPTV Service in Zurich 2026",
  description:
    "Premium IPTV service in Zurich with 30,000+ channels in 4K. Watch FC Zurich, ZSC Lions, SRF and more. Plans from CHF 5.00/mo. Fast setup for Swisscom, Sunrise & Salt.",
  alternates: { canonical: "/iptv-zurich" },
};

export default function IPTVZurichPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rapid IPTV Swiss - Zurich",
    description:
      "Premium IPTV service provider serving Zurich, Switzerland with 30,000+ live channels, movies, and series.",
    url: "https://rapidiptvswiss.com/iptv-zurich",
    areaServed: {
      "@type": "City",
      name: "Zurich",
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
          { name: "IPTV Zurich", href: "/iptv-zurich" },
        ]}
      />
      <StructuredData data={localSchema} id="local-schema" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          IPTV Zurich &mdash; Best IPTV Service in Zurich 2026
        </h1>

        <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Zurich is the largest city in Switzerland and a global financial hub. With a population of over 430,000 residents and a thriving international community, Zurich demands world-class entertainment. Rapid IPTV Swiss delivers exactly that &mdash; over 30,000 live channels, an extensive library of movies and series, and crystal-clear 4K streaming, all optimized for viewers right here in Zurich.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          IPTV Streaming Built for Zurich&apos;s Internet Infrastructure
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Zurich enjoys some of the fastest broadband speeds in Switzerland. As the home of Swisscom&apos;s headquarters, the city benefits from widespread fiber-optic coverage. Whether you connect through Swisscom, Sunrise, or Salt, most Zurich households have access to speeds ranging from 100 Mbps up to 10 Gbps on fiber plans. Even standard connections at 25&ndash;50 Mbps are more than sufficient for smooth IPTV streaming.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Our service is designed to work flawlessly on all major Swiss ISPs. There is no buffering, no lag, and no complicated setup. Whether you live near Zurich HB, in Oerlikon, Seefeld, or the surrounding suburbs, your IPTV experience will be seamless. For tips on getting the best connection, check out our guide on the{" "}
          <Link href="/blog/best-internet-speed-for-iptv" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            best internet speed for IPTV
          </Link>.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Watch Local Zurich Sports Live
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Sports fans in Zurich have plenty to cheer for, and Rapid IPTV Swiss puts every match at your fingertips. Follow FC Zurich as they compete in the Swiss Super League, or catch the ZSC Lions battling it out in the National League ice hockey season. Our IPTV service carries all the major sports channels so you never miss a goal, a save, or a championship moment.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Beyond local teams, you get access to the full spectrum of European football leagues, Champions League, Formula 1, tennis Grand Slams, and much more. Visit our{" "}
          <Link href="/sports" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            sports channels
          </Link>{" "}
          page to see the complete lineup.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Swiss-German Channels and International Content
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Zurich sits in the German-speaking region of Switzerland, and our channel lineup reflects that. You get full access to SRF 1, SRF zwei, SRF info, and all other Swiss-German public broadcasting channels. On top of that, we carry German channels like ARD, ZDF, ProSieben, and RTL, along with Austrian broadcasters ORF 1 and ORF 2.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Zurich is also one of the most international cities in Switzerland. Many residents speak English, French, or other languages at home. With Rapid IPTV Swiss, you can access channels from over 80 countries, including content in English, French, Italian, Turkish, Arabic, Portuguese, and many more. Browse our full{" "}
          <Link href="/live-channels" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            live channel list
          </Link>{" "}
          to find content in your language.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Easy Setup on Any Device in Zurich
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Getting started with IPTV in Zurich takes just a few minutes. Our service works on Smart TVs (Samsung, LG, Sony), Android TV boxes, Amazon Fire Stick, Apple TV, smartphones, tablets, and computers. No satellite dish, no cable installation, and no technician visit required. Simply choose a plan, receive your login details, and start watching.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Need help getting set up? Our{" "}
          <Link href="/setup-guides" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            step-by-step setup guides
          </Link>{" "}
          cover every device and app, including IPTV Smarters, TiviMate, and VLC. Our support team is also available via WhatsApp to walk you through the process.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-12 mb-6">
          Affordable IPTV Plans for Zurich Residents
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          Premium entertainment should not come with a premium price tag. Our IPTV plans start at just CHF 5.00 per month when you choose an annual subscription. We offer flexible 3-month, 6-month, and 12-month plans with support for up to 5 simultaneous connections. Every plan includes access to 30,000+ live channels, Video on Demand, catch-up TV, and an electronic program guide (EPG).
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
          You can pay with TWINT, credit card, PayPal, or cryptocurrency. There are no contracts, no hidden fees, and you can cancel anytime. Compare all our options on the{" "}
          <Link href="/plans" className="text-[var(--color-brand-primary)] underline hover:opacity-80">
            pricing plans
          </Link>{" "}
          page.
        </p>

        <div className="mt-16 bg-[var(--color-background-surface)] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Streaming in Zurich?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied viewers across Zurich. Pick a plan, set up in minutes, and enjoy unlimited entertainment tonight.
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
