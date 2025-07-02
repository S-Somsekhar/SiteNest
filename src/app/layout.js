import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Link from "next/link"
import Script from 'next/script'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'SiteNest — Clean Sites, Fast Launches',
  description:
    'High-converting websites crafted from scratch. No templates. No AI clones. Just real code, clean design, and launch-ready pages in 72 hours.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
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
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-sm px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-neon">SiteNest</h1>
          <nav className="flex gap-6 text-sm font-medium text-white/90">
            <Link href="/">Home</Link>
            <Link href="#why">Why</Link>
            <Link href="#work">Work</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="pt-10 bg-black flex flex-col">{children}</main>

        {/* Footer */}
        <footer className="w-full bg-neutral-950 py-8 text-center text-sm text-white/40 border-t border-white/10">
          © {new Date().getFullYear()} SiteNest by <span className="text-neon font-semibold">ClientNestHQ</span>
        </footer>
      </body>
    </html>
  )
}

