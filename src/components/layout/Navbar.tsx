import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white text-xl font-bold">
              <Dumbbell size={28} className="mr-2 text-red-600" />
              <span>MICHAEL RYAN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="text-white hover:text-red-500 font-medium" onClick={() => {}} />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container mx-auto px-4 pt-2 pb-4">
            <NavLinks 
              className="block py-3 text-white hover:text-red-500 font-medium border-b border-gray-800" 
              onClick={closeMenu}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  className: string;
  onClick: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ className, onClick }) => {
  const scrollToSection = (id: string) => {
    onClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a href="#home" className={className} onClick={() => scrollToSection('home')}>
        Home
      </a>
      <a href="#about" className={className} onClick={() => scrollToSection('about')}>
        About
      </a>
      <a href="#services" className={className} onClick={() => scrollToSection('services')}>
        Services
      </a>
      <a href="#book" className={className} onClick={() => scrollToSection('book')}>
        Book Online
      </a>
      <a href="#pricing" className={className} onClick={() => scrollToSection('pricing')}>
        Pricing
      </a>
      <a href="#contact" className={className} onClick={() => scrollToSection('contact')}>
        Contact
      </a>
      <Link to="/purchase-history" className={className} onClick={onClick}>
        Purchase History
      </Link>
    </>
  );
};

export default Navbar;