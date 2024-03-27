import Link from 'next/link';
import React from 'react'

export default function HeroSection() {
  return (
    <div>
        <div className='px-10'>
            <h1> Welcome to my page, 👋<br/> <span>{"I'm Niko."}</span></h1>
            <p>
              {
                "Based in Toronto, I am a 2024 CS graduate currently learning fullstack web development and SwiftUI."
              }
            </p>
            <Link href={"mailto:diamantakisniko@gmail.com"}>
              <div>
                Contact me 📬
              </div>
            </Link>
        </div>
        <div className='w-72 h-72'>
              <div>
                <div className='w-32 h-32 rounded 2xl bg-cyan-500'></div>
                <div className='w-32 h-32 rounded 2xl bg-yellow-300'></div>
      
              </div>

              <div>
                
              </div>

        </div>
    </div>
  );
}
