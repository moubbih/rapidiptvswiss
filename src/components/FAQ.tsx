"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What is Rapid IPTV Swiss?",
    answer: "Rapid IPTV Swiss is a premium IPTV subscription service designed for Switzerland. It provides access to over 30,000 live TV channels including Swiss channels (SRF, RTS, RSI), 150,000+ movies and series on demand, and live sports events from around the globe. It streams in 4K Ultra HD with anti-freeze technology guaranteeing 99.9% uptime.",
  },
  {
    question: "Which Swiss channels are included?",
    answer: "Our service includes all major Swiss channels: SRF 1, SRF zwei, SRF info, RTS Un, RTS Deux, RSI LA 1, RSI LA 2, Blue Sport, and many more. You also get German, French, Italian, and English international channels \u2014 perfect for Switzerland\u2019s multilingual households.",
  },
  {
    question: "What devices are compatible?",
    answer: "Rapid IPTV Swiss works on Amazon Firestick (4K & Max), Android phones and tablets, iOS (iPhone/iPad), Samsung and LG Smart TVs, Apple TV, Windows PC, Mac, MAG Boxes, and Nvidia Shield. Setup takes under 5 minutes using Xtream Codes API or M3U link.",
  },
  {
    question: "Can I watch on multiple devices at the same time?",
    answer: "Yes. Choose from 1-device or 2-device subscription plans depending on your household needs. Each device gets its own independent stream with no quality loss.",
  },
  {
    question: "What internet speed do I need for 4K IPTV?",
    answer: "For HD streaming, 10 Mbps minimum is recommended. For 4K Ultra HD, at least 25 Mbps. Most Swiss internet connections from Swisscom, Sunrise, or Salt easily exceed this. We use HEVC/H.265 encoding to minimize bandwidth.",
  },
  {
    question: "Is there a contract or setup fee?",
    answer: "No. Rapid IPTV Swiss has zero hidden fees and no contracts. Plans start at CHF 14.99 per month. You pay only for the duration you choose and can cancel anytime.",
  },
  {
    question: "How does this compare to Swisscom TV or Sunrise TV?",
    answer: "Rapid IPTV Swiss offers 30,000+ channels versus the typical 200-300 from Swiss cable providers, at a fraction of the cost. No equipment rental fees, no appointments, and no geographic restrictions. Plus 4K quality, massive VOD library, and catch-up TV included.",
  },
  {
    question: "Does Rapid IPTV Swiss include live sports?",
    answer: "Yes. All major live sports included: Champions League, Bundesliga, Swiss Super League, Premier League, Formula 1, UFC, NHL, NBA, tennis, and more. Pay-Per-View events are included at no extra cost.",
  },
  {
    question: "Can I pay in CHF?",
    answer: "Yes! All prices are in Swiss Francs (CHF). We accept TWINT, credit card, and PayPal for your convenience.",
  },
  {
    question: "What is anti-freeze technology?",
    answer: "Anti-freeze technology is our proprietary server infrastructure using global load balancing and limited user-per-server allocation to prevent buffering and freezing. It guarantees 99.9% uptime, even during peak events like Champions League finals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="w-full py-24 bg-[#060609]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked <span className="text-[var(--color-brand-primary)]">Questions</span></h2>
          <p className="text-neutral-400 text-lg">Everything you need to know about IPTV in Switzerland.</p>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => (
            <div key={idx} className="bg-[var(--color-background-surface)] border border-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full text-left p-6 flex items-center justify-between focus:outline-none" aria-expanded={openIndex === idx}>
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-[var(--color-brand-primary)]" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="p-6 pt-0 text-neutral-400 leading-relaxed border-t border-white/5">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
