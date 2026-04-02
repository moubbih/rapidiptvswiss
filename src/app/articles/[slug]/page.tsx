import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS_DATA, type BlogContentBlock } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://rapidiptvswiss.com/articles/${post.slug}`,
      siteName: "Rapid IPTV Swiss",
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
    },
    alternates: {
      canonical: `https://rapidiptvswiss.com/articles/${post.slug}`,
    },
  };
}

function renderContentBlock(block: BlogContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="text-2xl sm:text-3xl font-bold mt-10 mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p
          key={index}
          className="text-base sm:text-lg leading-relaxed mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul
          key={index}
          className="list-disc list-inside space-y-2 mb-6 pl-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {block.items?.map((item, i) => (
            <li key={i} className="text-base sm:text-lg leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `https://rapidiptvswiss.com${post.heroImage}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Organization",
      name: "Rapid IPTV Swiss",
      url: "https://rapidiptvswiss.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Rapid IPTV Swiss",
      url: "https://rapidiptvswiss.com",
      logo: {
        "@type": "ImageObject",
        url: "https://rapidiptvswiss.com/logo.png",
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rapidiptvswiss.com/articles/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rapidiptvswiss.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: "https://rapidiptvswiss.com/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://rapidiptvswiss.com/articles/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main
        className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "var(--color-background-base)" }}
      >
        <article className="max-w-3xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:underline"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: "var(--color-text-secondary)" }}>/</li>
              <li>
                <Link
                  href="/articles"
                  className="hover:underline"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  Articles
                </Link>
              </li>
              <li style={{ color: "var(--color-text-secondary)" }}>/</li>
              <li style={{ color: "var(--color-text-secondary)" }}>
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <p
              className="text-sm mb-3"
              style={{ color: "var(--color-brand-primary)" }}
            >
              {new Date(post.publishedDate).toLocaleDateString("en-CH", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: "var(--color-text-primary)" }}
            >
              {post.title}
            </h1>
          </header>

          {/* Article Content */}
          <div className="prose-custom">
            {post.content.map((block, index) =>
              renderContentBlock(block, index)
            )}
          </div>

          {/* Back to Articles */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(59, 130, 246, 0.15)" }}>
            <Link
              href="/articles"
              className="inline-flex items-center text-sm font-medium hover:underline"
              style={{ color: "var(--color-brand-primary)" }}
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
