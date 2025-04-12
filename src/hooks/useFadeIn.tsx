
import { useEffect, useRef } from 'react';

// Custom hook to handle fade-in animations
const useFadeIn = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Function to handle intersection observations
    const handleIntersections = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };
    
    // Create new intersection observer
    observerRef.current = new IntersectionObserver(handleIntersections, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // When 10% of the element is visible
    });
    
    // Select all elements with the fade-in class and observe them
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });
    
    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  return null;
};

export default useFadeIn;
