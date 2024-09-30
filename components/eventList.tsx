"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { events } from "@/app/components/data"; // Import the events data
import { useRouter } from 'next/navigation';

export function CardDemo() {
  // Duplicate cards to create seamless transition
  const cardsToDisplay = [...events, ...events]; // Use the events array
  const router = useRouter();  // Initialize useRouter

  const eventhandler = ()=>{
    router.push(`/events`);  // Navigate to dynamic event page
  }

  return (
    <div className="relative overflow-hidden w-full h-[70vh] flex items-center">
      <div
        className={cn(
          "flex space-x-12 py-4 animate-slide whitespace-nowrap"
        )}
        style={{ animationDuration: "30s", animationIterationCount: "infinite" }}
        onClick={eventhandler}
      >
        {cardsToDisplay.map((event, index) => (
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
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src={event.imageUrl.src} // Use the event image for avatar
                  className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    {event.name} 
                  </p>
                  <p className="text-sm text-gray-400">{event.venue}</p> 
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  {event.organizer}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {event.description} 
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add sliding animation keyframes */}
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
      `}</style>
    </div>
  );
}
