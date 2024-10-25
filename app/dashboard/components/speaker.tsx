"use client";
import React, { useState } from 'react';
import SpeakerPop from '@/app/components/speakerpop'; 
import { speakers } from '@/app/components/data'; 
import { cn } from "@/lib/utils";

interface Speaker {
  id: number;
  name: string;
  post: Array<string>;
  imageUrl: string;
}

const SpeakerComponent: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
    setIsModalOpen(false);
  };

  return (
    <div className='w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh] bg-gray-200 overflow-hidden flex flex-col items-center justify-around text-white p-2'>
      <div className='mb-6 p-2 text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black animate-float-in ease-in-out'>
          Speakers
        </h1>
      </div>

      <div
        className={cn(
          "animate-infiniteXSlide inline-flex gap-16 w-full px-12"
        )}
        style={{ animationDuration: "20s", animationIterationCount: "infinite" }}>
        {speakers.map(member => (
          <button key={member.id} onClick={() => handleSpeakerClick(member)}>
            <div className='flex flex-col items-center gap-3 cursor-pointer'>
              <div
                className='md:w-32 md:h-32 w-52 h-52 lg:w-48 lg:h-48 rounded-full bg-cover bg-center'
                style={{ backgroundImage: `url(${member.imageUrl})` }}
              />
              <h1 className='font-semibold text-black text-lg mt-4 sm:text-xl lg:text-2xl text-center'>
                {member.name}
              </h1>
            </div>
          </button>
        ))}
      </div>

      {/* Modal for speaker details */}
      <SpeakerPop
        speaker={selectedSpeaker}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default SpeakerComponent;
