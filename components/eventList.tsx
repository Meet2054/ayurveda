"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { events } from "@/app/components/data"; 
import { useRouter } from 'next/navigation';
interface CardDemoProps {
  category?: string;  
}

export function CardDemo({ category }: CardDemoProps) {
  const router = useRouter(); 

  // Filter events based on the category if it's provided, otherwise show all events
  const filteredEvents = category 
    ? events.filter((event) => event.category === category)
    : events;

  const eventHandler = (eventId: number) => {
    router.push(`/eventregestration/${eventId}`);
  };

  // Duplicate events to achieve infinite scroll effect
  const duplicatedEvents = [...filteredEvents, ...filteredEvents, ...filteredEvents, ...filteredEvents, ...filteredEvents]; // Duplicate only a couple of times

  return (
    <div className="relative bg-gray-200 overflow-hidden flex items-center w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh]">
      <div
        className={cn(
          "space-x-12 py-4 inline-flex animate-infiniteXSlide"
        )}
        style={{ animationDuration: "70s", animationIterationCount: "infinite" }} // Adjust duration as needed
      >
        {duplicatedEvents.map((event, index) => (
          <div
            key={index}
            className="inline-block min-w-xs max-w-xs w-full group/card transform transition-transform cursor-pointer"
            onClick={() => eventHandler(event.id)} 
          >
            <div
              className={cn(
                "overflow-hidden relative card h-96 rounded-md shadow-xl backgroundImage flex flex-col justify-between p-4",
                "bg-cover"
              )}
              style={{ backgroundImage: `url(${event.imageUrl.src})` }} 
            >
              <div className="absolute w-full h-full top-0 left-0 transition-all duration-300 ease-in-out group-hover/card:bg-gray-900 opacity-50 group-hover/card:text-white"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src={event.imageUrl.src}
                  className="h-10 w-10 rounded-full border-2 object-cover "
                  loading="lazy"
                />
                <div className="flex flex-col bg-gray-200 bg-opacity-35 rounded-lg pl-2">
                  <p className="font-normal text-base text-black break-words group-hover/card:text-white relative z-10 whitespace-normal">
                    {event.organizer}
                  </p>
                  <p className="text-sm text-black group-hover/card:text-white">{event.venue}</p> 
                </div>
              </div>
              <div className="text content bg-gray-200 bg-opacity-35 rounded-lg pl-2">
                <h1 className="font-bold text-xl md:text-2xl text-gray-900 relative group-hover/card:text-white z-10 break-words whitespace-normal">
                  {event.category}
                </h1>
                {event.time && (
                  <p className="font-semibold text-sm break-words text-gray-900 group-hover/card:text-white relative z-10 my-4 whitespace-normal">
                    {event.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card {
          min-height: 24rem;
          min-width: 20rem;
        }
      `}</style>
    </div>
  );
}
