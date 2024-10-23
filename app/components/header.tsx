"use client";
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import grouplogo from '@/assets/parulLogo.png';

type Props = {};

const Header = (props: Props) => {
  // State to manage menu visibility in mobile view
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full h-[6vh] lg:h-[8vh] flex items-center justify-between px-4 md:px-8 relative">
      {/* Logo on the left */}
      <div className="flex items-center h-[60%] w-[70%] lg:w-[33%]">
        <a href='/'>
          <Image 
            src={grouplogo} 
            alt='logo' 
            className="h-full object-contain"
          />
        </a>
      </div>

      {/* Centered navigation for web view */}
      <nav className="hidden md:flex space-x-4 text-lg">       
        <div className='py-1 hover:bg-gray-200 rounded-full hover:text-black'>
          <a href="/" className="p-4 ">Home</a>
        </div>
        <div className='py-1 hover:bg-gray-200 rounded-full hover:text-black'>
          <a href="/events" className="p-4">Events</a>
        </div>
        <div className='py-1 hover:bg-gray-200 rounded-full hover:text-black'>
          <a 
          href="/brochure.pdf" 
          target="_blank"             
          rel="noopener noreferrer"
          className="p-4">
            Brochure
          </a>
        </div>
      </nav>

      {/* Hamburger menu for mobile view */}
      <div className="md:hidden">
        <button
          className="text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Full-Screen Dropdown */}
      {menuOpen && (
        <nav 
          ref={dropdownRef} 
          className="absolute top-10 right-4 w-auto bg-gray-700 flex flex-col items-center justify-start space-y-2 rounded-lg shadow-lg text-white border-gray-300 border-2 text-sm z-50"
        >
          <a 
            href="/" 
            className="w-full p-2 mx-4 flex justify-around rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          >
            Home
          </a>
          <a 
            href="/events" 
            className="flex justify-around w-full p-2 mx-4 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          >
            Event
          </a>
          <a 
            href="/brochure.pdf" 
            target="_blank"             
            rel="noopener noreferrer" 
            className="flex justify-around w-full p-2 mx-4 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          >
            Brochure
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
