"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { events } from '@/app/components/data'; 
import Image from 'next/image';

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');
  const [loading, setLoading] = useState(false); 
  const currentDate = new Date();
  const router = useRouter(); 

  // Navigate to the registration page with the event ID
  const eventHandler = async (eventId: number) => {
    setLoading(true); 
    try {
      await router.push(`/eventregestration/${eventId}`); 
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setLoading(false); // Set loading to false after navigation
    }
  };

  // Function to format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long', 
      year: 'numeric',
    }).format(date);
  };

  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = events.filter(event => new Date(event.date) < currentDate);

  return (
    <div className='bg-gray-700 h-full min-h-[70vh]  '>
      <div className="max-w-4xl flex-grow bg-gray-700 mx-auto py-8 px-4 md:px-6 flex flex-col">
        <div className="flex items-center justify-between mb-6 md:px-2 ">
          <h2 className="text-3xl font-bold text-white ">Events</h2>

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
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-2 pb-2">
                      <span className="bg-red-500 text-xs px-2 py-1 rounded">{event.status}</span>
                      <span className="text-sm break-words">{formatDate(event.date)}</span> {/* Format date */}
                    </div>
                    <h3 className="text-xl font-bold break-words">
                      {event.category}
                    </h3>
                    <p className="text-gray-400">{event.organizer}</p>
                    <p className="text-gray-400">{event.venue}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="text-green-400">{event.name}</span>
                    </div>
                  </div>
                  <Image 
                    src={event.imageUrl} 
                    alt={event.name} 
                    className="w-36 h-36 rounded-lg object-cover flex-shrink-0" 
                  />
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
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-2 pb-2">
                      <span className="bg-red-500 text-xs px-2 py-1 rounded">{event.status}</span>
                      <span className="text-sm">{formatDate(event.date)}</span> {/* Format date */}
                    </div>
                    <h3 className="text-xl font-bold break-words">
                      {event.name}
                    </h3>
                    <p className="text-gray-400">{event.organizer}</p>
                    <p className="text-gray-400">{event.venue}</p>
                  </div>
                  <Image 
                    src={event.imageUrl} 
                    alt={event.name} 
                    className="w-36 h-36 rounded-lg object-cover flex-shrink-0" 
                  />
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
