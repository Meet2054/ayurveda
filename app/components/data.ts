import { Event, Team, Head, Payment, Speaker } from './event';
import eventimg from '@/assets/event.jpg';
import EventCover from "@/public/EventCover1.jpg"
import EventCover2 from "@/public/EventCover2.jpg"
import EventCover3 from "@/public/EventCover3.jpg"
import EventCover4 from "@/public/EventCover4.jpg"
import EventCover5 from "@/public/EventCover5.jpg"
import EventCover1 from "@/public/EventCover6.jpg"
import president from "@/assets/devanshu_patel.jpeg"
import vise_president from "@/assets/parul_patel.jpeg"
import trustee from '@/assets/geetika.jpeg'
import medical_director from '@/assets/komal.jpeg'
import dean from '@/assets/dean.png'
import principal from '@/assets/principal.png'

export const events: Event[] = [
  {
    id: 1,
    name: 'AYURVIMARSHA AYURQUIZ 2024',
    category: 'Main Conference', // Added category
    date: '2024-11-07T00:00:00',
    time: 'Time Will be announced on the Day of Conference',
    lastDate: '2024-10-24T00:00:00',
    venue: 'PIA, Parul University',
    organizer: 'Parul Institute of Ayurved, Parul University',
    imageUrl: EventCover,
    paymentQR: eventimg,
    status: 'Upcoming',
    description: [
      'AyurQuiz Pre Screening rounds will be finalized till 24th October 2024, (Thursday).',
      'Final AyurQuiz On Stage round will be conducted on the day of the conference.',
      'Dates: November 16th & 17th, 2024, Final Round (Offline).',
      'Time: Will be announced on the Day of Conference.',
      'Venue: PIA, Parul University.',
      'Last Date for Registration: 07/11/2024',
      'Open to all students (UG, PG, and Interns) of Ayurvedic colleges and institutions across India.',
      'Each college can send a team of students including 2 Participants, 2 Backup Participants & One Mentor.',
      'Multiple entries from one college will be allowed for screening rounds.',
      'Participation certificates will be provided to all participants.',
      'We look forward to your enthusiastic participation in this enriching event.',
      'Best regards.'
    ],
    rules: [
      'Preliminary round :',
      'Those registered team of participants will be given a set of question paper containing 50 multiple choice objective type questions by G forms and Link will be shared to the registered teams participants through their Registered Email id and same information will be conveyed to Mentors also.',
      'The following rules will be application for the preliminary round.',
      '   Time limit: 45 minutes.',
      '   Each question will carry 1 mark.',
      '   The selected teams shall have to appear for the final round.',
      'Final Ayurquiz  on stage round:',
      'Further instructions regarding the final rounds will be given to the Selected Team of Participants.'
    ],
    host: 'Dr.Hemant Toshikhane',
    prizes: [
      '1st Prize: 3000/- Rs.',
      '2nd Prize: 2000/- Rs.',
      '3rd Prize: 1000/- Rs.',
    ],
    fees: [
      '200/- Rs. for UG Students',
      '200/- Rs. for PG Students',
      '2000/- Rs. for Facuilty',
      'Pay before Registration, because you have to fill your payment details in the registration form.',
    ],
    contactinfo: [
      {
        type: 'email',
        info: 'krishna.rathod34716@paruluniversity.ac.in',
        label: 'Dr. Krishna Rathod',
        phone: '7276763413',
      },
      {
        type: 'email',
        info: 'manuprasad.s86269@paruluniversity.ac.in',
        label: 'Dr. Manuprasad K S',
        phone: '7204276809',
      },
    ],
    hostelinfo: [
      {
        label: 'Harsitithi Hostel',
        price: '500/- Rs. + GST per day with breakfast dinner.',
        phone: '7272882266',
      },
      {
        label: 'Infinity Hostel',
        price: '500/- Rs. + GST per day with breakfast lunch dinner.',
        phone: '7204276809',
      },
      {
        label: 'Patel Hostel',
        price: '500/- Rs. +GST per day',
        phone: '7204276809',
      },
    ],
    paymentDetails: [
      'Bank Name :- Central Bank of India',
      'AC Name :- Parul University',
      'AC Number :- 3434915719',
      'IFSC Code :- CBIN0284063',
      'Branch Name :- Parul Institute of Engineering and Technology, Limda, Waghodia, Vadodara, Gujarat 391760',     
    ],

  },
  {
    id: 2,
    name: 'AYURVIMARSHA AYURQUIZ 2024',
    category: 'AyurQuiz', // Added category
    date: '2024-11-07T00:00:00',
    time: 'Time Will be announced on the Day of Conference',
    lastDate: '2024-11-07T00:00:00',
    venue: 'PIA, Parul University',
    organizer: 'Parul Institute of Ayurved, Parul University',
    imageUrl: EventCover1,
    paymentQR: eventimg,
    status: 'Upcoming',
    description: [
      'AyurQuiz Pre Screening rounds will be finalized till 24th October 2024, (Thursday).',
      'Final AyurQuiz On Stage round will be conducted on the day of the conference.',
      'Dates: November 16th & 17th, 2024, Final Round (Offline).',
      'Time: Will be announced on the Day of Conference.',
      'Venue: PIA, Parul University.',
      'Last Date for Registration: 07/11/2024',
      'Open to all students (UG, PG, and Interns) of Ayurvedic colleges and institutions across India.',
      'Each college can send a team of students including 2 Participants, 2 Backup Participants & One Mentor.',
      'Multiple entries from one college will be allowed for screening rounds.',
      'Participation certificates will be provided to all participants.',
      'We look forward to your enthusiastic participation in this enriching event.',
      'Best regards.'
    ],
    rules: [
      'Preliminary round :',
      'Those registered team of participants will be given a set of question paper containing 50 multiple choice objective type questions by G forms and Link will be shared to the registered teams participants through their Registered Email id and same information will be conveyed to Mentors also.',
      'The following rules will be application for the preliminary round.',
      '   Time limit: 45 minutes.',
      '   Each question will carry 1 mark.',
      '   The selected teams shall have to appear for the final round.',
      'Final Ayurquiz  on stage round:',
      'Further instructions regarding the final rounds will be given to the Selected Team of Participants.'
    ],
    host: 'Dr.Hemant Toshikhane',
    prizes: [
      '1st Prize: 3000/- Rs.',
      '2nd Prize: 2000/- Rs.',
      '3rd Prize: 1000/- Rs.',
    ],
    fees: [
      '200/- Rs. for UG Students',
      '200/- Rs. for PG Students',
      '2000/- Rs. for Facuilty',
      'Pay before Registration, because you have to fill your payment details in the registration form.',
    ],
    contactinfo: [
      {
        type: 'email',
        info: 'krishna.rathod34716@paruluniversity.ac.in',
        label: 'Dr. Krishna Rathod',
        phone: '7276763413',
      },
      {
        type: 'email',
        info: 'manuprasad.s86269@paruluniversity.ac.in',
        label: 'Dr. Manuprasad K S',
        phone: '7204276809',
      },
    ],
    hostelinfo: [
      {
        label: 'Harsitithi Hostel',
        price: '500/- Rs. + GST per day with breakfast dinner.',
        phone: '7272882266',
      },
      {
        label: 'Infinity Hostel',
        price: '500/- Rs. + GST per day with breakfast lunch dinner.',
        phone: '7204276809',
      },
      {
        label: 'Patel Hostel',
        price: '500/- Rs. +GST per day',
        phone: '7204276809',
      },
    ],
    paymentDetails: [
      'Bank Name :- Central Bank of India',
      'AC Name :- Parul University',
      'AC Number :- 3434915719',
      'IFSC Code :- CBIN0284063',
      'Branch Name :- Parul Institute of Engineering and Technology, Limda, Waghodia, Vadodara, Gujarat 391760',     
    ],

  },
  {
    id: 3,
    name: 'AYURVIMARSHA AYURQUIZ 2024',
    category: 'Webinars', // Added category
    date: '2024-11-07T00:00:00',
    time: 'Time Will be announced on the Day of Conference',
    lastDate: '2024-11-07T00:00:00',
    venue: 'PIA, Parul University',
    organizer: 'Parul Institute of Ayurved, Parul University',
    imageUrl: EventCover2,
    paymentQR: eventimg,
    status: 'Upcoming',
    description: [
      'AyurQuiz Pre Screening rounds will be finalized till 24th October 2024, (Thursday).',
      'Final AyurQuiz On Stage round will be conducted on the day of the conference.',
      'Dates: November 16th & 17th, 2024, Final Round (Offline).',
      'Time: Will be announced on the Day of Conference.',
      'Venue: PIA, Parul University.',
      'Last Date for Registration: 07/11/2024',
      'Open to all students (UG, PG, and Interns) of Ayurvedic colleges and institutions across India.',
      'Each college can send a team of students including 2 Participants, 2 Backup Participants & One Mentor.',
      'Multiple entries from one college will be allowed for screening rounds.',
      'Participation certificates will be provided to all participants.',
      'We look forward to your enthusiastic participation in this enriching event.',
      'Best regards.'
    ],
    rules: [
      'Preliminary round :',
      'Those registered team of participants will be given a set of question paper containing 50 multiple choice objective type questions by G forms and Link will be shared to the registered teams participants through their Registered Email id and same information will be conveyed to Mentors also.',
      'The following rules will be application for the preliminary round.',
      '   Time limit: 45 minutes.',
      '   Each question will carry 1 mark.',
      '   The selected teams shall have to appear for the final round.',
      'Final Ayurquiz  on stage round:',
      'Further instructions regarding the final rounds will be given to the Selected Team of Participants.'
    ],
    host: 'Dr.Hemant Toshikhane',
    prizes: [
      '1st Prize: 3000/- Rs.',
      '2nd Prize: 2000/- Rs.',
      '3rd Prize: 1000/- Rs.',
    ],
    fees: [
      '200/- Rs. for UG Students',
      '200/- Rs. for PG Students',
      '2000/- Rs. for Facuilty',
      'Pay before Registration, because you have to fill your payment details in the registration form.',
    ],
    contactinfo: [
      {
        type: 'email',
        info: 'krishna.rathod34716@paruluniversity.ac.in',
        label: 'Dr. Krishna Rathod',
        phone: '7276763413',
      },
      {
        type: 'email',
        info: 'manuprasad.s86269@paruluniversity.ac.in',
        label: 'Dr. Manuprasad K S',
        phone: '7204276809',
      },
    ],
    hostelinfo: [
      {
        label: 'Harsitithi Hostel',
        price: '500/- Rs. + GST per day with breakfast dinner.',
        phone: '7272882266',
      },
      {
        label: 'Infinity Hostel',
        price: '500/- Rs. + GST per day with breakfast lunch dinner.',
        phone: '7204276809',
      },
      {
        label: 'Patel Hostel',
        price: '500/- Rs. +GST per day',
        phone: '7204276809',
      },
    ],
    paymentDetails: [
      'Bank Name :- Central Bank of India',
      'AC Name :- Parul University',
      'AC Number :- 3434915719',
      'IFSC Code :- CBIN0284063',
      'Branch Name :- Parul Institute of Engineering and Technology, Limda, Waghodia, Vadodara, Gujarat 391760',     
    ],

  },
  {
    id: 4,
    name: 'AYURVIMARSHA AYURQUIZ 2024',
    category: 'Cultural Events', // Added category
    date: '2024-11-07T00:00:00',
    time: 'Time Will be announced on the Day of Conference',
    lastDate: '2024-11-07T00:00:00',
    venue: 'PIA, Parul University',
    organizer: 'Parul Institute of Ayurved, Parul University',
    imageUrl: EventCover3,
    paymentQR: eventimg,
    status: 'Upcoming',
    description: [
      'AyurQuiz Pre Screening rounds will be finalized till 24th October 2024, (Thursday).',
      'Final AyurQuiz On Stage round will be conducted on the day of the conference.',
      'Dates: November 16th & 17th, 2024, Final Round (Offline).',
      'Time: Will be announced on the Day of Conference.',
      'Venue: PIA, Parul University.',
      'Last Date for Registration: 07/11/2024',
      'Open to all students (UG, PG, and Interns) of Ayurvedic colleges and institutions across India.',
      'Each college can send a team of students including 2 Participants, 2 Backup Participants & One Mentor.',
      'Multiple entries from one college will be allowed for screening rounds.',
      'Participation certificates will be provided to all participants.',
      'We look forward to your enthusiastic participation in this enriching event.',
      'Best regards.'
    ],
    rules: [
      'Preliminary round :',
      'Those registered team of participants will be given a set of question paper containing 50 multiple choice objective type questions by G forms and Link will be shared to the registered teams participants through their Registered Email id and same information will be conveyed to Mentors also.',
      'The following rules will be application for the preliminary round.',
      '   Time limit: 45 minutes.',
      '   Each question will carry 1 mark.',
      '   The selected teams shall have to appear for the final round.',
      'Final Ayurquiz  on stage round:',
      'Further instructions regarding the final rounds will be given to the Selected Team of Participants.'
    ],
    host: 'Dr.Hemant Toshikhane',
    prizes: [
      '1st Prize: 3000/- Rs.',
      '2nd Prize: 2000/- Rs.',
      '3rd Prize: 1000/- Rs.',
    ],
    fees: [
      '500/- Rs. for UG Students',
      '1000/- Rs. for PG Students',
      '2000/- Rs. for Facuilty',
      'Pay before Registration, because you have to fill your payment details in the registration form.',
    ],
    contactinfo: [
      {
        type: 'email',
        info: 'krishna.rathod34716@paruluniversity.ac.in',
        label: 'Dr. Krishna Rathod',
        phone: '7276763413',
      },
      {
        type: 'email',
        info: 'manuprasad.s86269@paruluniversity.ac.in',
        label: 'Dr. Manuprasad K S',
        phone: '7204276809',
      },
    ],
    hostelinfo: [
      {
        label: 'Harsitithi Hostel',
        price: '500/- Rs. + GST per day with breakfast dinner.',
        phone: '7272882266',
      },
      {
        label: 'Infinity Hostel',
        price: '500/- Rs. + GST per day with breakfast lunch dinner.',
        phone: '7204276809',
      },
      {
        label: 'Patel Hostel',
        price: '500/- Rs. +GST per day',
        phone: '7204276809',
      },
    ],
    paymentDetails: [
      'Bank Name :- Central Bank of India',
      'AC Name :- Parul University',
      'AC Number :- 3434915719',
      'IFSC Code :- CBIN0284063',
      'Branch Name :- Parul Institute of Engineering and Technology, Limda, Waghodia, Vadodara, Gujarat 391760',     
    ],

  },
  {
    id: 5,
    name: 'AYURVIMARSHA AYURQUIZ 2024',
    category: 'Conference', // Added category
    date: '2024-11-07T00:00:00',
    time: 'Time Will be announced on the Day of Conference',
    lastDate: '2024-11-07T00:00:00',
    venue: 'PIA, Parul University',
    organizer: 'Parul Institute of Ayurved, Parul University',
    imageUrl: EventCover4,
    paymentQR: eventimg,
    status: 'Upcoming',
    description: [
      'AyurQuiz Pre Screening rounds will be finalized till 24th October 2024, (Thursday).',
      'Final AyurQuiz On Stage round will be conducted on the day of the conference.',
      'Dates: November 16th & 17th, 2024, Final Round (Offline).',
      'Time: Will be announced on the Day of Conference.',
      'Venue: PIA, Parul University.',
      'Last Date for Registration: 07/11/2024',
      'Open to all students (UG, PG, and Interns) of Ayurvedic colleges and institutions across India.',
      'Each college can send a team of students including 2 Participants, 2 Backup Participants & One Mentor.',
      'Multiple entries from one college will be allowed for screening rounds.',
      'Participation certificates will be provided to all participants.',
      'We look forward to your enthusiastic participation in this enriching event.',
      'Best regards.'
    ],
    rules: [
      'Preliminary round :',
      'Those registered team of participants will be given a set of question paper containing 50 multiple choice objective type questions by G forms and Link will be shared to the registered teams participants through their Registered Email id and same information will be conveyed to Mentors also.',
      'The following rules will be application for the preliminary round.',
      '   Time limit: 45 minutes.',
      '   Each question will carry 1 mark.',
      '   The selected teams shall have to appear for the final round.',
      'Final Ayurquiz  on stage round:',
      'Further instructions regarding the final rounds will be given to the Selected Team of Participants.'
    ],
    host: 'Dr.Hemant Toshikhane',
    prizes: [
      '1st Prize: 3000/- Rs.',
      '2nd Prize: 2000/- Rs.',
      '3rd Prize: 1000/- Rs.',
    ],
    fees: [
      '200/- Rs. for UG Students',
      '200/- Rs. for PG Students',
      '2000/- Rs. for Facuilty',
      'Pay before Registration, because you have to fill your payment details in the registration form.',
    ],
    contactinfo: [
      {
        type: 'email',
        info: 'krishna.rathod34716@paruluniversity.ac.in',
        label: 'Dr. Krishna Rathod',
        phone: '7276763413',
      },
      {
        type: 'email',
        info: 'manuprasad.s86269@paruluniversity.ac.in',
        label: 'Dr. Manuprasad K S',
        phone: '7204276809',
      },
    ],
    hostelinfo: [
      {
        label: 'Harsitithi Hostel',
        price: '500/- Rs. + GST per day with breakfast dinner.',
        phone: '7272882266',
      },
      {
        label: 'Infinity Hostel',
        price: '500/- Rs. + GST per day with breakfast lunch dinner.',
        phone: '7204276809',
      },
      {
        label: 'Patel Hostel',
        price: '500/- Rs. +GST per day',
        phone: '7204276809',
      },
    ],
    paymentDetails: [
      'Bank Name :- Central Bank of India',
      'AC Name :- Parul University',
      'AC Number :- 3434915719',
      'IFSC Code :- CBIN0284063',
      'Branch Name :- Parul Institute of Engineering and Technology, Limda, Waghodia, Vadodara, Gujarat 391760',     
    ],

  },
  {
    id: 6,
    name: 'AYURVIMARSHA AYURQUIZ 2024',
    category: 'Hands-On Surgical and Skill Development Training', // Added category
    date: '2024-11-07T00:00:00',
    time: 'Time Will be announced on the Day of Conference',
    lastDate: '2024-11-07T00:00:00',
    venue: 'PIA, Parul University',
    organizer: 'Parul Institute of Ayurved, Parul University',
    imageUrl: EventCover5,
    paymentQR: eventimg,
    status: 'Upcoming',
    description: [
      'AyurQuiz Pre Screening rounds will be finalized till 24th October 2024, (Thursday).',
      'Final AyurQuiz On Stage round will be conducted on the day of the conference.',
      'Dates: November 16th & 17th, 2024, Final Round (Offline).',
      'Time: Will be announced on the Day of Conference.',
      'Venue: PIA, Parul University.',
      'Last Date for Registration: 07/11/2024',
      'Open to all students (UG, PG, and Interns) of Ayurvedic colleges and institutions across India.',
      'Each college can send a team of students including 2 Participants, 2 Backup Participants & One Mentor.',
      'Multiple entries from one college will be allowed for screening rounds.',
      'Participation certificates will be provided to all participants.',
      'We look forward to your enthusiastic participation in this enriching event.',
      'Best regards.'
    ],
    rules: [
      'Preliminary round :',
      'Those registered team of participants will be given a set of question paper containing 50 multiple choice objective type questions by G forms and Link will be shared to the registered teams participants through their Registered Email id and same information will be conveyed to Mentors also.',
      'The following rules will be application for the preliminary round.',
      '   Time limit: 45 minutes.',
      '   Each question will carry 1 mark.',
      '   The selected teams shall have to appear for the final round.',
      'Final Ayurquiz  on stage round:',
      'Further instructions regarding the final rounds will be given to the Selected Team of Participants.'
    ],
    host: 'Dr.Hemant Toshikhane',
    prizes: [
      '1st Prize: 3000/- Rs.',
      '2nd Prize: 2000/- Rs.',
      '3rd Prize: 1000/- Rs.',
    ],
    fees: [
      '200/- Rs. for UG Students',
      '200/- Rs. for PG Students',
      '2000/- Rs. for Facuilty',
      'Pay before Registration, because you have to fill your payment details in the registration form.',
    ],
    contactinfo: [
      {
        type: 'email',
        info: 'krishna.rathod34716@paruluniversity.ac.in',
        label: 'Dr. Krishna Rathod',
        phone: '7276763413',
      },
      {
        type: 'email',
        info: 'manuprasad.s86269@paruluniversity.ac.in',
        label: 'Dr. Manuprasad K S',
        phone: '7204276809',
      },
    ],
    hostelinfo: [
      {
        label: 'Harsitithi Hostel',
        price: '500/- Rs. + GST per day with breakfast dinner.',
        phone: '7272882266',
      },
      {
        label: 'Infinity Hostel',
        price: '500/- Rs. + GST per day with breakfast lunch dinner.',
        phone: '7204276809',
      },
      {
        label: 'Patel Hostel',
        price: '500/- Rs. +GST per day',
        phone: '7204276809',
      },
    ],
    paymentDetails: [
      'Bank Name :- Central Bank of India',
      'AC Name :- Parul University',
      'AC Number :- 3434915719',
      'IFSC Code :- CBIN0284063',
      'Branch Name :- Parul Institute of Engineering and Technology, Limda, Waghodia, Vadodara, Gujarat 391760',     
    ],

  },
];

export const teammember: Team[] = [
  {
    id: 1,
    name: "Dr.Devanshu J Patel",
    post: "President, Parul University",
    image: president,
  }, 
  {
    id: 2,
    name: "Dr.Parul Patel",
    post: "Vice President, Parul University",
    image: vise_president,
  },  
  {
    id: 3,
    name: "Dr.Geetika M Patel,",
    post: "Vice President & Trustee, Parul University",
    image: trustee,
  } , 
  {
    id: 4,
    name: "Dr.Komal Patel",
    post: "Vice President & Medical Director, Parul University",
    image: medical_director,
  },
]

export const depthead: Head[] = [
  {
    id: 1,
    name: "Dr.Hemant Thoshikhane",
    post: "Dean, Faculty of Ayurveda, Parul University",
    image: dean,
  },
  {
    id: 2,
    name: "Dr.Bhagwan G kulkarni",
    post: "Principal, Parul Institute of Ayurveda & Research, Parul University",
    image: principal,
  },
]

export const speakers: Speaker[] = [
  { 
    id: 1, 
    name: 'Dr Narayan Sahane', 
    post: ['MS Shalya Tantra Medical Director Brahma Ayurveda, Nadiad'], 
    imageUrl: '/speakers/speaker1.png', 
  },
  { 
    id: 2, 
    name: 'Dr. Rajnikant Patel', 
    post: [
      'Renowned Ayurved Practitioner & Educator',
      'Director of "Best Ayurveda Ltd" at Brampton Ontario, Canada',
    ], 
    imageUrl: '/speakers/speaker2.png',
  },
  { 
    id: 3, 
    name: 'Dr Ramdas Avhad', 
    post: [
      'BAMS (Gold medalist), DPC, FIIM, Rashtriya Guru (Rashtriya Ayurved Vidyapeeth, Delhi)',
      'President of Maharashtra Ayurved Sammelan and Vice president of Prabha Ayurved Foundation.',
    ], 
    imageUrl: '/speakers/speaker3.png', 
  },
  { 
    id: 4, 
    name: 'Vd. Tapan Kumar', 
    post: ['Traditional practitioner of Ayurvedic Medicine, Panch karma and Mantra therapy with 80 plus years'], 
    imageUrl: '/speakers/speaker4.png', 
  },
  { 
    id: 5, 
    name: 'Ashutosh Kulkarni', 
    post: [
      'MD shalyatantra.,Prof.& H.O.D', 
      'Ex CCIM Member.',
      'Practice in Jatharpeth, Akola',
    ], 
    imageUrl: '/speakers/speaker5.png', 
  },
  { 
    id: 6, 
    name: 'Dr Prasanna Rao', 
    post: ['Principle, SDM college of Ayurved & Hospital Hassan'], 
    imageUrl: '/speakers/speaker7.png', 
  },
  { 
    id: 7, 
    name: 'Dr Shekhar Annambhotla', 
    post: [
      '- Founding director of Association of Ayurvedic Professionals of North America',
      '- Director of Ojas Ayurveda Wellness Center, Pennsylvania',
      '- Director of Global Ayurveda Conferences',
      '- Director of Global Ayurveda Academy and Dosha Botanicals, LLC, Pennsylvania, USA.',
    ], 
    imageUrl: '/speakers/speaker10.png', 
  },
  { 
    id: 8, 
    name: 'Vd Harish Kumar Verma', 
    post: [
      'Renowned Ayurved Practitioner & Educator',
      'Director of "Best Ayurveda Ltd" at Brampton Ontario, Canada',
    ], 
    imageUrl: '/speakers/speaker11.png', 
  },
  { 
    id: 9, 
    name: 'Dr Rajanikant Patel', 
    post: [
      'Renowned Ayurved Practitioner & Educator',
      'Director of "Best Ayurveda Ltd" at Brampton Ontario, Canada',
    ], 
    imageUrl: '/speakers/speaker12.png', 
  },
  { 
    id: 10, 
    name: 'Dr P. Hemantha Kumar', 
    post: [
      'Professor & Head of Department of Surgery',
      'National Institute of Ayurved, Jaipur',
    ], 
    imageUrl: '/speakers/speaker13.png', 
  },
  { 
    id: 11, 
    name: 'Dr sanjay pokhrel', 
    post: ['Professor patanjali ayurveda medical college and research center'], 
    imageUrl: '/speakers/speaker14.png', 
  },
  { 
    id: 12, 
    name: 'Anurag Varshney', 
    post: ['Vice President and Head Drug Discovery, Patanjali Research Foundation'], 
    imageUrl: '/speakers/speaker15.png', 
  },
  { 
    id: 13, 
    name: 'Dr. Abhishek Gupta', 
    post: [' Founder of Ayurveda Federation of India (AFI)'], 
    imageUrl: '/speakers/speaker16.png', 
  },
  { 
    id: 14, 
    name: 'Dr Rohit Sane', 
    post: [
       'Founder and Managing Director Madhav baug-',
       "India's leading chain of cardiac clinics and Hospitals",
      ], 
    imageUrl: '/speakers/speaker17.png', 
  },
  { 
    id: 15, 
    name: 'Acharya Manish', 
    post: [' Ayurveda Expert Founder, Shuddhi, Jeena Sikho, Hospital and institute of Integrated medical sciences (HIIMS), Chandigarh, Punjab.'], 
    imageUrl: '/speakers/speaker18.png', 
  },
  { 
    id: 16, 
    name: 'Dr. Pradeep Kumar Sahu', 
    post: ['Sahu Lecturer - Curriculum development Center for medical science education Faculty of medical sciences University of West Indies'], 
    imageUrl: '/speakers/speaker19.png', 
  },
  { 
    id: 17, 
    name: 'Dr Suhas Kumar Shetty', 
    post: ['MD(Ayu), Ph.D is an Ayurveda practitioner, academician, researcher & administrator who is specialized in Mental health, research methodology and medical statistics'], 
    imageUrl: '/speakers/speaker20.png', 
  },
  { 
    id: 18, 
    name: 'Dr. Raghuram Bhatt', 
    post: ['President of NCISM (MARBISM) Govt. of India'], 
    imageUrl: '/speakers/speaker21.png', 
  },
  { 
    id: 19, 
    name: 'VAIDYA TAPANKUMAR. M.D.(AYU.)', 
    post: ['Traditional practitioner of Ayurvedic Medicine, Panch karma and Mantra therapy with 80 plus years'], 
    imageUrl: '/speakers/speaker22.png', 
  },
  { 
    id: 20, 
    name: 'Dr Ranjit Singh', 
    post: ['Researcher in Herbal Oncology @ Dr. Solankiz Cancer Care Surat, Gujarat,'], 
    imageUrl: '/speakers/speaker23.png', 
  },
  { 
    id: 21, 
    name: 'Dr Prasanna Kerur', 
    post: ['Associate Director | Ayurvedic Consultant/Physician at Ayush Wellness Spa | United Kingdom'], 
    imageUrl: '/speakers/speaker8.png', 
  },
];

