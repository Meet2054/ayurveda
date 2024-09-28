import React from 'react';
import img1 from '@/public/assets/img1.jpg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';


interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  venue: string;
  organizer: string;
  attendees: number;
  imageUrl: StaticImageData;
  status: string;
  description?: string;
}

const EventRegistration = ({ params }: { params: { id: string } }) => {
    
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
          description: 'A blockchain-focused event on Cosmos technology in Mumbai.',
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

  // Extract the event ID from the params
  const eventId = parseInt(params.id, 10);

  // Find the event by ID
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
      {event.description && <p className="text-gray-700">{event.description}</p>}
      <p className="mt-2">Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Time: {event.time}</p>
      <p>Venue: {event.venue}</p>
      <p>Organizer: {event.organizer}</p>
      <p>Attendees: {event.attendees}</p>
      <Image src={event.imageUrl} alt={event.name} className="w-64 h-64 object-cover rounded-lg mt-4" />
    </div>
  );
};

export default EventRegistration;
