import { StaticImageData } from 'next/image';

export interface Event {
    id: number;
    name: string;
    date: string;
    time: string;
    venue: string;
    organizer: string;
    attendees: number;
    imageUrl: StaticImageData;  // Update this type
    status: string;
}
