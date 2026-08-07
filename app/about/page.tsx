export const metadata = {
  title: "About | Abhinav Gudipati",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10 flex items-end gap-8">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Who I am</p>
          <h1 className="text-2xl font-medium text-gray-900 mb-0">About</h1>
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 mb-1 border border-gray-100">
          <img
            src="/IMG_7563_Original.jpg"
            alt="Abhinav Gudipati"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%" }}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 text-sm text-gray-500 leading-relaxed mb-12">
        <p>
          I'm a Research Associate at <span className="text-gray-700">ISB</span> working with Prof. Ramabhadran Thirumalai on market microstructure, mostly intraday momentum and front-running detection using NSE and BSE tick data. Before this I was an engineer at <span className="text-gray-700">NatWest</span>, building data pipelines and ML tooling for the C&I division.
        </p>
        <p>
          The career has been a bit zigzaggy but the through-line is working with large, messy financial datasets and trying to make them say something true. At NatWest that meant PySpark and Airflow at scale. At ISB it means being much more careful about what the data can and can't tell you.
        </p>
        <p>
          On the side I've built a couple of things: <a href="https://concalls.in" target="_blank" rel="noopener noreferrer" className="text-[#5338f5] hover:underline">concalls.in</a>, an earnings call analysis tool for Indian equity investors, and <a href="https://financerankings.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#5338f5] hover:underline">Finance Research Rankings</a>, which a surprising number of pre-doc fellows apparently use.
        </p>
        <p>
          I studied CS and Applied Mathematics at <span className="text-gray-700">IIIT Delhi</span>. My first taste of finance research was a 2022 internship at ISB's Centre for Analytical Finance. Liked it enough to come back.
        </p>
        <p>
          I'm wrapping up at ISB and looking for what's next. Quant research or trading would be the obvious fit, but I'm open to anything where the problems are hard and the data is taken seriously. <a href="mailto:gabhinavsiddharth@gmail.com" className="text-[#5338f5] hover:underline">Drop me a line</a> if that sounds like your team.
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
            <p className="text-sm font-medium text-gray-900">B.Tech, Computer Science & Applied Mathematics</p>
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
