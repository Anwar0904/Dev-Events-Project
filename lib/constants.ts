export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "Blockchain Developers Meetup",
    slug: "blockchain-developers-meetup",
    location: "Islamabad Tech Park",
    date: "12 March 2026",
    time: "4:00 PM",
  },
  {
    image: "/images/event2.png",
    title: "Web3 Hackathon",
    slug: "web3-hackathon",
    location: "Lahore Innovation Hub",
    date: "20 March 2026",
    time: "9:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "AI & Future Tech Conference",
    slug: "ai-future-tech-conference",
    location: "Karachi Expo Center",
    date: "5 April 2026",
    time: "10:30 AM",
  },
  {
    image: "/images/event4.png",
    title: "Startup Pitch Night",
    slug: "startup-pitch-night",
    location: "Peshawar Business Center",
    date: "15 April 2026",
    time: "6:00 PM",
  },
  {
    image: "/images/event5.png",
    title: "Open Source Coding Workshop",
    slug: "open-source-coding-workshop",
    location: "Faisalabad IT Institute",
    date: "25 April 2026",
    time: "2:00 PM",
  },
  {
    image: "/images/event6.png",
    title: "Cybersecurity Awareness Seminar",
    slug: "cybersecurity-awareness-seminar",
    location: "Quetta University",
    date: "2 May 2026",
    time: "11:00 AM",
  },
];

