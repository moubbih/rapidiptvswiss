import { Metadata } from "next";
import ResellerPageClient from "./ResellerPageClient";

export const metadata: Metadata = {
  title: "Become an IPTV Reseller Switzerland | Rapid IPTV Swiss",
  description: "Start your own IPTV business in Switzerland with our reseller program. White-label options, flexible pricing, full channel range. Demo panel from CHF 129.",
  alternates: { canonical: "/reseller" },
};

export default function Page() { return <ResellerPageClient />; }
