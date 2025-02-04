import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { events, pastEvents } from '../data/events';

export default function Event() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  const event = events.find(e => e.id === eventId);
  const previousEditions = pastEvents.filter(e => e.type === event?.type);

  if (!event) {
    return (
      <div className="pt-24 min-h-screen bg-slate-950 text-white text-center">
        <h1 className="text-2xl">Event not found</h1>
        <button
          onClick={() => navigate('/events')}
          className="mt-4 text-yellow-400 hover:text-yellow-300"
        >
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 min-h-screen bg-slate-950"
    >
      <div className="relative h-[60vh]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950"></div>
        <button
          onClick={() => navigate('/events')}
          className="absolute top-8 left-8 text-white hover:text-yellow-400 flex items-center space-x-2"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Events</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative">
        <div className="bg-slate-900 rounded-lg shadow-xl p-8">
          <div className="flex flex-wrap items-start justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold text-white mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-6 text-gray-300 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-yellow-400" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-yellow-400" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
                  Virtual Event
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{event.description}</p>
            </div>
            <div className="mt-6 lg:mt-0">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {previousEditions.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Previous Editions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {previousEditions.map((edition) => (
                <motion.div
                  key={edition.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-slate-800 rounded-lg overflow-hidden"
                >
                  <img
                    src={edition.image}
                    alt={edition.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{edition.title}</h3>
                    <p className="text-gray-300 mb-4">{edition.description}</p>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{edition.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}