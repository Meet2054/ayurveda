import { StaticImageData } from 'next/image';

// #region Interfaces (6)

export interface ContactInfo {
    // #region Properties (4)

    info: string;
    label?: string;
    phone?: string;
    type: string;

    // #endregion Properties (4)
}

export interface Event {
    // #region Properties (19)

    category?: string
    contactinfo?: Array<ContactInfo>;
    // attendees: number;
    date: string;
    description?: Array<string>;
    fees?: Array<string>;
    host?: string;
    hostelinfo?: Array<HostelInfo>;
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
    time: string;
    venue: string;

    // #endregion Properties (19)
}

export interface Head {
    // #region Properties (4)

    id: number;
    image: StaticImageData;
    name: string,
    post: string,

    // #endregion Properties (4)
}

export interface HostelInfo {
    // #region Properties (3)

    label?: string;
    phone?: string;
    price?: string;

    // #endregion Properties (3)
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

// #endregion Interfaces (6)
