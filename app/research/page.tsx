import Link from "next/link";

export const metadata = {
  title: "Research | Abhinav Gudipati",
  description: "Research on market microstructure, algorithmic trading, and capital markets accounting.",
};

const research = [
  {
    title: "Intraday Momentum in the Sensex 30",
    status: "Work in progress",
    year: "2025",
    org: "ISB · Prof. Ramabhadran Thirumalai",
    abstract:
      "Identifying and characterising intraday return momentum across constituents of the Sensex 30 index. Constructed per-timestamp index-level metrics (market capitalisation, constituent weights, rebalance events) across intraday bars spanning 2009–2016. Built the underlying adjusted-price and index-construction pipeline from raw CMIE Prowess and BSE tick data, resolving data-quality issues and implementing regime-aware bar bucketing.",
    tags: ["Market microstructure", "Intraday momentum", "High-frequency data", "NSE/BSE"],
  },
  {
    title: "Front-Running Detection in NSE Order Logs",
    status: "Research project",
    year: "2025",
    org: "ISB · Prof. Ramabhadran Thirumalai",
    abstract:
      "Built a batch-processing pipeline to flag front-running patterns across tick-level NSE order log data (sets 1–4). Includes technical documentation for faculty and research collaborators. Part of a broader agenda on market integrity and algorithmic trading.",
    tags: ["Algorithmic trading", "Market integrity", "Tick data", "NSE"],
  },
  {
    title: "SEBI Broker-Level Trading Data Project",
    status: "Research project",
    year: "2025",
    org: "ISB · Prof. Ramabhadran Thirumalai",
    abstract:
      "Documented data architecture and built Python-based sample-row extraction pipelines for a SEBI broker-level trading dataset, supporting ongoing empirical work and deliverable preparation.",
    tags: ["SEBI", "Broker-level data", "Data engineering", "Empirical finance"],
  },
  {
    title: "NLP-Based Scoring Model for Lending Firms",
    status: "Completed",
    year: "2022",
    org: "ISB Centre for Analytical Finance · Prof. Prasanna Tantri",
    abstract:
      "Designed a scoring model for CRIF to evaluate and rank 50+ lending firms (listed and unlisted) using NLP techniques (stemming, lemmatisation, tokenisation) applied to financial disclosures.",
    tags: ["NLP", "Credit scoring", "Financial disclosures"],
  },
];

const projects = [
  {
    title: "concalls.in",
    subtitle: "LLM-Powered Earnings Call Intelligence Platform",
    url: "https://concalls.in",
    description:
      "Founder and sole developer of a SaaS product delivering AI-driven earnings call intelligence for Indian equity investors. Built the full stack end-to-end (FastAPI, React, Supabase) with a Gemini-powered extraction pipeline for automated transcript summarisation, management confidence scoring, and cross-quarter consistency tracking of corporate guidance.",
    tags: ["FastAPI", "React", "Supabase", "Gemini", "LLM"],
  },
  {
    title: "Finance Research Rankings",
    subtitle: "Global Finance Faculty Rankings Tool",
    url: "https://financerankings.netlify.app/",
    github: "https://github.com/abhinavgudipati/financerankings",
    description:
      "Metrics-based ranking of global finance research universities using faculty publication data from JF, JFE, and RFS (via OpenAlex API), weighted by fractional authorship credit. Includes dynamic filters by year, journal, and country. Actively used by Pre-Doctoral Fellows and Research Associates across India to identify prospective PhD advisors.",
    tags: ["Python", "OpenAlex API", "Academic rankings"],
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Academic work</p>
        <h1 className="text-2xl font-medium text-gray-900 mb-3">Research</h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
          My research focuses on market microstructure, algorithmic trading, and capital markets accounting, using high-frequency tick data from NSE and BSE. I combine strong empirical methods with engineering-grade data pipelines, the same skills I'm bringing to finance and quant finance roles.
        </p>
      </div>

      {/* Research projects */}
      <div className="mb-16">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Research projects</p>
        <div className="flex flex-col gap-10">
          {research.map((paper, i) => (
            <div key={i} className={`pb-10 ${i < research.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs px-2 py-0.5 rounded-full border ${
                  paper.status === "Work in progress"
                    ? "bg-indigo-50 text-indigo-600 border-indigo-100"
                    : paper.status === "Completed"
                    ? "bg-green-50 text-green-700 border-green-100"
                    : "bg-gray-50 text-gray-500 border-gray-100"
                }`}>
                  {paper.status}
                </span>
                <span className="text-xs text-gray-400">{paper.year}</span>
              </div>
              <h2 className="text-base font-medium text-gray-900 mb-1 leading-snug">{paper.title}</h2>
              <p className="text-xs text-gray-400 mb-3">{paper.org}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{paper.abstract}</p>
              <div className="flex gap-2 flex-wrap">
                {paper.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Entrepreneurial projects */}
      <div className="mb-12">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Projects & tools</p>
        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <div key={i} className={`pb-8 ${i < projects.length - 1 ? "border-b border-gray-100" : ""}`}>
              <div className="flex items-baseline gap-3 mb-1">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 hover:text-[#5338f5] transition-colors">
                  {p.title} ↗
                </a>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                    GitHub →
                  </a>
                )}
              </div>
              <p className="text-xs text-gray-400 mb-3">{p.subtitle}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.description}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
        <p className="text-sm font-medium text-gray-900 mb-1">Interested in collaborating?</p>
        <p className="text-sm text-gray-500 mb-4">I'm open to discussing research ideas in market microstructure, high-frequency finance, and empirical methods.</p>
        <a href="mailto:abhinav_gudipati@isb.edu" className="text-sm text-[#5338f5] hover:underline">
          abhinav_gudipati@isb.edu →
        </a>
      </div>
    </div>
  );
}
