'use client'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Choose Your Foundation",
      desc: "Select from our handcrafted layouts (Coach, SaaS, Agency, etc.) or request a custom design.",
      icon: "🖥️"
    },
    {
      title: "2. Tailored Customization",
      desc: "We adapt it to your brand with custom copy, colors, and assets. 48-hour revision rounds included.",
      icon: "🎨"
    },
    {
      title: "3. Lightning Launch",
      desc: "Deployed in 72h on your domain, or we host it for $9.99/mo with 99.9% uptime.",
      icon: "🚀"
    }
  ]

  return (
    <section className="py-24 bg-black px-6 text-center relative">
      {/* Glow accent */}
      <div className="absolute bottom-0 left-1/2 w-[200px] h-[200px] bg-neon/5 blur-[80px] -translate-x-1/2" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-neon mb-16 text-glow"
      >
        How It Works
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-neutral-900/20 border border-white/10 rounded-xl p-8 hover-glow group transition-all"
          >
            <div className="text-4xl mb-4 group-hover:text-neon transition-colors">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-white/70">{step.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-white/20 text-2xl">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}