import Image from 'next/image';
import { useState } from 'react';

// Assuming your images are stored in the assets folder
import template1 from '@/assets/template/temp1.jpg';
import template2 from '@/assets/template/temp2.jpg';
import template3 from '@/assets/template/temp3.jpg';
import template4 from '@/assets/template/temp4.jpg';
import template5 from '@/assets/template/temp5.jpg';
import template6 from '@/assets/template/temp6.jpg';
import template7 from '@/assets/template/temp7.jpg';
import template8 from '@/assets/template/temp8.jpg';
import template9 from '@/assets/template/temp9.jpg';
import template10 from '@/assets/template/temp10.jpg';
import template11 from '@/assets/template/temp11.jpg';
import template12 from '@/assets/template/temp12.jpg';

// Import more images as needed...

const templates = [
  { id: 1, name: 'Template 1', image: template1 },
  { id: 2, name: 'Template 2', image: template2 },
  { id: 3, name: 'Template 1', image: template3 },
  { id: 4, name: 'Template 2', image: template4 },
  { id: 5, name: 'Template 1', image: template5 },
  { id: 6, name: 'Template 2', image: template6 },
  { id: 7, name: 'Template 1', image: template7 },
  { id: 8, name: 'Template 2', image: template8 },
  { id: 9, name: 'Template 1', image: template9 },
  { id: 10, name: 'Template 2', image: template10 },
  { id: 11, name: 'Template 1', image: template11 },
  { id: 12, name: 'Template 2', image: template12 },
  
  // Add more template objects here...
];

export default function TemplatesPage() {
    return (
      <div className="templates-page bg-gray-700">
        <div className="grid grid-cols-1">
          {templates.map((template) => (
            <div key={template.id} className="template-card m-8 bg-gray-600 p-2 rounded-lg shadow-lg">
              <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh]">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="rounded-lg object-fit" // ensures the image covers the area without expanding
                  style={{ objectFit: 'cover' }} // alternatively, this works the same as the Tailwind class
                />
              </div>
              <h2 className="text-2xl bg-white rounded-lg text-center p-1 font-semibold mt-2">{template.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
