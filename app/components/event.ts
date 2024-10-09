import { StaticImageData } from 'next/image';

export interface ContactInfo {
    type: string;  
    info: string; 
    label?: string; 
    phone?: string; 
}

export interface Event {

    category?: string
    contactinfo?: Array<ContactInfo>;
    // attendees: number;
    date: string;
    description?: Array<string>;
    host?: string;
    id: number;
    imageUrl: StaticImageData;
    lastDate: string;
    name: string;
    organizer: string;
    paymentDetails?: Array<string>;
    paymentQR: StaticImageData;
    prizes?: Array<string>;
    rules?: Array<string>;
    status: string;
    ticketPrice?: Array<string>;
    time: string;
    venue: string;
}

export interface Head {

    id: number;
    image: StaticImageData;
    name: string,
    post: string,
}

export interface Payment {
    // #region Properties (1)

    paymentDetails?: Array<string>;

    // #endregion Properties (1)
}

export interface Team {
    // #region Properties (4)

    id: number;
    image: StaticImageData;
    name: string,
    post: string,

    // #endregion Properties (4)
}

// #endregion Interfaces (4)
