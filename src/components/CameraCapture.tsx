
import React, { useState } from 'react';
import { Camera, Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const CameraCapture = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const analyzeImage = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsAnalyzing(false);
      // Trigger custom event to notify parent component
      window.dispatchEvent(new CustomEvent('imageAnalyzed', { 
        detail: { 
          disease: 'Early Blight', 
          confidence: 0.87, 
          crop: 'Potato'
        } 
      }));
    }, 2000);
  };

  const resetImage = () => {
    setSelectedImage(null);
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0">
        <div className="px-6 py-4 bg-agroguardian-50 border-b">
          <h2 className="text-lg font-medium">Detect Plant Diseases</h2>
          <p className="text-sm text-muted-foreground">
            Take or upload a photo of your crops for instant AI analysis
          </p>
        </div>
        
        <div className={cn(
          "flex flex-col items-center justify-center p-6",
          "min-h-[300px] transition-all duration-300"
        )}>
          {selectedImage ? (
            <div className="space-y-4 w-full">
              <div className="relative w-full aspect-square max-w-xs mx-auto">
                <img 
                  src={selectedImage}
                  alt="Uploaded crop" 
                  className="w-full h-full object-cover rounded-md"
                />
                <Button 
                  size="icon" 
                  variant="destructive" 
                  className="absolute top-2 right-2"
                  onClick={resetImage}
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  onClick={analyzeImage} 
                  disabled={isAnalyzing}
                  className="bg-agroguardian-600 hover:bg-agroguardian-700"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent"></div>
                      Analyzing...
                    </>
                  ) : 'Analyze Image'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 w-full text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-agroguardian-100 flex items-center justify-center">
                <Camera className="h-8 w-8 text-agroguardian-600" />
              </div>
              
              <p className="text-sm max-w-sm mx-auto text-muted-foreground">
                Take a photo or upload an image of your plant to identify diseases
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-agroguardian-600 hover:bg-agroguardian-700"
                  onClick={triggerFileInput}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Photo
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-agroguardian-300 text-agroguardian-700"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Take Photo
                </Button>
              </div>
              
              <input 
                type="file" 
                ref={fileInputRef}
                accept="image/*" 
                className="hidden" 
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CameraCapture;
