import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { BackgroundBeams } from './components/ui/background-beams';

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <BackgroundBeams/>
      <div className="max-w-7xl mx-auto p5 z-10">
      <Navbar/>
      <HeroSection/>
      </div>
    </div>
  )
}
