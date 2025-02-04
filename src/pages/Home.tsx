import { Telescope, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';

export default function Home() {
  const events = [
    {
      title: "Integration Bee 2025",
      date: "March 15, 2025",
      time: "2:00 PM",
      description: "Annual mathematics competition testing integration skills",
      image: "assets/event-5.jpeg",
      link: "/events/integration-bee-2025",
      status: "upcoming" as const
    },
    {
      title: "Stargazing Night",
      date: "March 10, 2024",
      time: "8:00 PM",
      description: "Join us for a night under the stars with telescopes and expert guidance",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
      link: "/events/stargazing-night",
      status: "ongoing" as const
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-950"
    >
      {/* Hero Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="/assets/bg.jpg"
            alt="Space background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-950"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Physics And Astronomy Club
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Join us in our journey through the stars. Discover the wonders of the universe
            through our events, workshops, and community of astronomy enthusiasts.
          </motion.p>
        </div>
      </motion.div>

      {/* What We Do Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            What We Do
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={item} className="space-y-6">
              <div className="flex items-start space-x-4">
                <Telescope className="h-8 w-8 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Observation Sessions</h3>
                  <p className="text-gray-400 mt-2">Regular stargazing events with professional equipment</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Calendar className="h-8 w-8 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Educational Events</h3>
                  <p className="text-gray-400 mt-2">Workshops, lectures, and competitions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Community Building</h3>
                  <p className="text-gray-400 mt-2">Connect with fellow astronomy enthusiasts</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item} className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="assets/event-1.jpeg"
                alt="Telescope"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Events
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={item}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-gray-400 py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Club Name */}
    <h3 className="text-2xl font-bold text-white mb-4">
      Physics And Astronomy Club
    </h3>

    {/* Address & Contact Info */}
    <div className="mb-6">
      <p className="text-gray-400">Student Activity Center (SAC), Room No. 116, Indian Institute of Technology Roorkee, Roorkee, Uttarakhand 247667</p>
      <p className="text-gray-400">Phone: (+91) 9850672970</p>
      <p className="text-gray-400">Email: paac@iitr.ac.in</p>
    </div>

    {/* Quick Links */}
    <div className="flex justify-center space-x-6 mb-6">
      <a href="/" className="hover:text-white">Home</a>
      <a href="/events" className="hover:text-white">Events</a>
      <a href="/contact" className="hover:text-white">Contact</a>
    </div>

    {/* Social Media Icons */}
    <div className="flex justify-center space-x-6 mb-4">
      <a href="#" className="hover:text-white" aria-label="Facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="hover:text-white" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="hover:text-white" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
    </div>

    {/* Copyright */}
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Physics And Astronomy Club. All rights reserved.
    </p>
  </div>
</footer>


    </motion.div>
  );
}