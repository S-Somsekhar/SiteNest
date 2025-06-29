export default function OtherProducts() {
  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-neon mb-8">Explore More from NestHQ</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {[
          {
            href: "https://leadnest.clientnesthq.com",
            label: "LeadNest → Done-for-you Lead Gen",
          },
          {
            href: "https://clientnesthq.com",
            label: "ClientNest → Lightweight CRM for Freelancers",
          },
          {
            href: "/nestpack",
            label: "Nest Starter Pack → Templates & Scripts",
          },
        ].map(({ href, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            className="px-6 py-3 rounded text-white hover:text-[#39ff14] border border-neon transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}

