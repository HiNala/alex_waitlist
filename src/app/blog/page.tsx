import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = { title: "Blog — Whisker" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-12 sm:py-16 md:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 mb-4">
            The Whisker <span className="text-cocoa-700">Blog</span>
          </h1>
          <p className="text-warmgray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Insights on pet health, smart technology, and building the future of pet care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-sand-200 hover:shadow-lg transition-all duration-300"
            >
              {post.coverImage && (
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5">
                <time className="text-xs text-warmgray-500">{post.date}</time>
                <h2 className="font-semibold text-charcoal-900 mt-2 mb-2 leading-snug group-hover:text-cocoa-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-warmgray-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
