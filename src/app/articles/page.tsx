"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ALL_BLOG_POSTS } from "@/lib/allBlogPosts";

const CATEGORIES = ["All", "Guides", "Setup", "Comparison", "Legal", "German", "French"];

function getCategoryForFilter(post: { category: string; lang: string }): string[] {
  const cats = [post.category];
  if (post.lang === "de") cats.push("German");
  if (post.lang === "fr") cats.push("French");
  return cats;
}

export default function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts =
    activeFilter === "All"
      ? ALL_BLOG_POSTS
      : ALL_BLOG_POSTS.filter((p) => getCategoryForFilter(p).includes(activeFilter));

  return (
    <div className="container mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          IPTV Switzerland{" "}
          <span className="text-[var(--color-brand-primary)]">Blog</span>
        </h1>
        <p className="text-neutral-400 text-lg">
          Expert guides, setup tutorials, comparisons, and tips for IPTV in
          Switzerland. Updated April 2026.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeFilter === cat
                ? "bg-[var(--color-brand-primary)] text-white shadow-lg shadow-blue-500/20"
                : "bg-[var(--color-background-surface)] text-neutral-400 hover:text-white border border-white/5 hover:border-white/15"
            }`}
          >
            {cat}
            {cat !== "All" && (
              <span className="ml-1.5 text-xs opacity-60">
                ({cat === "All"
                  ? ALL_BLOG_POSTS.length
                  : ALL_BLOG_POSTS.filter((p) => getCategoryForFilter(p).includes(cat)).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Post count */}
      <p className="text-neutral-500 text-sm mb-6">
        Showing {filteredPosts.length} of {ALL_BLOG_POSTS.length} articles
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-[var(--color-background-surface)] border border-white/5 rounded-2xl overflow-hidden hover:border-[var(--color-brand-primary)]/50 transition-all duration-300 flex flex-col"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="block relative w-full aspect-video overflow-hidden"
            >
              <Image
                src={post.heroImage}
                alt={post.altText || post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span className="bg-[var(--color-brand-primary)]/90 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase">
                  {post.category}
                </span>
                {post.lang !== "en" && (
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase">
                    {post.lang.toUpperCase()}
                  </span>
                )}
              </div>
            </Link>

            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs text-neutral-500 mb-2">
                {new Date(`${post.publishedDate}T00:00:00`).toLocaleDateString(
                  "en-US",
                  { month: "long", day: "numeric", year: "numeric" }
                )}
              </p>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--color-brand-primary)] transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-neutral-400 text-sm mb-6 flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-[var(--color-brand-primary)] font-semibold text-sm group-hover:underline"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-neutral-400 text-lg">
            No articles found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
