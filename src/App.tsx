import React from 'react'

// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// import custom components
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Feature4 from './components/Feature4'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Instagram from './components/Instagram'
import Products from './components/Products'
import Testimonials from './components/Testimonials'

const App = () => {
  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  })

  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Products />
      <Testimonials />
      <Instagram />
      <Footer />
    </div>
  )
}

export default App
