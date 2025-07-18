'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Pricing() {
  const plans = [
    {
      title: "Starter Site",
      price: 399,
      originalPrice: 499,
      features: ["Single-page site", "Mobile-optimized", "3-day delivery", "1 revision round"],
      cta: "Book Now",
      promo: true
    },
    {
      title: "Pro Website",
      price: 799,
      originalPrice: 999,
      features: ["3-page site", "Custom animations", "Priority support", "3 revision rounds"],
      highlight: true,
      cta: "Most Popular",
      promo: true
    },
    {
      title: "Custom Project",
      price: "Custom",
      features: ["Full-stack web app", "Branding package", "Dedicated team", "Unlimited revisions"],
      cta: "Get Quote"
    }
  ]

  const hostingPlans = [
    {
      title: "Basic Hosting",
      price: 9.99,
      period: "month",
      features: ["99.9% uptime", "Free SSL", "Global CDN"],
      bestValue: false
    },
    {
      title: "Hosting + Domain",
      price: 19.99,
      period: "month",
      features: ["Domain included", "DNS management", "Daily backups"],
      bestValue: true
    },
    {
      title: "Concierge",
      price: 29.99,
      period: "month",
      features: ["On-demand edits", "Priority support", "Uptime monitor"],
      bestValue: false
    }
  ]

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        clearInterval(timer)
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-black px-6 text-center relative">
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-neon/5 blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-neon/5 blur-[80px]" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-neon mb-8 text-glow"
      >
        Pricing
      </motion.h2>

      {/* Limited Time Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto bg-neon/10 border border-neon rounded-lg p-4 mb-12"
      >
        <p className="text-neon font-bold">🚀 LAUNCH PROMO</p>
        <p className="text-white/90">Special discounted pricing for early customers!</p>
        <p className="text-xs mt-2 text-neon/80">
          Offer ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
        </p>
      </motion.div>

      {/* Website Packages */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`relative overflow-hidden rounded-xl border ${
              plan.highlight 
                ? "border-neon shadow-[0_0_30px_rgba(57,255,20,0.2)]" 
                : "border-white/10 hover:border-neon"
            } hover-glow`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-neon text-black px-3 py-1 text-xs font-bold">
                POPULAR
              </div>
            )}

            {plan.promo && (
              <div className="absolute top-0 left-0 bg-black text-neon border-r border-b border-neon px-3 py-1 text-xs font-bold rounded-br-lg">
                LIMITED TIME
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">{plan.title}</h3>
              
              {typeof plan.price === 'number' ? (
                <div className="mb-6">
                  <div className="text-4xl font-bold text-neon">
                    ${plan.price}
                  </div>
                  <div className="text-sm text-white/50 line-through">
                    ${plan.originalPrice}
                  </div>
                  {plan.promo && (
                    <div className="text-xs mt-1 text-neon/80">
                      Save ${plan.originalPrice - plan.price}!
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-3xl font-bold text-neon mb-6">
                  {plan.price}
                </div>
              )}

              <ul className="mb-8 space-y-2 text-sm text-white/70">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <span className="text-neon mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-block w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.highlight
                    ? "bg-neon text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]"
                    : "border border-neon text-neon hover:bg-neon/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Limited slots notice */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-black border border-neon/30 rounded-lg p-4 max-w-2xl mx-auto"
      >
        <p className="text-sm text-white/80">
          <span className="text-neon font-bold">🚨 Limited Capacity:</span> We only accept 5 new clients per month
          <span className="block mt-1 text-xs text-neon/80">Current availability: 2 slots remaining</span>
        </p>
      </motion.div>

      {/* Hosting Plans */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-white mt-20 mb-10"
      >
        Premium Hosting
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {hostingPlans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            className={`border rounded-xl p-6 hover-glow ${
              plan.bestValue 
                ? "border-neon shadow-[0_0_20px_rgba(57,255,20,0.1)]" 
                : "border-white/10 hover:border-neon"
            }`}
          >
            {plan.bestValue && (
              <div className="text-xs bg-neon text-black px-2 py-1 rounded-full font-bold mb-3 inline-block">
                BEST VALUE
              </div>
            )}
            
            <h4 className="text-lg font-bold text-white mb-2">{plan.title}</h4>
            <div className="text-3xl font-bold text-neon mb-4">
              ${plan.price}<span className="text-sm text-white/50">/{plan.period}</span>
            </div>
            
            <ul className="mb-6 space-y-2 text-sm text-white/60">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start">
                  <span className="text-neon mr-2">•</span> {feature}
                </li>
              ))}
            </ul>
            
            <a
              href="#contact"
              className={`inline-block w-full py-2 rounded-lg text-sm font-medium ${
                plan.bestValue
                  ? "bg-neon text-black hover:bg-neon/90"
                  : "border border-neon text-neon hover:bg-neon/10"
              }`}
            >
              Add to Package
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}