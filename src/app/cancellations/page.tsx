import LegalLayout from "@/components/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy | Rapid IPTV Swiss",
  description: "Review the cancellation policy for Rapid IPTV Swiss subscriptions.",
  alternates: { canonical: "/cancellations" },
};

export default function CancellationPolicy() {
  return (
    <LegalLayout title="Cancellation Policy">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      <h2>1. Cancelling Your Subscription</h2>
      <p>You may cancel your Rapid IPTV Swiss subscription at any time by contacting our support team. Your subscription will not auto-renew.</p>
      <h2>2. 24-Hour Cancellation Window</h2>
      <p>If you cancel within the <strong>first 24 hours</strong> of initial purchase, you are eligible for a full cancellation void with no questions asked.</p>
      <h2>3. Cancellations After 24 Hours</h2>
      <p>Cancellations after 24 hours prevent the next billing cycle. You retain access for the remainder of your paid period.</p>
    </LegalLayout>
  );
}
