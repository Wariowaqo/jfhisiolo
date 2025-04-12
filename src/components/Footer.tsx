
import React from 'react';
import { Link } from 'react-router-dom';

// Footer component for all pages
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">Journey for Hope</Link>
            <p>Empowering Lives, Inspiring Change</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>Email: journeyforhopewalk@gmail.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Journey for Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
