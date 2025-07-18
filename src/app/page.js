import Hero from "./components/Hero"
import Why from "./components/Why"
import Portfolio from "./components/Portfolio"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import FAQ from "./components/FAQ"
import OtherProducts from "./components/OtherProducts"
import Navigation from "./components/Navbar"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Why />
      <Portfolio />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ /> 
      <Contact /> 
      <OtherProducts />    
    </>
  )
}