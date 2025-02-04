
import { Calendar, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  status: 'ongoing' | 'past' | 'upcoming';
}

export default function EventCard({ title, date, time, description, image, status }: EventCardProps) {
  const statusColors = {
    ongoing: 'bg-green-100 text-green-800',
    past: 'bg-gray-100 text-gray-800',
    upcoming: 'bg-blue-100 text-blue-800'
  };

  return (
    
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <div className="relative h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">{title}</h3>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
            <Clock className="h-4 w-4 ml-4 mr-1" />
            <span>{time}</span>
          </div>
          <p className="mt-3 text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    
  );
}