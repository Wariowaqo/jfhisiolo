
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useFadeIn from '../hooks/useFadeIn';
import { supabase } from '@/integrations/supabase/client';

const ContactPage: React.FC = () => {
  useFadeIn();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
        body: formData
      });

      if (emailError) throw emailError;

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
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <Navigation />
      
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
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
