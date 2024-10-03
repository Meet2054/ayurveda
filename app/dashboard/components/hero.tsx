import React from 'react'
import img from '@/assets/ayu.jpeg'
import { MapPin } from 'lucide-react'
import { Quote } from 'lucide-react';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div 
      className='w-full h-[80vh] sm:h-[90vh] md:h-[100vh] bg-cover bg-center flex flex-col items-center justify-center text-white font-bold relative' 
      style={{ backgroundImage: `url(${img.src})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 w-full h-[80vh] sm:h-[90vh] md:h-[100vh]"></div>
      
      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center'>
        {/* Main Title */}
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl'>Ayur Fest,</h1>
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-7xl mt-2'>Ayur Vimarsha</h1>
        
        {/* Conference Info */}
        <div className='px-8 rounded-xl bg-white h-8 flex items-center justify-center my-4 sm:my-6 md:my-8 px-2'>
          <p className='text-black text-xs sm:text-sm md:text-base'>
            International Conference on "Ayurveda for Everyone, Every Day"
          </p>
        </div>
        
        {/* Dates */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl pb-2'>
          16<sup>th</sup> and 17<sup>th</sup> November 2024
        </h1>
        
        {/* Location */}
        <p className='flex items-center justify-center text-sm sm:text-base md:text-lg pb-4 md:pb-6'>
          <MapPin className='mr-1' /> Parul University Campus, Vadodara, Gujarat, India
        </p>
        
        {/* Quote Section */}
        <Quote width={24} height={24} className='sm:w-28 sm:h-28 md:w-34 md:h-34' />
        <p className='text-base sm:text-lg md:text-xl pt-2 sm:pt-4'>
          “Connecting Tradition with Modernity:
        </p>
        <p className='text-base sm:text-lg md:text-xl'>
          Ayurveda for Farmers, Students, and Public Health.”
        </p>
      </div>
    </div>
  )
}

export default Hero
