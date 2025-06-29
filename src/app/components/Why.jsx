export default function Why() {
  return (
    <section id="why" className="pt-16 pb-24 bg-black text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-neon mb-10">
        Why SiteNest?
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-white/80">
        {[
          {
            title: "🧠 Built From Scratch",
            desc: "No templates. No AI page builders. Just handcrafted, clean code built for performance and polish.",
          },
          {
            title: "⚡ Fast Turnaround",
            desc: "Most sites are launched in 48–72 hours. You focus on growth — we handle the launch.",
          },
          {
            title: "📱 Mobile + SEO Ready",
            desc: "Lightning-fast load times. Clean responsive layouts. Built to rank and convert.",
          },
          {
            title: "🚫 No Bloat",
            desc: "We only include what matters. No overwhelming UI. No 400kb hero images. Just results.",
          },
        ].map(({ title, desc }, i) => (
          <div
            key={i}
            className="rounded-xl p-6 bg-neutral-900/20 border border-transparent transition hover:border-neon hover:shadow-[0_0_15px_#39FF14]"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
