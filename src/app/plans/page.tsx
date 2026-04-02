import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PricingPage from "./PricingPageClient";

export const metadata: Metadata = {
  title: "IPTV Subscription Switzerland | Pricing Plans in CHF 2026",
  description: "IPTV subscription plans in CHF for Switzerland. 1 Month, 6 Months, 12 Months. 30,000+ channels in 4K. Pay with TWINT, Credit Card, or PayPal. No contract.",
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
