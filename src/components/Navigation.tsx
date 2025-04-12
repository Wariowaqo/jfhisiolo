
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Navigation component for all pages
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Add background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`main-navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">Journey for Hope</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
