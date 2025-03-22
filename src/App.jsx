import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Gallery from './components/Gallery'
import { enableContentProtection } from './utils/contentProtection'
import './App.css'

function App() {
  useEffect(() => {
    // Enable content protection when the app loads
    enableContentProtection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <Gallery />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
