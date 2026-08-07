import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Abhinav Gudipati",
  description: "Writing on empirical finance, market microstructure, data engineering, and the PhD journey.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Writing</p>
        <h1 className="text-2xl font-medium text-gray-900 mb-3">Blog</h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
          I write about empirical finance, market microstructure, data engineering, and the journey from software engineer to researcher.
        </p>
      </div>

      <div className="flex flex-col gap-0">
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`flex items-start justify-between py-5 group ${
              i < posts.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <div className="flex-1 pr-8">
              <p className="text-sm font-medium text-gray-900 group-hover:text-[#5338f5] transition-colors mb-1.5">
                {post.title}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-2">{post.excerpt}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">
                  {post.category}
                </span>
                <span className="text-xs text-gray-300">·</span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap pt-0.5">{post.date}</span>
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-gray-400">No posts yet. Coming soon.</p>
        )}
      </div>
    </div>
  );
}
