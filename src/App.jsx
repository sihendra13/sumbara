
import './index.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Products from './Products'
import Capacity from './Capacity'
import { Certifications, Impact } from './CertImpact'
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
      <Certifications />
      <Inquiry />
      <Footer />
    </>
  )
}
