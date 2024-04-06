import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";



export default function Navbar({className}:{className?:string}) {
    const socials = [
        {
            link: "https://www.linkedin.com/in/niko-diamantakis-70765117b/",

            label: "Linkedin",

            Icon:SiLinkedin,
        },
        {
            link: "https://github.com/nikodiam99",

            label: "Github",

            Icon: SiGithub,

        }
    ]
  
    return (
    <nav className={cn("py-10 flex justify-between items-center ",
        className
    )}>
        <h1 className='text-2xl font-bold underline underline-offset-8 -rotate-2 decoration-cyan-500 z-10'>
            Niko🪼
        </h1>

        <div className='flex items-center gap-5 z-10'>
            {socials.map((social,index)=>{
                const Icon = social.Icon
                return <Link href={social.link} key={index} aria-label={social.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}
