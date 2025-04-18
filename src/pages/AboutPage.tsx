import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useFadeIn from '../hooks/useFadeIn';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const AboutPage: React.FC = () => {
  useFadeIn();
  const [selectedPerson, setSelectedPerson] = useState<{
    name: string;
    role: string;
    statement: string;
  } | null>(null);
  
  const teamMembers = [
    {
      name: "Guyo Fugicha",
      role: "Co-Founder",
      statement: "At Journey for Hope (JFH), we prioritize health and well-being by promoting physical activity through community walks and raising awareness on important health issues. Founded with a vision to empower marginalized communities, especially youth and people with disabilities, we also provide access to education, digital skills and economic opportunities. Our mission is to create an inclusive, informed and healthier society where everyone has the chance to thrive."
    },
    {
      name: "Tadicha Roba",
      role: "Founder",
      statement: "With a passion for creating lasting social change, this co-founder brings a wealth of experience in grassroots development and community engagement. Their focus is on creating innovative solutions that address the unique challenges faced by marginalized groups, particularly in education and health. Through their leadership, Journey for Hope has been able to reach diverse communities, providing them with the resources and support needed to overcome barriers and lead healthier, more empowered lives."
    },
    {
      name: "Abduba Galgalo",
      role: "Co-Founder",
      statement: "As a co-founder of Journey for Hope, our team member plays a crucial role in shaping the organization's mission and vision. With a strong commitment to social inclusion and community empowerment, they are dedicated to improving the lives of marginalized communities. Focused on education, health and economic development, they work tirelessly to create opportunities for youth and individuals with disabilities, driving sustainable solutions and fostering positive change. Their leadership continues to inspire hope and transformation in every journey."
    },
    {
      name: "Shamsa Shurie",
      role: "Project Coordinator",
      statement: "Journey for Hope (JFH) is a community-driven initiative promoting health, awareness and sustainable development. As Project Coordinator, I oversee programs that empower youth, support climate action, and inspire positive change through local engagement."
    },
    {
      name: "Kristine Miano",
      role: "Co-Founder",
      statement: "At Journey for Hope (JFH), we believe every step tells a story — of healing, strength and transformation. As the Marketing Director, I'm proud to champion a movement that turns simple walks into powerful platforms for change. JFH brings people together through health walks, awareness campaigns, and community-driven projects that uplift youth, women, and underserved groups. Our work is rooted in purpose, powered by people and guided by Hope."
    }
  ];
  
  return (
    <div className="page-container">
      <Navigation />
      
      <section className="about-main pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 fade-in">About Journey for Hope Isiolo</h1>
          
          <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="about-image space-y-4 fade-in">
              <img 
                src="/lovable-uploads/ff8111eb-1040-41c6-87e8-4fd7080a3b98.png"
                alt="Community walk participants" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="/lovable-uploads/e744e3b8-6930-4922-923d-98edc5825a96.png"
                alt="Journey for Hope activities" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="about-text fade-in space-y-8">
              <h2>Our Mission</h2>
              <p className="mb-4">
                To inspire and mobilize individuals and communities through purposeful walks, 
                fostering hope, unity, and sustainable development in Isiolo by addressing key 
                social, environmental, and economic challenges.
              </p>
              
              <h2>Our Vision</h2>
              <p className="mb-4">
                A vibrant, empowered Isiolo community united in hope and actively contributing 
                to a brighter, healthier, and more equitable future for all.
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
      
      <section className="our-people-section bg-secondary/20 py-16">
        <div className="container">
          <h2 className="fade-in text-3xl font-bold mb-10 text-center">Our People</h2>
          <div className="people-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member fade-in bg-white p-6 rounded-lg shadow-md">
                <div className="member-image w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4">
                  {/* TODO: Add team member photos */}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600 line-clamp-3">{member.statement}</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSelectedPerson(member)}
                >
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedPerson} onOpenChange={(open) => !open && setSelectedPerson(null)}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedPerson?.name}</DialogTitle>
              <DialogDescription className="text-primary font-medium">{selectedPerson?.role}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p>{selectedPerson?.statement}</p>
            </div>
          </DialogContent>
        </Dialog>
      </section>
      
      <section className="timeline-section py-16">
        <div className="container">
          <h2 className="fade-in text-3xl font-bold mb-10 text-center">Our Journey</h2>
          
          <div className="timeline relative border-l-2 border-primary ml-4 md:ml-8 pl-8 space-y-12">
            <div className="timeline-item fade-in relative">
              <div className="timeline-dot absolute -left-[42px] w-6 h-6 rounded-full bg-primary"></div>
              <div className="timeline-content">
                <h3 className="text-xl font-bold">January 2025</h3>
                <p className="mt-2">Established Journey for Hope Isiolo as a community-driven initiative to promote health, awareness, and sustainable development in the Isiolo region.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in relative">
              <div className="timeline-dot absolute -left-[42px] w-6 h-6 rounded-full bg-primary"></div>
              <div className="timeline-content">
                <h3 className="text-xl font-bold">February 2025</h3>
                <p className="mt-2">Organized a morning walk on International Day of Zero Tolerance for FGM to raise awareness and donate menstrual hygiene products to the Isiolo Deaf School.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in relative">
              <div className="timeline-dot absolute -left-[42px] w-6 h-6 rounded-full bg-primary"></div>
              <div className="timeline-content">
                <h3 className="text-xl font-bold">March 2025</h3>
                <p className="mt-2">Hosted an Anti-FGM Dinner bringing together organizations, stakeholders, and community leaders to commit to ending FGM in Isiolo county and beyond.</p>
              </div>
            </div>
            
            <div className="timeline-item fade-in relative">
              <div className="timeline-dot absolute -left-[42px] w-6 h-6 rounded-full bg-primary"></div>
              <div className="timeline-content">
                <h3 className="text-xl font-bold">April 2025</h3>
                <p className="mt-2">Partnered with NIDO to empower deaf learners and train teachers at Isiolo School for the Deaf on digital skills, providing digital devices and promoting inclusion.</p>
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
