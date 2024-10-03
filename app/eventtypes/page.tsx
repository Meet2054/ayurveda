import React from 'react';
import { CardDemo } from "@/components/eventList";

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className='w-full'>
        <div className='bg-gray-800 flex flex-row items-center justify-between'>
          <h1 className='text-white text-bold text-3xl ml-4 text-center py-2'>Confrence</h1>
          <a href='/eventregestration/events' className='text-white border-2 border-grat-400 text-3xl text-center px-4 rounded-lg mr-4'>View</a>
        </div>
        <CardDemo category="Conference" />  {/* Render cards from 'Blockchain' category */}
      </div>
      <div className='w-full'>
        <div className='bg-gray-800 flex flex-row items-center justify-between'>
          <h1 className='text-white text-bold text-3xl ml-4 text-center py-2'>Webinar</h1>
          <a href='/eventregestration/events' className='text-white border-2 border-grat-400 text-3xl text-center px-4 rounded-lg mr-4'>View</a>
        </div>
        <CardDemo category="Conference" />  {/* Render cards from 'Blockchain' category */}
      </div>
      {/* <div className='w-full'>
        <div className='bg-gray-800 flex flex-row items-center justify-between'>
          <h1 className='text-white text-bold text-3xl ml-4 text-center py-2'>Confrence</h1>
          <a href='/events' className='text-white border-2 border-grat-400 text-3xl text-center px-4 rounded-lg mr-4'>View</a>
        </div>
        <CardDemo category="Spoarts" />
      </div> */}
    </div>
  );
}

export default Page;
