import LegalLayout from "@/components/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Rapid IPTV Swiss",
  description: "Terms of Service for Rapid IPTV Swiss subscriptions.",
  alternates: { canonical: "/tos" },
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using Rapid IPTV Swiss (&quot;the Service&quot;), you agree to be bound by these terms.</p>
      <h2>2. Description of Service</h2>
      <p>Rapid IPTV Swiss provides online video streaming including live television channels, movies, and series over the internet to internet-connected devices.</p>
      <h2>3. User Accounts</h2>
      <p>You must purchase a subscription to use the Service. You are responsible for maintaining confidentiality of your account credentials.</p>
      <h2>4. Prohibited Uses</h2>
      <p>You may not use the Service for any illegal purpose. Sharing credentials with unauthorized parties or running a single-device subscription on multiple devices will result in account termination.</p>
      <h2>5. Service Availability</h2>
      <p>We strive for 99.9% uptime but do not guarantee uninterrupted service due to network maintenance and ISP limitations.</p>
      <h2>6. Changes to Terms</h2>
      <p>We reserve the right to modify these Terms at any time. Continued use constitutes acceptance of updated terms.</p>
    </LegalLayout>
  );
}
