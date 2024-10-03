import React from 'react';
import { CardDemo} from "../../components/eventList"
import Hero from './components/hero';
import About from './components/about';
import Team from './components/team';
type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* <InfiniteMovingCardsDemo/> */}
      <Hero/>
      <div className='w-full'>
        <div className='bg-gray-400 flex flex-row items-center justify-between'>
          <h1 className='text-black text-bold text-3xl ml-4 text-center py-2'>Events</h1>
          <a href='/eventtypes' className='text-black border-2 border-gray-900 text-3xl text-center px-4 rounded-lg mr-4'>View</a>
        </div>
        <CardDemo/> 
      </div>
      <About/>
      <Team/>
    </div>
  );
}

export default Page;
