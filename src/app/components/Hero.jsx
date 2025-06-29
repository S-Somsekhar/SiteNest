'use client'
export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6
      bg-gradient-to-br from-black via-green-950 to-black
      bg-[length:300%_300%] animate-[gradientBG_15s_ease_infinite]">

      <h1 className="text-4xl md:text-6xl font-bold text-neon leading-tight mb-4">
        Clean Sites. Real Code. Fast Launches.
      </h1>
      <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-8">
        SiteNest builds handcrafted, high-converting websites for founders who want more than AI clones.
        Fully mobile-ready, SEO-optimized, and delivered in 48–72 hours.
      </p>

      <a
        href="#why"
        className="inline-block border border-neon text-neon px-6 py-3 rounded-full font-semibold hover:bg-neon hover:text-black transition hover-glow"
      >
        Launch My Site →
      </a>

      <div className="mt-8 animate-bounce text-neon text-2xl">
        ↓
      </div>
    </section>
  )
}
