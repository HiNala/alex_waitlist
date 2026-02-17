import Link from "next/link";
import Image from "next/image";
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
      <section className="section-padding pt-0">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#9CA3AF] text-lg font-sans">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden hover:border-cocoa-300/50 hover:shadow-card transition-all duration-300 h-full flex flex-col">
                    {/* Cover Image */}
                    <div className="relative h-48 w-full bg-cream-50 overflow-hidden">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-cream-100 text-cocoa-300">
                          <span className="text-4xl">🐾</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs font-semibold text-cocoa-700 uppercase tracking-wider mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-serif font-bold text-[#1A1A1A] leading-tight mb-3 group-hover:text-cocoa-700 transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4 font-sans line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-sand-100">
                        <div className="w-6 h-6 rounded-full bg-cocoa-100 flex items-center justify-center text-[10px] font-bold text-cocoa-700">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-xs font-medium text-[#1A1A1A]">{post.author}</span>
                      </div>
                    </div>
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
