"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { events } from '../components/data'; // Assuming you have this event interface defined
import Image from 'next/image';

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');
  
  const currentDate = new Date();
  const router = useRouter();  // Initialize useRouter

  // Navigate to the registration page with the event ID
  const eventHandler = (eventId: number) => {
    router.push(`/eventregestration/${eventId}`);  // Navigate to dynamic event page
  };
  
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = events.filter(event => new Date(event.date) < currentDate);

  return (
    <div className='bg-gray-700 h-full'>

    <div className="max-w-4xl bg-gray-700 mx-auto py-8 px-4 md:px-6 flex flex-col ">
      <div className="flex items-center justify-between mb-6 md:px-2 ">
        <h2 className="text-3xl font-semibold text-white ">Events List</h2>

        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-full ${filter === 'upcoming' ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
            >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-full ${filter === 'past' ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}
            >
            Past
          </button>
        </div>
      </div>
      
      {filter === 'upcoming' ? (
        <div className="flex flex-col justify-center">
          {upcomingEvents.map(event => (
            <div
            key={event.id}
            onClick={() => eventHandler(event.id)}  // Pass event ID to eventHandler
            className="bg-gray-800 text-white p-4 mb-6 rounded-lg mx-2 cursor-pointer"
            >
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center space-x-2 pb-2">
                    <span className="bg-red-500 text-xs px-2 py-1 rounded">{event.status}</span>
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <p className="text-gray-400">{event.organizer}</p>
                  <p className="text-gray-400">{event.venue}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-green-400">Going</span>
                    <span className="text-xs text-gray-300">+{event.attendees}</span>
                  </div>
                </div>
                <Image src={event.imageUrl} alt={event.name} className="w-36 h-36 rounded-lg object-cover mr-1" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          {pastEvents.map(event => (
            <div
            key={event.id}
            className="bg-gray-800 text-white p-4 mb-6 rounded-lg mx-2 cursor-pointer"
            onClick={() => eventHandler(event.id)}  // Pass event ID to eventHandler
            >
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center space-x-2 pb-2">
                    <span className="bg-red-500 text-xs px-2 py-1 rounded">{event.status}</span>
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <p className="text-gray-400">{event.organizer}</p>
                  <p className="text-gray-400">{event.venue}</p>
                </div>
                <Image src={event.imageUrl} alt={event.name} className="w-36 h-36 rounded-lg object-cover mr-1" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
      </div>
  );
};

export default EventsPage;
