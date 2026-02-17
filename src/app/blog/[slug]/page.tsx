import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogContent from "./BlogContent";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found — Whisker" };
  return { title: `${post.title} — Whisker` };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      <article className="container mx-auto px-4 sm:px-6 max-w-3xl py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-warmgray-500 mb-8">
          <Link href="/" className="hover:text-cocoa-500">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-cocoa-500">Blog</Link>
          <span>/</span>
          <span className="text-warmgray-600 truncate">{post.title}</span>
        </nav>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
        )}

        {/* Title and meta */}
        <header className="mb-8">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 leading-tight mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-warmgray-500">
            <span>{post.author}</span>
            <span>&middot;</span>
            <time>{post.date}</time>
          </div>
        </header>

        {/* Content */}
        <div className="prose">
          <BlogContent content={post.content} />
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-cream-50 py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 className="font-serif text-xl sm:text-2xl text-charcoal-900 mb-6">More from the blog</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-sand-200 hover:shadow-md transition-all"
                >
                  {r.coverImage && (
                    <div className="relative h-36 overflow-hidden">
                      <Image src={r.coverImage} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-charcoal-900 group-hover:text-cocoa-700 transition-colors">{r.title}</h3>
                    <time className="text-xs text-warmgray-500 mt-1 block">{r.date}</time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
