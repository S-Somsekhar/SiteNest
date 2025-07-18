export default function OtherProducts() {
  return (
    <section className="py-20 px-6 bg-black text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-neon mb-8">
        Explore More from NestHQ
      </h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-4 max-w-6xl mx-auto">
        {[
          {
            href: "https://leadnest.clientnesthq.com",
            label: "LeadNest → Done-for-you Lead Gen",
          },
          {
            href: "https://crm.clientnesthq.com",
            label: "ClientNest → Lightweight CRM for Freelancers",
          },
          {
            href: "https://neststarter.clientnesthq.com",
            label: "Nest Starter Pack → Templates & Scripts",
          },
        ].map(({ href, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md text-white border border-neon hover:bg-neon hover:text-black transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}