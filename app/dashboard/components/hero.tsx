import React from 'react'
import img from '@/assets/ayu.jpeg'
import { MapPin } from 'lucide-react'
import { Quote } from 'lucide-react';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div 
      className='w-full h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-white font-bold relative' 
      style={{ backgroundImage: `url(${img.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 w-full h-[90vh]"></div>
      
      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl' >Ayur Fest,</h1>
        <h1 className='text-6xl md:text-7xl lg:text-8xl mt-2' >AyurVimarsha</h1>
        
        {/* Conference Info */}
        <div className='w-full bg-white h-8 flex items-center justify-center my-6 md:my-10 px-2'>
          <p className='text-black text-sm md:text-base'>
            International Conference on "Ayurveda for Everyone, Every Day"
          </p>
        </div>
        
        {/* Dates */}
        <h1 className='text-3xl md:text-5xl pb-2'>
          16<sup>th</sup> and 17<sup>th</sup> November 2024
        </h1>
        
        {/* Location */}
        <p className='flex items-center justify-center pb-6 text-base md:text-lg'>
          <MapPin className='mr-1' /> Parul University Campus, Vadodara, Gujarat, India
        </p>
        
        {/* Quote Section */}
        <Quote width={28} height={28} className='md:w-34 md:h-34' />
        <p className='text-lg md:text-xl pt-4'>“Connecting Tradition with Modernity:</p>
        <p className='text-lg md:text-xl'>Ayurveda for Farmers, Students, and Public Health.”</p>
      </div>
    </div>
  )
}

export default Hero
