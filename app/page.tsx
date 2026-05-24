export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Verify Email Unsubscribe Links Meet{" "}
          <span className="text-[#58a6ff]">GDPR Requirements</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste your email HTML or URL and instantly check if your unsubscribe mechanism is one-click compliant. Get a detailed compliance report in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Checking — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card surprises.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Deep Scan", desc: "Checks List-Unsubscribe headers, mailto, and HTTP links" },
          { icon: "📋", title: "Compliance Report", desc: "Detailed pass/fail breakdown with fix recommendations" },
          { icon: "⚡", title: "Instant Results", desc: "Paste HTML or URL and get results in under 3 seconds" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited compliance scans",
              "One-click unsubscribe header check",
              "HTML email deep analysis",
              "Exportable PDF reports",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What does GDPR require for email unsubscribe links?",
              a: "GDPR and CAN-SPAM require that recipients can opt out easily. RFC 8058 mandates a List-Unsubscribe-Post header for one-click unsubscribe, meaning no confirmation page or extra steps."
            },
            {
              q: "What does this tool actually check?",
              a: "It scans for List-Unsubscribe and List-Unsubscribe-Post headers, verifies unsubscribe links in the email body, checks for one-click HTTP POST support, and flags any missing or broken mechanisms."
            },
            {
              q: "Do I need technical knowledge to use it?",
              a: "No. Just paste your raw email HTML or the email's source URL. The tool handles the analysis and gives you a plain-English compliance report with actionable fixes."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} GDPR Unsubscribe Checker. Not legal advice.
      </footer>
    </main>
  )
}
