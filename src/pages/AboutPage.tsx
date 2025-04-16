import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useFadeIn from '../hooks/useFadeIn';

const AboutPage: React.FC = () => {
  useFadeIn();
  
  return (
    <div className="page-container">
      <Navigation />
      
      {/* Main About Section */}
      <section className="about-main">
        <div className="container">
          <h1 className="fade-in">About Journey for Hope</h1>
          
          <div className="about-content">
            <div className="about-image fade-in">
              {/* Image of community work */}
              <img src="/placeholder.svg" alt="Community volunteers working together" />
            </div>
            
            <div className="about-text fade-in">
              <h2>Our Mission</h2>
              <p>
                Journey for Hope exists to build stronger, healthier communities through 
                organized walks, health education, and outreach programs. We believe that 
                physical activity combined with community support creates lasting positive change.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                We envision communities where health awareness is prioritized, where people 
                support each other through life's challenges, and where everyone has access 
                to resources for physical and mental well-being.
              </p>
              
              <h2>Core Values</h2>
              <ul>
                <li><strong>Inclusivity:</strong> We welcome everyone regardless of background or ability.</li>
                <li><strong>Community:</strong> We believe in the power of people coming together.</li>
                <li><strong>Education:</strong> We provide resources to help people make informed health decisions.</li>
                <li><strong>Support:</strong> We create networks that sustain long-term positive change.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our People Section */}
      <section className="our-people-section bg-secondary/20">
        <div className="container">
          <h2 className="fade-in">Our People</h2>
          <div className="people-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="team-member fade-in bg-white p-6 rounded-lg shadow-md">
              <div className="member-image w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3>Jane Smith</h3>
              <p className="text-primary font-medium">Executive Director</p>
              <p className="mt-2 text-gray-600">Leading our mission with 15 years of community service experience.</p>
            </div>
            
            <div className="team-member fade-in bg-white p-6 rounded-lg shadow-md">
              <div className="member-image w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3>Michael Johnson</h3>
              <p className="text-primary font-medium">Program Coordinator</p>
              <p className="mt-2 text-gray-600">Organizing impactful community events and health awareness programs.</p>
            </div>
            
            <div className="team-member fade-in bg-white p-6 rounded-lg shadow-md">
              <div className="member-image w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3>Sarah Williams</h3>
              <p className="text-primary font-medium">Community Liaison</p>
              <p className="mt-2 text-gray-600">Building bridges between communities and healthcare providers.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="fade-in">Our Journey</h2>
          
          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2015</h3>
                <p>Journey for Hope began with a small group of 20 participants organizing monthly awareness walks.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2017</h3>
                <p>Expanded to include education workshops and health screenings, reaching over 500 community members.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2019</h3>
                <p>Launched our youth program, introducing health awareness to schools and youth organizations.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2021</h3>
                <p>Established partnerships with local healthcare providers to offer comprehensive support services.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023</h3>
                <p>Celebrated our impact on over 5,000 individuals across multiple communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
