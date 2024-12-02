import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Utensils className="text-blue-500" size={32} />
              <span className="text-2xl font-bold text-white">ComfortZone</span>
            </div>
            <p className="mb-4">
              Your trusted partner in commercial kitchen solutions. Quality, innovation, and reliability since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-500 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-500 transition">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2 text-blue-500" />
                123 Kitchen Street, Business District
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-500" />
                +1 234 567 890
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-500" />
                info@comfortzone.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ComfortZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;