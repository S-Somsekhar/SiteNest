const sites = [
  {
    name: 'Artisan Storefront',
    url: 'https://taverna.sitenest.clientnesthq.com',
    img: '/thumbs/taverna.png'
  },
  {
    name: 'StartupSite',
    url: 'https://startup.sitenest.clientnesthq.com',
    img: '/thumbs/startupsite.png'
  },
  {
    name: 'LaunchLab',
    url: 'https://agency.sitenest.clientnesthq.com',
    img: '/thumbs/launchlab.png'
  },
  {
    name: 'CoachSite',
    url: 'https://coach.sitenest.clientnesthq.com',
    img: '/thumbs/coachsite.png'
  }
    
]

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-black px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-neon mb-10">
        Our Work
      </h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {sites.map(site => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition transform"
          >
            <img src={site.img} alt={site.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-white font-semibold">{site.name}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
