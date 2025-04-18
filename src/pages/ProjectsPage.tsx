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
          <h1 className="text-4xl font-bold text-center mb-12 fade-in">Our Impact Projects</h1>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            <Card className="fade-in overflow-hidden">
              <CardHeader className="bg-primary/10">
                <CardTitle>Anti-FGM Walk & Menstrual Health Initiative</CardTitle>
                <CardDescription>February 6, 2025 - International Day of Zero Tolerance for FGM</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/4596201c-fc91-4a47-ad7f-037ddf9a7f49.png" 
                    alt="Sanitary pads donation" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <img 
                    src="/lovable-uploads/207fe7ae-82cc-4380-86bd-8d12f250332a.png" 
                    alt="Community walk participants" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    On February 6, 2025, during the International Day of Zero Tolerance for Female Genital Mutilation (FGM), 
                    we organized a morning walk to donate menstrual hygiene products and got donations from every girls dream. 
                    The community's enthusiastic participation underscored our collective commitment to supporting girls' health and education.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Impact:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Successfully raised funds for sanitary pads donation to Isiolo Deaf School</li>
                      <li>Promoted menstrual hygiene awareness in the community</li>
                      <li>Reduced school absenteeism among girls</li>
                      <li>Created a platform for anti-FGM awareness</li>
                      <li>Built partnerships with local organizations and donors</li>
                    </ul>
                  </div>
                  <p>
                    This initiative reflects our dedication to empowering young women and fostering a future free from FGM through 
                    practical support and community engagement. By addressing both menstrual health and FGM awareness together, 
                    we've created a more holistic approach to girls' wellbeing.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="fade-in overflow-hidden">
              <CardHeader className="bg-primary/10">
                <CardTitle>Anti-FGM Dinner</CardTitle>
                <CardDescription>March 2025 - Building Partnerships to End FGM</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/c6df90b1-d1d4-453d-a8dd-effc0615a991.png" 
                    alt="Community exercises during walk" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <img 
                    src="/lovable-uploads/ed18f212-3df2-4407-8e12-e678fb4c6ad4.png" 
                    alt="Participants stretching" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    We hosted an Anti-FGM Dinner that brought together organizations, stakeholders and community leaders 
                    to discuss and commit to ending FGM in our county and beyond. It was a great opportunity to share ideas, 
                    strengthen partnerships and chart a way forward towards a future free from FGM.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Brought together over 20 organizations and community leaders</li>
                      <li>Facilitated dialogue between traditional elders and health professionals</li>
                      <li>Developed a collaborative action plan to address FGM in Isiolo county</li>
                      <li>Secured commitments from key stakeholders</li>
                      <li>Raised awareness about the health and social impacts of FGM</li>
                    </ul>
                  </div>
                  <p>
                    This dinner event marked a significant milestone in our efforts to end FGM by creating a space
                    for open dialogue and collaborative planning. By bringing together diverse stakeholders, we've
                    strengthened the community's resolve and capacity to tackle this issue effectively.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="fade-in overflow-hidden">
              <CardHeader className="bg-primary/10">
                <CardTitle>Digital Inclusion at Isiolo School for the Deaf</CardTitle>
                <CardDescription>April 2025 - Technology Access Initiative</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/a362addb-dc1d-468d-9e1f-fdf2e5af196f.png" 
                    alt="Digital skills training session" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <img 
                    src="/lovable-uploads/2f89871e-d5c1-46a8-b008-d4ab713743af.png" 
                    alt="Teacher training session" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    Journey for Hope, in partnership with NIDO, empowered deaf learners and trained teachers at Isiolo School 
                    for the Deaf on digital skills. The project also equipped the school with digital devices and sensitized 
                    teachers on promoting digital inclusion for learners with hearing impairment, creating a more inclusive and 
                    connected learning environment.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Project Highlights:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Provided digital devices including tablets and computers to the school</li>
                      <li>Conducted intensive digital skills training for both students and teachers</li>
                      <li>Developed customized learning resources for deaf students</li>
                      <li>Trained teachers on digital inclusion strategies for hearing impaired learners</li>
                      <li>Established ongoing technical support system</li>
                    </ul>
                  </div>
                  <p>
                    This initiative has significantly transformed the learning experience for deaf students by bridging the 
                    digital divide and providing them with tools and skills needed in today's digital world. The project 
                    exemplifies our commitment to inclusive education and ensuring no one is left behind in accessing 
                    technological opportunities.
                  </p>
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
