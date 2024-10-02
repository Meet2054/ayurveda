import Image from 'next/image'
import React from 'react'
import img from "@/assets/parulLogo1.png"
import { MapPin, Mail, Phone } from 'lucide-react';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full bg-black text-white flex flex-col md:flex-row justify-between items-center p-4 md:h-[25vh]'>
        {/* Logo Section */}
        <div className='mb-4 md:mb-0'>
          <Image src={img} alt="logo" className='w-[180px] h-[50px]' />
        </div>
        
        {/* Quick Links Section */}
        <div className='flex flex-col items-center md:items-start font-bold gap-2 mb-4 md:mb-0'>
          <h1 className='text-lg mb-2'>Quick Links</h1>
          <a href="/dashboard" className='hover:text-gray-400 cursor-pointer'>Home</a>
          <a href="/events" className='hover:text-gray-400 cursor-pointer'>Events</a>
        </div>
        
        {/* Contact Section */}
        <div className='flex flex-col items-center md:items-start gap-2 font-bold'>
          <h1 className='text-lg mb-2'>Contact Us</h1>
          <div className='flex items-center hover:text-gray-400 cursor-pointer gap-2'>
            <Mail/> <p>paruluniversity@gmail.com</p>
          </div>
          <div className='flex items-center hover:text-gray-400 cursor-pointer gap-2'>
            <MapPin/> 
            <a href="https://www.google.com/maps/search/Parul+University/@22.2860275,73.361445,16.19z?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D">Post Limda, Waghodia, Gujarat 391760</a>
          </div>
          <div className='flex items-center hover:text-gray-400 cursor-pointer gap-2'>
            <Phone/> <p>+91-2668-260201</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;
