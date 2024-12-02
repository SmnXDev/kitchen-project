import React from 'react';
import { Menu, X, ChevronDown, Utensils } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Utensils className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">ComfortZone</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <NavLinks mobile />
            <Link
              to="/contact"
              className="block w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition mt-4 text-center"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const location = useLocation();
  const baseClasses = mobile
    ? "flex flex-col space-y-4"
    : "flex items-center space-x-8";

  const getLinkClass = (path: string) => {
    const baseClass = "transition";
    const isActive = location.pathname === path;
    return `${baseClass} ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`;
  };

  return (
    <div className={baseClasses}>
      <Link to="/" className={getLinkClass('/')}>Home</Link>
      <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
      <Link to="/services" className={getLinkClass('/services')}>Services</Link>
      <Link to="/portfolio" className={getLinkClass('/portfolio')}>Our Work</Link>
      <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
    </div>
  );
};

export default Header;