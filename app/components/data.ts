import { Event } from './event';
import eventimg from '@/assets/event.jpg'
import eventimg1 from "@/assets/parul.jpg"
import eventimg2 from "@/assets/event1.jpeg"
import image2g from '@/assets/img1.jpg'

export const events: Event[] = [

  {
    id: 1,
    name: 'Cosmos Mumbai led by Warden Protocol',
    date: '2024-07-28T14:00:00',
    time: '2:00 PM',
    venue: 'Lumos Cowork',
    organizer: 'Cosmoverse Dubai, Rhythm Jain & Warden',
    attendees: 241,
    imageUrl: eventimg,
    status: 'Completed',
    description: `An engaging blockchain event focused on the Cosmos network and its applications. 
                  Experts from Cosmoverse Dubai and Warden Protocol discussed the latest trends and 
                  advancements in decentralized technologies, with deep dives into Cosmos SDK and 
                  Tendermint.`,
    rules: [
      'Arrive on time for proper seating arrangements.',
      'Networking sessions are limited to 30 minutes.',
      'Ensure mobile devices are on silent during presentations.',
      'Strictly adhere to the event schedule.',
      'Attendees must carry identification for event registration.',
    ],
    host: 'Rhythm Jain',
    ticketPrice: 100,
  },
  {
    id: 2,
    name: 'Polygon Community Call',
    date: '2024-09-30T21:30:00',
    time: '9:30 PM',
    venue: 'Virtual',
    organizer: 'Cale Moody',
    attendees: 545,
    imageUrl: eventimg1,
    status: 'Invited',
    description: `An online meetup where the Polygon community gathers to discuss updates, future plans,
                  and partnerships related to the Polygon ecosystem. The call will feature insights 
                  from key team members and open Q&A sessions with the attendees.`,
    rules: [
      'Keep your microphone muted unless invited to speak.',
      'Participation is by invitation only.',
      'Questions must be submitted in advance for Q&A.',
      'Recording of the session is prohibited.',
      'Be respectful and avoid spamming the chat.',
    ],
    host: 'Cale Moody',
    ticketPrice: 10,
  },
  {
    id: 3,
    name: 'DevFest 2024',
    date: '2024-10-05T10:00:00',
    time: '10:00 AM',
    venue: 'Google HQ',
    organizer: 'Google Developers',
    attendees: 1021,
    imageUrl: eventimg2,
    status: 'Upcoming',
    description: `DevFest is a yearly event for developers to connect and share knowledge, 
                  especially around Google technologies like Android, Firebase, and Cloud. 
                  Attendees will enjoy keynotes from tech leaders, interactive coding sessions, 
                  and the opportunity to network with other developers.`,
    rules: [
      'Registration is mandatory for entry.',
      'No outside food or drink is allowed.',
      'Follow the event schedule closely for all sessions.',
      'Badges must be worn at all times within the venue.',
      'Recording of workshops without prior approval is prohibited.',
    ],
    host: 'Google Developers Team',
    ticketPrice: 250,
  },
  {
    id: 4,
    name: 'React Conference',
    date: '2024-10-15T09:00:00',
    time: '9:00 AM',
    venue: 'Virtual',
    organizer: 'React Community',
    attendees: 789,
    imageUrl: eventimg,
    status: 'Upcoming',
    description: `The React Conference 2024 brings together developers and enthusiasts from all 
                  over the world to discuss the latest updates in React and its ecosystem. 
                  Keynotes will cover topics like React Native, server-side rendering, and 
                  optimizing React apps for performance.`,
    rules: [
      'Keep your microphone muted during sessions.',
      'Do not interrupt speakers unless during Q&A sessions.',
      'Ensure you have stable internet to avoid disruptions.',
      'Participation certificates will be given to active attendees.',
      'Sessions will be recorded but can only be accessed by attendees.',
    ],
    host: 'React Community Organizers',
    ticketPrice: 400,
  },
  {
    id: 5,
    name: 'JS Conf 2023',
    date: '2023-09-15T09:00:00',
    time: '9:00 AM',
    venue: 'Virtual',
    organizer: 'JavaScript Enthusiasts',
    attendees: 890,
    imageUrl: eventimg1,
    status: 'Completed',
    description: `JS Conf 2023 focused on the latest trends in JavaScript, including frameworks like 
                  Next.js and Svelte. Attendees had the opportunity to engage in hands-on workshops 
                  and panel discussions, exploring everything from ES6 features to the future of 
                  JavaScript in AI development.`,
    rules: [
      'Questions must be submitted through the event platform.',
      'All workshops are first come, first served for limited spots.',
      'Attendees must register for each session separately.',
      'Sharing event access links is prohibited.',
      'Respect the presenters and avoid interruptions during presentations.',
    ],
    host: 'JavaScript Enthusiasts Organizers',
    ticketPrice: 300,
  },
  {
    id: 6,
    name: 'Hackathon 2023',
    date: '2023-08-20T10:00:00',
    time: '10:00 AM',
    venue: 'Lumos Cowork',
    organizer: 'Tech Hackers',
    attendees: 620,
    imageUrl: eventimg2,
    status: 'Completed',
    description: `Hackathon 2023 gathered talented developers and teams to create innovative projects 
                  in various tech domains. Participants had 48 hours to complete their projects, 
                  which were then evaluated by a panel of expert judges. Prizes were awarded to 
                  the top three teams based on innovation, feasibility, and impact.`,
    rules: [
      'Teams must consist of no more than 4 members.',
      'All projects must be submitted within 48 hours.',
      'Participants must adhere to ethical hacking standards.',
      'No pre-built codebases are allowed.',
      'Respect other participants and collaborate in a positive environment.',
    ],
    host: 'Tech Hackers Team',
    ticketPrice: 450,
  },
  {
    id: 7,
    name: 'Cosmos Mumbai led by Warden Protocol',
    date: '2024-07-28T14:00:00',
    time: '2:00 PM',
    venue: 'Lumos Cowork',
    organizer: 'Cosmoverse Dubai, Rhythm Jain & Warden',
    attendees: 241,
    imageUrl: eventimg,
    status: 'Completed',
    description: `An engaging blockchain event focused on the Cosmos network and its applications. 
                  Experts from Cosmoverse Dubai and Warden Protocol discussed the latest trends and 
                  advancements in decentralized technologies, with deep dives into Cosmos SDK and 
                  Tendermint.`,
    rules: [
      'Arrive on time for proper seating arrangements.',
      'Networking sessions are limited to 30 minutes.',
      'Ensure mobile devices are on silent during presentations.',
      'Strictly adhere to the event schedule.',
      'Attendees must carry identification for event registration.',
    ],
    host: 'Rhythm Jain',
    ticketPrice: 500,
  },
  {
    id: 8,
    name: 'Polygon Community Call',
    date: '2024-10-30T21:30:00',
    time: '9:30 PM',
    venue: 'Virtual',
    organizer: 'Cale Moody',
    attendees: 545,
    imageUrl: eventimg1,
    status: 'Upcoming',
    description: `An online meetup where the Polygon community gathers to discuss updates, future plans,
                  and partnerships related to the Polygon ecosystem. The call will feature insights 
                  from key team members and open Q&A sessions with the attendees.`,
    rules: [
      'Keep your microphone muted unless invited to speak.',
      'Participation is by invitation only.',
      'Questions must be submitted in advance for Q&A.',
      'Recording of the session is prohibited.',
      'Be respectful and avoid spamming the chat.',
    ],
    host: 'Cale Moody',
    ticketPrice: 450,
  },
  {
    id: 9,
    name: 'DevFest 2024',
    date: '2024-10-05T10:00:00',
    time: '10:00 AM',
    venue: 'Google HQ',
    organizer: 'Google Developers',
    attendees: 1021,
    imageUrl: eventimg2,
    status: 'Upcoming',
    description: `DevFest is a yearly event for developers to connect and share knowledge, 
                  especially around Google technologies like Android, Firebase, and Cloud. 
                  Attendees will enjoy keynotes from tech leaders, interactive coding sessions, 
                  and the opportunity to network with other developers.`,
    rules: [
      'Registration is mandatory for entry.',
      'No outside food or drink is allowed.',
      'Follow the event schedule closely for all sessions.',
      'Badges must be worn at all times within the venue.',
      'Recording of workshops without prior approval is prohibited.',
    ],
    host: 'Google Developers Team',
    ticketPrice: 150,
  },
  {
    id: 10,
    name: 'React Conference',
    date: '2024-10-15T09:00:00',
    time: '9:00 AM',
    venue: 'Virtual',
    organizer: 'React Community',
    attendees: 789,
    imageUrl: eventimg,
    status: 'Upcoming',
    description: `The React Conference 2024 brings together developers and enthusiasts from all 
                  over the world to discuss the latest updates in React and its ecosystem. 
                  Keynotes will cover topics like React Native, server-side rendering, and 
                  optimizing React apps for performance.`,
    rules: [
      'Keep your microphone muted during sessions.',
      'Do not interrupt speakers unless during Q&A sessions.',
      'Ensure you have stable internet to avoid disruptions.',
      'Participation certificates will be given to active attendees.',
      'Sessions will be recorded but can only be accessed by attendees.',
    ],
    host: 'React Community Organizers',
    ticketPrice: 1000,
  },
];