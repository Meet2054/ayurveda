import React from 'react'
import Image from 'next/image'
import Gama from "@/assets/gamalogo.jpg"
import Spark from "@/assets/sparklogo.jpg"
type Props = {}

const Sponser = (props: Props) => {
  return (
    <div className='w-full h-[20vh] bg-gray-200' >
        <div className='flex flex-row items-center justify-around' >
            <Image src={Gama} alt="Sponser1" width={100} height={100} />
            <Image src={Spark} alt="Sponser2" width={100} height={100} />
        </div>
    </div>
  )
}

export default Sponser