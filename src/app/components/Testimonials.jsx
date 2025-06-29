const testimonials = [
  {
    quote: "SiteNest gave us a blazing-fast site that looks 10x better than any AI builder.",
    name: "Mason B.",
    title: "Founder, SwiftForge",
  },
  {
    quote: "Our startup landing page was live in 2 days. Clean code, solid SEO, great results.",
    name: "Alina R.",
    title: "Co-Founder, LoopShift",
  },
  {
    quote: "Honestly? Feels like working with a dev agency, not some template shop. Worth every dollar.",
    name: "Jared C.",
    title: "Growth Lead, NovaReach",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-black px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-neon mb-12">What People Say</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map(({ quote, name, title, avatar }, i) => (
          <div
            key={i}
            className="bg-neutral-900/40 border border-transparent hover:border-neon transition hover:shadow-[0_0_5px_#39FF14] rounded-xl p-6 text-white/80"
          >
            <p className="italic mb-4">“{quote}”</p>
            <div className="flex items-center justify-center gap-3">
              <div className="text-center text-sm">
                <p className="text-white font-semibold">{name}</p>
                <p className="text-white/60">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
