import React from 'react'
import { teammember } from '@/app/components/data' // Importing teammember data
type Props = {}

const Team = (props: Props) => {
  return (
    <div className='w-full h-auto min-h-[80vh] flex flex-col items-center justify-around text-white py-8'>
      <div className='mb-8 p-2 text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black animate-float-in  ease-in-out'>
          Head of Ayurveda Department
        </h1>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-12 '>
        {teammember.map((member) => (
          <div key={member.id} className='flex flex-col items-center gap-4'>
            <div 
              className='w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-cover bg-center' 
              style={{ backgroundImage: `url(${member.image.src})` }}
            />
            {/* Responsive Text */}
            <h1 className='font-bold text-black text-xl sm:text-2xl lg:text-3xl '>
              {member.name}
            </h1>
            <p className='text-black text-base sm:text-lg lg:text-xl'>
              {member.post}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
