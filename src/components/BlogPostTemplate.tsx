import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import StructuredData from "./StructuredData";
import BreadcrumbSchema from "./BreadcrumbSchema";

interface BlogContentBlock {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

interface BlogPostData {
  title: string;
  slug: string;
  heroImage: string;
  excerpt: string;
  publishedDate: string;
  category: string;
  lang: "en" | "de" | "fr";
  metaDescription: string;
  content: BlogContentBlock[];
}

interface RelatedPost {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
}

function estimateReadingTime(content: BlogContentBlock[]): number {
  let wordCount = 0;
  for (const block of content) {
    if (block.text) wordCount += block.text.split(/\s+/).length;
    if (block.items) {
      for (const item of block.items) wordCount += item.split(/\s+/).length;
    }
  }
  return Math.max(1, Math.ceil(wordCount / 200));
}

function getHeadings(content: BlogContentBlock[]): string[] {
  return content.filter((b) => b.type === "heading" && b.text).map((b) => b.text!);
}

export default function BlogPostTemplate({
  post,
  relatedPosts,
}: {
  post: BlogPostData;
  relatedPosts: RelatedPost[];
}) {
  const readingTime = estimateReadingTime(post.content);
  const headings = getHeadings(post.content);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `https://rapidiptvswiss.com${post.heroImage}`,
    author: { "@type": "Organization", name: "Rapid IPTV Swiss", url: "https://rapidiptvswiss.com" },
    publisher: {
      "@type": "Organization",
      name: "Rapid IPTV Swiss",
      logo: { "@type": "ImageObject", url: "https://rapidiptvswiss.com/favicon.ico" },
    },
    datePublished: `${post.publishedDate}T00:00:00Z`,
    dateModified: `${post.publishedDate}T00:00:00Z`,
    description: post.metaDescription,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://rapidiptvswiss.com/blog/${post.slug}` },
    inLanguage: post.lang === "de" ? "de-CH" : post.lang === "fr" ? "fr-CH" : "en-CH",
    isAccessibleForFree: true,
  };

  const ctaText =
    post.lang === "de"
      ? "Unsere Abonnements ab CHF 5.00/Monat ansehen"
      : post.lang === "fr"
      ? "Voir nos abonnements d\u00e8s CHF 5.00/mois"
      : "See our plans starting at CHF 5.00/mo";

  const backText = post.lang === "de" ? "Zur\u00fcck zum Blog" : post.lang === "fr" ? "Retour au blog" : "Back to Blog";

  return (
    <article className="min-h-screen bg-[var(--color-background-base)] pt-32 pb-16" lang={post.lang}>
      <StructuredData data={blogSchema} id="blog-schema" />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/home" },
          { name: "Blog", href: "/articles" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Back link */}
        <Link href="/articles" className="inline-flex items-center text-[var(--color-brand-primary)] hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> {backText}
        </Link>

        {/* Hero image */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/5">
          <Image src={post.heroImage} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="bg-[var(--color-brand-primary)]/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">{post.category}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">{post.title}</h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-4 text-neutral-400 mb-10 pb-8 border-b border-white/10 text-sm">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(`${post.publishedDate}T00:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{readingTime} min read</span>
          <span className="flex items-center gap-1.5"><User className="w-4 h-4" />Rapid IPTV Swiss Team</span>
        </div>

        {/* Table of contents */}
        {headings.length > 2 && (
          <div className="bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6 mb-10">
            <h2 className="text-white font-bold text-lg mb-4">{post.lang === "de" ? "Inhaltsverzeichnis" : post.lang === "fr" ? "Table des mati\u00e8res" : "Table of Contents"}</h2>
            <ul className="space-y-2">
              {headings.map((h, i) => (
                <li key={i}>
                  <a href={`#heading-${i}`} className="text-[var(--color-brand-primary)] hover:text-white text-sm transition-colors">{h}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-neutral-300">
          {(() => {
            let headingIdx = 0;
            return post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return <p key={index} className="leading-relaxed mb-6">{block.text}</p>;
              }
              if (block.type === "heading") {
                const currentIdx = headingIdx++;
                return (
                  <h2 key={index} id={`heading-${currentIdx}`} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-5 scroll-mt-24">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={index} className="list-none space-y-3 mb-8 bg-[var(--color-background-surface)] p-6 rounded-xl border border-white/5">
                    {block.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-300">
                        <span className="text-[var(--color-brand-primary)] mt-1 shrink-0">&check;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            });
          })()}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[var(--color-brand-primary)]/10 via-blue-900/10 to-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {post.lang === "de" ? "Bereit f\u00fcr premium IPTV?" : post.lang === "fr" ? "Pr\u00eat pour l'IPTV premium ?" : "Ready for premium IPTV?"}
          </h3>
          <p className="text-neutral-400 mb-6 max-w-xl mx-auto">
            {post.lang === "de"
              ? "Erhalten Sie sofortigen Zugang zu \u00fcber 30.000 Live-Kan\u00e4len, 4K-Streaming und der gr\u00f6ssten VOD-Bibliothek der Schweiz."
              : post.lang === "fr"
              ? "Acc\u00e9dez instantan\u00e9ment \u00e0 plus de 30 000 cha\u00eenes en direct, au streaming 4K et \u00e0 la plus grande biblioth\u00e8que VOD de Suisse."
              : "Get instant access to 30,000+ live channels, 4K streaming, and the biggest VOD library in Switzerland."}
          </p>
          <Link href="/plans" className="inline-block bg-[var(--color-brand-primary)] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-[var(--color-brand-secondary)] transition-all hover:scale-105">
            {ctaText}
          </Link>
        </div>

        {/* Author box */}
        <div className="mt-12 bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[var(--color-brand-primary)]/10 flex items-center justify-center shrink-0">
            <User className="w-7 h-7 text-[var(--color-brand-primary)]" />
          </div>
          <div>
            <p className="text-white font-bold">Rapid IPTV Swiss Team</p>
            <p className="text-neutral-400 text-sm">Expert guides on IPTV streaming in Switzerland. Helping Swiss households cut the cord since 2024.</p>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">{post.lang === "de" ? "Verwandte Artikel" : post.lang === "fr" ? "Articles connexes" : "Related Posts"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group bg-[var(--color-background-surface)] border border-white/5 rounded-xl p-5 hover:border-[var(--color-brand-primary)]/30 transition-colors">
                  <span className="text-[10px] text-[var(--color-brand-primary)] font-bold uppercase">{rp.category}</span>
                  <h3 className="text-white font-bold mt-2 mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors line-clamp-2">{rp.title}</h3>
                  <p className="text-neutral-400 text-sm line-clamp-2">{rp.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
