import React from 'react'
import img from '@/assets/parul.jpg'

type Props = {}

const Team = (props: Props) => {
  return (
    <div className='w-full h-auto min-h-[80vh] flex flex-col items-center justify-around text-white py-8'>
      <div className='mb-8 p-2 text-center'>
        <h1 className='text-5xl font-bold text-black'>Head of Ayurveda Department</h1>
      </div>
      
      <div className='flex flex-wrap justify-around gap-8 w-full px-16'>
        {/* Team Member */}
        {Array(4).fill('').map((_, idx) => (
          <div key={idx} className='flex flex-col items-center gap-4'>
            <div 
              className='w-56 h-56 rounded-full bg-cover bg-center' 
              style={{ backgroundImage: `url(${img.src})` }} 
            />
            <h1 className='font-bold text-2xl'>Meet Parekh</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
