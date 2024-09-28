"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Event } from './components/event'; // Assuming you have this event interface defined
import img1 from '@/public/assets/img1.jpg';
import Image from 'next/image';

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');
  
  const currentDate = new Date();
  const router = useRouter();  // Initialize useRouter

  const events: Event[] = [
    {
      id: 1,
      name: 'Cosmos Mumbai led by Warden Protocol',
      date: '2024-07-28T14:00:00',
      time: '2:00 PM',
      venue: 'Lumos Cowork',
      organizer: 'Cosmoverse Dubai, Rhythm Jain & Warden',
      attendees: 241,
      imageUrl: img1,
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Polygon Community Call',
      date: '2024-09-30T21:30:00',
      time: '9:30 PM',
      venue: 'Virtual',
      organizer: 'Cale Moody',
      attendees: 545,
      imageUrl: img1,
      status: 'Invited',
    },
    {
      id: 3,
      name: 'DevFest 2024',
      date: '2024-10-05T10:00:00',
      time: '10:00 AM',
      venue: 'Google HQ',
      organizer: 'Google Developers',
      attendees: 1021,
      imageUrl: img1,
      status: 'Upcoming',
    },
    {
      id: 4,
      name: 'React Conference',
      date: '2024-10-15T09:00:00',
      time: '9:00 AM',
      venue: 'Virtual',
      organizer: 'React Community',
      attendees: 789,
      imageUrl: img1,
      status: 'Upcoming',
    },
    {
      id: 5,
      name: 'JS Conf 2023',
      date: '2023-09-15T09:00:00',
      time: '9:00 AM',
      venue: 'Virtual',
      organizer: 'JavaScript Enthusiasts',
      attendees: 890,
      imageUrl: img1,
      status: 'Completed',
    },
    {
      id: 6,
      name: 'Hackathon 2023',
      date: '2023-08-20T10:00:00',
      time: '10:00 AM',
      venue: 'Lumos Cowork',
      organizer: 'Tech Hackers',
      attendees: 620,
      imageUrl: img1,
      status: 'Completed',
    },
  ];

  // Navigate to the registration page with the event ID
  const eventHandler = (eventId: number) => {
    router.push(`/eventregestration/${eventId}`);  // Navigate to dynamic event page
  };
  
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = events.filter(event => new Date(event.date) < currentDate);

  return (
    <div className="max-w-4xl bg-blue-300 mx-auto py-8 px-4 md:px-6 flex flex-col ">
      <div className="flex items-center justify-between mb-6 md:px-2 ">
        <h2 className="text-2xl font-semibold ">Events List</h2>

        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-4 py-2 rounded-full ${filter === 'upcoming' ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-4 py-2 rounded-full ${filter === 'past' ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}
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
  );
};

export default EventsPage;
