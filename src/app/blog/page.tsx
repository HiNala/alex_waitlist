import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Whisker",
  description: "Insights on pet health, smart technology, and the future of pet care from the Whisker team.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-50 to-white section-padding">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-4">
            The Whisker <span className="text-cocoa-700">Blog</span>
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-sans">
            Insights on pet health, smart technology, and building the future of pet care.
          </p>
        </div>
      </section>

      {/* Post List */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#9CA3AF] text-lg font-sans">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block"
                >
                  <article className="bg-white rounded-lg border border-[#E5E5E5] p-6 sm:p-8 hover:border-cocoa-700 hover:shadow-card transition-all duration-300">
                    <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-3 font-sans">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                      <span>&middot;</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] leading-tight mb-3 hover:text-cocoa-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#6B6B6B] leading-relaxed mb-4 font-sans">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-cocoa-700 font-medium text-sm">
                      Read more →
                    </span>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
