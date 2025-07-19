import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import Navigation from "./components/Navbar"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'SiteNest — Clean Sites, Fast Launches',
  description: 'High-converting websites crafted from scratch. No templates. No AI clones. Just real code, clean design, and launch-ready pages in 72 hours.',
  keywords: ['Website builder', 'Website hosting', 'Website Management', 'handcrafted websites', 'real websites', 'unit of ClientNest HQ', 'cheap websites'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9DDVXB7HYE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9DDVXB7HYE');
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.className} bg-black text-white`}>
        {/* Client-side navigation */}
        <Navigation />
        <main className="pt-16 md:pt-10 bg-black flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-neutral-950 py-8 text-center text-sm text-white/40 border-t border-white/10">
      © {new Date().getFullYear()} SiteNest by{' '}
      <span className="text-neon font-semibold">
        <a href="https://clientnesthq.com" target="_blank" rel="noopener noreferrer">
          ClientNest HQ
        </a>
      </span>
    </footer>
  )
}