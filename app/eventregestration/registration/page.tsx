'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { events } from '@/app/components/data';


// interface RegistrationProps {params: { id: string };}

const Registration = ({ params }: { params: { id: string } }) => {

  const router = useRouter();
  const eventId = parseInt(params.id, 10);// Extract event ID from the URL

  // Find the event by ID from the events array
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    department: '',
    college: '',
  });

  const [isGenderOpen, setIsGenderOpen] = useState(false); 
  const [termsAccepted, setTermsAccepted] = useState(false); 
  const [isRegistered, setIsRegistered] = useState(false); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    // Logic to handle registration for a specific event
    console.log('User registered for event:', eventId);
    setIsRegistered(true); // Once registered, we show the pay button
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle payment submission
    console.log('Form submitted with payment:', { ...formData, eventId });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Register for {event.name}</h1>
        <p className="text-center text-gray-300 mb-4">Hosted by: {event.organizer}</p>
        <p className="text-center text-gray-300 mb-4">Ticket Price: {event.ticketPrice}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="py-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>

          {/* Gender Dropdown Field */}
          <div className="py-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsGenderOpen(prev => !prev)} // Toggle dropdown
                className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              >
                {formData.gender || 'Select Gender'}
              </button>
              {isGenderOpen && (
                <ul className="absolute z-10 w-full bg-gray-800 border border-gray-600 rounded-lg mt-1 shadow-lg">
                  {['Male', 'Female', 'Other'].map(gender => (
                    <li key={gender}>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, gender }));
                          setIsGenderOpen(false);
                        }}
                        className="block w-full text-left p-3 hover:bg-gray-700 transition duration-200"
                      >
                        {gender}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="py-3">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>

          {/* Department Field */}
          <div className="py-3">
            <input
              type="text"
              name="department"
              required
              placeholder="Enter your department"
              value={formData.department}
              onChange={handleChange}
              className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>

          {/* College Field */}
          <div className="pt-3">
            <input
              type="text"
              name="college"
              required
              placeholder="Enter your college"
              value={formData.college}
              onChange={handleChange}
              className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="pt-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={e => setTermsAccepted(e.target.checked)}
                className="form-checkbox h-5 w-5 text-green-500"
              />
              <span className="ml-2 text-gray-300">
                I accept the{' '}
                <a href="#" className="text-green-500">
                  Terms and Conditions
                </a>
              </span>
            </label>
          </div>

          {/* Conditionally Render Register or Pay Button */}
          {!isRegistered ? (
            <button
              type="button"
              disabled={!termsAccepted}
              onClick={handleRegister} 
              className={`mt-4 w-full py-3 font-bold rounded-lg transition duration-200 ${
                termsAccepted ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              Register
            </button>
          ) : (
            <button
              type="submit"
              className="mt-4 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-200"
            >
              Pay Registration Fee
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Registration;
