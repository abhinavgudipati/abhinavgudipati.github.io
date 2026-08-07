"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-medium text-gray-900 hover:text-[var(--accent)] transition-colors">
          Abhinav Gudipati
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href
                  ? "text-[var(--accent)] font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:gabhinavsiddharth@gmail.com?subject=CV Request"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 border border-gray-200 rounded-full text-gray-700 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
