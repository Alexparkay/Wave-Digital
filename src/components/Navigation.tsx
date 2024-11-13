import React from 'react';
import { motion } from 'framer-motion';
import { Waves } from 'lucide-react';

interface NavigationProps {
  onConsultClick: () => void;
}

export function Navigation({ onConsultClick }: NavigationProps) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-gradient-to-r from-blue-900/25 to-blue-800/25 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Waves className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold gradient-text">Wave Digital</span>
        </div>
        <button
          onClick={onConsultClick}
          className="glass-button"
        >
          Book Free Consultation
        </button>
      </div>
    </motion.nav>
  );
}