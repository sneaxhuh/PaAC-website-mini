interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  description: string;
  image: string;
  status: 'ongoing' | 'past' | 'upcoming';
}

export const events: Event[] = [
  {
    id: 'integration-bee-2024',
    type: 'integration-bee',
    title: "Integration Bee 2024",
    date: "March 15, 2024",
    time: "2:00 PM",
    description: "PaAC brings you IITR’s own Integration Bee this year! Deriving inspiration from MIT’s Integration Bee, the tournament will be conducted by integrating the same spirit with our fun and quirky elements.",
    image: "/assets/event-5.jpeg",
    status: "past"
  },
  {
    id: 'Cosmic Voyage 2024',
    type: 'workshop',
    title: "Cosmic Voyage 2024",
    date: "March 10, 2023",
    time: "8:00 PM",
    description: "PaAC is back with Cosmic Voyage, our annual cosmic fiesta. With lectures from esteemed professors to open discussions and exciting quizzes, we have everything for your backyard astronomer and nerd!",
    image: "assets/event-4.jpeg",
    status: "ongoing"
  },
  {
    id: 'Astronomy Competition',
    type: 'competition',
    title: "Astronomy Competition",
    date: "March 20, 2023",
    time: "3:00 PM",
    description: "Our astrophotography competition is calling all cosmic clickers to showcase their stunning shots of starry skies and celestial wonders. Join us with your cameras out and let your lens lead you to victory!",
    image: "/assets/event-2.jpg",
    status: "upcoming"
  },
  {
    id: 'Telescope Handling',
    type: 'workshop',
    title: "Telecope Handling Workshop",
    date: "November 20, 2022",
    time: "3:00 PM",
    description: "Get the opportunity to have hands-on experience with a telescope. The workshop will include a brief session introducing basics of astronomy and telescopes followed by a hands-on session.",
    image: "/assets/event-1.jpeg",
    status: "upcoming"
  },
  {
    id: 'Quantum Computing',
    type: 'competition',
    title: "Many Body Quantum Theory Meets Quantum Computing",
    date: "October 20, 2022",
    time: "3:00 PM",
    description: "PaAC, together with the Quantum Computing Group brings you a series of student seminars on Many Body Quantum theory and its implications on the domain of Quantum Computation and Information.",
    image: "/assets/event-3.jpeg",
    status: "past"
  }
];

export const pastEvents: Event[] = [
  {
    id: 'integration-bee-2023',
    type: 'integration-bee',
    title: "Integration Bee 2023",
    date: "March 15, 2023",
    time: "2:00 PM",
    description: "Last year's exciting mathematics competition featuring over 100 participants from various universities.",
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80",
    status: "past"
  },
  {
    id: 'integration-bee-2022',
    type: 'integration-bee',
    title: "Integration Bee 2022",
    date: "March 15, 2022",
    time: "2:00 PM",
    description: "The 2022 edition of our annual mathematics competition with record-breaking participation.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
    status: "past"
  }
];