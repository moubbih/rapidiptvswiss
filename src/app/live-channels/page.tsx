"use client";

import { useState, useMemo } from "react";
import { Search, Tv, Globe } from "lucide-react";

const SWISS_CHANNELS = [
  "SRF 1", "SRF zwei", "SRF info", "RTS Un", "RTS Deux", "RSI LA 1", "RSI LA 2",
  "Blue Sport 1", "Blue Sport 2", "Blue Sport 3", "SRF Sport", "TV24", "TV25", "Star TV",
  "3+", "4+", "5+", "6+", "TV Zurich", "Tele Basel", "Tele Bern", "Tele Top",
  "Tele Z\u00fcri", "L\u00e9man Bleu", "Canal Alpha", "La T\u00e9l\u00e9", "TeleTicino",
];

const CATEGORIES = [
  { name: "Swiss Channels", channels: SWISS_CHANNELS, flag: "\ud83c\udde8\ud83c\udded" },
  { name: "German Channels", channels: ["ARD", "ZDF", "RTL", "SAT.1", "ProSieben", "VOX", "DMAX", "Sport1", "Sky Sport DE", "Eurosport DE", "N-TV", "WELT"], flag: "\ud83c\udde9\ud83c\uddea" },
  { name: "French Channels", channels: ["TF1", "France 2", "France 3", "M6", "Canal+", "Arte", "BFM TV", "RMC Sport", "beIN Sports FR", "Eurosport FR"], flag: "\ud83c\uddeb\ud83c\uddf7" },
  { name: "Italian Channels", channels: ["Rai 1", "Rai 2", "Rai 3", "Canale 5", "Italia 1", "Rete 4", "Sky Sport IT", "DAZN IT"], flag: "\ud83c\uddee\ud83c\uddf9" },
  { name: "UK Channels", channels: ["BBC One", "BBC Two", "ITV", "Channel 4", "Sky Sports", "BT Sport", "Sky News", "CNN International"], flag: "\ud83c\uddec\ud83c\udde7" },
  { name: "Sports", channels: ["ESPN", "ESPN 2", "Fox Sports", "beIN Sports", "Sky Sports F1", "DAZN", "NBA TV", "NFL Network", "Eurosport 1", "Eurosport 2", "Blue Sport", "Sport1"], flag: "\u26bd" },
  { name: "Entertainment", channels: ["HBO", "Showtime", "Starz", "Cinemax", "AMC", "FX", "Comedy Central", "Discovery", "National Geographic", "History"], flag: "\ud83c\udfac" },
  { name: "Kids", channels: ["Disney Channel", "Cartoon Network", "Nickelodeon", "Nick Jr", "Disney Junior", "BabyTV", "KiKA"], flag: "\ud83d\udc76" },
  { name: "News", channels: ["CNN", "BBC World News", "Al Jazeera", "France 24", "DW", "Sky News", "Bloomberg", "CNBC", "Euronews"], flag: "\ud83d\udcf0" },
];

export default function ChannelListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return CATEGORIES;
    const q = searchQuery.toLowerCase();
    return CATEGORIES.map((cat) => ({
      ...cat,
      channels: cat.channels.filter((ch) => ch.toLowerCase().includes(q)),
    })).filter((cat) => cat.channels.length > 0);
  }, [searchQuery]);

  const totalShown = filteredCategories.reduce((acc, cat) => acc + cat.channels.length, 0);

  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">IPTV Swiss <span className="text-[var(--color-brand-primary)]">Channel List</span> 2026</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Browse our selection of 30,000+ live channels from Switzerland and around the world. Below is a curated sample of our most popular channels organized by category.</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Search className="h-6 w-6 text-neutral-500" /></div>
          <input type="text" className="w-full bg-[var(--color-background-surface)] border border-white/10 text-white rounded-2xl py-4 pl-14 pr-4 focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors text-lg" placeholder="Search channels (e.g., SRF, ESPN, BBC)..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>

        <div className="mb-6 text-neutral-400 text-sm"><p>Showing {totalShown} channels from our curated selection. Full library includes 30,000+ channels.</p></div>

        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">{cat.flag}</span> {cat.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {cat.channels.map((ch) => (
                  <div key={ch} className="bg-[var(--color-background-surface)] border border-white/5 rounded-lg p-3 flex items-center gap-3 hover:border-[var(--color-brand-primary)]/50 transition-colors">
                    <Tv className="w-5 h-5 text-neutral-600 shrink-0" />
                    <span className="text-white text-sm font-medium truncate">{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
            <Globe className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-xl text-white font-medium">No channels found</h3>
            <p className="text-neutral-400 mt-2">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </div>
  );
}
