import FAQ from "@/components/FAQ";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Switzerland FAQ | Frequently Asked Questions 2026",
  description: "Answers to common questions about IPTV in Switzerland. Is IPTV legal? What internet speed do I need? Which devices are supported? How to install IPTV in Switzerland.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-24">
      <BreadcrumbSchema items={[{ name: "Home", href: "/home" }, { name: "FAQ", href: "/faq" }]} />
      <FAQ />
    </div>
  );
}
