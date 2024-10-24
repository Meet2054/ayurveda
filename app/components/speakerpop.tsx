import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
interface Speaker {
  id: number;
  name: string;
  post: string;
  imageUrl: string;
}

interface SpeakerPopProps {
  speaker: Speaker | null;
  isOpen: boolean;
  onClose: () => void;
}

const SpeakerPop: React.FC<SpeakerPopProps> = ({ speaker, isOpen, onClose }) => {
  if (!isOpen || !speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg bg-black bg-opacity-70">
      <div className="relative bg-gray-600 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 focus:outline-none"
        >
          <Plus className='rotate-45 ' />
        </button>
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image
              src={speaker.imageUrl}
              alt={speaker.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h1 className="text-2xl text-gray-100 font-bold">{speaker.name}</h1>
          <p className="text-gray-200 pt-4 text-center">{speaker.post}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerPop;
