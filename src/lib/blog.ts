import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];
  
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
  
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
    const { data, content } = matter(raw);
    
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      author: data.author || "Whisker Team",
      coverImage: data.coverImage || "",
      content,
    };
  });
  
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    author: data.author || "Whisker Team",
    coverImage: data.coverImage || "",
    content,
  };
}
