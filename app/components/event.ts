import { StaticImageData } from 'next/image';

export interface Event {
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
    rules?: Array<string>;
    host?: string;
    ticketPrice?: number;
  }
  