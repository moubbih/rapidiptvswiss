import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Switzerland Blog | Guides, Tips & News 2026",
  description:
    "Expert guides on IPTV in Switzerland. Setup tutorials, legal guides, comparisons, troubleshooting, Swiss channel guides. Updated April 2026.",
  keywords: [
    "IPTV Switzerland blog",
    "IPTV Schweiz guides",
    "IPTV Suisse articles",
    "IPTV tips Switzerland",
    "best IPTV Switzerland 2026",
  ],
  openGraph: {
    title: "IPTV Switzerland Blog | Guides, Tips & News 2026",
    description: "Expert articles and guides about IPTV in Switzerland. Setup tutorials, legal info, comparisons, and more.",
    url: "https://rapidiptvswiss.com/articles",
    siteName: "Rapid IPTV Swiss",
    type: "website",
  },
  alternates: { canonical: "/articles" },
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-16">{children}</div>;
}
