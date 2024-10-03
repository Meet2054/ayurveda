import React from 'react'
import img from '@/assets/parul.png'

type Props = {}

const About = (props: Props) => {
  return (
    <div 
      className='w-full h-[90vh] sm:h-[90vh] md:h-[100vh] bg-cover bg-center flex flex-col items-center justify-top pt-8 gap-2 ' 
      style={{ backgroundImage: `url(${img.src})` }} 
    >
       <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
        Parul University
      </h1>
      <p className='w-[90%] sm:w-[70%] md:w-[70%] text-center md:text-center text-sm sm:text-base md:text-xl text-white'>
      Parul University is a private university in Vadodara, Gujarat, India.Prior to its incorporation as Parul University under the Gujarat Private Universities Act Second Amendment of 2009, the University’s origins traces back to 1993, with the establishment of the Ahmedabad Homeopathic College.Parul University is situated on a 150-acre campus in Vadodara housing over 50,000 students and has a rich history of achievements, including being Gujarat’s first self-financed institute.      </p>
      </div>
  )
}

export default About
