"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, Tv, Globe, Loader2 } from "lucide-react";

interface Channel {
  name: string;
  group: string;
  countryCode: string;
  logo: string;
}

export default function ChannelListPage() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const CHANNELS_PER_PAGE = 100;

  useEffect(() => {
    async function fetchChannels() {
      try {
        const response = await fetch("/channels.json");
        if (!response.ok) {
          throw new Error("Could not load the channel database.");
        }

        const data: [string, string, string, string][] = await response.json();

        const parsedChannels: Channel[] = data.map((tuple) => ({
          name: tuple[0],
          group: tuple[1],
          countryCode: tuple[2],
          logo: tuple[3],
        }));

        setChannels(parsedChannels);
      } catch (err: any) {
        console.error("Failed to load channel cache:", err);
        setError("Failed to load the channel database.");
      } finally {
        setLoading(false);
      }
    }

    fetchChannels();
  }, []);

  const filteredChannels = useMemo(() => {
    if (!searchQuery) return channels;
    const lowerQuery = searchQuery.toLowerCase();
    return channels.filter(
      (c) =>
        c.name.toLowerCase().includes(lowerQuery) ||
        c.group.toLowerCase().includes(lowerQuery) ||
        (c.countryCode && c.countryCode.includes(lowerQuery))
    );
  }, [channels, searchQuery]);

  const paginatedChannels = useMemo(() => {
    const startIndex = (page - 1) * CHANNELS_PER_PAGE;
    return filteredChannels.slice(startIndex, startIndex + CHANNELS_PER_PAGE);
  }, [filteredChannels, page]);

  const totalPages = Math.ceil(filteredChannels.length / CHANNELS_PER_PAGE);

  return (
    <div className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IPTV Swiss{" "}
            <span className="text-[var(--color-brand-primary)]">
              Channel List
            </span>{" "}
            2026
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Browse our massive library of live television networks from
            Switzerland and around the world. Search by channel name, category,
            or country code.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-neutral-500" />
          </div>
          <input
            type="text"
            className="w-full bg-[var(--color-background-surface)] border border-white/10 text-white rounded-2xl py-4 pl-14 pr-4 focus:outline-none focus:border-[var(--color-brand-primary)] transition-colors text-lg"
            placeholder="Search thousands of channels (e.g., SRF, ESPN, News, us, ch)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-3xl mx-auto bg-red-950/40 border border-red-500/50 p-6 rounded-2xl text-center mb-12">
            <h3 className="text-xl font-bold text-red-500 mb-2">
              Connection Error
            </h3>
            <p className="text-white mb-0">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-[var(--color-brand-primary)]">
            <Loader2 className="w-12 h-12 animate-spin mb-4" />
            <p className="text-white text-lg animate-pulse">
              Loading &gt; 30,000 Channels...
            </p>
          </div>
        ) : (
          !error && (
            <>
              {/* Status counts */}
              <div className="mb-6 flex justify-between items-center text-neutral-400 text-sm">
                <p>
                  Showing {filteredChannels.length.toLocaleString()} channels
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:text-white transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {paginatedChannels.map((channel, idx) => (
                  <div
                    key={`${channel.name}-${idx}`}
                    className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:border-[var(--color-brand-primary)]/50 transition-colors group"
                  >
                    {/* Channel Logo or Icon */}
                    <div className="w-14 h-14 shrink-0 bg-[#1a1a24] rounded-lg flex items-center justify-center overflow-hidden">
                      {channel.logo ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={channel.logo}
                          alt={channel.name}
                          className="w-full h-full object-contain p-1"
                          loading="lazy"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                        />
                      ) : (
                        <Tv className="w-7 h-7 text-neutral-600" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-white font-medium truncate group-hover:text-[var(--color-brand-primary)] transition-colors"
                        title={channel.name}
                      >
                        {channel.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {channel.countryCode ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={`https://flagcdn.com/w20/${channel.countryCode}.png`}
                            alt={channel.countryCode}
                            className="w-4 h-3 object-cover rounded-sm"
                            loading="lazy"
                          />
                        ) : (
                          <Globe className="w-3 h-3 text-neutral-500" />
                        )}
                        <span className="text-xs text-neutral-500 truncate">
                          {channel.group.split(";")[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredChannels.length === 0 && (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
                  <Tv className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                  <h3 className="text-xl text-white font-medium">
                    No channels found
                  </h3>
                  <p className="text-neutral-400 mt-2">
                    Try adjusting your search terms
                  </p>
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between mt-12 bg-[var(--color-background-surface)] p-4 rounded-xl border border-white/5 gap-4">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    disabled={page === 1}
                    className="px-6 py-2 rounded-lg bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                  >
                    Previous
                  </button>
                  <div className="text-neutral-400">
                    Page{" "}
                    <span className="text-white font-medium">{page}</span> of{" "}
                    <span className="text-white font-medium">{totalPages}</span>
                  </div>
                  <button
                    onClick={() => setPage(Math.min(totalPages, page + 1))}
                    disabled={page === totalPages}
                    className="px-6 py-2 rounded-lg bg-[var(--color-brand-primary)] text-white font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--color-brand-primary)]/90 transition-colors"
                  >
                    Next Page
                  </button>
                </div>
              )}
            </>
          )
        )}
      </div>
    </div>
  );
}
