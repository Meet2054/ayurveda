import { StaticImageData } from 'next/image';

export interface Event {
    // #region Properties (13)

    attendees: number;
    date: string;
    description?: string;
    category?: string
    host?: string;
    id: number;
    imageUrl: StaticImageData;
    name: string;
    organizer: string;
    rules?: Array<string>;
    status: string;
    ticketPrice?: number;
    time: string;
    venue: string;

    // #endregion Properties (13)
}
  