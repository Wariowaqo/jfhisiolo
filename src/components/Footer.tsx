
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">Journey for Hope Isiolo</Link>
            <p>Empowering Lives, Inspiring Change</p>
            
            <div className="social-icons">
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="hover:text-primary transition-colors" />
              </a> */}
              <a href="https://x.com/jfhcbo?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/journeyforhopewalk?igsh=aGkwYWYxN2JkZGt2&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="hover:text-primary transition-colors" />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="hover:text-primary transition-colors" />
              </a> */}
              <a href="https://www.tiktok.com/@journeyforhopeisiolo?_t=ZM-8vN6J2XmKr1&_r=1" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                <Youtube className="hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/projects">Projects</Link></li>
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
          <p>&copy; {currentYear} Journey for Hope Isiolo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
