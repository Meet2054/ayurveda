import Image from 'next/image'
import React from 'react'
import img from "@/app/dashboard/image.png"
import { MapPin, Mail, Phone } from 'lucide-react';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full bg-black text-white flex flex-col md:flex-row justify-between items-center p-4 md:h-[25vh]'>
        {/* Logo Section */}
        <div className='mb-4 md:mb-0'>
          <Image src={img} alt="logo" className='w-24 h-24' />
        </div>
        
        {/* Quick Links Section */}
        <div className='flex flex-col items-center md:items-start font-bold gap-2 mb-4 md:mb-0'>
          <h1 className='text-lg mb-2'>Quick Links</h1>
          <p className='hover:text-gray-400 cursor-pointer'>Home</p>
          <p className='hover:text-gray-400 cursor-pointer'>Event</p>
        </div>
        
        {/* Contact Section */}
        <div className='flex flex-col items-center md:items-start gap-2 font-bold'>
          <h1 className='text-lg mb-2'>Contact Us</h1>
          <div className='flex items-center hover:text-gray-400 cursor-pointer gap-2'>
            <Mail/> <p>paruluniversity@gmail.com</p>
          </div>
          <div className='flex items-center hover:text-gray-400 cursor-pointer gap-2'>
            <MapPin/> <p>Post Limda, Waghodia, Gujarat 391760</p>
          </div>
          <div className='flex items-center hover:text-gray-400 cursor-pointer gap-2'>
            <Phone/> <p>+91-2668-260201</p>
          </div>
        </div>
    </div>
  )
}

export default Footer;
