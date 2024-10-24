import React from 'react'
import Image from 'next/image'
import Gama from "@/assets/gamalogo.jpg"
import Spark from "@/assets/sparklogo.jpg"
type Props = {}

const Sponser = (props: Props) => {
  return (
    <div className='w-full h-[20vh] bg-gray-200' >
        <div className='flex flex-row items-center justify-center gap-32' >
            <Image src={Gama} alt="Sponser1" width={100} className='h-[14vh]' />
            <Image src={Spark} alt="Sponser2" width={100} className='h-[14vh]' />
        </div>
    </div>
  )
}

export default Sponser