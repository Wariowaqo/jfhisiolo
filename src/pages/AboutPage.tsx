
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useFadeIn from '../hooks/useFadeIn';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutPage: React.FC = () => {
  useFadeIn();
  const [selectedPerson, setSelectedPerson] = useState<{
    name: string;
    role: string;
    statement: string;
    image?: string;
  } | null>(null);
  
  const teamMembers = [
    {
      name: "Tadicha Roba",
      role: "Founder",
      image: "/lovable-uploads/efe2658c-fdf1-40ff-a0e6-5dc6d9de87b0.png",
      statement: "With a passion for creating lasting social change, this co-founder brings a wealth of experience in grassroots development and community engagement. Their focus is on creating innovative solutions that address the unique challenges faced by marginalized groups, particularly in education and health. Through their leadership, Journey for Hope has been able to reach diverse communities, providing them with the resources and support needed to overcome barriers and lead healthier, more empowered lives."
    },
    {
      name: "Guyo Fugicha",
      role: "Co-Founder",
      image: "/lovable-uploads/d57dbb59-2382-471d-923d-802683a6d1d7.png",
      statement: "At Journey for Hope (JFH), we prioritize health and well-being by promoting physical activity through community walks and raising awareness on important health issues. Founded with a vision to empower marginalized communities, especially youth and people with disabilities, we also provide access to education, digital skills and economic opportunities. Our mission is to create an inclusive, informed and healthier society where everyone has the chance to thrive."
    },
    {
      name: "Shamsa Shurie",
      role: "Project Coordinator",
      image: "/lovable-uploads/1a670e6b-bb2c-449e-970f-978176a20181.png",
      statement: "Journey for Hope (JFH) is a community-driven initiative promoting health, awareness and sustainable development. As Project Coordinator, I oversee programs that empower youth, support climate action, and inspire positive change through local engagement."
    },
    {
      name: "Kristine Miano",
      role: "Co-Founder",
      image: "/lovable-uploads/b70446b6-dc20-4680-b8d9-f9c9aa9514b3.png",
      statement: "At Journey for Hope (JFH), we believe every step tells a story — of healing, strength and transformation. As the Marketing Director, I'm proud to champion a movement that turns simple walks into powerful platforms for change. JFH brings people together through health walks, awareness campaigns, and community-driven projects that uplift youth, women, and underserved groups. Our work is rooted in purpose, powered by people and guided by Hope."
    },
    {
      name: "Abduba Galgalo",
      role: "Co-Founder",
      image: "/lovable-uploads/616452f9-c80f-4ee1-8175-907e38d86a26.png",
      statement: "As a co-founder of Journey for Hope, our team member plays a crucial role in shaping the organization's mission and vision. With a strong commitment to social inclusion and community empowerment, they are dedicated to improving the lives of marginalized communities. Focused on education, health and economic development, they work tirelessly to create opportunities for youth and individuals with disabilities, driving sustainable solutions and fostering positive change. Their leadership continues to inspire hope and transformation in every journey."
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
              <div key={index} className="team-member fade-in bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="member-image w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-primary font-medium text-center">{member.role}</p>
                <p className="mt-2 text-gray-600 line-clamp-3">{member.statement}</p>
                <div className="text-center mt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedPerson(member)}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedPerson} onOpenChange={(open) => !open && setSelectedPerson(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              {selectedPerson?.image && (
                <div className="w-24 h-24 mx-auto mb-4">
                  <Avatar className="w-full h-full">
                    <AvatarImage src={selectedPerson.image} alt={selectedPerson.name} className="object-cover" />
                    <AvatarFallback>{selectedPerson.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
              )}
              <DialogTitle className="text-center">{selectedPerson?.name}</DialogTitle>
              <DialogDescription className="text-primary font-medium text-center">{selectedPerson?.role}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-gray-700 leading-relaxed">{selectedPerson?.statement}</p>
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
