import { Event, Team, Head, Payment } from './event';
import eventimg from '@/assets/event.jpg';
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
    category: 'Conference', // Added category
    date: '2024-10-24T00:00:00',
    time: 'Time Will be announced on the Day of Conference',
    lastDate: '2024-10-19T00:00:00',
    venue: 'PIA, Parul University',
    organizer: 'Parul Institute of Ayurved, Parul University',
    imageUrl: eventimg,
    paymentQR: eventimg,
    status: 'Upcoming',
    description: [
      'AyurQuiz Pre Screening rounds will be finalized till 24th October 2024, (Thursday).',
      'Final AyurQuiz On Stage round will be conducted on the day of the conference.',
      'Dates: November 16th & 17th, 2024, Final Round (Offline).',
      'Time: Will be announced on the Day of Conference.',
      'Venue: PIA, Parul University.',
      'Last Date for Registration: 19/10/2024.',
      'Registration Fee: 99/-Rs, per participant.',
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
    ticketPrice: [
      '1st Prize: 3000/- Rs.',
      '2nd Prize: 2000/- Rs.',
      '3rd Prize: 1000/- Rs.',
    ],
    prizes: [
      '1st Prize: 3000/- Rs.',
      '2nd Prize: 2000/- Rs.',
      '3rd Prize: 1000/- Rs.',
    ],
    contactinfo: [
      'For further details and registration, please contact:',
      'Dr. Krishna Rathod: krishna.rathod34716@paruluniversity.ac.in, Phone: 7276763413.',
      'Dr. Manuprasad K S: manuprasad.s86269@paruluniversity.ac.in, Phone: 7204276809.',
    ],
    paymentDetails: [
      'Bank Name: Central Bank of India',
      'AC Name: Parul University',
      'AC Number: 3434915719',
      'IFSC Code: CBIN0284063',
      'Branch Name: Parul Institute of Engineering and Technology, Limda, Waghodia, Vadodara, Gujarat 391760',     
    ],

  },
  // {
  //   id: 2,
  //   name: 'AYURVIMARSHA AYURQUIZ 2025',
  //   category: 'Conference', // Added category
  //   date: '2024-10-24T00:00:00',
  //   time: 'Time Will be announced on the Day of Conference',
  //   lastDate: '2024-10-24T00:00:00',
  //   venue: 'PIA, Parul University',
  //   organizer: 'Parul Institute of Ayurved, Parul University',
  //   imageUrl: eventimg,
  //   paymentQR: eventimg,
  //   status: 'Upcoming',
  //   description: [
  //     'AyurQuiz Pre Screening rounds will be finalized till 24th October 2024, (Thursday).',
  //     'Final AyurQuiz On Stage round will be conducted on the day of the conference.',
  //     'Dates: November 16th & 17th, 2024, Final Round (Offline).',
  //     'Time: Will be announced on the Day of Conference.',
  //     'Venue: PIA, Parul University.',
  //     'Registration:',
  //     'Last Date for Registration: 19/10/2024.',
  //     'Registration Fee: 99/-Rs, per participant.',
  //     'Registration Link/Form: https://forms.gle/93boTi3ah4Vt4NsF7.',
  //     'Participation:',
  //     'Open to all students (UG, PG, and Interns) of Ayurvedic colleges and institutions across India.',
  //     'Each college can send a team of students including 2 Participants, 2 Backup Participants & One Mentor.',
  //     'Multiple entries from one college will be allowed for screening rounds.',
  //     'Participation certificates will be provided to all participants.',
  //     'We look forward to your enthusiastic participation in this enriching event.',
  //     'Best regards.'
  //   ],
  //   rules: [
  //     'Preliminary round :',
  //     'Those registered team of participants will be given a set of question paper containing 50 multiple choice objective type questions by G forms and Link will be shared to the registered teams participants through their Registered Email id and same information will be conveyed to Mentors also.',
  //     'The following rules will be application for the preliminary round.',
  //     '   Time limit: 45 minutes.',
  //     '   Each question will carry 1 mark.',
  //     '   The selected teams shall have to appear for the final round.',
  //     'Final Ayurquiz  on stage round:',
  //     'Further instructions regarding the final rounds will be given to the Selected Team of Participants.'
  //   ],
  //   host: 'Dr.Hemant Toshikhane',
  //   ticketPrice: '99/-Rs, for Per Participants',
  //   prizes: [
  //     '1st Prize: 3000/- Rs.',
  //     '2nd Prize: 2000/- Rs.',
  //     '3rd Prize: 1000/- Rs.',
  //   ],
  //   contactinfo: [
  //     'For further details and registration, please contact:',
  //     'Dr. Krishna Rathod: krishna.rathod34716@paruluniversity.ac.in, Phone: 7276763413.',
  //     'Dr. Manuprasad K S: manuprasad.s86269@paruluniversity.ac.in, Phone: 7204276809.',
  //   ],
  // },
  
];

export const teammember: Team[] = [
  {
    id: 1,
    name: "Dr.Devanshu J Patel",
    post: "President",
    image: president,
  }, 
  {
    id: 2,
    name: "Dr.Parul Patel",
    post: "Vice President",
    image: vise_president,
  },  
  {
    id: 3,
    name: "Dr.Geetika M Patel,",
    post: "Vice President & Trustee",
    image: trustee,
  } , 
  {
    id: 4,
    name: "Dr.Komal Patel",
    post: "Vice President & Medical Director",
    image: medical_director,
  },
]

export const depthead: Head[] = [
  {
    id: 1,
    name: "Dr.Hemant Thoshikhane",
    post: "Dean, Faculty of Ayurveda",
    image: dean,
  },
  {
    id: 2,
    name: "Dr.Bhagwan G kulkarni",
    post: "Principal of Ayurveda & Research",
    image: principal,
  },
]

export const payment: Payment[] = [
  {
    paymentDetails: [
      'Bank Name: Central Bank of India',
      'AC Name: Parul University',
      'AC Number: 3434915719',
      'IFSC Code: CBIN0284063',
      'Branch Name: Parul Institute of Engineering and Technology, Limda, Waghodia, Vadodara, Gujarat 391760',     
    ],
  },
]