
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
      
      <section className="projects-section py-16 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 fade-in">Success Projects</h1>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="fade-in">
              <CardHeader>
                <CardTitle>Community Health Fair</CardTitle>
                <CardDescription>Annual health awareness event - 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-md">
                  {/* TODO: Add project image here - recommended size 1200x600px */}
                </div>
                <div className="space-y-4">
                  <p className="text-lg">Our annual health fair brought together healthcare providers and community members, offering free screenings and educational workshops.</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Served over 500 community members</li>
                      <li>Provided free health screenings</li>
                      <li>Conducted 10 educational workshops</li>
                      <li>Partnered with 15 local healthcare providers</li>
                    </ul>
                  </div>
                  <p>The event significantly improved healthcare access and awareness in our community, leading to better health outcomes and increased preventive care participation.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardHeader>
                <CardTitle>Youth Mentorship Program</CardTitle>
                <CardDescription>Empowering the next generation - Ongoing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-md">
                  {/* TODO: Add project image here - recommended size 1200x600px */}
                </div>
                <div className="space-y-4">
                  <p className="text-lg">Successfully paired 50 youth with mentors, creating lasting relationships and positive impact in our community.</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Program Highlights:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>50 mentor-mentee pairs established</li>
                      <li>Weekly mentoring sessions</li>
                      <li>Career guidance workshops</li>
                      <li>Academic support and tutoring</li>
                    </ul>
                  </div>
                  <p>The program has shown remarkable success with improved academic performance and increased confidence among participating youth.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardHeader>
                <CardTitle>Senior Wellness Initiative</CardTitle>
                <CardDescription>Supporting our elderly community - 2023-2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-md">
                  {/* TODO: Add project image here - recommended size 1200x600px */}
                </div>
                <div className="space-y-4">
                  <p className="text-lg">Weekly wellness checks and social activities for seniors, reducing isolation and improving health outcomes.</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Initiative Impact:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Regular visits to 100+ seniors</li>
                      <li>Weekly social activities and events</li>
                      <li>Health monitoring and support</li>
                      <li>Community connection programs</li>
                    </ul>
                  </div>
                  <p>This initiative has significantly reduced social isolation among seniors and improved their overall quality of life through regular engagement and support.</p>
                </div>
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
