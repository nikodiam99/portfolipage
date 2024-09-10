"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiC, SiGit, SiMysql, SiNextdotjs, SiPython, SiReact, SiSpring, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export default function Skills() {

const skills = [
  {
  text: "React",
  Icon: SiReact,
  },

  {
    text: "Next.js",
    Icon: SiNextdotjs,
  },

  {
    text:"Tailwind",
    Icon: SiTailwindcss,
  },

  {
    text:"Java",
    Icon: FaJava,
  },

  {
    text:"Git",
    Icon: SiGit,
  },

  {
    text:"SiPython",
    Icon: SiPython,
  },

  {
    text:"C",
    Icon: SiC,
  },

  {
    text:"MySQL",
    Icon: SiMysql,
  },

  {
    text:"Springboot",
    Icon: SiSpring,
  },
];

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text="Skills" className='flex flex-col items-center justify-center -rotate-6'/>
      <HoverEffect items={skills}/>
    </div>
  )
}
