import Image from 'next/image'
import React from 'react'
import img from '@/assets/image.png'
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='w-full h-[90vh] border-2' >
        <Image src={img} alt="bg" className='w-full h-full' />
    </div>
  )
}

export default Hero