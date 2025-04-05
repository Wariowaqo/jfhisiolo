
import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface DiseaseDetectionProps {
  isVisible: boolean;
  result?: {
    disease: string;
    confidence: number;
    crop: string;
  };
}

const DiseaseDetection: React.FC<DiseaseDetectionProps> = ({ 
  isVisible, 
  result 
}) => {
  if (!isVisible) return null;

  const getSeverityColor = (confidence: number) => {
    if (confidence > 0.8) return 'text-alert-high';
    if (confidence > 0.5) return 'text-alert-medium';
    return 'text-alert-low';
  };

  const getProgressColor = (confidence: number) => {
    if (confidence > 0.8) return 'bg-alert-high';
    if (confidence > 0.5) return 'bg-alert-medium';
    return 'bg-alert-low';
  };

  const getRecommendation = (disease: string) => {
    switch (disease) {
      case 'Early Blight':
        return "Apply copper-based fungicide and ensure proper plant spacing for air circulation.";
      case 'Late Blight':
        return "Immediately remove infected plants and apply fungicide to prevent spread.";
      case 'Bacterial Spot':
        return "Apply copper-based bactericide and avoid overhead irrigation.";
      default:
        return "Monitor the affected area and consider removing infected parts.";
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-white to-agroguardian-50 shadow-md">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="rounded-full p-2 bg-red-50 text-alert-high">
            <AlertTriangle className="h-6 w-6" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">
              {result?.disease || 'Unknown Disease'} Detected
            </h3>
            <p className="text-sm text-muted-foreground">
              {result?.crop || 'Plant'} | Analyzed on {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        
        <div className="space-y-2 px-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Detection Confidence</span>
            <span className={`text-sm font-bold ${getSeverityColor(result?.confidence || 0)}`}>
              {Math.round((result?.confidence || 0) * 100)}%
            </span>
          </div>
          <Progress 
            value={(result?.confidence || 0) * 100} 
            className="h-2"
            indicatorClassName={getProgressColor(result?.confidence || 0)}
          />
        </div>
        
        <div className="rounded-lg bg-white p-4 border border-agroguardian-100">
          <div className="flex gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-agroguardian-600" />
            <h4 className="font-medium">Recommended Action</h4>
          </div>
          <p className="text-sm">
            {getRecommendation(result?.disease || '')}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="px-6 py-4 border-t bg-white/50 flex flex-wrap gap-3 justify-between">
        <Button variant="outline" className="border-agroguardian-300 text-agroguardian-700">
          <CheckCircle className="mr-2 h-4 w-4" />
          Mark as Treated
        </Button>
        
        <Button className="bg-agroguardian-600 hover:bg-agroguardian-700">
          Detailed Report
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiseaseDetection;
