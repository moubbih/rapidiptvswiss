"use client";

import { useState } from "react";
import { X, Lock, Loader2, Sparkles } from "lucide-react";
import paymentLinks from "@/lib/payment_links.json";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle: string;
  price: number;
  months: string;
  devices: number;
  isReseller?: boolean;
}

const RESELLER_LINKS: Record<string, string> = {
  "Demo Panel": "https://flujipay.com/payment/PR9JBN39EFEWZOADSNSHLPVQMX0OFA1R",
  "Growth": "https://flujipay.com/payment/UWYGL6IP9WPWYSOQPKNKMOCJYQCJ3M3X",
  "Business": "https://flujipay.com/payment/BIJC4ROAZZOTS30UXSMTLKGAEPD7KC17",
  "Enterprise": "https://flujipay.com/payment/YWTMU399AFX0CJ7HQCUNDO2HPQUK2Z8F",
};

export default function CheckoutModal({
  isOpen,
  onClose,
  planTitle,
  price,
  months,
  devices,
  isReseller = false,
}: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "iframe">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [iframeLoading, setIframeLoading] = useState(true);

  const getFriendlyPackageName = () => {
    if (isReseller) {
      return planTitle.includes("Reseller") ? planTitle : `${planTitle} Reseller`;
    }

    const monthNames: Record<string, string> = {
      "1": "1 Month Quick Trial",
      "3": "3 Months",
      "6": "6 Months",
      "12": "12 Months (1 Year)",
      "24": "2 Years Deal",
      "60": "5 Years Deal",
    };

    const monthStr = monthNames[months] || `${months} Months`;
    const deviceStr = `${devices} Device${devices > 1 ? "s" : ""}`;

    return `${monthStr} - ${deviceStr}`;
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);

    // 1. Check if we have a static link pre-created
    let staticUrl = "";
    if (isReseller) {
      staticUrl = RESELLER_LINKS[planTitle] || "";
    } else {
      // Check 2 Years & 5 Years deals links:
      if (months === "24") {
        staticUrl = "https://flujipay.com/payment/E91LJ6EXX5MPSFDDPRSCPOLT1YXALTVT";
      } else if (months === "60") {
        staticUrl = "https://flujipay.com/payment/X7IX1B1LZBVDYJTBGCX69YSBCUJCDRMM";
      } else {
        const staticLinks = paymentLinks as Record<string, Record<string, string>>;
        staticUrl = staticLinks[devices.toString()]?.[months] || "";
      }
    }

    if (staticUrl) {
      console.log("Statically routed lead captured:", { name, email, phone, planTitle });
      setCheckoutUrl(staticUrl);
      setStep("iframe");
      setLoading(false);
      return;
    }

    // 2. Otherwise fall back to the secure dynamic API checkout
    try {
      const endpoint = isReseller ? "/api/pay-reseller" : "/api/pay";
      const payload = isReseller
        ? { tier: planTitle, name, email, phone }
        : { months, devices, name, email, phone };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok && data.url) {
        setCheckoutUrl(data.url);
        setStep("iframe");
      } else {
        alert(data.error || "Failed to initiate secure checkout. Please try again.");
      }
    } catch (err) {
      console.error("Secure checkout error:", err);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#0e0e0e]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-500" />
            <span className="text-white font-bold text-sm tracking-wide uppercase">Secure Card Checkout</span>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Product Info summary */}
              <div className="bg-[#141414] border border-white/5 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Selected Package</p>
                  <p className="text-white font-bold text-base mt-0.5">{getFriendlyPackageName()}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-neutral-400 font-medium">Total Amount</p>
                  <p className="text-amber-500 font-extrabold text-lg mt-0.5 font-mono">
                    {isReseller ? "$" : months === "24" || months === "60" ? "€" : "$"}{price}
                  </p>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Daniel Meier"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="daniel@example.com"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+41 79 123 45 67"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-xl transition-all duration-300 transform active:scale-95 disabled:opacity-50 text-sm mt-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Initializing Payment...
                  </>
                ) : (
                  "Proceed to Secure Payment"
                )}
              </button>
            </form>
          ) : (
            /* Secure payment frame */
            <div className="relative w-full h-[550px] flex flex-col rounded-xl overflow-hidden bg-[#111] border border-white/5">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d0d] z-20">
                  <Loader2 className="w-8 h-8 text-amber-500 animate-spin mb-3" />
                  <p className="text-white font-semibold text-sm">Loading Secured Payment Gateway...</p>
                  <p className="text-neutral-500 text-xs mt-1">Please do not refresh this page.</p>
                </div>
              )}
              <iframe
                src={checkoutUrl}
                className="w-full h-full border-none z-10"
                onLoad={() => setIframeLoading(false)}
                allow="payment"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
