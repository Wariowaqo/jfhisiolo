
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import useFadeIn from '../hooks/useFadeIn';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsPage: React.FC = () => {
  useFadeIn();

  return (
    <div className="page-container">
      <Navigation />
      
      <section className="projects-section py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 fade-in">Success Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TODO: Add your project images and details */}
            <Card className="fade-in">
              <CardHeader>
                <CardTitle>Community Health Fair</CardTitle>
                <CardDescription>Annual health awareness event</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gray-200 mb-4 rounded-md">
                  {/* TODO: Add project image here */}
                </div>
                <p>Our annual health fair brought together healthcare providers and community members, offering free screenings and educational workshops.</p>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardHeader>
                <CardTitle>Youth Mentorship Program</CardTitle>
                <CardDescription>Empowering the next generation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gray-200 mb-4 rounded-md">
                  {/* TODO: Add project image here */}
                </div>
                <p>Successfully paired 50 youth with mentors, creating lasting relationships and positive impact in our community.</p>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardHeader>
                <CardTitle>Senior Wellness Initiative</CardTitle>
                <CardDescription>Supporting our elderly community</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gray-200 mb-4 rounded-md">
                  {/* TODO: Add project image here */}
                </div>
                <p>Weekly wellness checks and social activities for seniors, reducing isolation and improving health outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
