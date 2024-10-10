import Image from 'next/image';
import { useState } from 'react';

// Assuming your images are stored in the assets folder
import template1 from '@/assets/parul1 .png';
import template2 from '@/assets/parul.png';
// Import more images as needed...

const templates = [
  { id: 1, name: 'Template 1', image: template1 },
  { id: 2, name: 'Template 2', image: template2 },
  { id: 3, name: 'Template 1', image: template1 },
  { id: 4, name: 'Template 2', image: template2 },
  { id: 5, name: 'Template 1', image: template1 },
  { id: 6, name: 'Template 2', image: template2 },
  { id: 7, name: 'Template 1', image: template1 },
  { id: 8, name: 'Template 2', image: template2 },
  
  // Add more template objects here...
];

export default function TemplatesPage() {
  return (
    <div className="templates-page bg-gray-700">
      <div className="grid grid-cols-1">
        {templates.map((template) => (
        <div key={template.id} className="template-card m-8 bg-gray-600 p-2 rounded-lg shadow-lg">
            <Image
            src={template.image}
            alt={template.name}
            className="w-full rounded-lg h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh] object-cover"
            />
            <h2 className="text-2xl  bg-white rounded-lg text-center p-1 font-semibold mt-2">{template.name}</h2>
        </div>
        ))}
      </div>
    </div>
  );
}
