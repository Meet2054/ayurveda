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
        Parul University is NAAC ++ one among youngest university in Nation.
        PU is a hub of 34 Institutes offering 250+
        programs, 150+ acre fully equipped campus
        nurturing 28000+ students, 900+ International Students
        from 49+ Countries, 2000+ faculty members & providing
        in-campus residential facility to 7000+ students and
        staff making it India's premier multidisciplinary
        University with Medical, Ayurved, Homeopathy,
        Paramedical, Pharmacy colleges along with Technical,
        Engineering and Management Institutes. It has branches in
        Ahmadabad and Rajkot.
        Parul University, Faculty of Ayurved has two
        institutes namely Parul Institute of Ayurved and Parul
        Institute of Ayurved & Research in its ambit. Both these
        institutes have their teaching hospitals namely Parul
        Ayurved Hospital & Khemdas Ayurved Hospital.
        “Quality is not an act but it is a habit.” These hospitals
        cater quality healthcare services for poor & needy
        people of the society which are recognized for their
        humane services accredited by National Accreditation
        Board for Hospitals and Healthcare Providers (NABH).
        “Ananda Bliss” is a super-specialty unit with state of the art Panchkarma facilities.
        Parul Institute of Ayurved & Parul Institute of Ayurved & Research are
        approaching forward to achieve the highest rank & set a unique benchmark in
        teaching methodologies of Ayurved & to set up a platform for UG, PG & PhD.
        Parul Institute of Ayurved have post graduate courses in 12 disciplines &
        doctoral programes in all disciplines of Ayurved.Parul Institute of Ayurved
        is successfully running a G.M.P certified pharmacy which manufactures
        140+ Ayurvedic formulations.
        Both the colleges are well connected by road ways, railways and airlines. It
        is approximately 20-25 km from central bus stand, railway station and airport
        of Vadodara. 
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
