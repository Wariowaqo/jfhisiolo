
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Journey for Hope
          </Link>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto 
            ${isMenuOpen ? 'block' : 'hidden'} md:block bg-white md:bg-transparent 
            shadow-md md:shadow-none`}>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'text-primary font-semibold' : 'text-gray-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'text-primary font-semibold' : 'text-gray-600'}`}
              >
                About Us
              </Link>
              <Link 
                to="/projects" 
                className={`nav-link ${location.pathname === '/projects' ? 'text-primary font-semibold' : 'text-gray-600'}`}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'text-primary font-semibold' : 'text-gray-600'}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
