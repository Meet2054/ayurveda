import React from 'react';
import { CardDemo} from "@/components/eventList";

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div></div>
      <CardDemo/>
      <div></div>
      <CardDemo/>
      <div></div>
      <CardDemo/>
    </div>
  );
}

export default Page;
