import React from 'react';
import { CardDemo } from "@/components/eventList";

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <CardDemo category="Blockchain" />  {/* Render cards from 'Blockchain' category */}
      <CardDemo category="Virtual" />     {/* Render cards from 'Virtual' category */}
      {/* <CardDemo category="Upcoming" />    Render cards from 'Upcoming' category */}
    </div>
  );
}

export default Page;
