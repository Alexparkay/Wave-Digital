import React from 'react';
import { Users, Trophy, Target, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Features() {
  const features = [
    {
      Icon: Users,
      title: "Community Building",
      description: "Create an engaged surf community that follows your every wave.",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80"
    },
    {
      Icon: Trophy,
      title: "Brand Partnerships",
      description: "Connect with premium surf brands for sponsored opportunities.",
      image: "https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?auto=format&fit=crop&q=80"
    },
    {
      Icon: Target,
      title: "Content Strategy",
      description: "Data-driven content planning for maximum impact.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <feature.Icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}