import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PricingPage from "./PricingPageClient";

export const metadata: Metadata = {
  title: "IPTV Subscription Switzerland | Pricing Plans in CHF 2026",
  description: "IPTV subscription plans in CHF for Switzerland. 3, 6, or 12 months. 1-5 devices. 30,000+ channels in 4K. Pay with TWINT, Credit Card, PayPal, or Crypto. From CHF 5.00/mo.",
  alternates: { canonical: "/plans" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/home" }, { name: "Pricing Plans", href: "/plans" }]} />
      <PricingPage />
    </>
  );
}
