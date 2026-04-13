import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <Link href="/" className="inline-flex items-center text-[var(--color-brand-primary)] hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <div className="bg-[var(--color-background-surface)] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 pb-8 border-b border-white/10">{title}</h1>
          <div className="prose prose-invert prose-lg max-w-none text-neutral-300">{children}</div>
        </div>
      </div>
    </div>
  );
}
