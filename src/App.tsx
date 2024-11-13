import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { ArrowRight } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-900 text-white relative">
      <div className="parallax-bg"></div>
      <div className="pattern-overlay"></div>
      <div className="bg-gradient-animate"></div>
      
      <header className="relative">
        <Navigation onConsultClick={() => setIsModalOpen(true)} />
        <Hero onConsultClick={() => setIsModalOpen(true)} />
      </header>

      <Features />

      {/* Guarantee Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-8"
          >
            Our Growth Guarantee
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-12 max-w-2xl mx-auto"
          >
            We're so confident in our ability to grow your platform that if we don't 10X your engagement in 3 months, you don't pay a dime.
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all inline-flex items-center space-x-2"
          >
            <span>Claim Your Guarantee</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.section>

      {/* Success Stories */}
      <section className="py-32 bg-gradient-to-b from-blue-800 to-blue-900">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jake Thompson",
                role: "Pro Surfer",
                image: "https://images.unsplash.com/photo-1513690277738-c9bc7eb2a992?auto=format&fit=crop&q=80",
                content: "Wave Digital transformed my social presence. Now I'm collaborating with top surf brands!"
              },
              {
                name: "Lisa Martinez",
                role: "Surf Instructor",
                image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80",
                content: "My surf school bookings tripled after implementing their content strategy."
              },
              {
                name: "Tom Wilson",
                role: "Surf Lifestyle Creator",
                image: "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?auto=format&fit=crop&q=80",
                content: "From 2K to 200K followers in just 3 months. Wave Digital knows their stuff!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-blue-100 mb-4">"{testimonial.content}"</p>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-200">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;