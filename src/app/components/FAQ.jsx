'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      q: "Is this really custom-coded?",
      a: "Yes. Every SiteNest project is built from scratch — no cookie-cutter AI page builders, no bloated templates.",
    },
    {
      q: "How fast will I get my site?",
      a: "Most single-page sites are delivered in under 72 hours. Multi-page projects may take up to 7 days.",
    },
    {
      q: "Can I make edits after the site is live?",
      a: "Yes! You can either edit yourself (we hand over clean code) or subscribe to our Concierge Hosting for on-demand edits.",
    },
    {
      q: "Do you offer refunds?",
      a: "No refunds once a project has started. But we'll work with you until you're happy with the result.",
    },
    {
      q: "Where will my site be hosted?",
      a: "We host it on premium global infrastructure with SSL, fast CDN, and 99.9% uptime — all managed by our team.",
    },
    {
      q: "What tech stack do you use to build the websites?",
      a: "All our websites are handcrafted using Next.js (React framework) and Tailwind CSS. This setup ensures lightning-fast performance, responsive design, and smooth animations — optimized for both SEO and user experience.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden" id="faq">
      {/* Glow effect */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-neon/5 blur-[80px]" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-neon mb-16 text-center text-glow"
      >
        Questions?
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map(({ q, a }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="border-b border-white/10 pb-6"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="flex justify-between items-center w-full text-left group"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-neon transition-colors">
                {q}
              </h3>
              <span className="text-neon text-2xl ml-4">
                {activeIndex === i ? '−' : '+'}
              </span>
            </button>
            
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === i ? 'auto' : 0,
                opacity: activeIndex === i ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-white/80">{a}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

