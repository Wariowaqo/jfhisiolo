
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import CameraCapture from '@/components/CameraCapture';
import DiseaseDetection from '@/components/DiseaseDetection';
import WeatherForecast from '@/components/WeatherForecast';
import AlertsPanel from '@/components/AlertsPanel';
import SubscriptionBanner from '@/components/SubscriptionBanner';

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState<{
    disease: string;
    confidence: number;
    crop: string;
  } | undefined>(undefined);
  
  const [showAnalysisResult, setShowAnalysisResult] = useState(false);

  useEffect(() => {
    const handleImageAnalyzed = (event: Event) => {
      const customEvent = event as CustomEvent;
      setAnalysisResult(customEvent.detail);
      setShowAnalysisResult(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('disease-results');
        resultsElement?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    window.addEventListener('imageAnalyzed', handleImageAnalyzed);
    
    return () => {
      window.removeEventListener('imageAnalyzed', handleImageAnalyzed);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Camera and Disease Detection */}
          <div className="lg:col-span-6 space-y-6">
            <CameraCapture />
            
            <div id="disease-results">
              <DiseaseDetection 
                isVisible={showAnalysisResult}
                result={analysisResult}
              />
            </div>
          </div>
          
          {/* Weather and Alerts */}
          <div className="lg:col-span-6 space-y-6">
            <WeatherForecast />
            <AlertsPanel />
          </div>
          
          {/* Premium Banner - Full Width */}
          <div className="lg:col-span-12">
            <SubscriptionBanner />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
