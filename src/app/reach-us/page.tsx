import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Rapid IPTV Swiss",
  description: "Get in touch with Rapid IPTV Swiss. Reach us via email, WhatsApp, or contact form for support, sales, and technical assistance.",
  alternates: { canonical: "/reach-us" },
};

export default function Page() { return <ContactPageClient />; }
