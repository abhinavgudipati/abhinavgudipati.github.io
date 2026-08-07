import { getAllPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: `${post.title} | Abhinav Gudipati`, description: post.excerpt };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-xs text-gray-400 hover:text-[#5338f5] transition-colors mb-10 inline-block">
        ← Back to blog
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">
              {post.category}
            </span>
            <span className="text-xs text-gray-300">·</span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
            <span className="text-xs text-gray-300">·</span>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          <h1 className="text-2xl font-medium text-gray-900 leading-snug mb-4">{post.title}</h1>
          <p className="text-base text-gray-500 leading-relaxed">{post.excerpt}</p>
        </div>

        <hr className="border-gray-100 mb-8" />

        <div className="prose">
          {paragraphs.map((block, i) => {
            if (block.startsWith("## ")) return <h2 key={i}>{block.slice(3)}</h2>;
            if (block.startsWith("### ")) return <h3 key={i}>{block.slice(4)}</h3>;
            if (block.startsWith("> ")) return <blockquote key={i}><p>{block.slice(2)}</p></blockquote>;
            if (block.startsWith("- ")) {
              const items = block.split("\n").map((l) => l.replace(/^- /, ""));
              return <ul key={i}>{items.map((item, j) => <li key={j}>{item}</li>)}</ul>;
            }
            return <p key={i}>{block}</p>;
          })}
        </div>
      </article>

      <hr className="border-gray-100 my-12" />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">Abhinav Gudipati</p>
          <p className="text-xs text-gray-400">Research Associate at ISB · <a href="mailto:gabhinavsiddharth@gmail.com" className="hover:text-[#5338f5] transition-colors">gabhinavsiddharth@gmail.com</a></p>
        </div>
        <Link href="/blog" className="text-sm text-[#5338f5] hover:underline">More posts →</Link>
      </div>
    </div>
  );
}
