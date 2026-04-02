"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";

const WA_NUMBER = "41XXXXXXXXXX";

export default function ContactPageClient() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formState) });
      if (res.ok) { setStatus("sent"); setFormState({ name: "", email: "", subject: "", message: "" }); setTimeout(() => setStatus("idle"), 5000); }
      else { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
    } catch { setStatus("error"); setTimeout(() => setStatus("idle"), 5000); }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">Get in <span className="text-[var(--color-brand-primary)]">Touch</span></h1>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto">Have a question about IPTV in Switzerland? Need support or want to discuss a custom plan? We&apos;re here to help.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1 space-y-4">
            <a href="mailto:support@rapidiptvswiss.com" className="block bg-[var(--color-background-surface)] border border-white/10 rounded-xl p-6 hover:border-[var(--color-brand-primary)]/30 transition-all group">
              <Mail className="w-8 h-8 text-[var(--color-brand-primary)] mb-3" /><h3 className="text-white font-bold mb-1">Email Us</h3><p className="text-neutral-400 text-sm">support@rapidiptvswiss.com</p>
            </a>
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" className="block bg-[var(--color-background-surface)] border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all group">
              <MessageCircle className="w-8 h-8 text-emerald-500 mb-3" /><h3 className="text-white font-bold mb-1">WhatsApp</h3><p className="text-neutral-400 text-sm">Chat with us directly</p><p className="text-emerald-400 text-xs mt-1">Usually replies within minutes</p>
            </a>
            <div className="bg-[var(--color-background-surface)] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">Support Hours</h3><p className="text-neutral-400 text-sm">24/7 Available</p><p className="text-neutral-500 text-xs mt-1">We serve customers across all Swiss cantons</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-[var(--color-background-surface)] border border-white/10 rounded-xl p-6 md:p-8 space-y-5">
              <h2 className="text-xl font-bold text-white mb-2">Send us a message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="text-sm text-neutral-400 mb-1.5 block">Name</label><input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[var(--color-brand-primary)]" placeholder="Your name" /></div>
                <div><label className="text-sm text-neutral-400 mb-1.5 block">Email</label><input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[var(--color-brand-primary)]" placeholder="your@email.com" /></div>
              </div>
              <div><label className="text-sm text-neutral-400 mb-1.5 block">Subject</label><input type="text" required value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })} className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[var(--color-brand-primary)]" placeholder="How can we help?" /></div>
              <div><label className="text-sm text-neutral-400 mb-1.5 block">Message</label><textarea required rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full bg-[#0a0a0f] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[var(--color-brand-primary)] resize-none" placeholder="Tell us more..." /></div>
              <button type="submit" disabled={status === "sending" || status === "sent"} className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${status === "sent" ? "bg-emerald-600 text-white" : status === "error" ? "bg-red-600 text-white" : status === "sending" ? "bg-[var(--color-brand-primary)]/70 text-white cursor-wait" : "bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white hover:scale-[1.02]"}`}>
                {status === "sent" ? <><CheckCircle className="w-5 h-5" />Message Sent!</> : status === "error" ? <><AlertCircle className="w-5 h-5" />Failed — Try Again</> : status === "sending" ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</> : <><Send className="w-5 h-5" />Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
