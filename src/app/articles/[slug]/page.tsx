import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ALL_BLOG_POSTS } from "@/lib/allBlogPosts";
import BlogPostTemplate from "@/components/BlogPostTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return ALL_BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title + " | Rapid IPTV Swiss",
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://rapidiptvswiss.com/blog/${post.slug}`,
      siteName: "Rapid IPTV Swiss",
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.altText }],
      type: "article",
      publishedTime: post.publishedDate + "T00:00:00Z",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = ALL_BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = ALL_BLOG_POSTS
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug, excerpt: p.excerpt, category: p.category }));

  // Fill up with other posts if not enough same-category posts
  if (related.length < 3) {
    const more = ALL_BLOG_POSTS
      .filter((p) => p.slug !== slug && !related.some((r) => r.slug === p.slug))
      .slice(0, 3 - related.length)
      .map((p) => ({ title: p.title, slug: p.slug, excerpt: p.excerpt, category: p.category }));
    related.push(...more);
  }

  return <BlogPostTemplate post={post} relatedPosts={related} />;
}
