import { StaticImageData } from 'next/image';

export interface Event {
    // #region Properties (13)

    // attendees: number;
    date: string;
    lastDate: string;
    description?: Array<string>;
    category?: string
    host?: string;
    id: number;
    imageUrl: StaticImageData;
    paymentQR: StaticImageData;
    name: string;
    organizer: string;
    rules?: Array<string>;
    status: string;
    ticketPrice?: string;
    time: string;
    venue: string;
    prizes?: Array<string>;
    contactinfo?: Array<string>;

    // #endregion Properties (13)
}
  