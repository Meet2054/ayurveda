import React from 'react'
import { teammember } from '@/app/components/data' // Importing teammember data
type Props = {}

const Team = (props: Props) => {
  return (
    <div className='w-full h-auto min-h-[80vh] flex flex-col items-center justify-around text-white py-8'>
      <div className='mb-8 p-2 text-center'>
        <h1 className='text-5xl font-bold text-black'>Head of Ayurveda Department</h1>
      </div>
      
      <div className='flex flex-wrap justify-around gap-8 w-full px-16'>
        {/* Map over teammember data */}
        {teammember.map((member) => (
          <div key={member.id} className='flex flex-col items-center gap-4'>
            <div 
              className='w-56 h-56 rounded-full bg-cover bg-center' 
              style={{ backgroundImage: `url(${member.image.src})` }} // Use member's imageUrl
            />
            <h1 className='font-bold text-black text-2xl'>{member.name}</h1> {/* Display name */}
            <p className='text-black text-lg'>{member.post}</p> {/* Display post */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
