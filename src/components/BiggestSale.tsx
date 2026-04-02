"use client";

import { Flame } from "lucide-react";

const WA_NUMBER = "41XXXXXXXXXX";

const DEALS = [
  { duration: "12 Months", salePrice: 83.99, originalPrice: 179.88, connections: 1 },
  { duration: "24 Months", salePrice: 149.99, originalPrice: 359.76, connections: 1 },
];

export default function BiggestSale() {
  return (
    <section className="w-full py-20 relative overflow-hidden bg-[#060609]">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] bg-repeat" />
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-5 animate-pulse">
            <Flame className="w-4 h-4" />
            Limited Time Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--color-brand-primary)] mb-4">Best IPTV Deals in Switzerland</h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto">Exclusive long-term IPTV subscription deals. Save big on premium Swiss IPTV.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {DEALS.map((deal, idx) => {
            const discount = Math.round(((deal.originalPrice - deal.salePrice) / deal.originalPrice) * 100);
            return (
              <div key={idx} className="relative bg-[var(--color-background-surface)] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-[var(--color-brand-primary)]/30 hover:-translate-y-1 group">
                <div className="absolute -top-3 right-6 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">Save {discount}%</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{deal.duration} Premium IPTV Subscription</h3>
                <p className="text-sm text-neutral-400 mb-6">
                  <span className="text-blue-400 font-semibold">{deal.duration}</span> Premium <span className="text-white font-bold">Rapid IPTV Swiss</span> subscription for only <span className="text-blue-400 font-semibold">CHF {deal.salePrice}</span> instead of <span className="text-white font-semibold">CHF {deal.originalPrice}</span>
                </p>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">CHF {deal.salePrice}</span>
                  <span className="text-lg text-neutral-500 line-through">CHF {deal.originalPrice}</span>
                </div>
                <p className="text-sm text-neutral-400 mb-6">&bull; {deal.connections} Connection &bull;</p>
                <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'd like to get the ${deal.duration} Premium IPTV deal for CHF ${deal.salePrice}`)}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 rounded-lg font-bold text-base border-2 border-white/20 text-white bg-transparent hover:bg-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] transition-all duration-300">
                  Get The Deal
                </a>
                <p className="text-center text-xs text-neutral-500 mt-4 font-medium tracking-wider uppercase">One-time Payment &middot; No Contract</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
