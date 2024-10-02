"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/parulLogo.png'
type Props = {}

const Header = (props: Props) => {
  // State to manage menu visibility in mobile view
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[10vh] flex items-center justify-between px-4 md:px-8 relative ">
      {/* Logo on the left */}
      <div className="text-black text-xl font-bold">
        {/* Replace this with an <img> tag if you have a logo image */}
        <Image src={logo} alt='logo' className=' w-[180px] h-[150px] ' />
      </div>

      {/* Centered navigation for web view */}
      <nav className="hidden md:flex space-x-6 text-black text-lg">
        <div className='bg-gray-600 hover:bg-gray-800 rounded-md py-1 '>
        <a href="/" className="text-white p-4">Home</a>
        </div>
        <div className='bg-gray-600 hover:bg-gray-800 rounded-md py-1 '>
        <a href="/eventtypes" className="text-white p-4">Events</a>
        </div>
        
      </nav>

      {/* Hamburger menu for mobile view */}
      <div className="md:hidden">
        <button 
          className="text-white focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
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
        <nav className="fixed inset-0 bg-green-600 flex flex-col items-center justify-center space-y-8 text-white text-lg z-50">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/events" className="hover:text-gray-300">Event</a>
          {/* Optionally add a close button */}
          <button 
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times; {/* Close icon */}
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
