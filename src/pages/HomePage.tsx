
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HandHeart, Wallet, User } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useFadeIn from '../hooks/useFadeIn';
import { Button } from '@/components/ui/button';

// Home page component
const HomePage: React.FC = () => {
  // Initialize fade-in animations
  useFadeIn();
  
  // Smooth scroll implementation
  useEffect(() => {
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="page-container">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Empowering Lives, Inspiring Change</h1>
          <p className="hero-subtitle">Promoting health and unity through awareness walks and outreach in Isiolo.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Volunteer</Link>
            <Link to="/projects" className="btn btn-secondary">Read Success Projects</Link>
          </div>
        </div>
      </section>
      
      {/* About Brief Section */}
      <section className="about-brief fade-in">
        <div className="container">
          <h2>About Journey for Hope Isiolo</h2>
          <p>
            Journey for Hope Isiolo is a community-driven initiative that brings people together 
            through organized walks and health awareness programs. We believe in the power 
            of community support to create positive change and promote well-being for all.
          </p>
        </div>
      </section>
      
      {/* Impact Section */}
      <section id="impact" className="impact-section">
        <div className="container">
          <h2 className="fade-in">Our Impact</h2>
          <div className="impact-cards">
            <Link to="/projects" className="impact-card fade-in hover:transform hover:scale-105 transition-transform">
              <div className="card-image"></div>
              <h3>Digital Inclusion at Isiolo School for the Deaf</h3>
              <p>Journey for Hope, in partnership with NIDO, empowered deaf learners and trained teachers at Isiolo School for the Deaf on digital skills, creating a more inclusive learning environment.</p>
            </Link>
            
            <Link to="/projects" className="impact-card fade-in hover:transform hover:scale-105 transition-transform">
              <div className="card-image"></div>
              <h3>Supporting Girls' Education</h3>
              <p>Funds raised from our community walk enabled us to donate sanitary pads to the Isiolo Deaf School, promoting menstrual hygiene and reducing school absenteeism among girls, empowering young women and fostering a future free from FGM.</p>
            </Link>
            
            <Link to="/projects" className="impact-card fade-in hover:transform hover:scale-105 transition-transform">
              <div className="card-image"></div>
              <h3>Anti-FGM Dinner</h3>
              <p>We hosted an Anti-FGM Dinner that brought together organizations, stakeholders and community leaders to discuss and commit to ending FGM in our county and beyond, sharing ideas and strengthening partnerships.</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Get Involved Section */}
      <section className="get-involved-section">
        <div className="container">
          <h2 className="fade-in">Get Involved</h2>
          <div className="involvement-options">
            <div className="involvement-option fade-in">
              <HandHeart size={48} className="involvement-icon" />
              <h3>Participate</h3>
              <p>Join our walks and events to show your support and be part of our growing community.</p>
              <Link to="/contact">
                <Button variant="secondary" className="mt-4">Learn More</Button>
              </Link>
            </div>
            
            <div className="involvement-option fade-in">
              <Wallet size={48} className="involvement-icon" />
              <h3>Donate</h3>
              <p>Support our mission with a contribution that helps fund our outreach programs.</p>
              <Link to="/contact">
                <Button variant="secondary" className="mt-4">Donate Now</Button>
              </Link>
            </div>
            
            <div className="involvement-option fade-in">
              <User size={48} className="involvement-icon" />
              <h3>Volunteer</h3>
              <p>Share your time and skills to help organize and manage our community events.</p>
              <Link to="/contact">
                <Button variant="secondary" className="mt-4">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
