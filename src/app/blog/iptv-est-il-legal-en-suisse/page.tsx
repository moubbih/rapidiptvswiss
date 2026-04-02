import { Metadata } from "next";
import { ALL_BLOG_POSTS } from "@/lib/allBlogPosts";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import { notFound } from "next/navigation";

const SLUG = "iptv-est-il-legal-en-suisse";
const post = ALL_BLOG_POSTS.find((p) => p.slug === SLUG);

export function generateMetadata(): Metadata {
  if (!post) return { title: "Not Found" };
  return {
    title: post.title + " | Rapid IPTV Swiss",
    description: post.metaDescription,
    alternates: { canonical: `/blog/${SLUG}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://rapidiptvswiss.com/blog/${SLUG}`,
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

export default function Page() {
  if (!post) notFound();
  const related = ALL_BLOG_POSTS.filter((p) => p.slug !== SLUG).slice(0, 3).map((p) => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    category: p.category,
  }));
  return <BlogPostTemplate post={post} relatedPosts={related} />;
}
