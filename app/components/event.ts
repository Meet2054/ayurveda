import { StaticImageData } from 'next/image';


export interface ContactInfo {

    info: string;
    label?: string;
    phone?: string;
    type: string;

}

export interface Event {

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

}

export interface Head {

    id: number;
    image: StaticImageData;
    name: string,
    post: string,

}

export interface HostelInfo {

    label?: string;
    phone?: string;
    price?: string;

}

export interface Payment {

    paymentDetails?: Array<string>;
}

export interface Team {

    id: number;
    image: StaticImageData;
    name: string,
    post: string,

}

export interface Speaker {

    id: number;
    name: string;
    imageUrl: string;
    post: string;

}