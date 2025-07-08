export default function Pricing() {
  const plans = [
    {
      title: "Starter Site",
      price: "$499",
      features: ["Single-page site", "Mobile-optimized", "Delivered in 3 days"],
    },
    {
      title: "Pro Website",
      price: "$899",
      features: ["Multi-page site", "Custom animations", "Priority support"],
      highlight: true,
    },
    {
      title: "Custom Project",
      price: "Contact Us",
      features: ["Full-stack web app", "Branding package", "Consultation required"],
    },
  ]

  const hostingPlans = [
    {
      title: "Basic Hosting",
      price: "$9.99/mo",
      features: ["Ultra-fast & secure servers", "Free SSL certificate", "Global CDN delivery"],
    },
    {
      title: "Hosting + Domain",
      price: "$19.99/mo",
      features: ["Custom domain setup", "DNS & security management", "SSL certificate + performance tuning"],
    },
    {
      title: "Concierge Hosting",
      price: "$29.99/mo",
      features: ["All-in-one hosting package", "On-demand edits", "Priority support + uptime monitor"],
    },
  ]

  return (
    <section className="py-24 bg-black px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-neon mb-12">Pricing</h2>

      {/* Website Packages */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
{plans.map(({ title, price, features, highlight }, i) => (
  <div
    key={i}
    className={`p-6 rounded-xl text-white/80 transition ${
      highlight
        ? "bg-neutral-900/40 border border-neon shadow-[0_0_20px_#39FF14]"
        : "bg-neutral-900/30 border border-white/10 hover:border-neon hover:shadow-[0_0_5px_#39FF14]"
    }`}
  >
    {/* Optional Badge */}
    {highlight && (
      <div className="mb-3 text-sm font-bold text-neon uppercase tracking-wide">
        Most Popular
      </div>
    )}

    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

    {/* Pricing with Early Bird Promo */}
    {price !== "Contact Us" ? (
      <div className="mb-4">
        <div className="text-sm text-white/40 line-through mb-1">
          {title === "Starter Site" ? "$499" : title === "Pro Website" ? "$899" : ""}
        </div>
        <div className="text-3xl font-bold text-neon">{title === "Starter Site" ? "$399" : "$799"}</div>
        <div className="text-xs mt-1 text-white/50 italic">Launch Promo – Limited Time</div>
      </div>
    ) : (
      <p className="text-3xl font-bold text-neon mb-4">{price}</p>
    )}

    {/* Features */}
    <ul className="mb-6 space-y-1 text-sm text-white/60">
      {features.map((f, j) => (
        <li key={j}>• {f}</li>
      ))}
    </ul>

    <a
      href="#contact"
      className="inline-block border border-neon text-neon px-5 py-2 rounded hover:bg-neon hover:text-black hover:shadow-[0_0_5px_#39FF14] transition"
    >
      {price === "Contact Us" ? "Get in Touch" : "Book Now"}
    </a>
  </div>
))}
      </div>
      <div className="text-center mt-6 text-sm text-white/50 italic">
  🚨 We only accept <span className="text-white font-semibold">5 new clients per month</span> to maintain quality and fast turnaround. Don’t miss your slot!
</div>

      {/* Hosting Plans */}
      <h3 className="text-2xl font-bold text-white mt-20 mb-6">Optional Hosting Plans</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {hostingPlans.map(({ title, price, features }, i) => (
          <div
            key={i}
            className="bg-neutral-900/30 border border-white/10 hover:border-neon transition hover:shadow-[0_0_5px_#39FF14] p-6 rounded-xl text-white/80"
          >
            <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
            <p className="text-2xl font-bold text-neon mb-3">{price}</p>
            <ul className="mb-4 space-y-1 text-sm text-white/60">
              {features.map((f, j) => (
                <li key={j}>• {f}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block border border-neon text-neon px-4 py-2 rounded hover:bg-neon hover:text-black hover:shadow-[0_0_5px_#39FF14] transition text-sm"
            >
              Add Hosting
            </a>
          </div>
        ))}
      </div>

    </section>
  )
}

