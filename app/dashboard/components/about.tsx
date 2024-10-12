"use client"; // Ensure it's client-side

import React, { useEffect, useRef, useState } from 'react';
import img from '@/assets/parul.png';

type Props = {}

const About = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle read more
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility state when in view
      },
      {
        threshold: 0.3, // Adjust this to control when the fade-in happens
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded); // Toggle the read more state
  };

  return (
    <div 
      ref={aboutRef}
      className={`w-full h-[90vh] sm:h-[90vh] md:h-[100vh] bg-cover bg-center flex flex-col items-center justify-top pt-8 gap-2 transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} // This controls fade-in based on isVisible state
      style={{ backgroundImage: `url(${img.src})` }} 
    >
      <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white`}>
        Parul University
      </h1>
      <p className={`w-[90%] sm:w-[70%] md:w-[70%] rounded-xl text-center md:text-center text-sm sm:text-base md:text-xl text-white ${isExpanded ? '' : 'line-clamp-5'}`}>
      Parul University is one of the youngest NAAC ++ accredited universities in the nation. 
      It is a hub of 34 institutes offering 250+ programs on a 150+ acre campus, nurturing 28,000+ students, 
      including 900+ international students from 49 countries, with 2,000+ faculty members. 
      The campus provides residential facilities for 7,000+ students and staff, 
      making it a premier multidisciplinary university with colleges in medical, 
      Ayurved, homeopathy, paramedical, pharmacy, engineering, and management fields. 
      It has branches in Ahmedabad and Rajkot.
      The Faculty of Ayurved includes Parul Institute of Ayurved and Parul Institute of Ayurved & Research, 
      both with their own teaching hospitals, Parul Ayurved Hospital and Khemdas Ayurved Hospital, which are NABH accredited. 
      "Ananda Bliss" is a super-specialty unit offering advanced Panchkarma facilities. 
      The institutes provide undergraduate, postgraduate, and PhD programs, 
      including 12 postgraduate disciplines and a GMP-certified pharmacy manufacturing 140+ Ayurvedic formulations.
      The university's hospitals cater to the poor and needy with quality healthcare services. 
      The colleges are well connected by road, rail, and air, located 20-25 km from Vadodara's central bus stand, 
      railway station, and airport. 
      </p>
      <button 
        className="text-white underline mt-2" 
        onClick={toggleReadMore}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default About;
