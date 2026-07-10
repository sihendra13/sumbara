
import './index.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Products from './Products'
import Capacity from './Capacity'
import GlobalFootprint from './GlobalFootprint'
import { Certifications, Impact } from './CertImpact'
import MarketInsights from './MarketInsights'
import Inquiry from './Inquiry'
import Footer from './Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Impact />
      <Capacity />
      <GlobalFootprint />
      <Certifications />
      <MarketInsights />
      <Inquiry />
      <Footer />
    </>
  )
}
