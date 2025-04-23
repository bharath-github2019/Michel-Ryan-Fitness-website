import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <h3 className="text-xl font-bold mb-4">MICHAEL RYAN</h3>
            <p className="text-gray-300 mb-4">
              Transforming lives through fitness for over 10 years. Join me on a journey to a healthier, 
              stronger you!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-red-500 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-red-500 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Try Workout</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Posture Correction</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Cardio Fitness</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Weight Training</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-500 transition-colors">Diet Planning</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-2 text-red-500 mt-1" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-red-500 mt-1" />
                <span className="text-gray-300">michael@ryanfitness.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-red-500 mt-1" />
                <span className="text-gray-300">123 Fitness Street, Gym City, 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Michael Ryan Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;