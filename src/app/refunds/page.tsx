import LegalLayout from "@/components/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Rapid IPTV Swiss",
  description: "Read the refund policy for Rapid IPTV Swiss subscriptions.",
  alternates: { canonical: "/refunds" },
};

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund Policy">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      <h2>1. General Policy</h2>
      <p>Rapid IPTV Swiss offers a premium digital service with instant access. We enforce a strict refund policy to prevent abuse.</p>
      <h2>2. 7-Day Technical Guarantee</h2>
      <p>Full refund within the <strong>first 7 days</strong> if: your IPTV line is technically non-functional, you have contacted support, and we are unable to resolve the issue.</p>
      <h2>3. Ineligible Claims</h2>
      <p>Refunds are not issued for: change of mind, slow personal internet, specific channel buffering during peak events, ISP throttling, or device setup issues.</p>
      <h2>4. Requesting a Refund</h2>
      <p>Contact our support team with proof of the technical issue and confirmation of prior support contact.</p>
    </LegalLayout>
  );
}
