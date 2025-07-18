'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "SiteNest gave us a blazing-fast site that looks 10x better than any AI builder.",
    name: "Mason B.",
    title: "Founder, SwiftForge",
    avatar: "/avatars/mason.jpg" // Add avatar paths
  },
  {
    quote: "Our startup landing page was live in 2 days. Clean code, solid SEO, great results.",
    name: "Alina R.",
    title: "Co-Founder, LoopShift",
    avatar: "/avatars/alina.jpg"
  },
  {
    quote: "Honestly? Feels like working with a dev agency, not some template shop. Worth every dollar.",
    name: "Jared C.",
    title: "Growth Lead, NovaReach",
    avatar: "/avatars/jared.jpg"
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-black px-6 text-center relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-neon/5 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-neon mb-16 text-glow"
      >
        Client Voices
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map(({ quote, name, title, avatar }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="group relative bg-neutral-900/50 border border-white/10 rounded-xl p-8 hover-glow"
          >
            {/* Quote marks */}
            <div className="absolute top-6 left-6 text-5xl text-neon/20 font-serif">“</div>
            
            <p className="italic text-white/90 mb-6 relative z-10">“{quote}”</p>
            
            <div className="flex items-center gap-4">
              <div className="text-left">
                <p className="font-semibold text-white">{name}</p>
                <p className="text-xs text-neon">{title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}