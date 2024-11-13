import React from 'react';
import { Waves, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Waves className="w-6 h-6" />
            <span className="font-bold">Wave Digital</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com/wavedigital" className="hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/wavedigital" className="hover:text-blue-400">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:contact@wavedigital.com" className="hover:text-blue-400">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+1234567890" className="hover:text-blue-400">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}