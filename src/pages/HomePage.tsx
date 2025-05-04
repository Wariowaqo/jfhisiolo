
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HandHeart, Wallet, User } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useFadeIn from '../hooks/useFadeIn';
import { Button } from '@/components/ui/button';

const HomePage: React.FC = () => {
  useFadeIn();
  
  useEffect(() => {
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
      
      <section
  className="relative min-h-[500px] pt-20 flex items-center justify-center"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(0,0,0,0.6)), url('/lovable-uploads/e744e3b8-6930-4922-923d-98edc5825a96.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
      >
        <div className="hero-content text-center text-white z-10">
          <h1 className="hero-title text-5xl text-primary font-bold mb-4">Empowering Lives, Inspiring Change</h1>
          <p className="hero-subtitle text-xl mb-8">Promoting health and unity through awareness walks and outreach in Isiolo.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center font-medium">
              Volunteer With Us
            </Link>
            <Link to="/projects" className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg shadow-lg hover:bg-primary/10 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center font-medium">
              Our Success Projects
            </Link>
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
      <section id="impact" className="impact-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 fade-in">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/projects" className="impact-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/a40176e2-64a1-44e2-b799-c2243442db58.png" 
                alt="Digital Inclusion Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Digital Inclusion at Isiolo School for the Deaf</h3>
                <p className="text-gray-600">Empowering deaf learners and training teachers on digital skills, creating an inclusive learning environment.</p>
              </div>
            </Link>
            
            <Link to="/projects" className="impact-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/caf7e5c0-2263-4e41-b608-78fb04e2d690.png" 
                alt="Supporting Girls' Education" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Supporting Girls' Education</h3>
                <p className="text-gray-600">Providing sanitary supplies and promoting menstrual hygiene to reduce school absenteeism among girls.</p>
              </div>
            </Link>
            
            <Link to="/projects" className="impact-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img 
                src="/lovable-uploads/f15f7109-b7bd-4738-bd28-26b8f7ae6f67.png" 
                alt="Anti-FGM Dinner" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Anti-FGM Dinner</h3>
                <p className="text-gray-600">Bringing together stakeholders and community leaders to commit to ending FGM in our county.</p>
              </div>
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
