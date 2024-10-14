"use client";
import React from 'react';

type Speaker = {
  id: number;
  name: string;
  imageUrl: string;
  post: string;
};

const Speaker = () => {
  const speakers: Speaker[] = [
    { id: 1, name: 'Dr Narayan Sahane', post: '', imageUrl: '/speakers/speaker1.png' },
    { id: 2, name: 'Dr. Rajnikant Patel', post: '', imageUrl: '/speakers/speaker2.png' },
    { id: 3, name: 'Dr Ramdas Avhad', post: '', imageUrl: '/speakers/speaker3.png' },
    { id: 4, name: 'Vd. Tapan Kumar', post: '', imageUrl: '/speakers/speaker4.png' },
    { id: 5, name: 'Ashutosh Kulkarni', post: '', imageUrl: '/speakers/speaker5.png' },
    { id: 6, name: 'P. Hemantha Kumar', post: '', imageUrl: '/speakers/speaker6.png' },
    { id: 7, name: 'Dr Prasanna Rao', post: '', imageUrl: '/speakers/speaker7.png' },
  ];

  // Duplicate the speaker list to create a continuous looping effect
  const duplicatedSpeakers = [...speakers, ...speakers,...speakers,...speakers,...speakers]; // Double the array

  return (
    <div className='w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh] bg-gray-200 overflow-hidden flex flex-col items-center justify-around text-white p-2'>
      <div className='mb-6 p-2 text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black animate-float-in ease-in-out'>
          Speakers
        </h1>
      </div>

      <div className='animate-slide gap-16  w-full px-12'>
        {speakers.map((member) => (
          <div key={member.id} className='flex flex-col items-center gap-3'>
            <div
              className='md:w-32 md:h-32 w-52 h-52 lg:w-48 lg:h-48 rounded-full bg-cover bg-center'
              style={{ backgroundImage: `url(${member.imageUrl})`}}
            />
            {/* Responsive Text */}
            <h1 className='font-semibold text-black text-lg mt-4 sm:text-xl lg:text-2xl text-center'>
              {member.name}
            </h1>
            {/* <p className='text-black text-base sm:text-lg lg:text-xl text-center'>
              {member.post}
            </p> */}
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-slide {
          display: flex;
          animation: slide 40s linear infinite;
        }
        @keyframes slide {
          0% {
            transform: translateX(100%); /* Start from the beginning */
          }
          100% {
            transform: translateX(-100%); /* Move to the end */
          }
        }
      `}</style>
    </div>
  );
};

export default Speaker;
