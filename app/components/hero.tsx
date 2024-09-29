import React from 'react'
import img from '@/assets/image.svg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div 
      className='w-full h-[90vh]  bg-cover bg-center' 
      style={{ backgroundImage: `url(${img.src})` }} // Use img.src for Next.js dynamic imports
    >
      {/* Additional content can go here */}
      
    </div>
  )
}

export default Hero
