import React from 'react';
import { teammember, depthead } from '@/app/components/data'; // Importing teammember data

type Props = {};

const Team = (props: Props) => {
  return (
    <div className='w-full h-auto min-h-[80vh] flex flex-col items-center justify-around text-white py-8'>
      <div className='mb-8 p-2 text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black animate-float-in ease-in-out'>
          Patrons
        </h1>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-12'>
        {teammember.map((member) => (
          <div key={member.id} className='flex flex-col items-center gap-3'>
            <div
              className='w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full bg-cover bg-center'
              style={{ backgroundImage: `url(${member.image.src})` }}
            />
            {/* Responsive Text */}
            <h1 className='font-bold text-black text-xl sm:text-2xl lg:text-3xl'>
              {member.name}
            </h1>
            <p className='text-black text-base sm:text-lg lg:text-xl'>
              {member.post}
            </p>
          </div>
        ))}
      </div>

      <div className='mb-8 pt-20 p-2 text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black animate-float-in ease-in-out'>
          Head of Ayurveda Department
        </h1>
      </div>

      <div className='flex gap-8 w-full px-12 justify-center'>
        {depthead.map((head) => (
          <div key={head.id} className='flex flex-col items-center gap-3'>
            <div
              className='w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full bg-cover bg-center'
              style={{ backgroundImage: `url(${head.image.src})` }}
            />
            {/* Responsive Text */}
            <h1 className='font-bold text-black text-xl sm:text-2xl lg:text-3xl'>
              {head.name}
            </h1>
            <p className='text-black text-base sm:text-lg lg:text-xl'>
              {head.post}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
