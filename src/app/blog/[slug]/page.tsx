import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogContent from "./BlogContent";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found — Whisker" };
  return { title: `${post.title} — Whisker Blog` };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      {/* Progress Bar (Optional - could be added later) */}
      
      <article className="pb-24">
        {/* Hero Header */}
        <header className="relative bg-charcoal-900 text-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            {post.coverImage && (
              <Image 
                src={post.coverImage} 
                alt={post.title} 
                fill 
                className="object-cover blur-sm scale-110" 
                priority
              />
            )}
            <div className="absolute inset-0 bg-charcoal-900/60"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 text-center">
            <Link href="/blog" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-in-up">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-white">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time>{post.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl -mt-12 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-sand-100">
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal-900 prose-p:text-warmgray-600 prose-a:text-cocoa-700 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg mx-auto">
              <BlogContent content={post.content} />
            </div>
            
            {/* Share / Tags Footer */}
            <div className="mt-12 pt-8 border-t border-sand-200 flex justify-between items-center">
              <div className="text-sm text-warmgray-500">
                Tags: <span className="text-cocoa-600 font-medium">Technology, Pet Health</span>
              </div>
              <Link href="/blog" className="flex items-center gap-2 text-warmgray-600 hover:text-cocoa-700 transition-colors">
                <Share2 className="w-4 h-4" /> More articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-cream-50 py-20 border-t border-sand-200">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">More to read</h2>
              <Link href="/blog" className="text-cocoa-700 font-medium hover:underline hidden sm:block">
                View all articles
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-sand-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row h-full"
                >
                  <div className="relative h-48 sm:h-auto sm:w-1/3 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                    <div className="text-xs text-warmgray-500 mb-2">{post.date}</div>
                    <h3 className="font-serif text-xl text-charcoal-900 mb-3 leading-snug group-hover:text-cocoa-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-warmgray-600 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-cocoa-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Read Article <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 text-center sm:hidden">
              <Link href="/blog" className="btn-secondary inline-block">
                View all articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
