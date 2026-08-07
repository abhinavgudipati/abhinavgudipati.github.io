export const metadata = {
  title: "About — Abhinav Gudipati",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Who I am</p>
        <h1 className="text-2xl font-medium text-gray-900 mb-6">About</h1>
      </div>

      <div className="flex flex-col gap-5 text-sm text-gray-500 leading-relaxed mb-12">
        <p>
          I'm Abhinav Gudipati — a Pre-Doctoral Research Associate at the <span className="text-gray-700">Indian School of Business</span>, working under Prof. Ramabhadran Thirumalai. My research sits at the intersection of market microstructure, algorithmic trading, and capital markets accounting. I work primarily with high-frequency tick data from NSE and BSE.
        </p>
        <p>
          Before ISB, I was a Software Engineer in the C&amp;I Data Engineering &amp; AI Solutions division at <span className="text-gray-700">NatWest Group</span> (Jul 2023 – Sep 2025), where I built PySpark pipelines, Airflow orchestration for 200+ teams, and a GPT-4-based tool for automated PDF metric extraction at 95% accuracy.
        </p>
        <p>
          Earlier, I interned at the <span className="text-gray-700">ISB Centre for Analytical Finance</span> (Mar–Sep 2022) under Prof. Prasanna Tantri, where I built an NLP-based scoring model for CRIF and a case study on the Bank of Maharashtra.
        </p>
        <p>
          I studied at <span className="text-gray-700">IIIT Delhi</span>, where I completed a B.Tech with a dual major in Computer Science and Applied Mathematics (2019–2023).
        </p>
        <p>
          Alongside my research, I founded <a href="https://concalls.in" target="_blank" rel="noopener noreferrer" className="text-[#5338f5] hover:underline">concalls.in</a> — a SaaS product delivering AI-driven earnings call intelligence for Indian equity investors — and built <a href="https://financerankings.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#5338f5] hover:underline">Finance Research Rankings</a>, a tool used by pre-doctoral fellows and RAs across India to identify PhD advisors.
        </p>
        <p>
          My goal is a <span className="text-gray-700">PhD in Financial Economics</span>. I want to build explainable, efficient models that bridge rigorous empirical analysis with real-world decision-making in capital markets.
        </p>
      </div>

      <hr className="border-gray-100 mb-10" />

      {/* Education */}
      <div className="mb-10">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Education</p>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-medium text-gray-900">Pre-Doctoral Research Associate in Finance</p>
            <p className="text-xs text-gray-400">Indian School of Business · 2025 – present</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">B.Tech — Computer Science & Applied Mathematics</p>
            <p className="text-xs text-gray-400">IIIT Delhi · 2019 – 2023</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-100 mb-10" />

      {/* Skills */}
      <div className="mb-10">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Technical skills</p>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-4">
            <span className="text-gray-400 w-36 shrink-0">Programming</span>
            <span className="text-gray-600">Python (pandas, NumPy, PySpark, scikit-learn), SQL</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-400 w-36 shrink-0">Econometrics</span>
            <span className="text-gray-600">Panel regression, event studies, time-series analysis</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-400 w-36 shrink-0">Data</span>
            <span className="text-gray-600">NSE tick data, CMIE-Prowess, Morningstar, Bloomberg, CapitalIQ</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-400 w-36 shrink-0">Infrastructure</span>
            <span className="text-gray-600">Airflow, FastAPI, React, Supabase, PySpark</span>
          </div>
        </div>
      </div>

      <hr className="border-gray-100 mb-10" />

      {/* Research interests */}
      <div className="mb-10">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Research interests</p>
        <div className="flex flex-wrap gap-2">
          {[
            "Market microstructure",
            "Intraday momentum",
            "Algorithmic trading",
            "Price discovery",
            "Capital markets accounting",
            "High-frequency data",
            "Empirical asset pricing",
            "Causal inference",
          ].map((t) => (
            <span key={t} className="text-xs px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-gray-600">
              {t}
            </span>
          ))}
        </div>
      </div>

      <hr className="border-gray-100 mb-10" />

      {/* Contact */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">Get in touch</p>
        <div className="flex flex-col gap-3">
          {[
            { label: "ISB email", href: "mailto:abhinav_gudipati@isb.edu", text: "abhinav_gudipati@isb.edu" },
            { label: "Personal", href: "mailto:gabhinavsiddharth@gmail.com", text: "gabhinavsiddharth@gmail.com" },
            { label: "LinkedIn", href: "https://linkedin.com/in/abhinavgudipati", text: "abhinavgudipati", external: true },
            { label: "GitHub", href: "https://github.com/abhinavgudipati", text: "abhinavgudipati", external: true },
            { label: "Substack", href: "https://abhinavgudipati.substack.com", text: "abhinavgudipati.substack.com", external: true },
            { label: "YouTube", href: "https://youtube.com/@AbhinavGudipati", text: "@AbhinavGudipati", external: true },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#5338f5] transition-colors group"
            >
              <span className="text-xs text-gray-300 w-24 shrink-0">{item.label}</span>
              <span className="group-hover:underline">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
