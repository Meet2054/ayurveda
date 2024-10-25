import React from 'react'
import Image from 'next/image'
import Gama from "@/assets/gamalogo.jpg"
import Spark from "@/assets/sparklogo.jpg"
type Props = {}

const Sponser = (props: Props) => {
  return (
    <div className='w-full h-[30vh]'>
      <div className='flex flex-col gap-8 pt-6'>
        <h1 className='text-4xl md:text-5xl font-medium text-center'>Sponsors</h1>
        <div className='flex flex-row md:flex-row items-center justify-center gap-8 md:gap-32'>
          <Image src={Gama} alt="Sponsor1" width={100} className='h-[10vh] md:h-[12vh]' />
          <Image src={Spark} alt="Sponsor2" width={100} className='h-[10vh] md:h-[13vh]' />
        </div>
      </div>
    </div>
  )
}

export default Sponser
