import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PricingPage from "./PricingPageClient";

export const metadata: Metadata = {
  title: "IPTV Subscription Switzerland | Pricing Plans in USD 2026",
  description: "IPTV subscription plans in USD for Switzerland. 3, 6, or 12 months. 1-5 devices. 19,000+ channels in 4K. Pay with TWINT, Credit Card, PayPal, or Crypto. From $6.08/mo.",
  alternates: { canonical: "/plans" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Pricing Plans", href: "/plans" }]} />
      <PricingPage />
    </>
  );
}
