"use client";
import React from 'react';
import { cn } from "@/lib/utils";

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
    { id: 6, name: 'Dr Prasanna Rao', post: '', imageUrl: '/speakers/speaker7.png' },
    { id: 7, name: 'Dr Shekhar Annambhotla', post: '', imageUrl: '/speakers/speaker10.png' },
    { id: 8, name: 'Vd Harish Kumar Verma', post: '', imageUrl: '/speakers/speaker11.png' },
    { id: 9, name: 'Dr Rajanikant Patel', post: '', imageUrl: '/speakers/speaker12.png' },
    { id: 10, name: 'Dr P. Hemantha Kumar', post: '', imageUrl: '/speakers/speaker13.png' },
    { id: 11, name: 'Dr sanjay pokhrel', post: '', imageUrl: '/speakers/speaker14.png' },
    { id: 12, name: 'Anurag Varshney', post: '', imageUrl: '/speakers/speaker15.png' },
    { id: 13, name: 'Dr. Abhishek Gupta', post: '', imageUrl: '/speakers/speaker16.png' },
    { id: 14, name: 'Dr Rohit Sane', post: '', imageUrl: '/speakers/speaker17.png' },
    { id: 15, name: 'Acharya Manish', post: '', imageUrl: '/speakers/speaker18.png' },
    { id: 16, name: 'Dr. Pradeep Kumar Sahu', post: '', imageUrl: '/speakers/speaker19.png' },
    { id: 17, name: 'Dr Suhas Kumar Shetty', post: '', imageUrl: '/speakers/speaker20.png' },
    { id: 18, name: 'Dr. Raghuram Bhatt', post: '', imageUrl: '/speakers/speaker21.png' },
    { id: 19, name: 'VAIDYA TAPANKUMAR. M.D.(AYU.)', post: '', imageUrl: '/speakers/speaker22.png' },
    { id: 20, name: 'Dr Ranjit Singh', post: '', imageUrl: '/speakers/speaker23.png' },
    { id: 21, name: 'Dr Prasanna Kerur', post: '', imageUrl: '/speakers/speaker8.png' },

  ];


  return (
    <div className='w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh] bg-gray-200 overflow-hidden flex flex-col items-center justify-around text-white p-2'>
      <div className='mb-6 p-2 text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black animate-float-in ease-in-out'>
          Speakers
        </h1>
      </div>

      <div
      className={cn(
        "animate-infiniteXSlide inline-flex gap-16  w-full px-12"
      )}
      style={{ animationDuration: "20s", animationIterationCount: "infinite" }}>
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
    </div>
  );
};

export default Speaker;
