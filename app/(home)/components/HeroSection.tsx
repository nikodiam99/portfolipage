import { MovingBorderBtn } from '@/components/ui/moving-border';
import Link from 'next/link';
import React from 'react'

export default function HeroSection() {
  return (
    
    <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
        <div className='space-y-10 text-center lg:text-left z-10'>
            <h1 className='text-4xl lg:text-7xl font-bold z-10'> Welcome to my page, 👋<br/> <span className='underline underline-offset-8 decoration-cyan-500'>{"I'm Niko."}</span></h1>
            <p className='md:w-96 text-lg text-gray-300'>
              {
                "Based in Toronto, I am a 2024 CS graduate currently learning fullstack web development and SwiftUI."
              }
            </p>
            <Link href={"mailto:diamantakisniko@gmail.com"} className='inline-block group'>
              <div>
                <h1 className='text-3xl font-bold group-hover:text-cyan-500 transition-all'>Contact me 📬</h1>
                <div className='w-40 h-2 bg-cyan-500 rounded-full '></div>
                <div className='w-40 h-2 bg-yellow-300 rounded-full translate-x-2'></div>
              </div>
            </Link>
        </div>

        <div className='relative'>
        <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
              <div className='flex gap-3 translate-x-8'>
                <div className='w-32 h-32 rounded-2xl bg-cyan-500'></div>
                <div className='w-32 h-32 rounded-full bg-yellow-300'></div>
              </div>

              <div className='flex gap-3 -translate-x-8'>
                <div className='w-32 h-32 rounded-2xl bg-yellow-300'></div>
                <div className='w-32 h-32 rounded-full bg-cyan-500'></div>
              </div>
              <div className='glow absolute top-[40%] right-1/2 -z-10'></div> 
        </div>
        <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
        <MovingBorderBtn borderRadius='0.5rem'className='p-3 font-semibold'>
          <p> 🔭 Available for Work</p>
        </MovingBorderBtn>
        </div>
        </div>
    </div> 
  );
}
