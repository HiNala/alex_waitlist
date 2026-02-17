import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Blog — Whisker",
  description: "Insights on pet health, smart technology, and building the future of pet care.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream-50 py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-cocoa-700/80 font-semibold mb-3">Latest Insights</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-charcoal-900 mb-6 animate-fade-in-up">
            The Whisker <span className="text-cocoa-700">Journal</span>
          </h1>
          <p className="text-xl text-warmgray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Stories about pet health, technology, and the bond we share with our furry friends.
          </p>
        </div>
        
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cocoa-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-sand-200 rounded-full blur-3xl opacity-50"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-16 -mt-12 relative z-20">
        {/* Featured Post */}
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="group block mb-16">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-sand-200 grid lg:grid-cols-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-warmgray-500 mb-4">
                  <span className="bg-cocoa-100 text-cocoa-800 px-3 py-1 rounded-full font-medium">Featured</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal-900 mb-4 leading-tight group-hover:text-cocoa-700 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-warmgray-600 mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-cocoa-700 font-medium group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-sand-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden bg-sand-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-warmgray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-3 leading-snug group-hover:text-cocoa-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-warmgray-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="text-cocoa-600 text-sm font-medium group-hover:underline">
                  Read more
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
