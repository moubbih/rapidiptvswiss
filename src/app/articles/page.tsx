import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS_DATA } from "@/lib/blogData";

export default function ArticlesPage() {
  return (
    <main
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-background-base)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            IPTV Switzerland{" "}
            <span style={{ color: "var(--color-brand-primary)" }}>
              Blog &amp; Guides
            </span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Expert articles about IPTV in Switzerland. Stay informed about IPTV
            technology, legality, comparisons, and setup guides.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS_DATA.map((post) => (
            <Link
              key={post.slug}
              href={`/articles/${post.slug}`}
              className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-background-surface)",
                borderColor: "rgba(59, 130, 246, 0.15)",
              }}
            >
              {/* Hero Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,15,0.7) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  className="text-sm mb-2"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  {new Date(post.publishedDate).toLocaleDateString("en-CH", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2
                  className="text-xl font-semibold mb-3 group-hover:underline"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {post.excerpt}
                </p>
                <span
                  className="inline-flex items-center text-sm font-medium"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  Read More
                  <svg
                    className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
