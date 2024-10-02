"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { Event } from './event';
import { events } from "@/app/components/data"; // Import the events data
import { useRouter } from 'next/navigation';

interface CardDemoProps {
  category?: string;  // Explicitly define category type
}

export function CardDemo({ category }: CardDemoProps) {
  const router = useRouter();  // Initialize useRouter
  
  // Filter events based on the category
  const filteredEvents = events.filter((event) => event.category === category);

  const eventhandler = () => {
    router.push(`/events`);  // Navigate to dynamic event page
  }

  return (
    <div className="relative overflow-hidden w-full h-[70vh] flex items-center ">
      <div
        className={cn(
          "flex space-x-12 py-4 animate-slide whitespace-nowrap "
        )}
        style={{ animationDuration: "30s", animationIterationCount: "infinite" }}
        onClick={eventhandler}
      >
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="inline-block min-w-xs max-w-xs w-full group/card transform transition-transform"
          >
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl backgroundImage flex flex-col justify-between p-4",
                "bg-cover"
              )}
              style={{ backgroundImage: `url(${event.imageUrl.src})` }} // Using the imageUrl for background
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-gray-500 opacity-50 group-hover/card:text-white "></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src={event.imageUrl.src} // Use the event image for avatar
                  className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-black group-hover/card:text-white relative z-10">
                    {event.organizer} 
                  </p>
                  <p className="text-sm text-black group-hover/card:text-gray-800">{event.venue}</p> 
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-900 relative group-hover/card:text-white z-10 break-words whitespace-normal">
                  {event.name}
                </h1>

                {event.time && (
                  <p className="font-normal text-sm text-gray-900 group-hover/card:text-white relative z-10 my-4">
                    {event.time} 
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-slide {
          animation: slide 10s linear infinite;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .card {
          min-height: 24rem;
          min-width: 20rem;
        }
      `}</style>
    </div>
  );
}
