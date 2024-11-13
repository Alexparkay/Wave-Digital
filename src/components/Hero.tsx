import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Waves } from 'lucide-react';

interface HeroProps {
  onConsultClick: () => void;
}

export function Hero({ onConsultClick }: HeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient">
        <div className="absolute inset-0 opacity-10 animated-gradient"></div>
      </div>
      
      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30">
        <div className="wave-animation relative h-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-[200%] h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  fill="#1e40af"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-container space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4"
          >
            <span className="text-sm font-medium text-blue-600">Transform Your Surfing Journey</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight hero-text-glow">
            Ride the <span className="gradient-text">Digital Wave</span> of Success
          </h1>
          
          <p className="text-lg text-blue-700 content-section">
            Transform your surfing passion into a thriving digital presence. 
            We help surf enthusiasts become influential content creators.
          </p>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onConsultClick}
              className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-lg font-bold text-lg text-white shadow-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
            >
              <span>Catch the Wave</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-2 text-blue-600"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                <span className="font-bold">1K+</span>
              </div>
              <span className="text-sm">Surfers Elevated</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 to-blue-300/10 rounded-3xl blur-3xl"></div>
          <div className="glass-card p-4 transform hover:scale-105 transition-transform duration-300 relative bg-white/80">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
              alt="Surfing Lifestyle"
              className="rounded-xl shadow-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur p-4 shadow-lg rounded-2xl border border-blue-100"
            >
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-blue-600">Surfers Elevated</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}