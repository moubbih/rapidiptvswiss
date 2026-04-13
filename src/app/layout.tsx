import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rapidiptvswiss.com"),
  title: {
    default: "Best IPTV Switzerland 2026 | 30,000+ Channels in 4K",
    template: "%s | Rapid IPTV Swiss",
  },
  description:
    "Best IPTV subscription in Switzerland 2026. 30,000+ live channels including SRF, RTS, RSI in 4K Ultra HD. Plans from CHF 5.00/mo.",
  keywords: [
    "IPTV Switzerland",
    "IPTV Swiss",
    "IPTV Schweiz",
    "IPTV Suisse",
    "best IPTV Switzerland 2026",
    "IPTV subscription Switzerland",
    "IPTV provider Switzerland",
    "rapid IPTV Swiss",
    "abonnement IPTV Suisse",
    "IPTV Abo Schweiz",
  ],
  authors: [{ name: "Rapid IPTV Swiss Team" }],
  creator: "Rapid IPTV Swiss",
  publisher: "Rapid IPTV Swiss",
  openGraph: {
    title: "Best IPTV Switzerland 2026 | Rapid IPTV Swiss",
    description: "Stream 30,000+ live channels including SRF, RTS, RSI in 4K Ultra HD. Buffer-free IPTV built for Swiss homes. Plans from CHF 5.00/mo.",
    url: "https://rapidiptvswiss.com",
    siteName: "Rapid IPTV Swiss",
    images: [{ url: "/hero_bg.webp", width: 1200, height: 630, alt: "Rapid IPTV Swiss \u2014 Premium IPTV Streaming in Switzerland" }],
    locale: "en_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Switzerland 2026 | Rapid IPTV Swiss",
    description: "30,000+ channels, Live Sports, 150,000+ Movies & Series in 4K. The best IPTV provider in Switzerland.",
    images: ["/hero_bg.webp"],
    site: "@rapidiptvswiss",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rapid IPTV Swiss",
    url: "https://rapidiptvswiss.com",
    logo: { "@type": "ImageObject", url: "https://rapidiptvswiss.com/hero_bg.webp", width: 1200, height: 630 },
    description: "Premium IPTV subscription service in Switzerland offering 30,000+ live channels, 150,000+ movies and series in 4K Ultra HD.",
    foundingDate: "2024-01-01",
    areaServed: { "@type": "Country", name: "Switzerland" },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@rapidiptvswiss.com",
      contactType: "customer service",
      availableLanguage: ["English", "German", "French", "Italian"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rapid IPTV Swiss",
    url: "https://rapidiptvswiss.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://rapidiptvswiss.com/articles?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rapid IPTV Swiss",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Android, iOS, Windows, macOS, Fire OS, Tizen, WebOS",
    description: "Premium IPTV streaming service for Switzerland with 30,000+ live channels, 150,000+ VOD titles, 4K Ultra HD, anti-freeze technology.",
    url: "https://rapidiptvswiss.com",
    offers: {
      "@type": "Offer",
      price: "29.99",
      priceCurrency: "CHF",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://rapidiptvswiss.com/plans",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://m.media-amazon.com" />
        <link rel="dns-prefetch" href="https://m.media-amazon.com" />
        <link rel="alternate" hrefLang="en-CH" href="https://rapidiptvswiss.com" />
        <link rel="alternate" hrefLang="x-default" href="https://rapidiptvswiss.com" />
      </head>
      <body className={`${inter.className} antialiased selection:bg-[var(--color-brand-primary)] selection:text-white`} suppressHydrationWarning>
        <StructuredData data={orgSchema} id="org-schema" />
        <StructuredData data={websiteSchema} id="website-schema" />
        <StructuredData data={softwareSchema} id="software-schema" />
        <header><Navbar /></header>
        <main id="main-content">{children}</main>
        <WhatsAppButton />
        <Footer />
        <Script id="crisp-chat" strategy="afterInteractive">
          {`window.$crisp=[];window.CRISP_WEBSITE_ID="a2aeec22-a430-4b49-b133-29e01c899666";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>
      </body>
    </html>
  );
}
