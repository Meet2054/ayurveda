import React from 'react'
import img from '@/assets/ayu.jpeg'
import { MapPin } from 'lucide-react'
import { Quote } from 'lucide-react';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div 
      className='w-full h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-white font-bold  ' 
      style={{ backgroundImage: `url(${img.src})` }}
    >
        <div className="absolute inset-0 bg-black opacity-50 w-full h-[90vh] mt-[10vh]"></div>
      <div className='flex flex-col w-full h-[90vh] items-center justify-center z-10 ' >
      <h1 className='text-5xl' >Ayur Fest,</h1>
      <h1 className='text-7xl ' >AyurVimarsha</h1>
      <div className='w-full bg-white h-8 flex items-center justify-center my-10' >
      <p className='text-black' >International Conference on "Ayurveda for Everyone, Every Day"</p>
      </div> 
      <h1 className='text-5xl pb-2' >16<sup>th</sup> and 17<sup>th</sup> November 2024</h1>
      <p className='flex flex-inline pb-6' > <MapPin/> Parul University Campus, Vadodara, Gujarat, India</p>
      <Quote width={34} height={34} />
      <p className='text-xl pt-4'>“Connecting Tradition with Modernity:</p>
      <p className='text-xl'>Ayurveda for Farmers, Students, and Public Health.”</p>
        </div>
    </div>
  )
}

export default Hero
