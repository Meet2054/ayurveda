"use client"

import React from 'react';
import img1 from '@/public/assets/img1.jpg';
import Image from 'next/image';
import { CalendarIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/navigation';
import { events } from '@/app/components/data';

const EventRegistration = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const eventId = parseInt(params.id, 10); 

  const handleRegisterClick = () => {
    router.push(`/registration/${eventId}`);
  };

  // Find the event by ID
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6 ">
        
        {/* Image and Event Info Section */}
        
        <div className="relative bg-gray-700 rounded-lg w-full h-80"> 
          <Image
            src={event.imageUrl}
            alt={event.name}
            className="rounded-lg object-cover"
            layout="fill" // Makes the image fill the parent container
            objectFit="cover" // Ensures the image covers the box without stretching
          />
          <div className="absolute top-4 left-4 bg-gray-700 text-white rounded-full px-3 py-1 text-xs font-bold">
            {new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(new Date(event.date))}
          </div>
        </div>


        {/* Event Name and Details */}
        <div className="mt-6 px-4 py-4 bg-gray-700 rounded-lg">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">{event.name}</h1>
          <div className="pt-2 flex flex-row items-center ">
            <Image
              src={event.imageUrl}
              alt="Host Avatar"
              className="w-5 h-5 rounded-full object-cover mr-3"
            />
            <p className="text-gray-400">Hosted by <span className="text-green-400">{event.organizer}</span></p>
          </div>
          
          <div className="flex items-center flex-row justify-between mt-4">
            <div className='flex flex-row'>
              <div className="bg-gray-700 rounded-full mr-4 py-2">
                  <CalendarIcon className="h-8 w-8 sm:h-10 sm:w-10 bg text-gray-400" />
              </div>
              <div>
                <p className="text-lg font-bold">{new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(new Date(event.date))}</p>
                <p className="text-gray-400 text-sm">{event.time}</p>
              </div>
            </div>
            {event.status === 'Completed' ? (
              <>
                <div 
                  className="mt-4 flex justify-center items-center bg-white hover:bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-lg">
                  Event Completed
                </div>
              </>
            ) : (
              <>
                <button 
                  onClick={handleRegisterClick}
                  className="mt-4 bg-white hover:bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-lg">
                  Register
                </button>
              </>
            )}
          </div>
        </div>

        {/* Event Details and Rules Section */}
        <div className="mt-8 bg-gray-700 p-6 rounded-lg">
          
          <div className='border-white pb-1 border-b-2 '>
               <h2 className="text-2xl font-semibold mb-1">Event Details</h2>            
            </div>
            <p className="text-gray-300 mt-2 mb-4">{event.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Registration Section */}
          <div className="bg-gray-700 p-4 rounded-lg">
            
            <h3 className="text-xl font-semibold mb-2">Rules & Regulations</h3>
             {event.rules && event.rules.length > 0 ? (
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No specific rules for this event.</p> // Fallback text if no rules are defined
          )}
          </div>

          {event.status === 'Completed' ? (<div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Hosts</h2>
            <div className="mt-4">
              <p className="font-bold pb-2">{event.host}</p>
              {/* <div>
               <Image
                    src={event.imageUrl}
                    alt="Host Avatar"
                    className="w-full h-full rounded-lg object-cover mr-3"
                />
              </div> */}
            </div>
          </div>
        ):(
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Hosted By</h2>
            <div className="mt-1">
              <p className="font-bold pb-2">{event.host}</p>
              {/* <div>
               <Image
                    src={event.imageUrl}
                    alt="Host Avatar"
                    className="w-full h-full rounded-lg object-cover mr-3"
                />
              </div> */}
            </div>
            <p className="text-gray-400">Ticket Price : <span className="text-green-400">{event.ticketPrice}</span></p>
          </div>
        )}         
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
