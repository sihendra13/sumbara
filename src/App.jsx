import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './Navbar'
import Hero from './Hero'
import HeroVariant1 from './HeroVariant1'
import HeroVariant2 from './HeroVariant2'
import HeroVariant3 from './HeroVariant3'
import Products from './Products'
import Capacity from './Capacity'
import { Certifications, Impact } from './CertImpact'
import Inquiry from './Inquiry'
import Footer from './Footer'

export default function App() {
  const [variant, setVariant] = useState(0)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const v = params.get('hero')
    if (v === '1' || v === '2' || v === '3') setVariant(parseInt(v))
  }, [])

  const HeroComponent = variant === 1 ? HeroVariant1 : variant === 2 ? HeroVariant2 : variant === 3 ? HeroVariant3 : Hero

  return (
    <>
      <Navbar />

      {variant > 0 && (
        <div style={{position: 'fixed', top: '80px', right: '20px', zIndex: 999, background: 'rgba(0,0,0,0.8)', padding: '12px 16px', borderRadius: '8px', color: '#fff', fontSize: '12px'}}>
          <div style={{marginBottom: '8px'}}>Hero Variant: {variant}</div>
          <div style={{display: 'flex', gap: '6px'}}>
            <a href="?hero=1" style={{padding: '4px 8px', background: variant === 1 ? '#2AA5A0' : '#555', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '11px'}}>V1</a>
            <a href="?hero=2" style={{padding: '4px 8px', background: variant === 2 ? '#2AA5A0' : '#555', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '11px'}}>V2</a>
            <a href="?hero=3" style={{padding: '4px 8px', background: variant === 3 ? '#2AA5A0' : '#555', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '11px'}}>V3</a>
            <a href="/" style={{padding: '4px 8px', background: variant === 0 ? '#2AA5A0' : '#555', borderRadius: '4px', color: '#fff', textDecoration: 'none', fontSize: '11px'}}>Default</a>
          </div>
        </div>
      )}

      <HeroComponent />
      <Products />
      <Capacity />
      <Certifications />
      <Impact />
      <Inquiry />
      <Footer />
    </>
  )
}
