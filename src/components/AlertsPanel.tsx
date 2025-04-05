
import React from 'react';
import { 
  AlertTriangle, 
  ArrowRightCircle,
  CloudRain,
  ThermometerSun,
  Droplets,
  Bug
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Alert {
  id: string;
  type: 'disease' | 'weather' | 'pest' | 'drought';
  severity: 'low' | 'medium' | 'high';
  message: string;
  recommendation: string;
  timeframe: string;
  icon: React.ReactNode;
}

const AlertsPanel = () => {
  // Mock alerts data - in production would come from backend
  const alerts: Alert[] = [
    {
      id: 'a1',
      type: 'weather',
      severity: 'high',
      message: 'Heavy rain expected in the next 24 hours',
      recommendation: 'Apply fungicide to wheat crops to prevent rust infection',
      timeframe: 'Next 24 hours',
      icon: <CloudRain className="h-5 w-5" />
    },
    {
      id: 'a2',
      type: 'disease',
      severity: 'medium',
      message: 'Early signs of powdery mildew detected on maize',
      recommendation: 'Apply targeted fungicide and monitor spread',
      timeframe: 'Within 48 hours',
      icon: <Bug className="h-5 w-5" />
    },
    {
      id: 'a3',
      type: 'drought',
      severity: 'low',
      message: 'Moderate drought conditions developing',
      recommendation: 'Consider supplemental irrigation for vulnerable crops',
      timeframe: 'Next 7 days',
      icon: <ThermometerSun className="h-5 w-5" />
    },
  ];

  const getSeverityClass = (severity: Alert['severity']) => {
    switch (severity) {
      case 'high':
        return 'bg-alert-high text-white';
      case 'medium':
        return 'bg-alert-medium text-white';
      case 'low':
        return 'bg-alert-low text-black';
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="bg-agroguardian-50 pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-medium">Risk Alerts</CardTitle>
            <CardDescription>
              AI-powered risk analysis based on weather and crop conditions
            </CardDescription>
          </div>
          <div className="rounded-full bg-alert-high/10 p-2">
            <AlertTriangle className="h-5 w-5 text-alert-high" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        {alerts.length === 0 ? (
          <div className="p-6 text-center text-muted-foreground">
            <p>No active alerts at the moment.</p>
          </div>
        ) : (
          <ul className="divide-y">
            {alerts.map((alert) => (
              <li key={alert.id} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    'rounded-full p-2 flex-shrink-0',
                    getSeverityClass(alert.severity)
                  )}>
                    {alert.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">{alert.message}</h4>
                      <span className={cn(
                        'text-xs px-2 py-0.5 rounded-full',
                        getSeverityClass(alert.severity)
                      )}>
                        {alert.severity}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {alert.recommendation}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-agroguardian-700 bg-agroguardian-100 px-2 py-1 rounded-full">
                        Timeframe: {alert.timeframe}
                      </p>
                      
                      <button className="text-xs flex items-center text-agroguardian-700 hover:text-agroguardian-800">
                        View Details
                        <ArrowRightCircle className="ml-1 h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
