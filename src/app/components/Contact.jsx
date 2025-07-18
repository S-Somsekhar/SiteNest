'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black px-6 text-center relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-neon mb-6 text-glow"
        >
          Let&apos;s Build Your Site
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-white/70 mb-10 max-w-xl mx-auto"
        >
          Drop us a message and we&apos;ll respond within 12 hours with a plan, price, and timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="mailto:support@clientnesthq.com"
            className="inline-flex items-center gap-2 border-2 border-neon text-neon px-8 py-4 rounded-full font-semibold hover-glow group transition-all duration-300"
          >
            <span>Email Us</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-sm text-white/50"
        >
          Currently responding to emails in <span className="text-neon">under 8 hours</span>
        </motion.p>
      </motion.div>
    </section>
  )
}