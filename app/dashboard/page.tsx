import React from 'react';
import { CardDemo} from "../../components/eventList"
import Hero from './components/hero';
import About from './components/about';
import Team from './components/team';
import Speaker from './components/speaker';
import Sponser from './components/sponser';
type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* <InfiniteMovingCardsDemo/> */}
      <Hero/>       
      <CardDemo/> 
      <Sponser/>
      <About/>
      <Speaker/>
      <Team/>
    </div>
  );
}

export default Page;
