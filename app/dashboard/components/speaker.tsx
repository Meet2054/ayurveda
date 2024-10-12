import React from 'react';
import Image from 'next/image'; 
import { StaticImageData } from 'next/image';
// Assuming you're using Next.js Image component
import devanshuPatelImage from '@/assets/devanshu_patel.jpeg'; // Import the actual image file

type Speaker = {
  id: number;
  name: string;
  imageUrl: StaticImageData;
};

const Speaker = () => {
  const speakers: Speaker[] = [
    { id: 1, name: 'Speaker 1', imageUrl: devanshuPatelImage },
    { id: 2, name: 'Speaker 2', imageUrl: devanshuPatelImage },
    { id: 3, name: 'Speaker 3', imageUrl: devanshuPatelImage },
    // Add more speakers as needed
  ];

  return (
    <div className="h-[70vh] w-full border-4 border-black bg-zinc-700 flex flex-col items-center justify-center gap-8 relative">
      {/* Centered Heading */}
      <h1 className="text-3xl font-bold absolute top-4 bg-red-200 p-2 rounded-md">Speaker</h1>
      
      {/* Speaker Images */}
      <div className="flex flex-row gap-8 animate-slide mt-16 bg-slate-600 px-4 sm:gap-12 md:gap-16 overflow-x-auto">
        {speakers.map((speaker) => (
          <div
            key={speaker.id}
            className="flex flex-col items-center bg-gray-200 gap-2 sm:gap-4 min-w-[150px] sm:min-w-[180px] md:min-w-[230px] rounded-xl p-2 sm:p-4"
          >
            <Image 
              src={speaker.imageUrl} 
              alt={speaker.name} 
              width={150} 
              height={150} 
              className="rounded-full"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl pb-2 font-serif">{speaker.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speaker;
