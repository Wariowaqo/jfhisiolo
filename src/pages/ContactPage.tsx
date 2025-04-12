
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import useFadeIn from '../hooks/useFadeIn';

// Contact page component
const ContactPage: React.FC = () => {
  // Initialize fade-in animations
  useFadeIn();
  
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Form submission would go here in a real application
    // For now, just show a success message
    toast({
      title: "Message Sent",
      description: "Thank you for contacting Journey for Hope. We'll respond shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="page-container">
      <Navigation />
      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h1 className="fade-in">Contact Us</h1>
          
          <p className="contact-intro fade-in">
            We'd love to hear from you! Whether you have questions about our programs, 
            want to volunteer, or are interested in supporting our mission, please reach out.
          </p>
          
          <div className="contact-content">
            <div className="contact-form-container fade-in">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="submit-btn">Send Message</Button>
              </form>
            </div>
            
            <div className="contact-info fade-in">
              <div className="contact-details">
                <h3>Get in Touch</h3>
                <p>Email: journeyforhopewalk@gmail.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Office Hours: Monday-Friday, 9am-5pm</p>
              </div>
              
              <div className="map-container">
                {/* Google Maps Placeholder - In a real app, you would use Google Maps API */}
                <div className="google-map-placeholder">
                  <img src="/placeholder.svg" alt="Map location" />
                  <p>Map Loading...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
