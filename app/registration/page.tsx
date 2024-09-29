'use client';

import React, { useState } from 'react';

const Registration: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        email: '',
        department: '',
        college: '',
    });
    
    const [isGenderOpen, setIsGenderOpen] = useState(false); // State for gender dropdown visibility

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add logic to handle registration, such as sending data to the server
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
            <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-2xl p-8">
                <h1 className="text-4xl font-bold text-center mb-6">Registration</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div className='py-3 '>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block  w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                        />
                    </div>

                    {/* Gender Dropdown Field */}
                    <div className='py-3'>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsGenderOpen((prev) => !prev)} // Toggle dropdown
                                className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                            >
                                {formData.gender || 'Select Gender'}
                            </button>
                            {isGenderOpen && (
                                <ul className="absolute z-10 w-full bg-gray-800 border border-gray-600 rounded-lg mt-1 shadow-lg">
                                    {['Male', 'Female', 'Other'].map((gender) => (
                                        <li key={gender}>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, gender }));
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
                    <div className='py-3'>
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
                    <div className='py-3'>
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
                    <div className='py-3'>
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

                    {/* Pay Button */}
                    <button
                        type="submit"
                        className="mt-4 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-200"
                    >
                        Pay Registration Fee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
