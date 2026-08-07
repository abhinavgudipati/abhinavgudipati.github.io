import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

const timeline = [
  {
    period: "Sep 2025 to present",
    role: "Pre-Doctoral Research Associate",
    org: "Indian School of Business",
    detail: "Market microstructure, algorithmic trading, and capital markets accounting under Prof. Ramabhadran Thirumalai. Doctoral coursework in Empirical Asset Pricing and Empirical Methods in Accounting & Finance.",
    current: true,
    future: false,
  },
  {
    period: "Jul 2023 to Sep 2025",
    role: "Software Engineer",
    org: "NatWest Group (formerly RBS)",
    detail: "C&I Data Engineering & AI Solutions. PySpark pipelines, Airflow orchestration across 200+ teams, GPT-4-based PDF extraction tool, and monitoring for 3,000+ batch workflows.",
    current: false,
    future: false,
  },
  {
    period: "Mar 2022 to Sep 2022",
    role: "Research Intern",
    org: "ISB Centre for Analytical Finance",
    detail: "Under Prof. Prasanna Tantri. Built NLP-based scoring model for CRIF, and a case study on Bank of Maharashtra covering key banking ratios and macroeconomic co-movements.",
    current: false,
    future: false,
  },
  {
    period: "2019 to 2023",
    role: "B.Tech, CS & Applied Mathematics",
    org: "IIIT Delhi",
    detail: "Dual major in Computer Science and Applied Mathematics.",
    current: false,
    future: false,
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      {/* Hero */}
      <section className="mb-16">
        <div className="mb-6">
          <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-gray-100">
            <img
              src="/photo2.jpg.jpg"
              alt="Abhinav Gudipati"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 38%", transform: "scale(2.2)", transformOrigin: "50% 38%" }}
            />
          </div>
        </div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">ISB · NatWest · IIIT Delhi</p>
        <h1 className="text-3xl font-medium text-gray-900 leading-snug mb-5">Abhinav Gudipati</h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-8">
          I research market microstructure at ISB and previously built data systems at NatWest. The work has always been somewhere between finance and engineering, figuring out what large, messy datasets actually say. I also built <a href="https://concalls.in" target="_blank" rel="noopener noreferrer" className="text-[#5338f5] hover:underline">concalls.in</a>, an earnings call tool for Indian investors.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link href="/blog" className="text-sm px-5 py-2 bg-[#5338f5] text-white rounded-full hover:bg-indigo-600 transition-colors">
            Read the blog
          </Link>
          <Link href="/research" className="text-sm px-5 py-2 border border-gray-200 rounded-full text-gray-700 hover:border-gray-400 transition-colors">
            My research →
          </Link>
          <a href="mailto:gabhinavsiddharth@gmail.com" className="text-sm px-5 py-2 border border-gray-200 rounded-full text-gray-700 hover:border-gray-400 transition-colors">
            Say hi
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">My path</p>
        <div className="relative pl-5 border-l-2 border-gray-100 flex flex-col gap-8">
          {timeline.map((item) => (
            <div key={item.period} className="relative">
              <div
                className={`absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 border-white ${
                  item.current ? "bg-[#5338f5]" : item.future ? "bg-gray-200" : "bg-gray-300"
                }`}
              />
              <p className={`text-xs font-medium mb-1 ${item.current ? "text-[#5338f5]" : "text-gray-400"}`}>
                {item.period}
              </p>
              <p className={`text-base font-medium mb-0.5 ${item.future ? "text-gray-300" : "text-gray-900"}`}>
                {item.role}
                {item.org && <span className="font-normal text-gray-500"> · {item.org}</span>}
              </p>
              <p className={`text-sm leading-relaxed ${item.future ? "text-gray-300" : "text-gray-500"}`}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent posts */}
      <section>
        <div className="flex items-baseline justify-between mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest">Recent writing</p>
          <Link href="/blog" className="text-xs text-[#5338f5] hover:underline">All posts →</Link>
        </div>
        <div className="flex flex-col">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`flex items-baseline justify-between py-4 group ${
                i < posts.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <div>
                <p className="text-sm font-medium text-gray-900 group-hover:text-[#5338f5] transition-colors mb-1">
                  {post.title}
                </p>
                <p className="text-xs text-gray-400">{post.category} · {post.readTime}</p>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap ml-8">{post.date}</span>
            </Link>
          ))}
          {posts.length === 0 && (
            <p className="text-sm text-gray-400">No posts yet. Coming soon.</p>
          )}
        </div>
      </section>

      {/* Currently looking */}
      <section className="mt-16 border-t border-gray-100 pt-10">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Currently</p>
        <p className="text-sm text-gray-900 leading-relaxed max-w-lg">
          Wrapping up at ISB and looking for what's next. Quant research, trading, or anywhere the work is rigorous and the data is hard. If that sounds like your team,{" "}
          <a href="mailto:gabhinavsiddharth@gmail.com" className="text-[#5338f5] hover:underline">I'd like to hear from you</a>.
        </p>
      </section>
    </div>
  );
}
