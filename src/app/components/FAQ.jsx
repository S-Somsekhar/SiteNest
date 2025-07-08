export default function Faq() {
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
    <section className="py-24 px-6 bg-black text-white text-left" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-neon mb-12 text-center">FAQ</h2>
      <div className="max-w-4xl mx-auto space-y-10">
        {faqs.map(({ q, a }, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold text-neon mb-2">{q}</h3>
            <p className="text-white/80">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
