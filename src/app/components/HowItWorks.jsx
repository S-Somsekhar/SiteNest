export default function HowItWorks() {
  return (
    <section className="py-24 bg-black px-6 text-center text-white/80">
      <h2 className="text-3xl md:text-4xl font-bold text-neon mb-10">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">1. Choose a Template</h3>
          <p>Pick from one of our handcrafted layouts: Coach, Agency, Portfolio, Startup and more.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">2. We Customize It</h3>
          <p>We tailor it to your brand, product, and vibe. Fast, clean, responsive.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">3. You Go Live</h3>
          <p>We deploy it in 2–3 days on your custom domain — or host it for you at $9.99/mo.</p>
        </div>
      </div>
    </section>
  )
}
