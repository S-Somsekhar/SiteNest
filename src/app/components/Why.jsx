'use client'
import { motion } from "framer-motion"

export default function Why() {
  return (
    <section id="why" className="pt-20 pb-28 bg-black text-center px-6 relative">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon/30" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon/30" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-neon mb-16 text-glow hover:text-glow transition-all duration-500"
      >
        Why SiteNest?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto text-white/80">
        {[
          {
            title: "🧠 Built From Scratch",
            desc: "No templates. No AI page builders. Just handcrafted, clean code built for performance and polish.",
            stat: "0% template use"
          },
          {
            title: "⚡ 48–72 Hour Launch",
            desc: "Lightning fast delivery of your sites. You focus on growth — we handle the launch.",
            stat: "97% on-time delivery"
          },
          {
            title: "📱 Mobile + SEO Ready",
            desc: "Lightning-fast load times (<1s avg). Clean responsive layouts. Built to rank and convert.",
            stat: "100% mobile-optimized"
          },
          {
            title: "🚫 Zero Bloat",
            desc: "We only include what matters. No overwhelming UI. No oversized hero images. Just results.",
            stat: "<500kb avg page size"
          },
        ].map(({ title, desc, stat }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="rounded-xl p-8 bg-neutral-900/20 border border-white/5 transition-all duration-300 group relative overflow-hidden hover-glow"
          >
            <div className="absolute inset-0 bg-[radial-gradient(300px_circle_at_center,#39FF1410_0%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-white/70 mb-4">{desc}</p>
            <p className="text-xs text-neon/80 font-mono">{stat}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
