import React from 'react'
import img from '@/assets/parul.jpg'

type Props = {}

const About = (props: Props) => {
  return (
    <div 
      className='w-full h-[90vh] sm:h-[90vh] md:h-[100vh] bg-cover bg-center flex flex-col items-center justify-top gap-2 pt-8' 
      style={{ backgroundImage: `url(${img.src})` }} 
    >
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
        Parul University
      </h1>
      <p className='w-[90%] sm:w-[70%] md:w-[70%] text-center md:text-center text-sm sm:text-base md:text-xl'>
        Forest Research Institute Dehradun is among the oldest institutions of its kind. The institute’s history is virtually synonymous with the evolution and development of scientific forestry, not only in India, but over the entire sub-continent. Built over 450 hectares, with the outer Himalaya forming its backdrop, the institute’s main building combines Greco-Roman and Colonial styles of architecture, with a plinth area of 2.5 hectares. The building was listed for a time, in the Guinness Book of Records, as the largest purely brick structure in the world.
      </p>
    </div>
  )
}

export default About
