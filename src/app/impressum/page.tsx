import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Impressum | Rapid IPTV Swiss",
  description: "Legal information and company details for Rapid IPTV Swiss. Contact details, responsible party, and disclaimer.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-16">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Impressum", href: "/impressum" }]} />
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-8">Impressum</h1>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Company Information</h2>
            <p className="mb-2"><strong className="text-white">Rapid IPTV Swiss</strong></p>
            <p>Email: <a href="mailto:support@rapidiptvswiss.com" className="text-[var(--color-brand-primary)] hover:underline">support@rapidiptvswiss.com</a></p>
            <p>WhatsApp: <a href="https://wa.me/15595082154" className="text-[var(--color-brand-primary)] hover:underline">+1 (559) 508-2154</a></p>
            <p>Website: <a href="https://rapidiptvswiss.com" className="text-[var(--color-brand-primary)] hover:underline">rapidiptvswiss.com</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Responsible for Content</h2>
            <p>Rapid IPTV Swiss Team</p>
            <p>Email: support@rapidiptvswiss.com</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Disclaimer</h2>
            <p className="mb-3">
              The content of this website has been compiled with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with applicable Swiss law.
            </p>
            <p>
              We are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Copyright</h2>
            <p>
              The content and works created by the site operators on these pages are subject to Swiss copyright law. Duplication, processing, distribution, and any form of commercialization of such material beyond the scope of copyright law require the prior written consent of the respective author or creator.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">External Links</h2>
            <p>
              This website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Data Protection</h2>
            <p>
              For information about how we handle your personal data, please see our{" "}
              <Link href="/privacy" className="text-[var(--color-brand-primary)] hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Related Pages</h2>
            <ul className="space-y-2">
              <li><Link href="/tos" className="text-[var(--color-brand-primary)] hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-[var(--color-brand-primary)] hover:underline">Privacy Policy</Link></li>
              <li><Link href="/refunds" className="text-[var(--color-brand-primary)] hover:underline">Refund Policy</Link></li>
              <li><Link href="/reach-us" className="text-[var(--color-brand-primary)] hover:underline">Contact Us</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
