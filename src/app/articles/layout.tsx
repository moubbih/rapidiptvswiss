import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Switzerland Blog & Guides | Rapid IPTV Swiss",
  description:
    "Expert articles and guides about IPTV in Switzerland. Learn about IPTV legality, compare IPTV vs cable TV, find the best internet speeds, and understand how IPTV works.",
  keywords: [
    "IPTV Switzerland blog",
    "IPTV Schweiz guides",
    "IPTV Suisse articles",
    "IPTV tips Switzerland",
    "best IPTV Switzerland 2026",
  ],
  openGraph: {
    title: "IPTV Switzerland Blog & Guides | Rapid IPTV Swiss",
    description:
      "Expert articles and guides about IPTV in Switzerland. Everything you need to know about IPTV services in Switzerland.",
    url: "https://rapidiptvswiss.com/articles",
    siteName: "Rapid IPTV Swiss",
    type: "website",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
