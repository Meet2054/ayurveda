"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CalendarIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/navigation';
import { events } from '@/app/components/data'; // Assuming you're importing event data from a file
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Importing the icons
import { PEOPLE_URL } from '@/app/constants/index'
interface Event {
  contactinfo?: string;
}
interface Props {
  event: Event;
}

const EventRegistration = ({ params }: { params: { id: string } }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling 'Read More'
  const router = useRouter();
  const eventId = parseInt(params.id, 10);
  
  const handleRegisterClick = () => {
    router.push(`https://forms.gle/cu7CerYgoFEXoCfu6`);
  };
  
  // Find the event by ID
  const event = events.find((e) => e.id === eventId);
  const contactinfo = event?.contactinfo ?? 'No contact info available';

  if (!event) {
    return <div>Event not found</div>;
  }

  const maxVisibleDetails = 6; // Number of points to show initially

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  // Check if registration is closed based on lastDate
  const isRegistrationClosed = new Date(event.lastDate) < new Date();

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Image and Event Info Section */}
        <div className="relative bg-gray-700 rounded-lg w-full h-96">
          <Image
            src={event.imageUrl}
            alt={event.name}
            className="rounded-lg object-cover"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-4 left-4 bg-gray-700 text-white rounded-full px-3 py-1 text-xs font-bold">
            {new Intl.DateTimeFormat('en-GB', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            }).format(new Date(event.date))}
          </div>
        </div>

        {/* Event Name and Details */}
        <div className="mt-6 px-4 py-4 bg-gray-700 rounded-lg">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">{event.name}</h1>
          <div className="pt-2 flex flex-row items-center">
            <Image
              src={event.imageUrl}
              alt="Host Avatar"
              className="w-5 h-5 rounded-full object-cover mr-3"
            />
            <p className="text-gray-400">
              Organizer <span className="text-green-400">{event.organizer}</span>
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-row">
              <div className="bg-gray-700 rounded-full mr-4 py-2">
                <CalendarIcon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
              </div>
              <div>
                <p className="text-lg font-bold">
                  {new Intl.DateTimeFormat('en-GB', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                  }).format(new Date(event.date))}
                </p>
                <p className="text-gray-400 text-sm">{event.time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Details and Rules Section */}
        <div className="mt-6 bg-gray-700 p-6 rounded-lg">
          <div className="border-white pb-1 border-b-2">
            <h2 className="text-2xl font-semibold mb-1">Event Details</h2>
          </div>

          {event.description && event.description.length > 0 ? (
            <ul className="list-disc list-inside space-y-2 text-gray-400 mt-4">
              {event.description
                .slice(0, isExpanded ? event.description.length : maxVisibleDetails)
                .map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
            </ul>
          ) : (
            <p className="text-gray-400 mt-2 mb-4">No specific details for this event.</p>
          )}

          {/* Read More/Read Less Button */}
          {event.description && event.description.length > maxVisibleDetails && (
            <button
              onClick={toggleReadMore}
              className="text-white underline mt-2"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="border-white pb-1 border-b-2">
              <h2 className="text-2xl font-semibold mb-1">Contact Information</h2>
            </div>
            {event.contactinfo && event.contactinfo.map((contact, index) => (
              <div key={index} className="flex items-start mt-4 flex-col">
                <span className="font-semibold -">{contact.label}:</span>
                <div className='flex flex-row items-center my-1'>
                  <FaEnvelope className=" mr-4" />
                  <a href={`mailto:${contact.info}`} className="text-blue-500 underline">
                    {contact.info}
                  </a>
                </div>
                <div className='flex flex-row my-1 items-center'>
                  <FaPhone className="mr-4" />
                  <a href={`tel:${contact.phone}`} className="text-blue-500 underline">
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="border-white pb-1 border-b-2">
              <h2 className="text-2xl font-semibold mb-1">Hostel Information</h2>
            </div>
            {event.hostelinfo && event.hostelinfo.map((contact, index) => (
              <div key={index} className="flex items-start mt-4 flex-col">
                <span className="font-bold -">{contact.label}:</span>
                <span className="">{contact.price}:</span>
                <div className='flex flex-row items-center'>
                  <FaPhone className="mr-4" />
                  <a href={`tel:${contact.phone}`} className="text-blue-500 underline">
                    {contact.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Rules & Regulations Section */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 underline">Rules & Regulations</h3>
            {event.rules && event.rules.length > 0 ? (
              <>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {event.rules
                    .slice(0, isExpanded ? event.rules.length : maxVisibleDetails)
                    .map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                </ul>

                {/* Read More/Read Less Button for Rules */}
                {event.rules.length > maxVisibleDetails && (
                  <button
                    onClick={toggleReadMore}
                    className="text-white underline mt-2"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </>
            ) : (
              <p className="text-gray-400">No specific rules for this event.</p>
            )}

            <h2 className="text-lg mt-6 font-semibold underline">Prizes and Certification</h2>
            {event.prizes && event.prizes.length > 0 ? (
              <>
                <ul className="list-disc list-inside space-y-2 text-gray-400 mt-2">
                  {event.prizes
                    .slice(0, isExpanded ? event.prizes.length : maxVisibleDetails)
                    .map((prize, index) => (
                      <li key={index}>{prize}</li>
                    ))}
                </ul>

                {/* Read More/Read Less Button for Prizes */}
                {event.prizes.length > maxVisibleDetails && (
                  <button
                    onClick={toggleReadMore}
                    className="text-white underline mt-2"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </>
            ) : (
              <p className="text-gray-400 mt-2">No specific prizes mentioned for this event.</p>
            )}
            <div className="flex items-center gap-4 pt-8 flex-row">
          <span className="flex -space-x-4 overflow-hidden ">
            {PEOPLE_URL.map((url, index) => (
              <Image
                src={url}
                key={index}
                alt="person"
                width={50}
                height={50}
                className='rounded-full border-2'
              />
            ))}
          </span>
          <p className='bold-16t md:bold-20 text-white'>7+ Speakers </p>
          </div>

            
          </div>

          {/* Prizes and Certification Section */}
          {event.status === 'Completed' ? (
            <div className="bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold">Hosts</h2>
              <div className="mt-4">
                <p className="font-bold pb-2">{event.host}</p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="mt-2 flex items-center p-1 mb-3 border-2 rounded-md justify-center border-white flex-row">
                <h2 className="text-lg font-bold mr-2">Hosted By :-</h2>
                <h2 className="font-semibold text-lg ml-2">{event.host}</h2>
              </div>
              <h2 className="text-lg mb-2 font-semibold border-2 p-1 px-4 border-white rounded-md">
                <p className="text-white">
                  Note :- If you want to register in bulk then contact Dr. Kishan Singh
                </p>
                <div className='flex flex-row items-center my-1'>
                  <FaEnvelope className=" mr-4" />
                  <a href={`mailto:${'ayurvimarsha@paruluniversity.ac.in'}`} className="text-blue-500 underline">
                    {'ayurvimarsha@paruluniversity.ac.in'}
                  </a>
                </div>
                <div className='flex flex-row my-1 items-center'>
                  <FaPhone className="mr-4" />
                  <a href={`tel:${'9480384586'}`} className="text-blue-500 underline">
                    {'9480384586'}
                  </a>
                </div>
              </h2>

              <div>
                <h2 className="text-lg mb-2 font-semibold underline">Registration Fees</h2>
                {event.fees && event.fees.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {event.fees.map((price, index) => (
                      <li key={index}>{price}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No specific ticket price for this event.</p>
                )}
              </div>

              <div className="justify-center my-4 items-center">
                <h2 className="text-lg mb-2 font-semibold underline">Bank Details</h2>
                {event.paymentDetails && event.paymentDetails.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {event.paymentDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No specific payment details for this event.</p>
                )}
              </div>

              {event.status === 'Completed' ? (
                <div className="mt-4 flex justify-center w-full items-center bg-white hover:bg-gray-200 text-gray-600 text-lg font-semibold py-2 px-4 rounded-lg">
                  Event Completed
                </div>
              ) : isRegistrationClosed ? (
                <a
                  href="/eventregestration/events"
                  className="mt-4 flex justify-center w-full items-center bg-white hover:bg-gray-200 text-gray-600 text-lg font-semibold py-2 px-4 rounded-lg"
                >
                  Registration Closed
                </a>
              ) : (
                <button
                  className="mt-4 w-full bg-white hover:bg-green-400 text-gray-600 text-lg font-semibold py-2 px-4 rounded-lg"
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
