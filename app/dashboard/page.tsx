import React from 'react';
import Image from 'next/image'; 
import image from './image.png'; 

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image
        src={image} 
        alt="Descriptive Alt Text" 
        className="rounded-lg w-full h-fu;llshadow-lg" 
      />
    </div>
  );
}

export default Page;
