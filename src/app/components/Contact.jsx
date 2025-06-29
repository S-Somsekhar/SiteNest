export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-neon mb-6">Let&apos;s Build Your Site</h2>
      <p className="text-white/70 mb-8 max-w-xl mx-auto">
        Drop us a message and we&apos;ll respond within 12 hours with a plan, price, and timeline.
      </p>

      <a
        href="mailto:support@clientnesthq.com"
        className="inline-block border border-neon text-neon px-6 py-3 rounded-full font-semibold hover:border-neon hover:bg-neon hover:text-black hover:shadow-[0_0_5px_#39FF14]"
      >
        Email Us →
      </a>
    </section>
  )
}
