import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer'
import CTA from './Components/CTA'
import Features from './Components/Features'
import Blogs from './Components/Blogs'
import Property from './Components/Property'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Property />
      <Features />
      <Blogs />
      <CTA />
      <Footer />
    </>
  )
}

export default App
