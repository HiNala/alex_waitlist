import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogContent from "./BlogContent";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — Whisker" };
  return {
    title: `${post.title} — Whisker Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen">
      <article className="pt-8 pb-16 sm:pt-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#9CA3AF] mb-8 font-sans">
            <Link href="/" className="hover:text-cocoa-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-cocoa-700 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#1A1A1A] truncate">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-10 sm:mb-12">
            <div className="flex items-center gap-3 text-sm text-[#9CA3AF] mb-4 font-sans">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-[#6B6B6B] leading-relaxed font-sans">{post.excerpt}</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cocoa-500 to-cocoa-700 flex items-center justify-center text-white text-sm font-semibold font-sans">
                {post.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="font-medium text-[#1A1A1A] text-sm font-sans">{post.author}</div>
                <div className="text-xs text-[#9CA3AF] font-sans">Whisker</div>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose max-w-none">
            <BlogContent content={post.content} />
          </div>

          {/* Bottom CTA Card */}
          <div className="mt-12 pt-8">
            <div className="bg-gradient-to-b from-cream-50 to-white rounded-lg p-6 sm:p-8 text-center border border-cocoa-300">
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Interested in Whisker?</h3>
              <p className="text-[#6B6B6B] mb-5 text-sm leading-relaxed font-sans">
                Reserve your smart collar with a $100 refundable deposit. Limited to 500 units per product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products/dog-collar" className="btn-primary inline-flex items-center justify-center py-4 px-8">
                  Dog Collar
                </Link>
                <Link href="/products/cat-collar" className="btn-secondary inline-flex items-center justify-center py-4 px-8">
                  Cat Bundle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-cream-50">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h2 className="font-serif text-2xl text-[#1A1A1A] mb-6">More from the blog</h2>
            <div className="space-y-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block bg-white rounded-lg border border-[#E5E5E5] p-5 hover:border-cocoa-700 hover:shadow-card transition-all duration-300"
                >
                  <div className="text-xs text-[#9CA3AF] mb-1 font-sans">
                    {new Date(related.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} &middot; {related.readingTime}
                  </div>
                  <h3 className="font-serif text-lg text-[#1A1A1A] mb-1">{related.title}</h3>
                  <p className="text-sm text-[#6B6B6B] line-clamp-2 font-sans">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
