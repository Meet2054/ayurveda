import React from 'react';
import Image from 'next/image'; 
import image from './image.png'; 
import { CardDemo} from "../../components/eventList"
import Hero from '../components/hero';
import About from '../components/about';
type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
      {/* <InfiniteMovingCardsDemo/> */}
      <Hero/>
      <CardDemo/>
      <About/>
    </div>
  );
}

export default Page;
