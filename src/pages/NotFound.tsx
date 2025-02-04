import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-950 flex items-center justify-center px-4"
    >
      <div className="text-center">
        <h1 className="text-9xl font-bold text-yellow-400">404</h1>
        <p className="mt-4 text-2xl text-white">Lost in Space</p>
        <p className="mt-2 text-gray-400">The page you're looking for doesn't exist</p>
        <button
          onClick={() => navigate('/')}
          className="mt-8 inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <Home className="h-5 w-5" />
          <span>Back to Home</span>
        </button>
      </div>
    </motion.div>
  );
}