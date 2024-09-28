import { StaticImageData } from 'next/image';
export interface Event {
    id: number;
    name: string;
    date: string;
    time: string;
    venue: string;
    organizer: string;
    attendees: number;
    imageUrl: StaticImageData; // Assuming you're using static images from Next.js
    status: string;
    description?: string;  // Make 'description' optional if not all events have it
  }
  