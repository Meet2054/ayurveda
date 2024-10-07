import React from 'react'
import img from '@/assets/ayu.jpeg'
import { MapPin } from 'lucide-react'
import { Quote } from 'lucide-react';
import ayurveda from '@/assets/ayurveda.png'
import Image from 'next/image'

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
        <div className='px-8 rounded-xl bg-white h-8 flex items-center justify-center my-4 sm:my-6 md:my-8'>
          <p className='text-black text-xs sm:text-sm md:text-base'>
            International Conference on "Ayurveda for Everyone, Every Day"
          </p>
        </div>
        
        {/* Dates */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl pb-2'>
          16<sup>th</sup> and 17<sup>th</sup> November 2024
        </h1>
        
        {/* Location */}
        <div className='flex items-center justify-center gap-4 '>
        <MapPin className='' />
        <a href="https://www.google.com/maps/search/Parul+University/@22.2860275,73.361445,16.19z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" 
                className='flex text-sm sm:text-base md:text-lg'>    
              Parul University Campus, Vadodara, Gujarat, India    
        </a>
        </div>  
        
        {/* Quote Section */}
        <div className='py-6'>
          <Image src={ayurveda} alt="logo" className='w-[70px] h-[70px]' />
        </div>

        <p className='text-base sm:text-lg md:text-xl'>
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
