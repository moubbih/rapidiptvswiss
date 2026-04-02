import { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Link from "next/link";
import { Film, Tv, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV VOD Movies & Series Switzerland | 150,000+ Titles in 4K",
  description: "Stream 150,000+ movies and TV series on demand in 4K with Rapid IPTV Swiss. New releases, classics, documentaries. VOD library for Switzerland.",
  alternates: { canonical: "/movies-series" },
};

const GENRES = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Documentary", "Romance", "Thriller", "Animation", "Family", "Crime", "Fantasy"];

export default function MoviesSeriesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-24">
      <BreadcrumbSchema items={[{ name: "Home", href: "/home" }, { name: "Movies & Series", href: "/movies-series" }]} />
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">IPTV <span className="text-[var(--color-brand-primary)]">Movies &amp; Series</span></h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Over 150,000 movies and TV series on demand. New releases, timeless classics, and binge-worthy series in stunning 4K Ultra HD.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Film, title: "150,000+ Titles", desc: "One of the largest VOD libraries available for IPTV in Switzerland." },
            { icon: Sparkles, title: "New Releases", desc: "Latest movies and series added weekly. Stay up to date with global entertainment." },
            { icon: Tv, title: "4K Ultra HD", desc: "Watch your favorite content in crystal clear 4K quality with Dolby support." },
            { icon: Clock, title: "7-Day Catch-Up", desc: "Missed a show? Replay programs from the past 7 days on supported channels." },
          ].map((f) => (
            <div key={f.title} className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6 text-center">
              <f.icon className="w-8 h-8 text-[var(--color-brand-primary)] mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Browse by Genre</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-16">
          {GENRES.map((genre) => (
            <span key={genre} className="bg-[var(--color-background-surface)] border border-white/10 px-5 py-2.5 rounded-full text-white text-sm font-medium hover:border-[var(--color-brand-primary)]/50 transition-colors cursor-default">{genre}</span>
          ))}
        </div>

        <div className="text-center">
          <Link href="/plans" className="bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105">Start Streaming Now</Link>
        </div>
      </div>
    </div>
  );
}
