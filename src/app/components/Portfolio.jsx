'use client'
import { motion } from 'framer-motion'

const sites = [
  {
    name: 'Taverna Do Sol',
    url: 'https://taverna.sitenest.clientnesthq.com',
    img: '/thumbs/taverna.png',
    tag: 'Artisan Storefront',
    size: 'large'
  },
  {
    name: 'LUNÉA',
    url: 'https://lunea.sitenest.clientnesthq.com',
    img: '/thumbs/lunea.png',
    tag: 'Personal Brand',
    size: 'large'
  },
  {
    name: 'StartupSite',
    url: 'https://startup.sitenest.clientnesthq.com',
    img: '/thumbs/startupsite.png', 
    tag: 'SaaS',
    size: 'small'
  },
  {
    name: 'LaunchLab',
    url: 'https://agency.sitenest.clientnesthq.com',
    img: '/thumbs/launchlab.png',
    tag: 'Agency',
    size: 'small'
  },
  {
    name: 'CoachSite',
    url: 'https://coach.sitenest.clientnesthq.com',
    img: '/thumbs/coachsite.png',
    tag: 'Coaching',
    size: 'small'
  }
]

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-black px-6 text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-[300px] h-[300px] bg-neon/10 blur-[100px] -translate-x-1/2" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold text-neon mb-16 text-glow"
      >
        Our Work
      </motion.h2>

      <div className="grid grid-rows-2 gap-6 max-w-6xl mx-auto">
        {/* Top Row - 2 Large Cards */}
        <div className="grid grid-cols-2 gap-6">
          {sites.filter(site => site.size === 'large').map((site, i) => (
            <PortfolioCard site={site} key={i} large />
          ))}
        </div>
        
        {/* Bottom Row - 3 Small Cards */}
        <div className="grid grid-cols-3 gap-6">
          {sites.filter(site => site.size === 'small').map((site, i) => (
            <PortfolioCard site={site} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Extracted card component for consistency
function PortfolioCard({ site, large = false }) {
  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative bg-neutral-900/50 border border-white/10 rounded-xl overflow-hidden hover-glow ${
        large ? 'aspect-[4/3]' : 'aspect-[5/4]'
      }`}
    >
      <div className="relative w-full h-full">
        <img
          src={site.img}
          alt={site.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="text-xs bg-neon text-black px-2 py-1 rounded-full font-bold mb-2 w-fit">
            {site.tag}
          </span>
          <h3 className={`font-semibold text-white ${large ? 'text-lg' : 'text-base'}`}>
            {site.name}
          </h3>
          <p className="text-xs text-neon/80 mt-1">View Live Site →</p>
        </div>
      </div>
    </motion.a>
  )
}
