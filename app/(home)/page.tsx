import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { BackgroundBeams } from '../../components/ui/background-beams';

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='relative'>
      <BackgroundBeams/>
          <div className="max-w-7xl mx-auto p5 ">
          <Navbar/>
          <HeroSection/>
          </div>

          <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -b-5 left-0 xl:bottom-0 w-full'>


          </div>
      </div>
    </div>
  )
}
