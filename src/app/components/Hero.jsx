'use client'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6
      bg-[linear-gradient(135deg,#000_0%,#0a2000_30%,#000_60%,#0a2000_90%,#000_100%)] 
      bg-[length:400%_400%] animate-[gradientBG_8s_ease_infinite] relative overflow-hidden">

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-sm text-neon/80 mb-6 tracking-widest animate-pulse">
          TRUSTED BY 200+ FOUNDERS
        </p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-neon leading-tight mb-6 hover:text-glow transition-all duration-00"
        >
          <span className="block">Clean Sites.</span>
          <span className="block">Real Code.</span>
          <span className="block">Fast Launches.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8"
        >
          SiteNest builds handcrafted, high-converting websites for founders who want more than AI clones.
          Fully mobile-ready, SEO-optimized, and delivered in 48–72 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#why"
            className="inline-block border-2 border-neon text-neon px-8 py-3 rounded-full font-semibold hover-glow relative overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 bg-neon opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            Launch My Site →
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-16 text-neon text-2xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  )
}