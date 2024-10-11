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

const templates = [
  { id: 1, name: 'Template 1', image: template1 },
  { id: 2, name: 'Template 2', image: template2 },
  { id: 3, name: 'Template 3', image: template3 },
  { id: 4, name: 'Template 4', image: template4 },
  { id: 5, name: 'Template 5', image: template5 },
  { id: 6, name: 'Template 6', image: template6 },
  { id: 7, name: 'Template 7', image: template7 },
  { id: 8, name: 'Template 8', image: template8 },
  { id: 9, name: 'Template 9', image: template9 },
  { id: 10, name: 'Template 10', image: template10 },
  { id: 11, name: 'Template 11', image: template11 },
  { id: 12, name: 'Template 12', image: template12 },
];

export default function TemplatesPage() {
  return (
    <div className="templates-page bg-gray-700">
      <div className="grid grid-cols-1 gap-8 p-4">
        {templates.map((template) => (
          <div key={template.id} className="template-card bg-gray-600 p-4 rounded-lg shadow-lg">
            <div className="relative w-full pb-[75%] rounded-lg overflow-hidden">
              <Image
                src={template.image}
                alt={template.name}
                className="absolute inset-0 h-full w-full"
                objectFit='contain'
              />
            </div>
            <h2 className="text-2xl bg-white rounded-lg text-center p-2 font-semibold mt-4">{template.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
