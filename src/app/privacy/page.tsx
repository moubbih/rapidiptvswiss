import LegalLayout from "@/components/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rapid IPTV Swiss",
  description: "Read how Rapid IPTV Swiss handles and protects your personal data in accordance with Swiss privacy regulations.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly when you purchase a subscription or contact support. This may include your name, email address, and payment information processed securely through our payment gateways.</p>
      <h2>2. How We Use Your Information</h2>
      <p>We use information to operate and provide the Service, process payments, and communicate regarding your subscription or technical support.</p>
      <h2>3. Data Security</h2>
      <p>We employ industry-standard encryption to protect your personal information during transmission and storage. We comply with applicable Swiss data protection laws.</p>
      <h2>4. Third-Party Services</h2>
      <p>We may share information with third-party payment processors solely to provide the Service. We do not sell your personal data.</p>
      <h2>5. Your Rights</h2>
      <p>You have the right to request access, correction, or deletion of your personal data. Contact our support team to exercise these rights.</p>
    </LegalLayout>
  );
}
